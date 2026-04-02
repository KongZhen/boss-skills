'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from '@/contexts/AppContext';

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

interface Props {
  boss: BossDetail | null;
  isComingSoon: boolean;
  comingSoonName?: string;
  slug?: string;
}

const ANNOYANCE_MAP: Record<string, { level: string; color: string; width: string; emoji: string }> = {
  micromanager:        { level: 'soul-crushing', color: 'var(--accent-red)',   width: '100%', emoji: '💀' },
  'passive-aggressive': { level: 'soul-crushing', color: 'var(--accent-red)',  width: '100%', emoji: '💀' },
  'empty-promises':    { level: 'moderate',       color: 'var(--accent-gold)', width: '50%',  emoji: '😤' },
  'flip-flopper':      { level: 'high',           color: '#e67e22',            width: '75%',  emoji: '🤬' },
  'always-following-up': { level: 'high',          color: '#e67e22',            width: '75%',  emoji: '🤬' },
};

export default function BossDetailContent({ boss, isComingSoon, comingSoonName, slug: rawSlug }: Props) {
  const { locale } = useLocale();
  const zh = locale === 'zh';

  /* helper: use raw slug for image path */
  const imgSlug = boss?.slug || rawSlug || '';
  const imgSrc = `/bosses/${zh ? 'zh' : 'en'}/boss-${imgSlug}.jpg`;

  /* ── Coming Soon placeholder ── */
  if (isComingSoon && !boss) {
    const displayName = comingSoonName || 'Unknown Boss';
    return (
      <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
        <style>{detailStyles}</style>
        <section className="detail-container">
          <Link href="/skills" className="detail-back-link">
            ← {zh ? '返回技能图鉴' : 'Back to Encyclopedia'}
          </Link>

          <div className="detail-hero">
            <div className="detail-hero-avatar">
              <Image src={imgSrc} alt={displayName} width={200} height={200} className="detail-hero-img" />
            </div>
            <h1 className="detail-hero-title">{displayName}</h1>
            <p className="detail-hero-subtitle">{zh ? '文档正在进行中...' : 'Documentation in progress...'}</p>
          </div>

          <div className="detail-coming-soon">
            <p className="detail-coming-soon-title">
              {zh ? '📋 文档编写中 📋' : '📋 DOCUMENTATION IN PROGRESS 📋'}
            </p>
            <p className="detail-coming-soon-desc">
              {zh
                ? '该老板档案仍在记录中。完整的档案将包括：完整性格分析、行为模式、经典语录、沟通模式和真实案例。'
                : 'This boss profile is still being documented. The full dossier with personality analysis, behavioral patterns, iconic quotes, communication modes, and real-world examples will be available soon.'}
            </p>
            <p className="detail-coming-soon-cta">
              {zh ? '在 GitHub 上贡献，帮助记录这位老板！' : 'Contribute on GitHub to help document this boss!'}
            </p>
          </div>

          <div className="detail-actions">
            <Link href="/skills" className="pixel-btn" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.7rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
              ← {zh ? '返回图鉴' : 'Back to Encyclopedia'}
            </Link>
            <a href="https://github.com/KongZhen/boss-skills" target="_blank" rel="noopener noreferrer"
              className="pixel-btn pixel-btn-primary" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.7rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
              ★ {zh ? '贡献' : 'Contribute'}
            </a>
          </div>
        </section>
      </div>
    );
  }

  if (!boss) return null;

  const annoyance = ANNOYANCE_MAP[boss.slug] || { level: 'moderate', color: 'var(--accent-gold)', width: '50%', emoji: '😤' };
  const name = zh ? boss.nameCn : boss.nameEn;
  const altName = zh ? boss.nameEn : boss.nameCn;
  const tagline = zh ? boss.taglineCn : boss.taglineEn;
  const description = zh ? boss.descriptionCn : boss.descriptionEn;
  const behaviors = zh ? boss.behaviorsCn : boss.behaviors;

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <style>{detailStyles}</style>
      <section className="detail-container">
        <Link href="/skills" className="detail-back-link">
          ← {zh ? '返回技能图鉴' : 'Back to Encyclopedia'}
        </Link>

        {/* ── HERO ── */}
        <div className="detail-hero">
          <div className="detail-hero-avatar">
            <Image src={imgSrc} alt={name} width={200} height={200} className="detail-hero-img" />
          </div>
          <h1 className="detail-hero-title" style={zh ? { fontFamily: 'var(--font-pixel-cjk)', fontSize: 'clamp(1.4rem, 5vw, 2rem)' } : undefined}>
            {name}
          </h1>
          <p className="detail-hero-alt" style={zh ? { fontFamily: 'var(--font-body)' } : { fontFamily: 'var(--font-cjk)' }}>
            {altName}
          </p>
          <div className="detail-annoyance-row">
            <span className="detail-annoyance-label">{zh ? '烦扰等级' : 'Annoyance Level'}</span>
            <div className="detail-annoyance-bar">
              <div className="detail-annoyance-fill" style={{ width: annoyance.width, background: annoyance.color }} />
            </div>
            <span className="detail-annoyance-emoji">{annoyance.emoji} {annoyance.level.toUpperCase()}</span>
          </div>
          <p className="detail-hero-tagline" style={zh ? { fontFamily: 'var(--font-cjk)' } : undefined}>
            "{tagline}"
          </p>
        </div>

        {/* ── PERSONA FILE ── */}
        <section className="detail-section">
          <h2 className="detail-section-title">
            {zh ? '📋 人格档案' : '📋 PERSONA FILE'}
          </h2>
          <div className="detail-card">
            <div className="detail-card-label">{zh ? '档案条目' : 'DOSSIER ENTRY'}</div>
            <p className="detail-card-text" style={zh ? { fontFamily: 'var(--font-cjk)' } : undefined}>
              {description}
            </p>
          </div>
        </section>

        {/* ── CORE BEHAVIORS ── */}
        <section className="detail-section">
          <h2 className="detail-section-title">
            {zh ? '⚙️ 核心行为' : '⚙️ CORE BEHAVIORS'}
          </h2>
          <ul className="detail-behaviors">
            {behaviors.map((b, i) => (
              <li key={i} className="detail-behavior-item" style={zh ? { fontFamily: 'var(--font-cjk)' } : undefined}>
                <span className="detail-behavior-marker">►</span> {b}
              </li>
            ))}
          </ul>
        </section>

        {/* ── TYPICAL LINES ── */}
        <section className="detail-section">
          <h2 className="detail-section-title">
            {zh ? '💬 经典台词' : '💬 TYPICAL LINES'}
          </h2>
          <div className="detail-quotes">
            {boss.typicalLines.map((line, i) => (
              <div key={i} className="detail-quote">
                {line}
              </div>
            ))}
          </div>
        </section>

        {/* ── COMMUNICATION MODES ── */}
        <section className="detail-section">
          <h2 className="detail-section-title">
            {zh ? '📡 沟通模式' : '📡 COMMUNICATION MODES'}
          </h2>
          <div className="detail-modes">
            {boss.communicationModes.map((mode, i) => (
              <div key={i} className="detail-mode-card">
                <div className="detail-mode-label">{zh && mode.modeCn ? mode.modeCn : mode.mode}</div>
                <p className="detail-mode-desc" style={zh ? { fontFamily: 'var(--font-cjk)' } : undefined}>
                  {zh && mode.descriptionCn ? mode.descriptionCn : mode.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── EXAMPLE ── */}
        <section className="detail-section">
          <h2 className="detail-section-title">
            {zh ? '📊 真实案例' : '📊 REAL-WORLD EXAMPLE'}
          </h2>
          <div className="detail-example">
            <div className="detail-example-block">
              <div className="detail-example-label">{zh ? '输入（你说的）' : 'INPUT (What you say)'}</div>
              <div className="detail-example-content" style={zh ? { fontFamily: 'var(--font-cjk)' } : undefined}>
                {zh && boss.example.inputCn ? boss.example.inputCn : boss.example.input}
              </div>
            </div>
            <div className="detail-example-block">
              <div className="detail-example-label">{zh ? '输出（他们的回复）' : 'OUTPUT (What they respond)'}</div>
              <div className="detail-example-content" style={zh ? { fontFamily: 'var(--font-cjk)' } : undefined}>
                {zh && boss.example.outputCn ? boss.example.outputCn : boss.example.output}
              </div>
            </div>
          </div>
        </section>

        {/* ── ACTIONS ── */}
        <div className="detail-actions">
          <Link href="/skills" className="pixel-btn" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.7rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
            ← {zh ? '返回图鉴' : 'Back to Encyclopedia'}
          </Link>
          <a href="https://github.com/KongZhen/boss-skills" target="_blank" rel="noopener noreferrer"
            className="pixel-btn pixel-btn-primary" style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.7rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
            ★ {zh ? '在 GitHub 上查看' : 'View on GitHub'}
          </a>
        </div>
      </section>
    </div>
  );
}

/* ═══════ Styles — matches pixel.css design tokens ═══════ */
const detailStyles = `
  .detail-container {
    max-width: 860px;
    margin: 0 auto;
    padding: 48px 24px 96px;
  }

  .detail-back-link {
    display: inline-block;
    font-family: var(--font-pixel);
    font-size: 0.7rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--text-muted);
    text-decoration: none;
    margin-bottom: 32px;
    transition: color 120ms;
  }
  .detail-back-link:hover {
    color: var(--text-primary);
  }

  /* ── Hero ── */
  .detail-hero {
    text-align: center;
    margin-bottom: 56px;
    padding: 40px 24px 32px;
    border: 1px solid var(--border-card);
    background: var(--bg-card);
  }
  .detail-hero-avatar {
    width: 200px;
    height: 200px;
    margin: 0 auto 16px;
    background: var(--bg-secondary);
    border: 1px solid var(--border-card);
    overflow: hidden;
  }
  .detail-hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .detail-hero-title {
    font-family: var(--font-pixel);
    font-size: clamp(1.5rem, 5vw, 2.2rem);
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .detail-hero-alt {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin-bottom: 16px;
  }
  .detail-annoyance-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  .detail-annoyance-label {
    font-family: var(--font-pixel);
    font-size: 0.6rem;
    color: var(--text-muted);
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .detail-annoyance-bar {
    width: 120px;
    height: 5px;
    background: var(--border-card);
    overflow: hidden;
  }
  .detail-annoyance-fill { height: 100%; }
  .detail-annoyance-emoji {
    font-family: var(--font-pixel);
    font-size: 0.6rem;
    color: var(--text-secondary);
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .detail-hero-tagline {
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--text-secondary);
    font-style: italic;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }

  /* ── Sections ── */
  .detail-section {
    margin-bottom: 48px;
  }
  .detail-section-title {
    font-family: var(--font-pixel);
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--text-primary);
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border-color);
  }

  /* ── Persona card ── */
  .detail-card {
    background: var(--bg-card);
    border: 1px solid var(--border-card);
    padding: 24px;
  }
  .detail-card-label {
    font-family: var(--font-pixel);
    font-size: 0.6rem;
    color: var(--text-muted);
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  .detail-card-text {
    font-family: var(--font-body);
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--text-secondary);
  }

  /* ── Behaviors ── */
  .detail-behaviors {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .detail-behavior-item {
    font-family: var(--font-body);
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--text-secondary);
    padding: 12px 16px;
    background: var(--bg-card);
    border: 1px solid var(--border-card);
    border-left: 3px solid var(--accent-gold);
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
  .detail-behavior-marker {
    color: var(--accent-gold);
    font-size: 0.7rem;
    flex-shrink: 0;
    margin-top: 3px;
  }

  /* ── Quotes ── */
  .detail-quotes {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .detail-quote {
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-style: italic;
    line-height: 1.6;
    color: var(--text-secondary);
    padding: 14px 18px;
    background: var(--bg-card);
    border: 1px solid var(--border-card);
    border-left: 3px solid var(--accent-gold);
  }

  /* ── Communication modes ── */
  .detail-modes {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .detail-mode-card {
    background: var(--bg-card);
    border: 1px solid var(--border-card);
    padding: 16px 20px;
  }
  .detail-mode-label {
    font-family: var(--font-pixel);
    font-size: 0.65rem;
    font-weight: 400;
    color: var(--accent-gold);
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 6px;
  }
  .detail-mode-desc {
    font-family: var(--font-body);
    font-size: 0.88rem;
    line-height: 1.6;
    color: var(--text-secondary);
  }

  /* ── Example ── */
  .detail-example {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .detail-example-block {
    background: var(--bg-card);
    border: 1px solid var(--border-card);
    padding: 20px;
  }
  .detail-example-label {
    font-family: var(--font-pixel);
    font-size: 0.6rem;
    color: var(--accent-gold);
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  .detail-example-content {
    font-family: var(--font-body);
    font-size: 0.9rem;
    line-height: 1.7;
    color: var(--text-secondary);
    white-space: pre-wrap;
    word-break: break-word;
  }

  /* ── Actions ── */
  .detail-actions {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-top: 48px;
    flex-wrap: wrap;
  }

  /* ── Coming soon ── */
  .detail-coming-soon {
    text-align: center;
    padding: 48px 24px;
    border: 2px dashed var(--border-color);
    background: var(--bg-card);
    margin-bottom: 32px;
  }
  .detail-coming-soon-title {
    font-family: var(--font-pixel);
    font-size: 0.85rem;
    letter-spacing: 2px;
    color: var(--text-primary);
    margin-bottom: 16px;
    text-transform: uppercase;
  }
  .detail-coming-soon-desc {
    font-family: var(--font-body);
    font-size: 0.9rem;
    line-height: 1.7;
    color: var(--text-secondary);
    max-width: 480px;
    margin: 0 auto 16px;
  }
  .detail-coming-soon-cta {
    font-family: var(--font-pixel);
    font-size: 0.6rem;
    color: var(--text-muted);
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  /* ── Responsive ── */
  @media (max-width: 640px) {
    .detail-container { padding: 32px 16px 64px; }
    .detail-hero { padding: 28px 16px 24px; }
    .detail-actions { flex-direction: column; align-items: center; }
  }
`;
