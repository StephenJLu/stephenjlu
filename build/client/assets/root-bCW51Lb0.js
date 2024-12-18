import{h as P,k as C,n as J,o as q,r,q as D,j as t,s as U,L,M as V,t as Q,O as Y,S as Z}from"./components-BRXnhjxE.js";import{p as n,c as K,m as B,a as k,b as H,d as t0,n as e0}from"./config-5ramxuPs.js";import{u as n0,B as o0,I as w,T as l0}from"./loader-BJ7TiS1K.js";import{I as a0}from"./InViewport-D_3fgGNU.js";/**
 * @remix-run/react v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let M="positions";function s0({getKey:e,...o}){let{isSpaMode:l}=P(),a=C(),v=J();q({getKey:e,storageKey:M});let d=r.useMemo(()=>{if(!e)return null;let c=e(a,v);return c!==a.key?c:null},[]);if(l)return null;let h=((c,i)=>{if(!window.history.state||!window.history.state.key){let u=Math.random().toString(32).slice(2);window.history.replaceState({key:u},"")}try{let y=JSON.parse(sessionStorage.getItem(c)||"{}")[i||window.history.state.key];typeof y=="number"&&window.scrollTo(0,y)}catch(u){console.error(u),sessionStorage.removeItem(c)}}).toString();return r.createElement("script",D({},o,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${h})(${JSON.stringify(M)}, ${JSON.stringify(d)})`}}))}const h0=()=>(r.useEffect(()=>{(()=>{const o=Math.floor(Math.random()*360),l=Math.floor(Math.random()*360),a=document.createElement("style");a.innerHTML=`
        body::before {
          transform: rotate(${o}deg);
        }
        body::after {
          transform: rotate(${l}deg);
        }
      `,document.head.appendChild(a)})()},[]),null),r0=h0,c0=({typeText:e,delay:o=0})=>{const[l,a]=r.useState(0);return r.useEffect(()=>{const v=setTimeout(()=>{const d=setInterval(()=>{a(h=>h<e.length?h+1:h)},50);return()=>clearInterval(d)},o);return()=>clearTimeout(v)},[e,o]),t.jsx("span",{children:e.slice(0,l)})},v0=c0,i0="_menuButton_maxbw_3",f0="_active_maxbw_13",u0="_bounce_maxbw_1",T={menuButton:i0,active:f0,bounce:u0},m0=({item:e,isActive:o,onClick:l})=>{const a=()=>{l(e)};return t.jsx("button",{type:"button",onClick:a,className:`${T.menuButton} ${o?T.active:""}`,children:e.label})},d0=m0,R="/assets/OperatorMono-D7WvIKEd.woff2",p0="/assets/AGThin-BV3b-dHU.ttf",k0="/assets/AGBlack-CTa2XGQt.ttf",x0="/assets/AGBlackItalic-sul5g3oJ.ttf",y0="/assets/AGBold-x0qq96lT.ttf",b0="/assets/AGBoldItalic-FSwS18fN.ttf",g0="/assets/AGLight-C7oQdQYa.ttf",S0="/assets/AGLightItalic-Bx04CrxG.ttf",_0="/assets/AGMedium-7qHP5tWb.ttf",L0="/assets/AGMediumItalic-CM3QocvE.ttf",W="/assets/AGRegular-B1D8PH8b.ttf",w0="/assets/AGRegularItalic-BUXI5k5L.ttf",j0="/assets/AGThinItalic-D3U6Kc1h.ttf",C0={black:"oklch(0% 0 0)",white:"oklch(100% 0 0)",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:"system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",fontStack:"AtlasGroteskLC, var(--systemFontStack)",monoFontStack:"ui-monospace, OperatorMonoLig, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",fontWeightThin:100,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontWeightBlack:900,fontSizeH0:n(140),fontSizeH1:n(100),fontSizeH2:n(58),fontSizeH3:n(38),fontSizeH4:n(28),fontSizeH5:n(24),fontSizeBodyXL:n(22),fontSizeBodyL:n(20),fontSizeBodyM:n(18),fontSizeBodyS:n(16),fontSizeBodyXS:n(14),lineHeightTitle:"1.1",lineHeightBody:"1.6",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px",zIndex0:0,zIndex1:4,zIndex2:8,zIndex3:16,zIndex4:32,zIndex5:64},$0={fontSizeH0:n(120),fontSizeH1:n(80)},z0={maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:n(100),fontSizeH1:n(70),fontSizeH2:n(50),fontSizeH3:n(36),fontSizeH4:n(26),fontSizeH5:n(22)},I0={fontSizeH0:n(80),fontSizeH1:n(60),fontSizeH2:n(48),fontSizeH3:n(32),fontSizeH4:n(24),fontSizeH5:n(20)},B0={spaceOuter:"24px",fontSizeH0:n(56),fontSizeH1:n(40),fontSizeH2:n(34),fontSizeH3:n(28),fontSizeH4:n(22),fontSizeH5:n(18),fontSizeBodyL:n(17),fontSizeBodyM:n(16),fontSizeBodyS:n(14)},H0={spaceOuter:"16px",fontSizeH0:n(42),fontSizeH1:n(38),fontSizeH2:n(28),fontSizeH3:n(24),fontSizeH4:n(20)},M0={background:"oklch(0% 0 0)",backgroundLight:"oklch(20% 0 0)",primary:"oklch(95% 0 0)",accent:"oklch(89.7% 0.14 83.6)",error:"oklch(65.91% 0.249 13.76)",text:"var(--white)",textTitle:"var(--text)",linkColor:"var(--accent)",textBody:"color-mix(in lab, var(--text) 80%, transparent)",textLight:"color-mix(in lab, var(--text) 60%, transparent)"},T0={background:"oklch(96.12% 0 0)",backgroundLight:"var(--white)",primary:"var(--black)",accent:"oklch(18.3% 0.1 264.6)",error:"oklch(63.17% 0.259 25.41)",text:"var(--black)",textTitle:"color-mix(in lab, var(--text) 90%, transparent)",linkColor:"var(--accent)",textBody:"color-mix(in lab, var(--text) 75%, transparent)",textLight:"color-mix(in lab, var(--text) 55%, transparent)"},_={base:C0,desktop:$0,laptop:z0,tablet:I0,mobile:B0,mobileS:H0},j={dark:M0,light:T0},E=r.createContext({}),N0=({theme:e="dark",children:o,className:l,as:a="div",...v})=>{const h=!A0().theme;return t.jsxs(E.Provider,{value:{theme:e},children:[h&&o,!h&&t.jsx(a,{className:K(l),"data-theme":e,...v,children:o})]})};function A0(){return r.useContext(E)}function x(e){return e.replace(/\s\s+/g," ")}function S(e){return x(Object.keys(e).map(o=>`--${o}: ${e[o]};`).join(`

`))}function G0(){return x(Object.keys(B).map(e=>`
        @media (max-width: ${B[e]}px) {
          :root {
            ${S(_[e])}
          }
        }
      `).join(`
`))}const R0=x(`
  @layer theme, base, components, layout;
`),W0=x(`
  :root {
    ${S(_.base)}
  }

  ${G0()}

  [data-theme='dark'] {
    ${S(j.dark)}
  }

  [data-theme='light'] {
    ${S(j.light)}
  }
`),E0=x(`  

  @font-face {
    font-family: OperatorMonoLig;
    src: url(${R}) format('woff2');
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${p0}) format('truetype');
    font-weight: 100;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${g0}) format('truetype');
    font-weight: 300;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${W}) format('truetype');
    font-weight: 400;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${_0}) format('truetype');
    font-weight: 500;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${y0}) format('truetype');
    font-weight: 700;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${k0}) format('truetype');
    font-weight: 900;
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${j0}) format('truetype');
    font-weight: 100;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${S0}) format('truetype');
    font-weight: 300;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${w0}) format('truetype');
    font-weight: 400;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${L0}) format('truetype');
    font-weight: 500;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${b0}) format('truetype');
    font-weight: 700;
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: AtlasGroteskLC;
    src: url(${x0}) format('truetype');
    font-weight: 900;
    font-display: block;
    font-style: italic;
  }
`),O0=x(`
  ${R0}

  @layer theme {
    ${W0}
    ${E0}
  }
`),X0="_b_6k8yy_2",F0="_c_6k8yy_6",N={b:X0,c:F0},P0=()=>t.jsxs("svg",{id:"a","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 50 50",children:[t.jsx("path",{className:N.c,d:"M0,0v50h50V0H0ZM48.38,47.96H1.62V2.04h46.75v45.92Z"}),t.jsx("path",{className:N.b,d:"M31.5,34.71c.11-.03.13-.07.21-.12v-.04h.08v-.04h.08v-.04h.17v-.04c.13-.04.46.06.54.08.19.05.38-.07.54-.08l.21-.25h.04v-.08l.08-.04v-.12h.04v-.12h.04v-.21h.04v-.33h.04v-3.04c.07-.27.04-.71.04-1.04v-4.21h-.04v-.17c-.01-.49.07-1.13-.04-1.54v-.67c0-.5,0-1.07-.04-1.5l.04-3.08c.07-.26.09-1.42,0-1.67-.05.05-.02,0-.04.08h-.04l-.04.25c-.2.53-.08,1.2-.08,1.83l-.04,3.83v.17h.04v1.62c-.11.38-.04,1-.04,1.46l-.04,2c.09.33.09,1.67,0,2l-.04.62-.29,1.04h-.04v.08h-.04v.12h-.04l-.08.25h-.04v.08h-.04v.08h-.04v.08h-.04l-.08.25-.08.04-.04.17-.12.08v.08l-.08.04v.08l-.12.08v.08l-.12.08v.08l-.33.29v.08l-.29.25-.04.08h-.08l-.21.25h-.08l-.12.17-.12.04-.04.08h-.08l-.08.12h-.08l-.04.08-.12.04v.04h-.08l-.04.08-.17.04-.04.08-.17.04-.04.08-.25.08v.04h-.08v.04l-.25.08v.04h-.12v.04l-.17.04v.04h-.12v.04h-.08v.04h-.12v.04h-.08v.04l-.25.04v.04h-.12v.04h-.12v.04h-.12v.04l-.33.04v.04h-.17v.04h-.17v.04h-.17v.04h-.25v.04h-.25v.04h-.37v.04h-.75v.04l-.83-.04v-.04h-.42v-.04l-.83-.08v-.04h-.21v-.04l-.37-.04v-.04h-.17v-.04h-.17v-.04h-.17v-.04h-.12v-.04h-.12v-.04h-.12v-.04h-.12v-.04l-.25-.04v-.04h-.08v-.04h-.12v-.04h-.08v-.04h-.12v-.04l-.17-.04v-.04l-.17-.04-.04-.08h-.08v-.04h-.08v-.04h-.08v-.04h-.08l-.08-.12h-.08l-.04-.08h-.08l-.08-.12h-.08l-.12-.17-.33-.29-.04-.12-.29-.25v-.04h-.08l-.21.25h-.08l-.12.17-.12.04-.04.08h-.08l-.04.08-.12.04v.04h-.08l-.04.08h-.08l-.04.08-.17.04-.04.08h-.08v.04h-.08v.04h-.08v.04h-.08v.04h-.08v.04h-.08v.04h-.08v.04l-.25.08v.04h-.12v.04l-.17.04v.04h-.12v.04h-.08v.04l-.25.04v.04h-.08v.04h-.17v.04h-.12v.04h-.12v.04h-.12v.04h-.17v.04h-.17v.04h-.17v.04h-.17v.04h-.21v.04l-.42.04v.04h-.25v.04h-.29v.04h-.33v.04h-.37v.04h-.5v.04h-1.12v.04l-.87-.04v-.04h-.42v-.04h-.29c-.21-.06-.51-.1-.71-.17h-.21c-.22-.07-.5-.14-.71-.21h-.17v-.04h-.12v-.04h-.12v-.04l-.54-.12v-.04h-.08v-.04h-.12v-.04l-.17-.04v-.04l-.37-.12-.04-.08-.17-.04c-.43-.27-.61-.77-1.29-.79-.03.05-.07.06-.08.08v.08h-.04l-.04.37h-.04l-.04.62h-.04l-.08.25-.25.21s-.03.06-.04.08c-.07.05-.09,0-.17.08l-.42.04c-.07-.08-.1-.04-.17-.08l-.12-.17h-.04c-.23-.34-.3-1.48-.17-1.96v-.42h.04v-.33h.04v-.37h.04v-.37h.04v-.37h.04v-.5h.04v-.29h-.04v-.54l-.04-1.08h-.04l-.08-1.54h-.04v-.5h-.04v-.54c-.09-.31-.07-1.04.04-1.29l.25-.33h.08l.04-.08c.08-.05.09,0,.17-.08.29,0,.42.04.62.08l.21.25h.04v.08h.04l.04.17h.04l.04.46h.04v.54c0,.46-.02.99.08,1.33v.21h.04v.12h.04v.17h.04v.08h.04l.04.25h.04v.08h.04v.12h.04l.08.25h.04v.08h.04v.12h.04v.08h.04l.08.25h.04v.12h.04v.08h.04l.04.17h.04v.12h.04l.04.17h.04v.12h.04v.08h.04l.04.17h.04l.12.37.08.04.08.25.08.04v.08l.12.08v.08l.12.08v.08l.12.08v.08l.21.17v.08l.29.25v.08l.37.33.12.17h.08l.12.17h.08l.12.17h.08l.04.08h.08l.04.08.17.04.04.08h.08v.04h.08v.04c.43.19.9.28,1.37.42h.33c.31.09,1.52.09,1.83,0h.37c.25-.07.59-.09.83-.17h.21v-.04h.17v-.04h.17v-.04h.17v-.04h.17v-.04h.12v-.04h.12v-.04h.12v-.04h.08v-.04l.25-.04v-.04h.08v-.04h.12v-.04l.17-.04v-.04h.08v-.04h.12v-.04h.08v-.04h.08l.04-.08.25-.08.04-.08.17-.04.04-.08h.08l.04-.08h.08l.08-.12h.08l.12-.17h.08l.42-.46c.14-.14.35-.3.37-.54h-.04l-.04-.25h-.04v-.12h-.04v-.12c-.17-.43-.25-.94-.25-1.54l-.04-.5h.04l.04-.33h.04l.08-.25h.04v-.08h.04v-.08l.46-.5h.08l.04-.08h.08v-.04c.12-.07.07.04.12-.12h-.04l-.04-.25h-.04v-.08h-.04v-.08h-.04v-.08h-.04v-.08h-.04v-.08h-.04v-.08l-.08-.04-.04-.17-.17-.12v-.08l-.21-.17-.37-.42h-.08l-.12-.17h-.08l-.04-.08h-.08l-.04-.08h-.08l-.04-.08h-.08l-.04-.08-.17-.04-.04-.08h-.08v-.04h-.08v-.04h-.08v-.04h-.08v-.04h-.08v-.04h-.08l-.04-.08-.21-.04v-.04h-.08v-.04l-.25-.08v-.04h-.12v-.04h-.08v-.04l-.21-.04v-.04h-.12v-.04h-.08v-.04l-.25-.04v-.04h-.12v-.04h-.12v-.04h-.17v-.04h-.17v-.04h-.17v-.04h-.21v-.04l-.42-.04v-.04l-.46-.04v-.04h-.33v-.04h-.29v-.04h-.29v-.04h-.29c-.27-.08-.62-.13-.87-.21h-.21v-.04l-.29-.04v-.04l-.29-.04v-.04h-.12v-.04h-.12v-.04l-.25-.04v-.04h-.08v-.04l-.25-.04v-.04l-.25-.08v-.04l-.25-.08-.04-.08h-.08l-.04-.08h-.08l-.08-.12h-.08l-.08-.12h-.08l-.12-.17h-.08l-.29-.33-.12-.08v-.08l-.25-.21v-.08l-.12-.08v-.08l-.08-.04v-.08l-.08-.04v-.08l-.08-.04-.08-.25h-.04v-.08h-.04v-.08h-.04l-.08-.25h-.04l-.29-1.04v-.33c-.15-.55.01-1.32.17-1.71v-.12h.04v-.08h.04v-.12h.04l.04-.17h.04l.04-.17.08-.04.04-.17.08-.04v-.08l.12-.08v-.08l.17-.12v-.08l.29-.25.17-.21h.08l.12-.17h.08l.08-.12.12-.04.04-.08h.08v-.04h.08l.04-.08.25-.08.04-.08.17-.04v-.04l.17-.04v-.04h.12v-.04h.08v-.04l.21-.04v-.04l.25-.04v-.04h.08v-.04l1.17-.25h.46c.13-.04.64-.1.83-.04v.04h.33v.04h.25v.04h.25v.04l.33.04v.04h.12v.04h.12v.04h.12v.04h.12v.04l.17.04v.04h.12v.04l.25.08v.04h.08v.04h.08v.04l.67.29v.04h.08v.04l.25.08v.04l.25.04v.04h.58v-.04c.25-.11.4-.28.58-.46l.08-.12c.22-.16.49-.21.87-.21v.04h.12l.04.08h.08l.21.29v.12h.04v.12h.04v.21h.04v.37h.04v.5h.04l.04.46h.04l.04.29h.04v.08h.04v.12h.04v.12h.04v.12h.04l.04.25h.04v.08h.04l.04.25h.04v.08h.04v.12h.04v.12h.04v.12h.04v.12h.04v.12h.04v.12h.04v.12h.04l.12.58h.04v.21c.03.08.09.35.04.5h-.04l-.04.21c-.09.05-.09.09-.21.12-.19.18-.59.05-.75-.04h-.08l-.46-.5-.04-.17-.08-.04-.04-.17h-.04l-.04-.12-.08-.04-.04-.17h-.04l-.04-.12-.08-.04v-.08l-.12-.08v-.08l-.42-.37-.04-.12h-.08l-.33-.37-.17-.12v-.08l-.33-.29-.04-.12-.12-.08-.25-.29h-.08l-.12-.17h-.08l-.08-.12h-.08l-.08-.12h-.08v-.04h-.08l-.04-.08-.17-.04-.04-.08h-.08v-.04l-.17-.04v-.04h-.12v-.04l-.17-.04v-.04l-.21-.04v-.04h-.17v-.04h-.12v-.04h-.12v-.04h-.17v-.04h-.21v-.04h-.25v-.04l-1.17-.04c-1.17,0-1.96.21-2.54.79l-.17.12v.08l-.08.04-.04.12h-.04v.08h-.04v.08h-.04v.12h-.04v.12c-.15.4-.16.82,0,1.21v.12h.04v.08l.08.04v.08l.08.04.21.25h.08l.08.12.17.04v.04l.25.08v.04h.12v.04h.12v.04h.12v.04h.17v.04h.17v.04h.29v.04h.37v.04h.87v.04h.37v.04h.29c.32.1.73.14,1.04.25l.33.04v.04h.12v.04h.12v.04l.42.08v.04h.08v.04l.25.04v.04l.17.04v.04h.12v.04l.25.08v.04h.08v.04l.25.08.04.08.25.08.04.08.25.08v.04l.12.04.04.08.17.04.04.08h.08v.04l.12.04.04.08h.08v.04l.12.04.04.08h.08l.08.12h.08l.04.08h.08l.08.12h.08l.04.08h.04l.04.08h.08l.12.17h.08l.21.25h.08l.37.42.46.42v.08l.21.17v.08l.12.08v.08l.12.08v.08l.12.08v.08l.08.04v.08l.08.04.08.25.08.04v.08h.04v.08h.04v.08h.04v.08h.04v.08h.04v.08h.04l.08.25h.04v.12h.04v.08h.04l.04.25c.41.95.52,2.25.46,3.54l-.08.62h-.04l-.04.37h-.04l-.04.29h-.04l-.04.25h-.04v.08h-.04v.12h-.04l-.04.21h-.04v.08h-.04v.08h-.04v.08h-.04v.08h-.04v.08l-.08.04-.04.17h-.04v.04h.04l.21.25h.08l.25.29h.08l.12.17h.08l.08.12h.08l.08.12h.08l.04.08h.08l.04.08.17.04.04.08.25.08v.04h.08v.04h.08v.04l.25.08v.04l.25.04v.04h.12v.04h.12v.04h.12v.04h.12v.04h.21v.04h.21v.04h.25v.04h.42v.04h.42c.36,0,.84.04,1.12-.04h.29v-.04h.21v-.04h.17v-.04h.12v-.04h.17c1.81-.71,3.05-2.01,3.71-3.87l.08-.54v-.33c.07-.24.04-.65.04-.96v-1.75l.04-4.83h.04v-.62c.09-.32.04-.85.04-1.25v-2.58l-.04-1.25h-.04v-.12l-.08-.04v-.08l-.17-.12-.04-.08h-.08l-.04-.08h-.08l-.04-.08h-.08v-.04h-.08v-.04h-.08v-.04h-.08l-.04-.08c-.1-.06-.22-.04-.33-.08v-.04h-.17v-.04h-.17v-.04h-.12v-.04h-.12c-.14-.06-.24-.15-.33-.25l-.08-.04v-.25l.12-.08v-.04h.08l.04-.08.25-.04v-.04c.24-.08,1.04.04,1.21.08h.42c.21.06.59-.03.83.04.07.02.29.09.42.04v-.04h.08v-.04l.29-.04v-.04c.06-.01.37.07.42.08l2,.04c.1-.03.44-.12.58-.08.19.05.59.16.87.08v-.04h1c.25-.07.66.03.92-.04v-.04h.33v.04h.33v.04l.25.04.12.17h.04c.06.09.04.24.04.37-.08.07-.03.1-.08.17l-.29.25-.04.08-.25.08v.04h-.12c-.46.18-1.33.13-1.46.62-.2.18-.12.79-.12,1.17l-.04,2.96v2.21c.07.27.04.71.04,1.04l.04,1.29v2.46h.04v1h.04v.62c0,.5.03,1.11-.04,1.54v1.12c0,1.11,0,2.29.75,2.62.54.24,1.49-.03,2.17.08.45.07,1.07.04,1.58.04.29,0,.66.02.88-.04l.54-.04v-.04h.17v-.04h.12v-.04h.12v-.04h.08v-.04h.12v-.04l.17-.04v-.04h.08l.04-.08.17-.04.04-.08h.08l.08-.12h.08l.08-.12h.08l.17-.21h.08l.17-.21h.08l.29-.33.12-.08v-.08l.5-.46c.36-.36.58-.74,1.29-.75.14.15.28.07.29.37.12.13-.04.59-.08.71l-.04.29h-.04v.12h-.04v.12h-.04v.12h-.04v.12h-.04l-.04.25h-.04v.08h-.04l-.04.25h-.04v.08h-.04l-.08.42-.42.92-.08.04v.08l-.29.25-.04.08-.25.08v.04h-.12v.04l-.96-.04v.04c-.47.13-1.01.04-1.58.04-1.19-.04-2.39-.08-3.58-.12v-.04h-1.46v.04c-.23.06-.59-.01-.79.04h-.75v.04h-1c-.06.02.02.03-.04.04h-1v.04c-.23.06-.84-.04-1-.08h-.33v-.04h-.33c-.32-.09-.72-.16-.87-.42-.09-.08-.09-.24-.08-.42.07-.05.14-.15.17-.25Z"})]});function J0(){const e=r.useRef(),o=C(),l=U(),a=n0();return r.useCallback((d,h)=>{const c=d.split("#")[1];document.getElementById(c).scrollIntoView({behavior:a?"auto":"smooth"});const u=()=>{clearTimeout(e.current),e.current=setTimeout(()=>{window.removeEventListener("scroll",u),window.location.pathname===o.pathname&&(h==null||h(),l(`${o.pathname}#${c}`,{scroll:!1}))},50)};return window.addEventListener("scroll",u),()=>{window.removeEventListener("scroll",u),clearTimeout(e.current)}},[l,a,o.pathname])}const q0="_toggle_c9w0l_2",D0="_inner_c9w0l_17",U0="_icon_c9w0l_25",b={toggle:q0,inner:D0,icon:U0},V0=({menuOpen:e,...o})=>t.jsx(o0,{iconOnly:!0,className:b.toggle,"aria-label":"Menu","aria-expanded":e,...o,children:t.jsxs("div",{className:b.inner,children:[t.jsx(w,{className:b.icon,"data-menu":!0,"data-open":e,icon:"menu"}),t.jsx(w,{className:b.icon,"data-close":!0,"data-open":e,icon:"close"})]})}),A=[{label:"Home",pathname:"/#home"},{label:"Projects",pathname:"/#projects"},{label:"Ledger",pathname:"https://ledger.StephenJLu.com"},{label:"About",pathname:"/#about"},{label:"Contact",pathname:"/contact"}],Q0=[{label:"Bluesky",url:`https://bsky.app/profile/${k.bluesky}`,icon:"bluesky"},{label:"LinkedIn",url:`https://www.linkedin.com/in/${k.linkedin}`,icon:"linkedin"},{label:"Github",url:`https://github.com/${k.github}`,icon:"github"}],Y0="_menuBarContainer_1wkue_3",Z0="_menuBarList_1wkue_29",K0="_menuButton_1wkue_39",tt="_active_1wkue_39",et="_bounce_1wkue_1",nt="_navbar_1wkue_72",ot="_logo_1wkue_97",lt="_nav_1wkue_72",at="_navIcons_1wkue_115",st="_navIconLink_1wkue_140",ht="_navIcon_1wkue_115",rt="_mobileNav_1wkue_161",ct="_mobileNavLink_1wkue_191",f={menuBarContainer:Y0,menuBarList:Z0,menuButton:K0,active:tt,bounce:et,navbar:nt,logo:ot,nav:lt,navIcons:at,navIconLink:st,navIcon:ht,mobileNav:rt,mobileNavLink:ct},vt=()=>{const[e,o]=r.useState(),[l,a]=r.useState(),[v,d]=r.useState(!1),[h,c]=r.useState(),i=C(),u=r.useRef(),y=J0(),O=j.dark.background;r.useEffect(()=>{a(`${i.pathname}${i.hash}`)},[i]),r.useEffect(()=>{!h||i.pathname!=="/"||(a(`${i.pathname}${h}`),y(h,()=>c(null)))},[i.pathname,y,h]);const $=(s="")=>{const p=l!=null&&l.endsWith("/")?l==null?void 0:l.slice(0,-1):l;return s===p?"page":""},z=(s,p)=>{const m=s.currentTarget.href.split("#")[1];c(null),o(p.label),m&&i.pathname==="/"&&(c(`#${m}`),s.preventDefault())},I=(s,p)=>{z(s,p),v&&d(!1)};return t.jsxs("header",{className:f.navbar,ref:u,"data-theme":"dark",children:[t.jsx(L,{unstable_viewTransition:!0,prefetch:"intent",to:i.pathname==="/"?"/#home":"/","data-navbar-item":!0,className:f.logo,"aria-label":`${k.name}, ${k.role}`,onClick:s=>I(s,{label:"Home",pathname:"/"}),children:t.jsx(P0,{})}),t.jsx(V0,{onClick:()=>d(!v),menuOpen:v}),t.jsxs("nav",{className:f.nav,children:[t.jsx("div",{className:f.menuBarContainer,style:{backgroundColor:O},children:t.jsx("ul",{className:f.menuBarList,children:A.map((s,p)=>t.jsx("li",{children:t.jsx(L,{unstable_viewTransition:!0,prefetch:"intent",to:s.pathname,"data-navbar-item":!0,className:f.navLink,"aria-current":$(s.pathname),onClick:m=>z(m,s),children:t.jsx(d0,{item:s,isActive:e===s.label,onClick:()=>o(s.label)})},s.label)},p))})}),t.jsx(G,{desktop:!0})]}),t.jsx(l0,{unmount:!0,in:v,timeout:H(_.base.durationL),children:({visible:s,nodeRef:p})=>t.jsxs("nav",{className:f.mobileNav,"data-visible":s,ref:p,children:[A.map((m,X)=>t.jsx(L,{unstable_viewTransition:!0,prefetch:"intent",to:m.pathname,className:f.mobileNavLink,"data-visible":s,"aria-current":$(m.pathname),onClick:F=>I(F,m),style:t0({transitionDelay:e0(Number(H(_.base.durationS))+X*50)}),children:m.label},m.label)),t.jsx(G,{})]})})]})},G=({desktop:e})=>t.jsx("div",{className:f.navIcons,children:Q0.map(({label:o,url:l,icon:a})=>t.jsx("a",{"data-navbar-item":e||void 0,className:f.navIconLink,"aria-label":o,href:l,target:"_blank",rel:"noopener noreferrer",children:t.jsx(w,{className:f.navIcon,icon:a})},o))}),it="_footer_lr3zr_4",ft="_footerContent_lr3zr_28",g={footer:it,footerContent:ft},ut=k.delay,mt=()=>t.jsxs("div",{"data-theme":"dark",children:[t.jsx(a0,{children:e=>t.jsx("div",{className:g.footer,children:e&&t.jsx("div",{className:g.footerContent,children:t.jsx("span",{className:g.date,children:t.jsx(v0,{typeText:`© ${new Date().getFullYear()} ${k.name}. All rights reserved.`,delay:ut})})})})}),t.jsx("div",{className:g.footer,children:t.jsxs("p",{children:["Hand-crafted design by ",t.jsx("a",{href:"humans.txt",children:"humans"}),"."]})})]}),dt="_container_2gyay_2",pt="_skip_2gyay_12",kt={container:dt,skip:pt};const St=()=>[{rel:"preload",href:R,as:"font",type:"font/woff2",crossOrigin:""},{rel:"preload",href:W,as:"font",type:"font/ttf",crossOrigin:""},{rel:"manifest",href:"/manifest.json"},{rel:"icon",href:"/favicon.ico"},{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"},{rel:"shortcut_icon",href:"/shortcut.png",type:"image/png",sizes:"64x64"},{rel:"apple-touch-icon",href:"/icon-256.png",sizes:"256x256"},{rel:"author",href:"/humans.txt",type:"text/plain"}];function _t(){const e="dark";return r.useEffect(()=>{console.info(`${k.ascii}
`,`Taking a peek huh? Check out the source code: ${k.repo}

`)},[]),t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("title",{children:"Stephen J. Lu | Web Design and Development for the Public Good"}),t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx("meta",{name:"theme-color",content:"#000"}),t.jsx("meta",{name:"color-scheme",content:"dark"}),t.jsx("style",{dangerouslySetInnerHTML:{__html:O0}}),t.jsx(V,{}),t.jsx(Q,{})]}),t.jsxs("body",{children:[t.jsx(r0,{}),t.jsxs(N0,{theme:e,className:"",children:[t.jsx(vt,{}),t.jsxs("main",{id:"main-content",className:kt.container,tabIndex:-1,children:[t.jsx(Y,{}),t.jsx(mt,{})]})]}),t.jsx(s0,{}),t.jsx(Z,{})]})]})}export{_t as default,St as links};
