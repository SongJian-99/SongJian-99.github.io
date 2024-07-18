module.exports = {
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  theme: "reco",
  title: "Cleaner 知识库",
  port: 9400,
  description: "Cleaner 知识库",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    // 主题 移动端优化
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  base: "/",
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  plugins: [
    // 回到顶部
    ["@vuepress-reco/vuepress-plugin-back-to-top"],
    // SEO 优化
    ["vuepress-plugin-baidu-autopush"],
    // 解决 sitemap 报错问题
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp) => {
          return new Date(timestamp).toISOString();
        },
      },
    ][
      ("vuepress-plugin-sitemap",
      {
        hostname: "https://cleaner.love/",
      })
    ],
    // 分页
    [
      "@vuepress-reco/vuepress-plugin-pagation",
      {
        perPage: 5,
      },
    ],
    // 代码复制
    [
      "vuepress-plugin-nuggets-style-copy",
      {
        copyText: "copy",
        tip: {
          content: "复制成功!",
        },
      },
    ],
    // 内容刷新
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新",
        },
      },
    ],
    // 公告栏
    [
      "@vuepress-reco/vuepress-plugin-bulletin-popover",
      {
        width: "260px", // 默认 260px
        title: "公告",
        body: [
          {
            type: "title",
            content: "欢迎加入微信技术交流群 🎉🎉🎉",
            style: "text-aligin: center;",
          },
          {
            type: "text",
            content:
              "交流群无任何套路，会不时分享技术与个人成长相关的知识，供大家学习。请扫码添加我的微信（备注：技术交流），我会直接拉你入群。",
            style: "font-size: 12px;",
          },
          {
            type: "image",
            src: "/wechat.jpg",
          },
        ],
        footer: [],
      },
    ],
    // 文章阅读进度条，官网地址：https://github.com/tolking/vuepress-plugin-reading-progress
    [
      "reading-progress",
      {
        fixed: "top",
      },
    ],
    [
      "@vssue/vuepress-plugin-vssue",
      {
        platform: "github-v4",
        owner: "SongJian-99",
        repo: "blog-comment",
        clientId: "d6e74656c615a5422460",
        clientSecret: "c687a83e9a86a3688729a34f7bfa567a10f59da7",
        autoCreateIssue: true,
      },
    ],
  ],
  themeConfig: {
    type: "blog",
    autohor: "Cleaner",
    domain: "cleaner.love",
    // 项目开始时间
    startYear: "2023",
    // 个人信息的头像
    authorAvatar: "/avator.jpg",
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航及其深度
    subSidebar: "auto",
    sidebarDepth: 1,
    noFoundPageByTencent: false,
    // 主题模式（暗/亮）
    modePicker: false,
    lastUpdated: "更新时间",
    // 设置时区偏移量（8小时）
    timezoneOffset: 8 * 60 * 60 * 1000,
    // 博客配置
    blogConfig: {
      socialLinks: [
        {
          icon: "reco-github",
          link: "https://github.com/SongJian-99",
        },
        {
          icon: "reco-juejin",
          link: "https://juejin.cn/user/1517786987244510",
        },
      ],
    },
    nav: [
      // 导航栏配置
      {
        text: "导航",
        link: "/other/navigate",
        icon: "iconfont icon-navigate",
      },
      {
        text: "前端",
        icon: "iconfont icon-frontend",
        items: [
          {
            text: "VuePress",
            link: "/frontend/vuepress/VuePressOne.md",
          },
          {
            text: "Vue",
            link: "/frontend/vue/jsx.md",
          },
        ],
      },
      {
        text: "Docker",
        link: "/backend/docker/Web",
        icon: "iconfont icon-docker",
      },
      {
        text: "MySQL",
        link: "/backend/mysql/explain",
        icon: "iconfont icon-mysql",
      },
      {
        text: "工作",
        link: "/backend/work/poi",
        icon: "iconfont icon-work",
      },
      {
        text: "微服务",
        link: "/backend/microservice/twelve-factor",
        icon: "iconfont icon-microservice",
      },
      {
        text: "大语言模型",
        link: "/llm/basicOne",
        icon: "iconfont icon-ai",
      },
      {
        text: "工具",
        link: "/tool/git",
        icon: "iconfont icon-tools",
      },
      // {
      //   text: "留言板",
      //   link: "/message-board",
      //   icon: "reco-suggestion",
      // },
      {
        text: "其他",
        icon: "reco-other",
        items: [
          {
            text: "树洞",
            link: "/other/treeholes",
          },
        ],
      },
      {
        text: "时间轴",
        link: "/timeLine/",
        icon: "reco-date",
      },
    ],
    sidebar: {
      "/backend/docker/": [
        {
          title: "Docker 应用",
          collapsable: false,
          children: [
            {
              title: "使用 Dockerfile + Docker Compose 部署 Web 项目",
              path: "/backend/docker/Web",
            },
            {
              title: "使用 Docker Compose 部署 Elasticsearch + Kibana",
              path: "/backend/docker/Elasticsearch",
            },
          ],
        },
      ],
      "/backend/microservice/": [
        {
          title: "微服务理论知识",
          collapsable: false,
          children: [
            {
              title: "微服务架构中实施应用开发的十二要素",
              path: "/backend/microservice/twelve-factor",
            },
          ],
        },
      ],
      "/backend/work/": [
        {
          title: "工作实践",
          collapsable: false,
          children: [
            {
              title:
                "使用 Poi-tl 类库实现 Echarts 图表 + 前端表格导出到 Word 文档",
              path: "/backend/work/poi",
            },
            {
              title: "Update 未加索引导致的微服务模块不可用",
              path: "/backend/work/practice",
            },
            {
              title: "企业级在线办公套件——OnlyOffice Workspace 部署使用",
              path: "/backend/work/onlyoffice",
            },
            {
              title: "使用 Axis 调用 WebService 服务接口",
              path: "/backend/work/webservice",
            },
            {
              title: "分布式存储系统——Ceph 部署使用",
              path: "/backend/work/ceph",
            },
            {
              title: "EasyExcel 导出多张图片",
              path: "/backend/work/easyexcel",
            },
          ],
        },
      ],
      "/backend/mysql": [
        {
          title: "MySQL",
          collapsable: false,
          children: [
            {
              title: "SQL 执行计划分析",
              path: "/backend/mysql/explain",
            },
          ],
        },
      ],
      "/frontend": [
        {
          title: "VuePress 使用实践",
          collapsable: false,
          children: [
            {
              title:
                "使用 VuePress + GitHub Pages + GitHub Actions 搭建个人博客",
              path: "/frontend/vuepress/VuePressOne",
            },
            {
              title: "VuePress 个人博客美化：vuepress-theme-reco 主题使用",
              path: "/frontend/vuepress/VuePressTwo",
            },
            {
              title: "VuePress + GitHub Pages 自定义域名",
              path: "/frontend/vuepress/VuePressThree",
            },
          ],
        },
        {
          title: "Vue 使用实践",
          collapsable: false,
          children: [
            {
              title: "JSX 实现 Element-ui 表格列动态渲染",
              path: "/frontend/vue/jsx",
            },
            {
              title: "流式数据接收+打字机效果展示",
              path: "/frontend/vue/stream",
            },
            {
              title: "其他问题汇总",
              path: "/frontend/vue/questions",
            },
          ],
        },
      ],
      "/tool": [
        {
          title: "Git 使用实践",
          collapsable: false,
          children: [
            {
              title: "Git 常用命令",
              path: "/tool/git",
            },
          ],
        },
        {
          title: "CentOS 使用实践",
          collapsable: false,
          children: [
            {
              title: "CentOS 知识汇总",
              path: "/tool/centos",
            },
          ],
        },
      ],
      "/llm": [
        {
          title: "大语言模型基础",
          collapsable: false,
          children: [
            {
              title: "发展历程、构建过程及如何使用",
              path: "/llm/basicOne",
            },
          ],
        },
        {
          title: "大语言模型使用",
          collapsable: false,
          children: [
            {
              title: "InternLM2（书生·浦语）",
              path: "/llm/InternLM2",
            },
          ],
        },
      ],
    },
  },
};
