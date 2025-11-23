import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Cleaner",

  // 输出目录配置
  dest: "src/.vuepress/dist",

  // 添加缓存控制头信息
  head: [
    [
      "meta",
      {
        "http-equiv": "Cache-Control",
        content: "no-cache, no-store, must-revalidate",
      },
    ],
    ["meta", { "http-equiv": "Pragma", content: "no-cache" }],
    ["meta", { "http-equiv": "Expires", content: "0" }],
    [
      "meta",
      {
        name: "description",
        content: "Cleaner 的个人博客，分享技术、AI 大模型、开发实践等内容",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content: "Cleaner,博客,技术,AI,大模型,VuePress,前端,后端",
      },
    ],
    [
      "meta",
      {
        property: "og:description",
        content: "Cleaner 的个人博客，分享技术、AI 大模型、开发实践等内容",
      },
    ],
    ["meta", { name: "author", content: "Cleaner" }],
    [
      "meta",
      { name: "msvalidate.01", content: "9256EFDDB5B585A7858542AA7E26C6AA" },
    ],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "SLVQ8uQ66r_lEXG2En27-DTk4aO62F0lAQBESi8RdYo",
      },
    ],
  ],

  // 使用 Vite 打包器替代 Webpack
  bundler: viteBundler({
    viteOptions: {
      build: {
        rollupOptions: {
          output: {
            // 使用内容哈希命名文件
            entryFileNames: "assets/js/[name].[hash].js",
            chunkFileNames: "assets/js/[name].[hash].js",
            assetFileNames: "assets/[ext]/[name].[hash].[ext]",
          },
        },
      },
    },
    vuePluginOptions: {},
  }),

  theme,
});
