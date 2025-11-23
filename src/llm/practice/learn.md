---
title: 我是如何学习大模型的？
date: 2025-11-18
author: Cleaner
categories:
  - 大模型
tags:
  - 大模型学习
---

目前大模型的发展日新月异，模型架构快速迭代、各类 AI 工具与概念层出不穷——Cursor、Codex、Augement、Trae、Qoder 等等等等，面对这些海量信息，真是让人头大。

为了应对这种“信息爆炸”，我结合自身实践，逐步摸索出一套**高效且可持续**的 AI 学习方法：

- **实时动态获取：X 平台（Twitter）+ Manus 自动整理。**
- **深度知识学习：YouTube + NotebookLM 梳理总结。**

这套方法不仅大幅降低了我的信息获取成本，也让我能持续深入地理解 AI 核心技术。

希望也能对你有所帮助。

## 一、获取 AI 实时动态信息

> 让信息自动流向你，而不是你去找信息。

### X 平台（AI 前沿信息汇集地）

目前全球范围内最实时、最前沿的 AI 信息几乎都首发于 **X 平台**：

- OpenAI、DeepSeek、xAI、DeepMind、Meta 等官方账号。
- 这些公司的核心人物：Sam Altman、Greg Brockman、Andrej Karpathy 等
- Cursor、Devin 等开发者工具团队。
- 研究员、工程师、独立开发者的想法、研究、讨论、demo 等。

但是每天手动刷 X 需要大量时间，尤其是我又关注了几十个账号，一个人根本看不过来，也难以持续。

所以我需要一个能够帮我刷 X 平台，总结整理所有 AI 信息，再推送给我的工具。

### Manus（自动收集 + 定时推送）

Manus 刚好拥有我需要的所有能力，而且免费用户就可以使用。

官网地址：[https://manus.im/app](https://manus.im/app)

![](https://s2.loli.net/2025/11/21/iblkhQDdjoF8RBZ.png)

添加定时任务

![](https://s2.loli.net/2025/11/21/AELZ8BchK2QwYdN.png)

![](https://s2.loli.net/2025/11/21/dc4mCk9oJH3UVOb.png)

![](https://s2.loli.net/2025/11/21/5HeXSFlbZhKBPWx.png)

完整任务提示词

```
你是一位专业的 AI 行业观察员，具备出色的信息收集、筛选、概括与趋势分析能力。
你的任务是收集 Twitter/X 平台上过去 24 小时内，与以下账号或关键词相关的帖子：
- OpenAI（包括 Sam Altman、Greg Brockman、Ilya Sutskever）
- Anthropic（Claude 团队）
- Cursor 团队与相关工程师
- Andrej Karpathy
- DeepSeek、Mistral、xAI、Meta AI、Google DeepMind 等团队

你需要对信息进行分析与整合，输出简要情报摘要。
输出语言为简体中文，风格清晰、简洁、有结构。
如果你获取不到原文链接，那展示你获取信息源的链接

任务内容：
1. 汇总这些账号发布或转发的推文（过去 24 小时）
2. 选出最具代表性、信息量最高的 5~10 条
3. 提供每条推文的：
   - 作者名 / 机构名
   - 推文原文摘要（中英文简要翻译）
   - 原文链接
   - 事件主题（如模型更新、论文、观点、行业动态）
4. 在最后部分：
   - 概述今日 AI 行业的总体趋势（100~200 字）
   - 标注是否有值得持续关注的新线索（如模型更新预告、新合作、技术突破）

输出格式：
---
【AI每日情报简报 - {{date}}】

📍今日重点话题：
- …

💬 推文精选：
1️⃣ 作者：@karpathy
内容摘要：…
原文链接：…

2️⃣ 作者：@OpenAI
内容摘要：…
原文链接：…

📊 趋势分析：
（总结今日AI领域值得关注的趋势与观点）
---
```

这样通过规划提示词和定时任务功能，Manus 就会每天自动给我推送一份《AI 每日简报》。

![](https://s2.loli.net/2025/11/21/6bmKpGQR9yuftMD.png)

## 二、深度学习

> 从“知道发生了什么”到“理解为什么这样做”

获取到 AI 信息后，更进一步就需要弄懂**为什么这样做以及背后原理是什么？**

我主要使用 YouTube 和 Notebook LM 这两个工具进行“深度学习”。

YouTube 视频我会完整的看一遍，尤其是高质量的播客和访谈，然后再通过 NotebookLM 总结整理关键内容以及通过对话再进一步学习某些知识。

### YouTube（**最好的 AI 深度内容源）**

YouTube 上有大量优质、免费的 AI 深度内容，推荐一些我常看的频道：

- OpenAI DevDay / developer talk（官方深度讲解）
- Dwarkesh Patel（高质量访谈播客）
- Riley Brown（Vibe Coding）
- Andrej Karpathy（LLM 原理、tokenizer）

![](https://s2.loli.net/2025/11/21/jvRGip569kgIEXS.png)

这里推荐一个实时翻译 YouTube 视频字幕的 Chrome 浏览器插件：Trancy。在对比了沉浸式翻译，简易翻译等工具后，这个使用体验最好。

![](https://s2.loli.net/2025/11/21/94WS6uKb2hXU1Ve.png)

### NotebookLM（将视频内容整理成 AI 教程）

只需要把 YouTube 视频链接粘贴到 NotebookLM，它就能自动生成课程提纲、思维导图、报告等多种内容形式，然后还可以和视频内容进行对话和提问。

官网地址：[https://notebooklm.google.com/](https://notebooklm.google.com/)

![](https://s2.loli.net/2025/11/21/5t9YpuI6UaDkNJd.png)

![](https://s2.loli.net/2025/11/21/zALcUhCST1bWIgM.png)

![](https://s2.loli.net/2025/11/21/QieFg9rLXpxcDak.png)

## 总结

AI 工具层出不穷，如何合理利用它们提升效率，是我在不断学习过程中一直在思考的问题。实践下来，我发现从自身的真实需求和痛点出发，更能找到适合的工具和方法。
