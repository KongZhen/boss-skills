(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,59796,e=>{"use strict";var t=e.i(43476),a=e.i(71645);let s={micromanager:{task_assignment:["So I'm assigning you {{task}}. I need you to send me a status update every 30 minutes — not because I don't trust you, but because transparency is key to alignment. Also, can you walk me through your approach before you start? I'm free for a sync in 5 minutes. CC me on all related emails, and please use the status format we discussed (which I'll send you in a follow-up). Just to confirm — you understand the deadline is {{deadline}}, right? Let's circle back on this in an hour.","Quick thing — I'm giving you {{task}} to handle. I know you're busy, but I'll need visibility into your progress starting immediately. Can you give me percentage updates? Like, where are we at? Also, I'd like to schedule a 15-minute sync to go over the approach. The deadline is {{deadline}}, and I'll follow up with a Slack message in 30 minutes just to check in.","Alright, so {{task}} is now yours. Here's what I need: daily standups, a shared spreadsheet tracking progress, and an email update every evening. The deadline is {{deadline}}, and I'm assuming you'll reach out if anything shifts. Also, I'll probably pop into your calendar for a few check-ins."],progress_check:["Hey, just checking in — where are we on {{task}}? {{progress}} sounds good, but can you break it down by subtask? Also, can you give me percentages? Like, is it 50% or 65%? Need to know. Let me know within 15 minutes?","Quick question — any movement on {{task}} since we last talked? {{progress}} is helpful, but I'd love to see it in a spreadsheet. Also, any blockers I should know about? Let's sync in 20 minutes.","Status update time. {{task}} — where are we? I saw some activity, but I need the details. {{progress}} is great context, but can you give me the micro-level breakdown? Also, have you considered doing a dry-run first?"]},"passive-aggressive":{task_assignment:["Oh, interesting choice on {{task}}. I appreciate the... boldness of your approach. So the deadline is {{deadline}}, and {{progress}} is where we're starting from. I'm sure you'll figure it out. I just hope the complexity doesn't overwhelm things. Let me know if you need help. Or not. Whatever works for you.","That's {{task}}? Okay. I see. Well, interesting direction. Not what I would have chosen, but I'm sure there's a method to your madness. {{deadline}} is our target, and {{progress}} is the baseline. I'll be watching with great interest.","So {{task}} — that's quite ambitious. I mean, given {{progress}}, I'm impressed by your confidence. With {{deadline}} coming up, I'm sure you've already thought through all the implications. I hope so, anyway."],progress_check:["So how's {{task}} coming along? {{progress}} is... well, it's something. I'm not saying it's not good, but I did expect more momentum by now. {{deadline}} is still our target, right? Just checking.","Oh, {{task}}. Right. So {{progress}} — that's... interesting. I expected a bit more, if I'm being honest. But I'm sure you have your reasons. {{deadline}} is still realistic though, yeah?","Update on {{task}}? {{progress}} is good, I guess. Not what I anticipated, but sure. I just hope {{deadline}} is still achievable. Let me know if you need anything. Or don't. Your call."]},"empty-promises":{task_assignment:["Oh, {{task}}? Yeah, that's important. We'll definitely make sure you're set up for success. {{progress}} is a solid start, and with {{deadline}} in mind, this could be huge for you. In fact, I see this as a real opportunity for growth. We'll circle back in a few weeks to see how it's going. Or next quarter. We'll definitely check in though. You're going to kill it.","So {{task}} — I love where your head's at. This could really be transformative for the team. {{deadline}} gives us some time, and {{progress}} is encouraging. We should definitely allocate more resources to this eventually. For now, just get started and we'll provide more support soon. Probably next month.","{{task}} is exactly the kind of initiative we need. With {{progress}} as the foundation and {{deadline}} as our goal, you're in a great position. I'm already thinking about how to promote this internally. We'll definitely discuss a promotion cycle once this wraps up. I'm rooting for you!"],progress_check:["How's {{task}} going? {{progress}} sounds great. You know, once we get through this quarter, we can really accelerate things. {{deadline}} still works for you? Perfect. Let's touch base in like 6 weeks.","{{task}} — how's it looking? {{progress}}? Nice. I'm already excited about what this could become. After the restructure, we'll have more resources to throw at it. {{deadline}} is definitely doable. Keep up the great work!","Just checking in on {{task}}. {{progress}} is awesome. We should definitely escalate this to leadership soon. Maybe after the next planning cycle. {{deadline}} still feels achievable? Great. I'm thrilled with your progress."]},"flip-flopper":{task_assignment:["So I'm giving you {{task}} to work on. Actually, wait—do you think we should approach it differently? {{progress}} is the current state, and {{deadline}} is the target, but what if we pivoted? No, no, let's stick with the original plan. {{task}} it is. But also think about alternative approaches. I'll probably change my mind again tomorrow.","Okay, {{task}} is yours. Actually, you know what? I was just thinking—what if we did it the old way instead? No, new way is better. {{progress}} gives us a baseline, and {{deadline}} is firm. I think. Let me get back to you on the approach.","{{task}} is the priority. Or maybe {{progress}} is the priority? Actually, let's focus on {{task}}, but consider {{progress}} as backup. {{deadline}} is when this needs to be done. Unless we decide to shift things. I'll let you know."],progress_check:["Where are we on {{task}}? {{progress}} is good. Wait, actually, can we talk about changing direction? {{deadline}} is still the target, but I'm thinking maybe we approach it differently. Actually, the original way was better. Never mind. Keep doing what you're doing. For now.","Status on {{task}}? {{progress}} — nice. But actually, I'm wondering if we should reconsider the whole thing. {{deadline}} might be flexible. Let me circle with the team and get back to you on whether we're even doing the right thing.","How's {{task}} progressing? {{progress}} is solid. You know, I had another idea though — what if we completely pivoted? {{deadline}} might shift, but let's talk. I'll be calling you in 5 minutes with new thoughts."]}};e.s(["default",0,function(){let[e,o]=(0,a.useState)("micromanager"),[i,n]=(0,a.useState)(""),[l,r]=(0,a.useState)(""),[d,c]=(0,a.useState)(""),[u,h]=(0,a.useState)("task_assignment"),[m,p]=(0,a.useState)(null),[g,y]=(0,a.useState)(!1),b=[{value:"micromanager",label:"Micromanager / 事无巨细型"},{value:"passive-aggressive",label:"Passive-Aggressive / 阴阳怪气型"},{value:"empty-promises",label:"Empty Promises / 画饼型"},{value:"flip-flopper",label:"Flip-Flopper / 反复横跳型"},{value:"always-calling",label:"Always Following Up / 夺命连环call型"},{value:"credit-collector",label:"Credit Collector / 抢功型"},{value:"delegator-supreme",label:"Delegator Supreme / 甩锅大师型"},{value:"meeting-addict",label:"Meeting for Everything / 开会狂魔型"},{value:"deadline-killer",label:"Last-Minute Chaos / deadline杀手型"},{value:"black-tongue",label:"Need Translation / 黑话型"},{value:"verbose-master",label:"Verbose Nonsense / 长篇大论型"},{value:"big-picture-vague",label:"Visionary but Vague / 画大饼型"}],f=()=>{y(!0),setTimeout(()=>{let t=s[e];if(!t||!t[u]){p({message:"This boss type or mode is not yet implemented in the playground.",followUp:"Try a different combination!",hiddenInsight:"Contribute on GitHub to add more boss personalities and modes!"}),y(!1);return}let a=t[u];p({message:a[Math.floor(Math.random()*a.length)].replace("{{task}}",i||"[your task]").replace("{{progress}}",l||"[current progress]").replace("{{deadline}}",d||"[your deadline]"),followUp:{micromanager:"They will follow up in 15 minutes to check on your progress. Then 30 minutes later. Then again.","passive-aggressive":'They will send a Slack message saying "Just checking in on our earlier conversation."',"empty-promises":'They\'ll circle back to this "next quarter" or "after the restructure."',"flip-flopper":"They'll probably change their mind about this entire direction by tomorrow.","always-calling":"Expect 5 missed calls and 12 Slack messages before you can respond.","credit-collector":"They're already mentally crediting themselves for this work.","delegator-supreme":"They'll reassign this to someone else in about 3 days.","meeting-addict":"A 1-hour meeting has been scheduled to discuss this task.","deadline-killer":"The deadline just moved up by 3 weeks.","black-tongue":"This requires synergistic alignment with our KPI paradigm.","verbose-master":"This will take 30 minutes to fully explain despite being 2 sentences.","big-picture-vague":"Think bigger about this. Way bigger."}[e]||"Stay tuned for their next message.",hiddenInsight:{micromanager:'What they actually mean: "I need complete control over every aspect of this."',"passive-aggressive":'What they actually mean: "This is terrible and I blame you for it."',"empty-promises":'What they actually mean: "This will never actually happen."',"flip-flopper":'What they actually mean: "I have no idea what I want."',"always-calling":'What they actually mean: "My anxiety about this is actually your problem."',"credit-collector":'What they actually mean: "I\'m taking credit for your work."',"delegator-supreme":'What they actually mean: "I\'m avoiding responsibility."',"meeting-addict":'What they actually mean: "I need to justify my existence with meetings."',"deadline-killer":'What they actually mean: "Organization is not my responsibility."',"black-tongue":'What they actually mean: "I don\'t understand this either, but I sound important."',"verbose-master":'What they actually mean: "Simple ideas in complex language = credibility."',"big-picture-vague":'What they actually mean: "I have vision but no execution plan."'}[e]||"Decoding boss-speak..."}),y(!1)},800)};return(0,t.jsxs)("div",{className:"bg-marine text-frost min-h-screen",children:[(0,t.jsx)("style",{children:`
        .playground-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .playground-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .playground-title {
          font-size: 3rem;
          font-family: monospace;
          font-weight: bold;
          color: #f0f6f7;
          margin-bottom: 12px;
          letter-spacing: 2px;
        }

        .playground-subtitle {
          font-size: 1.125rem;
          color: #89aec8;
          font-family: monospace;
          margin-bottom: 8px;
        }

        .playground-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 32px;
        }

        .input-panel,
        .output-panel {
          border: 4px solid #89aec8;
          padding: 24px;
          background: rgba(137, 174, 200, 0.05);
        }

        .panel-title {
          font-size: 1.25rem;
          font-family: monospace;
          font-weight: bold;
          color: #f0f6f7;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 2px solid #f0a000;
          letter-spacing: 1px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          font-size: 0.875rem;
          font-family: monospace;
          font-weight: bold;
          color: #f0f6f7;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 12px;
          border: 3px solid #89aec8;
          background: #002c55;
          color: #f0f6f7;
          font-family: monospace;
          font-size: 0.95rem;
          box-sizing: border-box;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #f0f6f7;
          box-shadow: 0 0 8px rgba(240, 246, 247, 0.2);
        }

        .form-textarea {
          min-height: 100px;
          resize: vertical;
        }

        .deploy-buttons {
          display: flex;
          gap: 12px;
          margin-top: 32px;
        }

        .deploy-buttons button,
        .deploy-buttons a {
          flex: 1;
        }

        .output-content {
          display: none;
        }

        .output-content.active {
          display: block;
        }

        .message-box {
          background: #002c55;
          border: 3px solid #89aec8;
          padding: 20px;
          margin-bottom: 20px;
          font-family: monospace;
          font-size: 0.95rem;
          line-height: 1.6;
          color: #f0f6f7;
          white-space: pre-wrap;
          word-break: break-word;
        }

        .section-label {
          font-weight: bold;
          color: #f0a000;
          font-size: 0.875rem;
          margin-top: 16px;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .section-content {
          background: rgba(240, 160, 0, 0.05);
          border-left: 4px solid #f0a000;
          padding: 12px;
          color: #f0f6f7;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .output-buttons {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }

        .output-buttons button {
          flex: 1;
        }

        .empty-state {
          text-align: center;
          padding: 40px 20px;
          color: #89aec8;
          font-family: monospace;
          font-style: italic;
        }

        .loading {
          text-align: center;
          padding: 40px;
          color: #89aec8;
          font-family: monospace;
        }

        .loading-dot {
          display: inline-block;
          animation: blink 1.4s infinite;
        }

        .loading-dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .loading-dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes blink {
          0%, 60%, 100% { opacity: 0.5; }
          30% { opacity: 1; }
        }

        @media (max-width: 1024px) {
          .playground-content {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .playground-container {
            padding: 24px 12px;
          }

          .playground-title {
            font-size: 1.75rem;
          }

          .playground-subtitle {
            font-size: 0.95rem;
          }

          .deploy-buttons {
            flex-direction: column;
          }

          .output-buttons {
            flex-direction: column;
          }
        }
      `}),(0,t.jsxs)("section",{className:"playground-container",children:[(0,t.jsxs)("div",{className:"playground-header",children:[(0,t.jsx)("h1",{className:"playground-title",children:"BOSS SIMULATOR"}),(0,t.jsx)("p",{className:"playground-subtitle",children:"Deploy a manager. Regret immediately."}),(0,t.jsx)("p",{className:"playground-subtitle",style:{fontSize:"1rem",color:"#89aec8"},children:"部署一个老板。立刻后悔。"})]}),(0,t.jsxs)("div",{className:"playground-content",children:[(0,t.jsxs)("div",{className:"input-panel",children:[(0,t.jsx)("div",{className:"panel-title",children:"⚙️ CONFIGURE BOSS"}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{className:"form-label",children:"Boss Type"}),(0,t.jsx)("select",{className:"form-select",value:e,onChange:e=>o(e.target.value),children:b.map(e=>(0,t.jsx)("option",{value:e.value,children:e.label},e.value))})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{className:"form-label",children:"What are you working on?"}),(0,t.jsx)("textarea",{className:"form-textarea",placeholder:"e.g., Building new dashboard, Fixing bug in authentication...",value:i,onChange:e=>n(e.target.value)})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{className:"form-label",children:"Current Progress"}),(0,t.jsx)("input",{className:"form-input",type:"text",placeholder:"e.g., Started architecture, 60% complete...",value:l,onChange:e=>r(e.target.value)})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{className:"form-label",children:"Deadline"}),(0,t.jsx)("input",{className:"form-input",type:"text",placeholder:"e.g., 2 weeks, end of month...",value:d,onChange:e=>c(e.target.value)})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{className:"form-label",children:"Communication Mode"}),(0,t.jsx)("select",{className:"form-select",value:u,onChange:e=>h(e.target.value),children:[{value:"task_assignment",label:"Task Assignment"},{value:"progress_check",label:"Progress Check"},{value:"review",label:"Review"},{value:"meeting",label:"Meeting"},{value:"escalation",label:"Escalation"}].map(e=>(0,t.jsx)("option",{value:e.value,children:e.label},e.value))})]}),(0,t.jsxs)("div",{className:"deploy-buttons",children:[(0,t.jsx)("button",{className:"nes-btn is-primary",onClick:f,disabled:g,children:g?"⏳ DEPLOYING...":"🚀 DEPLOY BOSS"}),(0,t.jsx)("button",{className:"nes-btn is-success",onClick:()=>{o(b[Math.floor(Math.random()*b.length)].value),n("Deploy a new feature"),r("Started planning"),c("2 weeks"),h("task_assignment")},children:"🎲 RANDOM BOSS"})]})]}),(0,t.jsxs)("div",{className:"output-panel",children:[(0,t.jsx)("div",{className:"panel-title",children:"💬 MESSAGE FROM YOUR BOSS"}),g&&(0,t.jsxs)("div",{className:"loading",children:[(0,t.jsx)("span",{className:"loading-dot",children:"."}),(0,t.jsx)("span",{className:"loading-dot",children:"."}),(0,t.jsx)("span",{className:"loading-dot",children:"."})]}),!m&&!g&&(0,t.jsx)("div",{className:"empty-state",children:"Configure your boss and click DEPLOY to see what they have to say."}),m&&!g&&(0,t.jsxs)("div",{className:"output-content active",children:[(0,t.jsx)("div",{className:"message-box",children:m.message}),(0,t.jsx)("div",{className:"section-label",children:"📞 FOLLOW UP"}),(0,t.jsx)("div",{className:"section-content",children:m.followUp}),(0,t.jsx)("div",{className:"section-label",children:"🎭 WHAT THEY ACTUALLY MEAN"}),(0,t.jsx)("div",{className:"section-content",children:m.hiddenInsight}),(0,t.jsxs)("div",{className:"output-buttons",children:[(0,t.jsx)("button",{className:"nes-btn is-primary",onClick:f,disabled:g,children:"🔄 GENERATE ANOTHER"}),(0,t.jsx)("button",{className:"nes-btn is-success",onClick:()=>{if(!m)return;let e=`BOSS MESSAGE:

${m.message}

FOLLOW UP:
${m.followUp}

WHAT THEY ACTUALLY MEAN:
${m.hiddenInsight}`;navigator.clipboard.writeText(e),alert("Message copied to clipboard!")},children:"📋 SHARE"})]})]})]})]})]})]})}])}]);