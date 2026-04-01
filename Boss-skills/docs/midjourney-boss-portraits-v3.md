# Boss Skills — Midjourney 8-bit Portrait Prompts v3 (Dual-Locale)

> **v3 变更**: 按语言区分角色形象。中文版 12 张全部使用亚洲人/中国人特征；英文版 12 张使用欧美人 + 黑人多样性组合。共 **24 张** 半身像。

---

## 一致性策略

### 生成流程（必须按顺序）

```
Step 1: 用"锚定prompt"生成第一张图，反复 /imagine 直到满意
Step 2: 对满意的图点 "U1-U4" 放大，获取图片链接
Step 3: 把该链接作为 --sref 加到后续所有 prompt 里
Step 4: 批量生成其余 23 张（建议先跑完中文12张，再跑英文12张）
Step 5: 对不满意的微调，保留 --sref 不变
```

> **注意**: 中文版和英文版共用同一个 `--sref` 锚定图，确保像素风格一致，只有角色外貌不同。

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

| # | Boss | 核心道具/特征 |
|---|------|-------------|
| 1 | Micromanager 事无巨细型 | 巨型放大镜 |
| 2 | Passive-Aggressive 阴阳怪气型 | 假笑 + "I'm Fine" 杯 |
| 3 | Empty Promises 画饼型 | 彩虹肥皂泡 |
| 4 | Flip-Flopper 反复横跳型 | 双色分裂西装 |
| 5 | Always Following Up 夺命连环call型 | 三部手机 |
| 6 | Credit Collector 抢功型 | 金色奖章 + 皇冠 |
| 7 | Delegator Supreme 甩锅大师型 | 墨镜 + 空桌 + 外指箭头 |
| 8 | Meeting for Everything 开会狂魔型 | 耳麦 + 日历方块 |
| 9 | Last-Minute Chaos deadline杀手型 | 着火的头发 + 闹钟 |
| 10 | Need Translation 黑话型 | 嘴出乱码符号 |
| 11 | Verbose Nonsense 长篇大论型 | 超长卷轴 + 大张嘴 |
| 12 | Visionary but Vague 画大饼型 | 望远镜 + 星空眼 |

---

## 性别 & 种族分配

### 中文版（ZH）— 全部亚洲人/中国人特征

| # | Boss | 性别 | 外貌特征 |
|---|------|------|---------|
| 1 | Micromanager | 男 | 中年中国男性，方脸，细框眼镜 |
| 2 | Passive-Aggressive | 女 | 中年中国女性，鲨鱼夹盘发，针织衫 |
| 3 | Empty Promises | 男 | 中国男性，油亮背梳发，圆脸 |
| 4 | Flip-Flopper | 男 | 中年中国男性，微胖，双色polo衫 |
| 5 | Always Following Up | 男 | 中年中国男性，短寸头，黑色卫衣 |
| 6 | Credit Collector | 男 | 中国男性，国字脸，自信表情 |
| 7 | Delegator Supreme | 女 | 中国女性，丸子头，冷酷 |
| 8 | Meeting for Everything | 男 | 中国男性，短寸头，热情 |
| 9 | Last-Minute Chaos | 女 | 中年中国女性，紧低马尾，针织开衫 |
| 10 | Need Translation | 男 | 中年中国男性，银框眼镜 |
| 11 | Verbose Nonsense | 男 | 中年中国男性，微胖，polo衫 |
| 12 | Visionary but Vague | 男 | 中国男性，花白长发，黑色高领 |

### 英文版（EN）— 欧美人 + 黑人多样性

| # | Boss | 性别 | 种族 |
|---|------|------|------|
| 1 | Micromanager | 男 | 白人 |
| 2 | Passive-Aggressive | 女 | 白人 |
| 3 | Empty Promises | 男 | 白人 |
| 4 | Flip-Flopper | 女 | 黑人 |
| 5 | Always Following Up | 男 | 黑人 |
| 6 | Credit Collector | 男 | 白人 |
| 7 | Delegator Supreme | 女 | 黑人 |
| 8 | Meeting for Everything | 男 | 黑人 |
| 9 | Last-Minute Chaos | 女 | 白人 |
| 10 | Need Translation | 男 | 白人 |
| 11 | Verbose Nonsense | 女 | 黑人 |
| 12 | Visionary but Vague | 男 | 白人 |

> 英文版 7 白人 / 5 黑人，7 男 / 5 女

---

## Hero 首屏图 — "I WANT YOU" Boss 版（2张）

> 致敬 Uncle Sam "I Want You" 经典构图，替换为现代互联网 boss 形象。
> 用于网站首屏 banner，比例 **3:4 竖版**（适配首屏左右分栏布局）。
> 这两张 **不使用 --sref**，风格独立于 boss 半身像系列，允许更高精度和更多细节。

### HERO-ZH（中文版首屏）

```
8-bit pixel art poster of a Chinese middle-aged male internet company boss in Uncle Sam I Want You pointing pose, index finger jabbing aggressively at the viewer, slight beer belly visible, wearing a wrinkled black polo shirt with top two buttons undone, a string of Buddhist prayer beads wrapped around one thick wrist, thinning greasy hair in a classic Mediterranean balding pattern combed over poorly, round oily face with flushed red cheeks and a shiny forehead glistening with sweat, pudgy double chin, nostrils flared wide pointing skyward with extreme arrogance, eyes narrowed into contemptuous slits looking down at you like you are worthless, thick lips curled into a smug disgusted sneer, deep nasolabial folds from years of barking orders, the unmistakable face of a Chinese tech boss who invented 996 culture and thinks employees should be grateful, bold confrontational half-body composition against solid dark navy background hex 002c55, dramatic pixel shading on face, NES 8-bit game character style, clean pixel grid with visible individual pixels, no gradients, no anti-aliasing, hard pixel edges, flat shading --ar 3:4 --s 250 --niji 6
```

### HERO-EN（英文版首屏）

```
8-bit pixel art poster of a Caucasian middle-aged male Silicon Valley tech CEO in Uncle Sam I Want You pointing pose, index finger jabbing aggressively at the viewer, wearing a plain grey crew-neck t-shirt under a dark Patagonia fleece vest, one wireless earbud visible in ear, neat but receding sandy brown hair with grey temples buzzed short on the sides, lean angular face with sharp cheekbones and hollow cheeks from intermittent fasting, thin lips stretched into a cold calculating smile that does not reach his pale blue eyes, nostrils flared skyward with quiet billionaire arrogance, chin raised looking down at you like a spreadsheet he is about to optimize, visible crow's feet and forehead lines from years of firing people while calling it "right-sizing", the unmistakable face of a Silicon Valley founder who preaches "we are a family" then does layoffs by email, bold confrontational half-body composition against solid dark navy background hex 002c55, dramatic pixel shading on face, NES 8-bit game character style, clean pixel grid with visible individual pixels, no gradients, no anti-aliasing, hard pixel edges, flat shading --ar 3:4 --s 250 --niji 6
```

### Hero 图使用说明

| 项目 | 说明 |
|------|------|
| 比例 | 3:4 竖版，适配首屏左侧/右侧主视觉 |
| 尺寸 | 建议输出后裁切为 **768×1024** 或 **900×1200** |
| 位置 | 首屏 Hero 区域，配合标题文字和 CTA 按钮 |
| 渲染 | `image-rendering: pixelated` 保持像素锐利 |
| 不用 --sref | 这张是独立海报风格，精度高于角色半身像 |
| 文件命名 | `website/public/hero-boss-zh.png` / `website/public/hero-boss-en.png` |

### 如果想加文字标语（可选，在 Midjourney 里加或后期叠）

中文版叠加文字（建议用 CSS/代码叠加而非烧进图里）：
> **I WANT YOU — 来加班**

英文版叠加文字：
> **I WANT YOU — TO SHIP BY FRIDAY**

---

## 中文版 Prompts（ZH — 全部中国人特征）

> 格式：`[角色描述], {STYLE_SUFFIX}`
> 实际使用时把 `{STYLE_SUFFIX}` 替换为上面的完整后缀

### ZH-1. Micromanager / 事无巨细型

```
Chinese middle-aged male boss with an oily square jaw and shiny forehead, thin-rimmed glasses pushed low on nose peering over the top with judgmental beady eyes, obsessively neat combed-back black hair gelled to perfection, dark grey suit buttoned too tight, leaning forward intrusively into personal space, holding an oversized magnifying glass to one eye making it comically huge, condescending know-it-all smirk, tiny clipboard in other hand, visible sweat drop on temple from overthinking, {STYLE_SUFFIX}
```

### ZH-2. Passive-Aggressive / 阴阳怪气型

```
Chinese middle-aged woman boss, shoulder-length straight black hair pulled back with a claw clip, sharp cheekbones with hollow cheeks, thin lips curled into a venomous fake smile that is more of a sneer, eyes ice-cold and piercing with visible crow's feet from years of judging people, one eyebrow arched high in withering disapproval, chin tucked slightly looking at you over the top of her glasses with a you-dare-to-disappoint-me glare, wearing a fitted knit top with arms crossed, holding a white coffee mug with a small heart on it as ironic contrast, radiating the energy of someone who will destroy you politely in front of the whole team, {STYLE_SUFFIX}
```

### ZH-3. Empty Promises / 画饼型

```
Chinese male boss, greasy slicked-back shiny black hair reflecting light, round pudgy face with plump rosy cheeks and double chin, flashy blue suit with shiny gold tie, impossibly wide used-car-salesman toothy grin showing all teeth, one hand gesturing grandly upward like making a huge empty promise, three or four rainbow soap bubbles floating around his head, eyes squeezed into gleaming crescents of false optimism, oozing sleazy charm, {STYLE_SUFFIX}
```

### ZH-4. Flip-Flopper / 反复横跳型

```
Chinese middle-aged male boss, thinning black hair parted to one side with oily sheen, round soft pudgy face with flushed cheeks and double chin, wearing a polo shirt split into two different colors down the middle left half blue right half red, face caught mid-switch between two completely opposite expressions — one eye confident and one eye panicked, mouth twisted in an indecisive grimace, sweaty forehead glistening from the stress of flip-flopping, one hand pointing left the other pointing right, chin raised with unearned authority despite obvious confusion, a green arrow on one side and an orange arrow on the other, {STYLE_SUFFIX}
```

### ZH-5. Always Following Up / 夺命连环call型

```
Chinese middle-aged male boss, short buzz-cut hair with receding hairline, gaunt sharp face with prominent cheekbones and sunken cheeks from chronic overwork, dark heavy eye bags, wearing a black tech-bro hoodie with sleeves pushed up, jaw clenched tight with impatient irritation, eyes glaring with cold controlling intensity as if tracking your every move, holding three phones simultaneously one at each ear and one in hand, mouth slightly open mid-bark firing off demands, small notification bell icons and exclamation marks floating around his head, radiating the suffocating energy of a boss who messages you at 2am and expects an instant reply, {STYLE_SUFFIX}
```

### ZH-6. Credit Collector / 抢功型

```
Chinese male boss with a broad oily square face and insufferably smug self-satisfied grin, nostrils slightly flared with arrogance, chin tilted up looking down at viewer with condescending half-lidded eyes, dark suit with chest covered in golden medal pins and star badges, a small golden crown sitting slightly crooked on his head, giving one thumbs up pointing at himself, puffed out chest with exaggerated proud I-did-this posture, {STYLE_SUFFIX}
```

### ZH-7. Delegator Supreme / 甩锅大师型

```
Chinese woman boss, sleek black hair in a tight severe bun pulled painfully tight, oversized dark sunglasses hiding her eyes, sharp cheekbones, black power suit with arms crossed in dismissive posture, lips pressed into a thin patronizing smirk that says not-my-problem, chin slightly raised with superiority, multiple small pixel arrows pointing away from her in four directions, radiating cold corporate indifference, {STYLE_SUFFIX}
```

### ZH-8. Meeting for Everything / 开会狂魔型

```
Chinese male boss, neat short buzz-cut black hair with slightly shiny oily forehead, professional navy suit, wearing a headset microphone on one ear, mouth wide open mid-sentence talking endlessly with oblivious enthusiasm, eyes bright with annoying overeager energy that nobody asked for, one finger raised in a lets-schedule-another-meeting gesture, surrounded by floating calendar block icons and small clock symbols, completely unaware everyone hates this, {STYLE_SUFFIX}
```

### ZH-9. Last-Minute Chaos / deadline杀手型

```
Chinese middle-aged woman boss, sharp angular face with thin pursed lips and deep frown lines, hair in a tight low ponytail slightly fraying from stress, wearing a fitted knit cardigan over a high-collar blouse with a lanyard badge dangling from neck, eyes narrowed into an impatient death glare that could freeze the room, one hand on hip the other jabbing a finger forward demandingly, holding a large alarm clock showing 11:59, two or three papers flying around her, small explosion star effect behind her head, radiating mean-spirited toxic urgency of someone who creates every crisis then blames you for it, {STYLE_SUFFIX}
```

### ZH-10. Need Translation / 黑话型

```
Middle-aged Chinese male boss, silver-rimmed glasses reflecting tiny data charts, receding hairline with remaining hair slicked back immaculately, expensive dark suit with power red tie, mouth open pontificating with an air of intellectual superiority, small abstract jargon symbols floating out instead of real words — tiny gears and graph icons and dollar signs, smugly self-impressed expression with one eyebrow raised as if you should already understand, exuding oily corporate-speak energy, {STYLE_SUFFIX}
```

### ZH-11. Verbose Nonsense / 长篇大论型

```
Chinese middle-aged male boss, thinning greasy black hair with visible comb-over, round pudgy face with oily shiny skin and flushed cheeks, small reading glasses sliding down his nose, wearing a wrinkled dark polo shirt with top button undone revealing gold chain necklace, slight beer belly visible, mouth comically wide open in mid-endless-monologue with no sign of stopping, one hand raised with index finger wagging making a dramatic point, eyes squinted shut with self-absorbed passion completely oblivious that nobody is listening, holding an impossibly long unrolling scroll of text, small ZZZ sleep symbols floating to one side, the face of a middle-aged uncle who loves lecturing everyone, {STYLE_SUFFIX}
```

### ZH-12. Visionary but Vague / 画大饼型

```
Chinese male boss with silver-streaked wavy black hair swept back pretentiously, wearing a black turtleneck like a wannabe tech visionary, eyes gazing dramatically into the distance with pixel stars in his pupils as if seeing a future only he understands, chin raised with theatrical self-importance, holding a small brass telescope, serene smugly enlightened smile of someone who thinks they are a genius, surrounded by two or three floating cloud shapes, ethereal soft glow around head, {STYLE_SUFFIX}
```

---

## 英文版 Prompts（EN — 欧美人 + 黑人）

> 格式：`[角色描述], {STYLE_SUFFIX}`

### EN-1. Micromanager / The Micromanager

```
Caucasian middle-aged male boss with a shiny reddish forehead and visible throbbing temple vein, thin-rimmed glasses pushed low on nose peering over the top with beady suspicious eyes full of distrust, obsessively neat combed-back thinning brown hair, dark grey suit buttoned too tight on a stiff rigid body, leaning uncomfortably far forward into your personal space invading it, holding an oversized magnifying glass to one eye making it comically huge, lips pursed into a tight disapproving thin line, nostrils flared like he just caught you slacking, tiny clipboard in other hand, radiating pure controlling micromanager rage, {STYLE_SUFFIX}
```

### EN-2. Passive-Aggressive / The Passive-Aggressive

```
Caucasian middle-aged woman boss, sharp blonde bob haircut not a single hair out of place, thin lips stretched into a venomous smile that is barely hiding pure contempt, eyes narrowed into icy slits judging your entire existence, one eyebrow arched impossibly high in withering disapproval, head tilted with exaggerated fake sympathy, visible crow's feet from decades of looking down on people, pearl necklace over a crisp blouse, holding a white coffee mug with a small heart on it as cruel ironic contrast, radiating the energy of someone about to say "per my last email", {STYLE_SUFFIX}
```

### EN-3. Empty Promises / The Promise Maker

```
Caucasian male boss, greasy slicked-back brown hair with visible gel shine, round pudgy face with plump flushed cheeks and soft double chin glistening with sweat, flashy blue suit with shiny gold tie, impossibly wide used-car-salesman toothy grin showing every single tooth, eyes squeezed into sly gleaming crescents that scream I-am-lying-to-your-face, one hand gesturing grandly upward selling you a future that will never arrive, three or four rainbow soap bubbles floating around his head, oozing the sleazy charm of a man who has never kept a promise in his life, {STYLE_SUFFIX}
```

### EN-4. Flip-Flopper / The Flip-Flopper

```
Black woman boss, natural curly afro hair slightly frizzy from stress, her blazer split into two different colors down the middle left half blue right half red, face caught mid-switch between two completely opposite expressions — one eye rolling upward in exasperation and the other wide with panic, mouth twisted into an irritated scowl, jaw clenched from the effort of pretending she did not just say the exact opposite five minutes ago, nostrils flared with defensive anger, a green arrow pointing left on one side and an orange arrow pointing right on the other, radiating do-not-question-me energy despite being obviously wrong, {STYLE_SUFFIX}
```

### EN-5. Always Following Up / The Follow-Up Fiend

```
Black male boss, short cropped hair with neat line-up, dark heavy circles under intense bloodshot eyes that have not blinked in hours, jaw clenched so tight you can see the muscles twitching, wrinkled dress shirt with loosened tie, veins visibly popping on his forehead and neck, holding three phones simultaneously one at each ear and one in hand, mouth open mid-bark demanding an update RIGHT NOW, nostrils flared with impatient fury, small notification bell icons and exclamation marks floating around his head, the face of a man who will call you eleven times if you do not answer in thirty seconds, {STYLE_SUFFIX}
```

### EN-6. Credit Collector / The Credit Collector

```
Caucasian male boss with an oily fake-tanned face and unnaturally white teeth, brown slicked hair, insufferably smug self-satisfied grin so wide it distorts his whole face, nostrils flared skyward with shameless arrogance, chin tilted way up looking down at you through half-lidded contemptuous eyes, one eyebrow cocked as if daring you to claim credit, dark suit with chest covered in golden medal pins and star badges, a small golden crown sitting crooked on his head, giving one thumbs up pointing at himself while mouthing the word "me", puffed out chest with disgustingly proud posture, {STYLE_SUFFIX}
```

### EN-7. Delegator Supreme / The Delegator Supreme

```
Black woman boss, short natural tapered hair, oversized dark sunglasses hiding eyes that clearly just rolled, sharp cheekbones and hollow cheeks, black power suit with arms crossed in a wall of pure dismissal, lips pressed into a thin patronizing smirk dripping with disdain, chin raised high with nostrils pointing skyward, entire body language screaming that-sounds-like-a-you-problem, multiple small pixel arrows pointing away from her in four directions, the coldest most unbothered person in any room, {STYLE_SUFFIX}
```

### EN-8. Meeting for Everything / The Meeting Maniac

```
Black male boss, neat short beard, shiny forehead, professional navy suit, wearing a headset microphone on one ear, mouth wide open mid-sentence with an obnoxiously loud booming energy that fills the entire room, eyes bulging with manic meeting-obsessed excitement, one finger jabbing upward insistently demanding attention, eyebrows raised impossibly high as if every single thing he says is the most important announcement ever made, surrounded by floating calendar block icons and small clock symbols, the face of a man who would schedule a meeting to discuss why there are too many meetings, {STYLE_SUFFIX}
```

### EN-9. Last-Minute Chaos / The Chaos Agent

```
Caucasian middle-aged woman boss, wild disheveled bright red hair flying in all directions like she just ran through a tornado, eyes bulging wide and unhinged with terrifying manic energy, teeth bared in a crazed snarl of someone who thrives on making everyone else panic, visible veins on her neck from screaming, holding a large alarm clock showing 11:59, two or three papers flying around her, wearing a wrinkled blazer with one sleeve pushed up revealing a clenched white-knuckled fist, nostrils flared with furious impatience, small explosion star effect behind her head, the look of someone screaming WHY IS THIS NOT DONE YET at 11pm on a Friday, {STYLE_SUFFIX}
```

### EN-10. Need Translation / The Jargon Machine

```
Caucasian middle-aged male boss, silver-rimmed glasses perched on nose reflecting tiny data charts, receding hairline with remaining hair slicked back immaculately, expensive dark suit with power red tie, mouth open wide pontificating with eyes half-closed in smug intellectual ecstasy, nostrils flared with the superiority of someone who thinks using big words makes him smart, one hand raised with fingers pinched in a condescending explaining gesture, small abstract jargon symbols floating out instead of real words — tiny gears and graph icons and dollar signs, the insufferable face of a man who says "let me unpack that for you" in every conversation, {STYLE_SUFFIX}
```

### EN-11. Verbose Nonsense / The Monologue Monster

```
Black woman boss, elegant braided updo hairstyle, reading glasses perched on nose tip, formal burgundy blazer, mouth comically wide open in mid-endless-monologue that has been going on for forty-five minutes, eyes rolling upward in theatrical self-importance completely drunk on her own words, one hand raised with finger wagging like she is lecturing children, the other hand holding an impossibly long unrolling scroll of text, nostrils flared with the passion of someone who genuinely believes every word she says is gold, small ZZZ sleep symbols floating to one side, the face of pure oblivious self-obsession, {STYLE_SUFFIX}
```

### EN-12. Visionary but Vague / The Visionary

```
Caucasian male boss with silver-streaked wavy hair swept back pretentiously, wearing a black turtleneck like a wannabe tech messiah, eyes gazing dramatically into the far distance with pixel stars in his pupils completely ignoring everyone in the room, nostrils slightly flared with the quiet arrogance of a man who confuses vagueness for depth, chin raised at an absurd angle of theatrical self-importance, lips curled into a serene I-see-things-you-cannot-comprehend smile, holding a small brass telescope, surrounded by two or three floating cloud shapes, ethereal soft glow around head like a self-appointed prophet, {STYLE_SUFFIX}
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

---

## 批量生成建议

1. 先只跑锚定prompt，挑出最满意的一张
2. 用该图的 `--sref` 跑 ZH-1 Micromanager 验证一致性
3. 满意后先跑完中文 12 张，再跑英文 12 张（共用同一个 --sref）
4. 对个别不满意的，保持 `--sref` 不变，微调角色描述部分重跑
5. 最终输出统一裁剪为 **512×512 PNG**，网页中用 `image-rendering: pixelated` 渲染

---

## 文件命名规范

按语言区分，放入 `website/public/bosses/` 目录：

### 中文版（zh/）

```
website/public/bosses/zh/
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

### 英文版（en/）

```
website/public/bosses/en/
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

### 代码引用方式

```tsx
// 根据当前语言动态加载
const locale = currentLang; // 'zh' | 'en'
const bossImage = `/bosses/${locale}/boss-${slug}.png`;
```

---

## 网站集成备注

1. `PixelBossCard` 组件需要接受 `locale` prop 来选择对应图片路径
2. `skills/[slug]/page.tsx` 详情页同理，根据语言切换头像
3. 建议在 `i18n.ts` 中增加 `bossImageLocale` 映射
4. 如果用户浏览器语言为 zh 相关 → 显示中文版头像；否则显示英文版
