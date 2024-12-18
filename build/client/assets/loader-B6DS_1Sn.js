import{r as s,j as y,L as Y}from"./components-BRXnhjxE.js";import{p as a,b as G,d as j,T as Z,a as ee}from"./config-TWCdCk-N.js";const X=s.createContext(null),N=typeof document<"u",U=N?s.useLayoutEffect:s.useEffect;class F{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function te(e){let t=new F,n=new F,o=0,r=!1,i=!1;const l=new WeakSet,u={schedule:(d,p=!1,f=!1)=>{const c=f&&r,m=c?t:n;return p&&l.add(d),m.add(d)&&c&&r&&(o=t.order.length),d},cancel:d=>{n.remove(d),l.delete(d)},process:d=>{if(r){i=!0;return}if(r=!0,[t,n]=[n,t],n.clear(),o=t.order.length,o)for(let p=0;p<o;p++){const f=t.order[p];l.has(f)&&(u.schedule(f),e()),f(d)}r=!1,i&&(i=!1,u.process(d))}};return u}const v=["prepare","read","update","preRender","render","postRender"],ne=40;function se(e,t){let n=!1,o=!0;const r={delta:0,timestamp:0,isProcessing:!1},i=v.reduce((c,m)=>(c[m]=te(()=>n=!0),c),{}),l=c=>{i[c].process(r)},u=()=>{const c=performance.now();n=!1,r.delta=o?1e3/60:Math.max(Math.min(c-r.timestamp,ne),1),r.timestamp=c,r.isProcessing=!0,v.forEach(l),r.isProcessing=!1,n&&t&&(o=!1,e(u))},d=()=>{n=!0,o=!0,r.isProcessing||e(u)};return{schedule:v.reduce((c,m)=>{const k=i[m];return c[m]=(g,S=!1,C=!1)=>(n||d(),k.schedule(g,S,C)),c},{}),cancel:c=>v.forEach(m=>i[m].cancel(c)),state:r,steps:i}}const oe=s.createContext({});function re(e){const t=s.useRef(null);return t.current===null&&(t.current=e()),t.current}const ae=e=>e,{schedule:ce,cancel:ct,state:it,steps:lt}=se(typeof requestAnimationFrame<"u"?requestAnimationFrame:ae,!0);function ie(){const e=s.useContext(X);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:o}=e,r=s.useId();return s.useEffect(()=>o(r),[]),!t&&n?[!1,()=>n&&n(r)]:[!0]}const I={current:null},K={current:!1};function le(){if(K.current=!0,!!N)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>I.current=e.matches;e.addListener(t),t()}else I.current=!1}function q(){const e=s.useRef(!1);return U(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function fe(){const e=q(),[t,n]=s.useState(0),o=s.useCallback(()=>{e.current&&n(t+1)},[t]);return[s.useCallback(()=>ce.postRender(o),[o]),t]}class ue extends s.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function de({children:e,isPresent:t}){const n=s.useId(),o=s.useRef(null),r=s.useRef({width:0,height:0,top:0,left:0});return s.useInsertionEffect(()=>{const{width:i,height:l,top:u,left:d}=r.current;if(t||!o.current||!i||!l)return;o.current.dataset.motionPopId=n;const p=document.createElement("style");return document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${l}px !important;
            top: ${u}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[t]),s.createElement(ue,{isPresent:t,childRef:o,sizeRef:r},s.cloneElement(e,{ref:o}))}const $=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:r,presenceAffectsLayout:i,mode:l})=>{const u=re(pe),d=s.useId(),p=s.useMemo(()=>({id:d,initial:t,isPresent:n,custom:r,onExitComplete:f=>{u.set(f,!0);for(const c of u.values())if(!c)return;o&&o()},register:f=>(u.set(f,!1),()=>u.delete(f))}),i?void 0:[n]);return s.useMemo(()=>{u.forEach((f,c)=>u.set(c,!1))},[n]),s.useEffect(()=>{!n&&!u.size&&o&&o()},[n]),l==="popLayout"&&(e=s.createElement(de,{isPresent:n},e)),s.createElement(X.Provider,{value:p},e)};function pe(){return new Map}function me(e){return s.useEffect(()=>()=>e(),[])}const b=e=>e.key||"";function he(e,t){e.forEach(n=>{const o=b(n);t.set(o,n)})}function xe(e){const t=[];return s.Children.forEach(e,n=>{s.isValidElement(n)&&t.push(n)}),t}const ye=({children:e,custom:t,initial:n=!0,onExitComplete:o,exitBeforeEnter:r,presenceAffectsLayout:i=!0,mode:l="sync"})=>{const u=s.useContext(oe).forceRender||fe()[0],d=q(),p=xe(e);let f=p;const c=s.useRef(new Map).current,m=s.useRef(f),k=s.useRef(new Map).current,g=s.useRef(!0);if(U(()=>{g.current=!1,he(p,k),m.current=f}),me(()=>{g.current=!0,k.clear(),c.clear()}),g.current)return s.createElement(s.Fragment,null,f.map(h=>s.createElement($,{key:b(h),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:i,mode:l},h)));f=[...f];const S=m.current.map(b),C=p.map(b),M=S.length;for(let h=0;h<M;h++){const x=S[h];C.indexOf(x)===-1&&!c.has(x)&&c.set(x,void 0)}return l==="wait"&&c.size&&(f=[]),c.forEach((h,x)=>{if(C.indexOf(x)!==-1)return;const z=k.get(x);if(!z)return;const w=S.indexOf(x);let L=h;if(!L){const J=()=>{c.delete(x);const _=Array.from(k.keys()).filter(T=>!C.includes(T));if(_.forEach(T=>k.delete(T)),m.current=p.filter(T=>{const P=b(T);return P===x||_.includes(P)}),!c.size){if(d.current===!1)return;u(),o&&o()}};L=s.createElement($,{key:b(z),isPresent:!1,onExitComplete:J,custom:t,presenceAffectsLayout:i,mode:l},z),c.set(x,L)}f.splice(w,0,L)}),f=f.map(h=>{const x=h.key;return c.has(x)?h:s.createElement($,{key:b(h),isPresent:!0,presenceAffectsLayout:i,mode:l},h)}),s.createElement(s.Fragment,null,c.size?f:f.map(h=>s.cloneElement(h)))};function ke(){!K.current&&le();const[e]=s.useState(I.current);return e}const ge="/assets/OperatorMono-D7WvIKEd.woff2",Se="/assets/AGThin-BV3b-dHU.ttf",Ce="/assets/AGBlack-CTa2XGQt.ttf",Le="/assets/AGBlackItalic-sul5g3oJ.ttf",ze="/assets/AGBold-x0qq96lT.ttf",be="/assets/AGBoldItalic-FSwS18fN.ttf",Re="/assets/AGLight-C7oQdQYa.ttf",Me="/assets/AGLightItalic-Bx04CrxG.ttf",we="/assets/AGMedium-7qHP5tWb.ttf",Te="/assets/AGMediumItalic-CM3QocvE.ttf",Ae="/assets/AGRegular-B1D8PH8b.ttf",Ge="/assets/AGRegularItalic-BUXI5k5L.ttf",ve="/assets/AGThinItalic-D3U6Kc1h.ttf",He={black:"oklch(0% 0 0)",white:"oklch(100% 0 0)",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:"system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",fontStack:"AtlasGroteskLC, var(--systemFontStack)",monoFontStack:"ui-monospace, OperatorMonoLig, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",fontWeightThin:100,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontWeightBlack:900,fontSizeH0:a(140),fontSizeH1:a(100),fontSizeH2:a(58),fontSizeH3:a(38),fontSizeH4:a(28),fontSizeH5:a(24),fontSizeBodyXL:a(22),fontSizeBodyL:a(20),fontSizeBodyM:a(18),fontSizeBodyS:a(16),fontSizeBodyXS:a(14),lineHeightTitle:"1.1",lineHeightBody:"1.6",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px",zIndex0:0,zIndex1:4,zIndex2:8,zIndex3:16,zIndex4:32,zIndex5:64},$e={fontSizeH0:a(120),fontSizeH1:a(80)},Be={maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:a(100),fontSizeH1:a(70),fontSizeH2:a(50),fontSizeH3:a(36),fontSizeH4:a(26),fontSizeH5:a(22)},Ie={fontSizeH0:a(80),fontSizeH1:a(60),fontSizeH2:a(48),fontSizeH3:a(32),fontSizeH4:a(24),fontSizeH5:a(20)},_e={spaceOuter:"24px",fontSizeH0:a(56),fontSizeH1:a(40),fontSizeH2:a(34),fontSizeH3:a(28),fontSizeH4:a(22),fontSizeH5:a(18),fontSizeBodyL:a(17),fontSizeBodyM:a(16),fontSizeBodyS:a(14)},Pe={spaceOuter:"16px",fontSizeH0:a(42),fontSizeH1:a(38),fontSizeH2:a(28),fontSizeH3:a(24),fontSizeH4:a(20)},je={background:"oklch(0% 0 0)",backgroundLight:"oklch(20% 0 0)",primary:"oklch(95% 0 0)",accent:"oklch(89.7% 0.14 83.6)",error:"oklch(65.91% 0.249 13.76)",text:"var(--white)",textTitle:"var(--text)",linkColor:"var(--accent)",textBody:"color-mix(in lab, var(--text) 80%, transparent)",textLight:"color-mix(in lab, var(--text) 60%, transparent)"},Fe={background:"oklch(96.12% 0 0)",backgroundLight:"var(--white)",primary:"var(--black)",accent:"oklch(18.3% 0.1 264.6)",error:"oklch(63.17% 0.259 25.41)",text:"var(--black)",textTitle:"color-mix(in lab, var(--text) 90%, transparent)",linkColor:"var(--accent)",textBody:"color-mix(in lab, var(--text) 75%, transparent)",textLight:"color-mix(in lab, var(--text) 55%, transparent)"},D={base:He,desktop:$e,laptop:Be,tablet:Ie,mobile:_e,mobileS:Pe},E={dark:je,light:Fe},Q=s.createContext({}),ft=({theme:e="dark",children:t,className:n,as:o="div",...r})=>{const l=!Ee().theme;return y.jsxs(Q.Provider,{value:{theme:e},children:[l&&t,!l&&y.jsx(o,{className:G(n),"data-theme":e,...r,children:t})]})};function Ee(){return s.useContext(Q)}function R(e){return e.replace(/\s\s+/g," ")}function H(e){return R(Object.keys(e).map(t=>`--${t}: ${e[t]};`).join(`

`))}function We(){return R(Object.keys(j).map(e=>`
        @media (max-width: ${j[e]}px) {
          :root {
            ${H(D[e])}
          }
        }
      `).join(`
`))}const Oe=R(`
  @layer theme, base, components, layout;
`),Xe=R(`
  :root {
    ${H(D.base)}
  }

  ${We()}

  [data-theme='dark'] {
    ${H(E.dark)}
  }

  [data-theme='light'] {
    ${H(E.light)}
  }
`),Ne=R(`  

  @font-face {
    font-family: OperatorMonoLig;
    src: url(${ge}) format('woff2');
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Se}) format('truetype');
    font-weight: 100;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Re}) format('truetype');
    font-weight: 300;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Ae}) format('truetype');
    font-weight: 400;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${we}) format('truetype');
    font-weight: 500;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${ze}) format('truetype');
    font-weight: 700;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Ce}) format('truetype');
    font-weight: 900;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${ve}) format('truetype');
    font-weight: 100;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Me}) format('truetype');
    font-weight: 300;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Ge}) format('truetype');
    font-weight: 400;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Te}) format('truetype');
    font-weight: 500;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${be}) format('truetype');
    font-weight: 700;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Le}) format('truetype');
    font-weight: 900;
    font-display: block;
    font-style: italic;
  }
`),ut=R(`
  ${Oe}

  @layer theme {
    ${Xe}
    ${Ne}
  }
`),Ue="_icon_1tdl1_2",Ke={icon:Ue},qe="/assets/icons-Ghr-oXj8.svg",W=s.forwardRef(({icon:e,className:t,size:n,...o},r)=>y.jsx("svg",{"aria-hidden":!0,ref:r,className:G(Ke.icon,t),width:n||24,height:n||24,...o,children:y.jsx("use",{href:`${qe}#${e}`})})),De=({children:e,in:t,unmount:n,initial:o=!0,...r})=>{const i=s.useRef(),l=s.useRef();return s.useEffect(()=>{clearTimeout(t?l.current:i.current)},[t]),y.jsx(ye,{children:(t||!n)&&y.jsx(Qe,{enterTimeout:i,exitTimeout:l,in:t,initial:o,...r,children:e})})},Qe=({children:e,timeout:t=0,enterTimeout:n,exitTimeout:o,onEnter:r,onEntered:i,onExit:l,onExited:u,initial:d,nodeRef:p,in:f})=>{const[c,m]=s.useState(d?"exited":"entered"),[k,g]=ie(),[S,C]=s.useState(!d),M=typeof t=="object",h=s.useRef(null),x=p||h,z=S&&f?k:!1;return s.useEffect(()=>{var L;if(S||!f)return;const w=M?t.enter:t;clearTimeout(n.current),clearTimeout(o.current),C(!0),m("entering"),r==null||r(),(L=x.current)==null||L.offsetHeight,n.current=setTimeout(()=>{m("entered"),i==null||i()},w)},[r,i,t,c,f]),s.useEffect(()=>{var L;if(k&&f)return;const w=M?t.exit:t;clearTimeout(n.current),clearTimeout(o.current),m("exiting"),l==null||l(),(L=x.current)==null||L.offsetHeight,o.current=setTimeout(()=>{m("exited"),g==null||g(),u==null||u()},w)},[k,l,g,t,u,f]),e({visible:z,status:c,nodeRef:x})},Ve="_button_1l2e3_2",Je="_text_1l2e3_132",Ye="_loader_1l2e3_145",Ze="_icon_1l2e3_158",A={button:Ve,text:Je,loader:Ye,icon:Ze};function V(e){return(e==null?void 0:e.includes("://"))??!1}const dt=s.forwardRef(({href:e,...t},n)=>V(e)||!e?y.jsx(O,{href:e,ref:n,...t}):y.jsx(O,{unstable_viewTransition:!0,as:Y,prefetch:"intent",to:e,ref:n,...t})),O=s.forwardRef(({className:e,as:t,secondary:n,loading:o,loadingText:r="loading",icon:i,iconEnd:l,iconHoverShift:u,iconOnly:d,children:p,rel:f,target:c,href:m,disabled:k,...g},S)=>{const C=V(m),h=t||(m?"a":"button");return y.jsxs(h,{className:G(A.button,e),"data-loading":o,"data-icon-only":d,"data-secondary":n,"data-icon":i,href:m,rel:f||(C?"noopener noreferrer":void 0),target:c||(C?"_blank":void 0),disabled:k,ref:S,...g,children:[!!i&&y.jsx(W,{className:A.icon,"data-start":!d,"data-shift":u,icon:i}),!!p&&y.jsx("span",{className:A.text,children:p}),!!l&&y.jsx(W,{className:A.icon,"data-end":!d,"data-shift":u,icon:l}),y.jsx(De,{unmount:!0,in:o,children:({visible:x,nodeRef:z})=>y.jsx(ot,{ref:z,className:A.loader,size:32,text:r,"data-visible":x})})]})}),et="_loader_1o1zt_2",tt="_text_1o1zt_17",nt="_span_1o1zt_43",st="_loaderSpan_1o1zt_1",B={loader:et,text:tt,span:nt,loaderSpan:st},ot=s.forwardRef(({className:e,style:t,width:n=32,height:o=4,text:r="Loading...",center:i,...l},u)=>ke()?y.jsx(Z,{className:G(B.text,e),weight:"medium",...l,children:r}):y.jsx("div",{ref:u,className:G(B.loader,e),"data-center":i,style:ee({width:n,height:o},t),...l,children:y.jsx("div",{className:B.span})}));export{Ae as A,dt as B,W as I,ge as O,De as T,D as a,ut as b,ft as c,ce as d,ct as e,it as f,re as g,U as h,Ee as i,ae as n,E as t,ke as u};
