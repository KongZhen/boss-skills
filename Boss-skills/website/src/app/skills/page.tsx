'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from '@/contexts/AppContext';

interface BossData {
  slug: string;
  nameEn: string;
  nameCn: string;
  descEn: string;
  descCn: string;
  quoteEn: string;
  quoteCn: string;
  annoyanceLevel: 'mild' | 'moderate' | 'high' | 'soul-crushing';
}

const BOSSES: BossData[] = [
  { slug: 'micromanager', nameEn: 'Micromanager', nameCn: '事无巨细型', descEn: 'Monitors every keystroke, every email, every breath.', descCn: '监控你的每次按键、每封邮件、每次呼吸。', quoteEn: '"Have you considered using Arial instead of Calibri?"', quoteCn: '"你有没有考虑用宋体而不是微软雅黑？"', annoyanceLevel: 'soul-crushing' },
  { slug: 'passive-aggressive', nameEn: 'Passive-Aggressive', nameCn: '阴阳怪气型', descEn: 'Never says what they mean. Means everything they say.', descCn: '从不直说，但句句有意。', quoteEn: '"That\'s... interesting. Not what I expected, but interesting."', quoteCn: '"这个嘛...挺有意思的。跟我预期不太一样，但挺有意思。"', annoyanceLevel: 'soul-crushing' },
  { slug: 'empty-promises', nameEn: 'Empty Promises', nameCn: '画饼型', descEn: 'Tomorrow, next quarter, after the restructure...', descCn: '明天，下个季度，重组之后……', quoteEn: '"We\'ll definitely revisit this in the next cycle."', quoteCn: '"下个周期我们一定会重新考虑的。"', annoyanceLevel: 'moderate' },
  { slug: 'flip-flopper', nameEn: 'Flip-Flopper', nameCn: '反复横跳型', descEn: 'Changed mind 5 times before your coffee cooled.', descCn: '在你咖啡凉之前已经改了五次主意。', quoteEn: '"Actually, let\'s go back to the original approach."', quoteCn: '"算了，我们还是回到最初的方案吧。"', annoyanceLevel: 'high' },
  { slug: 'always-following-up', nameEn: 'Always Following Up', nameCn: '夺命连环call型', descEn: "If you don't answer the first call, they'll make it eleven.", descCn: '你不接第一个电话，他就打十一个。', quoteEn: '"Quick sync on that thing we discussed yesterday?"', quoteCn: '"昨天讨论的那件事，快速同步一下？"', annoyanceLevel: 'high' },
  { slug: 'credit-collector', nameEn: 'Credit Collector', nameCn: '抢功型', descEn: 'Your work. Their presentation. Their success.', descCn: '你的活儿。他的PPT。他的功劳。', quoteEn: '"We did some great work on this initiative."', quoteCn: '"我们在这个项目上做得很棒。"', annoyanceLevel: 'high' },
  { slug: 'delegator-supreme', nameEn: 'Delegator Supreme', nameCn: '甩锅大师型', descEn: 'Masters at reassigning blame at the last minute.', descCn: '最后一刻重新分配锅的大师。', quoteEn: '"This would be perfect for your skill set."', quoteCn: '"这太适合你的能力了。"', annoyanceLevel: 'soul-crushing' },
  { slug: 'meeting-for-everything', nameEn: 'Meeting for Everything', nameCn: '开会狂魔型', descEn: 'Could have been an email. Is now 6 meetings.', descCn: '本可以是一封邮件，现在变成了6场会议。', quoteEn: '"Let\'s schedule a meeting to discuss this meeting."', quoteCn: '"我们开个会讨论一下这个会议。"', annoyanceLevel: 'high' },
  { slug: 'last-minute-chaos', nameEn: 'Last-Minute Chaos', nameCn: 'Deadline杀手型', descEn: "Sprints aren't complete without a crisis at 11:59pm.", descCn: '没有23:59的危机，冲刺就不完整。', quoteEn: '"Wait, wasn\'t this supposed to be done yesterday?"', quoteCn: '"等等，这不是昨天就该交了吗？"', annoyanceLevel: 'soul-crushing' },
  { slug: 'need-translation', nameEn: 'Need Translation', nameCn: '黑话型', descEn: "Speaks in acronyms and corporate jargon nobody understands.", descCn: '用缩写和企业黑话说话，没人听得懂。', quoteEn: '"We need to circle back and touch base on the KPIs."', quoteCn: '"我们要对齐一下颗粒度，拉通一下KPI。"', annoyanceLevel: 'moderate' },
  { slug: 'verbose-nonsense', nameEn: 'Verbose Nonsense', nameCn: '长篇大论型', descEn: '10 words became a 30-minute lecture. Somehow.', descCn: '10个字变成30分钟的讲座，不知怎么就这样了。', quoteEn: '"So, fundamentally, in terms of the bigger picture..."', quoteCn: '"所以从根本上讲，就宏观层面而言……"', annoyanceLevel: 'moderate' },
  { slug: 'visionary-but-vague', nameEn: 'Visionary but Vague', nameCn: '画大饼型', descEn: 'Grand vision, zero implementation details.', descCn: '宏大愿景，零实施细节。', quoteEn: '"Think bigger. Way bigger. Like, revolutionary."', quoteCn: '"想大一点。再大。要有颠覆性的。"', annoyanceLevel: 'high' },
];

type FilterLevel = 'all' | 'soul-crushing' | 'high' | 'moderate';

const ANNOYANCE_COLORS: Record<string, string> = {
  mild: 'var(--accent-green)',
  moderate: 'var(--accent-gold)',
  high: '#e67e22',
  'soul-crushing': 'var(--accent-red)',
};
const ANNOYANCE_WIDTH: Record<string, string> = {
  mild: '25%', moderate: '50%', high: '75%', 'soul-crushing': '100%',
};
const ANNOYANCE_EMOJI: Record<string, string> = {
  mild: '😐', moderate: '😤', high: '🤬', 'soul-crushing': '💀',
};

export default function SkillsPage() {
  const { locale } = useLocale();
  const zh = locale === 'zh';
  const [filter, setFilter] = useState<FilterLevel>('all');

  const filtered = filter === 'all' ? BOSSES : BOSSES.filter(b => b.annoyanceLevel === filter);

  const FILTER_LABELS: Record<FilterLevel, string> = {
    all: zh ? '全部' : 'All',
    'soul-crushing': zh ? '毁灭性的' : 'Soul-Crushing',
    high: zh ? '高烦扰' : 'High',
    moderate: zh ? '中等' : 'Moderate',
  };

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <style>{`
        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 24px 96px;
        }
        .skills-page-title {
          font-family: var(--font-pixel);
          font-size: clamp(1.2rem, 4vw, 2rem);
          font-weight: 400;
          letter-spacing: 2px;
          text-align: center;
          color: var(--text-primary);
          margin-bottom: 8px;
          text-transform: uppercase;
        }
        .skills-page-subtitle {
          font-family: var(--font-body);
          font-size: 1rem;
          text-align: center;
          color: var(--text-secondary);
          margin-bottom: 48px;
          line-height: 1.6;
        }
        .skills-filter-row {
          display: flex;
          gap: 2px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border-color);
        }
        .skills-filter-btn {
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 8px 18px;
          font-family: var(--font-pixel);
          font-size: 0.6rem;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 120ms;
          text-transform: uppercase;
        }
        .skills-filter-btn:hover {
          background: var(--text-primary);
          color: var(--bg-primary);
          border-color: var(--text-primary);
        }
        .skills-filter-btn.active {
          background: var(--text-primary);
          color: var(--bg-primary);
          border-color: var(--text-primary);
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 10px;
        }
        .skill-card {
          background: var(--bg-card);
          border: 1px solid var(--border-card);
          color: var(--text-primary);
          text-decoration: none;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: transform 100ms, box-shadow 100ms;
        }
        .skill-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px var(--card-shadow);
        }
        .skill-card-avatar {
          width: 100%;
          aspect-ratio: 1;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          border-bottom: 1px solid var(--border-card);
        }
        .skill-card-body {
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .skill-card-name {
          font-family: var(--font-pixel);
          font-size: 0.7rem;
          font-weight: 400;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          line-height: 1.5;
        }
        .skill-card-subtitle {
          font-family: var(--font-body);
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.3;
        }
        .skill-card-desc {
          font-family: var(--font-body);
          font-size: 0.78rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .skill-annoyance-bar {
          height: 4px;
          background: var(--border-card);
          overflow: hidden;
        }
        .skill-annoyance-fill { height: 100%; }
        .skill-card-quote {
          font-family: var(--font-body);
          font-size: 0.72rem;
          color: var(--text-muted);
          font-style: italic;
          border-left: 2px solid var(--accent-gold);
          padding-left: 8px;
          line-height: 1.5;
        }
        .skill-select-label {
          font-family: var(--font-pixel);
          font-size: 0.55rem;
          letter-spacing: 1px;
          text-align: center;
          color: var(--text-muted);
          padding: 8px;
          border-top: 1px solid var(--border-card);
          text-transform: uppercase;
          margin-top: auto;
        }
        @media (max-width: 640px) {
          .skills-container { padding: 48px 16px 64px; }
          .skills-grid { grid-template-columns: repeat(2, 1fr); gap: 6px; }
        }
        @media (max-width: 380px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="skills-container">
        <h1 className="skills-page-title">
          {zh ? '老板图鉴' : 'BOSS ENCYCLOPEDIA'}
        </h1>
        <p className="skills-page-subtitle">
          {zh ? '选择你的噩梦。' : 'Choose your nightmare.'}
        </p>

        {/* Filter */}
        <div className="skills-filter-row">
          {(['all', 'soul-crushing', 'high', 'moderate'] as FilterLevel[]).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`skills-filter-btn${filter === f ? ' active' : ''}`}
            >
              {FILTER_LABELS[f]}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="skills-grid">
          {filtered.map(boss => {
            const name = zh ? boss.nameCn : boss.nameEn;
            const altName = zh ? boss.nameEn : boss.nameCn;
            const desc = zh ? boss.descCn : boss.descEn;
            const quote = zh ? boss.quoteCn : boss.quoteEn;
            return (
              <Link key={boss.slug} href={`/skills/${boss.slug}`} className="skill-card">
                <div className="skill-card-avatar">👔</div>
                <div className="skill-card-body">
                  <div className="skill-card-name"
                    style={zh ? { fontFamily: 'var(--font-pixel-cjk)', fontSize: '12px' } : undefined}>
                    {name}
                  </div>
                  {zh && <div className="skill-card-subtitle">{altName}</div>}
                  <div className="skill-annoyance-bar">
                    <div className="skill-annoyance-fill" style={{
                      width: ANNOYANCE_WIDTH[boss.annoyanceLevel],
                      background: ANNOYANCE_COLORS[boss.annoyanceLevel],
                    }} />
                  </div>
                  <p className="skill-card-desc"
                    style={zh ? { fontFamily: 'var(--font-cjk)' } : undefined}>
                    {desc}
                  </p>
                  <p className="skill-card-quote"
                    style={zh ? { fontFamily: 'var(--font-cjk)' } : undefined}>
                    {quote}
                  </p>
                  <div className="skill-select-label">
                    {ANNOYANCE_EMOJI[boss.annoyanceLevel]} {zh ? '查看技能' : 'View Skill'} ►
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
