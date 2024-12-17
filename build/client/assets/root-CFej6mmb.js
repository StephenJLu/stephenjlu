import{h as ie,k as F,n as ve,o as ue,r as o,q as fe,j as t,L as R,s as de,M as me,t as pe,O as xe,S as ke}from"./components-BRXnhjxE.js";import{p as r,c as M,m as U,T as ge,a as Z,b as C,d as D,n as ye}from"./config-D-Rz8yHq.js";import{u as ee,f as be,a as _e,b as te,I as je}from"./InViewport-BSd_4HZn.js";/**
 * @remix-run/react v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let J="positions";function Se({getKey:e,...n}){let{isSpaMode:s}=ie(),l=F(),c=ve();ue({getKey:e,storageKey:J});let i=o.useMemo(()=>{if(!e)return null;let h=e(l,c);return h!==l.key?h:null},[]);if(s)return null;let a=((h,d)=>{if(!window.history.state||!window.history.state.key){let f=Math.random().toString(32).slice(2);window.history.replaceState({key:f},"")}try{let v=JSON.parse(sessionStorage.getItem(h)||"{}")[d||window.history.state.key];typeof v=="number"&&window.scrollTo(0,v)}catch(f){console.error(f),sessionStorage.removeItem(h)}}).toString();return o.createElement("script",fe({},n,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${a})(${JSON.stringify(J)}, ${JSON.stringify(i)})`}}))}const Ce=({typeText:e,delay:n=0})=>{const[s,l]=o.useState(0);return o.useEffect(()=>{const c=setTimeout(()=>{const i=setInterval(()=>{l(a=>a<e.length?a+1:a)},50);return()=>clearInterval(i)},n);return()=>clearTimeout(c)},[e,n]),t.jsx("span",{children:e.slice(0,s)})},Le=Ce,ne=o.createContext(null),we=o.createContext({});function $e(){const e=o.useContext(ne);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:s,register:l}=e,c=o.useId();return o.useEffect(()=>l(c),[]),!n&&s?[!1,()=>s&&s(c)]:[!0]}function se(){const e=o.useRef(!1);return ee(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Te(){const e=se(),[n,s]=o.useState(0),l=o.useCallback(()=>{e.current&&s(n+1)},[n]);return[o.useCallback(()=>be.postRender(l),[l]),n]}class ze extends o.Component{getSnapshotBeforeUpdate(n){const s=this.props.childRef.current;if(s&&n.isPresent&&!this.props.isPresent){const l=this.props.sizeRef.current;l.height=s.offsetHeight||0,l.width=s.offsetWidth||0,l.top=s.offsetTop,l.left=s.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Ie({children:e,isPresent:n}){const s=o.useId(),l=o.useRef(null),c=o.useRef({width:0,height:0,top:0,left:0});return o.useInsertionEffect(()=>{const{width:i,height:a,top:h,left:d}=c.current;if(n||!l.current||!i||!a)return;l.current.dataset.motionPopId=s;const f=document.createElement("style");return document.head.appendChild(f),f.sheet&&f.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${h}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(f)}},[n]),o.createElement(ze,{isPresent:n,childRef:l,sizeRef:c},o.cloneElement(e,{ref:l}))}const E=({children:e,initial:n,isPresent:s,onExitComplete:l,custom:c,presenceAffectsLayout:i,mode:a})=>{const h=_e(Me),d=o.useId(),f=o.useMemo(()=>({id:d,initial:n,isPresent:s,custom:c,onExitComplete:v=>{h.set(v,!0);for(const m of h.values())if(!m)return;l&&l()},register:v=>(h.set(v,!1),()=>h.delete(v))}),i?void 0:[s]);return o.useMemo(()=>{h.forEach((v,m)=>h.set(m,!1))},[s]),o.useEffect(()=>{!s&&!h.size&&l&&l()},[s]),a==="popLayout"&&(e=o.createElement(Ie,{isPresent:s},e)),o.createElement(ne.Provider,{value:f},e)};function Me(){return new Map}function Ne(e){return o.useEffect(()=>()=>e(),[])}const w=e=>e.key||"";function He(e,n){e.forEach(s=>{const l=w(s);n.set(l,s)})}function Be(e){const n=[];return o.Children.forEach(e,s=>{o.isValidElement(s)&&n.push(s)}),n}const Re=({children:e,custom:n,initial:s=!0,onExitComplete:l,exitBeforeEnter:c,presenceAffectsLayout:i=!0,mode:a="sync"})=>{const h=o.useContext(we).forceRender||Te()[0],d=se(),f=Be(e);let v=f;const m=o.useRef(new Map).current,y=o.useRef(v),b=o.useRef(new Map).current,_=o.useRef(!0);if(ee(()=>{_.current=!1,He(f,b),y.current=v}),Ne(()=>{_.current=!0,b.clear(),m.clear()}),_.current)return o.createElement(o.Fragment,null,v.map(p=>o.createElement(E,{key:w(p),isPresent:!0,initial:s?void 0:!1,presenceAffectsLayout:i,mode:a},p)));v=[...v];const u=y.current.map(w),k=f.map(w),g=u.length;for(let p=0;p<g;p++){const x=u[p];k.indexOf(x)===-1&&!m.has(x)&&m.set(x,void 0)}return a==="wait"&&m.size&&(v=[]),m.forEach((p,x)=>{if(k.indexOf(x)!==-1)return;const L=b.get(x);if(!L)return;const T=u.indexOf(x);let S=p;if(!S){const he=()=>{m.delete(x);const W=Array.from(b.keys()).filter(z=>!k.includes(z));if(W.forEach(z=>b.delete(z)),y.current=f.filter(z=>{const X=w(z);return X===x||W.includes(X)}),!m.size){if(d.current===!1)return;h(),l&&l()}};S=o.createElement(E,{key:w(L),isPresent:!1,onExitComplete:he,custom:n,presenceAffectsLayout:i,mode:a},L),m.set(x,S)}v.splice(T,0,S)}),v=v.map(p=>{const x=p.key;return m.has(x)?p:o.createElement(E,{key:w(p),isPresent:!0,presenceAffectsLayout:i,mode:a},p)}),o.createElement(o.Fragment,null,m.size?v:v.map(p=>o.cloneElement(p)))},Ae="_menuButton_8u4lm_5",Ge="_active_8u4lm_25",Ee="_bounce_8u4lm_1",K={menuButton:Ae,active:Ge,bounce:Ee},Pe=({item:e,isActive:n,onClick:s})=>{const l=()=>{s(e)};return t.jsx("button",{type:"button",onClick:l,className:`${K.menuButton} ${n?K.active:""}`,children:e.label})},Oe=Pe,oe="/assets/OperatorMono-D7WvIKEd.woff2",Fe="/assets/AGThin-BV3b-dHU.ttf",We="/assets/AGBlack-CTa2XGQt.ttf",Xe="/assets/AGBlackItalic-sul5g3oJ.ttf",Ue="/assets/AGBold-x0qq96lT.ttf",De="/assets/AGBoldItalic-FSwS18fN.ttf",Je="/assets/AGLight-C7oQdQYa.ttf",Ke="/assets/AGLightItalic-Bx04CrxG.ttf",Ve="/assets/AGMedium-7qHP5tWb.ttf",qe="/assets/AGMediumItalic-CM3QocvE.ttf",le="/assets/AGRegular-B1D8PH8b.ttf",Qe="/assets/AGRegularItalic-BUXI5k5L.ttf",Ye="/assets/AGThinItalic-D3U6Kc1h.ttf",Ze={black:"oklch(0% 0 0)",white:"oklch(100% 0 0)",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:"system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",fontStack:"AtlasGroteskLC, var(--systemFontStack)",monoFontStack:"ui-monospace, OperatorMonoLig, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:r(140),fontSizeH1:r(100),fontSizeH2:r(58),fontSizeH3:r(38),fontSizeH4:r(28),fontSizeH5:r(24),fontSizeBodyXL:r(22),fontSizeBodyL:r(20),fontSizeBodyM:r(18),fontSizeBodyS:r(16),fontSizeBodyXS:r(14),lineHeightTitle:"1.1",lineHeightBody:"1.6",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px",zIndex0:0,zIndex1:4,zIndex2:8,zIndex3:16,zIndex4:32,zIndex5:64},et={fontSizeH0:r(120),fontSizeH1:r(80)},tt={maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:r(100),fontSizeH1:r(70),fontSizeH2:r(50),fontSizeH3:r(36),fontSizeH4:r(26),fontSizeH5:r(22)},nt={fontSizeH0:r(80),fontSizeH1:r(60),fontSizeH2:r(48),fontSizeH3:r(32),fontSizeH4:r(24),fontSizeH5:r(20)},st={spaceOuter:"24px",fontSizeH0:r(56),fontSizeH1:r(40),fontSizeH2:r(34),fontSizeH3:r(28),fontSizeH4:r(22),fontSizeH5:r(18),fontSizeBodyL:r(17),fontSizeBodyM:r(16),fontSizeBodyS:r(14)},ot={spaceOuter:"16px",fontSizeH0:r(42),fontSizeH1:r(38),fontSizeH2:r(28),fontSizeH3:r(24),fontSizeH4:r(20)},lt={background:"oklch(0% 0 0)",backgroundLight:"oklch(20% 0 0)",primary:"oklch(95% 0 0)",accent:"oklch(89.7% 0.14 83.6)",error:"oklch(65.91% 0.249 13.76)",text:"var(--white)",textTitle:"var(--text)",linkColor:"var(--accent)",textBody:"color-mix(in lab, var(--text) 80%, transparent)",textLight:"color-mix(in lab, var(--text) 60%, transparent)"},at={background:"oklch(96.12% 0 0)",backgroundLight:"var(--white)",primary:"var(--black)",accent:"oklch(18.3% 0.1 264.6)",error:"oklch(63.17% 0.259 25.41)",text:"var(--black)",textTitle:"color-mix(in lab, var(--text) 90%, transparent)",linkColor:"var(--accent)",textBody:"color-mix(in lab, var(--text) 75%, transparent)",textLight:"color-mix(in lab, var(--text) 55%, transparent)"},G={base:Ze,desktop:et,laptop:tt,tablet:nt,mobile:st,mobileS:ot},O={dark:lt,light:at},ae=o.createContext({}),rt=({theme:e="dark",children:n,className:s,as:l="div",...c})=>{const a=!ct().theme;return t.jsxs(ae.Provider,{value:{theme:e},children:[a&&n,!a&&t.jsx(l,{className:M(s),"data-theme":e,...c,children:n})]})};function ct(){return o.useContext(ae)}function $(e){return e.replace(/\s\s+/g," ")}function A(e){return $(Object.keys(e).map(n=>`--${n}: ${e[n]};`).join(`

`))}function ht(){return $(Object.keys(U).map(e=>`
        @media (max-width: ${U[e]}px) {
          :root {
            ${A(G[e])}
          }
        }
      `).join(`
`))}const it=$(`
  @layer theme, base, components, layout;
`),vt=$(`
  :root {
    ${A(G.base)}
  }

  ${ht()}

  [data-theme='dark'] {
    ${A(O.dark)}
  }

  [data-theme='light'] {
    ${A(O.light)}
  }
`),ut=$(`  

  @font-face {
    font-family: OperatorMonoLig;
    src: url(${oe}) format('woff2');
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Fe}) format('truetype');
    font-weight: 100;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Je}) format('truetype');
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
    src: url(${Ve}) format('truetype');
    font-weight: 500;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Ue}) format('truetype');
    font-weight: 700;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${We}) format('truetype');
    font-weight: 900;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Ye}) format('truetype');
    font-weight: 100;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Ke}) format('truetype');
    font-weight: 300;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Qe}) format('truetype');
    font-weight: 400;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${qe}) format('truetype');
    font-weight: 500;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${De}) format('truetype');
    font-weight: 700;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Xe}) format('truetype');
    font-weight: 900;
    font-display: block;
    font-style: italic;
  }
`),ft=$(`
  ${it}

  @layer theme {
    ${vt}
    ${ut}
  }
`),dt="_icon_nm21j_3",mt={icon:dt},pt="/assets/icons-D_LJnBDF.svg",N=o.forwardRef(({icon:e,className:n,size:s,...l},c)=>t.jsx("svg",{"aria-hidden":!0,ref:c,className:M(mt.icon,n),width:s||24,height:s||24,...l,children:t.jsx("use",{href:`${pt}#${e}`})})),re=({children:e,in:n,unmount:s,initial:l=!0,...c})=>{const i=o.useRef(),a=o.useRef();return o.useEffect(()=>{clearTimeout(n?a.current:i.current)},[n]),t.jsx(Re,{children:(n||!s)&&t.jsx(xt,{enterTimeout:i,exitTimeout:a,in:n,initial:l,...c,children:e})})},xt=({children:e,timeout:n=0,enterTimeout:s,exitTimeout:l,onEnter:c,onEntered:i,onExit:a,onExited:h,initial:d,nodeRef:f,in:v})=>{const[m,y]=o.useState(d?"exited":"entered"),[b,_]=$e(),[u,k]=o.useState(!d),g=typeof n=="object",p=o.useRef(null),x=f||p,L=u&&v?b:!1;return o.useEffect(()=>{var S;if(u||!v)return;const T=g?n.enter:n;clearTimeout(s.current),clearTimeout(l.current),k(!0),y("entering"),c==null||c(),(S=x.current)==null||S.offsetHeight,s.current=setTimeout(()=>{y("entered"),i==null||i()},T)},[c,i,n,m,v]),o.useEffect(()=>{var S;if(b&&v)return;const T=g?n.exit:n;clearTimeout(s.current),clearTimeout(l.current),y("exiting"),a==null||a(),(S=x.current)==null||S.offsetHeight,l.current=setTimeout(()=>{y("exited"),_==null||_(),h==null||h()},T)},[b,a,_,n,h,v]),e({visible:L,status:m,nodeRef:x})},kt="_button_4jwwg_3",gt="_text_4jwwg_263",yt="_loader_4jwwg_289",bt="_icon_4jwwg_315",I={button:kt,text:gt,loader:yt,icon:bt};function ce(e){return(e==null?void 0:e.includes("://"))??!1}const _t=o.forwardRef(({href:e,...n},s)=>ce(e)||!e?t.jsx(V,{href:e,ref:s,...n}):t.jsx(V,{unstable_viewTransition:!0,as:R,prefetch:"intent",to:e,ref:s,...n})),V=o.forwardRef(({className:e,as:n,secondary:s,loading:l,loadingText:c="loading",icon:i,iconEnd:a,iconHoverShift:h,iconOnly:d,children:f,rel:v,target:m,href:y,disabled:b,..._},u)=>{const k=ce(y),p=n||(y?"a":"button");return t.jsxs(p,{className:M(I.button,e),"data-loading":l,"data-icon-only":d,"data-secondary":s,"data-icon":i,href:y,rel:v||(k?"noopener noreferrer":void 0),target:m||(k?"_blank":void 0),disabled:b,ref:u,..._,children:[!!i&&t.jsx(N,{className:I.icon,"data-start":!d,"data-shift":h,icon:i}),!!f&&t.jsx("span",{className:I.text,children:f}),!!a&&t.jsx(N,{className:I.icon,"data-end":!d,"data-shift":h,icon:a}),t.jsx(re,{unmount:!0,in:l,children:({visible:x,nodeRef:L})=>t.jsx(wt,{ref:L,className:I.loader,size:32,text:c,"data-visible":x})})]})}),jt="_loader_11zpc_3",St="_text_11zpc_33",Ct="_span_11zpc_85",Lt="_loaderSpan_11zpc_1",P={loader:jt,text:St,span:Ct,loaderSpan:Lt},wt=o.forwardRef(({className:e,style:n,width:s=32,height:l=4,text:c="Loading...",center:i,...a},h)=>te()?t.jsx(ge,{className:M(P.text,e),weight:"medium",...a,children:c}):t.jsx("div",{ref:h,className:M(P.loader,e),"data-center":i,style:Z({width:s,height:l},n),...a,children:t.jsx("div",{className:P.span})})),$t="_b_1lp8r_3",Tt="_c_1lp8r_11",q={b:$t,c:Tt},zt=()=>t.jsxs("svg",{id:"a","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 50 50",children:[t.jsx("path",{className:q.c,d:"M0,0v50h50V0H0ZM48.38,47.96H1.62V2.04h46.75v45.92Z"}),t.jsx("path",{className:q.b,d:"M31.5,34.71c.11-.03.13-.07.21-.12v-.04h.08v-.04h.08v-.04h.17v-.04c.13-.04.46.06.54.08.19.05.38-.07.54-.08l.21-.25h.04v-.08l.08-.04v-.12h.04v-.12h.04v-.21h.04v-.33h.04v-3.04c.07-.27.04-.71.04-1.04v-4.21h-.04v-.17c-.01-.49.07-1.13-.04-1.54v-.67c0-.5,0-1.07-.04-1.5l.04-3.08c.07-.26.09-1.42,0-1.67-.05.05-.02,0-.04.08h-.04l-.04.25c-.2.53-.08,1.2-.08,1.83l-.04,3.83v.17h.04v1.62c-.11.38-.04,1-.04,1.46l-.04,2c.09.33.09,1.67,0,2l-.04.62-.29,1.04h-.04v.08h-.04v.12h-.04l-.08.25h-.04v.08h-.04v.08h-.04v.08h-.04l-.08.25-.08.04-.04.17-.12.08v.08l-.08.04v.08l-.12.08v.08l-.12.08v.08l-.33.29v.08l-.29.25-.04.08h-.08l-.21.25h-.08l-.12.17-.12.04-.04.08h-.08l-.08.12h-.08l-.04.08-.12.04v.04h-.08l-.04.08-.17.04-.04.08-.17.04-.04.08-.25.08v.04h-.08v.04l-.25.08v.04h-.12v.04l-.17.04v.04h-.12v.04h-.08v.04h-.12v.04h-.08v.04l-.25.04v.04h-.12v.04h-.12v.04h-.12v.04l-.33.04v.04h-.17v.04h-.17v.04h-.17v.04h-.25v.04h-.25v.04h-.37v.04h-.75v.04l-.83-.04v-.04h-.42v-.04l-.83-.08v-.04h-.21v-.04l-.37-.04v-.04h-.17v-.04h-.17v-.04h-.17v-.04h-.12v-.04h-.12v-.04h-.12v-.04h-.12v-.04l-.25-.04v-.04h-.08v-.04h-.12v-.04h-.08v-.04h-.12v-.04l-.17-.04v-.04l-.17-.04-.04-.08h-.08v-.04h-.08v-.04h-.08v-.04h-.08l-.08-.12h-.08l-.04-.08h-.08l-.08-.12h-.08l-.12-.17-.33-.29-.04-.12-.29-.25v-.04h-.08l-.21.25h-.08l-.12.17-.12.04-.04.08h-.08l-.04.08-.12.04v.04h-.08l-.04.08h-.08l-.04.08-.17.04-.04.08h-.08v.04h-.08v.04h-.08v.04h-.08v.04h-.08v.04h-.08v.04h-.08v.04l-.25.08v.04h-.12v.04l-.17.04v.04h-.12v.04h-.08v.04l-.25.04v.04h-.08v.04h-.17v.04h-.12v.04h-.12v.04h-.12v.04h-.17v.04h-.17v.04h-.17v.04h-.17v.04h-.21v.04l-.42.04v.04h-.25v.04h-.29v.04h-.33v.04h-.37v.04h-.5v.04h-1.12v.04l-.87-.04v-.04h-.42v-.04h-.29c-.21-.06-.51-.1-.71-.17h-.21c-.22-.07-.5-.14-.71-.21h-.17v-.04h-.12v-.04h-.12v-.04l-.54-.12v-.04h-.08v-.04h-.12v-.04l-.17-.04v-.04l-.37-.12-.04-.08-.17-.04c-.43-.27-.61-.77-1.29-.79-.03.05-.07.06-.08.08v.08h-.04l-.04.37h-.04l-.04.62h-.04l-.08.25-.25.21s-.03.06-.04.08c-.07.05-.09,0-.17.08l-.42.04c-.07-.08-.1-.04-.17-.08l-.12-.17h-.04c-.23-.34-.3-1.48-.17-1.96v-.42h.04v-.33h.04v-.37h.04v-.37h.04v-.37h.04v-.5h.04v-.29h-.04v-.54l-.04-1.08h-.04l-.08-1.54h-.04v-.5h-.04v-.54c-.09-.31-.07-1.04.04-1.29l.25-.33h.08l.04-.08c.08-.05.09,0,.17-.08.29,0,.42.04.62.08l.21.25h.04v.08h.04l.04.17h.04l.04.46h.04v.54c0,.46-.02.99.08,1.33v.21h.04v.12h.04v.17h.04v.08h.04l.04.25h.04v.08h.04v.12h.04l.08.25h.04v.08h.04v.12h.04v.08h.04l.08.25h.04v.12h.04v.08h.04l.04.17h.04v.12h.04l.04.17h.04v.12h.04v.08h.04l.04.17h.04l.12.37.08.04.08.25.08.04v.08l.12.08v.08l.12.08v.08l.12.08v.08l.21.17v.08l.29.25v.08l.37.33.12.17h.08l.12.17h.08l.12.17h.08l.04.08h.08l.04.08.17.04.04.08h.08v.04h.08v.04c.43.19.9.28,1.37.42h.33c.31.09,1.52.09,1.83,0h.37c.25-.07.59-.09.83-.17h.21v-.04h.17v-.04h.17v-.04h.17v-.04h.17v-.04h.12v-.04h.12v-.04h.12v-.04h.08v-.04l.25-.04v-.04h.08v-.04h.12v-.04l.17-.04v-.04h.08v-.04h.12v-.04h.08v-.04h.08l.04-.08.25-.08.04-.08.17-.04.04-.08h.08l.04-.08h.08l.08-.12h.08l.12-.17h.08l.42-.46c.14-.14.35-.3.37-.54h-.04l-.04-.25h-.04v-.12h-.04v-.12c-.17-.43-.25-.94-.25-1.54l-.04-.5h.04l.04-.33h.04l.08-.25h.04v-.08h.04v-.08l.46-.5h.08l.04-.08h.08v-.04c.12-.07.07.04.12-.12h-.04l-.04-.25h-.04v-.08h-.04v-.08h-.04v-.08h-.04v-.08h-.04v-.08h-.04v-.08l-.08-.04-.04-.17-.17-.12v-.08l-.21-.17-.37-.42h-.08l-.12-.17h-.08l-.04-.08h-.08l-.04-.08h-.08l-.04-.08h-.08l-.04-.08-.17-.04-.04-.08h-.08v-.04h-.08v-.04h-.08v-.04h-.08v-.04h-.08v-.04h-.08l-.04-.08-.21-.04v-.04h-.08v-.04l-.25-.08v-.04h-.12v-.04h-.08v-.04l-.21-.04v-.04h-.12v-.04h-.08v-.04l-.25-.04v-.04h-.12v-.04h-.12v-.04h-.17v-.04h-.17v-.04h-.17v-.04h-.21v-.04l-.42-.04v-.04l-.46-.04v-.04h-.33v-.04h-.29v-.04h-.29v-.04h-.29c-.27-.08-.62-.13-.87-.21h-.21v-.04l-.29-.04v-.04l-.29-.04v-.04h-.12v-.04h-.12v-.04l-.25-.04v-.04h-.08v-.04l-.25-.04v-.04l-.25-.08v-.04l-.25-.08-.04-.08h-.08l-.04-.08h-.08l-.08-.12h-.08l-.08-.12h-.08l-.12-.17h-.08l-.29-.33-.12-.08v-.08l-.25-.21v-.08l-.12-.08v-.08l-.08-.04v-.08l-.08-.04v-.08l-.08-.04-.08-.25h-.04v-.08h-.04v-.08h-.04l-.08-.25h-.04l-.29-1.04v-.33c-.15-.55.01-1.32.17-1.71v-.12h.04v-.08h.04v-.12h.04l.04-.17h.04l.04-.17.08-.04.04-.17.08-.04v-.08l.12-.08v-.08l.17-.12v-.08l.29-.25.17-.21h.08l.12-.17h.08l.08-.12.12-.04.04-.08h.08v-.04h.08l.04-.08.25-.08.04-.08.17-.04v-.04l.17-.04v-.04h.12v-.04h.08v-.04l.21-.04v-.04l.25-.04v-.04h.08v-.04l1.17-.25h.46c.13-.04.64-.1.83-.04v.04h.33v.04h.25v.04h.25v.04l.33.04v.04h.12v.04h.12v.04h.12v.04h.12v.04l.17.04v.04h.12v.04l.25.08v.04h.08v.04h.08v.04l.67.29v.04h.08v.04l.25.08v.04l.25.04v.04h.58v-.04c.25-.11.4-.28.58-.46l.08-.12c.22-.16.49-.21.87-.21v.04h.12l.04.08h.08l.21.29v.12h.04v.12h.04v.21h.04v.37h.04v.5h.04l.04.46h.04l.04.29h.04v.08h.04v.12h.04v.12h.04v.12h.04l.04.25h.04v.08h.04l.04.25h.04v.08h.04v.12h.04v.12h.04v.12h.04v.12h.04v.12h.04v.12h.04v.12h.04l.12.58h.04v.21c.03.08.09.35.04.5h-.04l-.04.21c-.09.05-.09.09-.21.12-.19.18-.59.05-.75-.04h-.08l-.46-.5-.04-.17-.08-.04-.04-.17h-.04l-.04-.12-.08-.04-.04-.17h-.04l-.04-.12-.08-.04v-.08l-.12-.08v-.08l-.42-.37-.04-.12h-.08l-.33-.37-.17-.12v-.08l-.33-.29-.04-.12-.12-.08-.25-.29h-.08l-.12-.17h-.08l-.08-.12h-.08l-.08-.12h-.08v-.04h-.08l-.04-.08-.17-.04-.04-.08h-.08v-.04l-.17-.04v-.04h-.12v-.04l-.17-.04v-.04l-.21-.04v-.04h-.17v-.04h-.12v-.04h-.12v-.04h-.17v-.04h-.21v-.04h-.25v-.04l-1.17-.04c-1.17,0-1.96.21-2.54.79l-.17.12v.08l-.08.04-.04.12h-.04v.08h-.04v.08h-.04v.12h-.04v.12c-.15.4-.16.82,0,1.21v.12h.04v.08l.08.04v.08l.08.04.21.25h.08l.08.12.17.04v.04l.25.08v.04h.12v.04h.12v.04h.12v.04h.17v.04h.17v.04h.29v.04h.37v.04h.87v.04h.37v.04h.29c.32.1.73.14,1.04.25l.33.04v.04h.12v.04h.12v.04l.42.08v.04h.08v.04l.25.04v.04l.17.04v.04h.12v.04l.25.08v.04h.08v.04l.25.08.04.08.25.08.04.08.25.08v.04l.12.04.04.08.17.04.04.08h.08v.04l.12.04.04.08h.08v.04l.12.04.04.08h.08l.08.12h.08l.04.08h.08l.08.12h.08l.04.08h.04l.04.08h.08l.12.17h.08l.21.25h.08l.37.42.46.42v.08l.21.17v.08l.12.08v.08l.12.08v.08l.12.08v.08l.08.04v.08l.08.04.08.25.08.04v.08h.04v.08h.04v.08h.04v.08h.04v.08h.04v.08h.04l.08.25h.04v.12h.04v.08h.04l.04.25c.41.95.52,2.25.46,3.54l-.08.62h-.04l-.04.37h-.04l-.04.29h-.04l-.04.25h-.04v.08h-.04v.12h-.04l-.04.21h-.04v.08h-.04v.08h-.04v.08h-.04v.08h-.04v.08l-.08.04-.04.17h-.04v.04h.04l.21.25h.08l.25.29h.08l.12.17h.08l.08.12h.08l.08.12h.08l.04.08h.08l.04.08.17.04.04.08.25.08v.04h.08v.04h.08v.04l.25.08v.04l.25.04v.04h.12v.04h.12v.04h.12v.04h.12v.04h.21v.04h.21v.04h.25v.04h.42v.04h.42c.36,0,.84.04,1.12-.04h.29v-.04h.21v-.04h.17v-.04h.12v-.04h.17c1.81-.71,3.05-2.01,3.71-3.87l.08-.54v-.33c.07-.24.04-.65.04-.96v-1.75l.04-4.83h.04v-.62c.09-.32.04-.85.04-1.25v-2.58l-.04-1.25h-.04v-.12l-.08-.04v-.08l-.17-.12-.04-.08h-.08l-.04-.08h-.08l-.04-.08h-.08v-.04h-.08v-.04h-.08v-.04h-.08l-.04-.08c-.1-.06-.22-.04-.33-.08v-.04h-.17v-.04h-.17v-.04h-.12v-.04h-.12c-.14-.06-.24-.15-.33-.25l-.08-.04v-.25l.12-.08v-.04h.08l.04-.08.25-.04v-.04c.24-.08,1.04.04,1.21.08h.42c.21.06.59-.03.83.04.07.02.29.09.42.04v-.04h.08v-.04l.29-.04v-.04c.06-.01.37.07.42.08l2,.04c.1-.03.44-.12.58-.08.19.05.59.16.87.08v-.04h1c.25-.07.66.03.92-.04v-.04h.33v.04h.33v.04l.25.04.12.17h.04c.06.09.04.24.04.37-.08.07-.03.1-.08.17l-.29.25-.04.08-.25.08v.04h-.12c-.46.18-1.33.13-1.46.62-.2.18-.12.79-.12,1.17l-.04,2.96v2.21c.07.27.04.71.04,1.04l.04,1.29v2.46h.04v1h.04v.62c0,.5.03,1.11-.04,1.54v1.12c0,1.11,0,2.29.75,2.62.54.24,1.49-.03,2.17.08.45.07,1.07.04,1.58.04.29,0,.66.02.88-.04l.54-.04v-.04h.17v-.04h.12v-.04h.12v-.04h.08v-.04h.12v-.04l.17-.04v-.04h.08l.04-.08.17-.04.04-.08h.08l.08-.12h.08l.08-.12h.08l.17-.21h.08l.17-.21h.08l.29-.33.12-.08v-.08l.5-.46c.36-.36.58-.74,1.29-.75.14.15.28.07.29.37.12.13-.04.59-.08.71l-.04.29h-.04v.12h-.04v.12h-.04v.12h-.04v.12h-.04l-.04.25h-.04v.08h-.04l-.04.25h-.04v.08h-.04l-.08.42-.42.92-.08.04v.08l-.29.25-.04.08-.25.08v.04h-.12v.04l-.96-.04v.04c-.47.13-1.01.04-1.58.04-1.19-.04-2.39-.08-3.58-.12v-.04h-1.46v.04c-.23.06-.59-.01-.79.04h-.75v.04h-1c-.06.02.02.03-.04.04h-1v.04c-.23.06-.84-.04-1-.08h-.33v-.04h-.33c-.32-.09-.72-.16-.87-.42-.09-.08-.09-.24-.08-.42.07-.05.14-.15.17-.25Z"})]});function It(){const e=o.useRef(),n=F(),s=de(),l=te();return o.useCallback((i,a)=>{const h=i.split("#")[1];document.getElementById(h).scrollIntoView({behavior:l?"auto":"smooth"});const f=()=>{clearTimeout(e.current),e.current=setTimeout(()=>{window.removeEventListener("scroll",f),window.location.pathname===n.pathname&&(a==null||a(),s(`${n.pathname}#${h}`,{scroll:!1}))},50)};return window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f),clearTimeout(e.current)}},[s,l,n.pathname])}const Mt="_toggle_1asy4_3",Nt="_inner_1asy4_33",Ht="_icon_1asy4_49",H={toggle:Mt,inner:Nt,icon:Ht},Bt=({menuOpen:e,...n})=>t.jsx(_t,{iconOnly:!0,className:H.toggle,"aria-label":"Menu","aria-expanded":e,...n,children:t.jsxs("div",{className:H.inner,children:[t.jsx(N,{className:H.icon,"data-menu":!0,"data-open":e,icon:"menu"}),t.jsx(N,{className:H.icon,"data-close":!0,"data-open":e,icon:"close"})]})}),Q=[{label:"Home",pathname:"/#home"},{label:"Projects",pathname:"/#projects"},{label:"Ledger",pathname:"https://ledger.StephenJLu.com"},{label:"About",pathname:"/#about"},{label:"Contact",pathname:"/contact"}],Rt=[{label:"Bluesky",url:`https://bsky.app/profile/${C.bluesky}`,icon:"bluesky"},{label:"LinkedIn",url:`https://www.linkedin.com/in/${C.linkedin}`,icon:"linkedin"},{label:"Github",url:`https://github.com/${C.github}`,icon:"github"}],At="_menuBarContainer_11j9i_5",Gt="_menuBarList_11j9i_57",Et="_menuButton_11j9i_77",Pt="_active_11j9i_77",Ot="_bounce_11j9i_1",Ft="_navbar_11j9i_143",Wt="_logo_11j9i_193",Xt="_nav_11j9i_143",Ut="_navIcons_11j9i_229",Dt="_navIconLink_11j9i_279",Jt="_navIcon_11j9i_229",Kt="_mobileNav_11j9i_321",Vt="_mobileNavLink_11j9i_381",j={menuBarContainer:At,menuBarList:Gt,menuButton:Et,active:Pt,bounce:Ot,navbar:Ft,logo:Wt,nav:Xt,navIcons:Ut,navIconLink:Dt,navIcon:Jt,mobileNav:Kt,mobileNavLink:Vt},qt=()=>{const[e,n]=o.useState(),[s,l]=o.useState(),[c,i]=o.useState(!1),[a,h]=o.useState(),d=F(),f=o.useRef(),v=It(),m=O.dark.background;o.useEffect(()=>{l(`${d.pathname}${d.hash}`)},[d]),o.useEffect(()=>{!a||d.pathname!=="/"||(l(`${d.pathname}${a}`),v(a,()=>h(null)))},[d.pathname,v,a]);const y=(u="")=>{const k=s!=null&&s.endsWith("/")?s==null?void 0:s.slice(0,-1):s;return u===k?"page":""},b=(u,k)=>{const g=u.currentTarget.href.split("#")[1];h(null),n(k.label),g&&d.pathname==="/"&&(h(`#${g}`),u.preventDefault())},_=(u,k)=>{b(u,k),c&&i(!1)};return t.jsxs("header",{className:j.navbar,ref:f,"data-theme":"dark",children:[t.jsx(R,{unstable_viewTransition:!0,prefetch:"intent",to:d.pathname==="/"?"/#home":"/","data-navbar-item":!0,className:j.logo,"aria-label":`${C.name}, ${C.role}`,onClick:u=>_(u,{label:"Home",pathname:"/"}),children:t.jsx(zt,{})}),t.jsx(Bt,{onClick:()=>i(!c),menuOpen:c}),t.jsxs("nav",{className:j.nav,children:[t.jsx("div",{className:j.menuBarContainer,style:{backgroundColor:m},children:t.jsx("ul",{className:j.menuBarList,children:Q.map((u,k)=>t.jsx("li",{children:t.jsx(R,{unstable_viewTransition:!0,prefetch:"intent",to:u.pathname,"data-navbar-item":!0,className:j.navLink,"aria-current":y(u.pathname),onClick:g=>b(g,u),children:t.jsx(Oe,{item:u,isActive:e===u.label,onClick:()=>n(u.label)})},u.label)},k))})}),t.jsx(Y,{desktop:!0})]}),t.jsx(re,{unmount:!0,in:c,timeout:D(G.base.durationL),children:({visible:u,nodeRef:k})=>t.jsxs("nav",{className:j.mobileNav,"data-visible":u,ref:k,children:[Q.map((g,p)=>t.jsx(R,{unstable_viewTransition:!0,prefetch:"intent",to:g.pathname,className:j.mobileNavLink,"data-visible":u,"aria-current":y(g.pathname),onClick:x=>_(x,g),style:Z({transitionDelay:ye(Number(D(G.base.durationS))+p*50)}),children:g.label},g.label)),t.jsx(Y,{})]})})]})},Y=({desktop:e})=>t.jsx("div",{className:j.navIcons,children:Rt.map(({label:n,url:s,icon:l})=>t.jsx("a",{"data-navbar-item":e||void 0,className:j.navIconLink,"aria-label":n,href:s,target:"_blank",rel:"noopener noreferrer",children:t.jsx(N,{className:j.navIcon,icon:l})},n))}),Qt="_footer_hpuof_7",Yt="_footerContent_hpuof_55",B={footer:Qt,footerContent:Yt},Zt=C.delay,e0=()=>t.jsxs("div",{"data-theme":"dark",children:[t.jsx(je,{children:e=>t.jsx("div",{className:B.footer,children:e&&t.jsx("div",{className:B.footerContent,children:t.jsx("span",{className:B.date,children:t.jsx(Le,{typeText:`© ${new Date().getFullYear()} ${C.name}. All rights reserved.`,delay:Zt})})})})}),t.jsx("div",{className:B.footer,children:t.jsxs("p",{children:["Hand-crafted design by ",t.jsx("a",{href:"humans.txt",children:"humans"}),"."]})})]}),t0="_container_1g4r3_3",n0="_skip_1g4r3_23",s0={container:t0,skip:n0};const r0=()=>[{rel:"preload",href:oe,as:"font",type:"font/woff2",crossOrigin:""},{rel:"preload",href:le,as:"font",type:"font/ttf",crossOrigin:""},{rel:"manifest",href:"/manifest.json"},{rel:"icon",href:"/favicon.ico"},{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"},{rel:"shortcut_icon",href:"/shortcut.png",type:"image/png",sizes:"64x64"},{rel:"apple-touch-icon",href:"/icon-256.png",sizes:"256x256"},{rel:"author",href:"/humans.txt",type:"text/plain"}];function c0(){const e="dark";return o.useEffect(()=>{console.info(`${C.ascii}
`,`Taking a peek huh? Check out the source code: ${C.repo}

`)},[]),t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("title",{children:"Stephen J. Lu | Web Design and Development for the Public Good"}),t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx("meta",{name:"theme-color",content:"#000"}),t.jsx("meta",{name:"color-scheme",content:"dark"}),t.jsx("style",{dangerouslySetInnerHTML:{__html:ft}}),t.jsx(me,{}),t.jsx(pe,{})]}),t.jsxs("body",{children:[t.jsxs(rt,{theme:e,className:"",children:[t.jsx(qt,{}),t.jsxs("main",{id:"main-content",className:s0.container,tabIndex:-1,children:[t.jsx(xe,{}),t.jsx(e0,{})]})]}),t.jsx(Se,{}),t.jsx(ke,{})]})]})}export{c0 as default,r0 as links};
