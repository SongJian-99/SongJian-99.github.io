module.exports = {
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
    // 回到顶部
    ['@vuepress-reco/vuepress-plugin-back-to-top'],
    // SEO 优化
    ['vuepress-plugin-baidu-autopush'], 
    // 解决 sitemap 报错问题
    ['@vuepress/last-updated', {
      transformer: timestamp => {
        return new Date(timestamp).toISOString()
      }
    }]
    ['vuepress-plugin-sitemap', {
      hostname: 'https://cleaner.love/'
    }],
    // 分页
    ['@vuepress-reco/vuepress-plugin-pagation', {
      perPage: 5
    }],
    // 代码复制
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "copy",
      tip: {
        content: "复制成功!"
      }
    }],
    // 内容刷新
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
      }
    }],
    // 文章阅读进度条，官网地址：https://github.com/tolking/vuepress-plugin-reading-progress
    ['reading-progress', {
      fixed: 'top'
    }],
    ['@vssue/vuepress-plugin-vssue', {
      platform: 'github-v4',
      owner: 'SongJian-99',
      repo: 'blog-comment',
      clientId: 'd6e74656c615a5422460',
      clientSecret: 'c687a83e9a86a3688729a34f7bfa567a10f59da7',
      autoCreateIssue: true
    }]
    // 公告栏
    // ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
    //   width: '300px', // 默认 260px
    //   title: '消息提示',
    //   body: [
    //     {
    //       type: 'title',
    //       content: '欢迎加入QQ交流群 🎉🎉🎉',
    //       style: 'text-aligin: center;'
    //     },
    //   ],
    //   footer: [
    //     {
    //       type: 'button',
    //       text: '打赏',
    //       link: '/donate'
    //     },
    //   ]
    // }]
  ],
  themeConfig: {
    type: 'blog',
    autohor: 'Cleaner',
    domain: 'cleaner.love',
    // 项目开始时间
    startYear: '2023',
    // 个人信息的头像
    authorAvatar: '/avator.jpg',
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航及其深度
    subSidebar: 'auto',
    sidebarDepth: 1,
    noFoundPageByTencent: false,
    lastUpdated: '更新时间',
    // 设置时区偏移量（8小时）
    timezoneOffset: 8 * 60 * 60 * 1000,
    // 博客配置
    blogConfig: {
      socialLinks: [
        {icon: 'reco-github', link: 'https://github.com/SongJian-99'},
        {icon: 'reco-juejin', link: 'https://juejin.cn/user/1517786987244510'}
      ]
    },
    nav: [ // 导航栏配置
      {
        text: '前端',
        icon: 'iconfont icon-frontend',
        items: [
          { text: 'VuePress', link: '/frontend/vuepress/VuePressOne.md'}
        ]
      },
      { text: 'Docker', link: '/backend/docker/Web', icon: 'iconfont icon-docker' },
      { text: 'MySQL', link: '/backend/mysql/explain', icon: 'iconfont icon-mysql' },
      { text: '工作', link: '/backend/work/poi', icon: 'iconfont icon-work' },
      { text: '微服务', link: '/backend/microservice/twelve-factor', icon: 'iconfont icon-microservice' },
      { text: '工具', link: '/tool/git', icon: 'iconfont icon-tools' },
      { text: '留言板', link: '/message-board', icon: 'reco-suggestion' },
      { 
        text: '其他',
        icon: 'reco-other',
        items: [
          { text: '树洞', link: '/other/treeholes'}
        ]
      },
      { text: '时间轴', link: '/timeLine/', icon: 'reco-date' }
    ],
    sidebar: {
      '/backend/docker/': [
        {
          title: 'Docker 应用',
          collapsable: true,
          children: [
            { title: '使用 Dockerfile + Docker Compose 部署 Web 项目', path: '/backend/docker/Web' },
            { title: '使用 Docker Compose 部署 Elasticsearch + Kibana', path: '/backend/docker/Elasticsearch' }
          ]
        }
      ],
      '/backend/microservice/': [
        {
          title: '微服务理论知识',
          collapsable: true,
          children: [
            { title: '微服务架构中实施应用开发的十二要素', path: '/backend/microservice/twelve-factor' }
          ]
        }
      ],
      '/backend/work/': [
        {
          title: '工作实践',
          collapsable: true,
          children: [
            { title: '使用 Poi-tl 类库实现 Echarts 图表 + 前端表格导出到 Word 文档', path: '/backend/work/poi' },
            { title: 'Update 未加索引导致的微服务模块不可用', path: '/backend/work/practice' },
            { title: '企业级在线办公套件——OnlyOffice Workspace 部署使用', path: '/backend/work/onlyoffice' },
            { title: '使用 Axis 调用 WebService 服务接口', path: '/backend/work/webservice' },
            { title: '分布式存储系统——Ceph 部署使用', path: '/backend/work/ceph' },
          ]
        }
      ],
      '/backend/mysql': [
        {
          title: 'MySQL',
          collapsable: true,
          children: [
            { title: 'SQL执行计划分析', path: '/backend/mysql/explain' },
          ]
        }
      ],
      '/frontend/vuepress': [
        {
          title: 'VuePress',
          collapsable: true,
          children: [
            { title: '使用 VuePress + GitHub Pages + GitHub Actions 搭建个人博客', path: '/frontend/vuepress/VuePressOne' },
            { title: 'VuePress 个人博客美化：vuepress-theme-reco 主题使用', path: '/frontend/vuepress/VuePressTwo' },
            { title: 'VuePress + GitHub Pages 自定义域名', path: '/frontend/vuepress/VuePressThree' }
          ]
        }
      ],
      '/tool': [
        {
          title: '工具',
          collapsable: true,
          children: [
            { title: 'Git', path: '/tool/git' }
          ]
        }
      ]
    }
  }
};