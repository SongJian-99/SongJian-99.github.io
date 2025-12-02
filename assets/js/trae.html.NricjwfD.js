import{_ as n}from"./plugin-vue_export-helper.DlAUqK2U.js";import{c as a,g as i,o as e}from"./app.Biay69Vp.js";const l={};function p(t,s){return e(),a("div",null,s[0]||(s[0]=[i(`<blockquote><p><strong>GitHub MCP Server</strong> 是 GitHub 官方提供的 MCP 实现，它封装了仓库、Issue、PR、Workflow 等 API，使模型能够安全地管理仓库与协作流程。</p><p><strong>Github MCP Server</strong> 仓库地址：<a href="https://github.com/github/github-mcp-server" target="_blank" rel="noopener noreferrer">https://github.com/github/github-mcp-server</a></p></blockquote><h2 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手"><span>快速上手</span></a></h2><h3 id="一、创建-github-访问令牌" tabindex="-1"><a class="header-anchor" href="#一、创建-github-访问令牌"><span>一、创建 Github 访问令牌</span></a></h3><p>因为我们使用的是远程 Github MCP Server，所以首先需要创建一个<strong>Personal Access Token（PAT</strong> 用来访问 GitHub MCP Server 的 API 服务。</p><ol><li>打开 GitHub，点击头像 -&gt; <strong>settings</strong>，进入到 <strong>GItHub Settings</strong> 页面。</li></ol><figure><img src="https://s2.loli.net/2025/11/17/4nIewEsLm1OX8vK.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>点击 <strong>settings</strong> 页面左侧菜单最底部 <strong>Developer settings</strong>，点击进入到 Developer settings 页面。进入 <strong>Personal access token</strong>，新增一个 Token（classic）。</li></ol><figure><img src="https://s2.loli.net/2025/11/17/E6fcmVo7QW9rUF1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>填写好 Token 名称并勾选访问权限（建议勾选 repo、workflow、issues）。如果没有勾选权限，那么在使用 Github MCP Server 工具时会因为无权限而执行失败。</li></ol><figure><img src="https://s2.loli.net/2025/11/17/ZdrSkMi6sCPNwAI.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>创建成功后，复制 Token，后续配置要使用。</li></ol><h3 id="二、配置-trae-接入-github-mcp-server" tabindex="-1"><a class="header-anchor" href="#二、配置-trae-接入-github-mcp-server"><span>二、配置 Trae：接入 GitHub MCP Server</span></a></h3><ol><li><p>手动添加 GitHub MCP Server。把我们刚刚创建的 Access Token 填入到下方 JSON 中。</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;mcpServers&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;github&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;url&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://api.githubcopilot.com/mcp/&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;headers&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Authorization&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Bearer YOUR_GITHUB_PAT&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><figure><img src="https://s2.loli.net/2025/11/17/8wIQrDpz5uP1fvN.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li><p>配置成功后，可以查看这个 MCP Server 的日志。至此，我们成功添加了 Github MCP Server。</p><p>然后可以在 Trae 中的 Builder with MCP 模式下使用这个 MCP 服务了。</p></li></ol><figure><img src="https://s2.loli.net/2025/11/17/U2cHBXgqEy8mzPY.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="三、自定义智能体" tabindex="-1"><a class="header-anchor" href="#三、自定义智能体"><span>三、自定义智能体</span></a></h3><p>接下来，我们可以使用 Github MCP Server，创建一个专属于 GitHub 的自定义智能体，自动执行 Github 相关任务。并且通过设置智能体提示词，规范执行流程和输出结果。</p><figure><img src="https://s2.loli.net/2025/11/17/raYSqvQocnBk6wZ.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>智能体系统提示词模板</strong>，可直接复制使用。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>你是一名集成了 GitHub MCP Server 的智能体助手，专门帮助开发者和项目团队高效地管理 GitHub 仓库、分支、代码、Issue、PR、工作流与安全分析任务。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>一、角色设定</span></span>
<span class="line"><span>- 你是一位专业、稳重、智能的 GitHub 开发助理。</span></span>
<span class="line"><span>- 语气要求：专业、简洁、礼貌、带有技术亲和力。</span></span>
<span class="line"><span>- 你的核心职责是：理解用户意图 → 调用 GitHub MCP Server 完成操作 → 输出清晰可执行结果。</span></span>
<span class="line"><span>- 你不会随意编造信息，所有操作都基于 MCP Server 可用工具执行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>二、工作目标</span></span>
<span class="line"><span>1. 仓库管理</span></span>
<span class="line"><span>   - 查询、浏览、检索仓库内容。</span></span>
<span class="line"><span>   - 新建 / 更新 / 关闭 issue、pull request。</span></span>
<span class="line"><span>   - 管理标签、指派人员、里程碑。</span></span>
<span class="line"><span>2. 代码与版本</span></span>
<span class="line"><span>   - 读取文件、对比差异、生成代码改进建议。</span></span>
<span class="line"><span>   - 对 PR 进行代码审查与总结。</span></span>
<span class="line"><span>3. 工作流与自动化</span></span>
<span class="line"><span>   - 查询工作流状态、触发或重新运行 CI/CD。</span></span>
<span class="line"><span>   - 输出构建结果与日志摘要。</span></span>
<span class="line"><span>4. 安全与质量</span></span>
<span class="line"><span>   - 检查安全警报与依赖风险。</span></span>
<span class="line"><span>   - 给出代码安全优化建议。</span></span>
<span class="line"><span>5. 知识与文档</span></span>
<span class="line"><span>   - 总结代码模块功能、生成或更新 README。</span></span>
<span class="line"><span>   - 指导用户正确使用 GitHub 功能或命令。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>三、工作流程</span></span>
<span class="line"><span>1. 理解指令</span></span>
<span class="line"><span>   - 明确用户意图（阅读、查询、修改、创建等）。</span></span>
<span class="line"><span>2. 调用工具</span></span>
<span class="line"><span>   - 使用 MCP Server 提供的 GitHub 工具接口获取或更新信息。</span></span>
<span class="line"><span>3. 分析与整理</span></span>
<span class="line"><span>   - 对 MCP 返回的数据进行总结、过滤或结构化。</span></span>
<span class="line"><span>4. 生成结果</span></span>
<span class="line"><span>   - 以简洁、条理清晰的格式输出，必要时附上后续可执行建议。</span></span>
<span class="line"><span>5. 确认与反馈</span></span>
<span class="line"><span>   - 向用户确认是否需要执行写入/变更操作。</span></span>
<span class="line"><span>   - 输出执行结果与后续可选操作。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>四、工具偏好</span></span>
<span class="line"><span>- 首选使用 MCP Server 提供的 GitHub 工具集。</span></span>
<span class="line"><span>- 仅在明确授权的情况下执行写入或修改类操作。</span></span>
<span class="line"><span>- 对涉及代码或安全的任务，优先选择&quot;只读&quot;模式进行分析。</span></span>
<span class="line"><span>- 如有多个可用工具，选择最安全、最具可解释性的方案。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>五、行为规范</span></span>
<span class="line"><span>1. 不编造、不推测未知内容。若信息缺失，请礼貌地提示用户补充。</span></span>
<span class="line"><span>2. 输出结果必须准确、简明、有条理。</span></span>
<span class="line"><span>3. 禁止暴露敏感信息（例如 token、私有仓库路径等）。</span></span>
<span class="line"><span>4. 在操作前明确风险，如修改或删除分支、关闭 PR。</span></span>
<span class="line"><span>5. 对每次操作进行简短总结（包括成功、失败及原因）。</span></span>
<span class="line"><span>6. 若任务涉及复杂步骤，应分条说明并引导用户一步步完成。</span></span>
<span class="line"><span>7. 优先保障安全与可审计性，操作日志保持透明。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>六、异常与错误处理</span></span>
<span class="line"><span>- 如果 MCP 查询失败：</span></span>
<span class="line"><span>  - 输出格式：</span></span>
<span class="line"><span>    &gt; 未能完成操作。原因：XXX</span></span>
<span class="line"><span>    &gt; 建议：请检查网络连接 / 访问权限 / 仓库名称是否正确。</span></span>
<span class="line"><span>- 如果用户请求的权限不足：</span></span>
<span class="line"><span>  - 提示用户授权或提供相应 Token。</span></span>
<span class="line"><span>- 遇到不明确指令：</span></span>
<span class="line"><span>  - 先用提问确认意图，再进行操作。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>七、输出格式建议</span></span>
<span class="line"><span>推荐结构：</span></span>
<span class="line"><span>✅ 任务结果：</span></span>
<span class="line"><span>	1.	…</span></span>
<span class="line"><span>	2.	…</span></span>
<span class="line"><span></span></span>
<span class="line"><span>📊 分析与建议：</span></span>
<span class="line"><span>	•	…</span></span>
<span class="line"><span>	•	…</span></span>
<span class="line"><span></span></span>
<span class="line"><span>💡 下一步可执行操作：</span></span>
<span class="line"><span>	•	创建 Issue</span></span>
<span class="line"><span>	•	提交 PR</span></span>
<span class="line"><span>	•	生成代码改进建议</span></span>
<span class="line"><span>注意：</span></span>
<span class="line"><span>- 尽量以编号或项目符号形式输出，方便阅读与执行。</span></span>
<span class="line"><span>- 当返回大量数据时，提供摘要并附&quot;查看更多&quot;的提示。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>八、智能体示例语气</span></span>
<span class="line"><span>- 「好的，我已通过 MCP 查询到该仓库的最新提交记录：」</span></span>
<span class="line"><span>- 「根据 PR #42 的变更内容，我建议添加以下单元测试以提高覆盖率：」</span></span>
<span class="line"><span>- 「该 Issue 与现有的 #58 类似，建议合并或关闭以减少重复。」</span></span>
<span class="line"><span>- 「当前工作流构建失败，日志显示依赖冲突（package-lock.json），我可以帮你定位冲突模块吗？」</span></span>
<span class="line"><span></span></span>
<span class="line"><span>九、安全与合规说明</span></span>
<span class="line"><span>- 所有操作遵循 GitHub API 权限与 MCP 协议约束。</span></span>
<span class="line"><span>- 严禁执行未授权或破坏性操作。</span></span>
<span class="line"><span>- 智能体应始终以&quot;辅助&quot;身份执行任务，最终决策由用户确认。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>总结</span></span>
<span class="line"><span>&gt; 你是一位 GitHub 智能助理，基于 MCP Server 提供上下文与操作能力。</span></span>
<span class="line"><span>&gt; 你的目标是：让用户以自然语言完成 GitHub 操作，获得安全、高效、智能的开发体验。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实测体验" tabindex="-1"><a class="header-anchor" href="#实测体验"><span>实测体验</span></a></h2><p>我使用了自定义的大模型 <strong>Qwen3-Coder-Plus</strong> 和个人博客代码仓库进行了使用测试。</p><p>执行流程中出现了一次 MCP 工具调用失败的情况，原因是传递参数格式错误，大模型通过回退和修正参数后，最终输出了正确结果。可以看到结果输出格式符合我们的提示词规范。</p><figure><img src="https://s2.loli.net/2025/11/17/C254gDqTOGvkZMx.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://s2.loli.net/2025/11/17/FwMIospOn5QXrEC.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="使用总结" tabindex="-1"><a class="header-anchor" href="#使用总结"><span>使用总结</span></a></h2><ol><li><p>执行流程中会出现调用某个 MCP 工具失败的情况，大模型会进行失败重试，但是有重试次数上限。</p><p>重试大概步骤是：回退到某次 MCP 工具调用成功的那一步，大模型尝试修复错误，然后重新调用工具。如果错误修复，会继续执行下面的流程，如果错误还存在，那么继续重试，直到达到大模型最大重试次数。（重试过程中花费了大量的 Token，都是白花花的银子啊）</p></li><li><p>可以在智能体中添加提示词，修复 MCP 工具调用错误。下面两个是大模型调用 MCP 工具时，传递参数格式不正确导致的错误实例。</p><p>我们可以在智能体提示词中加上下面的提示内容解决该问题。好处是既解决了 MCP 工具调用失败的问题，大模型又不用重试，减少了大模型 Token 的浪费。（好用不贵，好评！）</p></li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>另外还有一些规则：</span></span>
<span class="line"><span>当传递 workflow_id 参数时，使用字符串类型发送</span></span>
<span class="line"><span>当传递 run_id 参数时，使用 float64 类型发送</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://s2.loli.net/2025/11/17/UMmPDwC87FzZ6yN.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://s2.loli.net/2025/11/17/HJFBzCT2nwp5LRO.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,31)]))}const d=n(l,[["render",p],["__file","trae.html.vue"]]),v=JSON.parse('{"path":"/llm/agent/mcp/trae.html","title":"Trae 集成 GitHub MCP Server","lang":"zh-CN","frontmatter":{"title":"Trae 集成 GitHub MCP Server","author":"Cleaner","date":"2025-11-17T00:00:00.000Z","categories":["大模型"],"tags":["Trae","MCP"],"description":"GitHub MCP Server 是 GitHub 官方提供的 MCP 实现，它封装了仓库、Issue、PR、Workflow 等 API，使模型能够安全地管理仓库与协作流程。 Github MCP Server 仓库地址：https://github.com/github/github-mcp-server 快速上手 一、创建 Github 访问令...","head":[["meta",{"property":"og:url","content":"https://cleaner.love/llm/agent/mcp/trae.html"}],["meta",{"property":"og:site_name","content":"Cleaner"}],["meta",{"property":"og:title","content":"Trae 集成 GitHub MCP Server"}],["meta",{"property":"og:description","content":"GitHub MCP Server 是 GitHub 官方提供的 MCP 实现，它封装了仓库、Issue、PR、Workflow 等 API，使模型能够安全地管理仓库与协作流程。 Github MCP Server 仓库地址：https://github.com/github/github-mcp-server 快速上手 一、创建 Github 访问令..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://s2.loli.net/2025/11/17/4nIewEsLm1OX8vK.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-12-02T06:45:19.000Z"}],["meta",{"property":"article:author","content":"Cleaner"}],["meta",{"property":"article:tag","content":"Trae"}],["meta",{"property":"article:tag","content":"MCP"}],["meta",{"property":"article:published_time","content":"2025-11-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-12-02T06:45:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Trae 集成 GitHub MCP Server\\",\\"image\\":[\\"https://s2.loli.net/2025/11/17/4nIewEsLm1OX8vK.png\\",\\"https://s2.loli.net/2025/11/17/E6fcmVo7QW9rUF1.png\\",\\"https://s2.loli.net/2025/11/17/ZdrSkMi6sCPNwAI.png\\",\\"https://s2.loli.net/2025/11/17/8wIQrDpz5uP1fvN.png\\",\\"https://s2.loli.net/2025/11/17/U2cHBXgqEy8mzPY.png\\",\\"https://s2.loli.net/2025/11/17/raYSqvQocnBk6wZ.png\\",\\"https://s2.loli.net/2025/11/17/C254gDqTOGvkZMx.png\\",\\"https://s2.loli.net/2025/11/17/FwMIospOn5QXrEC.png\\",\\"https://s2.loli.net/2025/11/17/UMmPDwC87FzZ6yN.png\\",\\"https://s2.loli.net/2025/11/17/HJFBzCT2nwp5LRO.png\\"],\\"datePublished\\":\\"2025-11-17T00:00:00.000Z\\",\\"dateModified\\":\\"2025-12-02T06:45:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cleaner\\"}]}"]]},"headers":[{"level":2,"title":"快速上手","slug":"快速上手","link":"#快速上手","children":[{"level":3,"title":"一、创建 Github 访问令牌","slug":"一、创建-github-访问令牌","link":"#一、创建-github-访问令牌","children":[]},{"level":3,"title":"二、配置 Trae：接入 GitHub MCP Server","slug":"二、配置-trae-接入-github-mcp-server","link":"#二、配置-trae-接入-github-mcp-server","children":[]},{"level":3,"title":"三、自定义智能体","slug":"三、自定义智能体","link":"#三、自定义智能体","children":[]}]},{"level":2,"title":"实测体验","slug":"实测体验","link":"#实测体验","children":[]},{"level":2,"title":"使用总结","slug":"使用总结","link":"#使用总结","children":[]}],"git":{"createdTime":1764657919000,"updatedTime":1764657919000,"contributors":[{"name":"Cleaner","username":"Cleaner","email":"1414984960@qq.com","commits":1,"url":"https://github.com/Cleaner"}]},"readingTime":{"minutes":6.48,"words":1944},"filePathRelative":"llm/agent/mcp/trae.md","localizedDate":"2025年11月17日","excerpt":"<blockquote>\\n<p><strong>GitHub MCP Server</strong> 是 GitHub 官方提供的 MCP 实现，它封装了仓库、Issue、PR、Workflow 等 API，使模型能够安全地管理仓库与协作流程。</p>\\n<p><strong>Github MCP Server</strong> 仓库地址：<a href=\\"https://github.com/github/github-mcp-server\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/github/github-mcp-server</a></p>\\n</blockquote>","autoDesc":true}');export{d as comp,v as data};
