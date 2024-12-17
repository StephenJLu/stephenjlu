import{h as it,k as F,n as vt,o as ut,r as s,q as ft,j as e,L as B,s as dt,M as mt,t as pt,O as xt,S as yt}from"./components-BRXnhjxE.js";import{p as r,c as I,m as U,T as kt,a as Z,b as C,d as D,n as bt,I as gt}from"./config-CcS46rrx.js";import{u as tt,f as _t,a as jt,b as et}from"./use-reduced-motion-CIzRnlKj.js";/**
 * @remix-run/react v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let J="positions";function St({getKey:t,...n}){let{isSpaMode:o}=it(),l=F(),c=vt();ut({getKey:t,storageKey:J});let i=s.useMemo(()=>{if(!t)return null;let h=t(l,c);return h!==l.key?h:null},[]);if(o)return null;let a=((h,d)=>{if(!window.history.state||!window.history.state.key){let f=Math.random().toString(32).slice(2);window.history.replaceState({key:f},"")}try{let v=JSON.parse(sessionStorage.getItem(h)||"{}")[d||window.history.state.key];typeof v=="number"&&window.scrollTo(0,v)}catch(f){console.error(f),sessionStorage.removeItem(h)}}).toString();return s.createElement("script",ft({},n,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${a})(${JSON.stringify(J)}, ${JSON.stringify(i)})`}}))}const Ct=()=>(s.useEffect(()=>{(()=>{const n=Math.floor(Math.random()*360),o=Math.floor(Math.random()*360),l=document.createElement("style");l.innerHTML=`
        body::before {
          transform: rotate(${n}deg);
        }
        body::after {
          transform: rotate(${o}deg);
        }
      `,document.head.appendChild(l)})()},[]),null),Lt=Ct,wt=({typeText:t,delay:n=0})=>{const[o,l]=s.useState(0);return s.useEffect(()=>{const c=setTimeout(()=>{const i=setInterval(()=>{l(a=>a<t.length?a+1:a)},50);return()=>clearInterval(i)},n);return()=>clearTimeout(c)},[t,n]),e.jsx("span",{children:t.slice(0,o)})},$t=wt,nt=s.createContext(null),Mt=s.createContext({});function Tt(){const t=s.useContext(nt);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:o,register:l}=t,c=s.useId();return s.useEffect(()=>l(c),[]),!n&&o?[!1,()=>o&&o(c)]:[!0]}function ot(){const t=s.useRef(!1);return tt(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function zt(){const t=ot(),[n,o]=s.useState(0),l=s.useCallback(()=>{t.current&&o(n+1)},[n]);return[s.useCallback(()=>_t.postRender(l),[l]),n]}class It extends s.Component{getSnapshotBeforeUpdate(n){const o=this.props.childRef.current;if(o&&n.isPresent&&!this.props.isPresent){const l=this.props.sizeRef.current;l.height=o.offsetHeight||0,l.width=o.offsetWidth||0,l.top=o.offsetTop,l.left=o.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Nt({children:t,isPresent:n}){const o=s.useId(),l=s.useRef(null),c=s.useRef({width:0,height:0,top:0,left:0});return s.useInsertionEffect(()=>{const{width:i,height:a,top:h,left:d}=c.current;if(n||!l.current||!i||!a)return;l.current.dataset.motionPopId=o;const f=document.createElement("style");return document.head.appendChild(f),f.sheet&&f.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${h}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(f)}},[n]),s.createElement(It,{isPresent:n,childRef:l,sizeRef:c},s.cloneElement(t,{ref:l}))}const E=({children:t,initial:n,isPresent:o,onExitComplete:l,custom:c,presenceAffectsLayout:i,mode:a})=>{const h=jt(Rt),d=s.useId(),f=s.useMemo(()=>({id:d,initial:n,isPresent:o,custom:c,onExitComplete:v=>{h.set(v,!0);for(const m of h.values())if(!m)return;l&&l()},register:v=>(h.set(v,!1),()=>h.delete(v))}),i?void 0:[o]);return s.useMemo(()=>{h.forEach((v,m)=>h.set(m,!1))},[o]),s.useEffect(()=>{!o&&!h.size&&l&&l()},[o]),a==="popLayout"&&(t=s.createElement(Nt,{isPresent:o},t)),s.createElement(nt.Provider,{value:f},t)};function Rt(){return new Map}function Ht(t){return s.useEffect(()=>()=>t(),[])}const w=t=>t.key||"";function Bt(t,n){t.forEach(o=>{const l=w(o);n.set(l,o)})}function At(t){const n=[];return s.Children.forEach(t,o=>{s.isValidElement(o)&&n.push(o)}),n}const Gt=({children:t,custom:n,initial:o=!0,onExitComplete:l,exitBeforeEnter:c,presenceAffectsLayout:i=!0,mode:a="sync"})=>{const h=s.useContext(Mt).forceRender||zt()[0],d=ot(),f=At(t);let v=f;const m=s.useRef(new Map).current,b=s.useRef(v),g=s.useRef(new Map).current,_=s.useRef(!0);if(tt(()=>{_.current=!1,Bt(f,g),b.current=v}),Ht(()=>{_.current=!0,g.clear(),m.clear()}),_.current)return s.createElement(s.Fragment,null,v.map(p=>s.createElement(E,{key:w(p),isPresent:!0,initial:o?void 0:!1,presenceAffectsLayout:i,mode:a},p)));v=[...v];const u=b.current.map(w),y=f.map(w),k=u.length;for(let p=0;p<k;p++){const x=u[p];y.indexOf(x)===-1&&!m.has(x)&&m.set(x,void 0)}return a==="wait"&&m.size&&(v=[]),m.forEach((p,x)=>{if(y.indexOf(x)!==-1)return;const L=g.get(x);if(!L)return;const M=u.indexOf(x);let S=p;if(!S){const ht=()=>{m.delete(x);const W=Array.from(g.keys()).filter(T=>!y.includes(T));if(W.forEach(T=>g.delete(T)),b.current=f.filter(T=>{const X=w(T);return X===x||W.includes(X)}),!m.size){if(d.current===!1)return;h(),l&&l()}};S=s.createElement(E,{key:w(L),isPresent:!1,onExitComplete:ht,custom:n,presenceAffectsLayout:i,mode:a},L),m.set(x,S)}v.splice(M,0,S)}),v=v.map(p=>{const x=p.key;return m.has(x)?p:s.createElement(E,{key:w(p),isPresent:!0,presenceAffectsLayout:i,mode:a},p)}),s.createElement(s.Fragment,null,m.size?v:v.map(p=>s.cloneElement(p)))},Et="_menuButton_8u4lm_5",Pt="_active_8u4lm_25",Ot="_bounce_8u4lm_1",K={menuButton:Et,active:Pt,bounce:Ot},Ft=({item:t,isActive:n,onClick:o})=>{const l=()=>{o(t)};return e.jsx("button",{type:"button",onClick:l,className:`${K.menuButton} ${n?K.active:""}`,children:t.label})},Wt=Ft,st="/assets/OperatorMono-D7WvIKEd.woff2",Xt="/assets/AGThin-BV3b-dHU.ttf",Ut="/assets/AGBlack-CTa2XGQt.ttf",Dt="/assets/AGBlackItalic-sul5g3oJ.ttf",Jt="/assets/AGBold-x0qq96lT.ttf",Kt="/assets/AGBoldItalic-FSwS18fN.ttf",Vt="/assets/AGLight-C7oQdQYa.ttf",qt="/assets/AGLightItalic-Bx04CrxG.ttf",Qt="/assets/AGMedium-7qHP5tWb.ttf",Yt="/assets/AGMediumItalic-CM3QocvE.ttf",lt="/assets/AGRegular-B1D8PH8b.ttf",Zt="/assets/AGRegularItalic-BUXI5k5L.ttf",te="/assets/AGThinItalic-D3U6Kc1h.ttf",ee={black:"oklch(0% 0 0)",white:"oklch(100% 0 0)",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:"system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",fontStack:"AtlasGroteskLC, var(--systemFontStack)",monoFontStack:"ui-monospace, OperatorMonoLig, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:r(140),fontSizeH1:r(100),fontSizeH2:r(58),fontSizeH3:r(38),fontSizeH4:r(28),fontSizeH5:r(24),fontSizeBodyXL:r(22),fontSizeBodyL:r(20),fontSizeBodyM:r(18),fontSizeBodyS:r(16),fontSizeBodyXS:r(14),lineHeightTitle:"1.1",lineHeightBody:"1.6",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px",zIndex0:0,zIndex1:4,zIndex2:8,zIndex3:16,zIndex4:32,zIndex5:64},ne={fontSizeH0:r(120),fontSizeH1:r(80)},oe={maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:r(100),fontSizeH1:r(70),fontSizeH2:r(50),fontSizeH3:r(36),fontSizeH4:r(26),fontSizeH5:r(22)},se={fontSizeH0:r(80),fontSizeH1:r(60),fontSizeH2:r(48),fontSizeH3:r(32),fontSizeH4:r(24),fontSizeH5:r(20)},le={spaceOuter:"24px",fontSizeH0:r(56),fontSizeH1:r(40),fontSizeH2:r(34),fontSizeH3:r(28),fontSizeH4:r(22),fontSizeH5:r(18),fontSizeBodyL:r(17),fontSizeBodyM:r(16),fontSizeBodyS:r(14)},ae={spaceOuter:"16px",fontSizeH0:r(42),fontSizeH1:r(38),fontSizeH2:r(28),fontSizeH3:r(24),fontSizeH4:r(20)},re={background:"oklch(0% 0 0)",backgroundLight:"oklch(20% 0 0)",primary:"oklch(95% 0 0)",accent:"oklch(89.7% 0.14 83.6)",error:"oklch(65.91% 0.249 13.76)",text:"var(--white)",textTitle:"var(--text)",linkColor:"var(--accent)",textBody:"color-mix(in lab, var(--text) 80%, transparent)",textLight:"color-mix(in lab, var(--text) 60%, transparent)"},ce={background:"oklch(96.12% 0 0)",backgroundLight:"var(--white)",primary:"var(--black)",accent:"oklch(18.3% 0.1 264.6)",error:"oklch(63.17% 0.259 25.41)",text:"var(--black)",textTitle:"color-mix(in lab, var(--text) 90%, transparent)",linkColor:"var(--accent)",textBody:"color-mix(in lab, var(--text) 75%, transparent)",textLight:"color-mix(in lab, var(--text) 55%, transparent)"},G={base:ee,desktop:ne,laptop:oe,tablet:se,mobile:le,mobileS:ae},O={dark:re,light:ce},at=s.createContext({}),he=({theme:t="dark",children:n,className:o,as:l="div",...c})=>{const a=!ie().theme;return e.jsxs(at.Provider,{value:{theme:t},children:[a&&n,!a&&e.jsx(l,{className:I(o),"data-theme":t,...c,children:n})]})};function ie(){return s.useContext(at)}function $(t){return t.replace(/\s\s+/g," ")}function A(t){return $(Object.keys(t).map(n=>`--${n}: ${t[n]};`).join(`

`))}function ve(){return $(Object.keys(U).map(t=>`
        @media (max-width: ${U[t]}px) {
          :root {
            ${A(G[t])}
          }
        }
      `).join(`
`))}const ue=$(`
  @layer theme, base, components, layout;
`),fe=$(`
  :root {
    ${A(G.base)}
  }

  ${ve()}

  [data-theme='dark'] {
    ${A(O.dark)}
  }

  [data-theme='light'] {
    ${A(O.light)}
  }
`),de=$(`  

  @font-face {
    font-family: OperatorMonoLig;
    src: url(${st}) format('woff2');
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Xt}) format('truetype');
    font-weight: 100;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Vt}) format('truetype');
    font-weight: 300;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${lt}) format('truetype');
    font-weight: 400;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Qt}) format('truetype');
    font-weight: 500;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Jt}) format('truetype');
    font-weight: 700;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Ut}) format('truetype');
    font-weight: 900;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${te}) format('truetype');
    font-weight: 100;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${qt}) format('truetype');
    font-weight: 300;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Zt}) format('truetype');
    font-weight: 400;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Yt}) format('truetype');
    font-weight: 500;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Kt}) format('truetype');
    font-weight: 700;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Dt}) format('truetype');
    font-weight: 900;
    font-display: block;
    font-style: italic;
  }
`),me=$(`
  ${ue}

  @layer theme {
    ${fe}
    ${de}
  }
`),pe="_icon_nm21j_3",xe={icon:pe},ye="/assets/icons-D_LJnBDF.svg",N=s.forwardRef(({icon:t,className:n,size:o,...l},c)=>e.jsx("svg",{"aria-hidden":!0,ref:c,className:I(xe.icon,n),width:o||24,height:o||24,...l,children:e.jsx("use",{href:`${ye}#${t}`})})),rt=({children:t,in:n,unmount:o,initial:l=!0,...c})=>{const i=s.useRef(),a=s.useRef();return s.useEffect(()=>{clearTimeout(n?a.current:i.current)},[n]),e.jsx(Gt,{children:(n||!o)&&e.jsx(ke,{enterTimeout:i,exitTimeout:a,in:n,initial:l,...c,children:t})})},ke=({children:t,timeout:n=0,enterTimeout:o,exitTimeout:l,onEnter:c,onEntered:i,onExit:a,onExited:h,initial:d,nodeRef:f,in:v})=>{const[m,b]=s.useState(d?"exited":"entered"),[g,_]=Tt(),[u,y]=s.useState(!d),k=typeof n=="object",p=s.useRef(null),x=f||p,L=u&&v?g:!1;return s.useEffect(()=>{var S;if(u||!v)return;const M=k?n.enter:n;clearTimeout(o.current),clearTimeout(l.current),y(!0),b("entering"),c==null||c(),(S=x.current)==null||S.offsetHeight,o.current=setTimeout(()=>{b("entered"),i==null||i()},M)},[c,i,n,m,v]),s.useEffect(()=>{var S;if(g&&v)return;const M=k?n.exit:n;clearTimeout(o.current),clearTimeout(l.current),b("exiting"),a==null||a(),(S=x.current)==null||S.offsetHeight,l.current=setTimeout(()=>{b("exited"),_==null||_(),h==null||h()},M)},[g,a,_,n,h,v]),t({visible:L,status:m,nodeRef:x})},be="_button_4jwwg_3",ge="_text_4jwwg_263",_e="_loader_4jwwg_289",je="_icon_4jwwg_315",z={button:be,text:ge,loader:_e,icon:je};function ct(t){return(t==null?void 0:t.includes("://"))??!1}const Se=s.forwardRef(({href:t,...n},o)=>ct(t)||!t?e.jsx(V,{href:t,ref:o,...n}):e.jsx(V,{unstable_viewTransition:!0,as:B,prefetch:"intent",to:t,ref:o,...n})),V=s.forwardRef(({className:t,as:n,secondary:o,loading:l,loadingText:c="loading",icon:i,iconEnd:a,iconHoverShift:h,iconOnly:d,children:f,rel:v,target:m,href:b,disabled:g,..._},u)=>{const y=ct(b),p=n||(b?"a":"button");return e.jsxs(p,{className:I(z.button,t),"data-loading":l,"data-icon-only":d,"data-secondary":o,"data-icon":i,href:b,rel:v||(y?"noopener noreferrer":void 0),target:m||(y?"_blank":void 0),disabled:g,ref:u,..._,children:[!!i&&e.jsx(N,{className:z.icon,"data-start":!d,"data-shift":h,icon:i}),!!f&&e.jsx("span",{className:z.text,children:f}),!!a&&e.jsx(N,{className:z.icon,"data-end":!d,"data-shift":h,icon:a}),e.jsx(rt,{unmount:!0,in:l,children:({visible:x,nodeRef:L})=>e.jsx(Me,{ref:L,className:z.loader,size:32,text:c,"data-visible":x})})]})}),Ce="_loader_11zpc_3",Le="_text_11zpc_33",we="_span_11zpc_85",$e="_loaderSpan_11zpc_1",P={loader:Ce,text:Le,span:we,loaderSpan:$e},Me=s.forwardRef(({className:t,style:n,width:o=32,height:l=4,text:c="Loading...",center:i,...a},h)=>et()?e.jsx(kt,{className:I(P.text,t),weight:"medium",...a,children:c}):e.jsx("div",{ref:h,className:I(P.loader,t),"data-center":i,style:Z({width:o,height:l},n),...a,children:e.jsx("div",{className:P.span})})),Te="_b_1lp8r_3",ze="_c_1lp8r_11",q={b:Te,c:ze},Ie=()=>e.jsxs("svg",{id:"a","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 50 50",children:[e.jsx("path",{className:q.c,d:"M0,0v50h50V0H0ZM48.38,47.96H1.62V2.04h46.75v45.92Z"}),e.jsx("path",{className:q.b,d:"M31.5,34.71c.11-.03.13-.07.21-.12v-.04h.08v-.04h.08v-.04h.17v-.04c.13-.04.46.06.54.08.19.05.38-.07.54-.08l.21-.25h.04v-.08l.08-.04v-.12h.04v-.12h.04v-.21h.04v-.33h.04v-3.04c.07-.27.04-.71.04-1.04v-4.21h-.04v-.17c-.01-.49.07-1.13-.04-1.54v-.67c0-.5,0-1.07-.04-1.5l.04-3.08c.07-.26.09-1.42,0-1.67-.05.05-.02,0-.04.08h-.04l-.04.25c-.2.53-.08,1.2-.08,1.83l-.04,3.83v.17h.04v1.62c-.11.38-.04,1-.04,1.46l-.04,2c.09.33.09,1.67,0,2l-.04.62-.29,1.04h-.04v.08h-.04v.12h-.04l-.08.25h-.04v.08h-.04v.08h-.04v.08h-.04l-.08.25-.08.04-.04.17-.12.08v.08l-.08.04v.08l-.12.08v.08l-.12.08v.08l-.33.29v.08l-.29.25-.04.08h-.08l-.21.25h-.08l-.12.17-.12.04-.04.08h-.08l-.08.12h-.08l-.04.08-.12.04v.04h-.08l-.04.08-.17.04-.04.08-.17.04-.04.08-.25.08v.04h-.08v.04l-.25.08v.04h-.12v.04l-.17.04v.04h-.12v.04h-.08v.04h-.12v.04h-.08v.04l-.25.04v.04h-.12v.04h-.12v.04h-.12v.04l-.33.04v.04h-.17v.04h-.17v.04h-.17v.04h-.25v.04h-.25v.04h-.37v.04h-.75v.04l-.83-.04v-.04h-.42v-.04l-.83-.08v-.04h-.21v-.04l-.37-.04v-.04h-.17v-.04h-.17v-.04h-.17v-.04h-.12v-.04h-.12v-.04h-.12v-.04h-.12v-.04l-.25-.04v-.04h-.08v-.04h-.12v-.04h-.08v-.04h-.12v-.04l-.17-.04v-.04l-.17-.04-.04-.08h-.08v-.04h-.08v-.04h-.08v-.04h-.08l-.08-.12h-.08l-.04-.08h-.08l-.08-.12h-.08l-.12-.17-.33-.29-.04-.12-.29-.25v-.04h-.08l-.21.25h-.08l-.12.17-.12.04-.04.08h-.08l-.04.08-.12.04v.04h-.08l-.04.08h-.08l-.04.08-.17.04-.04.08h-.08v.04h-.08v.04h-.08v.04h-.08v.04h-.08v.04h-.08v.04h-.08v.04l-.25.08v.04h-.12v.04l-.17.04v.04h-.12v.04h-.08v.04l-.25.04v.04h-.08v.04h-.17v.04h-.12v.04h-.12v.04h-.12v.04h-.17v.04h-.17v.04h-.17v.04h-.17v.04h-.21v.04l-.42.04v.04h-.25v.04h-.29v.04h-.33v.04h-.37v.04h-.5v.04h-1.12v.04l-.87-.04v-.04h-.42v-.04h-.29c-.21-.06-.51-.1-.71-.17h-.21c-.22-.07-.5-.14-.71-.21h-.17v-.04h-.12v-.04h-.12v-.04l-.54-.12v-.04h-.08v-.04h-.12v-.04l-.17-.04v-.04l-.37-.12-.04-.08-.17-.04c-.43-.27-.61-.77-1.29-.79-.03.05-.07.06-.08.08v.08h-.04l-.04.37h-.04l-.04.62h-.04l-.08.25-.25.21s-.03.06-.04.08c-.07.05-.09,0-.17.08l-.42.04c-.07-.08-.1-.04-.17-.08l-.12-.17h-.04c-.23-.34-.3-1.48-.17-1.96v-.42h.04v-.33h.04v-.37h.04v-.37h.04v-.37h.04v-.5h.04v-.29h-.04v-.54l-.04-1.08h-.04l-.08-1.54h-.04v-.5h-.04v-.54c-.09-.31-.07-1.04.04-1.29l.25-.33h.08l.04-.08c.08-.05.09,0,.17-.08.29,0,.42.04.62.08l.21.25h.04v.08h.04l.04.17h.04l.04.46h.04v.54c0,.46-.02.99.08,1.33v.21h.04v.12h.04v.17h.04v.08h.04l.04.25h.04v.08h.04v.12h.04l.08.25h.04v.08h.04v.12h.04v.08h.04l.08.25h.04v.12h.04v.08h.04l.04.17h.04v.12h.04l.04.17h.04v.12h.04v.08h.04l.04.17h.04l.12.37.08.04.08.25.08.04v.08l.12.08v.08l.12.08v.08l.12.08v.08l.21.17v.08l.29.25v.08l.37.33.12.17h.08l.12.17h.08l.12.17h.08l.04.08h.08l.04.08.17.04.04.08h.08v.04h.08v.04c.43.19.9.28,1.37.42h.33c.31.09,1.52.09,1.83,0h.37c.25-.07.59-.09.83-.17h.21v-.04h.17v-.04h.17v-.04h.17v-.04h.17v-.04h.12v-.04h.12v-.04h.12v-.04h.08v-.04l.25-.04v-.04h.08v-.04h.12v-.04l.17-.04v-.04h.08v-.04h.12v-.04h.08v-.04h.08l.04-.08.25-.08.04-.08.17-.04.04-.08h.08l.04-.08h.08l.08-.12h.08l.12-.17h.08l.42-.46c.14-.14.35-.3.37-.54h-.04l-.04-.25h-.04v-.12h-.04v-.12c-.17-.43-.25-.94-.25-1.54l-.04-.5h.04l.04-.33h.04l.08-.25h.04v-.08h.04v-.08l.46-.5h.08l.04-.08h.08v-.04c.12-.07.07.04.12-.12h-.04l-.04-.25h-.04v-.08h-.04v-.08h-.04v-.08h-.04v-.08h-.04v-.08h-.04v-.08l-.08-.04-.04-.17-.17-.12v-.08l-.21-.17-.37-.42h-.08l-.12-.17h-.08l-.04-.08h-.08l-.04-.08h-.08l-.04-.08h-.08l-.04-.08-.17-.04-.04-.08h-.08v-.04h-.08v-.04h-.08v-.04h-.08v-.04h-.08v-.04h-.08l-.04-.08-.21-.04v-.04h-.08v-.04l-.25-.08v-.04h-.12v-.04h-.08v-.04l-.21-.04v-.04h-.12v-.04h-.08v-.04l-.25-.04v-.04h-.12v-.04h-.12v-.04h-.17v-.04h-.17v-.04h-.17v-.04h-.21v-.04l-.42-.04v-.04l-.46-.04v-.04h-.33v-.04h-.29v-.04h-.29v-.04h-.29c-.27-.08-.62-.13-.87-.21h-.21v-.04l-.29-.04v-.04l-.29-.04v-.04h-.12v-.04h-.12v-.04l-.25-.04v-.04h-.08v-.04l-.25-.04v-.04l-.25-.08v-.04l-.25-.08-.04-.08h-.08l-.04-.08h-.08l-.08-.12h-.08l-.08-.12h-.08l-.12-.17h-.08l-.29-.33-.12-.08v-.08l-.25-.21v-.08l-.12-.08v-.08l-.08-.04v-.08l-.08-.04v-.08l-.08-.04-.08-.25h-.04v-.08h-.04v-.08h-.04l-.08-.25h-.04l-.29-1.04v-.33c-.15-.55.01-1.32.17-1.71v-.12h.04v-.08h.04v-.12h.04l.04-.17h.04l.04-.17.08-.04.04-.17.08-.04v-.08l.12-.08v-.08l.17-.12v-.08l.29-.25.17-.21h.08l.12-.17h.08l.08-.12.12-.04.04-.08h.08v-.04h.08l.04-.08.25-.08.04-.08.17-.04v-.04l.17-.04v-.04h.12v-.04h.08v-.04l.21-.04v-.04l.25-.04v-.04h.08v-.04l1.17-.25h.46c.13-.04.64-.1.83-.04v.04h.33v.04h.25v.04h.25v.04l.33.04v.04h.12v.04h.12v.04h.12v.04h.12v.04l.17.04v.04h.12v.04l.25.08v.04h.08v.04h.08v.04l.67.29v.04h.08v.04l.25.08v.04l.25.04v.04h.58v-.04c.25-.11.4-.28.58-.46l.08-.12c.22-.16.49-.21.87-.21v.04h.12l.04.08h.08l.21.29v.12h.04v.12h.04v.21h.04v.37h.04v.5h.04l.04.46h.04l.04.29h.04v.08h.04v.12h.04v.12h.04v.12h.04l.04.25h.04v.08h.04l.04.25h.04v.08h.04v.12h.04v.12h.04v.12h.04v.12h.04v.12h.04v.12h.04v.12h.04l.12.58h.04v.21c.03.08.09.35.04.5h-.04l-.04.21c-.09.05-.09.09-.21.12-.19.18-.59.05-.75-.04h-.08l-.46-.5-.04-.17-.08-.04-.04-.17h-.04l-.04-.12-.08-.04-.04-.17h-.04l-.04-.12-.08-.04v-.08l-.12-.08v-.08l-.42-.37-.04-.12h-.08l-.33-.37-.17-.12v-.08l-.33-.29-.04-.12-.12-.08-.25-.29h-.08l-.12-.17h-.08l-.08-.12h-.08l-.08-.12h-.08v-.04h-.08l-.04-.08-.17-.04-.04-.08h-.08v-.04l-.17-.04v-.04h-.12v-.04l-.17-.04v-.04l-.21-.04v-.04h-.17v-.04h-.12v-.04h-.12v-.04h-.17v-.04h-.21v-.04h-.25v-.04l-1.17-.04c-1.17,0-1.96.21-2.54.79l-.17.12v.08l-.08.04-.04.12h-.04v.08h-.04v.08h-.04v.12h-.04v.12c-.15.4-.16.82,0,1.21v.12h.04v.08l.08.04v.08l.08.04.21.25h.08l.08.12.17.04v.04l.25.08v.04h.12v.04h.12v.04h.12v.04h.17v.04h.17v.04h.29v.04h.37v.04h.87v.04h.37v.04h.29c.32.1.73.14,1.04.25l.33.04v.04h.12v.04h.12v.04l.42.08v.04h.08v.04l.25.04v.04l.17.04v.04h.12v.04l.25.08v.04h.08v.04l.25.08.04.08.25.08.04.08.25.08v.04l.12.04.04.08.17.04.04.08h.08v.04l.12.04.04.08h.08v.04l.12.04.04.08h.08l.08.12h.08l.04.08h.08l.08.12h.08l.04.08h.04l.04.08h.08l.12.17h.08l.21.25h.08l.37.42.46.42v.08l.21.17v.08l.12.08v.08l.12.08v.08l.12.08v.08l.08.04v.08l.08.04.08.25.08.04v.08h.04v.08h.04v.08h.04v.08h.04v.08h.04v.08h.04l.08.25h.04v.12h.04v.08h.04l.04.25c.41.95.52,2.25.46,3.54l-.08.62h-.04l-.04.37h-.04l-.04.29h-.04l-.04.25h-.04v.08h-.04v.12h-.04l-.04.21h-.04v.08h-.04v.08h-.04v.08h-.04v.08h-.04v.08l-.08.04-.04.17h-.04v.04h.04l.21.25h.08l.25.29h.08l.12.17h.08l.08.12h.08l.08.12h.08l.04.08h.08l.04.08.17.04.04.08.25.08v.04h.08v.04h.08v.04l.25.08v.04l.25.04v.04h.12v.04h.12v.04h.12v.04h.12v.04h.21v.04h.21v.04h.25v.04h.42v.04h.42c.36,0,.84.04,1.12-.04h.29v-.04h.21v-.04h.17v-.04h.12v-.04h.17c1.81-.71,3.05-2.01,3.71-3.87l.08-.54v-.33c.07-.24.04-.65.04-.96v-1.75l.04-4.83h.04v-.62c.09-.32.04-.85.04-1.25v-2.58l-.04-1.25h-.04v-.12l-.08-.04v-.08l-.17-.12-.04-.08h-.08l-.04-.08h-.08l-.04-.08h-.08v-.04h-.08v-.04h-.08v-.04h-.08l-.04-.08c-.1-.06-.22-.04-.33-.08v-.04h-.17v-.04h-.17v-.04h-.12v-.04h-.12c-.14-.06-.24-.15-.33-.25l-.08-.04v-.25l.12-.08v-.04h.08l.04-.08.25-.04v-.04c.24-.08,1.04.04,1.21.08h.42c.21.06.59-.03.83.04.07.02.29.09.42.04v-.04h.08v-.04l.29-.04v-.04c.06-.01.37.07.42.08l2,.04c.1-.03.44-.12.58-.08.19.05.59.16.87.08v-.04h1c.25-.07.66.03.92-.04v-.04h.33v.04h.33v.04l.25.04.12.17h.04c.06.09.04.24.04.37-.08.07-.03.1-.08.17l-.29.25-.04.08-.25.08v.04h-.12c-.46.18-1.33.13-1.46.62-.2.18-.12.79-.12,1.17l-.04,2.96v2.21c.07.27.04.71.04,1.04l.04,1.29v2.46h.04v1h.04v.62c0,.5.03,1.11-.04,1.54v1.12c0,1.11,0,2.29.75,2.62.54.24,1.49-.03,2.17.08.45.07,1.07.04,1.58.04.29,0,.66.02.88-.04l.54-.04v-.04h.17v-.04h.12v-.04h.12v-.04h.08v-.04h.12v-.04l.17-.04v-.04h.08l.04-.08.17-.04.04-.08h.08l.08-.12h.08l.08-.12h.08l.17-.21h.08l.17-.21h.08l.29-.33.12-.08v-.08l.5-.46c.36-.36.58-.74,1.29-.75.14.15.28.07.29.37.12.13-.04.59-.08.71l-.04.29h-.04v.12h-.04v.12h-.04v.12h-.04v.12h-.04l-.04.25h-.04v.08h-.04l-.04.25h-.04v.08h-.04l-.08.42-.42.92-.08.04v.08l-.29.25-.04.08-.25.08v.04h-.12v.04l-.96-.04v.04c-.47.13-1.01.04-1.58.04-1.19-.04-2.39-.08-3.58-.12v-.04h-1.46v.04c-.23.06-.59-.01-.79.04h-.75v.04h-1c-.06.02.02.03-.04.04h-1v.04c-.23.06-.84-.04-1-.08h-.33v-.04h-.33c-.32-.09-.72-.16-.87-.42-.09-.08-.09-.24-.08-.42.07-.05.14-.15.17-.25Z"})]});function Ne(){const t=s.useRef(),n=F(),o=dt(),l=et();return s.useCallback((i,a)=>{const h=i.split("#")[1];document.getElementById(h).scrollIntoView({behavior:l?"auto":"smooth"});const f=()=>{clearTimeout(t.current),t.current=setTimeout(()=>{window.removeEventListener("scroll",f),window.location.pathname===n.pathname&&(a==null||a(),o(`${n.pathname}#${h}`,{scroll:!1}))},50)};return window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f),clearTimeout(t.current)}},[o,l,n.pathname])}const Re="_toggle_1asy4_3",He="_inner_1asy4_33",Be="_icon_1asy4_49",R={toggle:Re,inner:He,icon:Be},Ae=({menuOpen:t,...n})=>e.jsx(Se,{iconOnly:!0,className:R.toggle,"aria-label":"Menu","aria-expanded":t,...n,children:e.jsxs("div",{className:R.inner,children:[e.jsx(N,{className:R.icon,"data-menu":!0,"data-open":t,icon:"menu"}),e.jsx(N,{className:R.icon,"data-close":!0,"data-open":t,icon:"close"})]})}),Q=[{label:"Home",pathname:"/#home"},{label:"Projects",pathname:"/#projects"},{label:"Ledger",pathname:"https://ledger.StephenJLu.com"},{label:"About",pathname:"/#about"},{label:"Contact",pathname:"/contact"}],Ge=[{label:"Bluesky",url:`https://bsky.app/profile/${C.bluesky}`,icon:"bluesky"},{label:"LinkedIn",url:`https://www.linkedin.com/in/${C.linkedin}`,icon:"linkedin"},{label:"Github",url:`https://github.com/${C.github}`,icon:"github"}],Ee="_menuBarContainer_11j9i_5",Pe="_menuBarList_11j9i_57",Oe="_menuButton_11j9i_77",Fe="_active_11j9i_77",We="_bounce_11j9i_1",Xe="_navbar_11j9i_143",Ue="_logo_11j9i_193",De="_nav_11j9i_143",Je="_navIcons_11j9i_229",Ke="_navIconLink_11j9i_279",Ve="_navIcon_11j9i_229",qe="_mobileNav_11j9i_321",Qe="_mobileNavLink_11j9i_381",j={menuBarContainer:Ee,menuBarList:Pe,menuButton:Oe,active:Fe,bounce:We,navbar:Xe,logo:Ue,nav:De,navIcons:Je,navIconLink:Ke,navIcon:Ve,mobileNav:qe,mobileNavLink:Qe},Ye=()=>{const[t,n]=s.useState(),[o,l]=s.useState(),[c,i]=s.useState(!1),[a,h]=s.useState(),d=F(),f=s.useRef(),v=Ne(),m=O.dark.background;s.useEffect(()=>{l(`${d.pathname}${d.hash}`)},[d]),s.useEffect(()=>{!a||d.pathname!=="/"||(l(`${d.pathname}${a}`),v(a,()=>h(null)))},[d.pathname,v,a]);const b=(u="")=>{const y=o!=null&&o.endsWith("/")?o==null?void 0:o.slice(0,-1):o;return u===y?"page":""},g=(u,y)=>{const k=u.currentTarget.href.split("#")[1];h(null),n(y.label),k&&d.pathname==="/"&&(h(`#${k}`),u.preventDefault())},_=(u,y)=>{g(u,y),c&&i(!1)};return e.jsxs("header",{className:j.navbar,ref:f,"data-theme":"dark",children:[e.jsx(B,{unstable_viewTransition:!0,prefetch:"intent",to:d.pathname==="/"?"/#home":"/","data-navbar-item":!0,className:j.logo,"aria-label":`${C.name}, ${C.role}`,onClick:u=>_(u,{label:"Home",pathname:"/"}),children:e.jsx(Ie,{})}),e.jsx(Ae,{onClick:()=>i(!c),menuOpen:c}),e.jsxs("nav",{className:j.nav,children:[e.jsx("div",{className:j.menuBarContainer,style:{backgroundColor:m},children:e.jsx("ul",{className:j.menuBarList,children:Q.map((u,y)=>e.jsx("li",{children:e.jsx(B,{unstable_viewTransition:!0,prefetch:"intent",to:u.pathname,"data-navbar-item":!0,className:j.navLink,"aria-current":b(u.pathname),onClick:k=>g(k,u),children:e.jsx(Wt,{item:u,isActive:t===u.label,onClick:()=>n(u.label)})},u.label)},y))})}),e.jsx(Y,{desktop:!0})]}),e.jsx(rt,{unmount:!0,in:c,timeout:D(G.base.durationL),children:({visible:u,nodeRef:y})=>e.jsxs("nav",{className:j.mobileNav,"data-visible":u,ref:y,children:[Q.map((k,p)=>e.jsx(B,{unstable_viewTransition:!0,prefetch:"intent",to:k.pathname,className:j.mobileNavLink,"data-visible":u,"aria-current":b(k.pathname),onClick:x=>_(x,k),style:Z({transitionDelay:bt(Number(D(G.base.durationS))+p*50)}),children:k.label},k.label)),e.jsx(Y,{})]})})]})},Y=({desktop:t})=>e.jsx("div",{className:j.navIcons,children:Ge.map(({label:n,url:o,icon:l})=>e.jsx("a",{"data-navbar-item":t||void 0,className:j.navIconLink,"aria-label":n,href:o,target:"_blank",rel:"noopener noreferrer",children:e.jsx(N,{className:j.navIcon,icon:l})},n))}),Ze="_footer_hpuof_7",t0="_footerContent_hpuof_55",H={footer:Ze,footerContent:t0},e0=C.delay,n0=()=>e.jsxs("div",{"data-theme":"dark",children:[e.jsx(gt,{children:t=>e.jsx("div",{className:H.footer,children:t&&e.jsx("div",{className:H.footerContent,children:e.jsx("span",{className:H.date,children:e.jsx($t,{typeText:`© ${new Date().getFullYear()} ${C.name}. All rights reserved.`,delay:e0})})})})}),e.jsx("div",{className:H.footer,children:e.jsxs("p",{children:["Hand-crafted design by ",e.jsx("a",{href:"humans.txt",children:"humans"}),"."]})})]}),o0="_container_1baxb_3",s0="_skip_1baxb_25",l0={container:o0,skip:s0};const h0=()=>[{rel:"preload",href:st,as:"font",type:"font/woff2",crossOrigin:""},{rel:"preload",href:lt,as:"font",type:"font/ttf",crossOrigin:""},{rel:"manifest",href:"/manifest.json"},{rel:"icon",href:"/favicon.ico"},{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"},{rel:"shortcut_icon",href:"/shortcut.png",type:"image/png",sizes:"64x64"},{rel:"apple-touch-icon",href:"/icon-256.png",sizes:"256x256"},{rel:"author",href:"/humans.txt",type:"text/plain"}];function i0(){const t="dark";return s.useEffect(()=>{console.info(`${C.ascii}
`,`Taking a peek huh? Check out the source code: ${C.repo}

`)},[]),e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("title",{children:"Stephen J. Lu | Web Design and Development for the Public Good"}),e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("meta",{name:"theme-color",content:"#000"}),e.jsx("meta",{name:"color-scheme",content:"dark"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:me}}),e.jsx(mt,{}),e.jsx(pt,{})]}),e.jsxs("body",{children:[e.jsx(Lt,{}),e.jsxs(he,{theme:t,className:"",children:[e.jsx(Ye,{}),e.jsxs("main",{id:"main-content",className:l0.container,tabIndex:-1,children:[e.jsx(xt,{}),e.jsx(n0,{})]})]}),e.jsx(St,{}),e.jsx(yt,{})]})]})}export{i0 as default,h0 as links};
