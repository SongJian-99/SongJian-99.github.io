(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{541:function(s,t,e){"use strict";e.r(t);var a=e(2),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("由于工作中业务比较复杂，一条 SQL 查询语句通常会涉及多个表，加上某些表数据量庞大（百万、甚至千万），SQL 语句的执行效率就成为日常工作中重点关注的方面。同时作为后端开发人员，对 SQL 语句进行优化的能力也是必不可少的。")]),s._v(" "),t("h2",{attrs:{id:"explain-各字段含义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#explain-各字段含义"}},[s._v("#")]),s._v(" Explain 各字段含义")]),s._v(" "),t("p",[t("code",[s._v("Explain")]),s._v(" 关键字可以查看 SQL 语句（适用 SELECT、INSERT、UPDATE、DELETE）的执行计划，使用命令如下。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("explain")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" user_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("结果信息中包含一些重要字段，我们先来了解下这些字段分别代表什么含义。")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("字段")]),s._v(" "),t("th",[s._v("含义")]),s._v(" "),t("th",[s._v("备注")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("id")]),s._v(" "),t("td",[s._v("序列标识")]),s._v(" "),t("td",[s._v("SQL 执行时从各表读取数据的顺序（常用）")])]),s._v(" "),t("tr",[t("td",[s._v("select_type")]),s._v(" "),t("td",[s._v("查询类型")]),s._v(" "),t("td",[s._v("SQL 语句的查询类型（常用）")])]),s._v(" "),t("tr",[t("td",[s._v("table")]),s._v(" "),t("td",[s._v("表名")]),s._v(" "),t("td",[s._v("SQL 执行时涉及的表信息。可取值：1、表名（例如：user）2、<derived"),t("em",[s._v("N")]),s._v(">（N 是 id 值，例如：<derived4>）3、<union"),t("em",[s._v("M")]),s._v(","),t("em",[s._v("N")]),s._v(">（M、N 是 id 值，例如：<union1,2>）（常用）")])]),s._v(" "),t("tr",[t("td",[s._v("partitions")]),s._v(" "),t("td",[s._v("分区信息")]),s._v(" "),t("td",[s._v("如果不涉及分区表，该列值为 NULL。")])]),s._v(" "),t("tr",[t("td",[s._v("type")]),s._v(" "),t("td",[s._v("连接类型")]),s._v(" "),t("td",[s._v("用来衡量 SQL 语句的查询效率（常用）")])]),s._v(" "),t("tr",[t("td",[s._v("possible_keys")]),s._v(" "),t("td",[s._v("SQL 语句可能使用的索引")]),s._v(" "),t("td",[s._v("取值可以为一个、多个或者为 NULL（常用）")])]),s._v(" "),t("tr",[t("td",[s._v("key")]),s._v(" "),t("td",[s._v("SQL 语句实际使用的索引")]),s._v(" "),t("td",[s._v("如果为 NULL，则表示未使用索引（常用）")])]),s._v(" "),t("tr",[t("td",[s._v("key_len")]),s._v(" "),t("td",[s._v("索引使用的字节数")]),s._v(" "),t("td",[s._v("估计值，大致使用的字节数。值越小，索引的效率越高")])]),s._v(" "),t("tr",[t("td",[s._v("ref")]),s._v(" "),t("td",[s._v("连接使用的列或常数")]),s._v(" "),t("td",[s._v("（参考）")])]),s._v(" "),t("tr",[t("td",[s._v("rows")]),s._v(" "),t("td",[s._v("MySQL 估计要读取并检测的行数")]),s._v(" "),t("td",[s._v("（参考）")])]),s._v(" "),t("tr",[t("td",[s._v("filtered")]),s._v(" "),t("td",[s._v("表示通过索引过滤的行百分比")]),s._v(" "),t("td",[s._v("（参考）")])]),s._v(" "),t("tr",[t("td",[s._v("Extra")]),s._v(" "),t("td",[s._v("附加信息")]),s._v(" "),t("td",[s._v("用来优化 SQL 语句（常用）")])])])]),s._v(" "),t("h3",{attrs:{id:"id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#id"}},[s._v("#")]),s._v(" id")]),s._v(" "),t("p",[s._v("序列号，表示 MySQL 执行 SQL 语句时从各表读取数据的顺序。id 越大，执行优先级越高；id 相同的为一组，执行优先级按照由上到下的循序排列。在复杂的 SQL 语句中可以清晰查看 SQL 的执行顺序。")]),s._v(" "),t("h3",{attrs:{id:"select-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#select-type"}},[s._v("#")]),s._v(" select_type")]),s._v(" "),t("p",[s._v("SQL 语句的查询类型。取值如下。")]),s._v(" "),t("ul",[t("li",[s._v("SIMPLE：简单查询，不涉及子查询和关联查询。")]),s._v(" "),t("li",[s._v("PRIMARY：主查询（查询中包含子查询，最外层的查询为 PRIMARY）。")]),s._v(" "),t("li",[s._v("UNION：UNION 之后的查询。"),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("union")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[s._v("DEPENDENT UNION：UNION 之后的查询，但依赖外部查询结果。")]),s._v(" "),t("li",[s._v("UNION RESULT：UNION 操作的结果。")]),s._v(" "),t("li",[s._v("SUBQUERY：子查询，通常出现在 select 和 where 语句中")]),s._v(" "),t("li",[s._v("DEPENDENT SUBQUERY：子查询，但依赖外部查询结果。")]),s._v(" "),t("li",[s._v("DERIVED：派生表，临时产生的虚拟表（不实际存在于数据库中）。")]),s._v(" "),t("li",[s._v("DEPENDENT DERIVED：派生表，但依赖外部查询结果。")]),s._v(" "),t("li",[s._v("MATERIALIZED：物化子查询。")]),s._v(" "),t("li",[s._v("UNCACHEABLE SUBQUERY：无法缓存结果的子查询，外部查询的每一行都需要子查询重新计算结果。")]),s._v(" "),t("li",[s._v("UNCACHEABLE UNION：UNION 之后的查询是无法缓存结果的子查询（UNCACHEABLE SUBQUERY）。")])]),s._v(" "),t("h3",{attrs:{id:"type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[s._v("#")]),s._v(" type")]),s._v(" "),t("p",[s._v("连接类型。MySQL 优化器选择的查询方法，用来衡量 SQL 语句的查询效率。效率从高到低，取值如下。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("system：表中只有一行数据。const 类型的特例。")])]),s._v(" "),t("li",[t("p",[s._v("const：表中最多有一个匹配记录。通常情况下使用了主键索引或唯一索引。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 主键索引")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" phone "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 唯一索引")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("eq_ref：使用主键索引或唯一索引进行联表查询时，最多返回一条符合条件的记录。与 const 类型非常相似，区别是 eq_ef 通常出现在联表的情况下，而 const 通常出现在单表情况下。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("role "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("role_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" role"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用户角色一对多的情况")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("ref：使用非唯一索引查找和多表连接，会返回匹配某个单独值的所有行。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("fulltext：使用 fulltext 索引，没见过。")])]),s._v(" "),t("li",[t("p",[s._v("ref_or_null：类似 ref，但是包含了搜索 NULL 值的情况。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("index_merge：使用了索引合并的优化方法。")]),s._v(" "),t("p",[s._v("索引合并：对多个索引分别进行条件扫描，然后将它们各自的结果进行合并。")])]),s._v(" "),t("li",[t("p",[s._v("unique_subquery：在特殊的子查询中用来替换 eq_ref 类型。MySQL 内部优化器的一个标识符，并不是 "),t("code",[s._v("Explain")]),s._v(" 输出的标准字段。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" primary_key "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" xxx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("index_subquery：类似 unique_subquery，但是查询的列是非唯一索引。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" key_column "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" xxx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("range：检索给定范围的行。")])]),s._v(" "),t("li",[t("p",[s._v("index：表示只遍历索引树，不扫描数据行，只从索引树中获取数据。")])]),s._v(" "),t("li",[t("p",[s._v("ALL：全表扫描，没有使用索引。")])])]),s._v(" "),t("h3",{attrs:{id:"extra"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extra"}},[s._v("#")]),s._v(" Extra")]),s._v(" "),t("p",[s._v("附加信息，MySQL 执行 SQL 语句的相关信息，是否使用临时表、文件排序等.")]),s._v(" "),t("p",[t("strong",[s._v("性能好")])]),s._v(" "),t("ul",[t("li",[s._v("Using index：查询的列被索引覆盖，并且 where 条件满足最左匹配原则。通过索引即可获取所需的数据，检索效率高（覆盖索引，避免回表）。")]),s._v(" "),t("li",[s._v("Using index Condition：查询的列未被索引覆盖，但 where 条件可以使用到索引。（需要回表查询数据，多个 where 条件时有索引下推优化）")]),s._v(" "),t("li",[s._v("Using MRR：多范围读取优化，减少磁盘随机访问的次数，提升数据检索的效率。")]),s._v(" "),t("li",[s._v("Using join buffer：MySQL 使用连接缓冲区来处理查询，优化查询性能。连接缓冲区用于存储连接操作的中间结果。")]),s._v(" "),t("li",[s._v("Using where Using index：查询的列被索引覆盖，并且 where 条件是索引列之一，但不是索引的前导列。（使用 where 条件过滤结果，又使用了覆盖索引来优化查询性能）")])]),s._v(" "),t("p",[t("strong",[s._v("性能差")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Distinct：MySQL 执行 distinct 操作过滤结果集中的重复记录，性能较差。")]),s._v(" "),t("p",[t("strong",[s._v("优化：可以在入库前做唯一校验，保证数据库记录唯一，避免使用 distinct。")])])]),s._v(" "),t("li",[t("p",[s._v("Using temporary：MySQL 需要创建一个临时表来处理查询。一般发生在涉及到排序（"),t("code",[s._v("order by")]),s._v("）和分组（"),t("code",[s._v("group by")]),s._v("）的查询操作中。如果数据量较少，临时表会存放在内存中，数据检索速度尚可。如果数据量很大，内存中存不下，临时表则会存放在磁盘上，数据检索速度很慢。")]),s._v(" "),t("p",[t("strong",[s._v("优化：1、为排序和分组字段建立索引。2、加内存，确保临时表能够装载到内存。")])])]),s._v(" "),t("li",[t("p",[s._v("Using filesort：MySQL 需要对结果集进行排序操作，但无法使用索引，必须在磁盘上创建一个临时文件来完成排序。")]),s._v(" "),t("p",[t("strong",[s._v("优化：1、给排序字段添加索引。2、加内存，确保临时文件能够装载到内存。")])])]),s._v(" "),t("li",[t("p",[s._v("Using where：查询的列未被索引覆盖、where 条件非索引列或 where 条件不是索引的前导列。（没有使用索引，仅使用 where 条件过滤结果）")]),s._v(" "),t("p",[t("strong",[s._v("优化：为条件字段建立索引")])])])]),s._v(" "),t("h2",{attrs:{id:"实战优化思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实战优化思路"}},[s._v("#")]),s._v(" 实战优化思路")]),s._v(" "),t("p",[s._v("了解了 Explain 各个字段的含义和使用，那么如何在实际工作中使用呢？")]),s._v(" "),t("p",[s._v("大部分查询性能差的 SQL 语句都存在索引设计不合理的问题，一个复合索引字段顺序的调整，查询效率就会天差地别。实际工作中具体要如何优化 SQL 语句并无绝对，因为受到业务、表、索引等多方面的影响，每条 SQL 语句优化的方法都不一样，但是大体思路都是差不多的。")]),s._v(" "),t("ol",[t("li",[s._v("判断 SQL 语句是否使用索引（key 列和 type 列）。")]),s._v(" "),t("li",[s._v("确认 SQL 语句的查询类型和连接类型（select_type 列和 type 列），了解优化器选择的查询方法。")]),s._v(" "),t("li",[s._v("查看 Extra 列的附加信息，进一步了解 SQL 语句的执行细节。")]),s._v(" "),t("li",[s._v("配合 id 列和 table 列，了解 SQL 语句的执行流程，分析复杂 SQL 语句时常用。")]),s._v(" "),t("li",[s._v("根据掌握的信息进行优化。索引设计不合理的情况通过添加索引、调整复合索引字段的顺序（保证 where、order by、group by 字段为索引字段）或者使用索引相关命令（"),t("code",[s._v("force index")]),s._v("、"),t("code",[s._v("ignore index")]),s._v("）的方式基本就可以解决。对于复杂的 SQL 语句有时需要重写，结合实际业务，调整 SQL 语句的执行顺序，利用索引提升查询效率。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);