import{r as t,j as l}from"./jsx-runtime-3WVvLOaR.js";import{u as Q,f as r_,a as a_,p as s,c as C,m as X,b as Y,d as Z,e as L,g as D,n as v_}from"./config-Cei4TIWC.js";import{g as i_,h as P,j as m_,k as x_,n as d_,L as N,o as c_,M as p_,q as f_,O as u_,S as b_}from"./components-CoXfU-4-.js";/**
 * @remix-run/react v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let q="positions";function y_({getKey:_,...o}){let{isSpaMode:e}=i_(),g=P(),r=m_();x_({getKey:_,storageKey:q});let a=t.useMemo(()=>{if(!_)return null;let v=_(g,r);return v!==g.key?v:null},[]);if(e)return null;let n=((v,p)=>{if(!window.history.state||!window.history.state.key){let x=Math.random().toString(32).slice(2);window.history.replaceState({key:x},"")}try{let i=JSON.parse(sessionStorage.getItem(v)||"{}")[p||window.history.state.key];typeof i=="number"&&window.scrollTo(0,i)}catch(x){console.error(x),sessionStorage.removeItem(v)}}).toString();return t.createElement("script",d_({},o,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${n})(${JSON.stringify(q)}, ${JSON.stringify(a)})`}}))}const __=t.createContext(null),w_=t.createContext({});function h_(){const _=t.useContext(__);if(_===null)return[!0,null];const{isPresent:o,onExitComplete:e,register:g}=_,r=t.useId();return t.useEffect(()=>g(r),[]),!o&&e?[!1,()=>e&&e(r)]:[!0]}function o_(){const _=t.useRef(!1);return Q(()=>(_.current=!0,()=>{_.current=!1}),[]),_}function k_(){const _=o_(),[o,e]=t.useState(0),g=t.useCallback(()=>{_.current&&e(o+1)},[o]);return[t.useCallback(()=>r_.postRender(g),[g]),o]}class j_ extends t.Component{getSnapshotBeforeUpdate(o){const e=this.props.childRef.current;if(e&&o.isPresent&&!this.props.isPresent){const g=this.props.sizeRef.current;g.height=e.offsetHeight||0,g.width=e.offsetWidth||0,g.top=e.offsetTop,g.left=e.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function z_({children:_,isPresent:o}){const e=t.useId(),g=t.useRef(null),r=t.useRef({width:0,height:0,top:0,left:0});return t.useInsertionEffect(()=>{const{width:a,height:n,top:v,left:p}=r.current;if(o||!g.current||!a||!n)return;g.current.dataset.motionPopId=e;const x=document.createElement("style");return document.head.appendChild(x),x.sheet&&x.sheet.insertRule(`
          [data-motion-pop-id="${e}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${n}px !important;
            top: ${v}px !important;
            left: ${p}px !important;
          }
        `),()=>{document.head.removeChild(x)}},[o]),t.createElement(j_,{isPresent:o,childRef:g,sizeRef:r},t.cloneElement(_,{ref:g}))}const G=({children:_,initial:o,isPresent:e,onExitComplete:g,custom:r,presenceAffectsLayout:a,mode:n})=>{const v=a_(S_),p=t.useId(),x=t.useMemo(()=>({id:p,initial:o,isPresent:e,custom:r,onExitComplete:i=>{v.set(i,!0);for(const d of v.values())if(!d)return;g&&g()},register:i=>(v.set(i,!1),()=>v.delete(i))}),a?void 0:[e]);return t.useMemo(()=>{v.forEach((i,d)=>v.set(d,!1))},[e]),t.useEffect(()=>{!e&&!v.size&&g&&g()},[e]),n==="popLayout"&&(_=t.createElement(z_,{isPresent:e},_)),t.createElement(__.Provider,{value:x},_)};function S_(){return new Map}function L_(_){return t.useEffect(()=>()=>_(),[])}const S=_=>_.key||"";function C_(_,o){_.forEach(e=>{const g=S(e);o.set(g,e)})}function $_(_){const o=[];return t.Children.forEach(_,e=>{t.isValidElement(e)&&o.push(e)}),o}const T_=({children:_,custom:o,initial:e=!0,onExitComplete:g,exitBeforeEnter:r,presenceAffectsLayout:a=!0,mode:n="sync"})=>{const v=t.useContext(w_).forceRender||k_()[0],p=o_(),x=$_(_);let i=x;const d=t.useRef(new Map).current,y=t.useRef(i),m=t.useRef(new Map).current,c=t.useRef(!0);if(Q(()=>{c.current=!1,C_(x,m),y.current=i}),L_(()=>{c.current=!0,m.clear(),d.clear()}),c.current)return t.createElement(t.Fragment,null,i.map(u=>t.createElement(G,{key:S(u),isPresent:!0,initial:e?void 0:!1,presenceAffectsLayout:a,mode:n},u)));i=[...i];const f=y.current.map(S),h=x.map(S),j=f.length;for(let u=0;u<j;u++){const b=f[u];h.indexOf(b)===-1&&!d.has(b)&&d.set(b,void 0)}return n==="wait"&&d.size&&(i=[]),d.forEach((u,b)=>{if(h.indexOf(b)!==-1)return;const z=m.get(b);if(!z)return;const T=f.indexOf(b);let k=u;if(!k){const s_=()=>{d.delete(b);const W=Array.from(m.keys()).filter(M=>!h.includes(M));if(W.forEach(M=>m.delete(M)),y.current=x.filter(M=>{const F=S(M);return F===b||W.includes(F)}),!d.size){if(p.current===!1)return;v(),g&&g()}};k=t.createElement(G,{key:S(z),isPresent:!1,onExitComplete:s_,custom:o,presenceAffectsLayout:a,mode:n},z),d.set(b,k)}i.splice(T,0,k)}),i=i.map(u=>{const b=u.key;return d.has(b)?u:t.createElement(G,{key:S(u),isPresent:!0,presenceAffectsLayout:a,mode:n},u)}),t.createElement(t.Fragment,null,d.size?i:i.map(u=>t.cloneElement(u)))},M_="_menuButton_1bvwk_5",I_="_active_1bvwk_25",B_="_bounce_1bvwk_1",R_="_link_1bvwk_1",N_="_date_1bvwk_1",K={menuButton:M_,active:I_,bounce:B_,link:R_,date:N_,"social-media-icons":"_social-media-icons_1bvwk_1"},H_=({item:_,isActive:o,onClick:e})=>{const g=()=>{e(_)};return l.jsx("button",{type:"button",onClick:g,className:`${K.menuButton} ${o?K.active:""}`,children:_.label})},A_=H_,e_="/assets/OperatorMono-D7WvIKEd.woff2",G_="/assets/AGThin-CGrVvvWC.woff2",E_="/assets/AGBlack-Bs4tzqGC.woff2",O_="/assets/AGBlackItalic-CLphIWfD.woff2",P_="/assets/AGBold-vBlvPdb4.woff2",W_="/assets/AGBoldItalic-Cet5yrpz.woff2",F_="/assets/AGLight-BhtHcmtK.woff2",X_="/assets/AGLightItalic-DSoRlZP8.woff2",D_="/assets/AGMedium-DkxbdaAe.woff2",q_="/assets/AGMediumItalic-DLAyQW33.woff2",t_="/assets/AGRegular-9vYeQBIp.woff2",K_="/assets/AGRegularItalic-COnH8aUE.woff2",U_="/assets/AGThinItalic-BtkON_hk.woff2",J_={black:"oklch(0% 0 0)",white:"oklch(100% 0 0)",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:"system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",fontStack:"AtlasGroteskLC, var(--systemFontStack)",monoFontStack:"ui-monospace, OperatorMonoLig, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:s(140),fontSizeH1:s(100),fontSizeH2:s(58),fontSizeH3:s(38),fontSizeH4:s(28),fontSizeH5:s(24),fontSizeBodyXL:s(22),fontSizeBodyL:s(20),fontSizeBodyM:s(18),fontSizeBodyS:s(16),fontSizeBodyXS:s(14),lineHeightTitle:"1.1",lineHeightBody:"1.6",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px",zIndex0:0,zIndex1:4,zIndex2:8,zIndex3:16,zIndex4:32,zIndex5:64},V_={fontSizeH0:s(120),fontSizeH1:s(80)},Q_={maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:s(100),fontSizeH1:s(70),fontSizeH2:s(50),fontSizeH3:s(36),fontSizeH4:s(26),fontSizeH5:s(22)},Y_={fontSizeH0:s(80),fontSizeH1:s(60),fontSizeH2:s(48),fontSizeH3:s(32),fontSizeH4:s(24),fontSizeH5:s(20)},Z_={spaceOuter:"24px",fontSizeH0:s(56),fontSizeH1:s(40),fontSizeH2:s(34),fontSizeH3:s(28),fontSizeH4:s(22),fontSizeH5:s(18),fontSizeBodyL:s(17),fontSizeBodyM:s(16),fontSizeBodyS:s(14)},_o={spaceOuter:"16px",fontSizeH0:s(42),fontSizeH1:s(38),fontSizeH2:s(28),fontSizeH3:s(24),fontSizeH4:s(20)},oo={background:"var(--bs-body-bg)",backgroundLight:"var(--bs-secondary-bg)",primary:"var(--bs-primary)",accent:"var(--bs-secondary)",error:"var(--bs-danger)",text:"var(--bs-body-color)",textTitle:"var(--bs-body-color)",textBody:"color-mix(in lab, var(--bs-body-color) 80%, transparent)",textLight:"color-mix(in lab, var(--bs-body-color) 60%, transparent)"},eo={background:"var(--bs-body-bg)",backgroundLight:"var(--bs-secondary-bg)",primary:"var(--bs-primary)",accent:"var(--bs-secondary)",error:"var(--bs-danger)",text:"var(--bs-body-color)",textTitle:"var(--bs-body-color)",textBody:"color-mix(in lab, var(--bs-body-color) 80%, transparent)",textLight:"color-mix(in lab, var(--bs-body-color) 60%, transparent)"},A={base:J_,desktop:V_,laptop:Q_,tablet:Y_,mobile:Z_,mobileS:_o},O={dark:oo,light:eo},l_=t.createContext({}),to=({theme:_="dark",children:o,className:e,as:g="div",...r})=>{const n=!lo().theme;return l.jsxs(l_.Provider,{value:{theme:_},children:[n&&o,!n&&l.jsx(g,{className:C(e),"bs-data-theme":_,...r,children:o})]})};function lo(){return t.useContext(l_)}function $(_){return _.replace(/\s\s+/g," ")}function H(_){return $(Object.keys(_).map(o=>`--${o}: ${_[o]};`).join(`

`))}function go(){return $(Object.keys(X).map(_=>`
        @media (max-width: ${X[_]}px) {
          :root {
            ${H(A[_])}
          }
        }
      `).join(`
`))}const no=$(`
  @layer theme, base, components, layout;
`),so=$(`
  :root {
    ${H(A.base)}
  }

  ${go()}

  [data-theme='dark'] {
    ${H(O.dark)}
  }

  [data-theme='light'] {
    ${H(O.light)}
  }
`),ro=$(`  

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
`),ao=$(`
  ${no}

  @layer theme {
    ${so}
    ${ro}
  }
`),vo="_icon_nm21j_3",io="_link_nm21j_1",mo="_date_nm21j_1",xo={icon:vo,link:io,date:mo,"social-media-icons":"_social-media-icons_nm21j_1"},co="/assets/icons-D_LJnBDF.svg",B=t.forwardRef(({icon:_,className:o,size:e,...g},r)=>l.jsx("svg",{"aria-hidden":!0,ref:r,className:C(xo.icon,o),width:e||24,height:e||24,...g,children:l.jsx("use",{href:`${co}#${_}`})})),g_=({children:_,in:o,unmount:e,initial:g=!0,...r})=>{const a=t.useRef(),n=t.useRef();return t.useEffect(()=>{clearTimeout(o?n.current:a.current)},[o]),l.jsx(T_,{children:(o||!e)&&l.jsx(po,{enterTimeout:a,exitTimeout:n,in:o,initial:g,...r,children:_})})},po=({children:_,timeout:o=0,enterTimeout:e,exitTimeout:g,onEnter:r,onEntered:a,onExit:n,onExited:v,initial:p,nodeRef:x,in:i})=>{const[d,y]=t.useState(p?"exited":"entered"),[m,c]=h_(),[f,h]=t.useState(!p),j=typeof o=="object",u=t.useRef(null),b=x||u,z=f&&i?m:!1;return t.useEffect(()=>{var k;if(f||!i)return;const T=j?o.enter:o;clearTimeout(e.current),clearTimeout(g.current),h(!0),y("entering"),r==null||r(),(k=b.current)==null||k.offsetHeight,e.current=setTimeout(()=>{y("entered"),a==null||a()},T)},[r,a,o,d,i]),t.useEffect(()=>{var k;if(m&&i)return;const T=j?o.exit:o;clearTimeout(e.current),clearTimeout(g.current),y("exiting"),n==null||n(),(k=b.current)==null||k.offsetHeight,g.current=setTimeout(()=>{y("exited"),c==null||c(),v==null||v()},T)},[m,n,c,o,v,i]),_({visible:z,status:d,nodeRef:b})},fo="_button_4jwwg_3",uo="_text_4jwwg_263",bo="_loader_4jwwg_289",yo="_icon_4jwwg_315",wo="_link_4jwwg_1",ho="_date_4jwwg_1",I={button:fo,text:uo,loader:bo,icon:yo,link:wo,date:ho,"social-media-icons":"_social-media-icons_4jwwg_1"};function n_(_){return _==null?void 0:_.includes("://")}const ko=t.forwardRef(({href:_,...o},e)=>n_(_)||!_?l.jsx(U,{href:_,ref:e,...o}):l.jsx(U,{unstable_viewTransition:!0,as:N,prefetch:"intent",to:_,ref:e,...o})),U=t.forwardRef(({className:_,as:o,secondary:e,loading:g,loadingText:r="loading",icon:a,iconEnd:n,iconHoverShift:v,iconOnly:p,children:x,rel:i,target:d,href:y,disabled:m,...c},f)=>{const h=n_(y),u=o||(y?"a":"button");return l.jsxs(u,{className:C(I.button,_),"data-loading":g,"data-icon-only":p,"data-secondary":e,"data-icon":a,href:y,rel:i||h?"noopener noreferrer":void 0,target:d||h?"_blank":void 0,disabled:m,ref:f,...c,children:[!!a&&l.jsx(B,{className:I.icon,"data-start":!p,"data-shift":v,icon:a}),!!x&&l.jsx("span",{className:I.text,children:x}),!!n&&l.jsx(B,{className:I.icon,"data-end":!p,"data-shift":v,icon:n}),l.jsx(g_,{unmount:!0,in:g,children:({visible:b,nodeRef:z})=>l.jsx(No,{ref:z,className:I.loader,size:32,text:r,"data-visible":b})})]})}),jo="_text_w1gy9_3",zo="_link_w1gy9_1",So="_date_w1gy9_1",Lo={text:jo,link:zo,date:So,"social-media-icons":"_social-media-icons_w1gy9_1"},Co=({children:_,size:o="m",as:e="span",align:g="auto",weight:r="auto",secondary:a,className:n,...v})=>l.jsx(e,{className:C(Lo.text,n),"data-align":g,"data-size":o,"data-weight":r,"data-secondary":a,...v,children:_}),$o="_loader_11zpc_3",To="_text_11zpc_33",Mo="_span_11zpc_85",Io="_loaderSpan_11zpc_1",Bo="_link_11zpc_1",Ro="_date_11zpc_1",E={loader:$o,text:To,span:Mo,loaderSpan:Io,link:Bo,date:Ro,"social-media-icons":"_social-media-icons_11zpc_1"},No=t.forwardRef(({className:_,style:o,width:e=32,height:g=4,text:r="Loading...",center:a,...n},v)=>Y()?l.jsx(Co,{className:C(E.text,_),weight:"medium",...n,children:r}):l.jsx("div",{ref:v,className:C(E.loader,_),"data-center":a,style:Z({width:e,height:g},o),...n,children:l.jsx("div",{className:E.span})}));function Ho(){const _=t.useRef(),o=P(),e=c_(),g=Y();return t.useCallback((a,n)=>{const v=a.split("#")[1];document.getElementById(v).scrollIntoView({behavior:g?"auto":"smooth"});const x=()=>{clearTimeout(_.current),_.current=setTimeout(()=>{window.removeEventListener("scroll",x),window.location.pathname===o.pathname&&(n==null||n(),e(`${o.pathname}#${v}`,{scroll:!1}))},50)};return window.addEventListener("scroll",x),()=>{window.removeEventListener("scroll",x),clearTimeout(_.current)}},[e,g,o.pathname])}const Ao="_toggle_h91zx_3",Go="_inner_h91zx_33",Eo="_icon_h91zx_49",Oo="_link_h91zx_1",Po="_date_h91zx_1",R={toggle:Ao,inner:Go,icon:Eo,link:Oo,date:Po,"social-media-icons":"_social-media-icons_h91zx_1"},Wo=({menuOpen:_,...o})=>l.jsx(ko,{iconOnly:!0,className:R.toggle,"aria-label":"Menu","aria-expanded":_,...o,children:l.jsxs("div",{className:R.inner,children:[l.jsx(B,{className:R.icon,"data-menu":!0,"data-open":_,icon:"menu"}),l.jsx(B,{className:R.icon,"data-close":!0,"data-open":_,icon:"close"})]})}),J=[{label:"Home",pathname:"/#home"},{label:"About",pathname:"/#about"},{label:"Ledger",pathname:"https://ledger.StephenJLu.com"},{label:"Projects",pathname:"/#projects"},{label:"Contact",pathname:"#contact"}],Fo=[{label:"Bluesky",url:`https://bsky.app/profile/${L.bluesky}`,icon:"bluesky"},{label:"Figma",url:`https://www.figma.com/${L.figma}`,icon:"figma"},{label:"Github",url:`https://github.com/${L.github}`,icon:"github"}],Xo="_menuBarContainer_dnsr2_5",Do="_menuBarList_dnsr2_57",qo="_menuButton_dnsr2_75",Ko="_active_dnsr2_75",Uo="_bounce_dnsr2_1",Jo="_navbar_dnsr2_141",Vo="_logo_dnsr2_191",Qo="_nav_dnsr2_141",Yo="_navList_dnsr2_227",Zo="_navIcons_dnsr2_243",_1="_navIconLink_dnsr2_291",o1="_navIcon_dnsr2_243",e1="_mobileNav_dnsr2_333",t1="_mobileNavLink_dnsr2_393",l1="_link_dnsr2_1",g1="_date_dnsr2_1",w={menuBarContainer:Xo,menuBarList:Do,menuButton:qo,active:Ko,bounce:Uo,navbar:Jo,logo:Vo,nav:Qo,navList:Yo,navIcons:Zo,navIconLink:_1,navIcon:o1,mobileNav:e1,mobileNavLink:t1,link:l1,date:g1,"social-media-icons":"_social-media-icons_dnsr2_1"},n1=()=>{const[_,o]=t.useState(),[e,g]=t.useState(!1),[r,a]=t.useState(),n=P(),v=t.useRef(),p=Ho(),x=O.dark.background;t.useEffect(()=>{o(`${n.pathname}${n.hash}`)},[n]),t.useEffect(()=>{!r||n.pathname!=="/"||(o(`${n.pathname}${r}`),p(r,()=>a(null)))},[n.pathname,p,r]);const i=(m="")=>{const c=_!=null&&_.endsWith("/")?_.slice(0,-1):_;return m===c?"page":""},d=(m,c)=>{const f=m.currentTarget.href.split("#")[1];a(null),o(c.label),f&&n.pathname==="/"&&(a(`#${f}`),m.preventDefault())},y=(m,c)=>{d(m,c),e&&g(!1)};return l.jsxs("header",{className:w.navbar,ref:v,children:[l.jsx(N,{unstable_viewTransition:!0,prefetch:"intent",to:n.pathname==="/"?"/#home":"/","data-navbar-item":!0,className:w.logo,"aria-label":`${L.name}, ${L.role}`,onClick:m=>y(m,{label:"Home",pathname:"/"})}),l.jsx(Wo,{onClick:()=>g(!e),menuOpen:e}),l.jsx("div",{className:w.menuBarContainer,style:{backgroundColor:x},"data-bs-theme":"dark",children:l.jsx("nav",{className:w.nav,children:l.jsx("ul",{className:w.menuBarList,children:J.map((m,c)=>l.jsx("li",{children:l.jsx(N,{unstable_viewTransition:!0,prefetch:"intent",to:m.pathname,"data-navbar-item":!0,"aria-current":i(m.pathname),onClick:f=>d(f,m),className:w.navLink,children:l.jsx(A_,{item:m,isActive:_===m.label,onClick:()=>o(m.label)})})},c))})})}),l.jsx(V,{desktop:!0}),l.jsx(g_,{unmount:!0,in:e,timeout:D(A.base.durationL),children:({visible:m,nodeRef:c})=>l.jsxs("nav",{className:w.mobileNav,"data-visible":m,ref:c,children:[J.map((f,h)=>l.jsx(N,{unstable_viewTransition:!0,prefetch:"intent",to:f.pathname,className:w.mobileNavLink,"data-visible":m,"aria-current":i(f.pathname),onClick:j=>y(j,f),style:Z({transitionDelay:v_(Number(D(A.base.durationS))+h*50)}),children:f.label},f.label)),l.jsx(V,{})]})})]})},V=({desktop:_})=>l.jsx("div",{className:w.navIcons,children:Fo.map(({label:o,url:e,icon:g})=>l.jsx("a",{"data-navbar-item":_||void 0,className:w.navIconLink,"aria-label":o,href:e,target:"_blank",rel:"noopener noreferrer",children:l.jsx(B,{className:w.navIcon,icon:g})},o))}),s1="_container_1g4r3_3",r1="_skip_1g4r3_23",a1="_link_1g4r3_1",v1="_date_1g4r3_1",i1={container:s1,skip:r1,link:a1,date:v1,"social-media-icons":"_social-media-icons_1g4r3_1"};const c1=()=>[{rel:"preload",href:e_,as:"font",type:"font/woff2",crossOrigin:""},{rel:"preload",href:t_,as:"font",type:"font/woff2",crossOrigin:""},{rel:"manifest",href:"/manifest.json"},{rel:"icon",href:"/favicon.ico"},{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"},{rel:"shortcut_icon",href:"/shortcut.png",type:"image/png",sizes:"64x64"},{rel:"apple-touch-icon",href:"/icon-256.png",sizes:"256x256"},{rel:"author",href:"/humans.txt",type:"text/plain"}];function p1(){const _="dark";return t.useEffect(()=>{console.info(`${L.ascii}
`,`Taking a peek huh? Check out the source code: ${L.repo}

`)},[]),l.jsxs("html",{lang:"en",children:[l.jsxs("head",{children:[l.jsx("title",{children:"Stephen J. Lu | Web Design and Development for the Public Good"}),l.jsx("meta",{charSet:"utf-8"}),l.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),l.jsx("meta",{name:"theme-color",content:"#000"}),l.jsx("meta",{name:"color-scheme",content:"dark light"}),l.jsx("style",{dangerouslySetInnerHTML:{__html:ao}}),l.jsx(p_,{}),l.jsx(f_,{})]}),l.jsxs("body",{"data-theme":_,children:[l.jsxs(to,{theme:_,children:[l.jsx(n1,{}),l.jsx("main",{id:"main-content",className:i1.container,tabIndex:-1,children:l.jsx(u_,{})})]}),l.jsx(y_,{}),l.jsx(b_,{})]})]})}export{p1 as default,c1 as links};
