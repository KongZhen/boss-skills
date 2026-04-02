'use client';

import { useLocale } from '@/contexts/AppContext';

export default function ContributePage() {
  const { locale } = useLocale();
  const zh = locale === 'zh';

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <style>{`
        .contrib-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 72px 24px 96px;
        }
        .contrib-page-title {
          font-family: var(--font-pixel);
          font-size: clamp(1.5rem, 5vw, 2.5rem);
          font-weight: 400;
          letter-spacing: 3px;
          text-align: center;
          color: var(--text-primary);
          margin-bottom: 12px;
          text-transform: uppercase;
        }
        .contrib-page-subtitle {
          font-family: var(--font-body);
          font-size: 1rem;
          text-align: center;
          color: var(--text-secondary);
          margin-bottom: 72px;
          line-height: 1.6;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .contrib-section {
          margin-bottom: 48px;
        }
        .contrib-section-title {
          font-family: var(--font-pixel);
          font-size: 0.7rem;
          font-weight: 400;
          color: var(--text-primary);
          letter-spacing: 2px;
          margin-bottom: 16px;
          padding: 12px 16px;
          border: 1px solid var(--border-color);
          background: var(--bg-secondary);
          text-transform: uppercase;
          display: block;
          width: 100%;
          box-sizing: border-box;
        }
        .contrib-section-body {
          padding: 24px;
          border: 1px solid var(--border-color);
          background: var(--bg-card);
          line-height: 1.8;
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-family: var(--font-body);
        }
        .contrib-highlight {
          color: var(--accent-gold);
          font-weight: 600;
        }
        .contrib-step-list {
          list-style: none;
          padding: 0;
          margin: 16px 0 0;
          counter-reset: step-counter;
        }
        .contrib-step-list li {
          padding: 12px 12px 12px 36px;
          margin-bottom: 8px;
          border-left: 3px solid var(--accent-gold);
          background: rgba(200, 146, 42, 0.04);
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--text-secondary);
          counter-increment: step-counter;
          position: relative;
        }
        .contrib-step-list li::before {
          content: counter(step-counter);
          position: absolute;
          left: 10px;
          color: var(--accent-gold);
          font-weight: 700;
          font-family: var(--font-pixel);
          font-size: 0.65rem;
        }
        .contrib-plain-list {
          list-style: none;
          padding: 0;
          margin: 16px 0 0;
        }
        .contrib-plain-list li {
          padding: 10px 12px;
          margin-bottom: 6px;
          border-left: 3px solid var(--border-color);
          background: var(--bg-secondary);
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .contrib-plain-list li::before {
          content: '▸ ';
          color: var(--text-muted);
        }
        .contrib-warning-list {
          list-style: none;
          padding: 0;
          margin: 16px 0 0;
        }
        .contrib-warning-list li {
          padding: 10px 12px;
          margin-bottom: 6px;
          border-left: 3px solid var(--accent-red);
          background: rgba(192, 57, 43, 0.04);
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .contrib-warning-list li::before {
          content: '✗ ';
          color: var(--accent-red);
          font-weight: bold;
        }
        .contrib-code {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          padding: 16px 20px;
          margin: 16px 0;
          font-family: var(--font-pixel);
          font-size: 0.65rem;
          overflow-x: auto;
          color: var(--text-secondary);
          line-height: 2;
          letter-spacing: 0.5px;
        }
        code {
          font-family: var(--font-pixel);
          font-size: 0.65rem;
          background: var(--bg-secondary);
          padding: 2px 6px;
          border: 1px solid var(--border-color);
          color: var(--accent-gold);
        }
        .contrib-cta {
          margin-top: 64px;
          padding: 32px;
          border: 1px solid var(--accent-gold);
          background: var(--bg-secondary);
          text-align: center;
        }
        .contrib-cta-title {
          font-family: var(--font-pixel);
          font-size: 0.7rem;
          font-weight: 400;
          color: var(--text-primary);
          letter-spacing: 2px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }
        .contrib-cta-buttons {
          display: flex;
          gap: 2px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .contrib-cta-btn {
          display: inline-flex;
          align-items: center;
          padding: 14px 32px;
          background: var(--bg-btn);
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 120ms;
          white-space: nowrap;
        }
        .contrib-cta-btn:hover { background: var(--bg-btn-hover); }
        @media (max-width: 640px) {
          .contrib-container { padding: 48px 16px 64px; }
          .contrib-section-body { padding: 16px; }
          .contrib-cta-buttons { flex-direction: column; }
          .contrib-cta-btn { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="contrib-container">
        <h1 className="contrib-page-title">
          {zh ? '贡献一个老板' : 'CONTRIBUTE A BOSS'}
        </h1>
        <p className="contrib-page-subtitle">
          {zh
            ? '认识一种我们还没收录的讨厌老板类型？帮我们把他捕获。'
            : "Know a terrible boss archetype we're missing? Help us capture them."}
        </p>

        {/* How It Works */}
        <div className="contrib-section">
          <div className="contrib-section-title">
            {zh ? '如何贡献' : 'HOW IT WORKS'}
          </div>
          <div className="contrib-section-body">
            <p style={{ marginBottom: '16px' }}>
              {zh ? '贡献一个老板技能非常简单，按以下步骤操作：' : 'Contributing a boss skill is straightforward. Follow these steps:'}
            </p>
            <ol className="contrib-step-list">
              {zh ? (
                <>
                  <li><strong>在 GitHub 上 Fork 仓库</strong> — 获取你自己的副本 <code>github.com/KongZhen/boss-skills</code></li>
                  <li><strong>创建新目录：</strong><code>skills/boss.your-boss-name/</code></li>
                  <li><strong>编写 <code>skill.yaml</code></strong> — 元数据、模式、输入/输出</li>
                  <li><strong>编写角色：</strong><code>SKILL.en.md</code> 和 <code>SKILL.zh-CN.md</code> — 老板性格定义</li>
                  <li><strong>添加示例：</strong>创建 <code>examples/</code> 目录并写入使用示例</li>
                  <li><strong>提交 PR</strong> — 我们会审核并在符合标准时合并</li>
                </>
              ) : (
                <>
                  <li><strong>Fork the repo on GitHub</strong> — Get your own copy at <code>github.com/KongZhen/boss-skills</code></li>
                  <li><strong>Create a new directory:</strong> <code>skills/boss.your-boss-name/</code></li>
                  <li><strong>Write <code>skill.yaml</code></strong> — Metadata, modes, inputs/outputs</li>
                  <li><strong>Write personas:</strong> <code>SKILL.en.md</code> and <code>SKILL.zh-CN.md</code></li>
                  <li><strong>Add examples:</strong> Create <code>examples/</code> directory with usage examples</li>
                  <li><strong>Submit a PR</strong> — We'll review and merge if it meets our standards</li>
                </>
              )}
            </ol>
          </div>
        </div>

        {/* File Structure */}
        <div className="contrib-section">
          <div className="contrib-section-title">
            {zh ? '文件结构' : 'SKILL STRUCTURE'}
          </div>
          <div className="contrib-section-body">
            <p style={{ marginBottom: '12px' }}>
              {zh ? '每个技能遵循以下目录结构：' : 'Every skill follows this directory structure:'}
            </p>
            <pre className="contrib-code">{`skills/boss.your-boss/
├── skill.yaml          # Metadata
├── SKILL.en.md         # English persona
├── SKILL.zh-CN.md      # Chinese persona
├── assistant.json      # OpenAI format
└── examples/
    ├── examples.en.md
    └── examples.zh-CN.md`}</pre>
          </div>
        </div>

        {/* Style Guide */}
        <div className="contrib-section">
          <div className="contrib-section-title">
            {zh ? '风格指南' : 'CONTENT STYLE GUIDE'}
          </div>
          <div className="contrib-section-body">
            <p style={{ marginBottom: '12px' }}>
              {zh
                ? <>好的老板技能是可识别的、有趣的，并以<span className="contrib-highlight">正确的方式</span>刻薄。遵循以下原则：</>
                : <>Great boss skills are recognizable, funny, and mean-spirited in <span className="contrib-highlight">the right way</span>. Follow these principles:</>}
            </p>
            <ul className="contrib-plain-list">
              {zh ? (
                <>
                  <li><strong>讽刺行为，不是人</strong> — 攻击模式和失能，不攻击身份</li>
                  <li><strong>可识别但不恶意</strong> — 让人在认出时发笑，而不是不适</li>
                  <li><strong>定义核心信念</strong> — 每个老板需要一个驱动其所有行为的核心幻觉</li>
                  <li><strong>包含可引用的台词</strong> — 让人能认出并分享的经典语录</li>
                  <li><strong>原生语言质量</strong> — EN 和 ZH-CN 都应该感觉自然，不像翻译</li>
                  <li><strong>各模式保持一致性</strong> — 你的老板在 1:1、会议、绩效评估中应该听起来像同一个人</li>
                </>
              ) : (
                <>
                  <li><strong>Satirize the behavior, not the person</strong> — Attack patterns and dysfunction, not identity</li>
                  <li><strong>Be recognizable but not mean</strong> — People should laugh in recognition, not cringe</li>
                  <li><strong>Define a core belief</strong> — Each boss needs one central delusion that drives all their behavior</li>
                  <li><strong>Include quotable lines</strong> — Create lines people will recognize and share</li>
                  <li><strong>Native language quality</strong> — Both EN and ZH-CN should feel natural, not translated</li>
                  <li><strong>Consistency across modes</strong> — Your boss should sound like themselves in any scenario</li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* What We Don't Accept */}
        <div className="contrib-section">
          <div className="contrib-section-title">
            {zh ? '我们不接受什么' : "WHAT WE DON'T ACCEPT"}
          </div>
          <div className="contrib-section-body">
            <p style={{ marginBottom: '12px' }}>
              {zh
                ? '为保持伦理标准并让这个项目有趣而不有害，我们拒绝以下技能：'
                : "To maintain ethical standards and keep this fun, we reject skills that:"}
            </p>
            <ul className="contrib-warning-list">
              {zh ? (
                <>
                  <li><strong>针对真实人物</strong> — 不接受基于或引用真实个人的技能</li>
                  <li><strong>包含歧视性内容</strong> — 无种族主义、性别歧视、残障歧视等</li>
                  <li><strong>宣扬真实职场伤害</strong> — 我们讽刺失能，但不美化虐待</li>
                  <li><strong>低质量梗图提交</strong> — 老板技能需要结构、模式和深度</li>
                  <li><strong>非法或危险内容</strong> — 不美化骚扰、暴力或违法行为</li>
                </>
              ) : (
                <>
                  <li><strong>Target real people</strong> — No skills based on or referencing actual individuals</li>
                  <li><strong>Include discriminatory content</strong> — No racism, sexism, ableism, or other -isms</li>
                  <li><strong>Promote actual workplace harm</strong> — We satirize dysfunction, we don't normalize abuse</li>
                  <li><strong>Low-effort meme submissions</strong> — Boss skills need structure, modes, and depth</li>
                  <li><strong>Illegal or genuinely dangerous content</strong> — No skills glorifying harassment or violence</li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="contrib-cta">
          <p className="contrib-cta-title">
            {zh ? '准备好贡献了吗？' : 'READY TO CONTRIBUTE?'}
          </p>
          <div className="contrib-cta-buttons">
            <a href="https://github.com/KongZhen/boss-skills" target="_blank" rel="noopener noreferrer" className="contrib-cta-btn">
              {zh ? '→ 在 GitHub 贡献' : '→ Contribute on GitHub'}
            </a>
            <a href="/skills" className="contrib-cta-btn">
              {zh ? '← 查看现有技能' : '← View Existing Skills'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
