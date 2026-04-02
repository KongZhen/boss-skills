(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,47504,49947,e=>{"use strict";var n=e.i(43476);e.s(["default",0,function({en:e,cn:i,subtitle:a}){return(0,n.jsxs)("div",{className:"text-center mb-12",children:[(0,n.jsx)("style",{children:`
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
      `}),(0,n.jsx)("h2",{className:"text-4xl font-bold text-frost mb-2",style:{fontFamily:"monospace",letterSpacing:"2px"},children:e}),(0,n.jsx)("p",{className:"text-lg text-slate",style:{fontFamily:"monospace",letterSpacing:"1px"},children:i}),(0,n.jsx)("div",{className:"pixel-divider"}),a&&(0,n.jsx)("p",{className:"text-sm text-slate mt-4 italic",children:a})]})}],47504);var i=e.i(22016);function a({level:e,label:i}){let t={mild:{width:25,color:"bg-green-500",label:"Mild"},moderate:{width:50,color:"bg-yellow-500",label:"Moderate"},high:{width:75,color:"bg-orange-500",label:"High"},"soul-crushing":{width:100,color:"bg-red-500",label:"Soul-Crushing"}}[e];return(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("style",{children:`
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
      `}),i&&(0,n.jsx)("div",{className:"text-xs text-frost mb-1 font-bold",style:{fontFamily:"monospace"},children:i}),(0,n.jsx)("div",{className:"bar-container h-4 w-full",children:(0,n.jsx)("div",{className:`annoyance-fill h-full ${t.color}`,style:{width:0,animation:"fillBar 0.6s ease-out forwards"}})}),(0,n.jsx)("div",{className:"text-xs text-slate mt-1 text-right",style:{fontFamily:"monospace"},children:t.label})]})}e.s(["default",0,function({name:e,nameEn:t,nameCn:s,description:o,descriptionCn:r,oneLiner:l,oneLineCn:c,annoyanceLevel:d,slug:p,locale:m="en"}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{children:`
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
      `}),(0,n.jsxs)(i.default,{href:`/skills/${p}`,className:"boss-card",children:[(0,n.jsx)("div",{className:"boss-avatar",children:"👔"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"boss-name",children:"en"===m?t:s}),(0,n.jsx)("p",{className:"boss-subtitle",children:"cn"===m?s:t}),(0,n.jsx)("p",{className:"boss-description",children:"en"===m?o:r||o}),(0,n.jsxs)("p",{className:"boss-one-liner",children:['"',"en"===m?l:c||l,'"']})]}),(0,n.jsx)(a,{level:d}),(0,n.jsx)("div",{className:"boss-select-btn",children:"► SELECT ◄"})]})]})}],49947)},30815,e=>{"use strict";var n=e.i(43476),i=e.i(71645),a=e.i(47504),t=e.i(49947);let s=[{slug:"micromanager",nameEn:"Micromanager",nameCn:"事无巨细型",descriptionEn:"Monitors every keystroke, every email, every breath.",descriptionCn:"监控每一次按键，每一封邮件，每一次呼吸。",oneLinEn:'"Have you considered using Arial instead of Calibri?"',oneLinCn:'"你有没有考虑用Arial而不是Calibri？"',annoyanceLevel:"soul-crushing"},{slug:"passive-aggressive",nameEn:"Passive-Aggressive",nameCn:"阴阳怪气型",descriptionEn:"Never says what they mean. Means everything they say.",descriptionCn:"从不直说。却句句有意。",oneLinEn:'"That\'s... interesting. Not what I expected, but interesting."',oneLinCn:'"这个...很有趣。不是我预期的那样，但很有趣。"',annoyanceLevel:"soul-crushing"},{slug:"empty-promises",nameEn:"Empty Promises",nameCn:"画饼型",descriptionEn:"Tomorrow, next quarter, after the restructure...",descriptionCn:"明天，下个季度，重组之后...",oneLinEn:'"We\'ll definitely revisit this in the next cycle."',oneLinCn:'"下个周期我们一定会重新考虑这个。"',annoyanceLevel:"moderate"},{slug:"flip-flopper",nameEn:"Flip-Flopper",nameCn:"反复横跳型",descriptionEn:"Changed mind 5 times before your coffee cooled.",descriptionCn:"在你咖啡冷掉前已经改变五次想法。",oneLinEn:'"Actually, let\'s go back to the original approach."',oneLinCn:'"实际上，我们还是回到原来的方案吧。"',annoyanceLevel:"high"},{slug:"always-calling",nameEn:"Always Following Up",nameCn:"夺命连环call型",descriptionEn:"If you don't answer the first call, they'll make it five.",descriptionCn:"你不接第一个电话，他就会打五个。",oneLinEn:'"Quick sync on that thing we discussed yesterday?"',oneLinCn:'"快速同步一下昨天讨论的那件事？"',annoyanceLevel:"high"},{slug:"credit-collector",nameEn:"Credit Collector",nameCn:"抢功型",descriptionEn:"Your work. Their presentation. Their success.",descriptionCn:"你的工作。他们的演讲。他们的成功。",oneLinEn:'"We did some great work on this initiative."',oneLinCn:'"我们在这个项目上做了很好的工作。"',annoyanceLevel:"high"},{slug:"delegator-supreme",nameEn:"Delegator Supreme",nameCn:"甩锅大师型",descriptionEn:"Masters at re-assigning tasks at the last minute.",descriptionCn:"最后一刻重新分配任务的大师。",oneLinEn:'"This would be perfect for your skill set."',oneLinCn:'"这对你的技能来说再合适不过了。"',annoyanceLevel:"soul-crushing"},{slug:"meeting-addict",nameEn:"Meeting for Everything",nameCn:"开会狂魔型",descriptionEn:"Could have been an email. Is now 6 meetings.",descriptionCn:"本可以是一封邮件。现在变成了6场会议。",oneLinEn:'"Let\'s schedule a meeting to discuss this meeting."',oneLinCn:'"我们开个会来讨论这场会议吧。"',annoyanceLevel:"high"},{slug:"deadline-killer",nameEn:"Last-Minute Chaos",nameCn:"deadline杀手型",descriptionEn:"Sprints aren't complete without a crisis.",descriptionCn:"没有危机的冲刺是不完整的。",oneLinEn:'"Wait, wasn\'t this supposed to be done yesterday?"',oneLinCn:'"等等，这不是应该昨天完成的吗？"',annoyanceLevel:"soul-crushing"},{slug:"black-tongue",nameEn:"Need Translation",nameCn:"黑话型",descriptionEn:"Speaks in acronyms and corporate jargon.",descriptionCn:"用缩写和企业术语说话。",oneLinEn:'"We need to circle back and touch base on the KPIs."',oneLinCn:'"我们需要回到圆桌并同步一下关键绩效指标。"',annoyanceLevel:"moderate"},{slug:"verbose-master",nameEn:"Verbose Nonsense",nameCn:"长篇大论型",descriptionEn:"10 words became a 30-minute lecture. Somehow.",descriptionCn:"10个单词变成了30分钟的讲座。不知怎么就这样了。",oneLinEn:'"So, fundamentally, in terms of the bigger picture..."',oneLinCn:'"所以，从根本上讲，就宏观的角度而言..."',annoyanceLevel:"moderate"},{slug:"big-picture-vague",nameEn:"Visionary but Vague",nameCn:"画大饼型",descriptionEn:"Grand vision, zero implementation details.",descriptionCn:"宏大的愿景，零实施细节。",oneLinEn:'"Think bigger. Way bigger. Like, revolutionary."',oneLinCn:'"想得更大一点。大得多。像，革命性的。"',annoyanceLevel:"high"}];e.s(["default",0,function(){let[e,o]=(0,i.useState)("all"),r="all"===e?s:s.filter(n=>n.annoyanceLevel===e);return(0,n.jsxs)("div",{className:"bg-marine text-frost min-h-screen",children:[(0,n.jsx)("style",{children:`
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
      `}),(0,n.jsxs)("section",{className:"skills-container",children:[(0,n.jsx)(a.default,{en:"BOSS 图鉴 / BOSS ENCYCLOPEDIA",cn:"老板百科全书",subtitle:"Choose your nightmare. / 选择你的噩梦。"}),(0,n.jsxs)("div",{className:"filter-tabs",children:[(0,n.jsx)("button",{onClick:()=>o("all"),className:`filter-tab ${"all"===e?"active":""}`,children:"All"}),(0,n.jsx)("button",{onClick:()=>o("soul-crushing"),className:`filter-tab ${"soul-crushing"===e?"active":""}`,children:"Soul-Crushing"}),(0,n.jsx)("button",{onClick:()=>o("high"),className:`filter-tab ${"high"===e?"active":""}`,children:"High"}),(0,n.jsx)("button",{onClick:()=>o("moderate"),className:`filter-tab ${"moderate"===e?"active":""}`,children:"Moderate"})]}),(0,n.jsx)("div",{className:"skills-grid",children:r.map(e=>(0,n.jsx)(t.default,{nameEn:e.nameEn,nameCn:e.nameCn,name:e.nameEn,description:e.descriptionEn,descriptionCn:e.descriptionCn,oneLiner:e.oneLinEn,oneLineCn:e.oneLinCn,annoyanceLevel:e.annoyanceLevel,slug:e.slug,locale:"en"},e.slug))})]})]})}])}]);