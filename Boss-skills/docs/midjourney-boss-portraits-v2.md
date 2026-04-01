# Boss Skills — Midjourney 8-bit Portrait Prompts v2

## 一致性策略

### 生成流程（必须按顺序）

```
Step 1: 用"锚定prompt"生成第一张图，反复 /imagine 直到满意
Step 2: 对满意的图点 "U1-U4" 放大，获取图片链接
Step 3: 把该链接作为 --sref 加到后续所有 prompt 里
Step 4: 批量生成其余11张
Step 5: 对不满意的微调，保留 --sref 不变
```

### 锚定用 Prompt（Step 1 专用）

```
8-bit pixel art bust portrait of a male office boss character, front-facing, shoulders up, wearing a dark suit, simple geometric facial features, 4-color limited palette per character against solid dark navy background hex 002c55, clean pixel grid with visible individual pixels, NES 8-bit game character select screen portrait, no gradients, no anti-aliasing, hard pixel edges, retro 1980s video game aesthetic, flat shading, centered composition --ar 1:1 --s 200 --niji 6
```

反复生成这个，直到你找到一张"这就是我要的像素风格"。

---

## 统一风格后缀（所有角色 prompt 必须以此结尾）

```
STYLE_SUFFIX = front-facing bust portrait, shoulders up, simple geometric pixel facial features, 4-color limited palette per character, solid dark navy background hex 002c55, clean pixel grid with visible individual pixels, NES 8-bit game character select screen, no gradients, no anti-aliasing, hard pixel edges, flat shading, centered composition --sref [你的锚定图链接] --sw 100 --ar 1:1 --s 200 --niji 6
```

> 把 `[你的锚定图链接]` 替换为 Step 2 获取的真实链接

---

## 角色总览

| # | Boss | 性别 | 种族 | 核心道具/特征 |
|---|------|------|------|-------------|
| 1 | Micromanager | 男 | 东亚 | 巨型放大镜 |
| 2 | Passive-Aggressive | 女 | 白人 | 假笑 + "I'm Fine" 杯 |
| 3 | Empty Promises | 男 | 白人 | 彩虹肥皂泡 |
| 4 | Flip-Flopper | 女 | 黑人 | 双色分裂西装 |
| 5 | Always Following Up | 男 | 东亚 | 三部手机 |
| 6 | Credit Collector | 男 | 白人 | 金色奖章 + 皇冠 |
| 7 | Delegator Supreme | 女 | 东亚 | 墨镜 + 空桌 + 外指箭头 |
| 8 | Meeting for Everything | 男 | 黑人 | 耳麦 + 日历方块 |
| 9 | Last-Minute Chaos | 女 | 白人 | 着火的红发 + 闹钟 |
| 10 | Need Translation | 男 | 东亚 | 嘴出乱码符号 |
| 11 | Verbose Nonsense | 女 | 黑人 | 超长卷轴 + 大张嘴 |
| 12 | Visionary but Vague | 男 | 白人 | 望远镜 + 星空眼 |

---

## 角色 Prompts

> 格式：`[角色描述], {STYLE_SUFFIX}`
> 实际使用时把 `{STYLE_SUFFIX}` 替换为上面的完整后缀

### 1. Micromanager / 事无巨细型

```
East Asian middle-aged male boss, thin-rimmed glasses, neat combed-back black hair, dark grey suit with white shirt, holding an oversized magnifying glass to one eye making it comically large, intense squinting expression, tiny clipboard in other hand, sweat drop on temple, {STYLE_SUFFIX}
```

### 2. Passive-Aggressive / 阴阳怪气型

```
Caucasian woman boss, blonde bob haircut, pearl necklace, pastel pink blazer over white blouse, perfectly composed smile that does not reach her narrowed eyes, one eyebrow slightly raised, holding a white coffee mug with a small heart on it, subtle menacing aura despite polite appearance, {STYLE_SUFFIX}
```

### 3. Empty Promises / 画饼型

```
Caucasian male boss, slicked-back brown hair, flashy blue suit with shiny gold tie, impossibly bright toothy salesman grin, one hand gesturing grandly upward, three or four rainbow soap bubbles floating around his head, tiny sparkle stars near the bubbles, eyes gleaming with false optimism, {STYLE_SUFFIX}
```

### 4. Flip-Flopper / 反复横跳型

```
Black woman boss, natural curly afro hair, her blazer split into two different colors down the middle left half blue right half red, face showing conflicted expression, a green arrow pointing left on one side and an orange arrow pointing right on the other, scattered small sticky notes around her, {STYLE_SUFFIX}
```

### 5. Always Following Up / 夺命连环call型

```
Young East Asian male boss, messy short hair, wrinkled white dress shirt with loosened blue tie, anxious wide eyes with visible sweat drops, holding three phones simultaneously one at each ear and one in hand, small notification bell icons and exclamation marks floating around his head, stressed panicked expression, {STYLE_SUFFIX}
```

### 6. Credit Collector / 抢功型

```
Caucasian male boss, brown slicked hair with smug self-satisfied grin, dark suit with chest covered in golden medal pins and star badges, a small golden crown sitting slightly crooked on his head, giving one thumbs up gesture, puffed out chest with proud posture, tiny sparkle effects near the medals, {STYLE_SUFFIX}
```

### 7. Delegator Supreme / 甩锅大师型

```
East Asian woman boss, sleek black hair in a tight bun, oversized dark sunglasses, black power suit with arms crossed, cool detached expression with slight smirk, multiple small pixel arrows pointing away from her in four directions, her desk area completely empty and clean, effortlessly unbothered vibe, {STYLE_SUFFIX}
```

### 8. Meeting for Everything / 开会狂魔型

```
Black male boss, neat short beard, professional navy suit, wearing a headset microphone on one ear, holding a laser pointer in one hand, surrounded by floating calendar block icons and small clock symbols showing different times, mouth open mid-sentence with enthusiastic excited expression, {STYLE_SUFFIX}
```

### 9. Last-Minute Chaos / deadline杀手型

```
Caucasian woman boss, wild bright red hair with flame-like tips glowing orange, eyes wide with manic energy, holding a large alarm clock showing 11:59, two or three papers flying around her in chaos, wearing a grey blazer with one sleeve pushed up, small explosion star effect behind her head, slightly crazed grin, {STYLE_SUFFIX}
```

### 10. Need Translation / 黑话型

```
Middle-aged East Asian male boss, silver-rimmed glasses reflecting tiny data charts, expensive dark suit with power red tie, mouth open speaking but small abstract symbols floating out instead of words — tiny gears and graph icons and dollar signs, smug intellectual expression, perfectly groomed corporate authority look, {STYLE_SUFFIX}
```

### 11. Verbose Nonsense / 长篇大论型

```
Black woman boss, elegant braided updo hairstyle, reading glasses perched on nose tip, formal burgundy blazer, mouth wide open in mid-monologue, holding an impossibly long unrolling scroll of text that extends past the bottom of frame, animated enthusiastic expression, small ZZZ sleep symbols floating to one side, {STYLE_SUFFIX}
```

### 12. Visionary but Vague / 画大饼型

```
Caucasian male boss with silver-streaked wavy hair, wearing a black turtleneck like a tech CEO, dreamy faraway gaze with pixel stars in his eyes, holding a small brass telescope, surrounded by two or three floating cloud shapes and abstract geometric dots, serene confident smile, ethereal soft glow around head, {STYLE_SUFFIX}
```

---

## 风格微调参数说明

| 参数 | 作用 | 建议值 |
|------|------|--------|
| `--sref [url]` | 风格参考图锁定 | 你的锚定图链接 |
| `--sw` | 风格参考权重 (0-100) | 80-100（越高越一致） |
| `--s` | 风格化程度 | 150-250（太高会偏离像素感） |
| `--ar` | 比例 | 1:1（头像必须方形） |
| `--niji 6` | 日系/插画引擎 | 对像素风效果好 |
| `--no` | 负面提示 | `--no gradient, smooth, realistic, 3D, photograph` |

## 如果 --niji 像素感不够

切换为 `--v 6.1` 并追加负面提示：

```
{STYLE_SUFFIX 中把 --niji 6 替换为} --v 6.1 --no gradient smooth realistic 3D photograph blurry soft
```

## 批量生成建议

1. 先只跑锚定prompt，挑出最满意的一张
2. 用该图的 `--sref` 跑 #1 Micromanager 验证一致性
3. 满意后一次性跑完剩余11个
4. 对个别不满意的，保持 `--sref` 不变，微调角色描述部分重跑
5. 最终输出统一裁剪为 **512×512 PNG**，网页中用 `image-rendering: pixelated` 渲染

## 文件命名规范

生成后按此命名，直接放入 `website/public/bosses/` 目录：

```
boss-micromanager.png
boss-passive-aggressive.png
boss-empty-promises.png
boss-flip-flopper.png
boss-always-following-up.png
boss-credit-collector.png
boss-delegator-supreme.png
boss-meeting-for-everything.png
boss-last-minute-chaos.png
boss-need-translation.png
boss-verbose-nonsense.png
boss-visionary-but-vague.png
```
