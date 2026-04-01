'use client';

export default function ContributePage() {
  return (
    <div>
        <style>{`
          .page-container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 60px 20px;
          }

          .page-title {
            font-size: clamp(2rem, 8vw, 3.5rem);
            font-family: monospace;
            font-weight: bold;
            letter-spacing: 3px;
            text-align: center;
            color: #f0f6f7;
            margin-bottom: 12px;
            text-shadow: 3px 3px 0px rgba(137, 174, 200, 0.3);
          }

          .page-subtitle {
            font-size: 0.95rem;
            text-align: center;
            color: #89aec8;
            font-family: monospace;
            margin-bottom: 60px;
            letter-spacing: 1px;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
          }

          .section-container {
            margin-bottom: 50px;
          }

          .section-title {
            font-size: 1.5rem;
            font-family: monospace;
            font-weight: bold;
            color: #f0f6f7;
            letter-spacing: 2px;
            margin-bottom: 20px;
            padding: 16px;
            border: 3px solid #89aec8;
            background: rgba(137, 174, 200, 0.1);
            text-transform: uppercase;
          }

          .section-content {
            padding: 20px;
            border: 2px solid #89aec8;
            background: rgba(0, 44, 85, 0.4);
            line-height: 1.8;
            font-size: 0.95rem;
            color: #f0f6f7;
          }

          .content-block {
            margin-bottom: 16px;
          }

          .content-block:last-child {
            margin-bottom: 0;
          }

          .highlight {
            color: #f0a000;
            font-weight: bold;
            font-family: monospace;
          }

          .step-list {
            list-style: none;
            padding: 0;
            margin: 16px 0;
          }

          .step-list li {
            padding: 12px;
            margin-bottom: 12px;
            border-left: 4px solid #f0a000;
            background: rgba(240, 160, 0, 0.05);
            font-family: monospace;
            font-size: 0.9rem;
            counter-increment: step-counter;
          }

          .step-list {
            counter-reset: step-counter;
          }

          .step-list li:before {
            content: counter(step-counter) '. ';
            color: #f0a000;
            font-weight: bold;
            margin-right: 8px;
          }

          .code-block {
            background: rgba(0, 0, 0, 0.4);
            border: 2px solid #89aec8;
            padding: 16px;
            margin: 16px 0;
            font-family: monospace;
            font-size: 0.85rem;
            overflow-x: auto;
            color: #89aec8;
            line-height: 1.6;
          }

          .principle-list {
            list-style: none;
            padding: 0;
            margin: 16px 0;
          }

          .principle-list li {
            padding: 12px;
            margin-bottom: 8px;
            border-left: 4px solid #89aec8;
            background: rgba(137, 174, 200, 0.05);
            font-family: monospace;
            font-size: 0.9rem;
          }

          .principle-list li:before {
            content: '▸ ';
            color: #89aec8;
            font-weight: bold;
          }

          .warning-list {
            list-style: none;
            padding: 0;
            margin: 16px 0;
          }

          .warning-list li {
            padding: 12px;
            margin-bottom: 8px;
            border-left: 4px solid #ff6b6b;
            background: rgba(255, 107, 107, 0.05);
            font-family: monospace;
            font-size: 0.9rem;
          }

          .warning-list li:before {
            content: '✗ ';
            color: #ff6b6b;
            font-weight: bold;
          }

          .cta-section {
            margin-top: 60px;
            padding: 30px;
            border: 4px solid #f0a000;
            background: rgba(0, 44, 85, 0.5);
            text-align: center;
          }

          .cta-title {
            font-size: 1.25rem;
            font-family: monospace;
            font-weight: bold;
            color: #f0f6f7;
            letter-spacing: 2px;
            margin-bottom: 20px;
            text-transform: uppercase;
          }

          .cta-buttons {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .cta-button {
            display: inline-block;
            padding: 12px 24px;
            background: #89aec8;
            border: 3px solid #f0f6f7;
            color: #002c55;
            font-family: monospace;
            font-weight: bold;
            font-size: 0.85rem;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.2s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .cta-button:hover {
            background: #f0f6f7;
            transform: translate(-2px, -2px);
            box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5);
          }

          .cta-button.secondary {
            background: transparent;
            border-color: #89aec8;
            color: #89aec8;
          }

          .cta-button.secondary:hover {
            background: #89aec8;
            color: #002c55;
          }

          @media (max-width: 640px) {
            .page-container {
              padding: 40px 16px;
            }

            .page-title {
              font-size: 1.75rem;
            }

            .section-title {
              font-size: 1.25rem;
            }

            .cta-buttons {
              flex-direction: column;
            }

            .cta-button {
              width: 100%;
            }
          }
        `}</style>

        <div className="page-container">
          {/* Title */}
          <h1 className="page-title">CONTRIBUTE A BOSS / 贡献一个老板</h1>
          <p className="page-subtitle">
            Know a terrible boss archetype we're missing? Help us capture them. / 认识一种我们还没收录的讨厌老板类型？帮我们抓住他。
          </p>

          {/* How It Works Section */}
          <div className="section-container">
            <div className="section-title">How It Works / 怎么贡献</div>
            <div className="section-content">
              <p style={{ marginBottom: '16px' }}>
                Contributing a boss skill is straightforward. Follow these steps:
              </p>
              <ol className="step-list">
                <li>
                  <strong>Fork the repo on GitHub</strong> — Get your own copy at{' '}
                  <code>github.com/anthropics/boss-skills</code>
                </li>
                <li>
                  <strong>Create a new directory:</strong> <code>skills/boss.your-boss-name/</code>
                </li>
                <li>
                  <strong>Write <code>skill.yaml</code></strong> — Metadata, modes, inputs/outputs
                </li>
                <li>
                  <strong>Write personas:</strong> <code>SKILL.en.md</code> and <code>SKILL.zh-CN.md</code> — The boss personality definition
                </li>
                <li>
                  <strong>Add examples:</strong> Create <code>examples/</code> directory with usage examples
                </li>
                <li>
                  <strong>Submit a PR</strong> — We'll review and merge if it meets our standards
                </li>
              </ol>
            </div>
          </div>

          {/* Skill Structure Section */}
          <div className="section-container">
            <div className="section-title">Skill Structure / 文件结构</div>
            <div className="section-content">
              <p style={{ marginBottom: '12px' }}>
                Every skill follows this directory structure:
              </p>
              <div className="code-block">
{`skills/boss.your-boss/
├── skill.yaml          # Metadata
├── SKILL.en.md         # English persona
├── SKILL.zh-CN.md      # Chinese persona
├── assistant.json      # OpenAI format
└── examples/
    ├── examples.en.md
    └── examples.zh-CN.md`}
              </div>
              <p style={{ marginTop: '16px', fontSize: '0.9rem' }}>
                See existing skills in the <code>skills/</code> directory for complete examples.
              </p>
            </div>
          </div>

          {/* Content Style Guide Section */}
          <div className="section-container">
            <div className="section-title">Content Style Guide / 风格指南</div>
            <div className="section-content">
              <p style={{ marginBottom: '12px' }}>
                Great boss skills are recognizable, funny, and mean-spirited in <span className="highlight">the right way</span>.
                Follow these principles:
              </p>
              <ul className="principle-list">
                <li>
                  <strong>Satirize the behavior, not the person</strong> — Attack patterns and dysfunction, not identity
                </li>
                <li>
                  <strong>Be recognizable but not mean</strong> — People should laugh in recognition, not cringe in discomfort
                </li>
                <li>
                  <strong>Define a core belief</strong> — Each boss needs one central delusion that drives all their behavior
                </li>
                <li>
                  <strong>Include quotable lines</strong> — Create lines people will recognize and share. "Actually, let's go back to the original approach" should sting a little
                </li>
                <li>
                  <strong>Native language quality</strong> — Both EN and ZH-CN should feel natural, not translated. Native speakers should not notice the translation effort.
                </li>
                <li>
                  <strong>Consistency across modes</strong> — Your boss should sound like themselves whether in a 1:1, a meeting, a review, or an escalation
                </li>
              </ul>
            </div>
          </div>

          {/* What We Don't Accept Section */}
          <div className="section-container">
            <div className="section-title">What We Don't Accept / 我们不接受</div>
            <div className="section-content">
              <p style={{ marginBottom: '12px' }}>
                To maintain ethical standards and keep this fun (not harmful), we reject skills that:
              </p>
              <ul className="warning-list">
                <li>
                  <strong>Target real people</strong> — No skills based on or referencing actual individuals
                </li>
                <li>
                  <strong>Include discriminatory content</strong> — No racism, sexism, ableism, or other -isms
                </li>
                <li>
                  <strong>Promote actual workplace harm</strong> — We satirize dysfunction, we don't normalize abuse
                </li>
                <li>
                  <strong>Low-effort meme submissions</strong> — Boss skills need structure, modes, and depth
                </li>
                <li>
                  <strong>Illegal or genuinely dangerous content</strong> — No skills that glorify harassment, violence, or illegal activity
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <p className="cta-title">Ready to Contribute?</p>
            <div className="cta-buttons">
              <a href="https://github.com/anthropics/boss-skills" target="_blank" rel="noopener noreferrer" className="cta-button">
                → Contribute on GitHub
              </a>
              <a href="/" className="cta-button secondary">
                ← View Existing Skills
              </a>
            </div>
          </div>
        </div>
    </div>
  );
}
