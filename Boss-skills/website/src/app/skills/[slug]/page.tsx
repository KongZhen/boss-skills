import Link from 'next/link';
import 'nes.css/css/nes.css';
import PixelButton from '@/components/PixelButton';

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
    description: string;
  }>;
  example: {
    input: string;
    output: string;
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
        description: 'Comes with 8 attachments, 3 follow-up meetings, and a mandatory daily standup',
      },
      {
        mode: 'Progress Check',
        description: 'Expects spreadsheet, verbal explanation, written summary, and live screen share',
      },
      {
        mode: 'Review',
        description: 'Line-by-line feedback with requests for revisions on previously approved sections',
      },
      {
        mode: 'Meeting',
        description: 'A 30-minute meeting about a 2-minute topic with 47 rabbit holes',
      },
      {
        mode: 'Escalation',
        description: 'Hourly check-ins, daily standups, and a "war room" with all stakeholders',
      },
    ],
    example: {
      input: 'Task: Build new dashboard. Progress: Started architecture. Deadline: 2 weeks.',
      output:
        'I appreciate the update. A few things: (1) Can you break down the architecture into subtasks? (2) When you say "started," do you have a percentage? (3) I\'d like a daily sync at 9 AM to review your decisions. (4) Can you send me a shared Google Doc of your approach before you start coding? (5) I\'ll probably pop into your calendar for a few 15-minute check-ins. (6) Let\'s define what "complete" means for each subtask. (7) Can you CC me on all architecture decisions? (8) I\'ve set up a spreadsheet to track your hourly progress. (9) Let\'s sync again in 30 minutes to ensure we\'re aligned on the definition of "alignment." Okay?',
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
        description: 'Wraps assignments in doubt: "I\'m sure you can handle this... I hope."',
      },
      {
        mode: 'Progress Check',
        description: 'Asks loaded questions: "Is everything going as planned?" (Spoiler: it\'s not)',
      },
      {
        mode: 'Review',
        description: 'Says it\'s "good" while listing 19 things to change',
      },
      {
        mode: 'Meeting',
        description: 'Spends 45 minutes asking "why" for decisions already approved',
      },
      {
        mode: 'Escalation',
        description: 'Formally documents all previous passive-aggressive comments with "concern"',
      },
    ],
    example: {
      input: 'Proposed new testing framework.',
      output:
        'Oh, interesting choice. I appreciate the effort you put into this. I\'m sure it\'s... comprehensive. A few thoughts: (1) It\'s definitely different from what we usually do. (2) I didn\'t expect you to go this direction, but I\'m curious. (3) I hope the learning curve isn\'t too steep for the team. (4) It\'s bold, I\'ll give you that. (5) Have you considered what happens when something breaks? Just wondering. Anyway, let\'s schedule a meeting to discuss further.',
    },
  },
  'empty-promises': {
    slug: 'empty-promises',
    nameEn: 'Empty Promises',
    nameCn: '画饼型',
    taglineEn: 'Tomorrow, next quarter, after the restructure...',
    taglineCn: '明天，下个季度，重组之后...',
    descriptionEn:
      'The Empty Promises Boss speaks in visions, not plans. Every conversation starts with "What if we could..." and ends with "We\'ll circle back to that." They promise promotions, time off, resources, flexibility—all scheduled for a mythical future that never arrives. The present is always too chaotic for delivery.',
    descriptionCn:
      '空洞承诺老板用愿景而非计划说话。每次对话都以"如果我们能..."开始，以"我们稍后再讨论"结束。他们承诺晋升、休假、资源、灵活性——所有这些都定在一个永不到来的神话般的未来。现在总是太混乱，无法交付。',
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
        description: 'Frames it as temporary: "Just this quarter while we stabilize."',
      },
      {
        mode: 'Progress Check',
        description: 'Acknowledges delays but pivots to future opportunities',
      },
      {
        mode: 'Review',
        description: 'Postpones feedback: "Let\'s discuss this when we have more time."',
      },
      {
        mode: 'Meeting',
        description: 'Talks about what\'s coming next, not what\'s happening now',
      },
      {
        mode: 'Escalation',
        description: 'Promises immediate attention, then becomes unavailable',
      },
    ],
    example: {
      input: 'Asking about promised promotion timeline.',
      output:
        'Oh, right, yeah. So about that... things have been pretty chaotic in leadership, you know? But I\'m definitely thinking about it. In fact, I think once we get through this next restructure—probably in Q3—we can talk seriously about bumping you up. You\'d be a great fit for a senior role. Maybe even a lead. I just need to see how the org shapes up. But I\'m rooting for you! Let\'s touch base in like 6 months and reassess. Sound good?',
    },
  },
  'flip-flopper': {
    slug: 'flip-flopper',
    nameEn: 'Flip-Flopper',
    nameCn: '反复横跳型',
    taglineEn: 'Changed mind 5 times before your coffee cooled.',
    taglineCn: '在你咖啡冷掉前已经改变五次想法。',
    descriptionEn:
      'The Flip-Flopper operates in a state of perpetual indecision. They change direction with the wind—or more accurately, with whoever they just talked to. Decisions aren\'t made; they\'re temporarily agreed upon. Working with them means constant context-switching and the knowledge that everything could pivot at a moment\'s notice.',
    descriptionCn:
      '反复横跳者处于永久的优柔寡断状态。他们随风改变方向——更准确地说，和他们刚刚交谈的任何人。决定不是被做出的，而是被临时同意的。与他们一起工作意味着不断的上下文切换和一切都可能随时改变的知识。',
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
        description: 'Will be revised at least twice before you finish the first part',
      },
      {
        mode: 'Progress Check',
        description: 'Realizes they meant something completely different',
      },
      {
        mode: 'Review',
        description: 'Says "Can we try a different approach?" after 80% completion',
      },
      {
        mode: 'Meeting',
        description: 'Leaves with a new direction that contradicts the previous meeting',
      },
      {
        mode: 'Escalation',
        description: 'Calls emergency pivot meeting, reverses previous emergency pivot',
      },
    ],
    example: {
      input: 'Building feature A per requirements from last week.',
      output:
        'Wait, we\'re still doing feature A? I was just thinking—what if we focused on feature B instead? It\'s actually more strategic. Yeah, I know we spent weeks planning feature A, but hear me out: feature B could be bigger. Let\'s pivot. Actually, wait—did I tell you to do feature A or feature B? I need you to stop what you\'re doing and we can realign. Or maybe we do both? Let me talk to the product team and get back to you. But yes, full speed ahead on A. Or B. I\'ll clarify by EOD.',
    },
  },
  'always-calling': {
    slug: 'always-calling',
    nameEn: 'Always Following Up',
    nameCn: '夺命连环call型',
    taglineEn: 'Called twice. Texted three times. Emailed once. It\'s been 4 minutes.',
    taglineCn: '打了两遍电话。发了三条消息。发了一封邮件。才过了4分钟。',
    descriptionEn:
      'The Always-Calling Boss cannot wait. They interpret silence as insubordination. They call once, then immediately call again. They message, ping, email, and call in rapid succession. They believe "urgent" means "this very second." Absence of response is treated as crisis.',
    descriptionCn:
      '总是打电话的老板无法等待。他们将沉默解释为不服从。他们打一次电话，然后立即再打一次。他们快速连续地发送信息、ping、电子邮件和电话。他们相信"紧急"意味着"这一秒钟"。缺乏回应被视为危机。',
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
        description: 'Followed by 4 immediate follow-ups ensuring you understood',
      },
      {
        mode: 'Progress Check',
        description: 'Multiple contact methods used simultaneously',
      },
      {
        mode: 'Review',
        description: 'Needs to discuss immediately, won\'t wait for email response',
      },
      {
        mode: 'Meeting',
        description: 'Scheduled as "urgent" even if it\'s routine',
      },
      {
        mode: 'Escalation',
        description: 'Rapid-fire calls, emails, and Slacks until you respond',
      },
    ],
    example: {
      input: 'Status update on project.',
      output:
        '[3 Slack messages in 2 minutes] [2 missed calls] [Email with subject "URGENT: Need update"] Hey, where are you? Call me back. I need to know where we stand on the project. It\'s important. Actually, let\'s just hop on a call. I\'m calling you now. Pick up.',
    },
  },
};

const ABBREVIATED_BOSSES = [
  'credit-collector',
  'delegator-supreme',
  'meeting-addict',
  'deadline-killer',
  'black-tongue',
  'verbose-master',
  'big-picture-vague',
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
      <div className="bg-marine text-frost min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'monospace' }}>
            BOSS NOT FOUND
          </h1>
          <p className="text-slate mb-6">This boss hasn't been documented yet.</p>
          <Link href="/skills" className="nes-btn is-primary">
            Back to Skills
          </Link>
        </div>
      </div>
    );
  }

  // For abbreviated bosses (coming soon)
  if (!boss) {
    const abbrevBoss = {
      slug,
      nameEn: slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      nameCn: 'Coming Soon',
      taglineEn: 'Documentation in progress...',
      taglineCn: '文档正在进行中...',
      descriptionEn: 'This boss profile is still being documented. Check back soon for the full dossier!',
      descriptionCn: '该老板档案仍在记录中。请稍后查看完整的档案！',
      behaviors: ['Coming soon...'],
      behaviorsCn: ['即将推出...'],
      typicalLines: ['[This boss is still being researched...]'],
      communicationModes: [
        { mode: 'All modes', description: 'Documentation coming soon' },
      ],
      example: {
        input: 'Coming soon...',
        output: 'Full examples will be available soon!',
      },
    };

    return (
      <div className="bg-marine text-frost min-h-screen">
        <style>{`
          .detail-container {
            max-width: 900px;
            margin: 0 auto;
            padding: 60px 20px;
          }

          .hero-section {
            text-align: center;
            margin-bottom: 48px;
            padding: 32px;
            border: 4px solid #89aec8;
            background: rgba(137, 174, 200, 0.05);
          }

          .hero-title {
            font-size: 3rem;
            font-family: monospace;
            font-weight: bold;
            color: #f0f6f7;
            margin-bottom: 12px;
            letter-spacing: 2px;
          }

          .hero-tagline {
            font-size: 1.125rem;
            color: #89aec8;
            font-family: monospace;
            font-style: italic;
          }

          .coming-soon {
            text-align: center;
            padding: 48px 24px;
            border: 3px dashed #f0a000;
            background: rgba(240, 160, 0, 0.05);
            color: #f0f6f7;
            font-family: monospace;
          }

          .coming-soon-text {
            font-size: 1.5rem;
            margin-bottom: 24px;
            letter-spacing: 2px;
          }

          .cta-buttons {
            display: flex;
            gap: 12px;
            justify-content: center;
            margin-top: 32px;
          }

          @media (max-width: 640px) {
            .detail-container {
              padding: 40px 16px;
            }

            .hero-title {
              font-size: 2rem;
            }

            .cta-buttons {
              flex-direction: column;
            }
          }
        `}</style>

        <section className="detail-container">
          <Link href="/skills" className="text-slate hover:text-frost mb-8 inline-block">
            ← Back to Skills
          </Link>

          <div className="hero-section">
            <h1 className="hero-title">{abbrevBoss.nameEn}</h1>
            <p className="hero-tagline">{abbrevBoss.taglineEn}</p>
          </div>

          <div className="coming-soon">
            <div className="coming-soon-text">📋 DOCUMENTATION IN PROGRESS 📋</div>
            <p style={{ fontSize: '1rem', marginBottom: '12px' }}>
              This boss profile is still being researched and documented. The full dossier with:
            </p>
            <ul style={{ textAlign: 'left', display: 'inline-block', marginBottom: '24px' }}>
              <li>✓ Complete personality analysis</li>
              <li>✓ Behavioral patterns</li>
              <li>✓ Iconic quotes</li>
              <li>✓ Communication modes</li>
              <li>✓ Real-world examples</li>
            </ul>
            <p style={{ fontSize: '0.875rem', color: '#89aec8', fontStyle: 'italic' }}>
              Will be available soon. Contribute on GitHub to help document this boss!
            </p>
          </div>

          <div className="cta-buttons">
            <PixelButton variant="primary" href="/skills">
              ← Back to Encyclopedia
            </PixelButton>
            <PixelButton variant="success" href="https://github.com/KongZhen/boss-skills">
              ⭐ Contribute
            </PixelButton>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-marine text-frost min-h-screen">
      <style>{`
        .detail-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .hero-section {
          text-align: center;
          margin-bottom: 48px;
          padding: 32px;
          border: 4px solid #89aec8;
          background: rgba(137, 174, 200, 0.05);
        }

        .hero-title {
          font-size: 3rem;
          font-family: monospace;
          font-weight: bold;
          color: #f0f6f7;
          margin-bottom: 12px;
          letter-spacing: 2px;
        }

        .hero-tagline {
          font-size: 1.125rem;
          color: #89aec8;
          font-family: monospace;
          font-style: italic;
        }

        .hero-cn {
          font-size: 1rem;
          color: #89aec8;
          margin-top: 8px;
          font-family: monospace;
        }

        .section {
          margin-bottom: 48px;
        }

        .section-title {
          font-size: 1.75rem;
          font-family: monospace;
          font-weight: bold;
          color: #f0f6f7;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 2px solid #89aec8;
          letter-spacing: 1px;
        }

        .persona-file {
          border: 4px solid #89aec8;
          padding: 24px;
          background: rgba(137, 174, 200, 0.05);
          margin-bottom: 24px;
        }

        .persona-title {
          font-size: 0.875rem;
          color: #89aec8;
          font-family: monospace;
          font-weight: bold;
          margin-bottom: 12px;
          letter-spacing: 2px;
        }

        .persona-content {
          font-size: 1rem;
          line-height: 1.6;
          color: #f0f6f7;
        }

        .behaviors-list {
          list-style: none;
          padding: 0;
        }

        .behaviors-list li {
          padding: 12px;
          margin-bottom: 8px;
          border-left: 4px solid #f0a000;
          background: rgba(240, 160, 0, 0.05);
          color: #f0f6f7;
        }

        .behaviors-list li::before {
          content: '► ';
          color: #f0a000;
          font-weight: bold;
          margin-right: 8px;
        }

        .typical-lines {
          display: grid;
          gap: 16px;
        }

        .quote-block {
          border-left: 4px solid #f0a000;
          padding: 16px;
          background: rgba(0, 44, 85, 0.5);
          border: 2px solid #89aec8;
          font-style: italic;
          color: #f0f6f7;
          font-family: monospace;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .modes-grid {
          display: grid;
          gap: 12px;
        }

        .mode-item {
          border: 2px solid #89aec8;
          padding: 16px;
          background: rgba(137, 174, 200, 0.05);
        }

        .mode-label {
          font-weight: bold;
          color: #f0a000;
          font-family: monospace;
          margin-bottom: 8px;
        }

        .mode-desc {
          color: #f0f6f7;
          font-size: 0.95rem;
        }

        .example-section {
          border: 3px solid #f0a000;
          padding: 24px;
          background: rgba(240, 160, 0, 0.05);
        }

        .example-input,
        .example-output {
          margin-bottom: 16px;
        }

        .example-label {
          font-weight: bold;
          color: #f0a000;
          font-family: monospace;
          margin-bottom: 8px;
          font-size: 0.875rem;
        }

        .example-content {
          background: #002c55;
          border: 2px solid #89aec8;
          padding: 16px;
          color: #f0f6f7;
          font-family: monospace;
          font-size: 0.95rem;
          line-height: 1.6;
          white-space: pre-wrap;
          word-break: break-word;
        }

        .cta-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-top: 40px;
          flex-wrap: wrap;
        }

        .back-link {
          display: inline-block;
          margin-bottom: 24px;
          color: #89aec8;
          text-decoration: none;
          font-family: monospace;
          transition: all 0.2s ease;
        }

        .back-link:hover {
          color: #f0f6f7;
        }

        @media (max-width: 640px) {
          .detail-container {
            padding: 40px 16px;
          }

          .hero-title {
            font-size: 2rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .cta-buttons {
            flex-direction: column;
          }
        }
      `}</style>

      <section className="detail-container">
        <Link href="/skills" className="back-link">
          ← Back to Skills Encyclopedia
        </Link>

        {/* HERO SECTION */}
        <div className="hero-section">
          <h1 className="hero-title">{boss.nameEn}</h1>
          <p className="hero-cn">{boss.nameCn}</p>
          <p className="hero-tagline">"{boss.taglineEn}"</p>
          <p className="hero-cn" style={{ marginTop: '8px' }}>{boss.taglineCn}</p>
        </div>

        {/* PERSONA FILE */}
        <section className="section">
          <div className="section-title">📋 PERSONA FILE</div>
          <div className="persona-file">
            <div className="persona-title">DOSSIER ENTRY</div>
            <div className="persona-content">{boss.descriptionEn}</div>
          </div>
        </section>

        {/* CORE BEHAVIORS */}
        <section className="section">
          <div className="section-title">⚙️ CORE BEHAVIORS</div>
          <ul className="behaviors-list">
            {boss.behaviors.map((behavior, idx) => (
              <li key={idx}>{behavior}</li>
            ))}
          </ul>
        </section>

        {/* TYPICAL LINES */}
        <section className="section">
          <div className="section-title">💬 TYPICAL LINES</div>
          <div className="typical-lines">
            {boss.typicalLines.map((line, idx) => (
              <div key={idx} className="quote-block">
                {line}
              </div>
            ))}
          </div>
        </section>

        {/* COMMUNICATION MODES */}
        <section className="section">
          <div className="section-title">📡 COMMUNICATION MODES</div>
          <div className="modes-grid">
            {boss.communicationModes.map((mode, idx) => (
              <div key={idx} className="mode-item">
                <div className="mode-label">{mode.mode}</div>
                <div className="mode-desc">{mode.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* EXAMPLE */}
        <section className="section">
          <div className="section-title">📊 REAL-WORLD EXAMPLE</div>
          <div className="example-section">
            <div className="example-input">
              <div className="example-label">INPUT (What you say)</div>
              <div className="example-content">{boss.example.input}</div>
            </div>
            <div className="example-output">
              <div className="example-label">OUTPUT (What they respond)</div>
              <div className="example-content">{boss.example.output}</div>
            </div>
          </div>
        </section>

        {/* CTA BUTTONS */}
        <div className="cta-buttons">
          <PixelButton variant="primary" href="/playground">
            🎮 Try in Playground
          </PixelButton>
          <PixelButton variant="success" href="https://github.com/KongZhen/boss-skills">
            📖 View Source on GitHub
          </PixelButton>
          <PixelButton variant="warning" href="/skills">
            ← Back to Encyclopedia
          </PixelButton>
        </div>
      </section>
    </div>
  );
}
