(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{556:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[t._v("2024 年 1 月 17 日，新一代大语言模型书生·浦语 2.0（InternLM2）正式发布（"),s("a",{attrs:{href:"https://github.com/InternLM/InternLM",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 仓库地址"),s("OutboundLink")],1),t._v("）。相比于第一代 InternLM，InternLM2 在推理、对话体验等方面的能力全面提升，工具调用能力整体升级，并支持 20 万字超长上下文，实现长文对话 “大海捞针”。")]),t._v(" "),s("p",[t._v("InternLM2 包含 InternLM2-7B 和 InternLM2-20B 两种模型规格（20B 模型比 7B 模型功能更强大），每种规格又根据不同的应用场景，分为以下四种模型："),s("strong",[t._v("InternLM2-Base")]),t._v("、"),s("strong",[t._v("InternLM2")]),t._v("、"),s("strong",[t._v("InternLM2-Chat-SFT")]),t._v(" 和 "),s("strong",[t._v("InternLM2-Chat")]),t._v("。其中 "),s("strong",[t._v("InternLM2")]),t._v(" 是官方推荐使用的基础模型，"),s("strong",[t._v("InternLM2-Chat")]),t._v(" 是官方推荐使用的对话模型。下文主要介绍 "),s("strong",[t._v("InternLM2-Chat-7B")]),t._v(" 模型的部署和使用。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("模型")]),t._v(" "),s("th",[t._v("HuggingFace")]),t._v(" "),s("th",[t._v("ModelScope")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("InternLM2-Chat-7B")])]),t._v(" "),s("td",[s("a",{attrs:{href:"https://huggingface.co/internlm/internlm2-chat-7b",target:"_blank",rel:"noopener noreferrer"}},[t._v("仓库地址"),s("OutboundLink")],1)]),t._v(" "),s("td",[s("a",{attrs:{href:"https://modelscope.cn/models/Shanghai_AI_Laboratory/internlm2-chat-7b/summary",target:"_blank",rel:"noopener noreferrer"}},[t._v("仓库地址"),s("OutboundLink")],1)])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("InternLM2-Chat-20B")])]),t._v(" "),s("td",[s("a",{attrs:{href:"https://huggingface.co/internlm/internlm2-chat-20b",target:"_blank",rel:"noopener noreferrer"}},[t._v("仓库地址"),s("OutboundLink")],1)]),t._v(" "),s("td",[s("a",{attrs:{href:"https://modelscope.cn/models/Shanghai_AI_Laboratory/internlm2-chat-20b/summary",target:"_blank",rel:"noopener noreferrer"}},[t._v("仓库地址"),s("OutboundLink")],1)])])])]),t._v(" "),s("h2",{attrs:{id:"环境准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[t._v("#")]),t._v(" 环境准备")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://featurize.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Featurize"),s("OutboundLink")],1),t._v(" 算力平台提供了高效便捷的在线实验环境，在平台上租用合适的 GPU 实例，部署大模型，方便快捷，省时省力，而且价格亲民。")]),t._v(" "),s("p",[t._v("本人实际部署 "),s("strong",[t._v("InternLM2-Chat-7B")]),t._v(" 模型消耗显存 20 GB 左右（受实际参数配置影响，仅供参考），因此租用一张 RTX 3090 或者 RTX 4090 的 GPU 实例就能满足模型运行条件。")]),t._v(" "),s("p",[t._v("关于 Featurize 平台的使用，建议直接阅读 "),s("a",{attrs:{href:"https://docs.featurize.cn/docs/manual/instance-rent",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),s("OutboundLink")],1),t._v("，上手操作非常简单，在此不在赘述。")]),t._v(" "),s("h2",{attrs:{id:"模型部署-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模型部署-使用"}},[t._v("#")]),t._v(" 模型部署&使用")]),t._v(" "),s("h3",{attrs:{id:"页面交互方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面交互方式"}},[t._v("#")]),t._v(" 页面交互方式")]),t._v(" "),s("p",[t._v("两种部署方式只是页面展示效果不同，并无本质区别，选择其中一种方式部署即可。")]),t._v(" "),s("h4",{attrs:{id:"gradio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gradio"}},[t._v("#")]),t._v(" Gradio")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/InternLM/LMDeploy",target:"_blank",rel:"noopener noreferrer"}},[t._v("LMDeploy"),s("OutboundLink")],1),t._v(" 工具中封装了 Gradio，我们使用该工具部署模型。")]),t._v(" "),s("p",[t._v("LMDeploy 所需的运行环境和模型部署代码已整理到下方的脚本文件中，执行脚本文件即可"),s("strong",[t._v("一键部署")]),t._v("。")]),t._v(" "),s("p",[t._v("首先解释下启动命令中的几个参数含义，各参数取值可根据硬件条件自行调整。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("tp（tensor_parallel_size）")]),t._v("：表示使用几张 GPU 来运行一个模型。")]),t._v(" "),s("li",[s("code",[t._v("max_batch_size")]),t._v("：批处理大小，该参数值越大，吞吐量越高，但会占用更多显存。")]),t._v(" "),s("li",[s("code",[t._v("cache_max_entry_count")]),t._v("：设置 k/v 缓存大小，会占用显存。当值为 0~1 之间的小数时，表示 k/v block 使用的内存百分比（例如显存 60 G，该值设置为 0.5，则 k/v 使用的内存总量为 60 * 0.5 = 30G）。当值 >1 时，表示 k/v block 数量。")]),t._v(" "),s("li",[s("code",[t._v("./internlm2-chat-7b")]),t._v("：模型本地存储路径。")])]),t._v(" "),s("p",[t._v("具体操作步骤如下。")]),t._v(" "),s("ol",[s("li",[t._v("通过 ssh 终端连接到服务器实例，新建 "),s("code",[t._v("deploy.sh")]),t._v(" 脚本文件，文件内容如下。")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装运行环境")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Installing Python dependencies"')]),t._v("\npip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" lmdeploy socksio "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("gradio")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.50")]),t._v(".2\n​\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 Git ltf 扩展包")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Installing git lfs extension"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" git-lfs\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" lfs "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n​\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取模型库")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Download repo"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://huggingface.co/internlm/internlm2-chat-7b\n​\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动模型")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start model"')]),t._v("\npython3 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" lmdeploy.serve.gradio.app "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--tp")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--max_batch_size")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--cache_max_entry_count")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--server_name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--server_port")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8888")]),t._v(" ./internlm2-chat-7b\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("p",[t._v("2.  执行 "),s("code",[t._v("sh deploy.sh")]),t._v(" 命令启动脚本。脚本执行大约需要 5 分钟时间（模型仓库中有几个大文件）。新开一个终端窗口，执行命令 "),s("code",[t._v("watch -n 1 nvidia-smi")]),t._v(" 可以实时观察 GPU 资源的使用情况。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2024/01/26/GH3XtiEcfK2haOY.png",alt:"internLM2-01.png"}})]),t._v(" "),s("ol",[s("li",[t._v("模型部署完成，执行下面命令，开放 Featurize 端口。端口开放后 Featurize 会提供公网访问地址。")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开放端口")]),t._v("\nfeaturize port "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8888")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看已开放的端口")]),t._v("\nfeaturize port list\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("4.  访问公网地址，使用模型。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2024/01/26/i8pgJ2YQRBIKZxL.png",alt:"internLM2-02.png"}})]),t._v(" "),s("h4",{attrs:{id:"streamlit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#streamlit"}},[t._v("#")]),t._v(" Streamlit")]),t._v(" "),s("p",[t._v("官方 "),s("a",{attrs:{href:"https://github.com/InternLM/InternLM",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 仓库"),s("OutboundLink")],1),t._v(" 中提供了使用 Streamlit 部署模型的代码。示例代码默认加载远程 Hugging Face 仓库中的模型，如果已经将模型下载到本地，可以修改源码从本地加载模型。")]),t._v(" "),s("p",[t._v("脚本文件如下，可直接执行，一键部署。")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~\n​\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装环境")]),t._v("\npip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("streamlit")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.24")]),t._v(".0\npip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("transformers")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.37")]),t._v(".0\n​\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/InternLM/InternLM.git\n​\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行")]),t._v("\nstreamlit run ./InternLM/chat/web_demo.py\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("默认启动端口：8501，记得开放 Featurize 端口。交互页面如下所示。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2024/01/26/reR23oAXtnk1LKb.png",alt:"internLM2-03.png"}})]),t._v(" "),s("h3",{attrs:{id:"代码方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码方式"}},[t._v("#")]),t._v(" 代码方式")]),t._v(" "),s("p",[s("strong",[t._v("注意")]),t._v("：代码中"),s("code",[t._v("./internlm2-chat-7b")]),t._v(" 为模型本地存储路径，请根据实际情况自行调整。")]),t._v(" "),s("h4",{attrs:{id:"transformers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transformers"}},[t._v("#")]),t._v(" Transformers")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" torch\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" transformers "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" AutoTokenizer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AutoModelForCausalLM\n​\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 没有本地模型，替换为 internlm/internlm2-chat-7b")]),t._v("\n    tokenizer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AutoTokenizer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_pretrained"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./internlm2-chat-7b"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" trust_remote_code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    model "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AutoModelForCausalLM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_pretrained"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./internlm2-chat-7b"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" device_map"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auto"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                                  trust_remote_code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" torch_dtype"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("float16"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    model "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("eval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" history "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tokenizer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你好 我是 Cleaner"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" history"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("h4",{attrs:{id:"modelscope"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modelscope"}},[t._v("#")]),t._v(" ModelScope")]),t._v(" "),s("div",{staticClass:"language-py line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" torch\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" modelscope "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" snapshot_download"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AutoTokenizer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AutoModelForCausalLM\n​\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 没有本地模型，替换为 Shanghai_AI_Laboratory/internlm2-chat-7b")]),t._v("\n    model_dir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" snapshot_download"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./internlm2-chat-7b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    tokenizer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AutoTokenizer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_pretrained"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model_dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" device_map"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auto"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" trust_remote_code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    model "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AutoModelForCausalLM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_pretrained"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model_dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" device_map"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auto"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" trust_remote_code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                                  torch_dtype"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("float16"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    model "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("eval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" history "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tokenizer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你好 我是 Cleaner"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" history"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h4",{attrs:{id:"lmdeploy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lmdeploy"}},[t._v("#")]),t._v(" LMDeploy")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://lmdeploy.readthedocs.io/zh-cn/latest/inference/pipeline.html#id1",target:"_blank",rel:"noopener noreferrer"}},[t._v("LMDeploy 使用文档"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-py line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" lmdeploy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pipeline"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TurbomindEngineConfig\n​\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    backend_config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TurbomindEngineConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                            max_batch_size"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                            cache_max_entry_count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 没有本地模型，替换为 internlm/internlm2-chat-7b")]),t._v("\n    pipe "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pipeline"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./internlm2-chat-7b"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" backend_cofing"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("backend_cofing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pipe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你好 我是 Cleaner"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("梳理 InternLM2 的特点，帮助想要使用大语言模型的个人开发者或者企业，在面对众多大语言模型时，能够了解大语言模型提供的能力，并结合自身的需求与成本，做出清晰明确的选择。")]),t._v(" "),s("ul",[s("li",[t._v("开源免费、可商用。")]),t._v(" "),s("li",[t._v("超长上下文支持：200K token 的输入与理解。（书籍等大文本数据做摘要总结、若干轮对话后回忆之前的内容（大海捞针））")]),t._v(" "),s("li",[t._v("支持工具调用能力：能够在一次交互中多次调用工具，完成相对复杂的任务。（Agent）")]),t._v(" "),s("li",[t._v("支持微调和训练。（提供专有数据集，打造个人/企业私有化大模型）。")])]),t._v(" "),s("h2",{attrs:{id:"末尾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#末尾"}},[t._v("#")]),t._v(" 末尾")]),t._v(" "),s("p",[t._v("作为一名软件开发人员，大模型的相关应用已经成为我日常工作和生活中的常用工具，本人也在不断跟进了解人工智能的发展情况。")]),t._v(" "),s("p",[t._v("大模型从对话、聊天到工具调用、长文理解，乃至多模态，在不断打破人类认知，带给我们无限的想象空间。")]),t._v(" "),s("p",[t._v("也许未来的某一天，我们可以拥有自己的贾维斯（Friday）。")])])}),[],!1,null,null,null);s.default=e.exports}}]);