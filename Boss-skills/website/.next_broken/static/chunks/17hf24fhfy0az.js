(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s={formatUrl:function(){return o},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var i in s)Object.defineProperty(n,i,{enumerable:!0,get:s[i]});let a=e.r(90809)._(e.r(98183)),r=/https?|ftp|gopher|file/;function o(e){let{auth:t,hostname:n}=e,s=e.protocol||"",i=e.pathname||"",o=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:n&&(c=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(a.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return s&&!s.endsWith(":")&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==c?(c="//"+(c||""),i&&"/"!==i[0]&&(i="/"+i)):c||(c=""),o&&"#"!==o[0]&&(o="#"+o),d&&"?"!==d[0]&&(d="?"+d),i=i.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${s}${c}${i}${d}${o}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return o(e)}},18581,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return i}});let s=e.r(71645);function i(e,t){let n=(0,s.useRef)(null),i=(0,s.useRef)(null);return(0,s.useCallback)(s=>{if(null===s){let e=n.current;e&&(n.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(n.current=a(e,s)),t&&(i.current=a(t,s))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},73668,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return a}});let s=e.r(18967),i=e.r(52817);function a(e){if(!(0,s.isAbsoluteUrl)(e))return!0;try{let t=(0,s.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,i.hasBasePath)(n.pathname)}catch(e){return!1}}},84508,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return s}});let s=e=>{}},22016,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s={default:function(){return g},useLinkStatus:function(){return y}};for(var i in s)Object.defineProperty(n,i,{enumerable:!0,get:s[i]});let a=e.r(90809),r=e.r(43476),o=a._(e.r(71645)),l=e.r(95057),c=e.r(8372),d=e.r(18581),p=e.r(18967),u=e.r(5550);e.r(33525);let h=e.r(88540),f=e.r(91949),m=e.r(73668),x=e.r(9396);function g(t){var n,s;let i,a,g,[y,v]=(0,o.useOptimistic)(f.IDLE_LINK_STATUS),j=(0,o.useRef)(null),{href:w,as:k,children:N,prefetch:C=null,passHref:E,replace:L,shallow:S,scroll:T,onClick:O,onMouseEnter:P,onTouchStart:R,legacyBehavior:_=!1,onNavigate:z,transitionTypes:B,ref:M,unstable_dynamicOnHover:A,...I}=t;i=N,_&&("string"==typeof i||"number"==typeof i)&&(i=(0,r.jsx)("a",{children:i}));let U=o.default.useContext(c.AppRouterContext),D=!1!==C,F=!1!==C?null===(s=C)||"auto"===s?x.FetchStrategy.PPR:x.FetchStrategy.Full:x.FetchStrategy.PPR,Y="string"==typeof(n=k||w)?n:(0,l.formatUrl)(n);if(_){if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=o.default.Children.only(i)}let $=_?a&&"object"==typeof a&&a.ref:M,W=o.default.useCallback(e=>(null!==U&&(j.current=(0,f.mountLinkInstance)(e,Y,U,F,D,v)),()=>{j.current&&((0,f.unmountLinkForCurrentNavigation)(j.current),j.current=null),(0,f.unmountPrefetchableInstance)(e)}),[D,Y,U,F,v]),K={ref:(0,d.useMergedRef)(W,$),onClick(t){_||"function"!=typeof O||O(t),_&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),!U||t.defaultPrevented||function(t,n,s,i,a,r,l){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(n)){i&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),r){let e=!1;if(r({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(99781);o.default.startTransition(()=>{p(n,i?"replace":"push",!1===a?h.ScrollBehavior.NoScroll:h.ScrollBehavior.Default,s.current,l)})}}(t,Y,j,L,T,z,B)},onMouseEnter(e){_||"function"!=typeof P||P(e),_&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),U&&D&&(0,f.onNavigationIntent)(e.currentTarget,!0===A)},onTouchStart:function(e){_||"function"!=typeof R||R(e),_&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),U&&D&&(0,f.onNavigationIntent)(e.currentTarget,!0===A)}};return(0,p.isAbsoluteUrl)(Y)?K.href=Y:_&&!E&&("a"!==a.type||"href"in a.props)||(K.href=(0,u.addBasePath)(Y)),g=_?o.default.cloneElement(a,K):(0,r.jsx)("a",{...I,...K,children:i}),(0,r.jsx)(b.Provider,{value:y,children:g})}e.r(84508);let b=(0,o.createContext)(f.IDLE_LINK_STATUS),y=()=>(0,o.useContext)(b);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},52683,e=>{"use strict";var t=e.i(43476),n=e.i(22016);function s({variant:e="primary",children:i,onClick:a,href:r,className:o=""}){let l=`${{primary:"nes-btn is-primary",success:"nes-btn is-success",warning:"nes-btn is-warning",error:"nes-btn is-error"}[e]} ${o}`,c={fontFamily:"monospace",fontSize:"14px",fontWeight:"bold",imageRendering:"pixelated"};return r?(0,t.jsx)(n.default,{href:r,className:l,style:c,children:i}):(0,t.jsx)("button",{onClick:a,className:l,style:c,children:i})}function i({en:e,cn:n,subtitle:s}){return(0,t.jsxs)("div",{className:"text-center mb-12",children:[(0,t.jsx)("style",{children:`
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
      `}),(0,t.jsx)("h2",{className:"text-4xl font-bold text-frost mb-2",style:{fontFamily:"monospace",letterSpacing:"2px"},children:e}),(0,t.jsx)("p",{className:"text-lg text-slate",style:{fontFamily:"monospace",letterSpacing:"1px"},children:n}),(0,t.jsx)("div",{className:"pixel-divider"}),s&&(0,t.jsx)("p",{className:"text-sm text-slate mt-4 italic",children:s})]})}function a({level:e,label:n}){let s={mild:{width:25,color:"bg-green-500",label:"Mild"},moderate:{width:50,color:"bg-yellow-500",label:"Moderate"},high:{width:75,color:"bg-orange-500",label:"High"},"soul-crushing":{width:100,color:"bg-red-500",label:"Soul-Crushing"}}[e];return(0,t.jsxs)("div",{className:"w-full",children:[(0,t.jsx)("style",{children:`
        @keyframes fillBar {
          from {
            width: 0;
          }
          to {
            width: ${s.width}%;
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
      `}),n&&(0,t.jsx)("div",{className:"text-xs text-frost mb-1 font-bold",style:{fontFamily:"monospace"},children:n}),(0,t.jsx)("div",{className:"bar-container h-4 w-full",children:(0,t.jsx)("div",{className:`annoyance-fill h-full ${s.color}`,style:{width:0,animation:"fillBar 0.6s ease-out forwards"}})}),(0,t.jsx)("div",{className:"text-xs text-slate mt-1 text-right",style:{fontFamily:"monospace"},children:s.label})]})}function r({name:e,nameEn:s,nameCn:i,description:o,descriptionCn:l,oneLiner:c,oneLineCn:d,annoyanceLevel:p,slug:u,locale:h="en"}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
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
      `}),(0,t.jsxs)(n.default,{href:`/skills/${u}`,className:"boss-card",children:[(0,t.jsx)("div",{className:"boss-avatar",children:"👔"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"boss-name",children:"en"===h?s:i}),(0,t.jsx)("p",{className:"boss-subtitle",children:"cn"===h?i:s}),(0,t.jsx)("p",{className:"boss-description",children:"en"===h?o:l||o}),(0,t.jsxs)("p",{className:"boss-one-liner",children:['"',"en"===h?c:d||c,'"']})]}),(0,t.jsx)(a,{level:p}),(0,t.jsx)("div",{className:"boss-select-btn",children:"► SELECT ◄"})]})]})}function o(){return(0,t.jsxs)("div",{className:"w-full flex justify-center py-12 px-4",children:[(0,t.jsx)("style",{children:`
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
      `}),(0,t.jsxs)("div",{className:"office-scene",children:[(0,t.jsx)("div",{className:"grid-pattern"}),(0,t.jsxs)("div",{className:"boss-char",children:[(0,t.jsx)("div",{className:"boss-head",children:(0,t.jsxs)("div",{className:"boss-eyes",children:[(0,t.jsx)("div",{className:"eye"}),(0,t.jsx)("div",{className:"eye"})]})}),(0,t.jsx)("div",{className:"boss-suit",children:(0,t.jsx)("div",{className:"boss-suit::before"})}),(0,t.jsxs)("div",{className:"boss-arms",children:[(0,t.jsx)("div",{className:"arm typing",style:{animationDelay:"0s"}}),(0,t.jsx)("div",{className:"arm typing",style:{animationDelay:"0.3s"}})]})]}),(0,t.jsx)("div",{className:"chair-back"}),(0,t.jsxs)("div",{className:"desk",children:[(0,t.jsx)("div",{className:"desk-lamp"}),(0,t.jsx)("div",{className:"coffee-mug"}),(0,t.jsx)("div",{className:"nameplate",children:"THE BOSS"})]})]})]})}let l=[{slug:"micromanager",nameEn:"Micromanager",nameCn:"事无巨细型",descriptionEn:"Monitors every keystroke, every email, every breath.",descriptionCn:"监控每一次按键，每一封邮件，每一次呼吸。",oneLinEn:'"Have you considered using Arial instead of Calibri?"',oneLinCn:'"你有没有考虑用Arial而不是Calibri？"',annoyanceLevel:"soul-crushing",emoji:"👁️"},{slug:"passive-aggressive",nameEn:"Passive-Aggressive",nameCn:"阴阳怪气型",descriptionEn:"Never says what they mean. Means everything they say.",descriptionCn:"从不直说。却句句有意。",oneLinEn:'"That\'s... interesting. Not what I expected, but interesting."',oneLinCn:'"这个...很有趣。不是我预期的那样，但很有趣。"',annoyanceLevel:"soul-crushing",emoji:"😏"},{slug:"empty-promises",nameEn:"Empty Promises",nameCn:"画饼型",descriptionEn:"Tomorrow, next quarter, after the restructure...",descriptionCn:"明天，下个季度，重组之后...",oneLinEn:'"We\'ll definitely revisit this in the next cycle."',oneLinCn:'"下个周期我们一定会重新考虑这个。"',annoyanceLevel:"moderate",emoji:"🥧"},{slug:"flip-flopper",nameEn:"Flip-Flopper",nameCn:"反复横跳型",descriptionEn:"Changed mind 5 times before your coffee cooled.",descriptionCn:"在你咖啡冷掉前已经改变五次想法。",oneLinEn:'"Actually, let\'s go back to the original approach."',oneLinCn:'"实际上，我们还是回到原来的方案吧。"',annoyanceLevel:"high",emoji:"🔄"},{slug:"always-calling",nameEn:"Always Calling",nameCn:"夺命连环call型",descriptionEn:"If you don't answer the first call, they'll make it five.",descriptionCn:"你不接第一个电话，他就会打五个。",oneLinEn:'"Quick sync on that thing we discussed yesterday?"',oneLinCn:'"快速同步一下昨天讨论的那件事？"',annoyanceLevel:"high",emoji:"📞"},{slug:"credit-collector",nameEn:"Credit Collector",nameCn:"抢功型",descriptionEn:"Your work. Their presentation. Their success.",descriptionCn:"你的工作。他们的演讲。他们的成功。",oneLinEn:'"We did some great work on this initiative."',oneLinCn:'"我们在这个项目上做了很好的工作。"',annoyanceLevel:"high",emoji:"🏆"},{slug:"delegator-supreme",nameEn:"Delegator Supreme",nameCn:"甩锅大师型",descriptionEn:"Masters at re-assigning tasks at the last minute.",descriptionCn:"最后一刻重新分配任务的大师。",oneLinEn:'"This would be perfect for your skill set."',oneLinCn:'"这对你的技能来说再合适不过了。"',annoyanceLevel:"soul-crushing",emoji:"🔗"},{slug:"meeting-addict",nameEn:"Meeting for Everything",nameCn:"开会狂魔型",descriptionEn:"Could have been an email. Is now 6 meetings.",descriptionCn:"本可以是一封邮件。现在变成了6场会议。",oneLinEn:'"Let\'s schedule a meeting to discuss this meeting."',oneLinCn:'"我们开个会来讨论这场会议吧。"',annoyanceLevel:"high",emoji:"📅"},{slug:"deadline-killer",nameEn:"Last-Minute Chaos",nameCn:"deadline杀手型",descriptionEn:"Sprints aren't complete without a crisis.",descriptionCn:"没有危机的冲刺是不完整的。",oneLinEn:'"Wait, wasn\'t this supposed to be done yesterday?"',oneLinCn:'"等等，这不是应该昨天完成的吗？"',annoyanceLevel:"soul-crushing",emoji:"⏰"},{slug:"black-tongue",nameEn:"Need Translation",nameCn:"黑话型",descriptionEn:"Speaks in acronyms and corporate jargon.",descriptionCn:"用缩写和企业术语说话。",oneLinEn:'"We need to circle back and touch base on the KPIs."',oneLinCn:'"我们需要回到圆桌并同步一下关键绩效指标。"',annoyanceLevel:"moderate",emoji:"🔤"},{slug:"verbose-master",nameEn:"Verbose Nonsense",nameCn:"长篇大论型",descriptionEn:"10 words became a 30-minute lecture. Somehow.",descriptionCn:"10个单词变成了30分钟的讲座。不知怎么就这样了。",oneLinEn:'"So, fundamentally, in terms of the bigger picture..."',oneLinCn:'"所以，从根本上讲，就宏观的角度而言..."',annoyanceLevel:"moderate",emoji:"💬"},{slug:"big-picture-vague",nameEn:"Visionary but Vague",nameCn:"画大饼型",descriptionEn:"Grand vision, zero implementation details.",descriptionCn:"宏大的愿景，零实施细节。",oneLinEn:'"Think bigger. Way bigger. Like, revolutionary."',oneLinCn:'"想得更大一点。大得多。像，革命性的。"',annoyanceLevel:"high",emoji:"🎨"}];e.s(["default",0,function(){return(0,t.jsxs)("div",{className:"bg-marine text-frost min-h-screen",children:[(0,t.jsx)("style",{children:`
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
      `}),(0,t.jsxs)("section",{className:"hero-section hero-grid",children:[(0,t.jsx)("h1",{className:"hero-title",children:"BOSS SKILLS"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"hero-subtitle",children:"A serious open-source framework for unserious bosses."}),(0,t.jsx)("p",{className:"hero-subtitle hero-cn",children:"一个严肃的开源框架，给不严肃的老板们。"})]}),(0,t.jsxs)("div",{className:"cta-group",children:[(0,t.jsx)(s,{variant:"primary",href:"/playground",children:"Try Playground"}),(0,t.jsx)(s,{variant:"success",href:"#bosses",children:"Browse Skills"}),(0,t.jsx)(s,{variant:"warning",href:"https://github.com/boss-skills",children:"View on GitHub"})]})]}),(0,t.jsx)("section",{className:"section scene-wrapper",children:(0,t.jsx)(o,{})}),(0,t.jsxs)("section",{id:"bosses",className:"section",children:[(0,t.jsx)(i,{en:"CHOOSE YOUR BOSS",cn:"选择你的老板",subtitle:"Like a game character select screen, but with your stress levels"}),(0,t.jsx)("div",{className:"boss-grid",children:l.map(e=>(0,t.jsx)(r,{nameEn:e.nameEn,nameCn:e.nameCn,name:e.nameEn,description:e.descriptionEn,descriptionCn:e.descriptionCn,oneLiner:e.oneLinEn,oneLineCn:e.oneLinCn,annoyanceLevel:e.annoyanceLevel,slug:e.slug,locale:"en"},e.slug))})]}),(0,t.jsxs)("section",{className:"section",children:[(0,t.jsx)(i,{en:"HOW IT WORKS",cn:"它如何工作",subtitle:"Three simple steps to deployment"}),(0,t.jsxs)("div",{className:"how-it-works",children:[(0,t.jsxs)("div",{className:"how-step",children:[(0,t.jsx)("div",{className:"step-icon",children:"💾"}),(0,t.jsx)("div",{className:"step-title",children:"Install"}),(0,t.jsx)("div",{className:"step-desc",children:"Add Boss Skills to your project"})]}),(0,t.jsxs)("div",{className:"how-step",children:[(0,t.jsx)("div",{className:"step-icon",children:"👤"}),(0,t.jsx)("div",{className:"step-title",children:"Choose"}),(0,t.jsx)("div",{className:"step-desc",children:"Select your boss personality"})]}),(0,t.jsxs)("div",{className:"how-step",children:[(0,t.jsx)("div",{className:"step-icon",children:"🚀"}),(0,t.jsx)("div",{className:"step-title",children:"Deploy"}),(0,t.jsx)("div",{className:"step-desc",children:"Watch the chaos unfold"})]})]})]}),(0,t.jsxs)("section",{className:"section",children:[(0,t.jsx)(i,{en:"TRY BEFORE YOU CRY",cn:"先试试，别哭",subtitle:"Get a taste of what your boss skills can do"}),(0,t.jsxs)("div",{className:"nes-container with-title",style:{marginTop:"24px"},children:[(0,t.jsx)("p",{className:"title",children:"Interactive Playground"}),(0,t.jsx)("p",{className:"text-slate mb-6",children:"Test-drive different boss personalities without leaving your desk. Watch how they respond to common workplace scenarios. It\\'s like a performance preview, except everything feels off."}),(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(s,{variant:"primary",href:"/playground",children:"Open Playground"})})]})]}),(0,t.jsx)("section",{className:"section",children:(0,t.jsxs)("div",{className:"github-cta",children:[(0,t.jsx)("h2",{className:"github-cta-title",children:"READY TO DEPLOY YOUR WORST NIGHTMARE?"}),(0,t.jsx)("p",{className:"text-slate mb-6",style:{fontSize:"1.125rem"},children:"Join thousands of developers crafting the perfect boss experience"}),(0,t.jsxs)("div",{className:"cta-group",style:{justifyContent:"center"},children:[(0,t.jsx)(s,{variant:"success",href:"https://github.com/boss-skills",children:"⭐ Star on GitHub"}),(0,t.jsx)(s,{variant:"primary",href:"https://github.com/boss-skills/contribute",children:"🤝 Contribute a Boss"})]})]})}),(0,t.jsxs)("footer",{className:"footer",children:[(0,t.jsx)("p",{children:"Boss Skills © 2025 | Made with ❌ love and 💀 suffering"}),(0,t.jsx)("p",{style:{marginTop:"12px",fontSize:"0.75rem"},children:"This is a parody project. Any resemblance to your actual boss is entirely intentional."})]})]})}],52683)}]);