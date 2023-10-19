---
title: 企业级在线办公套件——OnlyOffice Workspace 部署使用
date: 2023-10-18
isShowComments: false
author: Cleaner
categories: 
 - 后端
tags: 
 - 工作
---

> 本文主要介绍使用 Docker 部署 OnlyOffice Workspace（包括 Community Server、Control Panel、Document Server） 的详细步骤。
> 
> OnlyOffice 版本：7.4.1（目前最新版本）
>
> [官网地址](https://www.onlyoffice.com/zh/)

## 前言

OnlyOffice Workspace 是一个开源免费的企业级办公套件，由文档服务（Document Server）、控制面板（Control Panel）、社区服务（Community Server）和邮件服务（Mail Server）四个组件构成，提供了文档管理、项目管理、成员、邮件、日历和推送等功能。支持私有化部署，企业内部使用，保证数据安全。

## 部署

本文不涉及邮件服务（Mail Server）的部署，如有需要，请参考[官方部署文档](https://helpcenter.onlyoffice.com/installation/workspace-install-docker-integrated.aspx)。

### 服务器要求

服务器空闲内存至少要 8GB，Community Server 服务依赖 Elasticsearch，内存不足会导致 Elasticsearch 服务启动失败。本人实际搭建 OnlyOffice Workspace，内存总共消耗 10GB 左右。

|      | 配置                             |
| ---- | ------------------------------ |
| CPU  | 最低 4 核，推荐 6 核                  |
| 内存   | 最低 8GB，推荐 12GB                 |
| 磁盘   | 40 GB                          |
| 操作系统 | Linux amd64 架构，内核 3.10 版本及之后版本 |

### 创建网络

```sh
docker network create --driver bridge onlyoffice
```
### MySQL

1.  创建挂载目录。

```sh
sudo mkdir -p "/app/onlyoffice/mysql/conf.d";
sudo mkdir -p "/app/onlyoffice/mysql/data";
sudo mkdir -p "/app/onlyoffice/mysql/initdb";
```
2\.  创建配置文件。

```sh
echo "[mysqld]
sql_mode = 'NO_ENGINE_SUBSTITUTION'
max_connections = 1000
max_allowed_packet = 1048576000
group_concat_max_len = 2048" > /app/onlyoffice/mysql/conf.d/onlyoffice.cnf
```

3\.  创建脚本文件。

```sh
echo "ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'my-secret-pw';
CREATE USER IF NOT EXISTS 'onlyoffice_user'@'%' IDENTIFIED WITH mysql_native_password BY 'onlyoffice_pass';
CREATE USER IF NOT EXISTS 'mail_admin'@'%' IDENTIFIED WITH mysql_native_password BY 'Isadmin123';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';
GRANT ALL PRIVILEGES ON *.* TO 'onlyoffice_user'@'%';
GRANT ALL PRIVILEGES ON *.* TO 'mail_admin'@'%';
FLUSH PRIVILEGES;" > /app/onlyoffice/mysql/initdb/setup.sql
```
4\.  启动容器，映射端口可以根据情况调整。

```sh
sudo docker run --net onlyoffice -i -t -d -p 3306:3306 --restart=always --name onlyoffice-mysql-server \
-v /app/onlyoffice/mysql/conf.d:/etc/mysql/conf.d \
-v /app/onlyoffice/mysql/data:/var/lib/mysql \
-v /app/onlyoffice/mysql/initdb:/docker-entrypoint-initdb.d \
-e MYSQL_ROOT_PASSWORD=my-secret-pw \
-e MYSQL_DATABASE=onlyoffice \
mysql:8.0.29
```
### Document Server

[Document Server](https://github.com/ONLYOFFICE/DocumentServer) （6.0 版本之后更名为 OnlyOffice Docs）是一个功能强大的在线文档编辑和协作平台，允许用户在 Web 浏览器中操作各种文档（Word、Excel、PPT 等）。支持单独部署，集成到已有项目中。

*   支持多种文档格式，如 .docx、.xlsx、.pptx 等。
*   支持同一文档实时协作与共享，多个用户可以同时编辑文档。
*   支持私有化部署，相比市面上的在线文档，用户能够完全掌控数据安全，实现自主托管和数据隐私控制。

1.  创建挂载目录。

```sh
sudo mkdir -p "/app/onlyoffice/DocumentServer/data";
sudo mkdir -p "/app/onlyoffice/DocumentServer/logs";
```
2\.  启动容器。`JWT_SECRET`用来配置密钥。

```sh
sudo docker run --net onlyoffice -i -t -d --restart=always --name onlyoffice-document-server  -e JWT_SECRET=my_jwt_secret  \
-v /app/onlyoffice/DocumentServer/logs:/var/log/onlyoffice  \
-v /app/onlyoffice/DocumentServer/data:/var/www/onlyoffice/Data  \
-v /app/onlyoffice/DocumentServer/fonts:/usr/share/fonts/truetype/custom \
-v /app/onlyoffice/DocumentServer/forgotten:/var/lib/onlyoffice/documentserver/App_Data/cache/files/forgotten onlyoffice/documentserver
```
### Control Panel

[Control Panel](https://github.com/ONLYOFFICE/ControlPanel) 提供了丰富的功能用来快速配置和管理 Workspace，包括 LDAP 和 SSO 配置、HTTPS 配置、查看登陆日志和用户操作日志等功能。

1.  创建挂载目录

```sh
sudo mkdir -p "/app/onlyoffice/ControlPanel/data";
sudo mkdir -p "/app/onlyoffice/ControlPanel/logs";
```
2\.  启动容器

```sh
docker run --net onlyoffice -i -t -d --restart=always --name onlyoffice-control-panel \ 
-v /var/run/docker.sock:/var/run/docker.sock \ 
-v /app/onlyoffice/CommunityServer/data:/app/onlyoffice/CommunityServer/data \ 
-v /app/onlyoffice/ControlPanel/data:/var/www/onlyoffice/Data \ 
-v /app/onlyoffice/ControlPanel/logs:/var/log/onlyoffice onlyoffice/controlpanel
```
### Community Server

[Community Server ](https://github.com/ONLYOFFICE/CommunityServer)是一个开源的协作平台，包括文档管理、项目管理、邮件管理、成员管理等功能。

1.  创建挂载目录。

```sh
sudo mkdir -p "/app/onlyoffice/CommunityServer/data";
sudo mkdir -p "/app/onlyoffice/CommunityServer/logs";
sudo mkdir -p "/app/onlyoffice/CommunityServer/letsencrypt";
```
2\.  启动容器。配置信息可以根据情况调整（映射端口，MySQL 配置信息）

```sh
sudo docker run --net onlyoffice -i -t -d --privileged --restart=always --name onlyoffice-community-server -p 9101:80 -p 5222:5222 --cgroupns=host \
-e MYSQL_SERVER_ROOT_PASSWORD=my-secret-pw \
-e MYSQL_SERVER_DB_NAME=onlyoffice \
-e MYSQL_SERVER_HOST=onlyoffice-mysql-server \
-e MYSQL_SERVER_USER=onlyoffice_user \
-e MYSQL_SERVER_PASS=onlyoffice_pass \
-e DOCUMENT_SERVER_PORT_80_TCP_ADDR=onlyoffice-document-server \
-e CONTROL_PANEL_PORT_80_TCP=80 \
-e CONTROL_PANEL_PORT_80_TCP_ADDR=onlyoffice-control-panel \
-v /app/onlyoffice/CommunityServer/data:/var/www/onlyoffice/Data \
-v /app/onlyoffice/CommunityServer/logs:/var/log/onlyoffice \
-v /app/onlyoffice/CommunityServer/letsencrypt:/etc/letsencrypt \
-v /sys/fs/cgroup:/sys/fs/cgroup:rw \
onlyoffice/communityserver
```
3\.  服务正常启动，会自动创建名为 onlyoffice 的数据库并生成所需的表，过程需要耗费一段时间。

![image-20231017142926576.png](https://s2.loli.net/2023/10/18/caeZ9Yo3f2Bl4wF.png)

## 页面

浏览器访问`ip:9101`，填写用户名、密码和邮箱注册登录。登录成功后首页如下所示。至此 OnlyOffice Workspace 搭建成功。

![image-20231017111430208.png](https://s2.loli.net/2023/10/18/sfnMYVSUAowbWv8.png)

## Vue 集成 Document Server

1.  在`public/index.html`文件中添加如下命令。IP:端口 为 Document Server 服务的地址。

```html
<script type="text/javascript" src="http://IP:端口/web-apps/apps/api/documents/api.js"></script>
```
2\.  新增 OnlyOffice 组件。`jsonwebtoken`依赖安装：`npm install --save jsonwebtoken@8.5.1`

```vue
<template>
  <div>
    <div id='OnlyOffice'></div>
  </div>
</template>
​
<script>
import jwt from 'jsonwebtoken'
export default {
  name: 'OnlyOffice',
  props: {
    option: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      doctype: '',
      docEditor: null,
    }
  },
  mounted() {
    if (this.option.url) {
      this.setEditor(this.option)
    }
  },
  methods: {
    // 用于初始化编辑器。参数 option，包含编辑器的各种配置选项。
    async setEditor(option) { 
      if (this.docEditor !== null) {
        this.docEditor.destroyEditor();
        this.docEditor = null;
      }
      this.doctype = this.getFileType(option.fileType)
      const document = {
        fileType: option.fileType,      // 文档类型
        key: option.key || '',          // 唯一值
        title: option.title,            // 文件名称
        permissions: {                  
          edit: option.isEdit,          // 是否可以编辑
          print: option.isPrint,
          download: option.isDownload,
          fillForms: true,              // 是否可以填写表格
          review: true                  // 跟踪变化
        },
        url: option.url                // 指定需打开加载文档的URL
      }
​
      const editorConfig = {
        callbackUrl: option.callbackUrl, // 编辑word后保存时回调的地址，这个回调用于后端接收你改变后的数据
        lang: option.lang,              // 语言设置
        chat: {
          autosave: true,              // 是否自动保存
          chat: false,
          comments: false,
          help: false,
          //是否显示插件
          plugins: false,
        },
        user: {   // 用户信息
          id: option.user.id,
          name: option.user.name
        },
        mode: option.model ? option.model : 'edit',
      }
​
      const tokenInfo = {
        'document':document,
        'editorConfig': editorConfig 
      }
​
      const config = {
        document: document,
        documentType: this.doctype,
        editorConfig: editorConfig,
        events: {
          onAppReady: this.onAppReady,   // 应用程序被加载到浏览器中。
          onDocumentStateChange: this.onDocumentStateChange,        //文档被修改。
        },
        width: '100%',          // 定义浏览器窗口中的档高度（默认为 100%）。
        height: '800px',        // 定义浏览器窗口中的文档宽度（默认为 100%）。
        token: jwt.sign( tokenInfo , "my_jwt_secret", { expiresIn: '3h' })
      }
      this.docEditor = new DocsAPI.DocEditor('OnlyOffice', config)
    },
    // 当文档被修改后调用
    onDocumentStateChange(event) { 
      console.log(event)
    },  
    /* OnlyOffice 编辑器加载完成后调用 */
    onAppReady() {
       // 创建connector连接器
      this.connector = this.docEditor.createConnector(); 
      console.log(this.docEditor, '创建connector连接器');
    },
    /* getFileType 方法用于根据文件类型（fileType）返回对应的文档类型（docType） */
    getFileType(fileType) {
      let docType = ''
      let fileTypesDoc = [
        'doc', 'docm', 'docx', 'dot', 'dotm', 'dotx', 'epub', 'fodt', 'htm', 'html', 'mht', 'odt', 'ott', 'pdf', 'rtf', 'txt', 'djvu', 'xps', 'word',
      ]
      let fileTypesCsv = [
        'csv', 'fods', 'ods', 'ots', 'xls', 'xlsm', 'xlsx', 'xlt', 'xltm', 'xltx',
      ]
      let fileTypesPPt = [
        'fodp', 'odp', 'otp', 'pot', 'potm', 'potx', 'pps', 'ppsm', 'ppsx', 'ppt', 'pptm', 'pptx',
      ]
      if (fileTypesDoc.includes(fileType)) {
        docType = 'text'
      }
      if (fileTypesCsv.includes(fileType)) {
        docType = 'spreadsheet'
      }
      if (fileTypesPPt.includes(fileType)) {
        docType = 'presentation'
      }
      return docType
    }
  },
  watch: {
    option: {
      handler: function (n) {
        this.setEditor(n)
        this.doctype = this.getFileType(n.fileType)
      },
      deep: true,
    }
  }
}
</script>
```
3\.  使用组件

```vue
<template>
  <div>
    <only-office :option="option"></only-office>
  </div>
</template>
​
<script>
import OnlyOffice from '@/components/OnlyOffice'
export default {
  data() {
    return {
      option: {
        url: 'http://ip:端口/aa.xlsx',  // 文档访问地址
        callbackUrl:'',     // 关闭文档后会调用callbackurl地址进行文档保存
        fileType: 'xlsx',   // 文件扩展名 
        key: '2222',        // key 不能为空
        title: 'Vue集成',  // 文档文件名   
        isEdit: true,         // 是否可以编辑
        isDownload:true,      // 是否可以下载 
        lang: 'zh-CN',        // 语言：zh-CN简体中文/en英文           
        isPrint: true,        // 是否可以导出                                                 
        user: {               // 文档作者信息
          id: 666, 
          name: 'Cleaner'
        }
      }                                    
    }
  }
}
</script>
```
## 问题

梳理部署和使用 OnlyOffice Worksapce 过程中出现的问题，希望对大家有所帮助，如果你遇到了其他问题，欢迎留言讨论，建议大家多查看 Github Issues。

### Community Server 启动失败

Community Server 容器内部依赖于许多其他三方服务（如 Nginx、Elasticsearch、MySQL 等）。服务启动失败时，可以通过查看容器日志或者进入容器内部查看依赖服务的状态来定位问题。

1.  服务器内存不足，Elasticsearch 服务启动失败：扩充服务器内存。
2.  MailAggregator、MailWatchdog 服务启动失败：容器启动命令中 MySQL 的配置信息有误，检查 MySQL 用户名密码等配置信息。

### 文档安全令牌未正确形成

原因：OnlyOffice 从 7.2 版本开始，加入了 JWT 验证。Document Server 和 Community Server 加密和验证时密钥不一致。解决方案有两个：一、更换 OnlyOffice 版本为 7.1，二、在 Community Server 中加入 secret 配置。

1.  进入 Document Server 容器，查看`/etc/onlyoffice/documentserver/local.json`文件中 secret 的配置信息。
```json
"secret": {
   "inbox": {
       "string": "my_jwt_secret"
   },
   "outbox": {
       "string": "my_jwt_secret"
   },
   "session": {
       "string": "my_jwt_secret"
   }
}
```
2.  进入 Community Server 容器中，编辑`/var/www/onlyoffice/WebStudio/web.appsettings.config`配置文件。找到如下配置信息并修改。

```conf
<add key="files.docservice.secret" value="my_jwt_secret" />
<add key="files.docservice.secret.header" value="Authorization" />
```

3.  重启 Community Server 容器

```sh
docker restart 容器id
```