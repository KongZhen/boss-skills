'use client';

export default function AboutPage() {
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
            font-size: 1rem;
            text-align: center;
            color: #89aec8;
            font-family: monospace;
            margin-bottom: 60px;
            letter-spacing: 1px;
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

          .section-subtitle {
            font-size: 0.95rem;
            color: #89aec8;
            font-family: monospace;
            margin-bottom: 16px;
            letter-spacing: 1px;
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

          .principle-list {
            list-style: none;
            padding: 0;
            margin: 16px 0;
          }

          .principle-list li {
            padding: 12px;
            margin-bottom: 8px;
            border-left: 4px solid #f0a000;
            background: rgba(240, 160, 0, 0.05);
            font-family: monospace;
            font-size: 0.9rem;
          }

          .principle-list li:before {
            content: '▸ ';
            color: #f0a000;
            font-weight: bold;
          }

          .cta-container {
            text-align: center;
            margin-top: 50px;
            padding: 30px;
            border: 4px solid #f0a000;
            background: rgba(0, 44, 85, 0.5);
          }

          .cta-text {
            font-size: 1rem;
            color: #f0f6f7;
            margin-bottom: 20px;
            font-family: monospace;
            letter-spacing: 1px;
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

            .section-content {
              font-size: 0.875rem;
            }
          }
        `}</style>

        <div className="page-container">
          {/* Title */}
          <h1 className="page-title">ABOUT / 关于</h1>
          <p className="page-subtitle">Workplace Satire Through AI</p>

          {/* What Is This Section */}
          <div className="section-container">
            <div className="section-title">What Is This? / 这是什么？</div>
            <div className="section-content">
              <div className="content-block">
                <p>
                  <span className="highlight">Boss Skills</span> is an open-source collection of satirical AI boss personas. We've packaged annoying workplace boss personalities into reusable AI skills that you can deploy, test, and laugh at.
                </p>
              </div>
              <div className="content-block">
                <p>
                  Each skill is a carefully crafted fictionalized boss archetype: the micromanager who monitors every keystroke, the passive-aggressive queen of subtle sabotage, the promise-maker who delivers nothing, and many more.
                </p>
              </div>
              <div className="content-block">
                <p>
                  <span className="highlight">内容戏谑，工程严肃。</span> Our content is satirical, but our engineering is serious. These are production-quality skills built to specification.
                </p>
              </div>
            </div>
          </div>

          {/* Why Section */}
          <div className="section-container">
            <div className="section-title">Why? / 为什么？</div>
            <div className="section-content">
              <div className="content-block">
                <p>
                  Everyone has had <span className="highlight">That Boss</span>. The one who micromanages. The one who promises everything and delivers nothing. The one who takes credit for your work while assigning blame.
                </p>
              </div>
              <div className="content-block">
                <p>
                  我们都有一个"那个老板"。而不是继续忍受，我们决定把他们变成AI。这样你可以先让AI体验一遍那种感受，然后一起笑。
                </p>
              </div>
              <div className="content-block">
                <p>Perfect for:</p>
                <ul className="principle-list">
                  <li>Testing AI agents under annoying, realistic conditions</li>
                  <li>Adding workplace humor to your demos and presentations</li>
                  <li>Stress-testing your patience (and your team's sense of humor)</li>
                  <li>Learning what NOT to do as a manager</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Engineering Principles Section */}
          <div className="section-container">
            <div className="section-title">Engineering Principles / 工程原则</div>
            <div className="section-content">
              <ul className="principle-list">
                <li>
                  <strong>Anthropic Skill Standard Compliant</strong> — Built to the specification of Anthropic's skill standard for interoperability
                </li>
                <li>
                  <strong>Bilingual (EN/中文)</strong> — Native-quality content in both English and Simplified Chinese, not machine-translated
                </li>
                <li>
                  <strong>Schema-Validated, Fully Tested</strong> — Every skill passes validation and includes test suites
                </li>
                <li>
                  <strong>Multi-Platform Compatible</strong> — Works with Claude Code, OpenAI Assistants, and other skill-compatible platforms
                </li>
                <li>
                  <strong>Deterministic Output</strong> — No LLM API calls. Pure logic and templates for predictable behavior
                </li>
                <li>
                  <strong>Open Source</strong> — MIT licensed. Contribute, fork, remix, extend.
                </li>
              </ul>
            </div>
          </div>

          {/* Content Boundaries Section */}
          <div className="section-container">
            <div className="section-title">Content Boundaries / 内容边界</div>
            <div className="section-content">
              <div className="content-block">
                <p>
                  We take satire seriously. Here's what we will and won't do:
                </p>
              </div>
              <ul className="principle-list">
                <li>
                  <strong>All personas are fictional archetypes</strong> — Not based on, and not targeting, any real person or group
                </li>
                <li>
                  <strong>No discrimination or harassment</strong> — We satirize behavior patterns and management dysfunction, not protected characteristics
                </li>
                <li>
                  <strong>Humor comes from absurdity, not cruelty</strong> — We punch at workplace systems and universal boss behaviors, not down at vulnerable groups
                </li>
                <li>
                  <strong>Recognizable but not mean-spirited</strong> — The goal is catharsis and shared recognition, not actual harm
                </li>
              </ul>
              <div className="content-block" style={{ marginTop: '20px' }}>
                <p>
                  We're satirizing the absurdities of workplace dynamics, not actual human beings. If a skill crosses this line, we'll remove it.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-container">
            <p className="cta-text">
              Ready to experience workplace dysfunction without the existential dread?
            </p>
            <a href="https://github.com/anthropics/boss-skills" className="cta-button">
              → View on GitHub
            </a>
          </div>
        </div>
    </div>
  );
}
