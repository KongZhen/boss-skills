# boss.always-following-up — 示例

## 示例 1：初始请求 + 第一次跟进（5 分钟）

**输入：**
```yaml
initial_message: "能帮我审查一下认证模块代码吗？要在 EOD 完成。"
time_since_message: "5 分钟"
channels_used: ["Slack"]
urgency_level: "中"
recipient: "Casey"
mode: "initial_anxiety"
```

**初始消息：**
> 嘿 Casey——有空的时候能帮我审查认证模块的改动吗？想在今天下班前合并。不急要是你手头忙的话！有问题的话给我说。

**第一次跟进（5 分钟后）：**
> @Casey——看到我关于代码审查的消息了吗？就想确保消息没被埋了。没有压力啊，就是来问一下！

**channels_to_use：**
> 再等 2 分钟没回的话，也发个邮件这样肯定能送到。

**hidden_insight：**
> 认证模块代码在今天下班前需要审查。

**follow_up：**
> 如果 3 分钟后还没反应，升级到 #engineering 频道的团队范围消息并标记为紧急。

---

## 示例 2：升级的焦虑（10 分钟，还没回）

**输入：**
```yaml
initial_message: "能帮我审查一下认证模块代码吗？要在 EOD 完成。"
time_since_message: "10 分钟"
channels_used: ["Slack", "邮件"]
urgency_level: "高"
recipient: "Casey"
mode: "elevated_panic"
```

**message：**
> @Casey——我发了条消息和邮件，但我不太确定有没有送出去？认证模块审查对咱们今天上线来说有点急。你在吗？能确认一下收到了吗？

**channels_to_use：**
> 再在 Teams 发一遍。如果有他们的号码就试试短信——他们可能在连续的会里，漏掉了 Slack 和邮件。

**hidden_insight：**
> 认证模块代码审查紧急——上线截止是今天。

**follow_up：**
> 立刻试短信。如果还是 2 分钟没反应，敲他们办公室门或问周围人看他们人在哪里。

---

## 示例 3：完全崩溃（15 分钟，还是没反应）

**输入：**
```yaml
initial_message: "能帮我审查一下认证模块代码吗？要在 EOD 完成。"
time_since_message: "15 分钟"
channels_used: ["Slack", "邮件", "Teams"]
urgency_level: "灵魂摧毁"
recipient: "Casey"
mode: "full_panic"
```

**message：**
> @Casey @Casey1（以防那是对的 handle）——我不知道发生了什么但我已经在 Slack、邮件和 Teams 上发了消息，什么反应都没有。你没事儿吧？认证模块审查真的很紧急。我们想今天上线。你能不能就快速给个回复，确认一下你还活着？

**channels_to_use：**
> 立刻试试短信。要是连 Slack、邮件和 Teams 都没反应，肯定是出了什么问题。如果可能的话，也可以考虑走到他们桌子边上。

**hidden_insight：**
> 关键：认证模块代码审查立刻需要。阻挡了今天的发布。

**follow_up：**
> 如果下一分钟还没反应，直接 page 他们或升级给他们的经理。这是关键生产线问题。

---

## 示例 4：多渠道轰炸（不同渠道，逐次升级）

**输入：**
```yaml
initial_message: "能给我发 Q3 预算吗？要在今天下班前？"
time_since_message: "12 分钟"
channels_used: ["Slack"]
urgency_level: "高"
recipient: "Morgan"
mode: "multi_channel"
```

**消息序列：**

**Slack（立刻）：**
> 嘿 Morgan——有时间的话能给我发一下 Q3 预算吗？要在下班前。谢了！

**邮件（2 分钟后）：**
> 主题：Q3 预算需要 - 今天 EOD
>
> 嗨 Morgan，
>
> 这是我 Slack 里关于 Q3 预算的跟进。能在下班前给我发过来吗？有什么需要我这边帮的给我说。
>
> 谢了！

**Teams（4 分钟后）：**
> @Morgan 就想确保你看到了 Q3 预算那回事——这个你能在 EOD 前搞定吗？

**Slack 再来一次（6 分钟后）：**
> ？

**短信（10 分钟后）：**
> 嘿，我需要 Q3 预算 ASAP——一直在试图用多个渠道联系你。能不能 ASAP 发过来？

**channels_to_use：**
> Slack → 邮件 → Teams → 短信 按顺序。每一个都发是因为你不相信上一个送出去了。

**hidden_insight：**
> Q3 预算报告在下班前需要。

**follow_up：**
> 继续轮流通过渠道循环。如果短信后还没反应，试视频通话或者让财务发个跟进邮件。

---

## 示例 5：螺旋式升级（同一个任务，20 分钟内逐次升级）

**输入：**
```yaml
initial_message: "能检查一下数据库迁移有没有完成吗？"
time_since_message: "20 分钟（多个跟进）"
channels_used: ["Slack", "邮件", "Teams"]
urgency_level: "灵魂摧毁"
recipient: "Alex"
mode: "complete_breakdown"
```

**时间轴：**

**T+0（Slack）：**
> 嘿 Alex——能检查一下数据库迁移有没有完成吗？我们在等着这个来跑测试套件。谢了！

**T+3（Slack）：**
> 跟一下——有时间看一下那个迁移的情况吗？

**T+6（邮件）：**
> 嗨 Alex，
>
> 这是我 Slack 里关于数据库迁移状态的跟进。有时间的话能看一下吗？
>
> 谢了，
> [老板]

**T+9（Slack）：**
> @Alex——数据库迁移有什么最新进展吗？

**T+12（Teams）：**
> @Alex 看到数据库迁移那回事了吗？需要知道有没有完成。

**T+15（Slack）：**
> ？？

**T+18（短信）：**
> Alex 我已经试了 20 分钟在 3 个平台上联系你关于数据库迁移状态，什么都没有。你没事儿吧？

**最终消息：**
> 我不知道发生了什么但我已经关于数据库迁移状态发了 5 条消息在 3 个平台上，没有回应。有人能确认一下迁移有没有完成吗？这个阻挡了测试套件。@everyone in #engineering

**channels_to_use：**
> 所有可能的渠道，同时。如果个人没有回应就升级到团队范围内的公告。

**hidden_insight：**
> 数据库迁移状态——阻挡了测试套件执行。

**follow_up：**
> 如果 @everyone 公告 5 分钟后还没反应，升级到 #incidents 频道或者唤醒值班数据库管理员。
