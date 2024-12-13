import{r as n,j as l}from"./jsx-runtime-3WVvLOaR.js";import{p as _,c as j,m as c,a as p}from"./config-BcOjz3rL.js";import{g as S,h as z,j as L,k as A,n as G,M as H,L as C,O as $,S as M}from"./components-CBJo7Xk9.js";/**
 * @remix-run/react v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let f="positions";function I({getKey:o,...g}){let{isSpaMode:m}=S(),s=z(),x=L();A({getKey:o,storageKey:f});let i=n.useMemo(()=>{if(!o)return null;let t=o(s,x);return t!==s.key?t:null},[]);if(m)return null;let r=((t,k)=>{if(!window.history.state||!window.history.state.key){let v=Math.random().toString(32).slice(2);window.history.replaceState({key:v},"")}try{let d=JSON.parse(sessionStorage.getItem(t)||"{}")[k||window.history.state.key];typeof d=="number"&&window.scrollTo(0,d)}catch(v){console.error(v),sessionStorage.removeItem(t)}}).toString();return n.createElement("script",G({},g,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${r})(${JSON.stringify(f)}, ${JSON.stringify(i)})`}}))}const u="/assets/OperatorMono-D7WvIKEd.woff2",B="/assets/AGThin-CGrVvvWC.woff2",T="/assets/AGBlack-Bs4tzqGC.woff2",O="/assets/AGBlackItalic-CLphIWfD.woff2",W="/assets/AGBold-vBlvPdb4.woff2",R="/assets/AGBoldItalic-Cet5yrpz.woff2",X="/assets/AGLight-BhtHcmtK.woff2",D="/assets/AGLightItalic-DSoRlZP8.woff2",N="/assets/AGMedium-DkxbdaAe.woff2",P="/assets/AGMediumItalic-DLAyQW33.woff2",y="/assets/AGRegular-9vYeQBIp.woff2",q="/assets/AGRegularItalic-COnH8aUE.woff2",F="/assets/AGThinItalic-BtkON_hk.woff2",E={black:"oklch(0% 0 0)",white:"oklch(100% 0 0)",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:"system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",fontStack:"AtlasGroteskLC, var(--systemFontStack)",monoFontStack:"ui-monospace, OperatorMonoLig, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:_(140),fontSizeH1:_(100),fontSizeH2:_(58),fontSizeH3:_(38),fontSizeH4:_(28),fontSizeH5:_(24),fontSizeBodyXL:_(22),fontSizeBodyL:_(20),fontSizeBodyM:_(18),fontSizeBodyS:_(16),fontSizeBodyXS:_(14),lineHeightTitle:"1.1",lineHeightBody:"1.6",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px",zIndex0:0,zIndex1:4,zIndex2:8,zIndex3:16,zIndex4:32,zIndex5:64},J={fontSizeH0:_(120),fontSizeH1:_(80)},U={maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:_(100),fontSizeH1:_(70),fontSizeH2:_(50),fontSizeH3:_(36),fontSizeH4:_(26),fontSizeH5:_(22)},K={fontSizeH0:_(80),fontSizeH1:_(60),fontSizeH2:_(48),fontSizeH3:_(32),fontSizeH4:_(24),fontSizeH5:_(20)},Q={spaceOuter:"24px",fontSizeH0:_(56),fontSizeH1:_(40),fontSizeH2:_(34),fontSizeH3:_(28),fontSizeH4:_(22),fontSizeH5:_(18),fontSizeBodyL:_(17),fontSizeBodyM:_(16),fontSizeBodyS:_(14)},Y={spaceOuter:"16px",fontSizeH0:_(42),fontSizeH1:_(38),fontSizeH2:_(28),fontSizeH3:_(24),fontSizeH4:_(20)},V={background:"var(--bs-body-bg)",backgroundLight:"var(--bs-secondary-bg)",primary:"var(--bs-primary)",accent:"var(--bs-secondary)",error:"var(--bs-danger)",text:"var(--bs-body-color)",textTitle:"var(--bs-body-color)",textBody:"color-mix(in lab, var(--bs-body-color) 80%, transparent)",textLight:"color-mix(in lab, var(--bs-body-color) 60%, transparent)"},Z={background:"var(--bs-body-bg)",backgroundLight:"var(--bs-secondary-bg)",primary:"var(--bs-primary)",accent:"var(--bs-secondary)",error:"var(--bs-danger)",text:"var(--bs-body-color)",textTitle:"var(--bs-body-color)",textBody:"color-mix(in lab, var(--bs-body-color) 80%, transparent)",textLight:"color-mix(in lab, var(--bs-body-color) 60%, transparent)"},w={base:E,desktop:J,laptop:U,tablet:K,mobile:Q,mobileS:Y},b={dark:V,light:Z},h=n.createContext({}),__=({theme:o="dark",children:g,className:m,as:s="div",...x})=>{const r=!o_().theme;return l.jsxs(h.Provider,{value:{theme:o},children:[r&&g,!r&&l.jsx(s,{className:j(m),"bs-data-theme":o,...x,children:g})]})};function o_(){return n.useContext(h)}function e(o){return o.replace(/\s\s+/g," ")}function a(o){return e(Object.keys(o).map(g=>`--${g}: ${o[g]};`).join(`

`))}function l_(){return e(Object.keys(c).map(o=>`
        @media (max-width: ${c[o]}px) {
          :root {
            ${a(w[o])}
          }
        }
      `).join(`
`))}const g_=e(`
  @layer theme, base, components, layout;
`),e_=e(`
  :root {
    ${a(w.base)}
  }

  ${l_()}

  [data-theme='dark'] {
    ${a(b.dark)}
  }

  [data-theme='light'] {
    ${a(b.light)}
  }
`),t_=e(`  

  @font-face {
    font-family: "OperatorMonoLig";
    src: url(${u}) format('woff2');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${B}) format('woff2');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${X}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${y}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${N}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${W}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${T}) format('woff2');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${F}) format('woff2');
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${D}) format('woff2');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${q}) format('woff2');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${P}) format('woff2');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${R}) format('woff2');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: "AtlasGroteskLC";
    src: url(${O}) format('woff2');
    font-weight: 900;
    font-style: italic;
  }
`),n_=e(`
  ${g_}

  @layer theme {
    ${e_}
    ${t_}
  }
`),s_="_container_1g4r3_3",r_="_skip_1g4r3_23",v_="_link_1g4r3_1",a_="_date_1g4r3_1",m_={container:s_,skip:r_,link:v_,date:a_,"social-media-icons":"_social-media-icons_1g4r3_1"};const c_=()=>[{rel:"preload",href:u,as:"font",type:"font/woff2",crossOrigin:""},{rel:"preload",href:y,as:"font",type:"font/woff2",crossOrigin:""},{rel:"manifest",href:"/manifest.json"},{rel:"icon",href:"/favicon.ico"},{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"},{rel:"shortcut_icon",href:"/shortcut.png",type:"image/png",sizes:"64x64"},{rel:"apple-touch-icon",href:"/icon-256.png",sizes:"256x256"},{rel:"author",href:"/humans.txt",type:"text/plain"}];function p_(){const o="dark";return n.useEffect(()=>{console.info(`${p.ascii}
`,`Taking a peek huh? Check out the source code: ${p.repo}

`)},[]),l.jsxs("html",{lang:"en",children:[l.jsxs("head",{children:[l.jsx("title",{children:"Stephen J. Lu | Web Design and Development for the Public Good"}),l.jsx("meta",{charSet:"utf-8"}),l.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),l.jsx("meta",{name:"theme-color",content:"#000"}),l.jsx("meta",{name:"color-scheme",content:"dark light"}),l.jsx("style",{dangerouslySetInnerHTML:{__html:n_}}),l.jsx(H,{}),l.jsx(C,{})]}),l.jsxs("body",{"data-theme":o,children:[l.jsx(__,{theme:o,children:l.jsx("main",{id:"main-content",className:m_.container,tabIndex:-1,children:l.jsx($,{})})}),l.jsx(I,{}),l.jsx(M,{})]})]})}export{p_ as default,c_ as links};
