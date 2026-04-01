'use client';

import { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import PixelBossCard from '@/components/PixelBossCard';

interface BossData {
  slug: string;
  nameEn: string;
  nameCn: string;
  descriptionEn: string;
  descriptionCn: string;
  oneLinEn: string;
  oneLinCn: string;
  annoyanceLevel: 'mild' | 'moderate' | 'high' | 'soul-crushing';
}

const BOSSES: BossData[] = [
  {
    slug: 'micromanager',
    nameEn: 'Micromanager',
    nameCn: '事无巨细型',
    descriptionEn: 'Monitors every keystroke, every email, every breath.',
    descriptionCn: '监控每一次按键，每一封邮件，每一次呼吸。',
    oneLinEn: '"Have you considered using Arial instead of Calibri?"',
    oneLinCn: '"你有没有考虑用Arial而不是Calibri？"',
    annoyanceLevel: 'soul-crushing',
  },
  {
    slug: 'passive-aggressive',
    nameEn: 'Passive-Aggressive',
    nameCn: '阴阳怪气型',
    descriptionEn: 'Never says what they mean. Means everything they say.',
    descriptionCn: '从不直说。却句句有意。',
    oneLinEn: '"That\'s... interesting. Not what I expected, but interesting."',
    oneLinCn: '"这个...很有趣。不是我预期的那样，但很有趣。"',
    annoyanceLevel: 'soul-crushing',
  },
  {
    slug: 'empty-promises',
    nameEn: 'Empty Promises',
    nameCn: '画饼型',
    descriptionEn: 'Tomorrow, next quarter, after the restructure...',
    descriptionCn: '明天，下个季度，重组之后...',
    oneLinEn: '"We\'ll definitely revisit this in the next cycle."',
    oneLinCn: '"下个周期我们一定会重新考虑这个。"',
    annoyanceLevel: 'moderate',
  },
  {
    slug: 'flip-flopper',
    nameEn: 'Flip-Flopper',
    nameCn: '反复横跳型',
    descriptionEn: 'Changed mind 5 times before your coffee cooled.',
    descriptionCn: '在你咖啡冷掉前已经改变五次想法。',
    oneLinEn: '"Actually, let\'s go back to the original approach."',
    oneLinCn: '"实际上，我们还是回到原来的方案吧。"',
    annoyanceLevel: 'high',
  },
  {
    slug: 'always-calling',
    nameEn: 'Always Following Up',
    nameCn: '夺命连环call型',
    descriptionEn: 'If you don\'t answer the first call, they\'ll make it five.',
    descriptionCn: '你不接第一个电话，他就会打五个。',
    oneLinEn: '"Quick sync on that thing we discussed yesterday?"',
    oneLinCn: '"快速同步一下昨天讨论的那件事？"',
    annoyanceLevel: 'high',
  },
  {
    slug: 'credit-collector',
    nameEn: 'Credit Collector',
    nameCn: '抢功型',
    descriptionEn: 'Your work. Their presentation. Their success.',
    descriptionCn: '你的工作。他们的演讲。他们的成功。',
    oneLinEn: '"We did some great work on this initiative."',
    oneLinCn: '"我们在这个项目上做了很好的工作。"',
    annoyanceLevel: 'high',
  },
  {
    slug: 'delegator-supreme',
    nameEn: 'Delegator Supreme',
    nameCn: '甩锅大师型',
    descriptionEn: 'Masters at re-assigning tasks at the last minute.',
    descriptionCn: '最后一刻重新分配任务的大师。',
    oneLinEn: '"This would be perfect for your skill set."',
    oneLinCn: '"这对你的技能来说再合适不过了。"',
    annoyanceLevel: 'soul-crushing',
  },
  {
    slug: 'meeting-addict',
    nameEn: 'Meeting for Everything',
    nameCn: '开会狂魔型',
    descriptionEn: 'Could have been an email. Is now 6 meetings.',
    descriptionCn: '本可以是一封邮件。现在变成了6场会议。',
    oneLinEn: '"Let\'s schedule a meeting to discuss this meeting."',
    oneLinCn: '"我们开个会来讨论这场会议吧。"',
    annoyanceLevel: 'high',
  },
  {
    slug: 'deadline-killer',
    nameEn: 'Last-Minute Chaos',
    nameCn: 'deadline杀手型',
    descriptionEn: 'Sprints aren\'t complete without a crisis.',
    descriptionCn: '没有危机的冲刺是不完整的。',
    oneLinEn: '"Wait, wasn\'t this supposed to be done yesterday?"',
    oneLinCn: '"等等，这不是应该昨天完成的吗？"',
    annoyanceLevel: 'soul-crushing',
  },
  {
    slug: 'black-tongue',
    nameEn: 'Need Translation',
    nameCn: '黑话型',
    descriptionEn: 'Speaks in acronyms and corporate jargon.',
    descriptionCn: '用缩写和企业术语说话。',
    oneLinEn: '"We need to circle back and touch base on the KPIs."',
    oneLinCn: '"我们需要回到圆桌并同步一下关键绩效指标。"',
    annoyanceLevel: 'moderate',
  },
  {
    slug: 'verbose-master',
    nameEn: 'Verbose Nonsense',
    nameCn: '长篇大论型',
    descriptionEn: '10 words became a 30-minute lecture. Somehow.',
    descriptionCn: '10个单词变成了30分钟的讲座。不知怎么就这样了。',
    oneLinEn: '"So, fundamentally, in terms of the bigger picture..."',
    oneLinCn: '"所以，从根本上讲，就宏观的角度而言..."',
    annoyanceLevel: 'moderate',
  },
  {
    slug: 'big-picture-vague',
    nameEn: 'Visionary but Vague',
    nameCn: '画大饼型',
    descriptionEn: 'Grand vision, zero implementation details.',
    descriptionCn: '宏大的愿景，零实施细节。',
    oneLinEn: '"Think bigger. Way bigger. Like, revolutionary."',
    oneLinCn: '"想得更大一点。大得多。像，革命性的。"',
    annoyanceLevel: 'high',
  },
];

type FilterCategory = 'all' | 'soul-crushing' | 'high' | 'moderate';

export default function SkillsPage() {
  const [filter, setFilter] = useState<FilterCategory>('all');

  const filteredBosses = filter === 'all'
    ? BOSSES
    : BOSSES.filter(boss => boss.annoyanceLevel === filter);

  return (
    <div className="bg-marine text-frost min-h-screen">
      <style>{`
        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 60px 20px;
        }

        .filter-tabs {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 2px dashed #89aec8;
        }

        .filter-tab {
          background: transparent;
          border: 3px solid #89aec8;
          color: #f0f6f7;
          padding: 8px 16px;
          font-size: 12px;
          font-family: monospace;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .filter-tab:hover {
          border-color: #f0f6f7;
          box-shadow: 0 0 8px rgba(240, 246, 247, 0.2);
        }

        .filter-tab.active {
          background: #f0a000;
          border-color: #f0a000;
          color: #002c55;
          box-shadow: 0 0 12px rgba(240, 160, 0, 0.4);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 20px;
        }

        @media (max-width: 640px) {
          .skills-container {
            padding: 40px 16px;
          }

          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 16px;
          }

          .filter-tabs {
            gap: 8px;
          }

          .filter-tab {
            font-size: 10px;
            padding: 6px 12px;
          }
        }
      `}</style>

      <section className="skills-container">
        <SectionTitle
          en="BOSS 图鉴 / BOSS ENCYCLOPEDIA"
          cn="老板百科全书"
          subtitle="Choose your nightmare. / 选择你的噩梦。"
        />

        {/* Filter Tabs */}
        <div className="filter-tabs">
          <button
            onClick={() => setFilter('all')}
            className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('soul-crushing')}
            className={`filter-tab ${filter === 'soul-crushing' ? 'active' : ''}`}
          >
            Soul-Crushing
          </button>
          <button
            onClick={() => setFilter('high')}
            className={`filter-tab ${filter === 'high' ? 'active' : ''}`}
          >
            High
          </button>
          <button
            onClick={() => setFilter('moderate')}
            className={`filter-tab ${filter === 'moderate' ? 'active' : ''}`}
          >
            Moderate
          </button>
        </div>

        {/* Boss Grid */}
        <div className="skills-grid">
          {filteredBosses.map((boss) => (
            <PixelBossCard
              key={boss.slug}
              nameEn={boss.nameEn}
              nameCn={boss.nameCn}
              name={boss.nameEn}
              description={boss.descriptionEn}
              descriptionCn={boss.descriptionCn}
              oneLiner={boss.oneLinEn}
              oneLineCn={boss.oneLinCn}
              annoyanceLevel={boss.annoyanceLevel}
              slug={boss.slug}
              locale="en"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
