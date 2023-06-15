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
    }]
  ],
  themeConfig: {
    type: 'blog',
    autohor: 'Cleaner',
    domain: 'cleaner.love',
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
          { text: 'VuePress', link: '/frontend/vuepress/VuePressOne'}
        ]
      },
      { text: 'Docker', link: '/backend/docker/preface', icon: 'iconfont icon-docker' },
      { text: '工作', link: '/backend/work/poi', icon: 'iconfont icon-work' },
      { text: '书籍', link: '/books/bookList', icon: 'reco-document' },
      { text: '时间轴', link: '/timeLine/', icon: 'reco-date' },
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
      '/backend/docker/': [
        {
          title: 'Docker 应用',
          collapsable: true,
          children: [
            { title: '使用 Docker Compose 部署 Elasticsearch + Kibana', path: '/backend/docker/Elasticsearch' },
            { title: '使用 Dockerfile + Docker Compose 部署 Web 项目', path: '/backend/docker/Web' }
          ]
        }
      ],
      '/backend/work/': [
        {
          title: '工作实践',
          collapsable: true,
          children: [
            { title: '使用 Poi-tl 类库实现 Echarts 图表 + 前端表格导出到 Word 文档', path: '/backend/work/poi' },
            { title: 'Update 未加索引导致的微服务模块不可用', path: '/backend/work/practice' }
          ]
        }
      ],
      '/frontend/vuepress': [
        {
          title: 'VuePress',
          collapsable: true,
          children: [
            { title: '使用 VuePress + GitHub Pages + GitHub Actions 搭建个人博客', path: '/frontend/vuepress/VuePressOne' },
            { title: 'VuePress 个人博客美化：vuepress-theme-reco 主题使用', path: '/frontend/vuepress/VuePressTwo' }
          ]
        }
      ]
    },
    // 评论插件配置
    valineConfig: {
      appId: 'qR1MgQXTGffUVgeTTM9Qnl3E-gzGzoHsz',
      appKey: 'OdwTWvfZsjbJIsBtQcgzc4eP',
      showComment: false
    }
  }
};