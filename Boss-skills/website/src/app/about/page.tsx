'use client';

import { useLocale } from '@/contexts/AppContext';

export default function AboutPage() {
  const { locale } = useLocale();
  const zh = locale === 'zh';

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <style>{`
        .about-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 72px 24px 96px;
        }
        .about-page-title {
          font-family: var(--font-pixel);
          font-size: clamp(1.5rem, 5vw, 2.5rem);
          font-weight: 400;
          letter-spacing: 3px;
          text-align: center;
          color: var(--text-primary);
          margin-bottom: 12px;
          text-transform: uppercase;
        }
        .about-page-subtitle {
          font-family: var(--font-body);
          font-size: 1rem;
          text-align: center;
          color: var(--text-secondary);
          margin-bottom: 72px;
          line-height: 1.6;
        }
        .about-section {
          margin-bottom: 48px;
        }
        .about-section-title {
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
          display: inline-block;
          width: 100%;
          box-sizing: border-box;
        }
        .about-section-body {
          padding: 24px;
          border: 1px solid var(--border-color);
          background: var(--bg-card);
          line-height: 1.8;
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-family: var(--font-body);
        }
        .about-highlight {
          color: var(--accent-gold);
          font-weight: 600;
        }
        .about-list {
          list-style: none;
          padding: 0;
          margin: 16px 0 0;
        }
        .about-list li {
          padding: 10px 12px;
          margin-bottom: 6px;
          border-left: 3px solid var(--accent-gold);
          background: rgba(200, 146, 42, 0.04);
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .about-list li::before {
          content: '▸ ';
          color: var(--accent-gold);
          font-weight: bold;
        }
        .about-divider {
          height: 1px;
          background: var(--border-color);
          margin: 8px 0 24px;
        }
        .about-cta {
          margin-top: 64px;
          padding: 32px;
          border: 1px solid var(--accent-gold);
          background: var(--bg-secondary);
          text-align: center;
        }
        .about-cta-title {
          font-family: var(--font-pixel);
          font-size: 0.7rem;
          font-weight: 400;
          color: var(--text-primary);
          letter-spacing: 2px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }
        .about-cta-btn {
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
        }
        .about-cta-btn:hover { background: var(--bg-btn-hover); }
        @media (max-width: 640px) {
          .about-container { padding: 48px 16px 64px; }
          .about-section-body { padding: 16px; }
        }
      `}</style>

      <div className="about-container">
        <h1 className="about-page-title">
          {zh ? '关于本项目' : 'ABOUT'}
        </h1>
        <p className="about-page-subtitle">
          {zh
            ? '用 AI 重新诠释职场荒诞'
            : 'Workplace Satire Through AI'}
        </p>

        {/* What Is This */}
        <div className="about-section">
          <div className="about-section-title">
            {zh ? '这是什么？' : 'WHAT IS THIS?'}
          </div>
          <div className="about-section-body">
            {zh ? (
              <>
                <p><span className="about-highlight">Boss Skills</span> 是一个开源的 AI 老板角色扮演库。我们把让人抓狂的职场老板原型打包成可复用的 AI 技能，供你部署、测试，或者就只是开心地嘲笑一下。</p>
                <div className="about-divider" />
                <p>每个技能都是一个精心设计的虚构老板原型：事无巨细的微观管理者、阴阳怪气的大师、画饼不兑现的空头支票老板……还有更多。</p>
                <div className="about-divider" />
                <p><span className="about-highlight">内容戏谑，工程严肃。</span> 内容是讽刺性的，但工程是认真的。每个技能都按规格构建，达到生产质量。</p>
              </>
            ) : (
              <>
                <p><span className="about-highlight">Boss Skills</span> is an open-source collection of satirical AI boss personas. We've packaged annoying workplace boss personalities into reusable AI skills that you can deploy, test, and laugh at.</p>
                <div className="about-divider" />
                <p>Each skill is a carefully crafted fictionalized boss archetype: the micromanager who monitors every keystroke, the passive-aggressive queen of subtle sabotage, the promise-maker who delivers nothing, and many more.</p>
                <div className="about-divider" />
                <p><span className="about-highlight">Satirical content, serious engineering.</span> Our content is satirical, but our engineering is serious. These are production-quality skills built to specification.</p>
              </>
            )}
          </div>
        </div>

        {/* Why */}
        <div className="about-section">
          <div className="about-section-title">
            {zh ? '为什么做这个？' : 'WHY?'}
          </div>
          <div className="about-section-body">
            {zh ? (
              <>
                <p>每个人都经历过<span className="about-highlight">那种老板</span>。事无巨细的那个，承诺一切却什么都不兑现的那个，把你的功劳揽走、把锅推给你的那个。</p>
                <div className="about-divider" />
                <p>我们决定不再忍受，而是把他们做成 AI。这样 AI 先体验一遍那种感受，然后我们一起嘲笑。</p>
                <ul className="about-list">
                  <li>在真实的烦人场景中测试 AI 智能体</li>
                  <li>在演示和展示中加入职场幽默</li>
                  <li>学习作为管理者不应该做什么</li>
                  <li>寻找共鸣和集体减压</li>
                </ul>
              </>
            ) : (
              <>
                <p>Everyone has had <span className="about-highlight">That Boss</span>. The one who micromanages. The one who promises everything and delivers nothing. The one who takes credit for your work while assigning blame.</p>
                <div className="about-divider" />
                <p>Instead of continuing to tolerate it, we turned them into AI. So you can watch an AI experience it first, then laugh together.</p>
                <ul className="about-list">
                  <li>Testing AI agents under annoying, realistic conditions</li>
                  <li>Adding workplace humor to demos and presentations</li>
                  <li>Learning what NOT to do as a manager</li>
                  <li>Finding recognition and collective relief</li>
                </ul>
              </>
            )}
          </div>
        </div>

        {/* Engineering Principles */}
        <div className="about-section">
          <div className="about-section-title">
            {zh ? '工程原则' : 'ENGINEERING PRINCIPLES'}
          </div>
          <div className="about-section-body">
            <ul className="about-list">
              {zh ? (
                <>
                  <li><strong>符合 Anthropic Skill 标准</strong> — 按规格构建，确保跨平台互通</li>
                  <li><strong>双语（EN / 中文）</strong> — 英文和简体中文都是原生质量内容，非机器翻译</li>
                  <li><strong>Schema 验证 + 完整测试</strong> — 每个技能通过验证并包含测试套件</li>
                  <li><strong>多平台兼容</strong> — 支持 Claude Code、OpenAI Assistants 等</li>
                  <li><strong>确定性输出</strong> — 纯逻辑与模板，无需 LLM API 调用</li>
                  <li><strong>开源</strong> — MIT 协议，可贡献、Fork、修改、扩展</li>
                </>
              ) : (
                <>
                  <li><strong>Anthropic Skill Standard Compliant</strong> — Built to spec for interoperability</li>
                  <li><strong>Bilingual (EN / ZH)</strong> — Native-quality content in both languages, not machine-translated</li>
                  <li><strong>Schema-Validated, Fully Tested</strong> — Every skill passes validation and includes test suites</li>
                  <li><strong>Multi-Platform Compatible</strong> — Works with Claude Code, OpenAI Assistants, and more</li>
                  <li><strong>Deterministic Output</strong> — Pure logic and templates, no LLM API calls</li>
                  <li><strong>Open Source</strong> — MIT licensed. Contribute, fork, remix, extend.</li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* Content Boundaries */}
        <div className="about-section">
          <div className="about-section-title">
            {zh ? '内容边界' : 'CONTENT BOUNDARIES'}
          </div>
          <div className="about-section-body">
            <p style={{ marginBottom: '16px' }}>
              {zh
                ? '我们认真对待讽刺。以下是我们会做和不会做的事：'
                : "We take satire seriously. Here's what we will and won't do:"}
            </p>
            <ul className="about-list">
              {zh ? (
                <>
                  <li><strong>所有角色均为虚构原型</strong> — 不针对任何真实个人或群体</li>
                  <li><strong>无歧视或骚扰内容</strong> — 我们讽刺行为模式和管理失能，不针对受保护特征</li>
                  <li><strong>幽默来自荒诞，不来自残忍</strong> — 我们的目标是释放和共鸣，不是真实伤害</li>
                  <li><strong>可识别但不恶意</strong> — 让人在认出时发笑，而不是不适</li>
                </>
              ) : (
                <>
                  <li><strong>All personas are fictional archetypes</strong> — Not based on or targeting any real person</li>
                  <li><strong>No discrimination or harassment</strong> — We satirize behavior patterns and dysfunction, not protected characteristics</li>
                  <li><strong>Humor from absurdity, not cruelty</strong> — We punch at workplace systems, not down at people</li>
                  <li><strong>Recognizable but not mean-spirited</strong> — The goal is catharsis and shared recognition, not harm</li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta">
          <p className="about-cta-title">
            {zh ? '准备好了吗？' : 'READY TO EXPLORE?'}
          </p>
          <a href="https://github.com/KongZhen/boss-skills" target="_blank" rel="noopener noreferrer" className="about-cta-btn">
            {zh ? '→ 在 GitHub 上查看' : '→ View on GitHub'}
          </a>
        </div>
      </div>
    </div>
  );
}
