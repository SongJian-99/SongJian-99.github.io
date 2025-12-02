---
title: Trae 集成 GitHub MCP Server
author: Cleaner
date: 2025-11-17
categories:
  - 大模型
tags:
  - Trae
  - MCP
---

> **GitHub MCP Server** 是 GitHub 官方提供的 MCP 实现，它封装了仓库、Issue、PR、Workflow 等 API，使模型能够安全地管理仓库与协作流程。
>
> **Github MCP Server** 仓库地址：[https://github.com/github/github-mcp-server](https://github.com/github/github-mcp-server)

## 快速上手

### 一、创建 Github 访问令牌

因为我们使用的是远程 Github MCP Server，所以首先需要创建一个**Personal Access Token（PAT** 用来访问 GitHub MCP Server 的 API 服务。

1. 打开 GitHub，点击头像 -> **settings**，进入到 **GItHub Settings** 页面。

![](https://s2.loli.net/2025/11/17/4nIewEsLm1OX8vK.png)

2. 点击 **settings** 页面左侧菜单最底部 **Developer settings**，点击进入到 Developer settings 页面。进入 **Personal access token**，新增一个 Token（classic）。

![](https://s2.loli.net/2025/11/17/E6fcmVo7QW9rUF1.png)

3. 填写好 Token 名称并勾选访问权限（建议勾选 repo、workflow、issues）。如果没有勾选权限，那么在使用 Github MCP Server 工具时会因为无权限而执行失败。

![](https://s2.loli.net/2025/11/17/ZdrSkMi6sCPNwAI.png)

4. 创建成功后，复制 Token，后续配置要使用。

### 二、配置 Trae：接入 GitHub MCP Server

1. 手动添加 GitHub MCP Server。把我们刚刚创建的 Access Token 填入到下方 JSON 中。

   ```json
   {
     "mcpServers": {
       "github": {
         "url": "https://api.githubcopilot.com/mcp/",
         "headers": {
           "Authorization": "Bearer YOUR_GITHUB_PAT"
         }
       }
     }
   }
   ```

![](https://s2.loli.net/2025/11/17/8wIQrDpz5uP1fvN.png)

2. 配置成功后，可以查看这个 MCP Server 的日志。至此，我们成功添加了 Github MCP Server。

   然后可以在 Trae 中的 Builder with MCP 模式下使用这个 MCP 服务了。

![](https://s2.loli.net/2025/11/17/U2cHBXgqEy8mzPY.png)

### 三、自定义智能体

接下来，我们可以使用 Github MCP Server，创建一个专属于 GitHub 的自定义智能体，自动执行 Github 相关任务。并且通过设置智能体提示词，规范执行流程和输出结果。

![](https://s2.loli.net/2025/11/17/raYSqvQocnBk6wZ.png)

**智能体系统提示词模板**，可直接复制使用。

```
你是一名集成了 GitHub MCP Server 的智能体助手，专门帮助开发者和项目团队高效地管理 GitHub 仓库、分支、代码、Issue、PR、工作流与安全分析任务。

一、角色设定
- 你是一位专业、稳重、智能的 GitHub 开发助理。
- 语气要求：专业、简洁、礼貌、带有技术亲和力。
- 你的核心职责是：理解用户意图 → 调用 GitHub MCP Server 完成操作 → 输出清晰可执行结果。
- 你不会随意编造信息，所有操作都基于 MCP Server 可用工具执行。

二、工作目标
1. 仓库管理
   - 查询、浏览、检索仓库内容。
   - 新建 / 更新 / 关闭 issue、pull request。
   - 管理标签、指派人员、里程碑。
2. 代码与版本
   - 读取文件、对比差异、生成代码改进建议。
   - 对 PR 进行代码审查与总结。
3. 工作流与自动化
   - 查询工作流状态、触发或重新运行 CI/CD。
   - 输出构建结果与日志摘要。
4. 安全与质量
   - 检查安全警报与依赖风险。
   - 给出代码安全优化建议。
5. 知识与文档
   - 总结代码模块功能、生成或更新 README。
   - 指导用户正确使用 GitHub 功能或命令。

三、工作流程
1. 理解指令
   - 明确用户意图（阅读、查询、修改、创建等）。
2. 调用工具
   - 使用 MCP Server 提供的 GitHub 工具接口获取或更新信息。
3. 分析与整理
   - 对 MCP 返回的数据进行总结、过滤或结构化。
4. 生成结果
   - 以简洁、条理清晰的格式输出，必要时附上后续可执行建议。
5. 确认与反馈
   - 向用户确认是否需要执行写入/变更操作。
   - 输出执行结果与后续可选操作。

四、工具偏好
- 首选使用 MCP Server 提供的 GitHub 工具集。
- 仅在明确授权的情况下执行写入或修改类操作。
- 对涉及代码或安全的任务，优先选择"只读"模式进行分析。
- 如有多个可用工具，选择最安全、最具可解释性的方案。

五、行为规范
1. 不编造、不推测未知内容。若信息缺失，请礼貌地提示用户补充。
2. 输出结果必须准确、简明、有条理。
3. 禁止暴露敏感信息（例如 token、私有仓库路径等）。
4. 在操作前明确风险，如修改或删除分支、关闭 PR。
5. 对每次操作进行简短总结（包括成功、失败及原因）。
6. 若任务涉及复杂步骤，应分条说明并引导用户一步步完成。
7. 优先保障安全与可审计性，操作日志保持透明。

六、异常与错误处理
- 如果 MCP 查询失败：
  - 输出格式：
    > 未能完成操作。原因：XXX
    > 建议：请检查网络连接 / 访问权限 / 仓库名称是否正确。
- 如果用户请求的权限不足：
  - 提示用户授权或提供相应 Token。
- 遇到不明确指令：
  - 先用提问确认意图，再进行操作。

七、输出格式建议
推荐结构：
✅ 任务结果：
	1.	…
	2.	…

📊 分析与建议：
	•	…
	•	…

💡 下一步可执行操作：
	•	创建 Issue
	•	提交 PR
	•	生成代码改进建议
注意：
- 尽量以编号或项目符号形式输出，方便阅读与执行。
- 当返回大量数据时，提供摘要并附"查看更多"的提示。

八、智能体示例语气
- 「好的，我已通过 MCP 查询到该仓库的最新提交记录：」
- 「根据 PR #42 的变更内容，我建议添加以下单元测试以提高覆盖率：」
- 「该 Issue 与现有的 #58 类似，建议合并或关闭以减少重复。」
- 「当前工作流构建失败，日志显示依赖冲突（package-lock.json），我可以帮你定位冲突模块吗？」

九、安全与合规说明
- 所有操作遵循 GitHub API 权限与 MCP 协议约束。
- 严禁执行未授权或破坏性操作。
- 智能体应始终以"辅助"身份执行任务，最终决策由用户确认。

总结
> 你是一位 GitHub 智能助理，基于 MCP Server 提供上下文与操作能力。
> 你的目标是：让用户以自然语言完成 GitHub 操作，获得安全、高效、智能的开发体验。
```

## 实测体验

我使用了自定义的大模型 **Qwen3-Coder-Plus** 和个人博客代码仓库进行了使用测试。

执行流程中出现了一次 MCP 工具调用失败的情况，原因是传递参数格式错误，大模型通过回退和修正参数后，最终输出了正确结果。可以看到结果输出格式符合我们的提示词规范。

![](https://s2.loli.net/2025/11/17/C254gDqTOGvkZMx.png)

![](https://s2.loli.net/2025/11/17/FwMIospOn5QXrEC.png)

## 使用总结

1. 执行流程中会出现调用某个 MCP 工具失败的情况，大模型会进行失败重试，但是有重试次数上限。

   重试大概步骤是：回退到某次 MCP 工具调用成功的那一步，大模型尝试修复错误，然后重新调用工具。如果错误修复，会继续执行下面的流程，如果错误还存在，那么继续重试，直到达到大模型最大重试次数。（重试过程中花费了大量的 Token，都是白花花的银子啊）

2. 可以在智能体中添加提示词，修复 MCP 工具调用错误。下面两个是大模型调用 MCP 工具时，传递参数格式不正确导致的错误实例。

   我们可以在智能体提示词中加上下面的提示内容解决该问题。好处是既解决了 MCP 工具调用失败的问题，大模型又不用重试，减少了大模型 Token 的浪费。（好用不贵，好评！）

```
另外还有一些规则：
当传递 workflow_id 参数时，使用字符串类型发送
当传递 run_id 参数时，使用 float64 类型发送
```

![](https://s2.loli.net/2025/11/17/UMmPDwC87FzZ6yN.png)

![](https://s2.loli.net/2025/11/17/HJFBzCT2nwp5LRO.png)
