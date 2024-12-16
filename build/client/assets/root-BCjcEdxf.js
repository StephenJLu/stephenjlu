import{h as ie,k as F,n as ve,o as ue,r as s,q as fe,j as t,s as de,L as B,t as me,M as pe,v as xe,O as ge,S as ke}from"./components-DHLhvGvi.js";import{p as r,c as M,m as U,T as ye,a as Z,b as C,d as V,n as be}from"./config-CqaACBDh.js";import{u as ee,f as _e,a as Se,b as te}from"./use-reduced-motion-BjFDJR4s.js";/**
 * @remix-run/react v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let D="positions";function je({getKey:e,...n}){let{isSpaMode:o}=ie(),l=F(),c=ve();ue({getKey:e,storageKey:D});let h=s.useMemo(()=>{if(!e)return null;let i=e(l,c);return i!==l.key?i:null},[]);if(o)return null;let a=((i,d)=>{if(!window.history.state||!window.history.state.key){let f=Math.random().toString(32).slice(2);window.history.replaceState({key:f},"")}try{let v=JSON.parse(sessionStorage.getItem(i)||"{}")[d||window.history.state.key];typeof v=="number"&&window.scrollTo(0,v)}catch(f){console.error(f),sessionStorage.removeItem(i)}}).toString();return s.createElement("script",fe({},n,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${a})(${JSON.stringify(D)}, ${JSON.stringify(h)})`}}))}const Ce=({typeText:e,delay:n=0})=>{const[o,l]=s.useState(0);return s.useEffect(()=>{const c=setTimeout(()=>{const h=setInterval(()=>{l(a=>a<e.length?a+1:a)},50);return()=>clearInterval(h)},n);return()=>clearTimeout(c)},[e,n]),t.jsx("span",{children:e.slice(0,o)})},Le=Ce,ne=s.createContext(null),we=s.createContext({});function $e(){const e=s.useContext(ne);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:o,register:l}=e,c=s.useId();return s.useEffect(()=>l(c),[]),!n&&o?[!1,()=>o&&o(c)]:[!0]}function se(){const e=s.useRef(!1);return ee(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Ie(){const e=se(),[n,o]=s.useState(0),l=s.useCallback(()=>{e.current&&o(n+1)},[n]);return[s.useCallback(()=>_e.postRender(l),[l]),n]}class Te extends s.Component{getSnapshotBeforeUpdate(n){const o=this.props.childRef.current;if(o&&n.isPresent&&!this.props.isPresent){const l=this.props.sizeRef.current;l.height=o.offsetHeight||0,l.width=o.offsetWidth||0,l.top=o.offsetTop,l.left=o.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function ze({children:e,isPresent:n}){const o=s.useId(),l=s.useRef(null),c=s.useRef({width:0,height:0,top:0,left:0});return s.useInsertionEffect(()=>{const{width:h,height:a,top:i,left:d}=c.current;if(n||!l.current||!h||!a)return;l.current.dataset.motionPopId=o;const f=document.createElement("style");return document.head.appendChild(f),f.sheet&&f.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${a}px !important;
            top: ${i}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(f)}},[n]),s.createElement(Te,{isPresent:n,childRef:l,sizeRef:c},s.cloneElement(e,{ref:l}))}const E=({children:e,initial:n,isPresent:o,onExitComplete:l,custom:c,presenceAffectsLayout:h,mode:a})=>{const i=Se(Me),d=s.useId(),f=s.useMemo(()=>({id:d,initial:n,isPresent:o,custom:c,onExitComplete:v=>{i.set(v,!0);for(const m of i.values())if(!m)return;l&&l()},register:v=>(i.set(v,!1),()=>i.delete(v))}),h?void 0:[o]);return s.useMemo(()=>{i.forEach((v,m)=>i.set(m,!1))},[o]),s.useEffect(()=>{!o&&!i.size&&l&&l()},[o]),a==="popLayout"&&(e=s.createElement(ze,{isPresent:o},e)),s.createElement(ne.Provider,{value:f},e)};function Me(){return new Map}function Ne(e){return s.useEffect(()=>()=>e(),[])}const w=e=>e.key||"";function He(e,n){e.forEach(o=>{const l=w(o);n.set(l,o)})}function Re(e){const n=[];return s.Children.forEach(e,o=>{s.isValidElement(o)&&n.push(o)}),n}const Be=({children:e,custom:n,initial:o=!0,onExitComplete:l,exitBeforeEnter:c,presenceAffectsLayout:h=!0,mode:a="sync"})=>{const i=s.useContext(we).forceRender||Ie()[0],d=se(),f=Re(e);let v=f;const m=s.useRef(new Map).current,y=s.useRef(v),b=s.useRef(new Map).current,_=s.useRef(!0);if(ee(()=>{_.current=!1,He(f,b),y.current=v}),Ne(()=>{_.current=!0,b.clear(),m.clear()}),_.current)return s.createElement(s.Fragment,null,v.map(p=>s.createElement(E,{key:w(p),isPresent:!0,initial:o?void 0:!1,presenceAffectsLayout:h,mode:a},p)));v=[...v];const u=y.current.map(w),g=f.map(w),k=u.length;for(let p=0;p<k;p++){const x=u[p];g.indexOf(x)===-1&&!m.has(x)&&m.set(x,void 0)}return a==="wait"&&m.size&&(v=[]),m.forEach((p,x)=>{if(g.indexOf(x)!==-1)return;const L=b.get(x);if(!L)return;const I=u.indexOf(x);let j=p;if(!j){const he=()=>{m.delete(x);const W=Array.from(b.keys()).filter(T=>!g.includes(T));if(W.forEach(T=>b.delete(T)),y.current=f.filter(T=>{const X=w(T);return X===x||W.includes(X)}),!m.size){if(d.current===!1)return;i(),l&&l()}};j=s.createElement(E,{key:w(L),isPresent:!1,onExitComplete:he,custom:n,presenceAffectsLayout:h,mode:a},L),m.set(x,j)}v.splice(I,0,j)}),v=v.map(p=>{const x=p.key;return m.has(x)?p:s.createElement(E,{key:w(p),isPresent:!0,presenceAffectsLayout:h,mode:a},p)}),s.createElement(s.Fragment,null,m.size?v:v.map(p=>s.cloneElement(p)))},Ae=({children:e})=>{const[n,o]=s.useState(!1),l=s.useRef(null);s.useEffect(()=>{const h=new IntersectionObserver(([a])=>{o(a.isIntersecting)},{root:null,rootMargin:"0px",threshold:.1});return l.current&&h.observe(l.current),()=>{l.current&&h.unobserve(l.current)}},[]);const c=e(n);return de.cloneElement(c,{ref:l})},Ge=Ae,Ee="_menuButton_8u4lm_5",Oe="_active_8u4lm_25",Pe="_bounce_8u4lm_1",J={menuButton:Ee,active:Oe,bounce:Pe},Fe=({item:e,isActive:n,onClick:o})=>{const l=()=>{o(e)};return t.jsx("button",{type:"button",onClick:l,className:`${J.menuButton} ${n?J.active:""}`,children:e.label})},We=Fe,oe="/assets/OperatorMono-D7WvIKEd.woff2",Xe="/assets/AGThin-BV3b-dHU.ttf",Ue="/assets/AGBlack-CTa2XGQt.ttf",Ve="/assets/AGBlackItalic-sul5g3oJ.ttf",De="/assets/AGBold-x0qq96lT.ttf",Je="/assets/AGBoldItalic-FSwS18fN.ttf",Ke="/assets/AGLight-C7oQdQYa.ttf",qe="/assets/AGLightItalic-Bx04CrxG.ttf",Qe="/assets/AGMedium-7qHP5tWb.ttf",Ye="/assets/AGMediumItalic-CM3QocvE.ttf",le="/assets/AGRegular-B1D8PH8b.ttf",Ze="/assets/AGRegularItalic-BUXI5k5L.ttf",et="/assets/AGThinItalic-D3U6Kc1h.ttf",tt={black:"oklch(0% 0 0)",white:"oklch(100% 0 0)",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:"system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",fontStack:"AtlasGroteskLC, var(--systemFontStack)",monoFontStack:"ui-monospace, OperatorMonoLig, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:r(140),fontSizeH1:r(100),fontSizeH2:r(58),fontSizeH3:r(38),fontSizeH4:r(28),fontSizeH5:r(24),fontSizeBodyXL:r(22),fontSizeBodyL:r(20),fontSizeBodyM:r(18),fontSizeBodyS:r(16),fontSizeBodyXS:r(14),lineHeightTitle:"1.1",lineHeightBody:"1.6",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px",zIndex0:0,zIndex1:4,zIndex2:8,zIndex3:16,zIndex4:32,zIndex5:64},nt={fontSizeH0:r(120),fontSizeH1:r(80)},st={maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:r(100),fontSizeH1:r(70),fontSizeH2:r(50),fontSizeH3:r(36),fontSizeH4:r(26),fontSizeH5:r(22)},ot={fontSizeH0:r(80),fontSizeH1:r(60),fontSizeH2:r(48),fontSizeH3:r(32),fontSizeH4:r(24),fontSizeH5:r(20)},lt={spaceOuter:"24px",fontSizeH0:r(56),fontSizeH1:r(40),fontSizeH2:r(34),fontSizeH3:r(28),fontSizeH4:r(22),fontSizeH5:r(18),fontSizeBodyL:r(17),fontSizeBodyM:r(16),fontSizeBodyS:r(14)},at={spaceOuter:"16px",fontSizeH0:r(42),fontSizeH1:r(38),fontSizeH2:r(28),fontSizeH3:r(24),fontSizeH4:r(20)},rt={background:"oklch(0% 0 0)",backgroundLight:"oklch(20% 0 0)",primary:"oklch(95% 0 0)",accent:"oklch(89.7% 0.14 83.6)",error:"oklch(65.91% 0.249 13.76)",text:"var(--white)",textTitle:"var(--text)",linkColor:"var(--accent)",textBody:"color-mix(in lab, var(--text) 80%, transparent)",textLight:"color-mix(in lab, var(--text) 60%, transparent)"},ct={background:"oklch(96.12% 0 0)",backgroundLight:"var(--white)",primary:"var(--black)",accent:"oklch(18.3% 0.1 264.6)",error:"oklch(63.17% 0.259 25.41)",text:"var(--black)",textTitle:"color-mix(in lab, var(--text) 90%, transparent)",linkColor:"var(--accent)",textBody:"color-mix(in lab, var(--text) 75%, transparent)",textLight:"color-mix(in lab, var(--text) 55%, transparent)"},G={base:tt,desktop:nt,laptop:st,tablet:ot,mobile:lt,mobileS:at},P={dark:rt,light:ct},ae=s.createContext({}),ht=({theme:e="dark",children:n,className:o,as:l="div",...c})=>{const a=!it().theme;return t.jsxs(ae.Provider,{value:{theme:e},children:[a&&n,!a&&t.jsx(l,{className:M(o),"data-theme":e,...c,children:n})]})};function it(){return s.useContext(ae)}function $(e){return e.replace(/\s\s+/g," ")}function A(e){return $(Object.keys(e).map(n=>`--${n}: ${e[n]};`).join(`

`))}function vt(){return $(Object.keys(U).map(e=>`
        @media (max-width: ${U[e]}px) {
          :root {
            ${A(G[e])}
          }
        }
      `).join(`
`))}const ut=$(`
  @layer theme, base, components, layout;
`),ft=$(`
  :root {
    ${A(G.base)}
  }

  ${vt()}

  [data-theme='dark'] {
    ${A(P.dark)}
  }

  [data-theme='light'] {
    ${A(P.light)}
  }
`),dt=$(`  

  @font-face {
    font-family: OperatorMonoLig;
    src: url(${oe}) format('woff2');
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Xe}) format('truetype');
    font-weight: 100;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Ke}) format('truetype');
    font-weight: 300;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${le}) format('truetype');
    font-weight: 400;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Qe}) format('truetype');
    font-weight: 500;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${De}) format('truetype');
    font-weight: 700;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Ue}) format('truetype');
    font-weight: 900;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${et}) format('truetype');
    font-weight: 100;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${qe}) format('truetype');
    font-weight: 300;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Ze}) format('truetype');
    font-weight: 400;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Ye}) format('truetype');
    font-weight: 500;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Je}) format('truetype');
    font-weight: 700;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Ve}) format('truetype');
    font-weight: 900;
    font-display: block;
    font-style: italic;
  }
`),mt=$(`
  ${ut}

  @layer theme {
    ${ft}
    ${dt}
  }
`),pt="_icon_nm21j_3",xt={icon:pt},gt="/assets/icons-D_LJnBDF.svg",N=s.forwardRef(({icon:e,className:n,size:o,...l},c)=>t.jsx("svg",{"aria-hidden":!0,ref:c,className:M(xt.icon,n),width:o||24,height:o||24,...l,children:t.jsx("use",{href:`${gt}#${e}`})})),re=({children:e,in:n,unmount:o,initial:l=!0,...c})=>{const h=s.useRef(),a=s.useRef();return s.useEffect(()=>{clearTimeout(n?a.current:h.current)},[n]),t.jsx(Be,{children:(n||!o)&&t.jsx(kt,{enterTimeout:h,exitTimeout:a,in:n,initial:l,...c,children:e})})},kt=({children:e,timeout:n=0,enterTimeout:o,exitTimeout:l,onEnter:c,onEntered:h,onExit:a,onExited:i,initial:d,nodeRef:f,in:v})=>{const[m,y]=s.useState(d?"exited":"entered"),[b,_]=$e(),[u,g]=s.useState(!d),k=typeof n=="object",p=s.useRef(null),x=f||p,L=u&&v?b:!1;return s.useEffect(()=>{var j;if(u||!v)return;const I=k?n.enter:n;clearTimeout(o.current),clearTimeout(l.current),g(!0),y("entering"),c==null||c(),(j=x.current)==null||j.offsetHeight,o.current=setTimeout(()=>{y("entered"),h==null||h()},I)},[c,h,n,m,v]),s.useEffect(()=>{var j;if(b&&v)return;const I=k?n.exit:n;clearTimeout(o.current),clearTimeout(l.current),y("exiting"),a==null||a(),(j=x.current)==null||j.offsetHeight,l.current=setTimeout(()=>{y("exited"),_==null||_(),i==null||i()},I)},[b,a,_,n,i,v]),e({visible:L,status:m,nodeRef:x})},yt="_button_4jwwg_3",bt="_text_4jwwg_263",_t="_loader_4jwwg_289",St="_icon_4jwwg_315",z={button:yt,text:bt,loader:_t,icon:St};function ce(e){return(e==null?void 0:e.includes("://"))??!1}const jt=s.forwardRef(({href:e,...n},o)=>ce(e)||!e?t.jsx(K,{href:e,ref:o,...n}):t.jsx(K,{unstable_viewTransition:!0,as:B,prefetch:"intent",to:e,ref:o,...n})),K=s.forwardRef(({className:e,as:n,secondary:o,loading:l,loadingText:c="loading",icon:h,iconEnd:a,iconHoverShift:i,iconOnly:d,children:f,rel:v,target:m,href:y,disabled:b,..._},u)=>{const g=ce(y),p=n||(y?"a":"button");return t.jsxs(p,{className:M(z.button,e),"data-loading":l,"data-icon-only":d,"data-secondary":o,"data-icon":h,href:y,rel:v||(g?"noopener noreferrer":void 0),target:m||(g?"_blank":void 0),disabled:b,ref:u,..._,children:[!!h&&t.jsx(N,{className:z.icon,"data-start":!d,"data-shift":i,icon:h}),!!f&&t.jsx("span",{className:z.text,children:f}),!!a&&t.jsx(N,{className:z.icon,"data-end":!d,"data-shift":i,icon:a}),t.jsx(re,{unmount:!0,in:l,children:({visible:x,nodeRef:L})=>t.jsx(It,{ref:L,className:z.loader,size:32,text:c,"data-visible":x})})]})}),Ct="_loader_11zpc_3",Lt="_text_11zpc_33",wt="_span_11zpc_85",$t="_loaderSpan_11zpc_1",O={loader:Ct,text:Lt,span:wt,loaderSpan:$t},It=s.forwardRef(({className:e,style:n,width:o=32,height:l=4,text:c="Loading...",center:h,...a},i)=>te()?t.jsx(ye,{className:M(O.text,e),weight:"medium",...a,children:c}):t.jsx("div",{ref:i,className:M(O.loader,e),"data-center":h,style:Z({width:o,height:l},n),...a,children:t.jsx("div",{className:O.span})})),Tt="_b_1lp8r_3",zt="_c_1lp8r_11",q={b:Tt,c:zt},Mt=()=>t.jsxs("svg",{id:"a","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 50 50",children:[t.jsx("path",{className:q.c,d:"M0,0v50h50V0H0ZM48.38,47.96H1.62V2.04h46.75v45.92Z"}),t.jsx("path",{className:q.b,d:"M31.5,34.71c.11-.03.13-.07.21-.12v-.04h.08v-.04h.08v-.04h.17v-.04c.13-.04.46.06.54.08.19.05.38-.07.54-.08l.21-.25h.04v-.08l.08-.04v-.12h.04v-.12h.04v-.21h.04v-.33h.04v-3.04c.07-.27.04-.71.04-1.04v-4.21h-.04v-.17c-.01-.49.07-1.13-.04-1.54v-.67c0-.5,0-1.07-.04-1.5l.04-3.08c.07-.26.09-1.42,0-1.67-.05.05-.02,0-.04.08h-.04l-.04.25c-.2.53-.08,1.2-.08,1.83l-.04,3.83v.17h.04v1.62c-.11.38-.04,1-.04,1.46l-.04,2c.09.33.09,1.67,0,2l-.04.62-.29,1.04h-.04v.08h-.04v.12h-.04l-.08.25h-.04v.08h-.04v.08h-.04v.08h-.04l-.08.25-.08.04-.04.17-.12.08v.08l-.08.04v.08l-.12.08v.08l-.12.08v.08l-.33.29v.08l-.29.25-.04.08h-.08l-.21.25h-.08l-.12.17-.12.04-.04.08h-.08l-.08.12h-.08l-.04.08-.12.04v.04h-.08l-.04.08-.17.04-.04.08-.17.04-.04.08-.25.08v.04h-.08v.04l-.25.08v.04h-.12v.04l-.17.04v.04h-.12v.04h-.08v.04h-.12v.04h-.08v.04l-.25.04v.04h-.12v.04h-.12v.04h-.12v.04l-.33.04v.04h-.17v.04h-.17v.04h-.17v.04h-.25v.04h-.25v.04h-.37v.04h-.75v.04l-.83-.04v-.04h-.42v-.04l-.83-.08v-.04h-.21v-.04l-.37-.04v-.04h-.17v-.04h-.17v-.04h-.17v-.04h-.12v-.04h-.12v-.04h-.12v-.04h-.12v-.04l-.25-.04v-.04h-.08v-.04h-.12v-.04h-.08v-.04h-.12v-.04l-.17-.04v-.04l-.17-.04-.04-.08h-.08v-.04h-.08v-.04h-.08v-.04h-.08l-.08-.12h-.08l-.04-.08h-.08l-.08-.12h-.08l-.12-.17-.33-.29-.04-.12-.29-.25v-.04h-.08l-.21.25h-.08l-.12.17-.12.04-.04.08h-.08l-.04.08-.12.04v.04h-.08l-.04.08h-.08l-.04.08-.17.04-.04.08h-.08v.04h-.08v.04h-.08v.04h-.08v.04h-.08v.04h-.08v.04h-.08v.04l-.25.08v.04h-.12v.04l-.17.04v.04h-.12v.04h-.08v.04l-.25.04v.04h-.08v.04h-.17v.04h-.12v.04h-.12v.04h-.12v.04h-.17v.04h-.17v.04h-.17v.04h-.17v.04h-.21v.04l-.42.04v.04h-.25v.04h-.29v.04h-.33v.04h-.37v.04h-.5v.04h-1.12v.04l-.87-.04v-.04h-.42v-.04h-.29c-.21-.06-.51-.1-.71-.17h-.21c-.22-.07-.5-.14-.71-.21h-.17v-.04h-.12v-.04h-.12v-.04l-.54-.12v-.04h-.08v-.04h-.12v-.04l-.17-.04v-.04l-.37-.12-.04-.08-.17-.04c-.43-.27-.61-.77-1.29-.79-.03.05-.07.06-.08.08v.08h-.04l-.04.37h-.04l-.04.62h-.04l-.08.25-.25.21s-.03.06-.04.08c-.07.05-.09,0-.17.08l-.42.04c-.07-.08-.1-.04-.17-.08l-.12-.17h-.04c-.23-.34-.3-1.48-.17-1.96v-.42h.04v-.33h.04v-.37h.04v-.37h.04v-.37h.04v-.5h.04v-.29h-.04v-.54l-.04-1.08h-.04l-.08-1.54h-.04v-.5h-.04v-.54c-.09-.31-.07-1.04.04-1.29l.25-.33h.08l.04-.08c.08-.05.09,0,.17-.08.29,0,.42.04.62.08l.21.25h.04v.08h.04l.04.17h.04l.04.46h.04v.54c0,.46-.02.99.08,1.33v.21h.04v.12h.04v.17h.04v.08h.04l.04.25h.04v.08h.04v.12h.04l.08.25h.04v.08h.04v.12h.04v.08h.04l.08.25h.04v.12h.04v.08h.04l.04.17h.04v.12h.04l.04.17h.04v.12h.04v.08h.04l.04.17h.04l.12.37.08.04.08.25.08.04v.08l.12.08v.08l.12.08v.08l.12.08v.08l.21.17v.08l.29.25v.08l.37.33.12.17h.08l.12.17h.08l.12.17h.08l.04.08h.08l.04.08.17.04.04.08h.08v.04h.08v.04c.43.19.9.28,1.37.42h.33c.31.09,1.52.09,1.83,0h.37c.25-.07.59-.09.83-.17h.21v-.04h.17v-.04h.17v-.04h.17v-.04h.17v-.04h.12v-.04h.12v-.04h.12v-.04h.08v-.04l.25-.04v-.04h.08v-.04h.12v-.04l.17-.04v-.04h.08v-.04h.12v-.04h.08v-.04h.08l.04-.08.25-.08.04-.08.17-.04.04-.08h.08l.04-.08h.08l.08-.12h.08l.12-.17h.08l.42-.46c.14-.14.35-.3.37-.54h-.04l-.04-.25h-.04v-.12h-.04v-.12c-.17-.43-.25-.94-.25-1.54l-.04-.5h.04l.04-.33h.04l.08-.25h.04v-.08h.04v-.08l.46-.5h.08l.04-.08h.08v-.04c.12-.07.07.04.12-.12h-.04l-.04-.25h-.04v-.08h-.04v-.08h-.04v-.08h-.04v-.08h-.04v-.08h-.04v-.08l-.08-.04-.04-.17-.17-.12v-.08l-.21-.17-.37-.42h-.08l-.12-.17h-.08l-.04-.08h-.08l-.04-.08h-.08l-.04-.08h-.08l-.04-.08-.17-.04-.04-.08h-.08v-.04h-.08v-.04h-.08v-.04h-.08v-.04h-.08v-.04h-.08l-.04-.08-.21-.04v-.04h-.08v-.04l-.25-.08v-.04h-.12v-.04h-.08v-.04l-.21-.04v-.04h-.12v-.04h-.08v-.04l-.25-.04v-.04h-.12v-.04h-.12v-.04h-.17v-.04h-.17v-.04h-.17v-.04h-.21v-.04l-.42-.04v-.04l-.46-.04v-.04h-.33v-.04h-.29v-.04h-.29v-.04h-.29c-.27-.08-.62-.13-.87-.21h-.21v-.04l-.29-.04v-.04l-.29-.04v-.04h-.12v-.04h-.12v-.04l-.25-.04v-.04h-.08v-.04l-.25-.04v-.04l-.25-.08v-.04l-.25-.08-.04-.08h-.08l-.04-.08h-.08l-.08-.12h-.08l-.08-.12h-.08l-.12-.17h-.08l-.29-.33-.12-.08v-.08l-.25-.21v-.08l-.12-.08v-.08l-.08-.04v-.08l-.08-.04v-.08l-.08-.04-.08-.25h-.04v-.08h-.04v-.08h-.04l-.08-.25h-.04l-.29-1.04v-.33c-.15-.55.01-1.32.17-1.71v-.12h.04v-.08h.04v-.12h.04l.04-.17h.04l.04-.17.08-.04.04-.17.08-.04v-.08l.12-.08v-.08l.17-.12v-.08l.29-.25.17-.21h.08l.12-.17h.08l.08-.12.12-.04.04-.08h.08v-.04h.08l.04-.08.25-.08.04-.08.17-.04v-.04l.17-.04v-.04h.12v-.04h.08v-.04l.21-.04v-.04l.25-.04v-.04h.08v-.04l1.17-.25h.46c.13-.04.64-.1.83-.04v.04h.33v.04h.25v.04h.25v.04l.33.04v.04h.12v.04h.12v.04h.12v.04h.12v.04l.17.04v.04h.12v.04l.25.08v.04h.08v.04h.08v.04l.67.29v.04h.08v.04l.25.08v.04l.25.04v.04h.58v-.04c.25-.11.4-.28.58-.46l.08-.12c.22-.16.49-.21.87-.21v.04h.12l.04.08h.08l.21.29v.12h.04v.12h.04v.21h.04v.37h.04v.5h.04l.04.46h.04l.04.29h.04v.08h.04v.12h.04v.12h.04v.12h.04l.04.25h.04v.08h.04l.04.25h.04v.08h.04v.12h.04v.12h.04v.12h.04v.12h.04v.12h.04v.12h.04v.12h.04l.12.58h.04v.21c.03.08.09.35.04.5h-.04l-.04.21c-.09.05-.09.09-.21.12-.19.18-.59.05-.75-.04h-.08l-.46-.5-.04-.17-.08-.04-.04-.17h-.04l-.04-.12-.08-.04-.04-.17h-.04l-.04-.12-.08-.04v-.08l-.12-.08v-.08l-.42-.37-.04-.12h-.08l-.33-.37-.17-.12v-.08l-.33-.29-.04-.12-.12-.08-.25-.29h-.08l-.12-.17h-.08l-.08-.12h-.08l-.08-.12h-.08v-.04h-.08l-.04-.08-.17-.04-.04-.08h-.08v-.04l-.17-.04v-.04h-.12v-.04l-.17-.04v-.04l-.21-.04v-.04h-.17v-.04h-.12v-.04h-.12v-.04h-.17v-.04h-.21v-.04h-.25v-.04l-1.17-.04c-1.17,0-1.96.21-2.54.79l-.17.12v.08l-.08.04-.04.12h-.04v.08h-.04v.08h-.04v.12h-.04v.12c-.15.4-.16.82,0,1.21v.12h.04v.08l.08.04v.08l.08.04.21.25h.08l.08.12.17.04v.04l.25.08v.04h.12v.04h.12v.04h.12v.04h.17v.04h.17v.04h.29v.04h.37v.04h.87v.04h.37v.04h.29c.32.1.73.14,1.04.25l.33.04v.04h.12v.04h.12v.04l.42.08v.04h.08v.04l.25.04v.04l.17.04v.04h.12v.04l.25.08v.04h.08v.04l.25.08.04.08.25.08.04.08.25.08v.04l.12.04.04.08.17.04.04.08h.08v.04l.12.04.04.08h.08v.04l.12.04.04.08h.08l.08.12h.08l.04.08h.08l.08.12h.08l.04.08h.04l.04.08h.08l.12.17h.08l.21.25h.08l.37.42.46.42v.08l.21.17v.08l.12.08v.08l.12.08v.08l.12.08v.08l.08.04v.08l.08.04.08.25.08.04v.08h.04v.08h.04v.08h.04v.08h.04v.08h.04v.08h.04l.08.25h.04v.12h.04v.08h.04l.04.25c.41.95.52,2.25.46,3.54l-.08.62h-.04l-.04.37h-.04l-.04.29h-.04l-.04.25h-.04v.08h-.04v.12h-.04l-.04.21h-.04v.08h-.04v.08h-.04v.08h-.04v.08h-.04v.08l-.08.04-.04.17h-.04v.04h.04l.21.25h.08l.25.29h.08l.12.17h.08l.08.12h.08l.08.12h.08l.04.08h.08l.04.08.17.04.04.08.25.08v.04h.08v.04h.08v.04l.25.08v.04l.25.04v.04h.12v.04h.12v.04h.12v.04h.12v.04h.21v.04h.21v.04h.25v.04h.42v.04h.42c.36,0,.84.04,1.12-.04h.29v-.04h.21v-.04h.17v-.04h.12v-.04h.17c1.81-.71,3.05-2.01,3.71-3.87l.08-.54v-.33c.07-.24.04-.65.04-.96v-1.75l.04-4.83h.04v-.62c.09-.32.04-.85.04-1.25v-2.58l-.04-1.25h-.04v-.12l-.08-.04v-.08l-.17-.12-.04-.08h-.08l-.04-.08h-.08l-.04-.08h-.08v-.04h-.08v-.04h-.08v-.04h-.08l-.04-.08c-.1-.06-.22-.04-.33-.08v-.04h-.17v-.04h-.17v-.04h-.12v-.04h-.12c-.14-.06-.24-.15-.33-.25l-.08-.04v-.25l.12-.08v-.04h.08l.04-.08.25-.04v-.04c.24-.08,1.04.04,1.21.08h.42c.21.06.59-.03.83.04.07.02.29.09.42.04v-.04h.08v-.04l.29-.04v-.04c.06-.01.37.07.42.08l2,.04c.1-.03.44-.12.58-.08.19.05.59.16.87.08v-.04h1c.25-.07.66.03.92-.04v-.04h.33v.04h.33v.04l.25.04.12.17h.04c.06.09.04.24.04.37-.08.07-.03.1-.08.17l-.29.25-.04.08-.25.08v.04h-.12c-.46.18-1.33.13-1.46.62-.2.18-.12.79-.12,1.17l-.04,2.96v2.21c.07.27.04.71.04,1.04l.04,1.29v2.46h.04v1h.04v.62c0,.5.03,1.11-.04,1.54v1.12c0,1.11,0,2.29.75,2.62.54.24,1.49-.03,2.17.08.45.07,1.07.04,1.58.04.29,0,.66.02.88-.04l.54-.04v-.04h.17v-.04h.12v-.04h.12v-.04h.08v-.04h.12v-.04l.17-.04v-.04h.08l.04-.08.17-.04.04-.08h.08l.08-.12h.08l.08-.12h.08l.17-.21h.08l.17-.21h.08l.29-.33.12-.08v-.08l.5-.46c.36-.36.58-.74,1.29-.75.14.15.28.07.29.37.12.13-.04.59-.08.71l-.04.29h-.04v.12h-.04v.12h-.04v.12h-.04v.12h-.04l-.04.25h-.04v.08h-.04l-.04.25h-.04v.08h-.04l-.08.42-.42.92-.08.04v.08l-.29.25-.04.08-.25.08v.04h-.12v.04l-.96-.04v.04c-.47.13-1.01.04-1.58.04-1.19-.04-2.39-.08-3.58-.12v-.04h-1.46v.04c-.23.06-.59-.01-.79.04h-.75v.04h-1c-.06.02.02.03-.04.04h-1v.04c-.23.06-.84-.04-1-.08h-.33v-.04h-.33c-.32-.09-.72-.16-.87-.42-.09-.08-.09-.24-.08-.42.07-.05.14-.15.17-.25Z"})]});function Nt(){const e=s.useRef(),n=F(),o=me(),l=te();return s.useCallback((h,a)=>{const i=h.split("#")[1];document.getElementById(i).scrollIntoView({behavior:l?"auto":"smooth"});const f=()=>{clearTimeout(e.current),e.current=setTimeout(()=>{window.removeEventListener("scroll",f),window.location.pathname===n.pathname&&(a==null||a(),o(`${n.pathname}#${i}`,{scroll:!1}))},50)};return window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f),clearTimeout(e.current)}},[o,l,n.pathname])}const Ht="_toggle_1asy4_3",Rt="_inner_1asy4_33",Bt="_icon_1asy4_49",H={toggle:Ht,inner:Rt,icon:Bt},At=({menuOpen:e,...n})=>t.jsx(jt,{iconOnly:!0,className:H.toggle,"aria-label":"Menu","aria-expanded":e,...n,children:t.jsxs("div",{className:H.inner,children:[t.jsx(N,{className:H.icon,"data-menu":!0,"data-open":e,icon:"menu"}),t.jsx(N,{className:H.icon,"data-close":!0,"data-open":e,icon:"close"})]})}),Q=[{label:"Home",pathname:"/#home"},{label:"Projects",pathname:"/#projects"},{label:"Ledger",pathname:"https://ledger.StephenJLu.com"},{label:"About",pathname:"/#about"},{label:"Contact",pathname:"/contact"}],Gt=[{label:"Bluesky",url:`https://bsky.app/profile/${C.bluesky}`,icon:"bluesky"},{label:"LinkedIn",url:`https://www.linkedin.com/in/${C.linkedin}`,icon:"linkedin"},{label:"Github",url:`https://github.com/${C.github}`,icon:"github"}],Et="_menuBarContainer_11j9i_5",Ot="_menuBarList_11j9i_57",Pt="_menuButton_11j9i_77",Ft="_active_11j9i_77",Wt="_bounce_11j9i_1",Xt="_navbar_11j9i_143",Ut="_logo_11j9i_193",Vt="_nav_11j9i_143",Dt="_navIcons_11j9i_229",Jt="_navIconLink_11j9i_279",Kt="_navIcon_11j9i_229",qt="_mobileNav_11j9i_321",Qt="_mobileNavLink_11j9i_381",S={menuBarContainer:Et,menuBarList:Ot,menuButton:Pt,active:Ft,bounce:Wt,navbar:Xt,logo:Ut,nav:Vt,navIcons:Dt,navIconLink:Jt,navIcon:Kt,mobileNav:qt,mobileNavLink:Qt},Yt=()=>{const[e,n]=s.useState(),[o,l]=s.useState(),[c,h]=s.useState(!1),[a,i]=s.useState(),d=F(),f=s.useRef(),v=Nt(),m=P.dark.background;s.useEffect(()=>{l(`${d.pathname}${d.hash}`)},[d]),s.useEffect(()=>{!a||d.pathname!=="/"||(l(`${d.pathname}${a}`),v(a,()=>i(null)))},[d.pathname,v,a]);const y=(u="")=>{const g=o!=null&&o.endsWith("/")?o==null?void 0:o.slice(0,-1):o;return u===g?"page":""},b=(u,g)=>{const k=u.currentTarget.href.split("#")[1];i(null),n(g.label),k&&d.pathname==="/"&&(i(`#${k}`),u.preventDefault())},_=(u,g)=>{b(u,g),c&&h(!1)};return t.jsxs("header",{className:S.navbar,ref:f,"data-theme":"dark",children:[t.jsx(B,{unstable_viewTransition:!0,prefetch:"intent",to:d.pathname==="/"?"/#home":"/","data-navbar-item":!0,className:S.logo,"aria-label":`${C.name}, ${C.role}`,onClick:u=>_(u,{label:"Home",pathname:"/"}),children:t.jsx(Mt,{})}),t.jsx(At,{onClick:()=>h(!c),menuOpen:c}),t.jsxs("nav",{className:S.nav,children:[t.jsx("div",{className:S.menuBarContainer,style:{backgroundColor:m},children:t.jsx("ul",{className:S.menuBarList,children:Q.map((u,g)=>t.jsx("li",{children:t.jsx(B,{unstable_viewTransition:!0,prefetch:"intent",to:u.pathname,"data-navbar-item":!0,className:S.navLink,"aria-current":y(u.pathname),onClick:k=>b(k,u),children:t.jsx(We,{item:u,isActive:e===u.label,onClick:()=>n(u.label)})},u.label)},g))})}),t.jsx(Y,{desktop:!0})]}),t.jsx(re,{unmount:!0,in:c,timeout:V(G.base.durationL),children:({visible:u,nodeRef:g})=>t.jsxs("nav",{className:S.mobileNav,"data-visible":u,ref:g,children:[Q.map((k,p)=>t.jsx(B,{unstable_viewTransition:!0,prefetch:"intent",to:k.pathname,className:S.mobileNavLink,"data-visible":u,"aria-current":y(k.pathname),onClick:x=>_(x,k),style:Z({transitionDelay:be(Number(V(G.base.durationS))+p*50)}),children:k.label},k.label)),t.jsx(Y,{})]})})]})},Y=({desktop:e})=>t.jsx("div",{className:S.navIcons,children:Gt.map(({label:n,url:o,icon:l})=>t.jsx("a",{"data-navbar-item":e||void 0,className:S.navIconLink,"aria-label":n,href:o,target:"_blank",rel:"noopener noreferrer",children:t.jsx(N,{className:S.navIcon,icon:l})},n))}),Zt="_footer_hpuof_7",e0="_footerContent_hpuof_55",R={footer:Zt,footerContent:e0},t0=C.delay,n0=()=>t.jsxs("div",{"data-theme":"dark",children:[t.jsx(Ge,{children:e=>t.jsx("div",{className:R.footer,children:e&&t.jsx("div",{className:R.footerContent,children:t.jsx("span",{className:R.date,children:t.jsx(Le,{typeText:`© ${new Date().getFullYear()} ${C.name}. All rights reserved.`,delay:t0})})})})}),t.jsx("div",{className:R.footer,children:t.jsxs("p",{children:["Hand-crafted design by ",t.jsx("a",{href:"humans.txt",children:"humans"}),"."]})})]}),s0="_container_1g4r3_3",o0="_skip_1g4r3_23",l0={container:s0,skip:o0};const h0=()=>[{rel:"preload",href:oe,as:"font",type:"font/woff2",crossOrigin:""},{rel:"preload",href:le,as:"font",type:"font/ttf",crossOrigin:""},{rel:"manifest",href:"/manifest.json"},{rel:"icon",href:"/favicon.ico"},{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"},{rel:"shortcut_icon",href:"/shortcut.png",type:"image/png",sizes:"64x64"},{rel:"apple-touch-icon",href:"/icon-256.png",sizes:"256x256"},{rel:"author",href:"/humans.txt",type:"text/plain"}];function i0(){const e="dark";return s.useEffect(()=>{console.info(`${C.ascii}
`,`Taking a peek huh? Check out the source code: ${C.repo}

`)},[]),t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("title",{children:"Stephen J. Lu | Web Design and Development for the Public Good"}),t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx("meta",{name:"theme-color",content:"#000"}),t.jsx("meta",{name:"color-scheme",content:"dark"}),t.jsx("style",{dangerouslySetInnerHTML:{__html:mt}}),t.jsx(pe,{}),t.jsx(xe,{})]}),t.jsxs("body",{children:[t.jsxs(ht,{theme:e,className:"",children:[t.jsx(Yt,{}),t.jsxs("main",{id:"main-content",className:l0.container,tabIndex:-1,children:[t.jsx(ge,{}),t.jsx(n0,{})]})]}),t.jsx(je,{}),t.jsx(ke,{})]})]})}export{i0 as default,h0 as links};
