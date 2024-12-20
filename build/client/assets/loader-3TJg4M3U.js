import{r as c,j as e,L as j}from"./components-BRXnhjxE.js";import{p as t,d as p,b as g,T as I,a as W}from"./config-rBykOrRa.js";import{T as X,u as R}from"./transition-BNkJdlDQ.js";const N="/assets/OperatorMono-D7WvIKEd.woff2",O="/assets/CedarvilleCursive-C2jkQaQV.ttf",q="/assets/AGThin-BV3b-dHU.ttf",F="/assets/AGBlack-CTa2XGQt.ttf",P="/assets/AGBlackItalic-sul5g3oJ.ttf",Q="/assets/AGBold-x0qq96lT.ttf",E="/assets/AGBoldItalic-FSwS18fN.ttf",U="/assets/AGLight-C7oQdQYa.ttf",D="/assets/AGLightItalic-Bx04CrxG.ttf",K="/assets/AGMedium-7qHP5tWb.ttf",V="/assets/AGMediumItalic-CM3QocvE.ttf",J="/assets/AGRegular-B1D8PH8b.ttf",Y="/assets/AGRegularItalic-BUXI5k5L.ttf",Z="/assets/AGThinItalic-D3U6Kc1h.ttf",tt={black:"oklch(0% 0 0)",white:"oklch(100% 0 0)",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:"system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",fontStack:"AtlasGroteskLC, CedarvilleCursive, var(--systemFontStack)",monoFontStack:"ui-monospace, OperatorMonoLig, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",fontWeightThin:100,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontWeightBlack:900,fontSizeH0:t(140),fontSizeH1:t(100),fontSizeH2:t(58),fontSizeH3:t(38),fontSizeH4:t(28),fontSizeH5:t(24),fontSizeBodyXL:t(22),fontSizeBodyL:t(20),fontSizeBodyM:t(18),fontSizeBodyS:t(16),fontSizeBodyXS:t(14),lineHeightTitle:"1.1",lineHeightBody:"1.6",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px",zIndex0:0,zIndex1:4,zIndex2:8,zIndex3:16,zIndex4:32,zIndex5:64},ot={fontSizeH0:t(120),fontSizeH1:t(80)},et={maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:t(100),fontSizeH1:t(70),fontSizeH2:t(50),fontSizeH3:t(36),fontSizeH4:t(26),fontSizeH5:t(22)},at={fontSizeH0:t(80),fontSizeH1:t(60),fontSizeH2:t(48),fontSizeH3:t(32),fontSizeH4:t(24),fontSizeH5:t(20)},st={spaceOuter:"24px",fontSizeH0:t(56),fontSizeH1:t(40),fontSizeH2:t(34),fontSizeH3:t(28),fontSizeH4:t(22),fontSizeH5:t(18),fontSizeBodyL:t(17),fontSizeBodyM:t(16),fontSizeBodyS:t(14)},nt={spaceOuter:"16px",fontSizeH0:t(42),fontSizeH1:t(38),fontSizeH2:t(28),fontSizeH3:t(24),fontSizeH4:t(20)},rt={background:"oklch(0% 0 0)",backgroundLight:"oklch(20% 0 0)",primary:"oklch(95% 0 0)",accent:"oklch(89.7% 0.14 83.6)",error:"oklch(65.91% 0.249 13.76)",text:"var(--white)",textTitle:"var(--text)",linkColor:"var(--accent)",textBody:"color-mix(in lab, var(--text) 80%, transparent)",textLight:"color-mix(in lab, var(--text) 60%, transparent)"},it={background:"oklch(96.12% 0 0)",backgroundLight:"var(--white)",primary:"var(--black)",accent:"oklch(18.3% 0.1 264.6)",error:"oklch(63.17% 0.259 25.41)",text:"var(--black)",textTitle:"color-mix(in lab, var(--text) 90%, transparent)",linkColor:"var(--accent)",textBody:"color-mix(in lab, var(--text) 75%, transparent)",textLight:"color-mix(in lab, var(--text) 55%, transparent)"},C={base:tt,desktop:ot,laptop:et,tablet:at,mobile:st,mobileS:nt},L={dark:rt,light:it},G=c.createContext({}),$t=({theme:o="dark",children:a,className:s,as:n="div",...i})=>{const r=!lt().theme;return e.jsxs(G.Provider,{value:{theme:o},children:[r&&a,!r&&e.jsx(n,{className:p(s),"data-theme":o,...i,children:a})]})};function lt(){return c.useContext(G)}function f(o){return o.replace(/\s\s+/g," ")}function x(o){return f(Object.keys(o).map(a=>`--${a}: ${o[a]};`).join(`

`))}function ct(){return f(Object.keys(g).map(o=>`
        @media (max-width: ${g[o]}px) {
          :root {
            ${x(C[o])}
          }
        }
      `).join(`
`))}const ft=f(`
  @layer theme, base, components, layout;
`),dt=f(`
  :root {
    ${x(C.base)}
  }

  ${ct()}

  [data-theme='dark'] {
    ${x(L.dark)}
  }

  [data-theme='light'] {
    ${x(L.light)}
  }
`),pt=f(`  

  @font-face {
    font-family: OperatorMonoLig;
    src: url(${N}) format('woff2');
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: CedarvilleCursive;
    src: url(${O}) format('truetype');
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${q}) format('truetype');
    font-weight: 100;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${U}) format('truetype');
    font-weight: 300;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${J}) format('truetype');
    font-weight: 400;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${K}) format('truetype');
    font-weight: 500;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Q}) format('truetype');
    font-weight: 700;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${F}) format('truetype');
    font-weight: 900;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Z}) format('truetype');
    font-weight: 100;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${D}) format('truetype');
    font-weight: 300;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${Y}) format('truetype');
    font-weight: 400;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${V}) format('truetype');
    font-weight: 500;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${E}) format('truetype');
    font-weight: 700;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${P}) format('truetype');
    font-weight: 900;
    font-display: block;
    font-style: italic;
  }
`),wt=f(`
  ${ft}

  @layer theme {
    ${dt}
    ${pt}
  }
`),mt="_icon_1tdl1_2",ut={icon:mt},xt="/assets/icons-Ghr-oXj8.svg",b=c.forwardRef(({icon:o,className:a,size:s,...n},i)=>e.jsx("svg",{"aria-hidden":!0,ref:i,className:p(ut.icon,a),width:s||24,height:s||24,...n,children:e.jsx("use",{href:`${xt}#${o}`})})),kt="_button_4rqg0_3",yt="_text_4rqg0_265",ht="_loader_4rqg0_291",St="_icon_4rqg0_317",d={button:kt,text:yt,loader:ht,icon:St};function A(o){return(o==null?void 0:o.includes("://"))??!1}const Bt=c.forwardRef(({href:o,...a},s)=>A(o)||!o?e.jsx(z,{href:o,ref:s,...a}):e.jsx(z,{as:j,prefetch:"intent",to:o,ref:s,...a})),z=c.forwardRef(({className:o,as:a,secondary:s,loading:n,loadingText:i="loading",icon:l,iconEnd:r,iconHoverShift:m,iconOnly:u,children:h,rel:H,target:v,href:k,disabled:$,...w},B)=>{const S=A(k),_=a||(k?"a":"button");return e.jsxs(_,{className:p(d.button,o),"data-loading":n,"data-icon-only":u,"data-secondary":s,"data-icon":l,href:k,rel:H||(S?"noopener noreferrer":void 0),target:v||(S?"_blank":void 0),disabled:$,ref:B,...w,children:[!!l&&e.jsx(b,{className:d.icon,"data-start":!u,"data-shift":m,icon:l}),!!h&&e.jsx("span",{className:d.text,children:h}),!!r&&e.jsx(b,{className:d.icon,"data-end":!u,"data-shift":m,icon:r}),e.jsx(X,{unmount:!0,in:n,children:({visible:M,nodeRef:T})=>e.jsx(Ct,{ref:T,className:d.loader,size:32,text:i,"data-visible":M})})]})}),gt="_loader_1o1zt_2",Lt="_text_1o1zt_17",bt="_span_1o1zt_43",zt="_loaderSpan_1o1zt_1",y={loader:gt,text:Lt,span:bt,loaderSpan:zt},Ct=c.forwardRef(({className:o,style:a,width:s=32,height:n=4,text:i="Loading...",center:l,...r},m)=>R()?e.jsx(I,{className:p(y.text,o),weight:"medium",...r,children:i}):e.jsx("div",{ref:m,className:p(y.loader,o),"data-center":l,style:W({width:s,height:n},a),...r,children:e.jsx("div",{className:y.span})}));export{J as A,Bt as B,b as I,N as O,$t as T,C as a,wt as b,L as t,lt as u};
