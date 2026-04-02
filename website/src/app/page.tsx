'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useLocale } from '@/contexts/AppContext';

/* ═══════════════════════════════════════════════════════════════════════════════
   BOSS DATA
═══════════════════════════════════════════════════════════════════════════════ */

interface BossData {
  slug: string;
  nameEn: string;
  nameCn: string;
  descEn: string;
  descCn: string;
  quoteEn: string;
  quoteCn: string;
  annoyance: 'mild' | 'moderate' | 'high' | 'soul-crushing';
  tagsEn: string[];
  tagsCn: string[];
}

const BOSSES: BossData[] = [
  {
    slug: 'micromanager',
    nameEn: 'Micromanager',
    nameCn: '事无巨细型',
    descEn: 'Monitors every keystroke. Reads every Slack. Has opinions about your font choice.',
    descCn: '你的每一次呼吸，他都要审批。',
    quoteEn: '"I noticed you were AFK for 7 minutes. Everything okay?"',
    quoteCn: '"这个字体我觉得用宋体比微软雅黑好，你觉得呢？——不，你不需要觉得。"',
    annoyance: 'soul-crushing',
    tagsEn: ['control freak', 'pixel peeper'],
    tagsCn: ['控制欲max', '细节强迫症'],
  },
  {
    slug: 'passive-aggressive',
    nameEn: 'Passive-Aggressive',
    nameCn: '阴阳怪气型',
    descEn: 'Never says what they mean. Every "per my last email" is a declaration of war.',
    descCn: '表面笑嘻嘻，背后mmp。',
    quoteEn: '"No worries at all! Just circling back for the fifth time :)"',
    quoteCn: '"挺好的呀，就是跟我想的完全不一样。"',
    annoyance: 'soul-crushing',
    tagsEn: ['corporate smile', 'email warfare'],
    tagsCn: ['笑面虎', '高情商骂人'],
  },
  {
    slug: 'empty-promises',
    nameEn: 'Empty Promises',
    nameCn: '画饼型',
    descEn: 'Promotions are always "next quarter." Raises are "in the pipeline." The pipeline is a black hole.',
    descCn: '明天给你涨薪，下季度给你升职，等公司上市就……',
    quoteEn: '"Big things coming for the team. Stay tuned."',
    quoteCn: '"好好干，亏不了你的。"',
    annoyance: 'moderate',
    tagsEn: ['vaporware', 'trust me bro'],
    tagsCn: ['饼王', '我信你个鬼'],
  },
  {
    slug: 'flip-flopper',
    nameEn: 'Flip-Flopper',
    nameCn: '反复横跳型',
    descEn: 'Changed the entire roadmap before your coffee got cold.',
    descCn: '你咖啡还没凉，需求已经改了五版。',
    quoteEn: '"Actually, scrap everything. Let\'s go back to version one."',
    quoteCn: '"算了算了，还是用回第一版吧。"',
    annoyance: 'high',
    tagsEn: ['whiplash', 'ctrl+z boss'],
    tagsCn: ['需求过山车', '朝令夕改'],
  },
  {
    slug: 'always-following-up',
    nameEn: 'Always Following Up',
    nameCn: '夺命连环call型',
    descEn: 'If you miss the first ping, expect eleven more and a "are you there?" in all caps.',
    descCn: '你不接第一个电话，他能给你打到手机没电。',
    quoteEn: '"Hey. Hey? Hey?? Quick sync?"',
    quoteCn: '"在吗？在吗？？在吗？？？"',
    annoyance: 'high',
    tagsEn: ['notification bomb', '2am pinger'],
    tagsCn: ['消息轰炸机', '24h在线'],
  },
  {
    slug: 'credit-collector',
    nameEn: 'Credit Collector',
    nameCn: '抢功型',
    descEn: 'Your 3am commit. Their Monday morning presentation. Their promotion.',
    descCn: '你加班到凌晨的PPT，他第二天对老板说"我们团队做的"。',
    quoteEn: '"As I was telling the board about OUR initiative..."',
    quoteCn: '"这是我们部门的成果。"（我 = 我们）',
    annoyance: 'high',
    tagsEn: ['glory thief', 'we = me'],
    tagsCn: ['功劳收割机', '白嫖王'],
  },
  {
    slug: 'delegator-supreme',
    nameEn: 'Delegator Supreme',
    nameCn: '甩锅大师型',
    descEn: 'First to dodge, last to take blame. Delegation is their only skill.',
    descCn: '出了事第一个推你出去，立功时第一个往前站。',
    quoteEn: '"This is a great growth opportunity for you."',
    quoteCn: '"这个你最擅长了，交给你我放心。"',
    annoyance: 'moderate',
    tagsEn: ['blame router', 'not my job'],
    tagsCn: ['甩锅侠', '背锅侠制造者'],
  },
  {
    slug: 'meeting-for-everything',
    nameEn: 'Meeting for Everything',
    nameCn: '开会狂魔型',
    descEn: 'Could\'ve been an email. Wasn\'t. Never is. Never will be.',
    descCn: '一封邮件能说清的事，非要拉十个人开一小时会。',
    quoteEn: '"Let\'s sync on the sync about the sync."',
    quoteCn: '"我们先开个会对齐一下，然后再开个会复盘这次对齐。"',
    annoyance: 'high',
    tagsEn: ['calendar terrorist', 'meeting hoarder'],
    tagsCn: ['日历恐怖分子', '会议成瘾'],
  },
  {
    slug: 'last-minute-chaos',
    nameEn: 'Last-Minute Chaos',
    nameCn: 'Deadline杀手型',
    descEn: '10 minutes before deadline: "Let\'s pivot the entire approach."',
    descCn: '离交付还有10分钟："方向全部推翻重来。"',
    quoteEn: '"URGENT: We need to rethink everything. I present at 2pm."',
    quoteCn: '"紧急！方案全改！我下午要汇报！"',
    annoyance: 'soul-crushing',
    tagsEn: ['deadline destroyer', 'chaos agent'],
    tagsCn: ['临时起义', 'DDL毁灭者'],
  },
  {
    slug: 'need-translation',
    nameEn: 'Need Translation',
    nameCn: '黑话型',
    descEn: 'Speaks exclusively in buzzwords. "Synergize" isn\'t ironic to them.',
    descCn: '满嘴"格调""赋能""感悟""抓手"，想听懂都还需要配个专门做中译中的嫡系。',
    quoteEn: '"Let\'s leverage our core competencies to ideate at scale."',
    quoteCn: '"我们要打通底层逻辑，形成全链路闭环打法。"',
    annoyance: 'moderate',
    tagsEn: ['buzzword bingo', 'jargon lord'],
    tagsCn: ['互联网黑话', '赋能大师'],
  },
  {
    slug: 'verbose-nonsense',
    nameEn: 'Verbose Nonsense',
    nameCn: '长篇大论型',
    descEn: 'Three paragraphs when one word would do. Minimum. With attachments.',
    descCn: '一句话能说完的事，他能写三段加一个附件。',
    quoteEn: '"Per my previous email, and the one before that, and the one before that..."',
    quoteCn: '"如我之前邮件所述，以及之前之前的邮件所述……"',
    annoyance: 'moderate',
    tagsEn: ['wall of text', 'email novelist'],
    tagsCn: ['废话文学', '邮件小说家'],
  },
  {
    slug: 'visionary-but-vague',
    nameEn: 'Visionary but Vague',
    nameCn: '画大饼型',
    descEn: 'Has big dreams and zero specs. Execution is your problem.',
    descCn: '有宏大的愿景，零具体方案。落地是你的事。',
    quoteEn: '"Make it... transformative. You know what I mean."',
    quoteCn: '"我要的是那种……颠覆性的感觉，你懂吧？"',
    annoyance: 'high',
    tagsEn: ['big picture only', 'detail-free zone'],
    tagsCn: ['格局打开', '细节免谈'],
  },
];

/* ═══════════════════════════════════════════════════════════════════════════════
   PLAYGROUND DATA
═══════════════════════════════════════════════════════════════════════════════ */

const BOSS_TEMPLATES: Record<string, Record<string, { en: string[]; zh: string[] }>> = {
  micromanager: {
    task_assignment: {
      en: [
        `So I'm assigning you {{task}}. I need you to send me a status update every 30 minutes — not because I don't trust you, but because transparency is key to alignment. Also, can you walk me through your approach before you start? CC me on all related emails. Just to confirm — the deadline is {{deadline}}, right?`,
        `Quick thing — I'm giving you {{task}} to handle. I'll need visibility into your progress starting immediately. Can you give me percentage updates? The deadline is {{deadline}}, and I'll follow up in 30 minutes just to check in.`,
      ],
      zh: [
        `{{task}}这个事我交给你了。每半小时跟我汇报一次进度——不是不信任你，是为了对齐信息。另外开始之前先跟我过一下你的方案。所有邮件抄送我。确认一下，deadline是{{deadline}}对吧？`,
        `{{task}}你来做。从现在开始我要实时看到进度。能不能给我一个百分比？比如做到50%还是65%了？deadline是{{deadline}}，半小时后我来找你。`,
      ],
    },
    progress_check: {
      en: [
        `Hey, just checking in — where are we on {{task}}? {{progress}} sounds good, but can you break it down by subtask? Also, percentages please. Like, is it 50% or 65%?`,
        `Status update time. {{task}} — where are we? I saw some activity but I need the details. {{progress}} is great context, but give me the micro-level breakdown.`,
      ],
      zh: [
        `嘿，{{task}}进展怎么样了？{{progress}}听起来还行，但能不能按子任务拆解一下？另外给我个百分比。`,
        `汇报时间。{{task}}目前什么情况？我看到有些动静，但我要细节。{{progress}}说的太笼统了。`,
      ],
    },
  },
  'passive-aggressive': {
    task_assignment: {
      en: [
        `Oh, interesting choice on {{task}}. I appreciate the... boldness of your approach. The deadline is {{deadline}}. I'm sure you'll figure it out. I just hope the complexity doesn't overwhelm things.`,
        `That's {{task}}? Okay. I see. Well, interesting direction. Not what I would have chosen, but there's a method to your madness, I'm sure. {{deadline}} is our target.`,
      ],
      zh: [
        `哦，{{task}}是吧。你这个方案挺……大胆的。deadline是{{deadline}}。我相信你能搞定的。只是别太复杂了就好。`,
        `{{task}}？嗯……好吧。挺有意思的方向。虽然不是我会选的，但你开心就好。{{deadline}}之前交。`,
      ],
    },
    progress_check: {
      en: [
        `So how's {{task}} coming along? {{progress}} is... well, it's something. I'm not saying it's not good, but I did expect more momentum by now.`,
      ],
      zh: [
        `{{task}}做得怎么样啦？{{progress}}是吧……嗯，也算是一种进展吧。我不是说不好，只是本来以为能更快一点。`,
      ],
    },
  },
  'empty-promises': {
    task_assignment: {
      en: [
        `Oh, {{task}}? Yeah, that's important. We'll definitely make sure you're set up for success. {{progress}} is a solid start. This could be huge for you. We'll circle back in a few weeks. Or next quarter.`,
      ],
      zh: [
        `{{task}}？对，这个很重要。放心，公司肯定会给你资源支持的。{{progress}}这个开头不错。这次做好了对你来说意义很大。下个季度我们再聊。`,
      ],
    },
    progress_check: {
      en: [
        `How's {{task}} going? {{progress}} sounds great. Once we get through this quarter, we can really accelerate things. Let's touch base in like 6 weeks.`,
      ],
      zh: [
        `{{task}}进展如何？{{progress}}听起来很不错。等这个季度过去，我们就能大展拳脚了。过六周再聊。`,
      ],
    },
  },
  'flip-flopper': {
    task_assignment: {
      en: [
        `So I'm giving you {{task}}. Actually, wait — should we approach it differently? {{progress}} is the current state, and {{deadline}} is the target, but what if we pivoted? No, let's stick with the plan. But also think about alternatives.`,
      ],
      zh: [
        `{{task}}你来做吧。等等——要不要换个方向？目前{{progress}}，deadline是{{deadline}}，但万一换个思路呢？算了，还是按原计划。但你也想想别的方案。`,
      ],
    },
    progress_check: {
      en: [
        `Where are we on {{task}}? {{progress}} is good. Wait, actually, can we talk about changing direction? Actually, the original way was better. Never mind.`,
      ],
      zh: [
        `{{task}}做到哪了？{{progress}}还不错。等一下，要不要改个方向？算了，还是原来的好。当我没说。`,
      ],
    },
  },
  'always-following-up': {
    task_assignment: {
      en: [
        `Hey! {{task}} — need this by {{deadline}}. I'll ping you in an hour to see where you're at. Actually, maybe 30 minutes. Also, can you confirm you saw this message? And this one? Hello?`,
        `Assigning you {{task}}. Deadline: {{deadline}}. Quick question — did you get my last 3 messages about this? Can you reply to confirm? I'll follow up on Slack, WeChat, email, and in person just in case.`,
      ],
      zh: [
        `在吗？{{task}}这个事交给你了，{{deadline}}之前要。一小时后我来问进度。不对，半小时吧。你看到消息了吗？回复一下？在吗？？`,
        `{{task}}给你了，deadline是{{deadline}}。话说你看到我之前发的三条消息了吗？回一下确认收到。我Slack、微信、邮件、当面各发一遍以防万一。`,
      ],
    },
    progress_check: {
      en: [
        `Quick check — {{task}}? {{progress}}? Cool. I'll check back in 15 minutes. Then again in 30. Then before EOD. Then tomorrow at 8am.`,
      ],
      zh: [
        `快速确认一下——{{task}}怎么样了？{{progress}}？好。15分钟后我再问。30分钟后再问。下班前再问一次。明天早上8点再问。`,
      ],
    },
  },
  'credit-collector': {
    task_assignment: {
      en: [
        `I need you to crush {{task}} by {{deadline}}. This is really MY initiative — I pitched this to leadership. Just execute the vision and I'll make sure the team gets recognized. The team. Meaning me.`,
      ],
      zh: [
        `{{task}}拜托你了，{{deadline}}之前搞定。这个项目是我跟老板提的，你负责落地就行。做好了我一定让领导知道是"我们团队"的成果。我们=我。`,
      ],
    },
    progress_check: {
      en: [
        `How's {{task}} going? {{progress}} — great. I already mentioned this project in the leadership sync. Don't worry, I said "the team." Send me the deck when it's done, I'll present it.`,
      ],
      zh: [
        `{{task}}做得怎么样了？{{progress}}——好。我已经在管理层周会上提了这个项目。放心，我说了是"团队"的功劳。做完PPT发我，我来汇报。`,
      ],
    },
  },
  'delegator-supreme': {
    task_assignment: {
      en: [
        `So {{task}} — I think this is a great growth opportunity for you. I'd do it myself but I'm swamped with, uh, strategy. Deadline is {{deadline}}. If anything goes wrong, it's a learning experience. For you.`,
      ],
      zh: [
        `{{task}}——我觉得这对你来说是一次非常好的成长机会。我自己做也行但是我在忙……战略层面的事。deadline是{{deadline}}。万一出问题了，就当是学习经验。你的。`,
      ],
    },
    progress_check: {
      en: [
        `Any update on {{task}}? {{progress}}? Cool. If there are any problems, figure them out. That's what growth looks like. I believe in you. From a safe distance.`,
      ],
      zh: [
        `{{task}}有什么进展吗？{{progress}}？不错。有问题你自己想办法解决。成长就是这么来的。我看好你。在远处看好你。`,
      ],
    },
  },
  'meeting-for-everything': {
    task_assignment: {
      en: [
        `Before you start on {{task}}, let's schedule a kickoff meeting. Then a follow-up. Then a retro. Actually, let's do a pre-kickoff alignment sync first. Deadline is {{deadline}} but we might need a meeting to confirm that.`,
      ],
      zh: [
        `{{task}}开始之前，我们先开个启动会。然后跟进会。然后复盘会。等等，先开个启动前的对齐会。deadline是{{deadline}}，但这个我们可能还要开个会确认一下。`,
      ],
    },
    progress_check: {
      en: [
        `How's {{task}}? {{progress}} — let's discuss in a meeting. I'll invite the whole team. And legal. And that one person from marketing who's always confused. Block 2 hours.`,
      ],
      zh: [
        `{{task}}进展如何？{{progress}}——我们开个会讨论一下。我把整个团队拉上。法务也叫上。还有市场部那个永远搞不清状况的同事。预留两小时。`,
      ],
    },
  },
  'last-minute-chaos': {
    task_assignment: {
      en: [
        `URGENT — I need {{task}} done by {{deadline}}. I know it's tight. Actually, can we move the deadline to 2 hours earlier? I present at 3pm and I need the deck by 1pm. The deck we haven't started.`,
      ],
      zh: [
        `紧急！！{{task}}需要在{{deadline}}之前完成。我知道时间紧。要不提前两小时？我下午3点要汇报，1点就要PPT。对，就是那个还没开始做的PPT。`,
      ],
    },
    progress_check: {
      en: [
        `{{task}} update NOW. {{progress}}? Not enough. We need to pivot the entire approach. In the next 30 minutes. And also don't change anything. But make it completely different.`,
      ],
      zh: [
        `{{task}}马上给我进度！{{progress}}？不够。方案全部推翻重来。30分钟内。而且别改太多。但要完全不一样。`,
      ],
    },
  },
  'need-translation': {
    task_assignment: {
      en: [
        `Let's leverage our core competencies to synergize on {{task}}. We need to ideate at scale, align our north star metrics, and create a paradigm shift before {{deadline}}. Let's circle back and double-click on the deliverables.`,
      ],
      zh: [
        `我们要打通{{task}}的底层逻辑，形成全链路闭环打法。赋能一线团队，在{{deadline}}之前沉淀出可复用的方法论。记住，格局要打开，要有抓手。`,
      ],
    },
    progress_check: {
      en: [
        `How are we moving the needle on {{task}}? {{progress}} — but are we creating enough synergy? We need to be more disruptive. Let's take this offline and boil the ocean a bit.`,
      ],
      zh: [
        `{{task}}的飞轮转起来了吗？{{progress}}——但你的颗粒度够细吗？我们要更有穿透力。先把这个打法拉通对齐一下，然后倒推时间线。`,
      ],
    },
  },
  'verbose-nonsense': {
    task_assignment: {
      en: [
        `I wanted to take a moment to formally communicate that the task heretofore referred to as {{task}} has been designated for your purview. The temporal parameters, as discussed in our previous correspondence (see attachment 1, appendix B), indicate a completion target of {{deadline}}. Please acknowledge receipt of this assignment at your earliest convenience.`,
      ],
      zh: [
        `关于{{task}}一事，经过前期多轮内部讨论及跨部门对齐（详见附件一、附件二及附件二的补充说明），现正式知会你，该任务已划入你的工作范畴。完成时间参考{{deadline}}。请收到后回复确认并抄送全组。`,
      ],
    },
    progress_check: {
      en: [
        `Per my previous email (and the one before that, and the addendum to the one before that), I'm following up on {{task}}. {{progress}} is noted. Please provide a comprehensive written update, minimum 3 paragraphs, with attachments.`,
      ],
      zh: [
        `如我上封邮件（以及上上封邮件，以及上上封邮件的补充附件）所述，跟进一下{{task}}的进展。{{progress}}已知悉。请提供一份不少于三段的详细书面汇报，附件附上。`,
      ],
    },
  },
  'visionary-but-vague': {
    task_assignment: {
      en: [
        `I want {{task}} to feel... transformative. You know what I mean? Like, really blow people's minds. The deadline is {{deadline}}, but don't let that constrain your creativity. Think bigger. Much bigger. No, I can't be more specific. You'll know it when you see it.`,
      ],
      zh: [
        `{{task}}这个事，我要的是那种……颠覆性的感觉，你懂吧？让所有人都眼前一亮的那种。deadline是{{deadline}}，但别让时间限制你的想象力。格局再大一点。再大一点。具体怎么做？你做出来我就知道了。`,
      ],
    },
    progress_check: {
      en: [
        `How's {{task}} looking? {{progress}} — but is it... visionary enough? I want to feel something when I look at it. I can't tell you what that something is. But I'll know it when I feel it.`,
      ],
      zh: [
        `{{task}}做得怎么样了？{{progress}}——但是够不够有vision？我要的是看到它的时候能感受到什么的那种。什么感觉？我也说不清。但我看到就知道了。`,
      ],
    },
  },
};

const FOLLOW_UPS: Record<string, { en: string; zh: string }> = {
  micromanager: { en: 'They will follow up in 15 minutes. Then 30 minutes later. Then again.', zh: '15分钟后他会来问你进度。30分钟后再来。然后一直来。' },
  'passive-aggressive': { en: 'They\'ll send a Slack message saying "Just checking in :)"', zh: '他会发一条微信说"没什么事，就是关心一下进度 :）"' },
  'empty-promises': { en: 'They\'ll circle back to this "next quarter."', zh: '"下个季度一定"——然后这个季度又过去了。' },
  'flip-flopper': { en: 'They\'ll change their mind by tomorrow morning.', zh: '明天早上他就会改主意了。可能今晚就改。' },
  'always-following-up': { en: 'They\'ve already sent 3 follow-up messages while you were reading this.', zh: '你读这条的时候他已经又发了3条催你的消息了。' },
  'credit-collector': { en: 'Your work will appear in their next presentation. With their name on it.', zh: '你的成果会出现在他下次的PPT里。署名是他的。' },
  'delegator-supreme': { en: 'If it fails, it\'s your learning experience. If it succeeds, it\'s their leadership.', zh: '做砸了是你的成长机会。做好了是他的领导力。' },
  'meeting-for-everything': { en: 'They\'re already scheduling a meeting to discuss whether this meeting was necessary.', zh: '他已经在约下一个会来讨论这个会开得有没有必要了。' },
  'last-minute-chaos': { en: 'In 10 minutes they\'ll rewrite the entire brief. Again.', zh: '10分钟后他会把整个方案推翻重来。又一次。' },
  'need-translation': { en: 'Nobody in the meeting understood what they just said. Including them.', zh: '会议室里没人听懂他刚才说了什么。包括他自己。' },
  'verbose-nonsense': { en: 'They\'re already drafting a 2000-word follow-up email. With 5 attachments.', zh: '他已经在写一封2000字的跟进邮件了。带5个附件。' },
  'visionary-but-vague': { en: 'They\'ll reject 3 versions before saying "this isn\'t what I envisioned."', zh: '他会毙掉3个版本，然后说"这不是我想象中的感觉。"' },
};

const INSIGHTS: Record<string, { en: string; zh: string }> = {
  micromanager: { en: '"I need complete control over every aspect of this."', zh: '"我需要完全掌控这件事的每一个方面。"' },
  'passive-aggressive': { en: '"This is terrible and I blame you for it."', zh: '"这太糟糕了，但我不会直说，我会让你自己慢慢感受。"' },
  'empty-promises': { en: '"This will never actually happen."', zh: '"这件事永远不会真正发生的。"' },
  'flip-flopper': { en: '"I have no idea what I want."', zh: '"我根本不知道自己想要什么。"' },
  'always-following-up': { en: '"I have separation anxiety about tasks I delegate."', zh: '"交出去的活我比你还焦虑。"' },
  'credit-collector': { en: '"Your work is my achievement."', zh: '"你的努力就是我的功劳。"' },
  'delegator-supreme': { en: '"If I do nothing, nothing can be my fault."', zh: '"我什么都不做，就什么锅都不用背。"' },
  'meeting-for-everything': { en: '"I confuse being busy with being productive."', zh: '"我把忙碌和高效搞混了。"' },
  'last-minute-chaos': { en: '"Planning ahead would prevent the adrenaline I thrive on."', zh: '"提前规划就没有临时抱佛脚的刺激感了。"' },
  'need-translation': { en: '"I have no real insight, so I hide behind jargon."', zh: '"我其实没什么真知灼见，所以用黑话来掩饰。"' },
  'verbose-nonsense': { en: '"I measure the value of communication by its word count."', zh: '"我用字数来衡量沟通的价值。"' },
  'visionary-but-vague': { en: '"I want to feel like a genius without doing any actual thinking."', zh: '"我想当天才但不想动脑子。"' },
};

interface PlaygroundOutput {
  message: string;
  followUp: string;
  hiddenInsight: string;
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SHARED COMPONENTS
═══════════════════════════════════════════════════════════════════════════════ */

const ANNOYANCE_COLORS = {
  mild: '#60a5fa',
  moderate: '#f59e0b',
  high: '#f97316',
  'soul-crushing': '#ef4444',
};
const ANNOYANCE_WIDTH = { mild: '25%', moderate: '50%', high: '75%', 'soul-crushing': '100%' };
const ANNOYANCE_LABEL = { mild: 'MILD', moderate: 'MODERATE', high: 'HIGH', 'soul-crushing': 'SOUL-CRUSHING' };

function AnnoyanceBar({ level }: { level: BossData['annoyance'] }) {
  return (
    <div style={{ margin: '10px 0 6px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
        <span style={{ fontFamily: "'Jersey 10', monospace", fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>ANNOYANCE</span>
        <span style={{ fontFamily: "'Jersey 10', monospace", fontSize: '0.65rem', color: ANNOYANCE_COLORS[level], letterSpacing: '1px' }}>{ANNOYANCE_LABEL[level]}</span>
      </div>
      <div style={{ height: 4, background: 'var(--border-color)', borderRadius: 0 }}>
        <div style={{ height: '100%', width: ANNOYANCE_WIDTH[level], background: ANNOYANCE_COLORS[level], transition: 'width 300ms' }} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   GLOBAL PAGE STYLES
═══════════════════════════════════════════════════════════════════════════════ */

const PAGE_STYLES = `
  html { scroll-behavior: smooth; }

  /* Scroll offset for sticky nav */
  section[id] { scroll-margin-top: 64px; }

  /* ── Pixel border buttons ── */
  .btn-pixel {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 10px 22px;
    font-family: 'Jersey 10', 'Pixelify Sans', monospace;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    cursor: pointer;
    text-decoration: none;
    border: 2px solid var(--text-primary);
    background: var(--bg-primary);
    color: var(--text-primary);
    box-shadow: 3px 3px 0 0 var(--text-primary);
    transition: transform 80ms ease, box-shadow 80ms ease;
    white-space: nowrap;
    position: relative;
    line-height: 1;
    min-height: 44px;
    box-sizing: border-box;
  }
  .btn-pixel:hover {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0 0 var(--text-primary);
  }
  .btn-pixel:active {
    transform: translate(3px, 3px);
    box-shadow: none;
  }
  .btn-pixel-gold {
    background: var(--accent-gold);
    border-color: var(--text-primary);
    color: var(--text-primary);
    box-shadow: 3px 3px 0 0 var(--text-primary);
  }
  .btn-pixel-outline {
    background: transparent;
  }
  html.dark .btn-pixel {
    border-color: var(--text-primary);
    box-shadow: 3px 3px 0 0 var(--text-primary);
  }

  /* ── Section layout ── */
  .page-section {
    padding: 80px 40px 96px;
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
  }

  /* ── Section title (Zen Dots / Ark Pixel for ZH) ── */
  .section-title {
    font-family: 'Zen Dots', sans-serif;
    font-size: clamp(1.4rem, 3.5vw, 2rem);
    font-weight: 400;
    color: var(--text-primary);
    text-align: center;
    margin-bottom: 10px;
    letter-spacing: 0;
    line-height: 1.2;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .section-title-zh {
    font-family: var(--font-pixel-cjk), sans-serif;
    font-size: clamp(1.28rem, 3.2vw, 1.92rem);
    line-height: 1.4;
  }
  .section-subtitle-zh {
    font-family: var(--font-pixel-cjk), sans-serif;
    font-size: clamp(0.72rem, 1.6vw, 1.04rem);
  }
  .btn-pixel-zh {
    font-family: var(--font-pixel-cjk), sans-serif !important;
    letter-spacing: 0 !important;
  }
  .section-subtitle {
    font-family: 'Jersey 20', 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(0.9rem, 2vw, 1.3rem);
    color: var(--text-secondary);
    text-align: center;
    margin-bottom: 48px;
    line-height: 1.5;
  }

  /* ── Boss cards grid ── */
  .boss-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2px;
    margin-top: 40px;
  }
  @media (max-width: 1200px) { .boss-grid { grid-template-columns: repeat(4, 1fr); } }
  @media (max-width: 900px)  { .boss-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 600px)  { .boss-grid { grid-template-columns: repeat(2, 1fr); } }

  .boss-card {
    display: block;
    text-decoration: none;
    background: var(--bg-card);
    border: 1px solid transparent;
    cursor: pointer;
    transition: border-color 150ms, transform 150ms;
    position: relative;
    overflow: hidden;
  }
  .boss-card:hover {
    border-color: var(--accent-gold);
    transform: translateY(-2px);
  }
  .boss-card-img-wrap {
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    position: relative;
    background: var(--bg-secondary);
  }
  .boss-card-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 200ms ease;
    display: block;
  }
  .boss-card:hover .boss-card-img-wrap img {
    transform: scale(1.04);
  }
  .boss-card-body {
    padding: 12px 14px 14px;
  }
  .boss-card-name {
    font-family: 'Zen Dots', sans-serif;
    font-size: clamp(0.6rem, 1.2vw, 0.85rem);
    font-weight: 400;
    color: var(--text-primary);
    margin: 0 0 4px;
    line-height: 1.3;
    letter-spacing: 0;
  }
  .boss-card-name-zh {
    font-family: var(--font-pixel-cjk), monospace;
    font-size: 16px;
    line-height: 1.6;
  }
  .boss-card-subtitle {
    font-family: 'Jersey 10', monospace;
    font-size: 0.7rem;
    color: var(--text-muted);
    margin-bottom: 8px;
    letter-spacing: 0.5px;
  }
  .boss-card-desc {
    font-family: 'Jersey 20', 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(0.72rem, 1.1vw, 0.82rem);
    color: var(--text-secondary);
    line-height: 1.5;
    margin: 8px 0 6px;
  }
  .boss-card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
    margin-top: 8px;
  }
  .boss-tag {
    font-family: 'Jersey 10', monospace;
    font-size: 0.6rem;
    letter-spacing: 0.5px;
    padding: 2px 7px;
    border: 1px solid var(--border-color);
    color: var(--text-muted);
    background: var(--bg-secondary);
    transition: border-color 150ms, color 150ms;
    text-transform: uppercase;
  }
  .boss-card:hover .boss-tag {
    border-color: var(--accent-gold);
    color: var(--accent-gold);
  }
  .boss-card-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 8px 14px;
    background: var(--text-primary);
    color: var(--bg-primary);
    font-family: 'Jersey 10', monospace;
    font-size: 0.7rem;
    letter-spacing: 1px;
    text-align: center;
    transform: translateY(100%);
    transition: transform 150ms ease;
  }
  .boss-card:hover .boss-card-overlay {
    transform: translateY(0);
  }
  .boss-card-selected {
    border-color: var(--accent-gold) !important;
    box-shadow: 0 0 0 2px var(--accent-gold), 0 8px 24px var(--card-shadow);
    transform: translateY(-2px);
  }
  .boss-card-selected .boss-card-overlay {
    transform: translateY(0);
    background: var(--accent-gold);
  }

  /* ── Filter row ── */
  .filter-row {
    display: flex;
    gap: 2px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 8px;
  }
  .filter-btn {
    font-family: 'Jersey 10', monospace;
    font-size: 0.8rem;
    letter-spacing: 1px;
    padding: 7px 18px;
    border: 1px solid var(--border-color);
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 100ms;
    text-transform: uppercase;
  }
  .filter-btn:hover { border-color: var(--text-primary); color: var(--text-primary); }
  .filter-btn.active {
    background: var(--text-primary);
    color: var(--bg-primary);
    border-color: var(--text-primary);
  }

  /* ── Section divider ── */
  .section-divider {
    width: 100%;
    height: 1px;
    background: var(--border-color);
    margin: 0;
  }

  /* ── Playground ── */
  .pg-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    margin-top: 40px;
  }
  @media (max-width: 768px) { .pg-layout { grid-template-columns: 1fr; } }
  .pg-panel {
    border: 1px solid var(--border-color);
    padding: 28px;
    background: var(--bg-card);
  }
  .pg-panel-title {
    font-family: 'Jersey 10', monospace;
    font-size: 0.82rem;
    font-weight: 400;
    color: var(--text-primary);
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--accent-gold);
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
  .pg-group { margin-bottom: 16px; }
  .pg-label {
    display: block;
    font-family: 'Jersey 10', monospace;
    font-size: 0.78rem;
    color: var(--text-secondary);
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .pg-input, .pg-select, .pg-textarea {
    width: 100%;
    padding: 9px 12px;
    border: 1px solid var(--border-color);
    background: var(--bg-secondary);
    color: var(--text-primary);
    font-family: 'Jersey 20', sans-serif;
    font-size: 0.95rem;
    box-sizing: border-box;
    outline: none;
    transition: border-color 100ms;
  }
  .pg-input:focus, .pg-select:focus, .pg-textarea:focus { border-color: var(--accent-gold); }
  .pg-input:hover, .pg-select:hover, .pg-textarea:hover { border-color: var(--text-secondary); }
  .pg-textarea { min-height: 80px; resize: vertical; }
  .pg-select option { background: var(--bg-primary); }
  .pg-btn-row { display: flex; gap: 2px; margin-top: 20px; }
  .pg-btn {
    flex: 1;
    padding: 12px 8px;
    border: 2px solid var(--text-primary);
    font-family: 'Jersey 10', monospace;
    font-size: 0.85rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 80ms, box-shadow 80ms;
    white-space: nowrap;
    box-shadow: 2px 2px 0 var(--text-primary);
  }
  .pg-btn:hover { transform: translate(1px,1px); box-shadow: 1px 1px 0 var(--text-primary); }
  .pg-btn:active { transform: translate(2px,2px); box-shadow: none; }
  .pg-btn-primary { background: var(--text-primary); color: var(--bg-primary); }
  .pg-btn-primary:disabled { opacity: 0.4; cursor: not-allowed; transform: none; box-shadow: 2px 2px 0 var(--text-primary); }
  .pg-btn-secondary { background: transparent; color: var(--text-primary); }
  .pg-message-box {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    padding: 16px 18px;
    margin-bottom: 14px;
    font-family: 'Jersey 20', sans-serif;
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--text-primary);
    white-space: pre-wrap;
    word-break: break-word;
  }
  .pg-meta-label {
    font-family: 'Jersey 10', monospace;
    font-size: 0.78rem;
    color: var(--accent-gold);
    margin: 12px 0 5px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
  .pg-meta-box {
    background: rgba(200,146,42,0.06);
    border: 1px solid rgba(200,146,42,0.2);
    padding: 10px 14px;
    font-family: 'Jersey 20', sans-serif;
    font-size: 0.85rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }
  .pg-share-btn {
    width: 100%;
    margin-top: 14px;
    padding: 10px;
    border: 1px solid var(--border-color);
    background: transparent;
    color: var(--text-secondary);
    font-family: 'Jersey 10', monospace;
    font-size: 0.78rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 100ms;
  }
  .pg-share-btn:hover { border-color: var(--text-primary); color: var(--text-primary); }
  .pg-empty {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 200px;
    color: var(--text-muted);
    font-family: 'Jersey 10', monospace;
    font-size: 0.8rem;
    letter-spacing: 1px;
    text-align: center;
    border: 1px dashed var(--border-color);
    padding: 40px;
  }

  /* ── Playground ZH pixel font overrides ── */
  .pg-zh .filter-btn {
    font-family: var(--font-pixel-cjk), sans-serif !important;
    letter-spacing: 0 !important;
    text-transform: none !important;
  }
  .pg-zh .pg-message-box {
    font-family: var(--font-pixel-cjk), sans-serif;
  }
  .pg-zh .pg-meta-label {
    font-family: var(--font-pixel-cjk), sans-serif;
    letter-spacing: 0.5px;
  }
  .pg-zh .pg-meta-box {
    font-family: var(--font-pixel-cjk), sans-serif;
  }
  .pg-zh .pg-btn {
    font-family: var(--font-pixel-cjk), sans-serif !important;
    letter-spacing: 0 !important;
    text-transform: none !important;
  }

  /* ── About section ── */
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    margin-top: 40px;
  }
  @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; } }
  .about-card {
    border: 1px solid var(--border-color);
    background: var(--bg-card);
  }
  .about-card-header {
    padding: 14px 20px;
    border-bottom: 1px solid var(--border-color);
    background: var(--bg-secondary);
    font-family: 'Jersey 10', monospace;
    font-size: 0.65rem;
    letter-spacing: 2px;
    color: var(--text-primary);
    text-transform: uppercase;
  }
  .about-card-body {
    padding: 20px;
    font-family: 'Jersey 20', 'Plus Jakarta Sans', sans-serif;
    font-size: 0.92rem;
    line-height: 1.8;
    color: var(--text-secondary);
  }
  .about-card-body p { margin: 0 0 12px; }
  .about-card-body p:last-child { margin: 0; }
  .about-highlight { color: var(--accent-gold); font-weight: 600; }
  .about-list {
    list-style: none;
    padding: 0;
    margin: 12px 0 0;
  }
  .about-list li {
    padding: 8px 12px;
    margin-bottom: 4px;
    border-left: 2px solid var(--accent-gold);
    background: rgba(200,146,42,0.04);
    font-family: 'Jersey 20', sans-serif;
    font-size: 0.88rem;
    color: var(--text-secondary);
    transition: background 150ms;
  }
  .about-list li:hover { background: rgba(200,146,42,0.09); }

  /* ── Contribute section ── */
  .contrib-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    margin-top: 40px;
  }
  @media (max-width: 768px) { .contrib-layout { grid-template-columns: 1fr; } }
  .contrib-card {
    border: 1px solid var(--border-color);
    background: var(--bg-card);
  }
  .contrib-card-header {
    padding: 14px 20px;
    border-bottom: 1px solid var(--border-color);
    background: var(--bg-secondary);
    font-family: 'Jersey 10', monospace;
    font-size: 0.85rem;
    letter-spacing: 2px;
    color: var(--text-primary);
    text-transform: uppercase;
  }
  .contrib-card-body {
    padding: 20px;
    font-family: 'Jersey 20', sans-serif;
    font-size: 0.9rem;
    line-height: 1.8;
    color: var(--text-secondary);
  }
  .contrib-step-list {
    padding-left: 20px;
    margin: 0;
  }
  .contrib-step-list li {
    margin-bottom: 10px;
    font-size: 0.88rem;
  }
  .contrib-plain-list, .contrib-warning-list {
    list-style: none;
    padding: 0;
    margin: 12px 0 0;
  }
  .contrib-plain-list li {
    padding: 7px 12px;
    margin-bottom: 3px;
    border-left: 2px solid var(--accent-gold);
    background: rgba(200,146,42,0.04);
    font-size: 0.87rem;
  }
  .contrib-warning-list li {
    padding: 7px 12px;
    margin-bottom: 3px;
    border-left: 2px solid #ef4444;
    background: rgba(239,68,68,0.04);
    font-size: 0.87rem;
  }
  .contrib-code {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    padding: 14px 16px;
    margin: 12px 0;
    font-family: 'Jersey 10', monospace;
    font-size: 0.85rem;
    overflow-x: auto;
    color: var(--text-secondary);
    line-height: 2;
    letter-spacing: 0.5px;
  }
  code {
    font-family: 'Jersey 10', monospace;
    font-size: 0.82rem;
    background: var(--bg-secondary);
    padding: 2px 6px;
    border: 1px solid var(--border-color);
    color: var(--accent-gold);
  }
  .contrib-cta {
    margin-top: 48px;
    padding: 32px;
    border: 2px solid var(--accent-gold);
    background: var(--bg-secondary);
    text-align: center;
  }
  .contrib-cta-title {
    font-family: 'Zen Dots', sans-serif;
    font-size: 1.2rem;
    color: var(--text-primary);
    margin-bottom: 20px;
    letter-spacing: 0;
  }
  .contrib-cta-buttons { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }

  /* ── Mobile adjustments ── */
  @media (max-width: 600px) {
    .page-section { padding: 60px 20px 72px; }
  }
`;

/* ═══════════════════════════════════════════════════════════════════════════════
   HERO SECTION
═══════════════════════════════════════════════════════════════════════════════ */

const HERO_STYLES = `
  .hero-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: var(--bg-primary);
    padding: 40px 40px 16px;
    box-sizing: border-box;
  }

  /* ── Title area ── */
  .hero-title-area {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100vw - 80px);
    max-width: 1360px;
    user-select: none;
  }

  .hero-title-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    width: 100%;
    line-height: 0.9;
  }

  .hero-title-text {
    font-family: 'Zen Dots', sans-serif;
    font-size: clamp(2.975rem, 9.35vw, 8.5rem);
    font-weight: 400;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    white-space: nowrap;
    line-height: 0.36;
  }

  .hero-title-row2 {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: -2vw;
  }

  .hero-title-row2 .hero-title-text {
    letter-spacing: 0.05em;
  }

  /* ── TV image ── */
  .hero-tv-container {
    flex-shrink: 0;
    display: grid;
    place-items: center;
    margin: 0 -3.45vw;
    z-index: 2;
  }
  .hero-tv-container > * {
    grid-area: 1 / 1;
  }

  /* Shadow layer: blurred darkened copy of the TV, always at default rotation.
     This simulates drop-shadow() but the shadow NEVER changes on hover
     because this element does not transition. */
  .hero-tv-shadow-img {
    width: clamp(186px, 26.08vw, 391px);
    height: auto;
    display: block;
    transform: rotate(6deg) translate(10px, 32px) translateY(-1vw);
    filter: blur(18px) brightness(0);
    opacity: 0.30;
    z-index: 1;
    pointer-events: none;
  }

  .hero-boss-img {
    width: clamp(186px, 26.08vw, 391px);
    height: auto;
    display: block;
    transition: transform 300ms ease;
    will-change: transform;
    transform: rotate(6deg) translateY(-1vw);
    z-index: 2;
  }
  .hero-boss-img:hover {
    transform: rotate(0deg) translateY(-1vw);
  }

  /* ── Content below title ── */
  .hero-below {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1360px;
  }

  .hero-subtitle {
    font-family: 'Jersey 20', 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(1rem, 2.2vw, 1.5rem);
    color: var(--text-secondary);
    text-align: center;
    margin-top: clamp(2.5rem, 4vw, 3.8rem);
    margin-bottom: 0.2rem;
    line-height: 1.4;
    letter-spacing: 0;
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero-subtitle-zh {
    font-family: var(--font-pixel-cjk), sans-serif;
    font-size: clamp(0.85rem, 1.8vw, 1.2rem);
  }

  .hero-cta-row {
    display: flex;
    gap: 10px;
    margin-top: 14px;
    margin-bottom: clamp(48px, 6vw, 80px);
    flex-wrap: wrap;
    justify-content: center;
    min-height: 48px;
    align-items: center;
  }

  @media (max-width: 768px) {
    .hero-wrapper { padding: 40px 20px 60px; }
    .hero-title-text { font-size: clamp(1.87rem, 8.5vw, 3.4rem); }
    .hero-boss-img,
    .hero-tv-shadow-img { width: clamp(97px, 24.3vw, 211px); }
    .hero-tv-container { margin: 0 -3.45vw; }
  }

  @media (max-width: 480px) {
    .hero-wrapper { padding: 32px 16px 28px; }
    .hero-title-text { font-size: clamp(1.53rem, 10.2vw, 2.55rem); }
    .hero-boss-img,
    .hero-tv-shadow-img { width: clamp(77px, 22.7vw, 146px); }
    .hero-cta-row { flex-direction: column; width: 100%; }
    .hero-cta-row .btn-pixel { justify-content: center; width: 100%; }
  }
`;

function HeroSection() {
  const { locale } = useLocale();
  const zh = locale === 'zh';

  return (
    <section id="home">
      <style>{HERO_STYLES}</style>
      <div className="hero-wrapper">
        {/* Title area: MY [TV] BOSS / SKILLS */}
        <div className="hero-title-area">
          <div className="hero-title-row">
            <span className="hero-title-text">MY</span>
            <div className="hero-tv-container">
              {/* Shadow: blurred dark copy at fixed rotation — never changes on hover */}
              <Image
                src={zh ? '/hero-boss-zh.png' : '/hero-boss-en.png'}
                alt=""
                width={280}
                height={280}
                className="hero-tv-shadow-img"
                priority
                unoptimized
                aria-hidden="true"
              />
              {/* Actual TV — rotates on hover */}
              <Image
                src={zh ? '/hero-boss-zh.png' : '/hero-boss-en.png'}
                alt={zh ? 'Boss Skills 电视机' : 'Boss Skills TV'}
                width={280}
                height={280}
                className="hero-boss-img"
                priority
                unoptimized
              />
            </div>
            <span className="hero-title-text">BOSS</span>
          </div>
          <div className="hero-title-row2">
            <span className="hero-title-text">SKILLS</span>
          </div>
        </div>

        {/* Subtitle + CTA */}
        <div className="hero-below">
          <p className={`hero-subtitle${zh ? ' hero-subtitle-zh' : ''}`}>
            {zh
              ? '你的老板没有下班，只是蒸馏成了你AI的skills'
              : 'A serious open-source framework for unserious bosses.'}
          </p>

          <div className="hero-cta-row">
            <a href="#playground" className={`btn-pixel btn-pixel-gold${zh ? ' btn-pixel-zh' : ''}`}>
              ▶ {zh ? '体验一下' : 'Try Playground'}
            </a>
            <a href="#get-started" className={`btn-pixel btn-pixel-outline${zh ? ' btn-pixel-zh' : ''}`}>
              {zh ? '一键部署' : 'Get Started'}
            </a>
            <a
              href="https://github.com/KongZhen/boss-skills"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-pixel btn-pixel-outline${zh ? ' btn-pixel-zh' : ''}`}
            >
              ★ {zh ? 'GitHub' : 'View on GitHub'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SKILLS SECTION
═══════════════════════════════════════════════════════════════════════════════ */

type FilterLevel = 'all' | 'soul-crushing' | 'high' | 'moderate' | 'mild';

function SkillsSection() {
  const { locale } = useLocale();
  const zh = locale === 'zh';
  const [filter, setFilter] = useState<FilterLevel>('all');
  const [selectedBoss, setSelectedBoss] = useState<string | null>('micromanager');
  const [setupTab, setSetupTab] = useState<'claude' | 'api'>('claude');

  const FILTER_LABELS: Record<FilterLevel, string> = zh
    ? { all: '全部', 'soul-crushing': '灵魂粉碎', high: '高度烦人', moderate: '适度', mild: '轻微' }
    : { all: 'ALL', 'soul-crushing': 'SOUL-CRUSHING', high: 'HIGH', moderate: 'MODERATE', mild: 'MILD' };

  const filtered = filter === 'all' ? BOSSES : BOSSES.filter(b => b.annoyance === filter);

  return (
    <section id="skills">
      <div className="section-divider" />
      <div className="page-section">
        <h2 className={`section-title${zh ? ' section-title-zh' : ''}`}>
          {zh ? '选你的老板' : 'Choose your boss'}
        </h2>
        <p className={`section-subtitle${zh ? ' section-subtitle-zh' : ''}`}>
          {zh
            ? '就像游戏选人界面，但选的是你的血压等级'
            : 'Like a character select screen, but for your stress levels'}
        </p>

        {/* Filter */}
        <div className="filter-row">
          {(['all', 'soul-crushing', 'high', 'moderate', 'mild'] as FilterLevel[]).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`filter-btn${filter === f ? ' active' : ''}`}
            >
              {FILTER_LABELS[f]}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="boss-grid">
          {filtered.map(boss => {
            const name = zh ? boss.nameCn : boss.nameEn;
            const desc = zh ? boss.descCn : boss.descEn;
            const tags = zh ? boss.tagsCn : boss.tagsEn;
            const isSelected = selectedBoss === boss.slug;
            return (
              <div
                key={boss.slug}
                className={`boss-card${isSelected ? ' boss-card-selected' : ''}`}
                onClick={() => setSelectedBoss(isSelected ? null : boss.slug)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setSelectedBoss(isSelected ? null : boss.slug)}
              >
                <div className="boss-card-img-wrap">
                  <Image
                    src={`/bosses/${locale}/boss-${boss.slug}.jpg`}
                    alt={name}
                    width={300}
                    height={300}
                    loading="lazy"
                    unoptimized
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="boss-card-body">
                  <h3 className={`boss-card-name${zh ? ' boss-card-name-zh' : ''}`}>{name}</h3>
                  <AnnoyanceBar level={boss.annoyance} />
                  <p className="boss-card-desc">{desc}</p>
                  <div className="boss-card-tags">
                    {tags.map(tag => <span key={tag} className="boss-tag">{tag}</span>)}
                  </div>
                </div>
                <div className="boss-card-overlay">
                  {isSelected
                    ? (zh ? '收起 ▲' : 'Collapse ▲')
                    : (zh ? '选择这个老板 ►' : 'Select this boss ►')
                  }
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Boss Quick-Setup Panel ── */}
        {selectedBoss && (() => {
          const boss = BOSSES.find(b => b.slug === selectedBoss);
          if (!boss) return null;
          const name = zh ? boss.nameCn : boss.nameEn;
          const yamlConfig = `# ${name}\n# Add to Claude Desktop → Settings → Skills\n\nskills:\n  - name: boss-${boss.slug}\n    source: github:KongZhen/boss-skills/skills/boss.${boss.slug}\n    enabled: true`;
          const apiCode = zh
            ? `import Anthropic from "@anthropic-ai/sdk";\nimport fs from "fs";\n\nconst client = new Anthropic();\n// 读取 Boss Skill 的 Markdown 文件\nconst skill = fs.readFileSync(\n  "skills/boss.${boss.slug}/SKILL.zh-CN.md", "utf-8"\n);\n\nconst response = await client.messages.create({\n  model: "claude-sonnet-4-20250514",\n  system: skill,\n  messages: [\n    { role: "user", content: "给我安排个任务" }\n  ]\n});`
            : `import Anthropic from "@anthropic-ai/sdk";\nimport fs from "fs";\n\nconst client = new Anthropic();\n// Load the Boss Skill markdown file\nconst skill = fs.readFileSync(\n  "skills/boss.${boss.slug}/SKILL.en.md", "utf-8"\n);\n\nconst response = await client.messages.create({\n  model: "claude-sonnet-4-20250514",\n  system: skill,\n  messages: [\n    { role: "user", content: "Assign me a task" }\n  ]\n});`;
          return (
            <div className="boss-setup-panel" id="boss-setup">
              <style>{`
                .boss-setup-panel {
                  margin-top: 40px;
                  border: 2px solid var(--text-primary);
                  background: var(--bg-primary);
                  padding: 0;
                  box-shadow: 6px 6px 0 0 var(--text-primary);
                  animation: panelSlideIn 300ms ease;
                }
                @keyframes panelSlideIn {
                  from { opacity: 0; transform: translateY(16px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                .setup-header {
                  display: flex;
                  align-items: center;
                  gap: 16px;
                  padding: 24px 28px;
                  border-bottom: 2px solid var(--border-color);
                }
                .setup-header-info { flex: 1; }
                .setup-header-name {
                  font-family: var(--font-pixel);
                  font-size: 1.1rem;
                  text-transform: uppercase;
                  letter-spacing: 1px;
                  color: var(--text-primary);
                  margin-bottom: 4px;
                }
                .setup-header-quote {
                  font-family: var(--font-body);
                  font-size: 0.85rem;
                  color: var(--text-muted);
                  font-style: italic;
                  line-height: 1.4;
                }
                .setup-tabs {
                  display: flex;
                  gap: 0;
                  border-bottom: 2px solid var(--border-color);
                }
                .setup-tab {
                  font-family: 'Jersey 10', monospace;
                  font-size: 0.85rem;
                  letter-spacing: 1px;
                  text-transform: uppercase;
                  padding: 12px 28px;
                  border: none;
                  border-right: 1px solid var(--border-color);
                  background: transparent;
                  color: var(--text-secondary);
                  cursor: pointer;
                  transition: all 100ms;
                }
                .setup-tab:last-child { border-right: none; }
                .setup-tab.active {
                  background: var(--accent-gold);
                  color: var(--bg-primary);
                }
                .setup-tab:hover:not(.active) {
                  background: var(--bg-secondary);
                  color: var(--text-primary);
                }
                .setup-body { padding: 24px 28px; }
                .setup-step {
                  display: flex;
                  gap: 14px;
                  margin-bottom: 20px;
                  align-items: flex-start;
                }
                .setup-step-num {
                  font-family: 'Jersey 20', monospace;
                  font-size: 1.5rem;
                  color: var(--accent-gold);
                  line-height: 1;
                  flex-shrink: 0;
                  width: 28px;
                  text-align: center;
                }
                .setup-step-text {
                  font-family: var(--font-body);
                  font-size: 0.9rem;
                  color: var(--text-secondary);
                  line-height: 1.5;
                }
                .setup-code-block {
                  background: #1a1a2e;
                  color: #e0e0e0;
                  padding: 16px 20px;
                  font-family: 'Fira Code', 'SF Mono', monospace;
                  font-size: 0.82rem;
                  line-height: 1.6;
                  border: 1px solid rgba(255,255,255,0.08);
                  overflow-x: auto;
                  white-space: pre;
                  position: relative;
                  margin: 10px 0;
                }
                .setup-copy-btn {
                  position: absolute;
                  top: 8px; right: 8px;
                  font-family: var(--font-pixel);
                  font-size: 0.75rem;
                  padding: 4px 10px;
                  background: var(--accent-gold);
                  color: #fff;
                  border: none;
                  cursor: pointer;
                  letter-spacing: 0.5px;
                  text-transform: uppercase;
                }
                .setup-copy-btn:hover { opacity: 0.85; }
                .setup-actions {
                  display: flex;
                  gap: 10px;
                  padding: 20px 28px;
                  border-top: 2px solid var(--border-color);
                  flex-wrap: wrap;
                }
                @media (max-width: 600px) {
                  .setup-tab { padding: 10px 16px; font-size: 0.75rem; }
                  .setup-body { padding: 20px 16px; }
                  .setup-actions { padding: 16px; }
                }
              `}</style>

              <div className="setup-header">
                <Image
                  src={`/bosses/${locale}/boss-${boss.slug}.jpg`}
                  alt={name}
                  width={64}
                  height={64}
                  unoptimized
                  style={{ width: 64, height: 64, objectFit: 'cover', border: '2px solid var(--text-primary)' }}
                />
                <div className="setup-header-info">
                  <div className={`setup-header-name${zh ? ' boss-card-name-zh' : ''}`}>{name}</div>
                  <div className="setup-header-quote">
                    &ldquo;{zh ? boss.quoteCn : boss.quoteEn}&rdquo;
                  </div>
                </div>
              </div>

              {/* Protocol tabs */}
              <div className="setup-tabs">
                <button
                  className={`setup-tab${setupTab === 'claude' ? ' active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setSetupTab('claude'); }}
                >
                  {zh ? 'Claude Desktop' : 'Claude Desktop'}
                </button>
                <button
                  className={`setup-tab${setupTab === 'api' ? ' active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setSetupTab('api'); }}
                >
                  {zh ? 'API / 代码集成' : 'API / Code'}
                </button>
              </div>

              <div className="setup-body">
                {setupTab === 'claude' ? (
                  <>
                    <div className="setup-step">
                      <span className="setup-step-num">1</span>
                      <div className="setup-step-text">
                        {zh
                          ? <>去 <a href="https://claude.ai/download" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)' }}>claude.ai/download</a> 下载 Claude Desktop</>
                          : <>Download Claude Desktop from <a href="https://claude.ai/download" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)' }}>claude.ai/download</a></>
                        }
                      </div>
                    </div>
                    <div className="setup-step">
                      <span className="setup-step-num">2</span>
                      <div className="setup-step-text">
                        {zh
                          ? '打开设置 → Skills，粘贴下方配置：'
                          : 'Open Settings → Skills, paste the config below:'}
                        <div className="setup-code-block">
                          <button
                            className="setup-copy-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigator.clipboard.writeText(yamlConfig);
                              const btn = e.currentTarget;
                              btn.textContent = zh ? '已复制 ✓' : 'Copied ✓';
                              setTimeout(() => { btn.textContent = zh ? '复制' : 'Copy'; }, 2000);
                            }}
                          >
                            {zh ? '复制' : 'Copy'}
                          </button>
                          {yamlConfig}
                        </div>
                      </div>
                    </div>
                    <div className="setup-step">
                      <span className="setup-step-num">3</span>
                      <div className="setup-step-text">
                        {zh
                          ? '开始对话，你的 AI 老板已上线。'
                          : 'Start chatting — your AI boss is ready to annoy.'}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="setup-step">
                      <span className="setup-step-num">1</span>
                      <div className="setup-step-text">
                        {zh
                          ? '克隆仓库并安装依赖：'
                          : 'Clone the repo and install dependencies:'}
                        <div className="setup-code-block">
                          <button
                            className="setup-copy-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigator.clipboard.writeText('git clone https://github.com/KongZhen/boss-skills.git\nnpm install @anthropic-ai/sdk');
                              const btn = e.currentTarget;
                              btn.textContent = zh ? '已复制 ✓' : 'Copied ✓';
                              setTimeout(() => { btn.textContent = zh ? '复制' : 'Copy'; }, 2000);
                            }}
                          >
                            {zh ? '复制' : 'Copy'}
                          </button>
{`git clone https://github.com/KongZhen/boss-skills.git
npm install @anthropic-ai/sdk`}
                        </div>
                      </div>
                    </div>
                    <div className="setup-step">
                      <span className="setup-step-num">2</span>
                      <div className="setup-step-text">
                        {zh
                          ? '读取 Skill Markdown 作为 system prompt，传给任意 LLM API：'
                          : 'Load the Skill Markdown as a system prompt for any LLM API:'}
                        <div className="setup-code-block">
                          <button
                            className="setup-copy-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigator.clipboard.writeText(apiCode);
                              const btn = e.currentTarget;
                              btn.textContent = zh ? '已复制 ✓' : 'Copied ✓';
                              setTimeout(() => { btn.textContent = zh ? '复制' : 'Copy'; }, 2000);
                            }}
                          >
                            {zh ? '复制' : 'Copy'}
                          </button>
                          {apiCode}
                        </div>
                      </div>
                    </div>
                    <div className="setup-step">
                      <span className="setup-step-num">3</span>
                      <div className="setup-step-text">
                        {zh
                          ? 'Skill 文件是纯 Markdown，兼容 Claude、OpenAI、Gemini 等任何 LLM。'
                          : 'Skill files are pure Markdown — compatible with Claude, OpenAI, Gemini, and any LLM.'}
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="setup-actions">
                <a
                  href={`#playground`}
                  className={`btn-pixel btn-pixel-gold${zh ? ' btn-pixel-zh' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  ▶ {zh ? '先试试看' : 'Try in Playground'}
                </a>
                <a
                  href={`/skills/${boss.slug}`}
                  className={`btn-pixel btn-pixel-outline${zh ? ' btn-pixel-zh' : ''}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {zh ? '查看完整技能 →' : 'View Full Skill →'}
                </a>
                <button
                  className={`btn-pixel btn-pixel-outline${zh ? ' btn-pixel-zh' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedBoss(null);
                  }}
                >
                  {zh ? '关闭' : 'Close'}
                </button>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   GET STARTED SECTION
═══════════════════════════════════════════════════════════════════════════════ */

function GetStartedSection() {
  const { locale } = useLocale();
  const zh = locale === 'zh';
  const [copied, setCopied] = useState(false);
  const [expandOther, setExpandOther] = useState(false);

  const command = 'npx boss-skills install boss.micromanager';

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="get-started">
      <div className="section-divider" />
      <div className="page-section">
        <h2 className={`section-title${zh ? ' section-title-zh' : ''}`}>
          {zh ? '一键部署' : 'Get Started'}
        </h2>
        <p className={`section-subtitle${zh ? ' section-subtitle-zh' : ''}`}>
          {zh ? '两步搞定，支持所有主流AI工具' : 'Two steps. Any AI tool.'}
        </p>

        <style>{`
          .get-started-steps {
            display: grid;
            gap: 40px;
            margin-top: 40px;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }

          .get-started-step {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .step-number {
            font-family: 'Jersey 20', monospace;
            font-size: 2rem;
            color: var(--accent-gold);
            line-height: 1;
          }

          .step-title {
            font-family: 'Jersey 10', monospace;
            font-size: 1.1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--text-primary);
            margin-bottom: 8px;
          }

          .step-title-zh {
            font-family: var(--font-pixel-cjk), sans-serif;
            text-transform: none;
            letter-spacing: 0;
            font-size: 1rem;
          }

          .command-block {
            display: flex;
            align-items: center;
            gap: 0;
            background: var(--bg-card);
            border: 2px solid var(--border-color);
            overflow: hidden;
            box-shadow: 4px 4px 0 0 var(--text-primary);
          }

          .command-code {
            flex: 1;
            font-family: 'Fira Code', 'SF Mono', monospace;
            font-size: 0.9rem;
            color: var(--text-primary);
            padding: 16px 20px;
            overflow-x: auto;
            white-space: nowrap;
            background: #1a1a2e;
            color: #e0e0e0;
          }

          .command-copy-btn {
            font-family: 'Jersey 10', monospace;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 16px 20px;
            background: var(--accent-gold);
            color: var(--bg-primary);
            border: none;
            cursor: pointer;
            font-weight: bold;
            white-space: nowrap;
            transition: all 100ms;
          }

          .command-copy-btn:hover {
            opacity: 0.85;
          }

          .command-copy-btn.copied {
            background: #4caf50;
          }

          .supported-tools {
            font-size: 0.85rem;
            color: var(--text-secondary);
            margin-top: 12px;
            line-height: 1.6;
          }

          .other-methods {
            margin-top: 16px;
            border: 2px solid var(--border-color);
            background: var(--bg-secondary);
          }

          .other-methods-header {
            padding: 16px 20px;
            font-family: 'Jersey 10', monospace;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--text-primary);
            background: var(--bg-card);
            border-bottom: 2px solid var(--border-color);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: all 100ms;
          }

          .other-methods-header:hover {
            background: var(--bg-secondary);
          }

          .expand-indicator {
            font-size: 1rem;
            transition: transform 200ms;
          }

          .expand-indicator.open {
            transform: rotate(180deg);
          }

          .other-methods-list {
            display: flex;
            flex-direction: column;
            gap: 0;
            padding: 0;
            max-height: 0;
            overflow: hidden;
            transition: max-height 200ms ease-out;
          }

          .other-methods-list.open {
            max-height: 600px;
            padding: 16px 20px;
          }

          .method-item {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding-bottom: 16px;
            border-bottom: 1px solid var(--border-color);
          }

          .method-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }

          .method-label {
            font-family: 'Jersey 10', monospace;
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: var(--text-muted);
          }

          .method-code {
            font-family: 'Fira Code', 'SF Mono', monospace;
            font-size: 0.8rem;
            color: #e0e0e0;
            background: #1a1a2e;
            padding: 12px 16px;
            border: 1px solid rgba(255,255,255,0.08);
            overflow-x: auto;
            white-space: pre-wrap;
            word-break: break-all;
          }

          .step-description {
            font-size: 0.95rem;
            color: var(--text-secondary);
            line-height: 1.6;
          }

          .step-description-zh {
            font-family: var(--font-pixel-cjk), sans-serif;
          }

          .step-link {
            display: inline-block;
            padding: 12px 20px;
            border: 2px solid var(--text-primary);
            background: transparent;
            color: var(--text-primary);
            text-decoration: none;
            font-family: 'Jersey 10', monospace;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 100ms;
            margin-top: 12px;
          }

          .step-link:hover {
            background: var(--text-primary);
            color: var(--bg-primary);
          }

          .step-link-zh {
            font-family: var(--font-pixel-cjk), sans-serif;
            text-transform: none;
            letter-spacing: 0;
          }

          .update-note {
            margin-top: 20px;
            padding: 16px 20px;
            background: var(--bg-secondary);
            border-left: 4px solid var(--accent-gold);
            font-size: 0.9rem;
            color: var(--text-secondary);
            line-height: 1.6;
          }

          .update-note-zh {
            font-family: var(--font-pixel-cjk), sans-serif;
          }

          @media (max-width: 600px) {
            .command-block {
              flex-direction: column;
            }

            .command-code {
              font-size: 0.8rem;
            }

            .command-copy-btn {
              width: 100%;
            }

            .get-started-steps {
              gap: 32px;
            }
          }
        `}</style>

        <div className="get-started-steps">
          {/* Step 1: Install */}
          <div className="get-started-step">
            <div className="step-number">1</div>
            <h3 className={`step-title${zh ? ' step-title-zh' : ''}`}>
              {zh ? '安装' : 'Install'}
            </h3>

            <div className="command-block">
              <div className="command-code">{command}</div>
              <button className="command-copy-btn" onClick={handleCopy}>
                {copied ? '✓' : 'COPY'}
              </button>
            </div>

            <div className="supported-tools">
              {zh
                ? '支持: Claude Code · OpenClaw · Cursor · Gemini CLI · Codex CLI'
                : 'Works with: Claude Code · OpenClaw · Cursor · Gemini CLI · Codex CLI'}
            </div>

            {/* Expandable other methods */}
            <div className="other-methods">
              <div
                className="other-methods-header"
                onClick={() => setExpandOther(!expandOther)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setExpandOther(!expandOther)}
              >
                <span>{zh ? '其他安装方式' : 'Other install methods'}</span>
                <span className={`expand-indicator${expandOther ? ' open' : ''}`}>▼</span>
              </div>
              <div className={`other-methods-list${expandOther ? ' open' : ''}`}>
                <div className="method-item">
                  <div className="method-label">OpenClaw</div>
                  <div className="method-code">{'cp -r skills/boss.micromanager ~/.openclaw/skills/'}</div>
                </div>
                <div className="method-item">
                  <div className="method-label">Claude Code Plugin</div>
                  <div className="method-code">claude plugin add boss-skills</div>
                </div>
                <div className="method-item">
                  <div className="method-label">{zh ? '手动安装 (通用)' : 'Manual Install (Generic)'}</div>
                  <div className="method-code">{'cp -r skills/boss.micromanager /path/to/<tool>/skills/'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Choose */}
          <div className="get-started-step">
            <div className="step-number">2</div>
            <h3 className={`step-title${zh ? ' step-title-zh' : ''}`}>
              {zh ? '选择你的老板' : 'Choose your boss'}
            </h3>
            <p className={`step-description${zh ? ' step-description-zh' : ''}`}>
              {zh
                ? '我们有12个不同类型的老板角色。找到最适合你的那个，或者全部安装。'
                : "We have 12 different boss personas. Find the one that fits your needs, or install them all."}
            </p>
            <a href="#skills" className={`step-link${zh ? ' step-link-zh' : ''}`}>
              → {zh ? '浏览技能库' : 'Browse Skills'}
            </a>
          </div>
        </div>

        {/* Update note */}
        <div className={`update-note${zh ? ' update-note-zh' : ''}`}>
          {zh
            ? '💡 提示: 运行 npx boss-skills update 来保持最新版本'
            : '💡 Tip: Run npx boss-skills update to stay current'}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   PLAYGROUND SECTION
═══════════════════════════════════════════════════════════════════════════════ */
function PlaygroundSection() {
  const { locale } = useLocale();
  const zh = locale === 'zh';

  const [bossType, setBossType] = useState('micromanager');
  const [output, setOutput] = useState<PlaygroundOutput | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const bossList = [
    { value: 'micromanager',        labelEn: 'Micromanager',           labelZh: '事无巨细型' },
    { value: 'passive-aggressive',  labelEn: 'Passive-Aggressive',     labelZh: '阴阳怪气型' },
    { value: 'empty-promises',      labelEn: 'Empty Promises',         labelZh: '画饼型' },
    { value: 'flip-flopper',        labelEn: 'Flip-Flopper',           labelZh: '反复横跳型' },
    { value: 'always-following-up', labelEn: 'Always Following Up',    labelZh: '夺命连环call型' },
    { value: 'credit-collector',    labelEn: 'Credit Collector',       labelZh: '抢功型' },
    { value: 'delegator-supreme',   labelEn: 'Delegator Supreme',      labelZh: '甩锅大师型' },
    { value: 'meeting-for-everything', labelEn: 'Meeting for Everything', labelZh: '开会狂魔型' },
    { value: 'last-minute-chaos',   labelEn: 'Last-Minute Chaos',      labelZh: 'Deadline杀手型' },
    { value: 'need-translation',    labelEn: 'Need Translation',       labelZh: '黑话型' },
    { value: 'verbose-nonsense',    labelEn: 'Verbose Nonsense',       labelZh: '长篇大论型' },
    { value: 'visionary-but-vague', labelEn: 'Visionary but Vague',    labelZh: '画大饼型' },
  ];

  const generate = (selectedBoss?: string) => {
    const boss = selectedBoss || bossType;
    setIsGenerating(true);
    setBossType(boss);

    setTimeout(() => {
      const templates = BOSS_TEMPLATES[boss];
      const modes = Object.keys(templates || {});
      const mode = modes.length > 0 ? modes[Math.floor(Math.random() * modes.length)] : 'task_assignment';
      const modeData = templates?.[mode];
      const list = modeData ? (zh ? modeData.zh : modeData.en) : null;

      if (!list || list.length === 0) {
        setOutput({
          message: zh ? '这个老板还没学会说话，要不你来教他？去 GitHub 贡献一个！' : "This boss hasn't learned to talk yet. Teach them on GitHub!",
          followUp: zh ? '换个老板试试' : 'Try a different boss',
          hiddenInsight: zh ? '去 GitHub 补上！' : 'Contribute on GitHub!',
        });
        setIsGenerating(false);
        return;
      }

      const tasks = zh
        ? ['周五下午上线新功能', '重构整个后端', '给客户做一个演示', '写一份季度报告', '修复线上紧急bug', '做一个竞品分析', '把首页设计改三版']
        : ['Deploy new feature on Friday', 'Refactor the entire backend', 'Prepare client demo', 'Write Q3 report', 'Fix critical production bug', 'Do a competitor analysis', 'Redesign the homepage'];
      const deadlines = zh
        ? ['今天下班前', '明天早上', '下周一', '两小时内', '昨天', '现在立刻马上', '等一下，半小时前']
        : ['End of day today', 'Tomorrow morning', 'Monday', 'In 2 hours', 'Yesterday', 'Right now', 'Actually, 30 minutes ago'];
      const progresses = zh
        ? ['刚开了个头', '做了一半', '差不多了', '还没开始', '在等审批', '被别的事卡住了', '做完了但你说要改']
        : ['Just started', 'Halfway done', 'Almost there', 'Haven\'t started', 'Waiting on approval', 'Blocked by another task', 'Done but you asked for changes'];

      const task = tasks[Math.floor(Math.random() * tasks.length)];
      const deadline = deadlines[Math.floor(Math.random() * deadlines.length)];
      const progress = progresses[Math.floor(Math.random() * progresses.length)];

      let message = list[Math.floor(Math.random() * list.length)];
      // Replace all occurrences of each placeholder
      message = message.split('{{task}}').join(task);
      message = message.split('{{progress}}').join(progress);
      message = message.split('{{deadline}}').join(deadline);

      const fu = FOLLOW_UPS[boss];
      const ins = INSIGHTS[boss];
      setOutput({
        message,
        followUp: fu ? (zh ? fu.zh : fu.en) : (zh ? '等着吧……' : 'Stay tuned...'),
        hiddenInsight: ins ? (zh ? ins.zh : ins.en) : '',
      });
      setIsGenerating(false);
    }, 500);
  };

  // Auto-generate on mount so the simulator shows content by default
  useEffect(() => {
    if (!output) {
      generate('micromanager');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShare = () => {
    if (!output) return;
    const bossName = bossList.find(b => b.value === bossType);
    const name = bossName ? (zh ? bossName.labelZh : bossName.labelEn) : bossType;
    const text = `[${name}]\n\n${output.message}\n\n${zh ? '翻译成人话：' : 'Translation: '}${output.hiddenInsight}\n\n— mybossskills.com`;
    navigator.clipboard.writeText(text);
  };

  return (
    <section id="playground">
      <div className="section-divider" />
      <div className={`page-section${zh ? ' pg-zh' : ''}`}>
        <h2 className={`section-title${zh ? ' section-title-zh' : ''}`}>
          {zh ? 'Boss 模拟器' : 'Boss Simulator'}
        </h2>
        <p className={`section-subtitle${zh ? ' section-subtitle-zh' : ''}`}>
          {zh
            ? '选个老板，一键感受社畜的窒息'
            : 'Pick a boss. One click. Instant suffering.'}
        </p>

        {/* Boss selector row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', justifyContent: 'center', marginBottom: 32 }}>
          {bossList.map(b => (
            <button
              key={b.value}
              onClick={() => generate(b.value)}
              className={`filter-btn ${bossType === b.value && output ? 'active' : ''}`}
              style={{ fontSize: '0.75rem', padding: '8px 14px' }}
            >
              {zh ? b.labelZh : b.labelEn}
            </button>
          ))}
        </div>

        {/* Output area */}
        {output ? (
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div className="pg-panel" style={{ marginBottom: 0 }}>
              {/* Boss header with avatar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                paddingBottom: 16,
                marginBottom: 16,
                borderBottom: '1px solid var(--accent-gold)',
              }}>
                <Image
                  src={`/bosses/${locale}/boss-${bossType}.jpg`}
                  alt={bossList.find(b => b.value === bossType)?.[zh ? 'labelZh' : 'labelEn'] || bossType}
                  width={48}
                  height={48}
                  loading="lazy"
                  unoptimized
                  style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 0, border: '2px solid var(--text-primary)' }}
                />
                <div>
                  <div style={{
                    fontFamily: zh ? "var(--font-pixel-cjk), monospace" : "'Zen Dots', sans-serif",
                    fontSize: zh ? '16px' : '0.85rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.3,
                  }}>
                    {zh ? bossList.find(b => b.value === bossType)?.labelZh : bossList.find(b => b.value === bossType)?.labelEn}
                  </div>
                  <div style={{
                    fontFamily: zh ? "var(--font-pixel-cjk), sans-serif" : "'Jersey 10', monospace",
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    letterSpacing: zh ? '0' : '1px',
                    textTransform: zh ? ('none' as const) : ('uppercase' as const),
                    marginTop: 2,
                  }}>
                    {zh ? '发话了' : 'says...'}
                  </div>
                </div>
              </div>

              {/* Message bubble */}
              <div className="pg-message-box" style={{ fontSize: '1.05rem', lineHeight: 1.8, borderLeft: '3px solid var(--accent-gold)' }}>
                {output.message}
              </div>

              {/* Follow-up prediction */}
              {output.followUp && (
                <>
                  <div className="pg-meta-label">{zh ? '接下来会发生什么' : 'WHAT HAPPENS NEXT'}</div>
                  <div className="pg-meta-box" style={{ fontSize: '0.9rem' }}>{output.followUp}</div>
                </>
              )}

              {/* Hidden insight */}
              {output.hiddenInsight && (
                <>
                  <div className="pg-meta-label">{zh ? '翻译成人话' : 'WHAT THEY ACTUALLY MEAN'}</div>
                  <div className="pg-meta-box">{output.hiddenInsight}</div>
                </>
              )}

              {/* Action buttons */}
              <div style={{ display: 'flex', gap: 4, marginTop: 20 }}>
                <button
                  className="pg-btn pg-btn-primary"
                  onClick={() => generate()}
                  style={{ flex: 2 }}
                >
                  {isGenerating ? '...' : (zh ? '再来一条' : 'ANOTHER ONE')}
                </button>
                <button
                  className="pg-btn pg-btn-secondary"
                  onClick={() => {
                    const r = bossList[Math.floor(Math.random() * bossList.length)];
                    generate(r.value);
                  }}
                  style={{ flex: 1 }}
                >
                  {zh ? '换一个' : 'RANDOM'}
                </button>
                <button className="pg-btn pg-btn-secondary" onClick={handleShare} style={{ flex: 1 }}>
                  {zh ? '复制' : 'COPY'}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '48px 20px' }}>
            <p style={{
              fontFamily: "'Jersey 20', sans-serif",
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              marginBottom: 24,
              lineHeight: 1.6,
            }}>
              {zh ? '点击上面任意一个老板，体验来自他们的亲切问候' : 'Click any boss above to experience their warm greeting'}
            </p>
            <button
              className={`btn-pixel btn-pixel-gold${zh ? ' btn-pixel-zh' : ''}`}
              style={{ fontSize: '1.2rem', padding: '14px 32px' }}
              onClick={() => {
                const r = bossList[Math.floor(Math.random() * bossList.length)];
                generate(r.value);
              }}
            >
              {zh ? '随便来一个' : 'Surprise Me'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   ABOUT SECTION
═══════════════════════════════════════════════════════════════════════════════ */

function AboutSection() {
  const { locale } = useLocale();
  const zh = locale === 'zh';

  return (
    <section id="about">
      <div className="section-divider" />
      <div className="page-section">
        <h2 className={`section-title${zh ? ' section-title-zh' : ''}`}>{zh ? '这是什么鬼？' : 'WTF is this?'}</h2>
        <p className={`section-subtitle${zh ? ' section-subtitle-zh' : ''}`}>
          {zh ? '用 AI 把职场的荒诞给你整明白' : 'Workplace absurdity, powered by AI'}
        </p>

        <div className="about-grid">
          {/* What & Why combined */}
          <div className="about-card">
            <div className="about-card-header">{zh ? '一句话说明' : 'THE PITCH'}</div>
            <div className="about-card-body">
              {zh ? (
                <>
                  <p><span className="about-highlight">Boss Skills</span> 是一个开源的「AI 老板模拟器」。我们把职场里那些让人血压飙升的老板原型，打包成了可以复用的 AI 技能包。</p>
                  <p>谁还没遇过<span className="about-highlight">那种老板</span>呢？与其继续忍，不如把他们做成 AI 自嘲一下。</p>
                  <p><span className="about-highlight">内容是段子，工程是认真的。</span></p>
                </>
              ) : (
                <>
                  <p><span className="about-highlight">Boss Skills</span> is an open-source AI boss persona library. We packaged the most annoying workplace boss archetypes into reusable AI skill packs.</p>
                  <p>Everyone has had <span className="about-highlight">That Boss</span>. We turned them into AI so you can laugh instead of cry.</p>
                  <p><span className="about-highlight">The humor is satirical. The engineering is dead serious.</span></p>
                </>
              )}
            </div>
          </div>

          {/* Engineering */}
          <div className="about-card">
            <div className="about-card-header">{zh ? '怎么造的' : 'HOW IT\'S BUILT'}</div>
            <div className="about-card-body">
              <ul className="about-list">
                {zh ? (
                  <>
                    <li><strong>Anthropic Skill 标准</strong> — 正经造的</li>
                    <li><strong>双语 EN / 中文</strong> — 不是机翻，是人话</li>
                    <li><strong>Schema 校验 + 全量测试</strong></li>
                    <li><strong>多平台兼容</strong> — Claude、OpenAI 等</li>
                    <li><strong>确定性输出</strong> — 不调 API，纯逻辑</li>
                    <li><strong>MIT 开源</strong> — 随便用</li>
                  </>
                ) : (
                  <>
                    <li><strong>Anthropic Skill Standard</strong> — Built to spec</li>
                    <li><strong>Bilingual EN / ZH</strong> — Native, not translated</li>
                    <li><strong>Schema-validated & fully tested</strong></li>
                    <li><strong>Multi-platform</strong> — Claude, OpenAI, etc.</li>
                    <li><strong>Deterministic</strong> — No API calls, pure logic</li>
                    <li><strong>MIT Licensed</strong> — Go wild</li>
                  </>
                )}
              </ul>
              <p style={{ marginTop: 16, fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                {zh
                  ? '所有角色均为虚构原型。幽默靠荒诞，不靠恶意。如有雷同纯属巧合。'
                  : 'All personas are fictional archetypes. Humor from absurdity, not cruelty. Any resemblance is purely coincidental.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function ContributeSection() {
  const { locale } = useLocale();
  const zh = locale === 'zh';

  return (
    <section id="contribute">
      <div className="section-divider" />
      <div className="page-section">
        <h2 className={`section-title${zh ? ' section-title-zh' : ''}`}>{zh ? '你也来整一个？' : 'Got a Boss We\'re Missing?'}</h2>
        <p className={`section-subtitle${zh ? ' section-subtitle-zh' : ''}`}>
          {zh
            ? '你那个奇葩老板我们还没收录？来，交出来。'
            : 'We know there are more terrible boss archetypes out there. Help us document them.'}
        </p>

        <div className="contrib-layout">
          {/* How It Works */}
          <div className="contrib-card">
            <div className="contrib-card-header">{zh ? '咋整？' : 'HOW IT WORKS'}</div>
            <div className="contrib-card-body">
              <p style={{ marginBottom: 12 }}>{zh ? '跟着这几步来：' : 'Follow these steps:'}</p>
              <ol className="contrib-step-list">
                {zh ? (
                  <>
                    <li><strong>Fork 仓库</strong> — <code>github.com/KongZhen/boss-skills</code></li>
                    <li><strong>创建目录：</strong><code>skills/boss.your-boss-name/</code></li>
                    <li><strong>编写 <code>skill.yaml</code></strong> — 元数据和模式</li>
                    <li><strong>编写角色：</strong><code>SKILL.en.md</code> 和 <code>SKILL.zh-CN.md</code></li>
                    <li><strong>添加示例：</strong><code>examples/</code> 目录</li>
                    <li><strong>提交 PR</strong> — 审核通过后合并</li>
                  </>
                ) : (
                  <>
                    <li><strong>Fork the repo</strong> — <code>github.com/KongZhen/boss-skills</code></li>
                    <li><strong>Create a directory:</strong> <code>skills/boss.your-boss-name/</code></li>
                    <li><strong>Write <code>skill.yaml</code></strong> — Metadata and modes</li>
                    <li><strong>Write personas:</strong> <code>SKILL.en.md</code> and <code>SKILL.zh-CN.md</code></li>
                    <li><strong>Add examples:</strong> <code>examples/</code> directory</li>
                    <li><strong>Submit a PR</strong> — We'll review and merge</li>
                  </>
                )}
              </ol>
            </div>
          </div>

          {/* Skill Structure */}
          <div className="contrib-card">
            <div className="contrib-card-header">{zh ? '文件结构' : 'SKILL STRUCTURE'}</div>
            <div className="contrib-card-body">
              <p style={{ marginBottom: 12 }}>{zh ? '每个技能遵循以下目录结构：' : 'Every skill follows this structure:'}</p>
              <pre className="contrib-code">{`skills/boss.your-boss/
├── skill.yaml
├── SKILL.en.md
├── SKILL.zh-CN.md
├── assistant.json
└── examples/
    ├── examples.en.md
    └── examples.zh-CN.md`}</pre>
            </div>
          </div>

          {/* Style Guide */}
          <div className="contrib-card">
            <div className="contrib-card-header">{zh ? '整活指南' : 'CONTENT STYLE GUIDE'}</div>
            <div className="contrib-card-body">
              <ul className="contrib-plain-list">
                {zh ? (
                  <>
                    <li><strong>吐槽行为，不是针对人</strong></li>
                    <li><strong>让人会心一笑，不是让人不舒服</strong></li>
                    <li><strong>定义一个核心妄想</strong> — 驱动这个老板所有迷惑行为的根源</li>
                    <li><strong>要有金句</strong> — 那种一听就想转发的</li>
                    <li><strong>中文要是人话</strong> — 不要翻译腔</li>
                    <li><strong>各模式风格统一</strong></li>
                  </>
                ) : (
                  <>
                    <li><strong>Satirize the behavior, not the person</strong></li>
                    <li><strong>Be recognizable but not mean</strong></li>
                    <li><strong>Define a core belief</strong> — One central delusion</li>
                    <li><strong>Include quotable lines</strong></li>
                    <li><strong>Native language quality</strong></li>
                    <li><strong>Consistency across modes</strong></li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* What We Don't Accept */}
          <div className="contrib-card">
            <div className="contrib-card-header">{zh ? '别整这些' : "WHAT WE DON'T ACCEPT"}</div>
            <div className="contrib-card-body">
              <ul className="contrib-warning-list">
                {zh ? (
                  <>
                    <li><strong>影射真人</strong></li>
                    <li><strong>歧视性内容</strong></li>
                    <li><strong>真正的职场霸凌</strong></li>
                    <li><strong>摆烂式投稿</strong></li>
                    <li><strong>违法或危险内容</strong></li>
                  </>
                ) : (
                  <>
                    <li><strong>Target real people</strong></li>
                    <li><strong>Include discriminatory content</strong></li>
                    <li><strong>Promote actual workplace harm</strong></li>
                    <li><strong>Low-effort meme submissions</strong></li>
                    <li><strong>Illegal or genuinely dangerous content</strong></li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="contrib-cta">
          <p className="contrib-cta-title">
            {zh ? '手痒了？来一个！' : 'Ready to Contribute?'}
          </p>
          <div className="contrib-cta-buttons">
            <a
              href="https://github.com/KongZhen/boss-skills"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-pixel btn-pixel-gold${zh ? ' btn-pixel-zh' : ''}`}
            >
              ★ {zh ? '去 GitHub 整活' : 'Contribute on GitHub'}
            </a>
            <a href="#skills" className={`btn-pixel btn-pixel-outline${zh ? ' btn-pixel-zh' : ''}`}>
              {zh ? '← 看看别人整的' : '← View Existing Skills'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   CREDITS FOOTER
═══════════════════════════════════════════════════════════════════════════════ */

function SiteFooter() {
  const { locale } = useLocale();
  const zh = locale === 'zh';

  const creditLinks = [
    { label: 'Next.js', href: 'https://nextjs.org' },
    { label: 'React', href: 'https://react.dev' },
    { label: 'Tailwind CSS', href: 'https://tailwindcss.com' },
    { label: 'Google Fonts', href: 'https://fonts.google.com' },
    { label: 'Ark Pixel Font', href: 'https://github.com/TakWolf/ark-pixel-font' },
    { label: 'Pixelarticons', href: 'https://pixelarticons.com' },
    { label: 'Cloudflare', href: 'https://pages.cloudflare.com' },
    { label: 'Anthropic', href: 'https://www.anthropic.com' },
  ];

  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      padding: '48px 40px 56px',
      maxWidth: 1440,
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box' as const,
      textAlign: 'center' as const,
    }}>
      {/* Credits label */}
      <div style={{
        fontFamily: "'Jersey 10', monospace",
        fontSize: '0.82rem',
        letterSpacing: '1.5px',
        textTransform: 'uppercase' as const,
        color: 'var(--text-muted)',
        marginBottom: 16,
      }}>
        {zh ? '开源致谢' : 'OPEN SOURCE CREDITS'}
      </div>

      {/* Credit links */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap' as const,
        gap: '6px 20px',
        justifyContent: 'center',
        fontFamily: "'Jersey 20', sans-serif",
        fontSize: '0.85rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.8,
        marginBottom: 24,
      }}>
        {creditLinks.map(link => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--border-color)',
          }}>{link.label}</a>
        ))}
      </div>

      {/* Branding + copyright */}
      <p style={{
        fontFamily: "'Jersey 20', sans-serif",
        fontSize: '0.88rem',
        color: 'var(--text-muted)',
        marginBottom: 10,
        lineHeight: 1.6,
      }}>
        <span style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>MY BOSS SKILLS</span>
        {' '}&copy; 2025 &mdash; {zh ? 'Made with mass suffering' : 'Made with mass suffering'}
      </p>

      {/* Links row */}
      <p style={{
        fontFamily: "'Jersey 20', sans-serif",
        fontSize: '0.82rem',
        color: 'var(--text-muted)',
        lineHeight: 1.8,
        marginBottom: 10,
      }}>
        <a href="https://github.com/KongZhen/boss-skills" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>GitHub</a>
        {' · '}
        <a href="#contribute" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contribute</a>
        {' · '}
        MIT License
      </p>

      {/* MIT + author */}
      <p style={{
        fontFamily: "'Jersey 20', sans-serif",
        fontSize: '0.8rem',
        color: 'var(--text-muted)',
        marginBottom: 12,
        lineHeight: 1.6,
      }}>
        {zh
          ? 'MIT License. 由 CyberKZ 和开源社区用爱发电。'
          : 'MIT License. Built with love by CyberKZ and the open-source community.'}
      </p>

      {/* Parody disclaimer */}
      <p style={{
        fontFamily: "'Jersey 20', sans-serif",
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        opacity: 0.6,
      }}>
        {zh
          ? '本项目纯属恶搞。如有雷同，纯属故意。'
          : 'This is a parody project. Any resemblance to your actual boss is entirely intentional.'}
      </p>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <>
      <style>{PAGE_STYLES}</style>
      <HeroSection />
      <SkillsSection />
      <GetStartedSection />
      <PlaygroundSection />
      <AboutSection />
      <ContributeSection />
      <SiteFooter />
    </>
  );
}
