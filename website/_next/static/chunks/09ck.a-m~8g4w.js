(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,4991,e=>{"use strict";var s=e.i(43476),n=e.i(22016);e.s(["default",0,function({variant:e="primary",children:i,onClick:t,href:a,className:o=""}){let r=`${{primary:"nes-btn is-primary",success:"nes-btn is-success",warning:"nes-btn is-warning",error:"nes-btn is-error"}[e]} ${o}`,l={fontFamily:"monospace",fontSize:"14px",fontWeight:"bold",imageRendering:"pixelated"};return a?(0,s.jsx)(n.default,{href:a,className:r,style:l,children:i}):(0,s.jsx)("button",{onClick:t,className:r,style:l,children:i})}])},47504,49947,e=>{"use strict";var s=e.i(43476);e.s(["default",0,function({en:e,cn:n,subtitle:i}){return(0,s.jsxs)("div",{className:"text-center mb-12",children:[(0,s.jsx)("style",{children:`
        .pixel-divider {
          display: inline-block;
          height: 4px;
          width: 120px;
          background: linear-gradient(to right,
            #89aec8 0%, #89aec8 20%,
            transparent 20%, transparent 40%,
            #89aec8 40%, #89aec8 60%,
            transparent 60%, transparent 80%,
            #89aec8 80%, #89aec8 100%);
          background-size: 100% 100%;
          margin: 16px auto;
          image-rendering: pixelated;
        }
      `}),(0,s.jsx)("h2",{className:"text-4xl font-bold text-frost mb-2",style:{fontFamily:"monospace",letterSpacing:"2px"},children:e}),(0,s.jsx)("p",{className:"text-lg text-slate",style:{fontFamily:"monospace",letterSpacing:"1px"},children:n}),(0,s.jsx)("div",{className:"pixel-divider"}),i&&(0,s.jsx)("p",{className:"text-sm text-slate mt-4 italic",children:i})]})}],47504);var n=e.i(22016);function i({level:e,label:n}){let t={mild:{width:25,color:"bg-green-500",label:"Mild"},moderate:{width:50,color:"bg-yellow-500",label:"Moderate"},high:{width:75,color:"bg-orange-500",label:"High"},"soul-crushing":{width:100,color:"bg-red-500",label:"Soul-Crushing"}}[e];return(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)("style",{children:`
        @keyframes fillBar {
          from {
            width: 0;
          }
          to {
            width: ${t.width}%;
          }
        }

        .annoyance-fill {
          animation: fillBar 0.6s ease-out forwards;
          image-rendering: pixelated;
        }

        .bar-container {
          border: 2px solid #f0f6f7;
          background: #1a1a1a;
          padding: 2px;
        }
      `}),n&&(0,s.jsx)("div",{className:"text-xs text-frost mb-1 font-bold",style:{fontFamily:"monospace"},children:n}),(0,s.jsx)("div",{className:"bar-container h-4 w-full",children:(0,s.jsx)("div",{className:`annoyance-fill h-full ${t.color}`,style:{width:0,animation:"fillBar 0.6s ease-out forwards"}})}),(0,s.jsx)("div",{className:"text-xs text-slate mt-1 text-right",style:{fontFamily:"monospace"},children:t.label})]})}e.s(["default",0,function({name:e,nameEn:t,nameCn:a,description:o,descriptionCn:r,oneLiner:l,oneLineCn:c,annoyanceLevel:d,slug:p,locale:m="en"}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("style",{children:`
        .boss-card {
          border: 4px solid #89aec8;
          background: #002c55;
          padding: 16px;
          cursor: pointer;
          transition: all 0.2s ease;
          image-rendering: pixelated;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .boss-card:hover {
          border-color: #f0f6f7;
          box-shadow: 0 0 12px rgba(240, 246, 247, 0.3), inset 0 0 12px rgba(240, 246, 247, 0.1);
          transform: translateY(-2px);
        }

        .boss-card:active {
          transform: translateY(0);
          box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3);
        }

        .boss-avatar {
          width: 100%;
          height: 80px;
          background: linear-gradient(135deg, #004a8a 0%, #001f3f 100%);
          border: 2px solid #89aec8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: bold;
          color: #f0f6f7;
          font-family: monospace;
        }

        .boss-name {
          font-size: 14px;
          font-weight: bold;
          color: #f0f6f7;
          font-family: monospace;
          letter-spacing: 1px;
          margin: 0;
        }

        .boss-subtitle {
          font-size: 10px;
          color: #89aec8;
          font-family: monospace;
          margin: 0 0 8px 0;
        }

        .boss-description {
          font-size: 11px;
          color: #89aec8;
          font-family: monospace;
          line-height: 1.3;
          margin: 0 0 8px 0;
          flex: 1;
        }

        .boss-one-liner {
          font-size: 10px;
          color: #f0f6f7;
          font-family: monospace;
          font-style: italic;
          margin: 8px 0;
          border-left: 2px solid #f0a000;
          padding-left: 8px;
        }

        .boss-select-btn {
          background: #002c55;
          border: 2px solid #f0a000;
          color: #f0f6f7;
          padding: 6px 12px;
          font-size: 11px;
          font-weight: bold;
          font-family: monospace;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          display: block;
          text-align: center;
        }

        .boss-select-btn:hover {
          background: #f0a000;
          color: #002c55;
          box-shadow: 0 0 8px rgba(240, 160, 0, 0.5);
        }

        .boss-select-btn:active {
          transform: inset;
        }
      `}),(0,s.jsxs)(n.default,{href:`/skills/${p}`,className:"boss-card",children:[(0,s.jsx)("div",{className:"boss-avatar",children:"👔"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"boss-name",children:"en"===m?t:a}),(0,s.jsx)("p",{className:"boss-subtitle",children:"cn"===m?a:t}),(0,s.jsx)("p",{className:"boss-description",children:"en"===m?o:r||o}),(0,s.jsxs)("p",{className:"boss-one-liner",children:['"',"en"===m?l:c||l,'"']})]}),(0,s.jsx)(i,{level:d}),(0,s.jsx)("div",{className:"boss-select-btn",children:"► SELECT ◄"})]})]})}],49947)},52683,e=>{"use strict";var s=e.i(43476),n=e.i(4991),i=e.i(47504),t=e.i(49947);function a(){return(0,s.jsxs)("div",{className:"w-full flex justify-center py-12 px-4",children:[(0,s.jsx)("style",{children:`
        .office-scene {
          display: inline-block;
          position: relative;
          width: 320px;
          height: 240px;
          background: linear-gradient(180deg, #004e8a 0%, #002c55 100%);
          image-rendering: pixelated;
          border: 4px solid #f0f6f7;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }

        /* Desk */
        .desk {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          width: 160px;
          height: 60px;
          background: #8B4513;
          border: 3px solid #5a2d0c;
          border-top: 6px solid #a0522d;
        }

        .desk::before {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 10px;
          width: 12px;
          height: 20px;
          background: #654321;
          border: 1px solid #3e2723;
        }

        .desk::after {
          content: '';
          position: absolute;
          bottom: -20px;
          right: 10px;
          width: 12px;
          height: 20px;
          background: #654321;
          border: 1px solid #3e2723;
        }

        /* Desk surface items */
        .desk-lamp {
          position: absolute;
          top: -30px;
          right: 20px;
          width: 12px;
          height: 8px;
          background: #ffd700;
          border-radius: 0;
          box-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
        }

        .desk-lamp::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 2px;
          width: 8px;
          height: 8px;
          background: #333;
          border: 1px solid #555;
        }

        .coffee-mug {
          position: absolute;
          top: -20px;
          left: 30px;
          width: 16px;
          height: 16px;
          background: #8b4513;
          border: 2px solid #5a2d0c;
          border-radius: 0;
        }

        .coffee-mug::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 3px;
          width: 6px;
          height: 10px;
          border: 2px solid #5a2d0c;
          border-left: none;
        }

        /* Nameplate */
        .nameplate {
          position: absolute;
          top: -28px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 12px;
          background: #444;
          border: 2px solid #222;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8px;
          color: #ffd700;
          font-weight: bold;
          font-family: monospace;
          letter-spacing: 1px;
        }

        /* Boss character */
        .boss-char {
          position: absolute;
          bottom: 100px;
          left: 50%;
          transform: translateX(-50%);
          width: 32px;
          height: 48px;
        }

        /* Boss head */
        .boss-head {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          background: #d4a574;
          border: 2px solid #8b6f47;
        }

        /* Boss eyes - blink animation */
        .boss-eyes {
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          height: 4px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .eye {
          width: 2px;
          height: 2px;
          background: #000;
          animation: blink 3s infinite;
        }

        .eye:last-child {
          animation-delay: 0s;
        }

        @keyframes blink {
          0%, 10%, 15%, 100% {
            opacity: 1;
            height: 2px;
          }
          11%, 14% {
            opacity: 1;
            height: 0px;
          }
        }

        /* Boss suit */
        .boss-suit {
          position: absolute;
          top: 22px;
          left: 50%;
          transform: translateX(-50%);
          width: 24px;
          height: 22px;
          background: #1a1a1a;
          border: 2px solid #0a0a0a;
        }

        .boss-suit::before {
          content: '';
          position: absolute;
          top: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 4px;
          background: #c0c0c0;
          border: 1px solid #808080;
        }

        /* Boss arms */
        .boss-arms {
          position: absolute;
          top: 28px;
          left: 2px;
          display: flex;
          gap: 20px;
          width: 28px;
        }

        .arm {
          width: 4px;
          height: 12px;
          background: #d4a574;
          border: 1px solid #8b6f47;
        }

        .arm.typing {
          animation: armType 0.6s ease-in-out infinite;
        }

        @keyframes armType {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        /* Fingers */
        .finger {
          position: absolute;
          width: 2px;
          height: 3px;
          background: #d4a574;
        }

        /* Chair back */
        .chair-back {
          position: absolute;
          bottom: 45px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 30px;
          background: #333;
          border: 2px solid #111;
          border-radius: 0;
        }

        .chair-back::before {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 28px;
          height: 8px;
          background: #222;
          border: 2px solid #111;
        }

        /* Grid pattern background */
        .grid-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 30%;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
          background-position: 0 0;
        }

        /* Responsive scaling */
        @media (max-width: 640px) {
          .office-scene {
            width: 240px;
            height: 180px;
            transform: scale(0.85);
            transform-origin: center;
          }
        }
      `}),(0,s.jsxs)("div",{className:"office-scene",children:[(0,s.jsx)("div",{className:"grid-pattern"}),(0,s.jsxs)("div",{className:"boss-char",children:[(0,s.jsx)("div",{className:"boss-head",children:(0,s.jsxs)("div",{className:"boss-eyes",children:[(0,s.jsx)("div",{className:"eye"}),(0,s.jsx)("div",{className:"eye"})]})}),(0,s.jsx)("div",{className:"boss-suit",children:(0,s.jsx)("div",{className:"boss-suit::before"})}),(0,s.jsxs)("div",{className:"boss-arms",children:[(0,s.jsx)("div",{className:"arm typing",style:{animationDelay:"0s"}}),(0,s.jsx)("div",{className:"arm typing",style:{animationDelay:"0.3s"}})]})]}),(0,s.jsx)("div",{className:"chair-back"}),(0,s.jsxs)("div",{className:"desk",children:[(0,s.jsx)("div",{className:"desk-lamp"}),(0,s.jsx)("div",{className:"coffee-mug"}),(0,s.jsx)("div",{className:"nameplate",children:"THE BOSS"})]})]})]})}let o=[{slug:"micromanager",nameEn:"Micromanager",nameCn:"事无巨细型",descriptionEn:"Monitors every keystroke, every email, every breath.",descriptionCn:"监控每一次按键，每一封邮件，每一次呼吸。",oneLinEn:'"Have you considered using Arial instead of Calibri?"',oneLinCn:'"你有没有考虑用Arial而不是Calibri？"',annoyanceLevel:"soul-crushing",emoji:"👁️"},{slug:"passive-aggressive",nameEn:"Passive-Aggressive",nameCn:"阴阳怪气型",descriptionEn:"Never says what they mean. Means everything they say.",descriptionCn:"从不直说。却句句有意。",oneLinEn:'"That\'s... interesting. Not what I expected, but interesting."',oneLinCn:'"这个...很有趣。不是我预期的那样，但很有趣。"',annoyanceLevel:"soul-crushing",emoji:"😏"},{slug:"empty-promises",nameEn:"Empty Promises",nameCn:"画饼型",descriptionEn:"Tomorrow, next quarter, after the restructure...",descriptionCn:"明天，下个季度，重组之后...",oneLinEn:'"We\'ll definitely revisit this in the next cycle."',oneLinCn:'"下个周期我们一定会重新考虑这个。"',annoyanceLevel:"moderate",emoji:"🥧"},{slug:"flip-flopper",nameEn:"Flip-Flopper",nameCn:"反复横跳型",descriptionEn:"Changed mind 5 times before your coffee cooled.",descriptionCn:"在你咖啡冷掉前已经改变五次想法。",oneLinEn:'"Actually, let\'s go back to the original approach."',oneLinCn:'"实际上，我们还是回到原来的方案吧。"',annoyanceLevel:"high",emoji:"🔄"},{slug:"always-calling",nameEn:"Always Calling",nameCn:"夺命连环call型",descriptionEn:"If you don't answer the first call, they'll make it five.",descriptionCn:"你不接第一个电话，他就会打五个。",oneLinEn:'"Quick sync on that thing we discussed yesterday?"',oneLinCn:'"快速同步一下昨天讨论的那件事？"',annoyanceLevel:"high",emoji:"📞"},{slug:"credit-collector",nameEn:"Credit Collector",nameCn:"抢功型",descriptionEn:"Your work. Their presentation. Their success.",descriptionCn:"你的工作。他们的演讲。他们的成功。",oneLinEn:'"We did some great work on this initiative."',oneLinCn:'"我们在这个项目上做了很好的工作。"',annoyanceLevel:"high",emoji:"🏆"},{slug:"delegator-supreme",nameEn:"Delegator Supreme",nameCn:"甩锅大师型",descriptionEn:"Masters at re-assigning tasks at the last minute.",descriptionCn:"最后一刻重新分配任务的大师。",oneLinEn:'"This would be perfect for your skill set."',oneLinCn:'"这对你的技能来说再合适不过了。"',annoyanceLevel:"soul-crushing",emoji:"🔗"},{slug:"meeting-addict",nameEn:"Meeting for Everything",nameCn:"开会狂魔型",descriptionEn:"Could have been an email. Is now 6 meetings.",descriptionCn:"本可以是一封邮件。现在变成了6场会议。",oneLinEn:'"Let\'s schedule a meeting to discuss this meeting."',oneLinCn:'"我们开个会来讨论这场会议吧。"',annoyanceLevel:"high",emoji:"📅"},{slug:"deadline-killer",nameEn:"Last-Minute Chaos",nameCn:"deadline杀手型",descriptionEn:"Sprints aren't complete without a crisis.",descriptionCn:"没有危机的冲刺是不完整的。",oneLinEn:'"Wait, wasn\'t this supposed to be done yesterday?"',oneLinCn:'"等等，这不是应该昨天完成的吗？"',annoyanceLevel:"soul-crushing",emoji:"⏰"},{slug:"black-tongue",nameEn:"Need Translation",nameCn:"黑话型",descriptionEn:"Speaks in acronyms and corporate jargon.",descriptionCn:"用缩写和企业术语说话。",oneLinEn:'"We need to circle back and touch base on the KPIs."',oneLinCn:'"我们需要回到圆桌并同步一下关键绩效指标。"',annoyanceLevel:"moderate",emoji:"🔤"},{slug:"verbose-master",nameEn:"Verbose Nonsense",nameCn:"长篇大论型",descriptionEn:"10 words became a 30-minute lecture. Somehow.",descriptionCn:"10个单词变成了30分钟的讲座。不知怎么就这样了。",oneLinEn:'"So, fundamentally, in terms of the bigger picture..."',oneLinCn:'"所以，从根本上讲，就宏观的角度而言..."',annoyanceLevel:"moderate",emoji:"💬"},{slug:"big-picture-vague",nameEn:"Visionary but Vague",nameCn:"画大饼型",descriptionEn:"Grand vision, zero implementation details.",descriptionCn:"宏大的愿景，零实施细节。",oneLinEn:'"Think bigger. Way bigger. Like, revolutionary."',oneLinCn:'"想得更大一点。大得多。像，革命性的。"',annoyanceLevel:"high",emoji:"🎨"}];e.s(["default",0,function(){return(0,s.jsxs)("div",{className:"bg-marine text-frost min-h-screen",children:[(0,s.jsx)("style",{children:`
        .hero-grid {
          background-image:
            linear-gradient(rgba(240, 246, 247, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(240, 246, 247, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: 0 0;
        }

        .hero-section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
          gap: 32px;
        }

        .hero-title {
          font-size: clamp(3rem, 10vw, 6rem);
          font-weight: bold;
          font-family: monospace;
          letter-spacing: 4px;
          text-align: center;
          color: #f0f6f7;
          text-shadow: 3px 3px 0px rgba(137, 174, 200, 0.3);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.9; }
        }

        .hero-subtitle {
          font-size: 1.25rem;
          text-align: center;
          color: #89aec8;
          font-family: monospace;
          max-width: 600px;
          line-height: 1.6;
        }

        .hero-cn {
          font-size: 1.125rem;
          color: #89aec8;
          font-family: monospace;
        }

        .cta-group {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .scene-wrapper {
          margin: 40px 0;
        }

        .section {
          padding: 60px 20px;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .boss-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 32px;
        }

        .how-it-works {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .how-step {
          text-align: center;
          padding: 24px 16px;
          border: 2px solid #89aec8;
          background: rgba(0, 44, 85, 0.5);
          transition: all 0.3s ease;
        }

        .how-step:hover {
          border-color: #f0f6f7;
          box-shadow: 0 0 12px rgba(240, 246, 247, 0.2);
        }

        .step-icon {
          font-size: 3rem;
          margin-bottom: 12px;
          animation: bounce 1s ease-in-out infinite;
        }

        .how-step:nth-child(2) .step-icon {
          animation-delay: 0.2s;
        }

        .how-step:nth-child(3) .step-icon {
          animation-delay: 0.4s;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .step-title {
          font-size: 1.125rem;
          font-weight: bold;
          color: #f0f6f7;
          font-family: monospace;
          margin: 12px 0;
        }

        .step-desc {
          font-size: 0.875rem;
          color: #89aec8;
          font-family: monospace;
        }

        .github-cta {
          text-align: center;
          padding: 40px;
          border: 4px solid #f0a000;
          background: rgba(0, 44, 85, 0.5);
          margin-top: 40px;
        }

        .github-cta-title {
          font-size: 2rem;
          font-family: monospace;
          font-weight: bold;
          color: #f0f6f7;
          margin-bottom: 24px;
          letter-spacing: 2px;
        }

        .footer {
          text-align: center;
          padding: 40px 20px;
          border-top: 2px dashed #89aec8;
          margin-top: 80px;
          color: #89aec8;
          font-size: 0.875rem;
          font-family: monospace;
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .cta-group {
            gap: 8px;
          }

          .boss-grid {
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            gap: 16px;
          }

          .github-cta-title {
            font-size: 1.5rem;
          }
        }
      `}),(0,s.jsxs)("section",{className:"hero-section hero-grid",children:[(0,s.jsx)("h1",{className:"hero-title",children:"BOSS SKILLS"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"hero-subtitle",children:"A serious open-source framework for unserious bosses."}),(0,s.jsx)("p",{className:"hero-subtitle hero-cn",children:"一个严肃的开源框架，给不严肃的老板们。"})]}),(0,s.jsxs)("div",{className:"cta-group",children:[(0,s.jsx)(n.default,{variant:"primary",href:"/playground",children:"Try Playground"}),(0,s.jsx)(n.default,{variant:"success",href:"#bosses",children:"Browse Skills"}),(0,s.jsx)(n.default,{variant:"warning",href:"https://github.com/boss-skills",children:"View on GitHub"})]})]}),(0,s.jsx)("section",{className:"section scene-wrapper",children:(0,s.jsx)(a,{})}),(0,s.jsxs)("section",{id:"bosses",className:"section",children:[(0,s.jsx)(i.default,{en:"CHOOSE YOUR BOSS",cn:"选择你的老板",subtitle:"Like a game character select screen, but with your stress levels"}),(0,s.jsx)("div",{className:"boss-grid",children:o.map(e=>(0,s.jsx)(t.default,{nameEn:e.nameEn,nameCn:e.nameCn,name:e.nameEn,description:e.descriptionEn,descriptionCn:e.descriptionCn,oneLiner:e.oneLinEn,oneLineCn:e.oneLinCn,annoyanceLevel:e.annoyanceLevel,slug:e.slug,locale:"en"},e.slug))})]}),(0,s.jsxs)("section",{className:"section",children:[(0,s.jsx)(i.default,{en:"HOW IT WORKS",cn:"它如何工作",subtitle:"Three simple steps to deployment"}),(0,s.jsxs)("div",{className:"how-it-works",children:[(0,s.jsxs)("div",{className:"how-step",children:[(0,s.jsx)("div",{className:"step-icon",children:"💾"}),(0,s.jsx)("div",{className:"step-title",children:"Install"}),(0,s.jsx)("div",{className:"step-desc",children:"Add Boss Skills to your project"})]}),(0,s.jsxs)("div",{className:"how-step",children:[(0,s.jsx)("div",{className:"step-icon",children:"👤"}),(0,s.jsx)("div",{className:"step-title",children:"Choose"}),(0,s.jsx)("div",{className:"step-desc",children:"Select your boss personality"})]}),(0,s.jsxs)("div",{className:"how-step",children:[(0,s.jsx)("div",{className:"step-icon",children:"🚀"}),(0,s.jsx)("div",{className:"step-title",children:"Deploy"}),(0,s.jsx)("div",{className:"step-desc",children:"Watch the chaos unfold"})]})]})]}),(0,s.jsxs)("section",{className:"section",children:[(0,s.jsx)(i.default,{en:"TRY BEFORE YOU CRY",cn:"先试试，别哭",subtitle:"Get a taste of what your boss skills can do"}),(0,s.jsxs)("div",{className:"nes-container with-title",style:{marginTop:"24px"},children:[(0,s.jsx)("p",{className:"title",children:"Interactive Playground"}),(0,s.jsx)("p",{className:"text-slate mb-6",children:"Test-drive different boss personalities without leaving your desk. Watch how they respond to common workplace scenarios. It\\'s like a performance preview, except everything feels off."}),(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)(n.default,{variant:"primary",href:"/playground",children:"Open Playground"})})]})]}),(0,s.jsx)("section",{className:"section",children:(0,s.jsxs)("div",{className:"github-cta",children:[(0,s.jsx)("h2",{className:"github-cta-title",children:"READY TO DEPLOY YOUR WORST NIGHTMARE?"}),(0,s.jsx)("p",{className:"text-slate mb-6",style:{fontSize:"1.125rem"},children:"Join thousands of developers crafting the perfect boss experience"}),(0,s.jsxs)("div",{className:"cta-group",style:{justifyContent:"center"},children:[(0,s.jsx)(n.default,{variant:"success",href:"https://github.com/boss-skills",children:"⭐ Star on GitHub"}),(0,s.jsx)(n.default,{variant:"primary",href:"https://github.com/boss-skills/contribute",children:"🤝 Contribute a Boss"})]})]})}),(0,s.jsxs)("footer",{className:"footer",children:[(0,s.jsx)("p",{children:"Boss Skills © 2025 | Made with ❌ love and 💀 suffering"}),(0,s.jsx)("p",{style:{marginTop:"12px",fontSize:"0.75rem"},children:"This is a parody project. Any resemblance to your actual boss is entirely intentional."})]})]})}],52683)}]);