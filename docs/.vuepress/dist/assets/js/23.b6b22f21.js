(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{586:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("本文主要介绍使用 VuePress + GibHub Pages 搭建个人博客，并使用 GibHub Actions 实现博客自动化部署的详细步骤。")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePress 中文文档"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"新建代码仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建代码仓库"}},[s._v("#")]),s._v(" 新建代码仓库")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("登录 GitHub，新建一个代码仓库，仓库名称为 xxx.github.io，xxx 为你的 GitHub 账号名。")]),s._v(" "),t("p",[s._v("为什么这么命名？因为部署到 GitHub Pages 后，通过仓库名称（例如："),t("a",{attrs:{href:"https://songjian-99.github.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://songjian-99.github.io/"),t("OutboundLink")],1),s._v("）就可以访问到网站。如果是其他的仓库名称，那么访问的域名就是 "),t("a",{attrs:{href:"https://songjian-99.github.io/xxx",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://songjian-99.github.io/xxx"),t("OutboundLink")],1),s._v("，访问的域名会自动加上 xxx.github.io 作为中间的一层路径。（同时项目中 config.js 文件中的 base 属性也要对应上）")])]),s._v(" "),t("li",[t("p",[s._v("新增一个代码分支，名称为 gh-pages（workflow 配置文件中会使用）。")]),s._v(" "),t("p",[s._v("master 分支：存放项目源码")]),s._v(" "),t("p",[s._v("gh-pages 分支：存放 VuePress 生成的静态文件")])])]),s._v(" "),t("h2",{attrs:{id:"vuepress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress"}},[s._v("#")]),s._v(" VuePress")]),s._v(" "),t("p",[s._v("本文只提供 VuePress 的基础使用和简单配置，不会深度介绍 VuePress 的各个功能点。如果要深入使用，可以自行查看官方文档。")]),s._v(" "),t("p",[s._v("推荐使用其他主题来丰富 VuePress 的功能。")]),s._v(" "),t("h3",{attrs:{id:"项目初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目初始化"}},[s._v("#")]),s._v(" 项目初始化")]),s._v(" "),t("p",[s._v("在本地创建一个新的目录并关联上 GitHub 仓库，在该目录下执行以下命令。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init    // 初始化项目\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v(" vuepress // 安装 VuePress 依赖。VuePress 版本为 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".x，需要 Node.js "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.6")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("p",[s._v("参考官方文档"),t("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/directory-structure.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("目录结构"),t("OutboundLink")],1),s._v("和"),t("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/basic-config.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("基本配置"),t("OutboundLink")],1),s._v("选项卡，在项目中创建目录并且添加相关配置文件。最终目录结构如下（仅列出项目主要目录）。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("—— blog // 根目录\n   |—— docs  \n       |—— .vuepress \n           |—— public // 存放静态资源，比如图片\n               |-- favicon.ico // 页签图标\n               |-- logo.jpg  // 首页logo图片\n           |—— config.js // 配置文件\n       |—— books // 存放文章\n           |-- Java.md\n           |-- Vue.md\n       |—— README.md // 首页配置文件\n  |—— package.json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("ul",[t("li",[s._v("config.js：必要的配置文件，可以配置网站的导航栏、侧边栏、主题和插件等信息。")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   title"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Cleaner'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 网站标题")]),s._v("\n   description"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'个人网站'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   head"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注入到当前页面的 HTML <head> 中的标签")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'link'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rel")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'icon'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("href")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/favicon.ico'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 增加网页标签图标)")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   base"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n   themeConfig"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     nav"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导航栏配置")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         text"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'java'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         link"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/java/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n         items"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'JVM'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("link")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n           "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'并发编程'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("link")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'书籍'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("link")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/books/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("      \n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("ul",[t("li",[s._v("README.md：网站的首页配置文件。")])]),s._v(" "),t("div",{staticClass:"language-md line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[s._v("home: true\ntitle: 首页\nauthor: Cleaner\ndata: '2023-6-1'\nheroImage: /logo.jpg\nheroText: null\ntagline: null\nactionText: 快速上手 →\nactionLink: /\nfeatures:\n"),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" title: 简洁至上\n  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。\n"),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" title: Vue驱动\n  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。\n"),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" title: 高性能\n  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。\nfooter: MIT Licensed | Copyright © 2018-present Evan You\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("ul",[t("li",[s._v("package.json")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blog"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cleaner\'s blog"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs --temp .temp"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 项目运行命令")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"author"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cleaner"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"license"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ISC"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"devDependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vue"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^2.7.14"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuepress"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.9.9"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h3",{attrs:{id:"运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),t("p",[s._v("执行命令"),t("code",[s._v("npm run dev")]),s._v("运行项目。浏览器访问 localhost:8080，界面展示如下。至此本地搭建 VuePress 项目完成。"),t("img",{attrs:{src:"https://s2.loli.net/2022/09/03/SBikFRhbIyzGvdf.png",alt:"image-20220903095832615.png"}})]),s._v(" "),t("h2",{attrs:{id:"github-pages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github-pages"}},[s._v("#")]),s._v(" GitHub Pages")]),s._v(" "),t("p",[s._v("进入仓库页面，点击 Settings，选择 Pages 选项卡，在 Build and deployment 下选择 gh-pages 分支，然后点击 save 即可。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2023/06/01/fKX4DSTv3mQdcUV.png",alt:"image.png"}})]),s._v(" "),t("h2",{attrs:{id:"github-actions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github-actions"}},[s._v("#")]),s._v(" GitHub Actions")]),s._v(" "),t("h3",{attrs:{id:"新增-access-token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新增-access-token"}},[s._v("#")]),s._v(" 新增 Access Token")]),s._v(" "),t("ol",[t("li",[s._v("点击用户头像，选择 Settings，进入用户设置面板，然后选择 Developer settings 选项卡（选项卡列表最下面），展开 Personal access tokens 选项卡，点击 Tokens(classic)。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2023/06/01/LZbrpcjEXteuP2Y.png",alt:"image.png"}})]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("点击 Generate new token。Note：描述该 token 用来做什么，可以随便填写，有意义即可；Expiration：选择 token 的过期时间；Select Scopes：选择 token 的使用范围，至少要勾选上 repo，否则这个 token 没有仓库权限，自动部署会失败。然后点击生成 token。将 token 复制下来，下一步会使用。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2023/04/21/I9o2ybSQP5hmwCg.png",alt:"image.png"}})]),s._v(" "),t("h3",{attrs:{id:"创建-secrets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-secrets"}},[s._v("#")]),s._v(" 创建 Secrets")]),s._v(" "),t("p",[s._v("返回到仓库页面，点击 Settings，选择 Secrets and variables 选项卡，选择 Actions 选项，点击 New repository secret，新增一个 Secret，名称为 ACCESS_TOKEN，值就是上一步生成的 token 值。将名称复制下来，下一步会用到。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2023/04/21/KHRkAlpPfhEUN7S.png",alt:"image.png"}})]),s._v(" "),t("h3",{attrs:{id:"创建任务文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建任务文件"}},[s._v("#")]),s._v(" 创建任务文件")]),s._v(" "),t("p",[s._v("返回到仓库页面，点击 Actions，点击 New workflow，然后点击 set up a workflow yourself。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2023/04/21/tiK8E1zFl3bXAdh.png",alt:"image.png"}})]),s._v(" "),t("p",[s._v("Workflow 配置文件：main.yml")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# workflow 名称，可以自定义")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deploy GitHub Pages\n​\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 触发条件：在代码 push 到 master 分支后，自动执行该 workflow")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("push")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     branches"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" master\n​\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 任务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build-and-deploy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务器环境：最新版 Ubuntu，也可以自定义版本")]),s._v("\n     runs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n     steps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取代码")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Checkout\n         uses"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v2\n         with"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n           fetch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("depth")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n           \n       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 Node.js 版本")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Setup Node.js environment\n         uses"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/setup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("node@v1\n         with"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n           node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"14.18.0"')]),s._v("\n           \n       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 缓存 node_modules")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Cache dependencies\n         uses"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/cache@v2\n         id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yarn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cache\n         with"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n           path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v("\n             "),t("span",{pre:!0,attrs:{class:"token important"}},[s._v("**/node_modules")]),s._v("\n           key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" runner.os "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("yarn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" hashFiles('"),t("span",{pre:!0,attrs:{class:"token important"}},[s._v("**/yarn.lock')")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n           restore"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("keys")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v("\n             $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" runner.os "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("yarn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("\n​\n       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果缓存没有命中，安装依赖")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Install dependencies\n         if"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" steps.yarn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cache.outputs.cache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("hit "),t("span",{pre:!0,attrs:{class:"token tag"}},[s._v("!=")]),s._v(" 'true'\n         run"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yarn "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("frozen"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("lockfile\n​\n       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成静态文件")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Build\n         run"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  npm run build\n​\n       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署到 GitHub Pages")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deploy\n         uses"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" crazy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("max/ghaction"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages@v2\n         env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n           GITHUB_TOKEN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.ACCESS_TOKEN "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ACCESS_TOKEN 是创建的 Secret 名称，替换为你自己创建的名称")]),s._v("\n         with"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n           target"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署到 gh-pages 分支，master 分支存放的是项目源码，而 gh-pages 分支则用来存放生成的静态文件")]),s._v("\n           build_dir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docs/.vuepress/dist "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vuepress 生成的静态文件存放的地方")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br")])]),t("h2",{attrs:{id:"验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[s._v("#")]),s._v(" 验证")]),s._v(" "),t("p",[s._v("所有步骤配置完成，我们只需将项目代码 push 到仓库中，workflow 就会自动运行，并且按照配置文件中的步骤依次执行命令，最终将项目编译后的静态文件部署到 gh-pages 分支上。可以在 Actions 中查看运行情况。运行成功后，即可通过域名访问页面。")]),s._v(" "),t("h2",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("Vue Press 不能热更新，每次项目文件改动后，都需要重新启动。 解决：将 package.json 文件中运行项目的命令改为"),t("code",[s._v('"docs:dev": "vuepress dev docs --temp .temp"')]),s._v("。")])]),s._v(" "),t("li",[t("p",[s._v("出现问题最多的地方就是 workflow 自动执行的时候，因为有很多个步骤。每次执行失败的时候，定位下哪个步骤出现错误，看一下错误信息，然后再针对性修改。")]),s._v(" "),t("p",[s._v("大致的修改方向：首先确保创建 access token 和 secret 这两个步骤没问题（这两个步骤有问题会出现仓库无权限 403，push 代码失败的错误），并且确保名称和 workflow 的配置文件相对应。")])]),s._v(" "),t("li",[t("p",[s._v("workflow 配置文件可以自行调整，官方提供的和其他博客中的配置文件各种各样，这种不行就换另一种试试。")]),s._v(" "),t("p",[t("code",[s._v("crazy-max/ghaction-github-pages@v2")]),s._v(" 完整配置参数地址：https://github.com/crazy-max/ghaction-github-pages")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);