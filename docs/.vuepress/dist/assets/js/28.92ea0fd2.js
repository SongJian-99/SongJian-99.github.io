(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{554:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("本文主要介绍为 VuePress + GitHub Pages + GitHub Actions 搭建的网站添加自定义域名的详细步骤。")]),t._v(" "),s("p",[t._v("前提：站点已经使用 VuePress + GitHub Pages + GibHub Actions 搭建并正常运行。")])]),t._v(" "),s("h2",{attrs:{id:"域名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#域名"}},[t._v("#")]),t._v(" 域名")]),t._v(" "),s("h3",{attrs:{id:"申请"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#申请"}},[t._v("#")]),t._v(" 申请")]),t._v(" "),s("p",[t._v("首先我们需要拥有一个域名，登录"),s("a",{attrs:{href:"https://wanwang.aliyun.com/domain/",target:"_blank",rel:"noopener noreferrer"}},[t._v("万网"),s("OutboundLink")],1),t._v("选择域名后进行购买，填写相关信息，并等待审核。审核通过之后，在域名列表页（右上角控制台->控制台首页->域名->域名列表页）就可以看见已购买的域名了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2023/06/17/BzKhbJSynRd32Ev.png",alt:"image-20230617144639816.png"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2023/06/17/FZHrgbIC8wA4PqG.png",alt:"image-20230617145052448.png"}})]),t._v(" "),s("h3",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("p",[t._v("域名首次申请成功后，需要为域名配置 DNS 解析信息，用来路由到 GitHub Pages 的服务器地址。")]),t._v(" "),s("ol",[s("li",[t._v("在终端窗口执行如下命令，查看当前网站的域名（GitHub Pages 中的域名）对应的 IP 地址，并复制到剪贴板，用于下一步配置 DNS 解析记录使用。")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v(" songjian-99.github.io\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("进入到域名解析页面（域名列表页->解析），为域名添加 DNS 解析记录。")])]),t._v(" "),s("p",[t._v("我们需要为域名配置两个 DNS 解析记录。配置信息如下表所示（注意替换相关信息）。配置完成后，需要等待几分钟来让 DNS 记录生效。域名 DNS 记录生效后，下一步需要将域名配置到 GitHub Pages 中。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("记录类型")]),t._v(" "),s("th",[t._v("主机记录")]),t._v(" "),s("th",[t._v("解析请求来源")]),t._v(" "),s("th",[t._v("记录值")]),t._v(" "),s("th",[t._v("TTL")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("CNAME")]),t._v(" "),s("td",[t._v("www")]),t._v(" "),s("td",[t._v("默认")]),t._v(" "),s("td",[t._v("网站域名（songjian-99.github.io）")]),t._v(" "),s("td",[t._v("10分钟（默认）")])]),t._v(" "),s("tr",[s("td",[t._v("A")]),t._v(" "),s("td",[t._v("@")]),t._v(" "),s("td",[t._v("默认")]),t._v(" "),s("td",[t._v("上一步获取的 IP 地址")]),t._v(" "),s("td",[t._v("10分钟（默认）")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2023/06/17/SdsHzFactYLOXpq.png",alt:"image-20230617160144514.png"}})]),t._v(" "),s("h2",{attrs:{id:"github-pages-设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-pages-设置"}},[t._v("#")]),t._v(" GitHub Pages 设置")]),t._v(" "),s("p",[t._v("进入到 GitHub pages 页面（仓库-> Settings -> Pages），在 Custom domain 中填写域名并保存。等待 DNS 检查，检查通过后，即可通过新域名访问网站。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2023/06/17/Fka16xMycBwVieg.png",alt:"image-20230617162910158.png"}})]),t._v(" "),s("h2",{attrs:{id:"github-actions-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-actions-配置"}},[t._v("#")]),t._v(" GitHub Actions 配置")]),t._v(" "),s("p",[t._v("每次更新代码，通过 GitHub Actions 自动部署后，Pages 中到自定义域名会重置，因此需要同时修改 workflow 配置文件。")]),t._v(" "),s("p",[t._v("在 workflow 配置文件中，新增自定义域名配置。配置信息如下所示（仅贴出与 GitHub Pages 有关的代码，完整代码可以查看该文章："),s("a",{attrs:{href:"https://juejin.cn/post/7239536753971724344#heading-9",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 VuePress + GitHub Pages + GitHub Actions 搭建个人博客"),s("OutboundLink")],1),t._v("）")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署到 GitHub Pages")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" crazy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("max/ghaction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages@v2\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("GITHUB_TOKEN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.ACCESS_TOKEN "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("target-branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署到 gh-pages 分支，因为 main 分支存放的一般是源码，而 gh-pages 分支则用来存放生成的静态文件")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build_dir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vuepress 生成的静态文件存放的地方")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fqdn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cleaner.love  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自定义域名")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("为什么需要添加两个 DNS 解析记录？")]),t._v(" "),s("p",[t._v("GitHub Pages 要求同时添加两个解析记录，确保自定义域名能够解析到 GitHub Pages 的服务器上，否则 DNS check 时会出错。")]),t._v(" "),s("p",[t._v("以域名 cleaner.love 为例，因为 cleaner.love（根域名） 和 www.cleaner.love（子域名）会被视为两个不同的域名，CNAME 记录用于将子域名指向 GitHub Pages 服务器，A 记录用于将根域名指向 GitHub Pages 的服务器。")])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("记录类型")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("A 记录")]),t._v(" "),s("td",[t._v("将域名指向一个 IPV4 地址（映射 Web 服务器地址）")])]),t._v(" "),s("tr",[s("td",[t._v("CNAME 记录")]),t._v(" "),s("td",[t._v("将域名指向另外一个域名（CDN）")])]),t._v(" "),s("tr",[s("td",[t._v("AAAA 记录")]),t._v(" "),s("td",[t._v("将域名指向一个 IPV6 地址（类似于 A 记录）")])]),t._v(" "),s("tr",[s("td",[t._v("NS 记录")]),t._v(" "),s("td",[t._v("将子域名指定其他 DNS 服务器解析（解析特定域名的权威 DNS 服务器）")])]),t._v(" "),s("tr",[s("td",[t._v("MX 记录")]),t._v(" "),s("td",[t._v("将域名指向邮件服务器地址（邮件路由）")])]),t._v(" "),s("tr",[s("td",[t._v("SRV 记录")]),t._v(" "),s("td",[t._v("记录提供特定的服务的服务器（标识 VoIP(Voice over IP)服务、XMPP(Extensible Messaging and Presence Protocol)服务等）")])]),t._v(" "),s("tr",[s("td",[t._v("TXT 记录")]),t._v(" "),s("td",[t._v("存储任意文本信息（域名验证、配置 SPF(Sender Policy Framework)、DKIM(DomainKeys Identified Mail)）")])]),t._v(" "),s("tr",[s("td",[t._v("PTR 记录")]),t._v(" "),s("td",[t._v("用于反向 DNS 查找（将 IP 地址解析为域名，用于确定特定 IP 地址所对应的域名）")])]),t._v(" "),s("tr",[s("td",[t._v("SOA 记录")]),t._v(" "),s("td",[t._v("指定域名的主要配置信息。包括域名的权威服务器、刷新时间、重试时间等。")])])])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[t._v("域名需要备案吗？")]),t._v(" "),s("p",[t._v("不需要备案，因为 GitHub Pages 的服务器在国外。如果网站是部署在国内的服务器上（国内的服务器需要备案），可以在相应的云服务器厂商处进行备案。")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);