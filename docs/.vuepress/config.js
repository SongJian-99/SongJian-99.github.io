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
    ['@vuepress-reco/vuepress-plugin-back-to-top']
  ],
  themeConfig: {
    type: 'blog',
    autohor: 'Cleaner',
    // 个人信息的头像
    authorAvatar: '/avator.jpg',
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航及其深度
    subSidebar: 'auto',
    sidebarDepth: 1,
    noFoundPageByTencent: false,
    lastUpdated: '更新时间',
    // 博客配置
    blogConfig: {
      socialLinks: [
        {icon: 'reco-github', link: 'https://github.com/SongJian-99'}
      ]
    },
    nav: [ // 导航栏配置
      // {
      //   text: 'java',
      //   link: '/java/', 
      //   items: [
      //     {text: 'JVM', link: '/'},
      //     {text: '并发编程', link: '/'}
      //   ]
      // },
      { text: 'Docker', link: '/docker/preface', icon: 'iconfont icon-docker' },
      { text: '书籍', link: '/books/bookList', icon: 'reco-document' },
      { text: '时间轴', link: '/timeLine/', icon: 'reco-date' },
      // { text: '关于我', link: '/blogs/aboutMe', icon: 'reco-account' }
    ],
    sidebar: {
      '/books/': [
        {
          title: '传统文化',
          collapsable: true,
          children: [
            { title: '太乙金华宗旨', path: '/books/太乙金华宗旨' },
            { title: '太上老君说常清静经', path: '/books/太上老君说常清静经' },
            { title: '关圣帝君觉世真经', path: '/books/关圣帝君觉世真经' },
            { title: '素书', path: '/books/素书' },
          ]
        }
      ],
      '/docker/': [
        // {
        //   title: 'Docker 基础',
        //   collapsable: true,
        // },
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
      appId: 'qR1MgQXTGffUVgeTTM9Qnl3E-gzGzoHsz',
      appKey: 'OdwTWvfZsjbJIsBtQcgzc4eP',
      showComment: false
      // isShowComments: true  在需要添加评论的页面加上这个配置
    }
  }
};