# Boss Skills Website PRD v1

| 字段 | 值 |
|------|-----|
| **日期** | 2026-03-30 |
| **状态** | Draft v1 |
| **项目** | Boss Skills Website |
| **关联仓库** | `boss-skills` |
| **作者** | KongZ + 来福 + Claude |

---

## 1. 文档目的

本文档用于定义 Boss Skills 官网第一版的产品目标、信息架构、设计原则、技术边界与验收标准，作为网站设计、开发与上线的统一依据。

该网站不是项目主产品本体，不承担复杂运行能力；其核心职责是：

1. 清晰解释 Boss Skills 项目是什么
2. 展示可用的 boss persona skills
3. 提供轻量试玩与传播体验
4. 将用户高效导流至 GitHub 进行下载、使用和贡献

---

## 2. 项目背景

Boss Skills 是一个"内容戏谑、工程严肃"的开源项目。

项目核心是将典型的"讨厌的老板人格"封装为可复用的 skills，让用户可以给自己或其他 AI agents 配置不同风格的"老板"，体验不同的任务分配、催办、反馈与施压方式。

项目内容带有黑色幽默和职场 satire，但在工程实现、规范设计、开源协作和多语言支持上应达到高质量标准。

网站的作用不是替代 GitHub 仓库，而是作为该开源项目的：

- **品牌展示层**
- **体验入口**
- **技术说明入口**
- **GitHub 导流器**

---

## 3. 产品定位

### 3.1 一句话定位

Boss Skills Website 是一个以 FC 游戏机复古像素风格包装的开源项目官网，用于展示、试玩和导流 Boss Skills。

### 3.2 核心定位

网站定位为：**一个高辨识度的开源项目官网 + skill 图鉴浏览器 + 轻量试玩页**

### 3.3 明确不做

第一版网站不做：

- 登录 / 注册
- 在线工作台
- 云端配置保存
- 多 agent 实时编排
- SaaS 账户系统
- 支付系统
- 复杂后端 CMS

---

## 4. 产品目标

### 4.1 业务目标

1. 帮助首次访问用户在 **3 秒内**理解项目
2. 强化项目差异化品牌：复古像素 + 职场黑色幽默 + 严肃工程
3. 提升 GitHub 导流效率：Star / Fork / Clone / Contribute
4. 为后续传播提供官网落点和分享入口

### 4.2 用户目标

用户访问网站后，应至少完成以下之一：

- 看懂项目定位
- 浏览不同 boss skills
- 试玩某种老板人格
- 点击进入 GitHub 仓库
- 了解如何贡献新的 boss skill

### 4.3 成功指标（MVP）

重点观察：

- GitHub CTA 点击率
- Skills 页面浏览深度
- Playground 使用次数
- 从网站跳转 GitHub 的转化率
- `Contribute` 页面访问占比

---

## 5. 目标用户

| 层级 | 用户 | 需求 |
|------|------|------|
| **P0** | AI Agent 开发者、开源用户 | 快速理解项目、下载、使用、贡献 |
| **P1** | PM / 设计师 / 工程师 / 独立开发者 | 浏览梗点、试玩、共鸣、分享 |
| **P2** | 社交传播访客 | 被首页和视觉吸引，理解项目并跳转 GitHub |

---

## 6. 核心产品原则

### 6.1 内容戏谑，工程克制

内容可以黑色幽默，但界面和交互必须稳定、清晰、克制。

### 6.2 Website 是 showroom，不是 engine

GitHub 仓库是主阵地；网站负责展示、试玩与导流。

> **Repo is the engine. Website is the showroom.**

### 6.3 设计复古像素，体验现代清晰

视觉采用 FC / 8-bit retro pixel aesthetic；交互和结构遵循现代 Web 最佳实践。

### 6.4 先静态内容，后动态能力

第一版以静态内容和规则拼接为主，避免复杂后端。

### 6.5 全球化从结构开始

第一版支持中英双语，并为后续多语言预留结构。

---

## 7. 核心用户路径

| 路径 | 说明 |
|------|------|
| **Path A** 首次访问者 | Home → 快速理解 → Featured Skills → GitHub |
| **Path B** 对梗感兴趣的用户 | Home → Playground → 试玩 → 截图/分享 → GitHub |
| **Path C** 开发者 / 贡献者 | Home / About → Contribute → GitHub → Clone / PR |
| **Path D** 想深入了解具体 skill | Skills List → Skill Detail → GitHub 源文件 |

---

## 8. 信息架构

```
/
├─ Home
├─ Skills
│  ├─ /skills
│  └─ /skills/[slug]
├─ Playground
├─ About
└─ Contribute
```

---

## 9. 页面定义

### 9.1 Home

**目标：** 3 秒解释项目 → 建立像素复古 + 冷幽默气质 → 导向 Skills / Playground / GitHub

**模块：**

1. **Hero** — 项目标题 + 一句话定位 + CTA
2. **Choose Your Boss** — 12 个 boss 的像素角色选择界面
3. **Featured Skills** — 精选 skills 卡片
4. **How It Works** — 使用流程说明
5. **Playground Teaser** — 试玩入口引导
6. **GitHub CTA** — 导流区

**Hero 文案方向：**

- `Boss Skills`
- `A serious open-source framework for unserious bosses.`

**CTA：**

- Try the Playground
- Browse Skills
- View on GitHub

### 9.2 Skills List

**目标：** 像图鉴一样浏览所有 boss skills，支持筛选、详情和试玩跳转。

**卡片字段：** Skill 名称、一句话简介、Persona 类型、典型台词 1 条、标签、View Details / Try

**筛选维度：** Persona type、Tone intensity、Use case、Language

### 9.3 Skill Detail

**目标：** 完整介绍单个 skill，快速理解使用方式，引导回 GitHub 查看源文件。

**页面结构：** Skill 名称、Tagline、Persona Summary、Core Behaviors、Typical Lines、Communication Modes、Example Dialogues、Supported Languages、GitHub Source Link

### 9.4 Playground

**目标：** 让用户轻量试玩某个 boss skill，形成传播点，完成二次导流。

**输入项：** task、current progress、deadline、selected boss persona、language

**输出项：** task assignment、follow-up message、review feedback、meeting line

**第一版实现原则：**

- 不强依赖 LLM API
- 可先用预制模板 + 规则拼接
- 保证稳定、可控、上线快

**推荐附加功能：** `Random Boss Me`

### 9.5 About

**目标：** 讲清项目理念，解释为什么是戏谑项目但工程认真，建立品牌气质。

**内容：** 项目起源、为什么做 Boss Skills、工程原则、内容边界、多语言策略、与 GitHub 仓库关系

### 9.6 Contribute

**目标：** 降低贡献门槛，解释规则与边界，将流量导向 GitHub PR。

**内容：** 如何新增一个 skill、skill 文件结构、内容风格要求、不允许内容、PR 流程、模板链接、GitHub 仓库 CTA

---

## 10. 视觉设计要求

### 10.1 总体风格

明确采用：

- **FC 游戏机复古像素风**
- 8-bit / 16-bit 像素 UI 语言
- 带一点游戏菜单和卡带时代的视觉记忆

但不能做成廉价 meme 页，必须同时满足：像素风外观、现代信息架构、清晰易读、响应式布局、克制动画。

### 10.2 视觉关键词

retro pixel / FC / NES inspired / deadpan humor / corporate satire / playful but disciplined

### 10.3 视觉元素建议

- 像素字体用于标题或少量强调
- 正文字体保持现代高可读
- 像素边框 / 像素按钮 / 像素 icon
- 轻量 sprite / 菜单式动画
- 模拟游戏角色选择界面

### 10.4 避免事项

- 过度拟物
- 过重动效
- 背景过花影响阅读
- 低质量梗图堆砌
- 过于卡通导致失去"严肃工程"气质

---

## 11. 文案语气规范

**语气原则：** 一本正经地胡说八道 / 冷面幽默 / 轻微恶意但不低俗 / 像游戏角色介绍 + 企业产品 copy 的结合

**推荐文案示例：**

- Choose your boss.
- Deploy a manager. Regret immediately.
- Built with engineering discipline. Trained on emotional damage.
- For teams who thought one bad boss was not enough.

**禁止：** 粗暴低俗、人身攻击、网暴式羞辱、指向真实个人、歧视性表达

---

## 12. 技术方案

### 12.1 技术栈

- **框架：** Next.js
- **语言：** TypeScript
- **样式：** Tailwind CSS
- **组件：** shadcn/ui
- **部署：** Vercel

### 12.2 数据来源

以 GitHub 仓库内容为单一事实来源：

- `skills/*/skill.yaml`
- `skills/*/SKILL.en.md`
- `skills/*/SKILL.zh-CN.md`
- `skills/*/examples/*.md`

网站只负责渲染，不自建 CMS。

### 12.3 多语言策略

第一版支持 English + 简体中文。实现要求：页面级语言切换、skill 详情按 locale 渲染、为 `ja` / `es` 预留结构。

---

## 13. 功能范围

### 13.1 MVP 必须有

- 首页
- Skills 列表页
- Skill 详情页
- Playground
- GitHub 跳转
- 中英切换
- 响应式布局
- 从 repo 读取 skills 内容

### 13.2 可选增强项

- 搜索
- 标签筛选增强
- Featured / Random Boss
- 自动 OG image
- 更丰富的交互动效

### 13.3 明确不做

- 登录、云端保存、评论系统、在线协作、多 agent 实时调度、支付、复杂后端

---

## 14. GitHub 导流策略

每个关键页面都应配置 GitHub CTA。

| 位置 | CTA 文案 |
|------|----------|
| 首页 Hero | View on GitHub |
| Header 固定按钮 | ⭐ Star on GitHub |
| Skill Detail 底部 | View Source on GitHub |
| Playground 输出区域 | Use this skill from GitHub |
| Contribute 页主 CTA | Contribute a Boss |

---

## 15. 内容边界与安全原则

**接受的内容：** 抽象化职场 archetype、通用行为模式、非定向 satire、角色化表达

**不接受的内容：** 真实个人隐私、指名道姓影射羞辱、歧视内容、仇恨表达、公司内部敏感信息泄露、极端攻击性内容

---

## 16. 上线阶段建议

### Phase 1：快速上线版

Home、Skills List、Skill Detail、About、Contribute、GitHub CTA、中英切换、静态像素视觉风格

### Phase 2：增强版

Playground、Random Boss Me、更丰富筛选、动态生成示例、分享素材 / OG

> 如果时间很紧，Playground 可以后置到 Phase 2。

---

## 17. 验收标准

### 产品验收

- 首屏 3 秒内能解释项目定位
- 首页 / Skills / Contribute 都有明确 GitHub CTA
- 用户可在 3 步内到达具体 skill 页面
- 网站风格符合 FC 像素视觉方向
- 中英切换可用

### 设计验收

- 有复古像素辨识度
- 但整体仍专业、整洁、可读
- 不出现低质 meme 堆砌

### 工程验收

- 可静态部署到 Vercel
- 数据来自仓库文件
- 页面加载稳定
- 移动端可访问
- 结构清晰，便于后续迭代

---

## 18. 最终产品定义

Boss Skills Website 第一版不是一个 SaaS 平台，而是：

> **一个以 FC 复古像素风包装的、面向全球用户的 Boss Skills 开源项目官网。**
>
> 它负责解释项目、展示技能、提供轻量试玩，并高效地把用户导向 GitHub 下载、使用和贡献。

一句话收敛：

> **Repo is the engine. Website is the showroom.**
