'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

/* ═══════ Boss Data ═══════ */
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
    descEn: 'Monitors every keystroke, every email, every breath.',
    descCn: '监控你的每次按键、每封邮件、每次呼吸。',
    quoteEn: '"Have you considered using Arial instead of Calibri?"',
    quoteCn: '"你有没有考虑用宋体而不是微软雅黑？"',
    annoyance: 'soul-crushing',
    tagsEn: ['control freak', 'detail obsessed'],
    tagsCn: ['控制狂', '细节魔'],
  },
  {
    slug: 'passive-aggressive',
    nameEn: 'Passive-Aggressive',
    nameCn: '阴阳怪气型',
    descEn: 'Never says what they mean. Means everything they say.',
    descCn: '从不直说，但句句有意。',
    quoteEn: '"That\'s... interesting. Not what I expected, but interesting."',
    quoteCn: '"这个嘛...挺有意思的。跟我预期不太一样，但挺有意思。"',
    annoyance: 'soul-crushing',
    tagsEn: ['toxic polite', 'icy smile'],
    tagsCn: ['笑里藏刀', '阴阳怪气'],
  },
  {
    slug: 'empty-promises',
    nameEn: 'Empty Promises',
    nameCn: '画饼型',
    descEn: 'Tomorrow, next quarter, after the restructure...',
    descCn: '明天，下个季度，重组之后……',
    quoteEn: '"We\'ll definitely revisit this in the next cycle."',
    quoteCn: '"下个周期我们一定会重新考虑的。"',
    annoyance: 'moderate',
    tagsEn: ['empty pie', 'false hope'],
    tagsCn: ['画饼大师', '空头支票'],
  },
  {
    slug: 'flip-flopper',
    nameEn: 'Flip-Flopper',
    nameCn: '反复横跳型',
    descEn: 'Changed mind 5 times before your coffee cooled.',
    descCn: '在你咖啡凉之前已经改了五次主意。',
    quoteEn: '"Actually, let\'s go back to the original approach."',
    quoteCn: '"算了，我们还是回到最初的方案吧。"',
    annoyance: 'high',
    tagsEn: ['indecisive', 'flip-flop'],
    tagsCn: ['反复横跳', '朝令夕改'],
  },
  {
    slug: 'always-following-up',
    nameEn: 'Always Following Up',
    nameCn: '夺命连环call型',
    descEn: 'If you don\'t answer the first call, they\'ll make it eleven.',
    descCn: '你不接第一个电话，他就打十一个。',
    quoteEn: '"Quick sync on that thing we discussed yesterday?"',
    quoteCn: '"昨天讨论的那件事，快速同步一下？"',
    annoyance: 'high',
    tagsEn: ['relentless', '2am pinger'],
    tagsCn: ['夺命连环call', '凌晨追魂'],
  },
  {
    slug: 'credit-collector',
    nameEn: 'Credit Collector',
    nameCn: '抢功型',
    descEn: 'Your work. Their presentation. Their success.',
    descCn: '你的活儿。他的PPT。他的功劳。',
    quoteEn: '"We did some great work on this initiative."',
    quoteCn: '"我们在这个项目上做得很棒。"',
    annoyance: 'high',
    tagsEn: ['glory thief', 'shameless'],
    tagsCn: ['抢功狂魔', '厚颜无耻'],
  },
  {
    slug: 'delegator-supreme',
    nameEn: 'Delegator Supreme',
    nameCn: '甩锅大师型',
    descEn: 'Masters at reassigning blame at the last minute.',
    descCn: '最后一刻重新分配锅的大师。',
    quoteEn: '"This would be perfect for your skill set."',
    quoteCn: '"这太适合你的能力了。"',
    annoyance: 'soul-crushing',
    tagsEn: ['blame shifter', 'ice cold'],
    tagsCn: ['甩锅大师', '冰冷无情'],
  },
  {
    slug: 'meeting-for-everything',
    nameEn: 'Meeting for Everything',
    nameCn: '开会狂魔型',
    descEn: 'Could have been an email. Is now 6 meetings.',
    descCn: '本可以是一封邮件，现在变成了6场会议。',
    quoteEn: '"Let\'s schedule a meeting to discuss this meeting."',
    quoteCn: '"我们开个会讨论一下这个会议。"',
    annoyance: 'high',
    tagsEn: ['meeting addict', 'time vampire'],
    tagsCn: ['开会上瘾', '时间杀手'],
  },
  {
    slug: 'last-minute-chaos',
    nameEn: 'Last-Minute Chaos',
    nameCn: 'deadline杀手型',
    descEn: 'Sprints aren\'t complete without a crisis at 11:59pm.',
    descCn: '没有23:59的危机，冲刺就不完整。',
    quoteEn: '"Wait, wasn\'t this supposed to be done yesterday?"',
    quoteCn: '"等等，这不是昨天就该交了吗？"',
    annoyance: 'soul-crushing',
    tagsEn: ['chaos agent', 'toxic urgency'],
    tagsCn: ['混乱制造者', '有毒的紧迫感'],
  },
  {
    slug: 'need-translation',
    nameEn: 'Need Translation',
    nameCn: '黑话型',
    descEn: 'Speaks in acronyms and corporate jargon nobody understands.',
    descCn: '用缩写和企业黑话说话，没人听得懂。',
    quoteEn: '"We need to circle back and touch base on the KPIs."',
    quoteCn: '"我们要对齐一下颗粒度，拉通一下KPI。"',
    annoyance: 'moderate',
    tagsEn: ['jargon machine', 'buzzword'],
    tagsCn: ['黑话大师', '互联网嘴替'],
  },
  {
    slug: 'verbose-nonsense',
    nameEn: 'Verbose Nonsense',
    nameCn: '长篇大论型',
    descEn: '10 words became a 30-minute lecture. Somehow.',
    descCn: '10个字变成30分钟的讲座，不知怎么就这样了。',
    quoteEn: '"So, fundamentally, in terms of the bigger picture..."',
    quoteCn: '"所以从根本上讲，就宏观层面而言……"',
    annoyance: 'moderate',
    tagsEn: ['monologue king', 'self-absorbed'],
    tagsCn: ['独白之王', '自我陶醉'],
  },
  {
    slug: 'visionary-but-vague',
    nameEn: 'Visionary but Vague',
    nameCn: '画大饼型',
    descEn: 'Grand vision, zero implementation details.',
    descCn: '宏大愿景，零实施细节。',
    quoteEn: '"Think bigger. Way bigger. Like, revolutionary."',
    quoteCn: '"想大一点。再大。要有颠覆性的。"',
    annoyance: 'high',
    tagsEn: ['fake prophet', 'vague genius'],
    tagsCn: ['假先知', '模糊天才'],
  },
];

/* ═══════ Annoyance Bar Component ═══════ */
function AnnoyanceBar({ level }: { level: string }) {
  const config: Record<string, { width: string; label: string }> = {
    'mild':          { width: '25%',  label: '😐' },
    'moderate':      { width: '50%',  label: '😤' },
    'high':          { width: '75%',  label: '🤬' },
    'soul-crushing': { width: '100%', label: '💀' },
  };
  const c = config[level] || config['moderate'];
  return (
    <div className="flex items-center gap-2">
      <div className="annoyance-bar flex-1">
        <div className={`annoyance-fill annoyance-${level}`} />
      </div>
      <span style={{ fontSize: '14px' }}>{c.label}</span>
    </div>
  );
}

/* ═══════ Boss Card Component ═══════ */
function BossCard({ boss, locale }: { boss: BossData; locale: 'en' | 'zh' }) {
  const name = locale === 'zh' ? boss.nameCn : boss.nameEn;
  const subtitle = locale === 'zh' ? boss.nameEn : boss.nameCn;
  const desc = locale === 'zh' ? boss.descCn : boss.descEn;
  const tags = locale === 'zh' ? boss.tagsCn : boss.tagsEn;
  const imgPath = `/bosses/${locale}/boss-${boss.slug}.png`;

  return (
    <Link href={`/skills/${boss.slug}`} className="boss-card group">
      <Image
        src={imgPath}
        alt={name}
        width={512}
        height={512}
        className="boss-card-image"
        unoptimized
      />
      <div className="boss-card-body">
        <h3 className="boss-card-name">{name}</h3>
        <p className="boss-card-subtitle">{subtitle}</p>
        <AnnoyanceBar level={boss.annoyance} />
        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
          {desc}
        </p>
        <div className="boss-card-tags">
          {tags.map((tag) => (
            <span key={tag} className="boss-tag">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

/* ═══════ Main Page ═══════ */
export default function Home() {
  const [locale, setLocale] = useState<'en' | 'zh'>('en');

  return (
    <div>
      {/* ── HERO SECTION ── */}
      <section className="hero-section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '80px 20px 60px', position: 'relative' }}>
        {/* Pixel Title + CRT layout */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(16px, 3vw, 32px)', flexWrap: 'wrap', maxWidth: '900px', width: '100%' }}>
          <h1 className="hero-title" style={{ flex: 1, minWidth: '180px' }}>
            MY<br />BOSS
          </h1>

          {/* CRT TV Frame with Boss */}
          <div className="crt-frame" style={{ flexShrink: 0 }}>
            <div className="crt-screen" style={{ width: 'clamp(160px, 25vw, 260px)', aspectRatio: '1' }}>
              <Image
                src={locale === 'zh' ? '/hero-boss-zh.png' : '/hero-boss-en.png'}
                alt="Boss"
                width={520}
                height={520}
                unoptimized
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '8px' }}>
              <div className="crt-knob" />
              <div className="crt-knob" style={{ background: 'linear-gradient(145deg, var(--accent-gold), oklch(52% 0.12 75))' }} />
            </div>
          </div>

          <h1 className="hero-title" style={{ flex: 1, minWidth: '180px', textAlign: 'right' }}>
            SKI<br />LLS
          </h1>
        </div>

        {/* Subtitle */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
          color: 'var(--text-secondary)',
          textAlign: 'center',
          maxWidth: '560px',
          lineHeight: 1.7,
          marginTop: 'var(--space-2xl)',
        }}>
          A serious open-source framework for unserious bosses.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-xl)', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/playground" className="pixel-btn pixel-btn-primary">
            ▶ Try Playground
          </Link>
          <a
            href="https://github.com/anthropics/boss-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn pixel-btn-ghost"
          >
            ★ Star on GitHub
          </a>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute',
          bottom: 'var(--space-lg)',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-pixel)',
          fontSize: '0.5rem',
          color: 'var(--text-muted)',
          opacity: 0.5,
          animation: 'bounce 2s infinite',
          letterSpacing: '2px',
        }}>
          ▼ SCROLL ▼
        </div>
      </section>

      {/* ── CHOOSE YOUR BOSS ── */}
      <section id="bosses" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: 'clamp(1rem, 3vw, 1.75rem)', marginBottom: '12px' }}>
            {locale === 'zh' ? '选择你的老板' : 'CHOOSE YOUR BOSS'}
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            {locale === 'zh'
              ? '像游戏选人界面，但选的是你的压力等级'
              : 'Like a game character select screen, but with your stress levels'}
          </p>
          {/* Locale toggle */}
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
            <button
              onClick={() => setLocale('en')}
              className="pixel-btn"
              style={{
                fontSize: '0.5rem',
                padding: '6px 14px',
                ...(locale === 'en' ? { background: 'var(--accent-gold)', color: 'var(--bg-hero)', borderColor: 'var(--accent-gold)' } : {}),
              }}
            >
              EN
            </button>
            <button
              onClick={() => setLocale('zh')}
              className="pixel-btn"
              style={{
                fontSize: '0.5rem',
                padding: '6px 14px',
                ...(locale === 'zh' ? { background: 'var(--accent-gold)', color: 'var(--bg-hero)', borderColor: 'var(--accent-gold)' } : {}),
              }}
            >
              中文
            </button>
          </div>
        </div>

        {/* Boss Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '20px',
        }}>
          {BOSSES.map((boss) => (
            <BossCard key={boss.slug} boss={boss} locale={locale} />
          ))}
        </div>
      </section>

      {/* ── Bounce keyframes ── */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </div>
  );
}
