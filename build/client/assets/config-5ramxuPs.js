import{j as i}from"./components-BRXnhjxE.js";const T={desktop:2080,laptop:1680,tablet:1040,mobile:696,mobileS:400},l=t=>`${t}px`,J=t=>`${t/16}rem`,L=t=>Number(t.replace("ms","")),u=t=>`${t}ms`;function $(t,o={}){let s={};const _=Object.keys(t);for(const n of _){let e=t[n];typeof e=="number"&&n==="delay"&&(e=u(e)),typeof e=="number"&&n!=="opacity"&&(e=l(e)),typeof e=="number"&&n==="opacity"&&(e=`${e*100}%`),s[`--${n}`]=e}return{...s,...o}}function p(...t){return t.filter(Boolean).join(" ")}const m="_text_13dm1_2",r={text:m},w=({children:t,size:o="m",as:s="span",align:_="auto",weight:n="auto",secondary:e,className:a,...c})=>i.jsx(s,{className:p(r.text,a),"data-align":_,"data-size":o,"data-weight":n,"data-secondary":e,...c,children:t}),h="Stephen J. Lu",b="Stephen J. Lu | Web Design and Development for the Public Good",d=["Author of CSI to CEO","Web Design and Development","for the Public Good","EMBA | SHRM-CP | Phi Beta Kappa"],f="https://www.stephenjlu.com",y="stephenjlu.com",x="StephenJLu",g="StephenJLu",j="https://github.com/StephenJLu/Stephenjlu/",S=` _________________       
(  ____ \\__    _( \\      
| (    \\/  )  ( | (      
| (_____   |  | | |      
(_____  )  |  | | |      
      ) |  |  | | |      
/\\____) |\\_)  ) | (____/\\
\\_______(____/  (_______/
`,k=500,v="https://legacy.stephenjlu.com/images/steve.jpg",D={name:h,title:b,roles:d,url:f,bluesky:y,linkedin:x,github:g,repo:j,ascii:S,delay:k,avatar:v};export{w as T,D as a,L as b,p as c,$ as d,T as m,u as n,J as p};
