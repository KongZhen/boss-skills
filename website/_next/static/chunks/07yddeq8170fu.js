(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,69687,e=>{"use strict";var t=e.i(43476),s=e.i(71645),n=e.i(2971),i=e.i(13642);e.s(["default",0,function(){let[e,o]=(0,s.useState)("en");return(0,t.jsxs)("div",{className:"bg-marine text-frost min-h-screen flex flex-col",children:[(0,t.jsx)(n.Header,{locale:e,onLocaleChange:o}),(0,t.jsxs)("main",{className:"flex-grow",children:[(0,t.jsx)("style",{children:`
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
        `}),(0,t.jsxs)("div",{className:"page-container",children:[(0,t.jsx)("h1",{className:"page-title",children:"CONTRIBUTE A BOSS / 贡献一个老板"}),(0,t.jsx)("p",{className:"page-subtitle",children:"Know a terrible boss archetype we're missing? Help us capture them. / 认识一种我们还没收录的讨厌老板类型？帮我们抓住他。"}),(0,t.jsxs)("div",{className:"section-container",children:[(0,t.jsx)("div",{className:"section-title",children:"How It Works / 怎么贡献"}),(0,t.jsxs)("div",{className:"section-content",children:[(0,t.jsx)("p",{style:{marginBottom:"16px"},children:"Contributing a boss skill is straightforward. Follow these steps:"}),(0,t.jsxs)("ol",{className:"step-list",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Fork the repo on GitHub"})," — Get your own copy at"," ",(0,t.jsx)("code",{children:"github.com/anthropics/boss-skills"})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Create a new directory:"})," ",(0,t.jsx)("code",{children:"skills/boss.your-boss-name/"})]}),(0,t.jsxs)("li",{children:[(0,t.jsxs)("strong",{children:["Write ",(0,t.jsx)("code",{children:"skill.yaml"})]})," — Metadata, modes, inputs/outputs"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Write personas:"})," ",(0,t.jsx)("code",{children:"SKILL.en.md"})," and ",(0,t.jsx)("code",{children:"SKILL.zh-CN.md"})," — The boss personality definition"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Add examples:"})," Create ",(0,t.jsx)("code",{children:"examples/"})," directory with usage examples"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Submit a PR"})," — We'll review and merge if it meets our standards"]})]})]})]}),(0,t.jsxs)("div",{className:"section-container",children:[(0,t.jsx)("div",{className:"section-title",children:"Skill Structure / 文件结构"}),(0,t.jsxs)("div",{className:"section-content",children:[(0,t.jsx)("p",{style:{marginBottom:"12px"},children:"Every skill follows this directory structure:"}),(0,t.jsx)("div",{className:"code-block",children:`skills/boss.your-boss/
├── skill.yaml          # Metadata
├── SKILL.en.md         # English persona
├── SKILL.zh-CN.md      # Chinese persona
├── assistant.json      # OpenAI format
└── examples/
    ├── examples.en.md
    └── examples.zh-CN.md`}),(0,t.jsxs)("p",{style:{marginTop:"16px",fontSize:"0.9rem"},children:["See existing skills in the ",(0,t.jsx)("code",{children:"skills/"})," directory for complete examples."]})]})]}),(0,t.jsxs)("div",{className:"section-container",children:[(0,t.jsx)("div",{className:"section-title",children:"Content Style Guide / 风格指南"}),(0,t.jsxs)("div",{className:"section-content",children:[(0,t.jsxs)("p",{style:{marginBottom:"12px"},children:["Great boss skills are recognizable, funny, and mean-spirited in ",(0,t.jsx)("span",{className:"highlight",children:"the right way"}),". Follow these principles:"]}),(0,t.jsxs)("ul",{className:"principle-list",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Satirize the behavior, not the person"})," — Attack patterns and dysfunction, not identity"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Be recognizable but not mean"})," — People should laugh in recognition, not cringe in discomfort"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Define a core belief"})," — Each boss needs one central delusion that drives all their behavior"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Include quotable lines"}),' — Create lines people will recognize and share. "Actually, let\'s go back to the original approach" should sting a little']}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Native language quality"})," — Both EN and ZH-CN should feel natural, not translated. Native speakers should not notice the translation effort."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Consistency across modes"})," — Your boss should sound like themselves whether in a 1:1, a meeting, a review, or an escalation"]})]})]})]}),(0,t.jsxs)("div",{className:"section-container",children:[(0,t.jsx)("div",{className:"section-title",children:"What We Don't Accept / 我们不接受"}),(0,t.jsxs)("div",{className:"section-content",children:[(0,t.jsx)("p",{style:{marginBottom:"12px"},children:"To maintain ethical standards and keep this fun (not harmful), we reject skills that:"}),(0,t.jsxs)("ul",{className:"warning-list",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Target real people"})," — No skills based on or referencing actual individuals"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Include discriminatory content"})," — No racism, sexism, ableism, or other -isms"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Promote actual workplace harm"})," — We satirize dysfunction, we don't normalize abuse"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Low-effort meme submissions"})," — Boss skills need structure, modes, and depth"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Illegal or genuinely dangerous content"})," — No skills that glorify harassment, violence, or illegal activity"]})]})]})]}),(0,t.jsxs)("div",{className:"cta-section",children:[(0,t.jsx)("p",{className:"cta-title",children:"Ready to Contribute?"}),(0,t.jsxs)("div",{className:"cta-buttons",children:[(0,t.jsx)("a",{href:"https://github.com/anthropics/boss-skills",target:"_blank",rel:"noopener noreferrer",className:"cta-button",children:"→ Contribute on GitHub"}),(0,t.jsx)("a",{href:"/",className:"cta-button secondary",children:"← View Existing Skills"})]})]})]})]}),(0,t.jsx)(i.Footer,{locale:e})]})}])}]);