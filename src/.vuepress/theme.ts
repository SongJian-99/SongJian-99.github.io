import { hopeTheme } from "vuepress-theme-hope";
import { Navbar } from "./navbar/index.js";
import { Sidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://cleaner.love/",

  author: {
    name: "Cleaner",
  },

  license: "MIT",
  favicon: "./favicon.ico",
  navbar: Navbar,
  sidebar: Sidebar,
  // 是否开启热更新，只在开发中使用
  hotReload: true,
  shouldPrefetch: false,

  logo: "round.png",
  navbarTitle: "Cleaner",

  breadcrumb: false,
  editLink: false,

  repo: "https://github.com/SongJian-99/SongJian-99.github.io",
  darkmode: "toggle",
  docsDir: "src",

  footer: "主题：VuePress Theme Hope",
  displayFooter: true,

  // 博客配置
  blog: {
    name: "Cleaner",
    avatar: "avatar.png",
    description: '"岁月漫长，要心地善良"',
    excerptLength: 0,
    excerpt: false,
    medias: {
      GitHub: "https://github.com/SongJian-99",
    },
    timeline: "昨日不再",
    articlePerPage: 5,
  },

  // markdown 配置
  markdown: {
    alert: true,
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },

  plugins: {
    blog: {
      excerpt: true,
      excerptLength: 100,
    },
    // 评论配置
    comment: {
      provider: "Giscus",
      repo: "SongJian-99/blog-comment",
      repoId: "R_kgDOKwb6_Q",
      category: "Announcements",
      categoryId: "DIC_kwDOKwb6_c4CnT4r",
      comment: false,
    },
    components: {
      components: ["Badge", "VPCard"],
      // rootComponents: {
      //   bingWallpaper: true,
      // },
    },

    icon: {
      prefix: "fa6-solid:",
    },
  },
});
