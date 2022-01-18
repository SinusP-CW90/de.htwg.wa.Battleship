(()=>{"use strict";var e={8495:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(463),o=r(7615),a=r(5703),i=r(3673);const s=(0,i.aZ)({name:"AppWrapper",setup(e){return(0,i.bv)((()=>{const{proxy:{$q:e}}=(0,i.FN)();void 0!==e.onSSRHydrated&&e.onSSRHydrated()})),()=>(0,i.h)(o.Z,e)}});async function d(e,t,r){const o="function"===typeof a.Z?await(0,a.Z)({ssrContext:r}):a.Z,i=e(s);return i.use(n.Z,t,r),{app:i,router:o}}},4374:(e,t,r)=>{var n=r(8880),o=r(8495),a=r(2624);async function i({app:e,router:t}){e.use(t),t.isReady().then((()=>{e.mount("#q-app")}))}(0,o.Z)(n.vr,a.Z).then(i)},2624:(e,t,r)=>{r.d(t,{Z:()=>n});const n={config:{}}},9635:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(3673);const o=(0,n.aZ)({name:"App"})},5623:(e,t,r)=>{r.d(t,{s:()=>o});var n=r(3673);function o(e,t,r,o,a,i){const s=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(s)}},5703:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(4447),o=r(9582),a=r(3593);const i=(0,n.BC)((function(){const e=o.PO,t=(0,o.p7)({scrollBehavior:()=>({left:0,top:0}),routes:a.Z,history:e(void 0)});return t}))},3593:(e,t,r)=>{r.d(t,{Z:()=>o});r(71);const n=[{path:"/",component:()=>Promise.all([r.e(736),r.e(754)]).then(r.bind(r,2754)),children:[{path:"index",component:()=>Promise.all([r.e(736),r.e(392)]).then(r.bind(r,1392))},{path:"/aboutTheGame",component:()=>Promise.all([r.e(736),r.e(350)]).then(r.bind(r,4350))},{path:"",component:()=>Promise.all([r.e(736),r.e(253)]).then(r.bind(r,1253))},{path:"/page4",component:()=>Promise.all([r.e(736),r.e(597)]).then(r.bind(r,4597))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(597)]).then(r.bind(r,4597))}],o=n},7615:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(5623),o=r(7558),a=r(4260);const i=(0,a.Z)(o.Z,[["render",n.s]]),s=i},7558:(e,t,r)=>{r.d(t,{Z:()=>n.Z});var n=r(9635)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],s=!0,d=0;d<n.length;d++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[d])))?n.splice(d--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{253:"3646ceb7",350:"089345af",392:"1fd2b005",597:"5da5795b",754:"e990a31a"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"31d6cfe0",253:"cf21a494",350:"e5c92104",392:"a0a0837c",736:"397fd686",754:"5548f8c1"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="battleship:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var s,d;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var p=l[u];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==t+a){s=p;break}}s||(d=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[o];var c=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(c.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=c.bind(null,s.onerror),s.onload=c.bind(null,s.onload),d&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=s,o.parentNode.removeChild(o),n(d)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),s=r.p+i;if(t(i,s))return o();e(n,s,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={253:1,350:1,392:1,754:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),s=new Error,d=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,d,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,s,d]=n,l=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(d)var u=d(r)}for(t&&t(n);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self["webpackChunkbattleship"]=self["webpackChunkbattleship"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(4374)));n=r.O(n)})();