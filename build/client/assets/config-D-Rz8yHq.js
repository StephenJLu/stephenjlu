import{j as i}from"./components-BRXnhjxE.js";const T={desktop:2080,laptop:1680,tablet:1040,mobile:696,mobileS:400},l=t=>`${t}px`,w=t=>`${t/16}rem`,J=t=>Number(t.replace("ms","")),u=t=>`${t}ms`;function L(t,o={}){let s={};const _=Object.keys(t);for(const n of _){let e=t[n];typeof e=="number"&&n==="delay"&&(e=u(e)),typeof e=="number"&&n!=="opacity"&&(e=l(e)),typeof e=="number"&&n==="opacity"&&(e=`${e*100}%`),s[`--${n}`]=e}return{...s,...o}}function p(...t){return t.filter(Boolean).join(" ")}const r="_text_w1gy9_3",m={text:r},$=({children:t,size:o="m",as:s="span",align:_="auto",weight:n="auto",secondary:e,className:a,...c})=>i.jsx(s,{className:p(m.text,a),"data-align":_,"data-size":o,"data-weight":n,"data-secondary":e,...c,children:t}),h="Stephen J. Lu",b="Stephen J. Lu | Web Design and Development for the Public Good",d=["Author of CSI to CEO","Web Design and Development","for the Public Good","EMBA | SHRM-CP | Phi Beta Kappa"],y="https://www.stephenjlu.com",f="stephenjlu.com",g="StephenJLu",x="StephenJLu",j="https://github.com/StephenJLu/Stephenjlu/",S=` _________________       
(  ____ \\__    _( \\      
| (    \\/  )  ( | (      
| (_____   |  | | |      
(_____  )  |  | | |      
      ) |  |  | | |      
/\\____) |\\_)  ) | (____/\\
\\_______(____/  (_______/
`,k=500,v="https://legacy.stephenjlu.com/images/steve.jpg",D={name:h,title:b,roles:d,url:y,bluesky:f,linkedin:g,github:x,repo:j,ascii:S,delay:k,avatar:v};export{$ as T,L as a,D as b,p as c,J as d,T as m,u as n,w as p};
