(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{450:function(v,_,t){"use strict";t.r(_);var a=t(3),s=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("blockquote",[_("p",[v._v("最近参与了 Nginx 微服务之月活动，学习到许多微服务架构相关的知识，应用到日常工作中，收获颇丰。")]),v._v(" "),_("p",[v._v("理论与实际相结合，理解微服务架构下软件开发过程中的各个步骤，知其然知其所以然。")])]),v._v(" "),_("h2",{attrs:{id:"十二要素"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#十二要素"}},[v._v("#")]),v._v(" "),_("a",{attrs:{href:"https://12factor.net/zh_cn/",target:"_blank",rel:"noopener noreferrer"}},[v._v("十二要素"),_("OutboundLink")],1)]),v._v(" "),_("h3",{attrs:{id:"基准代码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基准代码"}},[v._v("#")]),v._v(" 基准代码")]),v._v(" "),_("p",[_("strong",[v._v("一份基准代码，多份部署")]),v._v("。一份基准代码只对应一个应用程序。")]),v._v(" "),_("p",[v._v("应用程序从开发到使用，一般会涉及多个运行环境（例如开发环境、测试环境、预发布环境和生产环境等）。不同的运行环境有不同的使用需求。")]),v._v(" "),_("p",[v._v("通常我们会使用版本控制系统（SVN 或 Git）对项目源码进行追踪管理，通过创建多个代码分支来区分不同的运行环境，例如 dev 对应开发环境，test 对应测试环境，main 对应生产环境。如果要部署开发环境，只需对 dev 分支下的代码进行打包部署即可。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://s2.loli.net/2023/07/13/8tsVUnX5NgJP3HR.png",alt:"无标题-2023-01-30-1826.png"}})]),v._v(" "),_("h3",{attrs:{id:"依赖"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[v._v("#")]),v._v(" 依赖")]),v._v(" "),_("p",[_("strong",[v._v("显式声明依赖关系")]),v._v("。\n通过"),_("code",[v._v("yaml")]),v._v("、"),_("code",[v._v("xml")]),v._v("、"),_("code",[v._v("json")]),v._v("等格式的配置文件，显式声明应用程序依赖的组件、组件的版本以及不同组件之间的依赖关系，实现对组件的统一管理。")]),v._v(" "),_("p",[v._v("项目的依赖管理，通常由包管理工具负责，有些开发语言本身提供了包管理工具，如 Node.js 中的 Npm，Python 中的 Pip。其他语言如 Java、C# 可以通过集成相关的包管理工具（Maven、Gradle）对依赖进行统一管理。（"),_("strong",[v._v("包管理工具的功能远不止于此")]),v._v("）")]),v._v(" "),_("p",[_("strong",[v._v("好处")])]),v._v(" "),_("ul",[_("li",[v._v("快速查看应用程序所依赖的组件，灵活调整组件的版本，甚至替换或删除某个组件。")]),v._v(" "),_("li",[v._v("方便开发人员快速上手新项目。开发人员只需提前配置好项目相关的依赖管理工具，通过执行命令（"),_("code",[v._v("mvn install")]),v._v("、"),_("code",[v._v("npm install")]),v._v("等）即可安装项目所需依赖。")])]),v._v(" "),_("h3",{attrs:{id:"配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[v._v("#")]),v._v(" 配置")]),v._v(" "),_("p",[_("strong",[v._v("配置与代码分离，在运行环境中存储配置，并独立管理。")])]),v._v(" "),_("p",[v._v("因为使用需求和硬件资源的差异，不同的运行环境会有不同的配置信息，如：")]),v._v(" "),_("ul",[_("li",[v._v("数据库、缓存、消息队列等服务的配置信息（连接地址、账号、密码等）")]),v._v(" "),_("li",[v._v("第三方服务的配置信息（短信服务、邮件服务等）")]),v._v(" "),_("li",[v._v("运行环境独有的配置信息（IP、端口、硬件资源导致的配置差异等）")])]),v._v(" "),_("p",[v._v("因此需要将配置和代码严格分离，不同运行环境的配置独立管理。同时我们也需要有一定的配置设计能力。")]),v._v(" "),_("ul",[_("li",[v._v("识别哪些配置需要加密（密码、SecretKey 等）、哪些配置是可变的，可以在不同运行环境中更改。")]),v._v(" "),_("li",[v._v("识别哪些配置可以动态加载，哪些配置需要重启应用才能加载（如更改端口需要重启应用才能生效）。")]),v._v(" "),_("li",[v._v("配置中心选型：Apollo、Nacos、etcd、Consul、K8s API Server。")])]),v._v(" "),_("h3",{attrs:{id:"支撑服务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#支撑服务"}},[v._v("#")]),v._v(" 支撑服务")]),v._v(" "),_("p",[_("strong",[v._v("把支撑服务当作附加资源")]),v._v("。")]),v._v(" "),_("p",[v._v("应用程序运行所需要的通过网络调用的各种服务都视为支撑服务，包括：数据库、缓存中间件、消息中间件、配置中心、注册中心、第三方服务等。")]),v._v(" "),_("p",[v._v("应用程序和支撑服务之间具有低耦合的关系，不需要改动任何代码，只需在配置文件中调整服务的配置信息即可快速切换服务。（本地服务切换为第三方提供的服务、服务故障切换等）")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://s2.loli.net/2023/07/22/DarpPZ38UO6tIfL.png",alt:"无标题-2023-07-22-1049.png"}})]),v._v(" "),_("h3",{attrs:{id:"构建、发布、运行"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构建、发布、运行"}},[v._v("#")]),v._v(" 构建、发布、运行")]),v._v(" "),_("p",[_("strong",[v._v("严格分离构建、发布和运行。")])]),v._v(" "),_("p",[v._v("应用程序从源代码到部署使用会经过构建、发布和运行三个阶段。")]),v._v(" "),_("ul",[_("li",[v._v("构建：将指定版本的源代码和所需的资源文件转换为可执行的包的过程。（编译源代码、打包依赖项等）")]),v._v(" "),_("li",[v._v("发布：将构建环节生成的可执行包与当前运行环境所需的配置相结合的过程。（结合后可以直接在运行环境中使用）")]),v._v(" "),_("li",[v._v("运行：指定发布版本，启动一系列应用程序进程。")])]),v._v(" "),_("p",[_("strong",[v._v("CI/CD（持续集成/持续部署）")])]),v._v(" "),_("p",[v._v("通过 CI/CD 流水线自动化构建、发布、运行流程。")]),v._v(" "),_("h3",{attrs:{id:"进程-端口绑定-并发-易处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程-端口绑定-并发-易处理"}},[v._v("#")]),v._v(" 进程&端口绑定&并发&易处理")]),v._v(" "),_("p",[_("strong",[v._v("进程：通过一个或多个无状态进程运行应用程序")]),v._v("。")]),v._v(" "),_("p",[_("strong",[v._v("端口绑定：通过端口绑定提供服务")]),v._v("。")]),v._v(" "),_("p",[_("strong",[v._v("并发：通过进程模型进行扩展")]),v._v("。")]),v._v(" "),_("p",[_("strong",[v._v("易处理：快速启动和优雅终止服务，最大化应用程序健壮性")]),v._v("。")]),v._v(" "),_("p",[v._v("微服务架构中，每个微服务通常运行在独立的进程中，通过暴露指定端口并监听端口上的请求，对外提供服务。每个微服务都是一个独立的运行单元，可以独立地进行部署和扩展。")]),v._v(" "),_("p",[v._v("并发和易处理能力要求服务必须是无状态的，任何持久化的数据都要存储在支撑服务中。通过无状态服务可以快速启动和终止服务、同时启动多个实例，提高应用程序的伸缩性、高可用性和高并发性，最大化应用程序的健壮性。")]),v._v(" "),_("h3",{attrs:{id:"开发环境和线上环境等价"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开发环境和线上环境等价"}},[v._v("#")]),v._v(" 开发环境和线上环境等价")]),v._v(" "),_("p",[_("strong",[v._v("尽可能保持开发、预发布、线上等环境相同。")])]),v._v(" "),_("p",[v._v("缩小不同运行环境之间的差异，使整个 CI/CD 流程更加顺滑。")]),v._v(" "),_("ul",[_("li",[v._v("缩小时间差异：开发人员编写代码后，可以在小时或分钟级别下完成部署。")]),v._v(" "),_("li",[v._v("缩小人员差异：从由开发人员编写代码，运维人员部署代码到编写代码的开发人员密切参与代码的部署。")]),v._v(" "),_("li",[v._v("缩小工具差异：尽量保持开发环境和线上环境一致。")]),v._v(" "),_("li",[v._v("使用相同类型和版本的支撑服务，避免出现开发环境正常运行，线上环境不兼容的情况。")])]),v._v(" "),_("h3",{attrs:{id:"日志"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#日志"}},[v._v("#")]),v._v(" 日志")]),v._v(" "),_("p",[_("strong",[v._v("把日志当作事件流。")])]),v._v(" "),_("p",[v._v("应用程序包含多个微服务，而且每个微服务都可能有多个实例，如果通过终端查看各个服务的运行日志，就会非常低效，同时各个服务的日志也不易管理。")]),v._v(" "),_("p",[v._v("引入日志监控分析平台，通过流的形式将日志统一采集到日志平台，集中对日志进行监控、分析和存储，提高运维效率。")]),v._v(" "),_("h3",{attrs:{id:"管理进程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#管理进程"}},[v._v("#")]),v._v(" 管理进程")]),v._v(" "),_("p",[_("strong",[v._v("将后台管理任务当作一次性进程运行")]),v._v("。")]),v._v(" "),_("p",[v._v("应用程序正常运行的过程中，开发人员经常会执行一些管理和维护应用程序的一次性任务，如数据库迁移、使用控制台执行某些代码等，将这些任务视为一次性进程。")]),v._v(" "),_("h2",{attrs:{id:"更多"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#更多"}},[v._v("#")]),v._v(" 更多")]),v._v(" "),_("p",[v._v("十二要素从 12 年提出到现在已经十余年，如今云原生、容器化时代，十二要素可能并不能完全满足当下微服务架构的应用程序。")]),v._v(" "),_("ul",[_("li",[v._v("API 优先：系统或服务间通过 API 通讯，微服务之间解耦。")]),v._v(" "),_("li",[v._v("遥测：输出监控指标与追踪日志用于统一监控。")]),v._v(" "),_("li",[v._v("认证与授权：系统或服务间零信任访问。")])]),v._v(" "),_("h2",{attrs:{id:"末尾"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#末尾"}},[v._v("#")]),v._v(" 末尾")]),v._v(" "),_("p",[v._v("理解了微服务架构下应用开发的各个要素，再看应用架构图，如此清晰明了。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://s2.loli.net/2023/07/23/ByKvTjFfrne2o4A.png",alt:"若依微服务版架构图"}})]),_("p",{attrs:{align:"center"}},[v._v("（若依微服务版本架构图）")]),_("p")])}),[],!1,null,null,null);_.default=s.exports}}]);