---
title: VuePress 个人博客美化：vuepress-theme-reco 主题使用
date: 2023-06-08
isShowComments: true
author: Cleaner
categories: 
 - 前端
tags: 
 - VuePress
---


>本篇文章主要介绍如何使用 vuepress-theme-reco 主题美化个人博客，以及评论、子侧边栏、图标和插件等扩展功能的使用。
>
>[VuePress 官方文档](https://vuepress.vuejs.org/zh/) 、[vuepress-theme-reco 官方文档](https://vuepress-theme-reco.recoluan.com/) 



## 前言

本人在使用 VuePress 默认主题搭建博客的过程中，对侧边栏的样式一直不太满意，于是开始寻找其他可替代的主题，然后发现了 vuepress-theme-reco。该主题不仅继承了 VuePress 默认主题几乎一切的功能，还提供了其他扩展功能，不仅满足了我的需求，而且几乎无需修改现有博客内容就可以无缝切换到该主题。到目前为止，使用过程中基本满足了我所有的需求。

尽管官方文档中大部分功能的描述十分详细，但是在一些功能使用的过程中也费了些力气，因此在此记录下来。

欢迎访问本人的[博客网站](https://songjian-99.github.io/)

## 项目目录

~~~
—— blog
  |—— docs 
      |—— .vuepress		// 配置目录
      	  |—— public	// 静态资源
      	  |—— styles	// 样式
      	  |—— config.js		// 配置文件
      	  |—— enhanceApp.js	// 客户端应用增强文件
      |—— books		// 书籍模块
      |—— docker	// docker 模块
      |—— README.md		// 博客首页
~~~

## 使用主题

1. 安装依赖

~~~sh
npm install vuepress-theme-reco --save-dev
~~~

2. 应用主题，在 config.js 文件中添加如下配置。

~~~js
module.exports = {
  theme: 'reco'
}  
~~~

## 全局配置

config.js 是项目的全局配置文件，可以配置网站的基本信息、插件、主题、导航栏和侧边栏等内容。

~~~js
// 完整的 config.js 文件内容，可根据需要自行删减
module.exports = {
  // 语言  
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  theme: 'reco',
  title: 'Cleaner',
  description: 'Cleaner\'s blog',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // 主题 移动端优化
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  base: '/',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  plugins: [
    ['@vuepress-reco/vuepress-plugin-back-to-top']
  ],
  themeConfig: {
    // 主题模式 博客模式
    type: 'blog',
    autohor: 'Cleaner',
    // 个人信息的头像
    authorAvatar: '/avator.jpg',
    // 内置搜索
    search: true,
    searchMaxSuggestions: 10,
    // 子侧边栏
    subSidebar: 'auto',
    sidebarDepth: 1,
    lastUpdated: '更新时间',
    // 设置时区偏移量（8小时）
    timezoneOffset: 8 * 60 * 60 * 1000,
    // 博客配置
    blogConfig: {
      socialLinks: [
        {icon: 'reco-github', link: 'https://github.com/SongJian-99'}
      ]
    },
    // 导航栏配置
    nav: [ 
      { text: 'Docker', link: '/docker/preface', icon: 'iconfont icon-docker' },
      { text: '书籍', link: '/books/bookList', icon: 'reco-document' },
      { text: '时间轴', link: '/timeLine/', icon: 'reco-date' },
    ],
    sidebar: {
      '/books/': [
        {
          title: '传统文化',
          collapsable: true,
          children: [
            { title: '素书', path: '/books/素书' },
          ]
        }
      ],
      '/docker/': [
        {
          title: 'Docker 应用',
          collapsable: true,
          children: [
            { title: '使用 Docker Compose 部署 Elasticsearch + Kibana', path: '/docker/Elasticsearch' },
            { title: '使用 Dockerfile + Docker Compose 部署 Web 项目', path: '/docker/Web' }
          ]
        }
      ]
    },
    // 评论插件配置
    valineConfig: {
      appId: '替换为自己的appId',
      appKey: '替换为自己的appKey',
      showComment: false
      // isShowComments: true  在需要添加评论的页面加上这个配置
    }
  }
};
~~~

## 首页配置

主题支持两种风格的首页，一种是偏文档式的首页（默认），另一种是博客式的首页。本文介绍博客风格首页的配置。

* 在 config.js 中新增配置

~~~js
module.exports = {
  theme: 'reco',
  themeConfig: {
    type: 'blog'
  }
}
~~~

* 在 README.md 文件中配置首页展示的内容。

~~~md
<!-- README.md 文件内容 -->
---
home: true
title: 首页
author: Cleaner
heroText: null  # 禁用标题
tagline: null   # 禁用副标题
heroImage: /logo.jpg
heroImageStyle: {
  maxWidth: '450px',
  display: block,
  margin: '-12rem auto 1.5rem',
  boxShadow: '0 5px 18px rgba(0,0,0,0.2)'
}
---
~~~

## Front Matter

放在文章中的第一部分，在 Front Matter 中可以配置文章的标题、时间、分类和标签等信息。更多配置可以参考[官方文档](https://vuepress-theme-reco.recoluan.com/views/other/reco-optimization.html)。

~~~md
---
title: 使用 Dockerfile + Docker Compose 部署 Web 项目
date: 2023-06-06
isShowComments: true	# 展示评论
categories: 	# 分类
 - 后端
tags: 		# 标签
 - Docker
---

<!-- 文章内容 -->
~~~

## 添加 iconfont 图标

主题中已经内置了一些常用的图标，但有时不能完全满足我们的需要。主题支持使用 iconfont 图标，可以方便地集成 iconfont 来满足个性化的图标需求。

1. 在 iconfont 官网中选择所需的图标，并添加到项目中。在项目页面，点击下载至本地，将下载的文件夹中的 iconfont.css、iconfont.woff2、iconfont.woff、iconfont.ttf 四个文件复制到 <font color=green>**styles**</font> 目录下。

![image-20230608143006122.png](https://s2.loli.net/2023/06/08/gJapmRyCGifqHFs.png)

2. 在 enhanceApp.js 文件中引入 iconfont.css 文件。

~~~js
// enhanceApp.js 文件内容
import '../.vuepress/styles/iconfont.css'
~~~

~~~css
// iconfont.css 文件内容
@font-face {
  font-family: 'iconfont';  /* Project id 4106829 */
  src: url('iconfont.woff2?t=1686190078548') format('woff2'),
        url('iconfont.woff?t=1686190078548') format('woff'),
        url('iconfont.ttf?t=1686190078548') format('truetype');
}
  
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
// 图标
.icon-docker:before{
  content: "\e600";
}
// 图标
.icon-vue:before {
  content: "\e799";
}
~~~

3. 在导航栏中使用 ` { text: 'Docker', link: '/docker/preface', icon: 'iconfont icon-docker' }`

## 定制样式

在 <font color=green>**styles**</font> 目录下新增 index.styl 文件，可以在该文件中修改主题的默认样式，定制自己想要的效果。更多配置可以参考该[文档](https://vuepress-theme-reco.recoluan.com/views/other/reco-optimization.html)。

~~~styl
// index.styl 文件内容
.content {
  font-size 30px
}

// 首页标签列表样式
.abstract-item {
  background-color: #acdcfd3d !important;  
  transition: all .5s;
}
.abstract-item:hover {
    transform:  scale(1.02);
    transition: all .5s;
}
~~~

## 插件

除了官方提供的插件，插件广场中又提供了许多实用的插件，大家可以自行探索使用。

### back-to-top

回到顶部小火箭插件

* 安装

~~~sh
npm install -D @vuepress/plugin-back-to-top
~~~

* 使用

~~~js
module.exports = {
	['@vuepress-reco/vuepress-plugin-back-to-top']
}
~~~

### commonts

主题中已经内置了评论插件，并且提供了两种评论系统供我们选择：Valine 和 Vssue。Valine 是一款基于 [LeanCloud](https://leancloud.cn/) 的快速、简洁且高效的无后端评论系统，Vssue 是 Vue 驱动的、基于 Issue 的评论插件，两种评论系统各有各的优势。因为 Valine 支持展示文章的访问量，因此我选择了 Valine。

* 使用 Valine 需要先获取 AppId 和 AppKey。访问 [LeanCloud](https://www.leancloud.cn/) 网站，进行注册登陆。登陆后进入到控制台页面，创建一个新应用，创建成功后，进入创建的应用中，在 设置->应用凭证 选项卡中，就可以看到 AppId 和 AppKey 了。

![image-20230608115439929.png](https://s2.loli.net/2023/06/08/oAIzEcTK9pGjXuS.png)

* 在 config.js 文件中添加如下配置

~~~js
// 评论插件配置
valineConfig: {
    appId: '替换为自己的appId',
    appKey: '替换为自己的appKey',
    showComment: false
    // isShowComments: true  在需要添加评论的页面加上这个配置
}
~~~

## 末尾

本文列出了博客网站中需要的大部分功能，更多的功能在本人后续的使用过程中慢慢探索，到时候也会同步更新到本文中。欢迎大家访问我的个人[博客网站](https://songjian-99.github.io/)，并提供宝贵建议。

