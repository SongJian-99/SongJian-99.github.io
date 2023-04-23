module.exports = {
  theme: 'reco',
  title: 'Cleaner',
  description: 'Cleaner',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // 主题 移动端优化
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  base: '/',
  markdown: {
    lineNumbers: false // 代码块显示行号
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
    // blogConfig: {
    //   category: {
    //     location: 2, // 导航栏中的位置
    //     text: '分类'  // 文字
    //   },
    //   tag: {
    //     location: 3,
    //     text: '标签'      
    //   }
    // },
    nav: [ // 导航栏配置
      // {
      //   text: 'java',
      //   link: '/java/', 
      //   items: [
      //     {text: 'JVM', link: '/'},
      //     {text: '并发编程', link: '/'}
      //   ]
      // },
      // {text: '杂项', link: '/other/'},
      { text: '书籍', link: '/books/bookList', icon: 'reco-document' },
      { text: '时间轴', link: '/timeLine/', icon: 'reco-date' }
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
      ]
    }
  }
};