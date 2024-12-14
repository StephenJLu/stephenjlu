import{r as t,j as l}from"./jsx-runtime-3WVvLOaR.js";import{u as Q,f as s_,a as r_,p as n,c as C,m as X,b as Y,d as Z,e as L,g as D,n as a_}from"./config-Cei4TIWC.js";import{g as v_,h as P,j as i_,k as x_,n as d_,L as N,o as c_,M as g_,q as p_,O as u_,S as b_}from"./components-CoXfU-4-.js";/**
 * @remix-run/react v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let q="positions";function y_({getKey:_,...m}){let{isSpaMode:e}=v_(),o=P(),r=i_();x_({getKey:_,storageKey:q});let a=t.useMemo(()=>{if(!_)return null;let s=_(o,r);return s!==o.key?s:null},[]);if(e)return null;let f=((s,d)=>{if(!window.history.state||!window.history.state.key){let x=Math.random().toString(32).slice(2);window.history.replaceState({key:x},"")}try{let v=JSON.parse(sessionStorage.getItem(s)||"{}")[d||window.history.state.key];typeof v=="number"&&window.scrollTo(0,v)}catch(x){console.error(x),sessionStorage.removeItem(s)}}).toString();return t.createElement("script",d_({},m,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${f})(${JSON.stringify(q)}, ${JSON.stringify(a)})`}}))}const __=t.createContext(null),w_=t.createContext({});function h_(){const _=t.useContext(__);if(_===null)return[!0,null];const{isPresent:m,onExitComplete:e,register:o}=_,r=t.useId();return t.useEffect(()=>o(r),[]),!m&&e?[!1,()=>e&&e(r)]:[!0]}function m_(){const _=t.useRef(!1);return Q(()=>(_.current=!0,()=>{_.current=!1}),[]),_}function k_(){const _=m_(),[m,e]=t.useState(0),o=t.useCallback(()=>{_.current&&e(m+1)},[m]);return[t.useCallback(()=>s_.postRender(o),[o]),m]}class j_ extends t.Component{getSnapshotBeforeUpdate(m){const e=this.props.childRef.current;if(e&&m.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=e.offsetHeight||0,o.width=e.offsetWidth||0,o.top=e.offsetTop,o.left=e.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function z_({children:_,isPresent:m}){const e=t.useId(),o=t.useRef(null),r=t.useRef({width:0,height:0,top:0,left:0});return t.useInsertionEffect(()=>{const{width:a,height:f,top:s,left:d}=r.current;if(m||!o.current||!a||!f)return;o.current.dataset.motionPopId=e;const x=document.createElement("style");return document.head.appendChild(x),x.sheet&&x.sheet.insertRule(`
          [data-motion-pop-id="${e}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${f}px !important;
            top: ${s}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(x)}},[m]),t.createElement(j_,{isPresent:m,childRef:o,sizeRef:r},t.cloneElement(_,{ref:o}))}const G=({children:_,initial:m,isPresent:e,onExitComplete:o,custom:r,presenceAffectsLayout:a,mode:f})=>{const s=r_(S_),d=t.useId(),x=t.useMemo(()=>({id:d,initial:m,isPresent:e,custom:r,onExitComplete:v=>{s.set(v,!0);for(const c of s.values())if(!c)return;o&&o()},register:v=>(s.set(v,!1),()=>s.delete(v))}),a?void 0:[e]);return t.useMemo(()=>{s.forEach((v,c)=>s.set(c,!1))},[e]),t.useEffect(()=>{!e&&!s.size&&o&&o()},[e]),f==="popLayout"&&(_=t.createElement(z_,{isPresent:e},_)),t.createElement(__.Provider,{value:x},_)};function S_(){return new Map}function L_(_){return t.useEffect(()=>()=>_(),[])}const S=_=>_.key||"";function C_(_,m){_.forEach(e=>{const o=S(e);m.set(o,e)})}function $_(_){const m=[];return t.Children.forEach(_,e=>{t.isValidElement(e)&&m.push(e)}),m}const T_=({children:_,custom:m,initial:e=!0,onExitComplete:o,exitBeforeEnter:r,presenceAffectsLayout:a=!0,mode:f="sync"})=>{const s=t.useContext(w_).forceRender||k_()[0],d=m_(),x=$_(_);let v=x;const c=t.useRef(new Map).current,y=t.useRef(v),w=t.useRef(new Map).current,h=t.useRef(!0);if(Q(()=>{h.current=!1,C_(x,w),y.current=v}),L_(()=>{h.current=!0,w.clear(),c.clear()}),h.current)return t.createElement(t.Fragment,null,v.map(g=>t.createElement(G,{key:S(g),isPresent:!0,initial:e?void 0:!1,presenceAffectsLayout:a,mode:f},g)));v=[...v];const i=y.current.map(S),u=x.map(S),b=i.length;for(let g=0;g<b;g++){const p=i[g];u.indexOf(p)===-1&&!c.has(p)&&c.set(p,void 0)}return f==="wait"&&c.size&&(v=[]),c.forEach((g,p)=>{if(u.indexOf(p)!==-1)return;const z=w.get(p);if(!z)return;const T=i.indexOf(p);let j=g;if(!j){const n_=()=>{c.delete(p);const W=Array.from(w.keys()).filter(I=>!u.includes(I));if(W.forEach(I=>w.delete(I)),y.current=x.filter(I=>{const F=S(I);return F===p||W.includes(F)}),!c.size){if(d.current===!1)return;s(),o&&o()}};j=t.createElement(G,{key:S(z),isPresent:!1,onExitComplete:n_,custom:m,presenceAffectsLayout:a,mode:f},z),c.set(p,j)}v.splice(T,0,j)}),v=v.map(g=>{const p=g.key;return c.has(p)?g:t.createElement(G,{key:S(g),isPresent:!0,presenceAffectsLayout:a,mode:f},g)}),t.createElement(t.Fragment,null,c.size?v:v.map(g=>t.cloneElement(g)))},I_="_menuButton_1bvwk_5",M_="_active_1bvwk_25",B_="_bounce_1bvwk_1",R_="_link_1bvwk_1",N_="_date_1bvwk_1",K={menuButton:I_,active:M_,bounce:B_,link:R_,date:N_,"social-media-icons":"_social-media-icons_1bvwk_1"},H_=({item:_,isActive:m,onClick:e})=>{const o=()=>{e(_)};return l.jsx("button",{type:"button",onClick:o,className:`${K.menuButton} ${m?K.active:""}`,children:_.label})},A_=H_,e_="/assets/OperatorMono-D7WvIKEd.woff2",G_="/assets/AGThin-CGrVvvWC.woff2",E_="/assets/AGBlack-Bs4tzqGC.woff2",O_="/assets/AGBlackItalic-CLphIWfD.woff2",P_="/assets/AGBold-vBlvPdb4.woff2",W_="/assets/AGBoldItalic-Cet5yrpz.woff2",F_="/assets/AGLight-BhtHcmtK.woff2",X_="/assets/AGLightItalic-DSoRlZP8.woff2",D_="/assets/AGMedium-DkxbdaAe.woff2",q_="/assets/AGMediumItalic-DLAyQW33.woff2",t_="/assets/AGRegular-9vYeQBIp.woff2",K_="/assets/AGRegularItalic-COnH8aUE.woff2",U_="/assets/AGThinItalic-BtkON_hk.woff2",J_={black:"oklch(0% 0 0)",white:"oklch(100% 0 0)",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:"system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",fontStack:"AtlasGroteskLC, var(--systemFontStack)",monoFontStack:"ui-monospace, OperatorMonoLig, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:n(140),fontSizeH1:n(100),fontSizeH2:n(58),fontSizeH3:n(38),fontSizeH4:n(28),fontSizeH5:n(24),fontSizeBodyXL:n(22),fontSizeBodyL:n(20),fontSizeBodyM:n(18),fontSizeBodyS:n(16),fontSizeBodyXS:n(14),lineHeightTitle:"1.1",lineHeightBody:"1.6",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px",zIndex0:0,zIndex1:4,zIndex2:8,zIndex3:16,zIndex4:32,zIndex5:64},V_={fontSizeH0:n(120),fontSizeH1:n(80)},Q_={maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:n(100),fontSizeH1:n(70),fontSizeH2:n(50),fontSizeH3:n(36),fontSizeH4:n(26),fontSizeH5:n(22)},Y_={fontSizeH0:n(80),fontSizeH1:n(60),fontSizeH2:n(48),fontSizeH3:n(32),fontSizeH4:n(24),fontSizeH5:n(20)},Z_={spaceOuter:"24px",fontSizeH0:n(56),fontSizeH1:n(40),fontSizeH2:n(34),fontSizeH3:n(28),fontSizeH4:n(22),fontSizeH5:n(18),fontSizeBodyL:n(17),fontSizeBodyM:n(16),fontSizeBodyS:n(14)},_1={spaceOuter:"16px",fontSizeH0:n(42),fontSizeH1:n(38),fontSizeH2:n(28),fontSizeH3:n(24),fontSizeH4:n(20)},m1={background:"var(--bs-body-bg)",backgroundLight:"var(--bs-secondary-bg)",primary:"var(--bs-primary)",accent:"var(--bs-secondary)",error:"var(--bs-danger)",text:"var(--bs-body-color)",textTitle:"var(--bs-body-color)",textBody:"color-mix(in lab, var(--bs-body-color) 80%, transparent)",textLight:"color-mix(in lab, var(--bs-body-color) 60%, transparent)"},e1={background:"var(--bs-body-bg)",backgroundLight:"var(--bs-secondary-bg)",primary:"var(--bs-primary)",accent:"var(--bs-secondary)",error:"var(--bs-danger)",text:"var(--bs-body-color)",textTitle:"var(--bs-body-color)",textBody:"color-mix(in lab, var(--bs-body-color) 80%, transparent)",textLight:"color-mix(in lab, var(--bs-body-color) 60%, transparent)"},A={base:J_,desktop:V_,laptop:Q_,tablet:Y_,mobile:Z_,mobileS:_1},O={dark:m1,light:e1},l_=t.createContext({}),t1=({theme:_="dark",children:m,className:e,as:o="div",...r})=>{const f=!l1().theme;return l.jsxs(l_.Provider,{value:{theme:_},children:[f&&m,!f&&l.jsx(o,{className:C(e),"bs-data-theme":_,...r,children:m})]})};function l1(){return t.useContext(l_)}function $(_){return _.replace(/\s\s+/g," ")}function H(_){return $(Object.keys(_).map(m=>`--${m}: ${_[m]};`).join(`

`))}function o1(){return $(Object.keys(X).map(_=>`
        @media (max-width: ${X[_]}px) {
          :root {
            ${H(A[_])}
          }
        }
      `).join(`
`))}const f1=$(`
  @layer theme, base, components, layout;
`),n1=$(`
  :root {
    ${H(A.base)}
  }

  ${o1()}

  [data-theme='dark'] {
    ${H(O.dark)}
  }

  [data-theme='light'] {
    ${H(O.light)}
  }
`),s1=$(`  

  @font-face {
    font-family: "OperatorMonoLig";
    src: url(${e_}) format('woff2');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${G_}) format('woff2');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${F_}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${t_}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${D_}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${P_}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${E_}) format('woff2');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${U_}) format('woff2');
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${X_}) format('woff2');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${K_}) format('woff2');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${q_}) format('woff2');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${W_}) format('woff2');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${O_}) format('woff2');
    font-weight: 900;
    font-style: italic;
  }
`),r1=$(`
  ${f1}

  @layer theme {
    ${n1}
    ${s1}
  }
`),a1="_icon_nm21j_3",v1="_link_nm21j_1",i1="_date_nm21j_1",x1={icon:a1,link:v1,date:i1,"social-media-icons":"_social-media-icons_nm21j_1"},d1="/assets/icons-D_LJnBDF.svg",B=t.forwardRef(({icon:_,className:m,size:e,...o},r)=>l.jsx("svg",{"aria-hidden":!0,ref:r,className:C(x1.icon,m),width:e||24,height:e||24,...o,children:l.jsx("use",{href:`${d1}#${_}`})})),o_=({children:_,in:m,unmount:e,initial:o=!0,...r})=>{const a=t.useRef(),f=t.useRef();return t.useEffect(()=>{clearTimeout(m?f.current:a.current)},[m]),l.jsx(T_,{children:(m||!e)&&l.jsx(c1,{enterTimeout:a,exitTimeout:f,in:m,initial:o,...r,children:_})})},c1=({children:_,timeout:m=0,enterTimeout:e,exitTimeout:o,onEnter:r,onEntered:a,onExit:f,onExited:s,initial:d,nodeRef:x,in:v})=>{const[c,y]=t.useState(d?"exited":"entered"),[w,h]=h_(),[i,u]=t.useState(!d),b=typeof m=="object",g=t.useRef(null),p=x||g,z=i&&v?w:!1;return t.useEffect(()=>{var j;if(i||!v)return;const T=b?m.enter:m;clearTimeout(e.current),clearTimeout(o.current),u(!0),y("entering"),r==null||r(),(j=p.current)==null||j.offsetHeight,e.current=setTimeout(()=>{y("entered"),a==null||a()},T)},[r,a,m,c,v]),t.useEffect(()=>{var j;if(w&&v)return;const T=b?m.exit:m;clearTimeout(e.current),clearTimeout(o.current),y("exiting"),f==null||f(),(j=p.current)==null||j.offsetHeight,o.current=setTimeout(()=>{y("exited"),h==null||h(),s==null||s()},T)},[w,f,h,m,s,v]),_({visible:z,status:c,nodeRef:p})},g1="_button_4jwwg_3",p1="_text_4jwwg_263",u1="_loader_4jwwg_289",b1="_icon_4jwwg_315",y1="_link_4jwwg_1",w1="_date_4jwwg_1",M={button:g1,text:p1,loader:u1,icon:b1,link:y1,date:w1,"social-media-icons":"_social-media-icons_4jwwg_1"};function f_(_){return _==null?void 0:_.includes("://")}const h1=t.forwardRef(({href:_,...m},e)=>f_(_)||!_?l.jsx(U,{href:_,ref:e,...m}):l.jsx(U,{unstable_viewTransition:!0,as:N,prefetch:"intent",to:_,ref:e,...m})),U=t.forwardRef(({className:_,as:m,secondary:e,loading:o,loadingText:r="loading",icon:a,iconEnd:f,iconHoverShift:s,iconOnly:d,children:x,rel:v,target:c,href:y,disabled:w,...h},i)=>{const u=f_(y),g=m||(y?"a":"button");return l.jsxs(g,{className:C(M.button,_),"data-loading":o,"data-icon-only":d,"data-secondary":e,"data-icon":a,href:y,rel:v||u?"noopener noreferrer":void 0,target:c||u?"_blank":void 0,disabled:w,ref:i,...h,children:[!!a&&l.jsx(B,{className:M.icon,"data-start":!d,"data-shift":s,icon:a}),!!x&&l.jsx("span",{className:M.text,children:x}),!!f&&l.jsx(B,{className:M.icon,"data-end":!d,"data-shift":s,icon:f}),l.jsx(o_,{unmount:!0,in:o,children:({visible:p,nodeRef:z})=>l.jsx(R1,{ref:z,className:M.loader,size:32,text:r,"data-visible":p})})]})}),k1="_text_w1gy9_3",j1="_link_w1gy9_1",z1="_date_w1gy9_1",S1={text:k1,link:j1,date:z1,"social-media-icons":"_social-media-icons_w1gy9_1"},L1=({children:_,size:m="m",as:e="span",align:o="auto",weight:r="auto",secondary:a,className:f,...s})=>l.jsx(e,{className:C(S1.text,f),"data-align":o,"data-size":m,"data-weight":r,"data-secondary":a,...s,children:_}),C1="_loader_11zpc_3",$1="_text_11zpc_33",T1="_span_11zpc_85",I1="_loaderSpan_11zpc_1",M1="_link_11zpc_1",B1="_date_11zpc_1",E={loader:C1,text:$1,span:T1,loaderSpan:I1,link:M1,date:B1,"social-media-icons":"_social-media-icons_11zpc_1"},R1=t.forwardRef(({className:_,style:m,width:e=32,height:o=4,text:r="Loading...",center:a,...f},s)=>Y()?l.jsx(L1,{className:C(E.text,_),weight:"medium",...f,children:r}):l.jsx("div",{ref:s,className:C(E.loader,_),"data-center":a,style:Z({width:e,height:o},m),...f,children:l.jsx("div",{className:E.span})}));function N1(){const _=t.useRef(),m=P(),e=c_(),o=Y();return t.useCallback((a,f)=>{const s=a.split("#")[1];document.getElementById(s).scrollIntoView({behavior:o?"auto":"smooth"});const x=()=>{clearTimeout(_.current),_.current=setTimeout(()=>{window.removeEventListener("scroll",x),window.location.pathname===m.pathname&&(f==null||f(),e(`${m.pathname}#${s}`,{scroll:!1}))},50)};return window.addEventListener("scroll",x),()=>{window.removeEventListener("scroll",x),clearTimeout(_.current)}},[e,o,m.pathname])}const H1="_toggle_h91zx_3",A1="_inner_h91zx_33",G1="_icon_h91zx_49",E1="_link_h91zx_1",O1="_date_h91zx_1",R={toggle:H1,inner:A1,icon:G1,link:E1,date:O1,"social-media-icons":"_social-media-icons_h91zx_1"},P1=({menuOpen:_,...m})=>l.jsx(h1,{iconOnly:!0,className:R.toggle,"aria-label":"Menu","aria-expanded":_,...m,children:l.jsxs("div",{className:R.inner,children:[l.jsx(B,{className:R.icon,"data-menu":!0,"data-open":_,icon:"menu"}),l.jsx(B,{className:R.icon,"data-close":!0,"data-open":_,icon:"close"})]})}),J=[{label:"Home",pathname:"/#home"},{label:"About",pathname:"/#about"},{label:"Ledger",pathname:"https://ledger.StephenJLu.com"},{label:"Projects",pathname:"/#projects"},{label:"Contact",pathname:"#contact"}],W1=[{label:"Bluesky",url:`https://bsky.app/profile/${L.bluesky}`,icon:"bluesky"},{label:"Figma",url:`https://www.figma.com/${L.figma}`,icon:"figma"},{label:"Github",url:`https://github.com/${L.github}`,icon:"github"}],F1="_menuBarContainer_dnsr2_5",X1="_menuBarList_dnsr2_57",D1="_menuButton_dnsr2_75",q1="_active_dnsr2_75",K1="_bounce_dnsr2_1",U1="_navbar_dnsr2_141",J1="_logo_dnsr2_191",V1="_nav_dnsr2_141",Q1="_navList_dnsr2_227",Y1="_navIcons_dnsr2_243",Z1="_navIconLink_dnsr2_291",_m="_navIcon_dnsr2_243",mm="_mobileNav_dnsr2_333",em="_mobileNavLink_dnsr2_393",tm="_link_dnsr2_1",lm="_date_dnsr2_1",k={menuBarContainer:F1,menuBarList:X1,menuButton:D1,active:q1,bounce:K1,navbar:U1,logo:J1,nav:V1,navList:Q1,navIcons:Y1,navIconLink:Z1,navIcon:_m,mobileNav:mm,mobileNavLink:em,link:tm,date:lm,"social-media-icons":"_social-media-icons_dnsr2_1"},om=()=>{const[_,m]=t.useState(),[e,o]=t.useState(),[r,a]=t.useState(!1),[f,s]=t.useState(),d=P(),x=t.useRef(),v=N1(),c=O.dark.background;t.useEffect(()=>{o(`${d.pathname}${d.hash}`)},[d]),t.useEffect(()=>{!f||d.pathname!=="/"||(o(`${d.pathname}${f}`),v(f,()=>s(null)))},[d.pathname,v,f]);const y=(i="")=>{const u=e!=null&&e.endsWith("/")?e==null?void 0:e.slice(0,-1):e;return i===u?"page":""},w=(i,u)=>{const b=i.currentTarget.href.split("#")[1];s(null),m(u.label),b&&d.pathname==="/"&&(s(`#${b}`),i.preventDefault())},h=(i,u)=>{w(i,u),r&&a(!1)};return l.jsxs("header",{className:k.navbar,ref:x,children:[l.jsx(N,{unstable_viewTransition:!0,prefetch:"intent",to:d.pathname==="/"?"/#home":"/","data-navbar-item":!0,className:k.logo,"aria-label":`${L.name}, ${L.role}`,onClick:i=>h(i,{label:"Home",pathname:"/"})}),l.jsx(P1,{onClick:()=>a(!r),menuOpen:r}),l.jsx("div",{className:k.menuBarContainer,style:{backgroundColor:c},"data-bs-theme":"dark",children:l.jsx("nav",{className:k.nav,children:l.jsx("ul",{className:k.menuBarList,children:J.map((i,u)=>l.jsx("li",{children:l.jsx(N,{unstable_viewTransition:!0,prefetch:"intent",to:i.pathname,"data-navbar-item":!0,className:k.navLink,"aria-current":y(i.pathname),onClick:b=>w(b,i),children:l.jsx(A_,{item:i,isActive:_===i.label,onClick:()=>m(i.label)})},i.label)},u))})})}),l.jsx(V,{desktop:!0}),l.jsx(o_,{unmount:!0,in:r,timeout:D(A.base.durationL),children:({visible:i,nodeRef:u})=>l.jsxs("nav",{className:k.mobileNav,"data-visible":i,ref:u,children:[J.map((b,g)=>l.jsx(N,{unstable_viewTransition:!0,prefetch:"intent",to:b.pathname,className:k.mobileNavLink,"data-visible":i,"aria-current":y(b.pathname),onClick:p=>h(p,b),style:Z({transitionDelay:a_(Number(D(A.base.durationS))+g*50)}),children:b.label},b.label)),l.jsx(V,{})]})})]})},V=({desktop:_})=>l.jsx("div",{className:k.navIcons,children:W1.map(({label:m,url:e,icon:o})=>l.jsx("a",{"data-navbar-item":_||void 0,className:k.navIconLink,"aria-label":m,href:e,target:"_blank",rel:"noopener noreferrer",children:l.jsx(B,{className:k.navIcon,icon:o})},m))}),fm="_container_1g4r3_3",nm="_skip_1g4r3_23",sm="_link_1g4r3_1",rm="_date_1g4r3_1",am={container:fm,skip:nm,link:sm,date:rm,"social-media-icons":"_social-media-icons_1g4r3_1"};const dm=()=>[{rel:"preload",href:e_,as:"font",type:"font/woff2",crossOrigin:""},{rel:"preload",href:t_,as:"font",type:"font/woff2",crossOrigin:""},{rel:"manifest",href:"/manifest.json"},{rel:"icon",href:"/favicon.ico"},{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"},{rel:"shortcut_icon",href:"/shortcut.png",type:"image/png",sizes:"64x64"},{rel:"apple-touch-icon",href:"/icon-256.png",sizes:"256x256"},{rel:"author",href:"/humans.txt",type:"text/plain"}];function cm(){const _="dark";return t.useEffect(()=>{console.info(`${L.ascii}
`,`Taking a peek huh? Check out the source code: ${L.repo}

`)},[]),l.jsxs("html",{lang:"en",children:[l.jsxs("head",{children:[l.jsx("title",{children:"Stephen J. Lu | Web Design and Development for the Public Good"}),l.jsx("meta",{charSet:"utf-8"}),l.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),l.jsx("meta",{name:"theme-color",content:"#000"}),l.jsx("meta",{name:"color-scheme",content:_==="dark"}),l.jsx("style",{dangerouslySetInnerHTML:{__html:r1}}),l.jsx(g_,{}),l.jsx(p_,{})]}),l.jsxs("body",{"data-bs-theme":_,children:[l.jsxs(t1,{theme:_,children:[l.jsx(om,{}),l.jsx("main",{id:"main-content",className:am.container,tabIndex:-1,children:l.jsx(u_,{})})]}),l.jsx(y_,{}),l.jsx(b_,{})]})]})}export{cm as default,dm as links};
