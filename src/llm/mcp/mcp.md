---
title: 大模型的手和脚：从提示工程到 MCP
author: Cleaner
date: 2025-12-01
categories:
  - 大模型
tags:
  - MCP
---

让大模型具备行动能力，可以说是我们通往 AGI（通用人工智能，指的是具备甚至超越人类水平的人工智能系统） 的必经之路。

从最开始的提示工程到现在的 MCP（模型上下文协议），我们一步步为大模型装上了“手和脚”——可以调用工具、读写文件、执行任务等，并且不断完善。

虽然 AGI 还很遥远，但每天只工作一小时的愿景，还是非常诱人的，果然懒才是第一生产力～。

## 提示工程：手工打造工具调用

最开始的工具调用方式，完全依赖我们设计的提示词，来诱导大模型输出可解析的内容。比如，我们会指定模型的身份， 能够调用的工具列表和使用方式，约束模型按照我们定义的格式输出内容，通常是 JSON 格式。这一过程相当于我们在用自然语言编码。

下面是一段 Python 代码示例：

```python
def prompt_engineering_tool_call(model, user_query):
    prompt = f"""
你是一个能够调用外部工具的智能助手。

你现在可用的工具如下：

1. 计算器（calculator）
   - 功能：执行数学表达式计算
   - 参数：
       - expression: 数学表达式字符串，例如 "2 + 3 * 4"

2. 搜索引擎（search）
   - 功能：查询实时网络信息
   - 参数：
       - query: 搜索关键词，例如 "北京天气"

3. 天气 API（weather）
   - 功能：查询指定城市天气
   - 参数：
       - city: 城市名称，例如 "上海"

------------------------------------
用户问题：{user_query}
------------------------------------

你的任务：

1. 判断是否需要使用工具。
2. 如果需要，请**严格输出一个合法的 JSON 对象**（不包含反引号、注释和多余文字），格式如下：

{
  "tool_call": {
    "name": "<calculator/search/weather>",
    "arguments": {
      "<参数名>": "<参数值>"
    }
  }
}

示例 1（数学计算）：
{
  "tool_call": {
    "name": "calculator",
    "arguments": {
      "expression": "2 + 3 * 4"
    }
  }
}

示例 2（天气查询）：
{
  "tool_call": {
    "name": "weather",
    "arguments": {
      "city": "北京"
    }
  }
}

3. 如果不需要工具，则**直接输出自然语言回答**，不要输出 JSON。

严格要求：

- 只能输出 JSON 或自然语言回答二选一。
- JSON 必须结构化且严格合法。
- 不要添加额外解释、不要在 JSON 外输出任何文本。
- 工具名称必须是 calculator、search、weather 中之一。
- 参数名必须和工具定义完全一致。

现在请基于用户问题作答。
"""
    return model.generate(prompt)

```

调用方法输入：

```python
prompt_engineering_tool_call(model, "帮我查一下杭州天气")
```

模型输出：

```json
{
  "tool_call": {
    "name": "weather",
    "arguments": {
      "city": "杭州"
    }
  }
}
```

之后程序解析模型输出的 JSON 内容，并调用对应的工具方法，再将工具执行结果返回给大模型，最终输出给用户。

![](https://s2.loli.net/2025/12/01/6Kovxu9qdSeBWCf.png)

靠提示工程让模型使用工具，好处是通用，所有模型都支持。但是缺点也很明显，完全依赖提示词的编写能力，可能导致模型输出不稳定（模型忘格式，JSON 少括号等）、边界不清晰（模型瞎编工具）等问题。**总之，能用，但不专业。**

## Function Calling：结构化工具调用

2023 年，OpenAI 首次推出 Function Calling——结构化工具调用，它解决了提示工程时代结构化接口定义的痛点，之后被各大厂商（各家国产大模型、Google、Anthropic 等）所跟随采纳。

Function Calling 是模型厂商在训练模型时通过监督学习训练出来的能力，模型和厂商强绑定，不同模型工具调用 schema、参数格式不同。

我们来看看 OpenAI 模型的 Function Calling 是怎么使用的。下面是一段 Python 代码示例：

```python
# OpenAI 风格的 Function Calling

from openai import OpenAI
client = OpenAI()

# 工具定义
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "获取城市天气",
            "parameters": {
                "type": "object",
                "properties": {"city": {"type": "string"}},
                "required": ["city"]
            }
        }
    }
]

# 模拟外部天气 API
def get_weather(city: str):
    sample = {"北京": "晴 5°C", "上海": "多云 8°C", "广州": "小雨 15°C"}
    return sample.get(city, "天气数据不可用")

def function_calling_example():
    # 🟦 第一步：用户提问
    user_query = "北京天气怎么样？"

    # 🟦 第二步：调用大模型，让它判断是否使用工具
    resp = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": user_query}],
        tools=tools,
        tool_choice="auto"
    )

    msg = resp.choices[0].message

    # 🟦 第三步：判断是否需要工具调用
    if msg.tool_calls:
        call = msg.tool_calls[0]
        city = call.function.arguments["city"]

        # 🟦 第四步：执行工具（这里调用我们模拟的 get_weather）
        result = get_weather(city)

        # 🟦 第五步：把工具结果再交回模型生成最终自然语言输出
        final = client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "user", "content": user_query},
                msg,
                {"role": "tool", "tool_call_id": call.id, "content": result}
            ]
        )
        return final.choices[0].message.content

    # 不需要工具，直接回答
    return msg.content

```

相比提示工程时代，我们只需要根据模型 Fucntion Calling 的结构化格式定义好工具，并注册给模型就行了。之后模型来自动分析用户意图，提取参数，选择工具，然后根据模型输出结果，由程序执行后续逻辑，完成整个工具调用流程。

![](https://s2.loli.net/2025/12/01/a1PuQOkso2gnbzx.png)

Function Calling 使模型输出格式标准化，不会出现 JSON 格式错误等情况，而且还会自动选择工具，提取参数。

但是面对不同厂商的模型以及不具备 Function Calling 能力的模型，开发工具时就需要适配多个模型，这无疑增加了工作量。而且工具无法动态发现，需要提前向模型“注册工具”——告诉模型能够使用哪些工具。**总之，可靠，但仍被厂商格式锁死。**

## MCP：标准化工具调用

2024 年 11 月 25 日，Anthropic 公司发布了一篇介绍 MCP 协议的文章：[Introducing the Model Context Protocol](https://www.anthropic.com/news/model-context-protocol)，第一次推出了 MCP。

MCP （模型上下文协议，Model Context Protocol），是一种让大语言模型与外部世界交互的标准化协议，工具和数据源只要满足 MCP 规范，便可与大模型无缝对接。

MCP 包括三个核心组件：MCP Host、MCP Client 和 MCP Server。目前像 Trae、Qoder 等编辑器都内置了 MCP Client，我们只需编写自己的 MCP Sever，就可以在编辑器中使用这些工具啦。

![](https://s2.loli.net/2025/12/01/QP2SxMCUwIEetNj.png)

下面是一段 Python 代码示例，实现了一个 MCP Server。这个工具可以在任何实现了 MCP Client 的应用中使用。我们以 Trae 为例，看看如何在 Trae 中接入这个工具。

```python
from mcp.server.fastmcp import FastMCP
from typing import Annotated
from pydantic import Field

mcp = FastMCP("weather-server")

# 注册工具（函数签名就是 schema）
@mcp.tool(
    name="get_weather",
    description="获取指定城市的天气信息"
)
def get_weather(
    city: Annotated[
        str,
        Field(description="城市名称，例如：北京、上海、广州")
    ]
) -> str:
    """获取指定城市的天气信息"""
    data = {
        "北京": "晴，5°C",
        "上海": "多云，8°C",
        "广州": "小雨，15°C"
    }
    return data.get(city, "天气数据不可用")


if __name__ == "__main__":
    mcp.run(transport="stdio")  # 启动 MCP 服务器

```

![](https://s2.loli.net/2025/12/01/qEblXN8yjYfO4Cw.png)

![](https://s2.loli.net/2025/12/01/Hqmy3xci12bdOef.png)

可以看到，我们只需要把工具方法封装成 MCP Server，并在 Client 端写好 JSON 配置，就可以使用了。当然我们也可以自己编写 MCP Client，这里就不提供具体的代码啦，大家可以自行实现。

![](https://s2.loli.net/2025/12/01/E9TZCx2N3uoSdab.png)

当然，MCP 还有其他优势，比如支持多种通信方式、安全性设计等。总结来说 **MCP 将模型调用外部工具的能力，进行了标准化和通用化，**就像 USB 统一了外设接口，HTTP 统一了网络通信。

## 总结

回顾整个演进历程，我们其实走过了三条路：

- 提示工程时代：靠提示词拼出来的工具调用，能用但不稳定。
- Function Calling 时代：结构化接口登场，稳定性大幅提升，但厂商格式各自为政。
- MCP 时代：第一次把工具调用变成统一的行业标准，模型、平台、工具之间真正实现了相互解耦与复用。

但是并不是说 MCP 就完全替代了 Function Calling，目前这两种方式都在使用，简单的业务场景，Function Calling 反而更便捷。

| 特性           | 提示工程时代 | Function Calling 时代 | MCP 时代 |
| -------------- | ------------ | --------------------- | -------- |
| **实现复杂度** | 高           | 中                    | 低       |
| **标准化程度** | 无           | 厂商标准              | 行业标准 |
| **工具发现**   | 手动配置     | 预定义                | 动态发现 |
| **安全性**     | 低           | 中                    | 高       |
| **跨平台**     | 困难         | 厂商绑定              | 无缝迁移 |
| **开发生态**   | 碎片化       | 半封闭                | 开放     |

## 末尾

文中的手绘图片是在 YouMind 网站使用 Nano Banana Pro 模型生成的，感兴趣的朋友可以点击链接注册使用：[https://youmind.com/invite/PBG58T](https://youmind.com/invite/PBG58T)

网站每月会赠送 2000 积分，而且使用上面的链接注册，你和我都会额外获得 1000 积分。
