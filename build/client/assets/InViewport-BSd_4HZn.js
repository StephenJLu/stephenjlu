import{r as d,v}from"./components-BRXnhjxE.js";const R=typeof document<"u",q=R?d.useLayoutEffect:d.useEffect;class w{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const r=this.order.indexOf(e);r!==-1&&(this.order.splice(r,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function F(t){let e=new w,r=new w,o=0,s=!1,c=!1;const i=new WeakSet,l={schedule:(u,f=!1,h=!1)=>{const n=h&&s,a=n?e:r;return f&&i.add(u),a.add(u)&&n&&s&&(o=e.order.length),u},cancel:u=>{r.remove(u),i.delete(u)},process:u=>{if(s){c=!0;return}if(s=!0,[e,r]=[r,e],r.clear(),o=e.order.length,o)for(let f=0;f<o;f++){const h=e.order[f];i.has(h)&&(l.schedule(h),t()),h(u)}s=!1,c&&(c=!1,l.process(u))}};return l}const m=["prepare","read","update","preRender","render","postRender"],P=40;function S(t,e){let r=!1,o=!0;const s={delta:0,timestamp:0,isProcessing:!1},c=m.reduce((n,a)=>(n[a]=F(()=>r=!0),n),{}),i=n=>{c[n].process(s)},l=()=>{const n=performance.now();r=!1,s.delta=o?1e3/60:Math.max(Math.min(n-s.timestamp,P),1),s.timestamp=n,s.isProcessing=!0,m.forEach(i),s.isProcessing=!1,r&&e&&(o=!1,t(l))},u=()=>{r=!0,o=!0,s.isProcessing||t(l)};return{schedule:m.reduce((n,a)=>{const E=c[a];return n[a]=(g,x=!1,I=!1)=>(r||u(),E.schedule(g,x,I)),n},{}),cancel:n=>m.forEach(a=>c[a].cancel(n)),state:s,steps:c}}function A(t){const e=d.useRef(null);return e.current===null&&(e.current=t()),e.current}const y=t=>t,{schedule:O,cancel:B,state:C,steps:Q}=S(typeof requestAnimationFrame<"u"?requestAnimationFrame:y,!0),p={current:null},M={current:!1};function L(){if(M.current=!0,!!R)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>p.current=t.matches;t.addListener(e),e()}else p.current=!1}function T(){!M.current&&L();const[t]=d.useState(p.current);return t}const V=({children:t})=>{const[e,r]=d.useState(!1),o=d.useRef(null);d.useEffect(()=>{const c=new IntersectionObserver(([i])=>{r(i.isIntersecting)},{root:null,rootMargin:"0px",threshold:.1});return o.current&&c.observe(o.current),()=>{o.current&&c.unobserve(o.current)}},[]);const s=t(e);return v.cloneElement(s,{ref:o})},D=V;export{D as I,A as a,T as b,C as c,B as d,O as f,y as n,q as u};