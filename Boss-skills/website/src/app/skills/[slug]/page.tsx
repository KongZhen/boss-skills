import BossDetailContent from '@/components/BossDetailContent';
import Link from 'next/link';

interface BossDetail {
  slug: string;
  nameEn: string;
  nameCn: string;
  taglineEn: string;
  taglineCn: string;
  descriptionEn: string;
  descriptionCn: string;
  behaviors: string[];
  behaviorsCn: string[];
  typicalLines: string[];
  communicationModes: Array<{
    mode: string;
    modeCn?: string;
    description: string;
    descriptionCn?: string;
  }>;
  example: {
    input: string;
    inputCn?: string;
    output: string;
    outputCn?: string;
  };
}

const BOSS_DETAILS: Record<string, BossDetail> = {
  micromanager: {
    slug: 'micromanager',
    nameEn: 'Micromanager',
    nameCn: '事无巨细型',
    taglineEn: 'Monitors every keystroke, every email, every breath.',
    taglineCn: '监控每一次按键，每一封邮件，每一次呼吸。',
    descriptionEn:
      'The Micromanager believes that no detail is too small to oversee. They practice active surveillance disguised as "transparency" and "alignment." Every task is an opportunity for 47-point feedback cycles. They don\'t trust the process; they trust only their own exhausting oversight.',
    descriptionCn:
      '微观管理者认为没有任何细节可以忽视。他们以"透明"和"对齐"的名义进行积极监督。每个任务都是一个进行47点反馈循环的机会。他们不相信流程，只相信自己令人筋疲力尽的监督。',
    behaviors: [
      'Requests status updates every 30 minutes minimum',
      'Reviews every email before it\'s sent',
      'Schedules back-to-back check-in meetings',
      'Asks "how are we progressing?" in multiple channels simultaneously',
      'Creates detailed spreadsheets to track individual keystrokes',
      'Interrupts work to ensure methodology alignment',
      'Requires percentage-based progress reports',
      'Never trusts completion until personally verified',
    ],
    behaviorsCn: [
      '最少每30分钟请求一次状态更新',
      '在发送任何电子邮件之前先审查',
      '安排背靠背的检查会议',
      '同时在多个渠道询问"进度如何"',
      '创建详细的电子表格来追踪个人按键',
      '中断工作以确保方法论对齐',
      '需要基于百分比的进度报告',
      '在亲自验证之前永远不会相信任务完成',
    ],
    typicalLines: [
      '"I\'m going to need a more granular breakdown of that timeline."',
      '"Can you send me a 15-minute sync just to align on alignment?"',
      '"I saw you took a 10-minute break. Everything okay?"',
      '"Actually, let\'s schedule a meeting to discuss this Slack message."',
      '"I\'ve prepared 23 follow-up questions for your status update."',
      '"Why didn\'t I see a notification when you started that task?"',
    ],
    communicationModes: [
      {
        mode: 'Task Assignment',
        modeCn: '任务分配',
        description: 'Comes with 8 attachments, 3 follow-up meetings, and a mandatory daily standup',
        descriptionCn: '附带8个附件、3次后续会议和一个强制性的每日站会',
      },
      {
        mode: 'Progress Check',
        modeCn: '进度检查',
        description: 'Expects spreadsheet, verbal explanation, written summary, and live screen share',
        descriptionCn: '期望电子表格、口头解释、书面总结和实时屏幕共享',
      },
      {
        mode: 'Review',
        modeCn: '审查',
        description: 'Line-by-line feedback with requests for revisions on previously approved sections',
        descriptionCn: '逐行反馈，并要求修改之前已批准的部分',
      },
      {
        mode: 'Meeting',
        modeCn: '会议',
        description: 'A 30-minute meeting about a 2-minute topic with 47 rabbit holes',
        descriptionCn: '为一个2分钟话题开的30分钟会议，带47个跑题讨论',
      },
      {
        mode: 'Escalation',
        modeCn: '升级',
        description: 'Hourly check-ins, daily standups, and a "war room" with all stakeholders',
        descriptionCn: '每小时签到、每日站会，以及一个包含所有利益相关者的"作战室"',
      },
    ],
    example: {
      input: 'Task: Build new dashboard. Progress: Started architecture. Deadline: 2 weeks.',
      inputCn: '任务：构建新仪表板。进度：开始架构设计。截止日期：2周。',
      output:
        'I appreciate the update. A few things: (1) Can you break down the architecture into subtasks? (2) When you say "started," do you have a percentage? (3) I\'d like a daily sync at 9 AM to review your decisions. (4) Can you send me a shared Google Doc of your approach before you start coding? (5) I\'ll probably pop into your calendar for a few 15-minute check-ins. (6) Let\'s define what "complete" means for each subtask. (7) Can you CC me on all architecture decisions? (8) I\'ve set up a spreadsheet to track your hourly progress. (9) Let\'s sync again in 30 minutes to ensure we\'re aligned on the definition of "alignment." Okay?',
      outputCn:
        '感谢更新。几件事：(1) 能把架构拆分成子任务吗？(2) 你说"开始了"，有百分比吗？(3) 我想每天早上9点同步一下你的决策。(4) 开始编码前能发给我一个共享的Google Doc吗？(5) 我可能会在你的日历上安排几次15分钟的签到。(6) 让我们定义每个子任务的"完成"标准。(7) 所有架构决策都抄送我。(8) 我已经建了一个电子表格来追踪你的每小时进度。(9) 30分钟后我们再同步一下，确保我们对"对齐"的定义保持一致。好吗？',
    },
  },
  'passive-aggressive': {
    slug: 'passive-aggressive',
    nameEn: 'Passive-Aggressive',
    nameCn: '阴阳怪气型',
    taglineEn: 'Never says what they mean. Means everything they say.',
    taglineCn: '从不直说。却句句有意。',
    descriptionEn:
      'The Passive-Aggressive Boss speaks in subtext and implication. Criticism is always wrapped in a smile and a "but." They use words like "interesting," "bold," and "ambitious" as weapons. Confrontation? Unthinkable. But the message lands like a punch wrapped in velvet.',
    descriptionCn:
      '被动攻击性老板用隐喻和暗示说话。批评总是用微笑和"但是"包装的。他们使用"有趣"、"大胆"和"雄心勃勃"等词作为武器。对抗？不可想象。但信息传递得像一拳裹在天鹅绒里。',
    behaviors: [
      'Uses "interesting" as a criticism in disguise',
      'Follows criticism with "I\'m not saying that\'s bad, but..."',
      'Compliments work while explaining everything it\'s missing',
      'Agrees publicly and undermines privately',
      'Schedules meetings to "discuss concerns" instead of stating them directly',
      'Uses silence as a weapon',
      'Copies others\' managers on emails where implicit blame lives',
      'Laughs at their own passive comments and expects agreement',
    ],
    behaviorsCn: [
      '使用"有趣"作为伪装的批评',
      '在批评后跟上"我没说那不好，但是..."',
      '赞美工作同时解释它缺少的一切',
      '公开同意，私下破坏',
      '安排会议来"讨论关切"，而不是直接说明',
      '使用沉默作为武器',
      '在隐含责备的电子邮件中抄送其他人的经理',
      '对自己的被动评论大笑，期望得到同意',
    ],
    typicalLines: [
      '"That\'s... interesting. Not what I expected, but interesting."',
      '"Bold approach. I admire your confidence, I really do."',
      '"I\'m not saying you\'re wrong, but I\'ve never seen it done that way before."',
      '"Well, if that works for you, then I guess... sure."',
      '"I just want to make sure you\'ve considered all the implications."',
      '"Oh, I saw your email. Very... thorough."',
    ],
    communicationModes: [
      {
        mode: 'Task Assignment',
        modeCn: '任务分配',
        description: 'Wraps assignments in doubt: "I\'m sure you can handle this... I hope."',
        descriptionCn: '用怀疑包装任务分配："我相信你能搞定……我希望如此。"',
      },
      {
        mode: 'Progress Check',
        modeCn: '进度检查',
        description: 'Asks loaded questions: "Is everything going as planned?" (Spoiler: it\'s not)',
        descriptionCn: '问诱导性问题："一切都按计划进行吗？"（剧透：并没有）',
      },
      {
        mode: 'Review',
        modeCn: '审查',
        description: 'Says it\'s "good" while listing 19 things to change',
        descriptionCn: '说"挺好的"，同时列出19项需要修改的内容',
      },
      {
        mode: 'Meeting',
        modeCn: '会议',
        description: 'Spends 45 minutes asking "why" for decisions already approved',
        descriptionCn: '花45分钟质问已经批准的决定"为什么"',
      },
      {
        mode: 'Escalation',
        modeCn: '升级',
        description: 'Formally documents all previous passive-aggressive comments with "concern"',
        descriptionCn: '正式记录所有之前的阴阳怪气评论，标注为"关切"',
      },
    ],
    example: {
      input: 'Proposed new testing framework.',
      inputCn: '提议使用新的测试框架。',
      output:
        'Oh, interesting choice. I appreciate the effort you put into this. I\'m sure it\'s... comprehensive. A few thoughts: (1) It\'s definitely different from what we usually do. (2) I didn\'t expect you to go this direction, but I\'m curious. (3) I hope the learning curve isn\'t too steep for the team. (4) It\'s bold, I\'ll give you that. (5) Have you considered what happens when something breaks? Just wondering. Anyway, let\'s schedule a meeting to discuss further.',
      outputCn:
        '哦，有趣的选择。我很感激你在这上面花的心思。我相信它……很全面。几点想法：(1) 这肯定跟我们平常做的不一样。(2) 没想到你会选这个方向，但我很好奇。(3) 希望团队的学习曲线不会太陡。(4) 够大胆的，这一点我承认。(5) 你有没有想过万一出问题了怎么办？只是随便问问。总之，我们安排个会讨论一下吧。',
    },
  },
  'empty-promises': {
    slug: 'empty-promises',
    nameEn: 'Empty Promises',
    nameCn: '画饼型',
    taglineEn: 'Tomorrow, next quarter, after the restructure...',
    taglineCn: '明天，下个季度，重组之后...',
    descriptionEn:
      'The Empty Promises Boss speaks in visions, not plans. Every conversation starts with "What if we could..." and ends with "We\'ll circle back to that." They promise promotions, time off, resources, flexibility—all scheduled for a mythical future that never arrives.',
    descriptionCn:
      '空洞承诺老板用愿景而非计划说话。每次对话都以"如果我们能..."开始，以"我们稍后再讨论"结束。他们承诺晋升、休假、资源、灵活性——所有这些都定在一个永不到来的神话般的未来。',
    behaviors: [
      'Promises things they have no authority to give',
      'Uses "we\'ll definitely do X in the next cycle" as a permanent stall tactic',
      'Forgets previous promises made to the same person',
      'Pivots to new initiatives before completing current ones',
      'Uses external blame: "Corporate won\'t let us," "The market isn\'t ready"',
      'Romanticizes future possibilities while neglecting current realities',
      'Schedules conversations about past promises for months away',
      'Treats all timelines as approximate and flexible',
    ],
    behaviorsCn: [
      '承诺他们无权提供的东西',
      '使用"我们在下一个周期肯定会做X"作为永久的拖延战术',
      '忘记向同一个人以前做过的承诺',
      '在完成当前项目前开始新项目',
      '使用外部指责："公司不允许"，"市场还没有准备好"',
      '对未来可能性进行浪漫化，同时忽视当前现实',
      '将关于过去承诺的谈话安排在数月后',
      '将所有时间表视为大约和灵活的',
    ],
    typicalLines: [
      '"We\'ll definitely revisit this in the next cycle."',
      '"After we get through this quarter, we can talk about that."',
      '"Once the restructure is done, everything\'s going to change."',
      '"I want to give you a raise, but the timing isn\'t right."',
      '"I see you becoming a senior in, like, 6 months. Definitely."',
      '"Let\'s circle back on that when things settle down."',
    ],
    communicationModes: [
      {
        mode: 'Task Assignment',
        modeCn: '任务分配',
        description: 'Frames it as temporary: "Just this quarter while we stabilize."',
        descriptionCn: '包装成临时性的："只是这个季度，等我们稳定下来就好了。"',
      },
      {
        mode: 'Progress Check',
        modeCn: '进度检查',
        description: 'Acknowledges delays but pivots to future opportunities',
        descriptionCn: '承认延迟，但话题转向未来机会',
      },
      {
        mode: 'Review',
        modeCn: '审查',
        description: 'Postpones feedback: "Let\'s discuss this when we have more time."',
        descriptionCn: '推迟反馈："等我们有更多时间再讨论。"',
      },
      {
        mode: 'Meeting',
        modeCn: '会议',
        description: 'Talks about what\'s coming next, not what\'s happening now',
        descriptionCn: '谈论下一步计划，而不是当前情况',
      },
      {
        mode: 'Escalation',
        modeCn: '升级',
        description: 'Promises immediate attention, then becomes unavailable',
        descriptionCn: '承诺立刻关注，然后失联',
      },
    ],
    example: {
      input: 'Asking about promised promotion timeline.',
      inputCn: '询问承诺的晋升时间表。',
      output:
        'Oh, right, yeah. So about that... things have been pretty chaotic in leadership, you know? But I\'m definitely thinking about it. In fact, I think once we get through this next restructure—probably in Q3—we can talk seriously about bumping you up. You\'d be a great fit for a senior role. Maybe even a lead. I just need to see how the org shapes up. But I\'m rooting for you! Let\'s touch base in like 6 months and reassess. Sound good?',
      outputCn:
        '哦对对，关于这件事……你知道管理层最近挺混乱的。但我绝对在考虑这件事。事实上，我觉得等这次重组完——大概Q3吧——我们就可以认真讨论给你升职了。你非常适合高级职位。甚至可能是负责人。我只需要看看组织架构怎么调整。但我支持你！我们大概6个月后再碰头评估一下。行吗？',
    },
  },
  'flip-flopper': {
    slug: 'flip-flopper',
    nameEn: 'Flip-Flopper',
    nameCn: '反复横跳型',
    taglineEn: 'Changed mind 5 times before your coffee cooled.',
    taglineCn: '在你咖啡冷掉前已经改变五次想法。',
    descriptionEn:
      'The Flip-Flopper operates in a state of perpetual indecision. They change direction with the wind—or more accurately, with whoever they just talked to. Decisions aren\'t made; they\'re temporarily agreed upon.',
    descriptionCn:
      '反复横跳者处于永久的优柔寡断状态。他们随风改变方向——更准确地说，和他们刚刚交谈的任何人。决定不是被做出的，而是被临时同意的。',
    behaviors: [
      'Changes decision 3-5 times per week',
      'Says "Actually, I was thinking..." to reverse previous calls',
      'Blames external factors for reversals: "The market changed our strategy"',
      'Expects you to implement changes as if they were always the plan',
      'Gets excited about new ideas and immediately pivots the entire project',
      'Uses "I had a thought" as justification for total strategy overhaul',
      'Holds meetings to "realign" on already-executed plans',
      'Acts surprised when you mention the previous direction',
    ],
    behaviorsCn: [
      '每周改变决定3-5次',
      '说"实际上，我在想..."来反转先前的决定',
      '将反转的责任归咎于外部因素："市场改变了我们的战略"',
      '期望你实施更改，就好像这些更改一直都是计划的一样',
      '对新想法感到兴奋，立即改变整个项目的方向',
      '使用"我有个想法"作为总战略改革的理由',
      '召开会议以"重新对齐"已执行的计划',
      '当你提及之前的方向时表现得很惊讶',
    ],
    typicalLines: [
      '"Actually, let\'s go back to the original approach."',
      '"I was thinking... what if we did the complete opposite?"',
      '"You know what? I talked to [person], and they made a great point."',
      '"We\'re pivoting. New direction effective immediately."',
      '"Wait, we agreed on what now? I thought we were doing X."',
      '"I have an idea that could change everything. Let\'s brainstorm."',
    ],
    communicationModes: [
      {
        mode: 'Task Assignment',
        modeCn: '任务分配',
        description: 'Will be revised at least twice before you finish the first part',
        descriptionCn: '在你完成第一部分之前至少会修改两次',
      },
      {
        mode: 'Progress Check',
        modeCn: '进度检查',
        description: 'Realizes they meant something completely different',
        descriptionCn: '意识到他们原本想的是完全不同的东西',
      },
      {
        mode: 'Review',
        modeCn: '审查',
        description: 'Says "Can we try a different approach?" after 80% completion',
        descriptionCn: '完成80%后说"我们能换个方法吗？"',
      },
      {
        mode: 'Meeting',
        modeCn: '会议',
        description: 'Leaves with a new direction that contradicts the previous meeting',
        descriptionCn: '会议结束后的新方向与上次会议完全矛盾',
      },
      {
        mode: 'Escalation',
        modeCn: '升级',
        description: 'Calls emergency pivot meeting, reverses previous emergency pivot',
        descriptionCn: '召开紧急转向会议，推翻上次紧急转向的决定',
      },
    ],
    example: {
      input: 'Building feature A per requirements from last week.',
      inputCn: '按照上周的需求构建功能A。',
      output:
        'Wait, we\'re still doing feature A? I was just thinking—what if we focused on feature B instead? It\'s actually more strategic. Yeah, I know we spent weeks planning feature A, but hear me out: feature B could be bigger. Let\'s pivot. Actually, wait—did I tell you to do feature A or feature B? I need you to stop what you\'re doing and we can realign. Or maybe we do both? Let me talk to the product team and get back to you. But yes, full speed ahead on A. Or B. I\'ll clarify by EOD.',
      outputCn:
        '等等，我们还在做功能A？我刚在想——如果我们改做功能B呢？其实更有战略意义。是，我知道我们花了几周规划功能A，但你听我说：功能B可能更大。我们转向吧。等等——我让你做的是A还是B？你先停下手头的工作，我们重新对齐。或者两个都做？我去找产品团队聊聊再回复你。但是，A全速推进。或者B。今天下班前我会确认的。',
    },
  },
  'always-following-up': {
    slug: 'always-following-up',
    nameEn: 'Always Following Up',
    nameCn: '夺命连环call型',
    taglineEn: 'Called twice. Texted three times. Emailed once. It\'s been 4 minutes.',
    taglineCn: '打了两遍电话。发了三条消息。发了一封邮件。才过了4分钟。',
    descriptionEn:
      'The Always-Calling Boss cannot wait. They interpret silence as insubordination. They call once, then immediately call again. They message, ping, email, and call in rapid succession. They believe "urgent" means "this very second."',
    descriptionCn:
      '总是打电话的老板无法等待。他们将沉默解释为不服从。他们打一次电话，然后立即再打一次。他们快速连续地发送信息、ping、电子邮件和电话。他们相信"紧急"意味着"这一秒钟"。',
    behaviors: [
      'Calls 5 times if you don\'t answer the first call',
      'Sends follow-up messages 30 seconds after the first',
      'Assumes no response = emergency',
      'Expects immediate answers to vague questions',
      'Uses "quick sync" to mean "right now"',
      'Creates urgency from routine tasks',
      'Gets anxious if you\'re unreachable for 1 hour',
      'Considers Slack reaction emojis as insufficient acknowledgment',
    ],
    behaviorsCn: [
      '如果你不接第一个电话就打5次',
      '在第一条消息后30秒发送后续消息',
      '假设没有回应=紧急情况',
      '期望对模糊问题立即回答',
      '使用"快速同步"来表示"现在就"',
      '从日常任务中创造紧迫性',
      '如果你一小时内无法联系就感到焦虑',
      '认为Slack反应表情符号是不充分的确认',
    ],
    typicalLines: [
      '"Quick sync on that thing we discussed?"',
      '"Where are you? I\'ve been trying to reach you for 5 minutes."',
      '"Call me ASAP. It\'s not an emergency, but call me now."',
      '"Why aren\'t you answering? Is everything okay?"',
      '"I need this done immediately. It can\'t wait."',
      '"We need to talk. I tried calling 3 times. Where were you?"',
    ],
    communicationModes: [
      {
        mode: 'Task Assignment',
        modeCn: '任务分配',
        description: 'Followed by 4 immediate follow-ups ensuring you understood',
        descriptionCn: '之后立刻跟4条消息确保你理解了',
      },
      {
        mode: 'Progress Check',
        modeCn: '进度检查',
        description: 'Multiple contact methods used simultaneously',
        descriptionCn: '同时使用多种联系方式',
      },
      {
        mode: 'Review',
        modeCn: '审查',
        description: 'Needs to discuss immediately, won\'t wait for email response',
        descriptionCn: '需要立刻讨论，不等邮件回复',
      },
      {
        mode: 'Meeting',
        modeCn: '会议',
        description: 'Scheduled as "urgent" even if it\'s routine',
        descriptionCn: '即使是常规事项也标记为"紧急"',
      },
      {
        mode: 'Escalation',
        modeCn: '升级',
        description: 'Rapid-fire calls, emails, and Slacks until you respond',
        descriptionCn: '电话、邮件、Slack连番轰炸直到你回应',
      },
    ],
    example: {
      input: 'Status update on project.',
      inputCn: '项目状态更新。',
      output:
        '[3 Slack messages in 2 minutes] [2 missed calls] [Email with subject "URGENT: Need update"] Hey, where are you? Call me back. I need to know where we stand on the project. It\'s important. Actually, let\'s just hop on a call. I\'m calling you now. Pick up.',
      outputCn:
        '[2分钟内3条Slack消息] [2个未接电话] [主题为"紧急：需要更新"的邮件] 嘿，你在哪？回我电话。我需要知道项目进展。很重要。算了，我们直接通话吧。我现在打给你。接电话。',
    },
  },
};

const ABBREVIATED_BOSSES = [
  'credit-collector',
  'delegator-supreme',
  'meeting-for-everything',
  'last-minute-chaos',
  'need-translation',
  'verbose-nonsense',
  'visionary-but-vague',
];

export function generateStaticParams() {
  const allSlugs = [
    ...Object.keys(BOSS_DETAILS),
    ...ABBREVIATED_BOSSES,
  ];
  return allSlugs.map(slug => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BossDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const boss = BOSS_DETAILS[slug];

  if (!boss && !ABBREVIATED_BOSSES.includes(slug)) {
    return (
      <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.5rem', letterSpacing: '2px', color: 'var(--text-primary)', marginBottom: '16px' }}>
            BOSS NOT FOUND
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', marginBottom: '24px' }}>
            This boss hasn&apos;t been documented yet.
          </p>
          <Link href="/skills" className="pixel-btn pixel-btn-primary" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.7rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
            ← Back to Skills
          </Link>
        </div>
      </div>
    );
  }

  const comingSoonName = !boss
    ? slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : undefined;

  return (
    <BossDetailContent
      boss={boss || null}
      isComingSoon={!boss}
      comingSoonName={comingSoonName}
    />
  );
}
