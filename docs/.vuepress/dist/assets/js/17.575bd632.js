(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{451:function(s,a,t){"use strict";t.r(a);var e=t(3),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("阅读本文，你可以收获：")]),s._v(" "),a("ul",[a("li",[s._v("线上问题定位和排查思路")]),s._v(" "),a("li",[s._v("Docker 和 MySQL 相关命令使用")]),s._v(" "),a("li",[s._v("MySQL 锁和索引相关知识学习")])]),s._v(" "),a("h2",{attrs:{id:"现象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现象"}},[s._v("#")]),s._v(" 现象")]),s._v(" "),a("p",[s._v("开发环境一个微服务模块所有接口请求报错，对应页面无法访问。其他未涉及到该模块的接口和页面访问正常。")]),s._v(" "),a("p",[s._v("最近未更新过该服务，之前该服务也没有发生过不可用的情况。")]),s._v(" "),a("h2",{attrs:{id:"错误排查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误排查"}},[s._v("#")]),s._v(" 错误排查")]),s._v(" "),a("p",[s._v("根据所观察到的现象，加上简单思考判断，可以确定是单个服务出现故障，而且大概率是服务运行一段时间后出现的问题，具体原因尚不清楚。")]),s._v(" "),a("h3",{attrs:{id:"查看日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看日志"}},[s._v("#")]),s._v(" 查看日志")]),s._v(" "),a("p",[s._v("日志是我们排查问题时的第一个入口，根据日志信息，可以进一步定位问题。")]),s._v(" "),a("ul",[a("li",[s._v("登陆到远程服务器，执行如下命令，查看容器日志。")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" // 查看容器 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--tail")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),s._v(" 容器id\t\t// 查看容器最后2000行日志\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("日志中显示的报错信息如下")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jdbc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("CannotGetJdbcConnectionException")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Failed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("obtain")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JDBC")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Connection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" nested exception is "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("SQLTransientConnectionException")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HikariPool")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Connection")]),s._v(" is not available"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" request timed out after "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30000")]),s._v("ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("报错信息显示连接池请求数据库连接超时，有几种可能的原因会导致该错误：")]),s._v(" "),a("p",[s._v("1、网络或数据库故障，这也是最先被排除的原因，因为其他微服务运行正常，说明网络连接没问题、数据库也没故障宕机。")]),s._v(" "),a("p",[s._v("2、连接池配置不足，因为业务请求量并不大，也查看了连接池配置，并无问题，因此这种原因可能性较小，但不排除；")]),s._v(" "),a("p",[s._v("3、连接池最大活跃连接数达到了上限，连接池的配置无问题，但因为异常原因导致了连接数达到了上限，这个原因可能性相对来说最高，但还要观察数据库的运行情况，收集更多信息才能进行下一步判断。")])])]),s._v(" "),a("h3",{attrs:{id:"连接数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接数据库"}},[s._v("#")]),s._v(" 连接数据库")]),s._v(" "),a("p",[s._v("information_schema 数据库下有几张表可以帮助我们收集数据库的运行情况。")]),s._v(" "),a("ol",[a("li",[s._v("查看当前数据库运行的所有事务，确认是否有大事务长时间持有数据库连接。表 INNODB_TRX 记录了当前正在运行的事务信息，包括事务 ID、事务状态、事务开始时间、锁等待时间等。")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看当前运行的所有事务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" information_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("INNODB_TRX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("查询结果如图。发现大量事务处于 LOCK WAIT 状态，只有一个事务处于 RUNNING 状态，被阻塞的事务都是在执行更新同一张表中的记录操作。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09c268b6a7164b628a9b1d7d658ddf64~tplv-k3u1fbpfcp-zoom-1.image",alt:"ba585b0c760dc1b474202c3cae27dd6c.png"}})]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("进一步确认，查看当前数据库出现的锁信息。表 INNODB_LOCKS 记录了当前被锁定的对象以及相关的锁信息，包括事务 ID、锁类型、锁定模式、锁定对象等。"),a("strong",[s._v("注意 MySQL 8.0 版本之后没有此表")]),s._v("。")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当前出现的锁")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" infromation_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("INNODB_LOCKS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// MySQL 8.0之后执行下面语句")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" performance_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data_locks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("查询结果如图。锁的记录数正好对应上面查询的事务数，并且都持有 X 锁（排他锁）")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a66b16be038e489eb858d69cdb297be5~tplv-k3u1fbpfcp-zoom-1.image",alt:"image-20221222142135836.png"}})]),s._v(" "),a("h2",{attrs:{id:"问题定位-解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题定位-解决"}},[s._v("#")]),s._v(" 问题定位&解决")]),s._v(" "),a("p",[s._v("至此，错误产生的原因已经明确：数据库中大量事务占用连接资源并处于阻塞状态，连接池最大连接数达到上限，无法获取新的连接来处理请求。只要找到事务阻塞的原因并且解决，那么问题就解决了。")]),s._v(" "),a("p",[s._v("查看事务执行的 SQL 语句和对应的表结构，发现 where 条件后的字段没有添加索引。"),a("strong",[s._v("更新导致了锁表")]),s._v("！！！")]),s._v(" "),a("p",[s._v("解决：为字段加上索引（一个索引引发这么大问题！）。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" 索引名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("列名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("为什么服务运行了一段时间后，出现了这个问题？")]),s._v(" "),a("p",[s._v("服务刚运行的时候，连接池资源是够用的，业务也能正常使用。但是这条更新语句调用频繁，会不断产生新连接执行更新操作，然而同一时刻只能有一个事务执行（锁表），其他事务都会阻塞。阻塞的事务越来越多，事务又占有连接资源，可用的连接数越来越少，服务运行一段时间之后，就出现了问题。")])]),s._v(" "),a("li",[a("p",[s._v("update 没加索引，为什么会锁表？")]),s._v(" "),a("p",[s._v("数据库的事务隔离级别是“可重复读”。在 InnoDB 事务中，对记录加锁的基本单位是 next-key 锁（记录锁 + 间隙锁）。当 update 语句的 where 条件没有使用索引时，需要扫描整个表来找到满足 WHERE 条件的记录，于是就会对所有记录加上 next-key 锁，相当于把整个表锁住了。")])]),s._v(" "),a("li",[a("p",[s._v("update 加上索引，能避免锁表吗？")]),s._v(" "),a("p",[s._v("如果条件字段是唯一索引，next-key 锁会退化成记录锁，只会锁一条记录，不会锁表。")]),s._v(" "),a("p",[s._v("如果条件字段不是唯一索引，得看这条语句在执行过程中，优化器最终选择的是索引扫描，还是全表扫描，如果走了全表扫描，同样还是会锁表。")])])]),s._v(" "),a("h2",{attrs:{id:"末尾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#末尾"}},[s._v("#")]),s._v(" 末尾")]),s._v(" "),a("p",[s._v("实践是检验真理的唯一标准。问题排查与解决的过程也是理论应用于实战的过程。")]),s._v(" "),a("p",[s._v("如果本文对你有帮助的话，欢迎 "),a("strong",[s._v("点赞 + 收藏")]),s._v("，非常感谢！")])])}),[],!1,null,null,null);a.default=n.exports}}]);