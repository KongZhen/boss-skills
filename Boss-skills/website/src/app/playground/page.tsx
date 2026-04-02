'use client';

import { useState } from 'react';
import { useLocale } from '@/contexts/AppContext';

interface PlaygroundOutput {
  message: string;
  followUp: string;
  hiddenInsight: string;
}

const BOSS_TEMPLATES: Record<string, Record<string, string[]>> = {
  micromanager: {
    task_assignment: [
      `So I'm assigning you {{task}}. I need you to send me a status update every 30 minutes — not because I don't trust you, but because transparency is key to alignment. Also, can you walk me through your approach before you start? I'm free for a sync in 5 minutes. CC me on all related emails, and please use the status format we discussed. Just to confirm — you understand the deadline is {{deadline}}, right?`,
      `Quick thing — I'm giving you {{task}} to handle. I know you're busy, but I'll need visibility into your progress starting immediately. Can you give me percentage updates? The deadline is {{deadline}}, and I'll follow up with a Slack message in 30 minutes just to check in.`,
    ],
    progress_check: [
      `Hey, just checking in — where are we on {{task}}? {{progress}} sounds good, but can you break it down by subtask? Also, can you give me percentages? Like, is it 50% or 65%? Need to know. Let me know within 15 minutes?`,
      `Status update time. {{task}} — where are we? I saw some activity, but I need the details. {{progress}} is great context, but can you give me the micro-level breakdown?`,
    ],
  },
  'passive-aggressive': {
    task_assignment: [
      `Oh, interesting choice on {{task}}. I appreciate the... boldness of your approach. So the deadline is {{deadline}}, and {{progress}} is where we're starting from. I'm sure you'll figure it out. I just hope the complexity doesn't overwhelm things.`,
      `That's {{task}}? Okay. I see. Well, interesting direction. Not what I would have chosen, but I'm sure there's a method to your madness. {{deadline}} is our target. I'll be watching with great interest.`,
    ],
    progress_check: [
      `So how's {{task}} coming along? {{progress}} is... well, it's something. I'm not saying it's not good, but I did expect more momentum by now. {{deadline}} is still our target, right?`,
      `Oh, {{task}}. Right. So {{progress}} — that's... interesting. I expected a bit more, if I'm being honest. But I'm sure you have your reasons.`,
    ],
  },
  'empty-promises': {
    task_assignment: [
      `Oh, {{task}}? Yeah, that's important. We'll definitely make sure you're set up for success. {{progress}} is a solid start, and with {{deadline}} in mind, this could be huge for you. We'll circle back in a few weeks. Or next quarter. We'll definitely check in though.`,
      `{{task}} is exactly the kind of initiative we need. We should definitely allocate more resources to this eventually. For now, just get started and we'll provide more support soon. Probably next month.`,
    ],
    progress_check: [
      `How's {{task}} going? {{progress}} sounds great. You know, once we get through this quarter, we can really accelerate things. Let's touch base in like 6 weeks.`,
      `{{task}} — how's it looking? {{progress}}? Nice. After the restructure, we'll have more resources to throw at it. I'm thrilled with your progress.`,
    ],
  },
  'flip-flopper': {
    task_assignment: [
      `So I'm giving you {{task}} to work on. Actually, wait—do you think we should approach it differently? {{progress}} is the current state, and {{deadline}} is the target, but what if we pivoted? No, no, let's stick with the original plan. But also think about alternative approaches.`,
      `Okay, {{task}} is yours. Actually, you know what? I was just thinking—what if we did it the old way instead? No, new way is better. I'll let you know. {{deadline}} is when this needs to be done. Unless we decide to shift things.`,
    ],
    progress_check: [
      `Where are we on {{task}}? {{progress}} is good. Wait, actually, can we talk about changing direction? {{deadline}} is still the target, but I'm thinking maybe we approach it differently. Actually, the original way was better. Never mind.`,
    ],
  },
};

const FOLLOW_UPS: Record<string, { en: string; zh: string }> = {
  micromanager: { en: 'They will follow up in 15 minutes to check on your progress. Then 30 minutes later. Then again.', zh: '他们会在15分钟后跟进检查你的进度。然后30分钟后再来。然后再来一次。' },
  'passive-aggressive': { en: 'They will send a Slack message saying "Just checking in on our earlier conversation."', zh: '他们会发一条Slack消息说"只是跟进一下我们之前的对话。"' },
  'empty-promises': { en: "They'll circle back to this \"next quarter\" or \"after the restructure.\"", zh: '他们会"下个季度"或"重组之后"回来讨论这个。' },
  'flip-flopper': { en: "They'll probably change their mind about this entire direction by tomorrow.", zh: '他们明天可能会改变对整个方向的想法。' },
};

const INSIGHTS: Record<string, { en: string; zh: string }> = {
  micromanager: { en: 'What they actually mean: "I need complete control over every aspect of this."', zh: '他们实际的意思是："我需要完全掌控这件事的每一个方面。"' },
  'passive-aggressive': { en: 'What they actually mean: "This is terrible and I blame you for it."', zh: '他们实际的意思是："这太糟糕了，我怪你。"' },
  'empty-promises': { en: 'What they actually mean: "This will never actually happen."', zh: '他们实际的意思是："这永远不会真正发生。"' },
  'flip-flopper': { en: 'What they actually mean: "I have no idea what I want."', zh: '他们实际的意思是："我根本不知道自己想要什么。"' },
};

export default function PlaygroundPage() {
  const { locale } = useLocale();
  const zh = locale === 'zh';

  const [bossType, setBossType] = useState('micromanager');
  const [task, setTask] = useState('');
  const [progress, setProgress] = useState('');
  const [deadline, setDeadline] = useState('');
  const [mode, setMode] = useState('task_assignment');
  const [output, setOutput] = useState<PlaygroundOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const bossList = [
    { value: 'micromanager',       labelEn: 'Micromanager',          labelZh: '事无巨细型' },
    { value: 'passive-aggressive', labelEn: 'Passive-Aggressive',    labelZh: '阴阳怪气型' },
    { value: 'empty-promises',     labelEn: 'Empty Promises',        labelZh: '画饼型' },
    { value: 'flip-flopper',       labelEn: 'Flip-Flopper',          labelZh: '反复横跳型' },
    { value: 'always-following-up',labelEn: 'Always Following Up',   labelZh: '夺命连环call型' },
    { value: 'credit-collector',   labelEn: 'Credit Collector',      labelZh: '抢功型' },
    { value: 'delegator-supreme',  labelEn: 'Delegator Supreme',     labelZh: '甩锅大师型' },
    { value: 'meeting-addict',     labelEn: 'Meeting for Everything', labelZh: '开会狂魔型' },
    { value: 'deadline-killer',    labelEn: 'Last-Minute Chaos',     labelZh: 'Deadline杀手型' },
    { value: 'black-tongue',       labelEn: 'Need Translation',      labelZh: '黑话型' },
    { value: 'verbose-master',     labelEn: 'Verbose Nonsense',      labelZh: '长篇大论型' },
    { value: 'big-picture-vague',  labelEn: 'Visionary but Vague',   labelZh: '画大饼型' },
  ];

  const modeList = [
    { value: 'task_assignment', labelEn: 'Task Assignment',  labelZh: '任务分配' },
    { value: 'progress_check',  labelEn: 'Progress Check',   labelZh: '进度检查' },
    { value: 'review',          labelEn: 'Review',           labelZh: '绩效评估' },
    { value: 'meeting',         labelEn: 'Meeting',          labelZh: '会议' },
    { value: 'escalation',      labelEn: 'Escalation',       labelZh: '升级问题' },
  ];

  const generateResponse = () => {
    setIsLoading(true);
    setTimeout(() => {
      const templates = BOSS_TEMPLATES[bossType];
      if (!templates || !templates[mode]) {
        setOutput({
          message: zh
            ? '这个老板类型或模式尚未在训练场中实现。'
            : 'This boss type or mode is not yet implemented in the playground.',
          followUp: zh ? '试试其他组合！' : 'Try a different combination!',
          hiddenInsight: zh
            ? '在 GitHub 上贡献更多老板性格和模式！'
            : 'Contribute on GitHub to add more boss personalities and modes!',
        });
        setIsLoading(false);
        return;
      }
      const list = templates[mode];
      let message = list[Math.floor(Math.random() * list.length)]
        .replace('{{task}}', task || (zh ? '[你的任务]' : '[your task]'))
        .replace('{{progress}}', progress || (zh ? '[当前进度]' : '[current progress]'))
        .replace('{{deadline}}', deadline || (zh ? '[截止日期]' : '[your deadline]'));

      const fu = FOLLOW_UPS[bossType];
      const ins = INSIGHTS[bossType];

      setOutput({
        message,
        followUp: fu ? (zh ? fu.zh : fu.en) : (zh ? '等待他们的下一条消息。' : 'Stay tuned for their next message.'),
        hiddenInsight: ins ? (zh ? ins.zh : ins.en) : (zh ? '解码老板话术中…' : 'Decoding boss-speak...'),
      });
      setIsLoading(false);
    }, 800);
  };

  const handleRandom = () => {
    const r = bossList[Math.floor(Math.random() * bossList.length)];
    setBossType(r.value);
    setTask(zh ? '部署新功能' : 'Deploy a new feature');
    setProgress(zh ? '已开始规划' : 'Started planning');
    setDeadline(zh ? '两周后' : '2 weeks');
    setMode('task_assignment');
  };

  const handleShare = () => {
    if (!output) return;
    const text = `BOSS MESSAGE:\n\n${output.message}\n\nFOLLOW UP:\n${output.followUp}\n\nWHAT THEY ACTUALLY MEAN:\n${output.hiddenInsight}`;
    navigator.clipboard.writeText(text);
    alert(zh ? '已复制到剪贴板！' : 'Message copied to clipboard!');
  };

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <style>{`
        .playground-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 72px 24px 96px;
        }
        .playground-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .playground-title {
          font-family: var(--font-pixel);
          font-size: clamp(1.5rem, 5vw, 2.5rem);
          font-weight: 400;
          color: var(--text-primary);
          margin-bottom: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .playground-subtitle {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .playground-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
        }
        .pg-panel {
          border: 1px solid var(--border-color);
          padding: 24px;
          background: var(--bg-card);
        }
        .pg-panel-title {
          font-family: var(--font-pixel);
          font-size: 0.65rem;
          font-weight: 400;
          color: var(--text-primary);
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--accent-gold);
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .pg-form-group { margin-bottom: 18px; }
        .pg-label {
          display: block;
          font-family: var(--font-pixel);
          font-size: 0.55rem;
          color: var(--text-secondary);
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .pg-input, .pg-select, .pg-textarea {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid var(--border-color);
          background: var(--bg-secondary);
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.9rem;
          box-sizing: border-box;
          outline: none;
          transition: border-color 120ms;
        }
        .pg-input:focus, .pg-select:focus, .pg-textarea:focus {
          border-color: var(--accent-gold);
        }
        .pg-textarea { min-height: 90px; resize: vertical; }
        .pg-select option { background: var(--bg-primary); }
        .pg-btn-row {
          display: flex;
          gap: 2px;
          margin-top: 24px;
        }
        .pg-btn {
          flex: 1;
          padding: 14px 8px;
          border: none;
          font-family: var(--font-pixel);
          font-size: 0.6rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 120ms;
          white-space: nowrap;
        }
        .pg-btn-primary {
          background: var(--text-primary);
          color: var(--bg-primary);
        }
        .pg-btn-primary:hover { background: var(--text-secondary); }
        .pg-btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
        .pg-btn-secondary {
          background: var(--bg-btn);
          color: var(--text-primary);
        }
        .pg-btn-secondary:hover { background: var(--bg-btn-hover); }
        .pg-message-box {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          padding: 18px;
          margin-bottom: 16px;
          font-family: var(--font-body);
          font-size: 0.9rem;
          line-height: 1.7;
          color: var(--text-primary);
          white-space: pre-wrap;
          word-break: break-word;
        }
        .pg-section-label {
          font-family: var(--font-pixel);
          font-size: 0.55rem;
          font-weight: 400;
          color: var(--accent-gold);
          margin: 14px 0 6px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .pg-section-content {
          background: rgba(200, 146, 42, 0.05);
          border-left: 3px solid var(--accent-gold);
          padding: 12px;
          font-family: var(--font-body);
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 12px;
        }
        .pg-empty {
          text-align: center;
          padding: 48px 20px;
          color: var(--text-muted);
          font-family: var(--font-body);
          font-style: italic;
          font-size: 0.9rem;
        }
        .pg-loading {
          text-align: center;
          padding: 48px;
          color: var(--text-muted);
          font-family: var(--font-pixel);
          font-size: 0.6rem;
          letter-spacing: 2px;
        }
        @keyframes blink {
          0%, 60%, 100% { opacity: 0.4; }
          30% { opacity: 1; }
        }
        .pg-dot { display: inline-block; animation: blink 1.4s infinite; }
        .pg-dot:nth-child(2) { animation-delay: 0.2s; }
        .pg-dot:nth-child(3) { animation-delay: 0.4s; }
        @media (max-width: 900px) {
          .playground-layout { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .playground-container { padding: 48px 16px 64px; }
          .pg-btn-row { flex-direction: column; }
        }
      `}</style>

      <section className="playground-container">
        <div className="playground-header">
          <h1 className="playground-title">
            {zh ? '老板训练场' : 'BOSS SIMULATOR'}
          </h1>
          <p className="playground-subtitle">
            {zh ? '部署一个老板。立刻后悔。' : 'Deploy a manager. Regret immediately.'}
          </p>
        </div>

        <div className="playground-layout">
          {/* INPUT */}
          <div className="pg-panel">
            <div className="pg-panel-title">⚙ {zh ? '配置老板' : 'CONFIGURE BOSS'}</div>

            <div className="pg-form-group">
              <label className="pg-label">{zh ? '老板类型' : 'Boss Type'}</label>
              <select className="pg-select" value={bossType} onChange={e => setBossType(e.target.value)}>
                {bossList.map(b => (
                  <option key={b.value} value={b.value}>
                    {zh ? b.labelZh : b.labelEn}
                  </option>
                ))}
              </select>
            </div>

            <div className="pg-form-group">
              <label className="pg-label">{zh ? '你在做什么？' : 'What are you working on?'}</label>
              <textarea
                className="pg-textarea"
                placeholder={zh ? '例如：开发新仪表盘、修复登录Bug...' : 'e.g., Building new dashboard, Fixing auth bug...'}
                value={task}
                onChange={e => setTask(e.target.value)}
              />
            </div>

            <div className="pg-form-group">
              <label className="pg-label">{zh ? '当前进度' : 'Current Progress'}</label>
              <input
                className="pg-input"
                type="text"
                placeholder={zh ? '例如：已开始架构设计、完成60%...' : 'e.g., Started architecture, 60% complete...'}
                value={progress}
                onChange={e => setProgress(e.target.value)}
              />
            </div>

            <div className="pg-form-group">
              <label className="pg-label">{zh ? '截止日期' : 'Deadline'}</label>
              <input
                className="pg-input"
                type="text"
                placeholder={zh ? '例如：两周后、月底...' : 'e.g., 2 weeks, end of month...'}
                value={deadline}
                onChange={e => setDeadline(e.target.value)}
              />
            </div>

            <div className="pg-form-group">
              <label className="pg-label">{zh ? '沟通模式' : 'Communication Mode'}</label>
              <select className="pg-select" value={mode} onChange={e => setMode(e.target.value)}>
                {modeList.map(m => (
                  <option key={m.value} value={m.value}>
                    {zh ? m.labelZh : m.labelEn}
                  </option>
                ))}
              </select>
            </div>

            <div className="pg-btn-row">
              <button className="pg-btn pg-btn-primary" onClick={generateResponse} disabled={isLoading}>
                {isLoading ? '⏳ ...' : (zh ? '🚀 部署老板' : '🚀 DEPLOY BOSS')}
              </button>
              <button className="pg-btn pg-btn-secondary" onClick={handleRandom}>
                {zh ? '🎲 随机老板' : '🎲 RANDOM'}
              </button>
            </div>
          </div>

          {/* OUTPUT */}
          <div className="pg-panel">
            <div className="pg-panel-title">💬 {zh ? '来自你老板的消息' : 'MESSAGE FROM YOUR BOSS'}</div>

            {isLoading && (
              <div className="pg-loading">
                <span className="pg-dot">.</span>
                <span className="pg-dot">.</span>
                <span className="pg-dot">.</span>
              </div>
            )}

            {!output && !isLoading && (
              <div className="pg-empty">
                {zh
                  ? '配置你的老板并点击「部署老板」来查看他们会说什么。'
                  : 'Configure your boss and click DEPLOY to see what they have to say.'}
              </div>
            )}

            {output && !isLoading && (
              <div>
                <div className="pg-message-box">{output.message}</div>
                <div className="pg-section-label">📞 {zh ? '后续跟进' : 'FOLLOW UP'}</div>
                <div className="pg-section-content">{output.followUp}</div>
                <div className="pg-section-label">🎭 {zh ? '他们实际的意思是' : 'WHAT THEY ACTUALLY MEAN'}</div>
                <div className="pg-section-content">{output.hiddenInsight}</div>
                <div className="pg-btn-row">
                  <button className="pg-btn pg-btn-primary" onClick={generateResponse} disabled={isLoading}>
                    {zh ? '🔄 再生成一条' : '🔄 GENERATE ANOTHER'}
                  </button>
                  <button className="pg-btn pg-btn-secondary" onClick={handleShare}>
                    {zh ? '📋 复制' : '📋 SHARE'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
