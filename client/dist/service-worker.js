if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const l=e=>n(e,r),c={module:{uri:r},exports:t,require:l};i[r]=Promise.all(s.map((e=>c[e]||l(e)))).then((e=>(o(...e),t)))}}define(["./workbox-f2a038d9"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"a14cb28de973786b0e8469f8b342e370"},{url:"install.bundle.js",revision:"1dfa84824b530b3687f70520b9636b1b"},{url:"main.bundle.js",revision:"f2e2e26f72422068ad1f10c65ba95a55"},{url:"src-sw.js",revision:"3482864ab97cc8cd65ed9318f822a2fd"}],{}),e.registerRoute(/^https:\/\/jsonplaceholder\.typicode\.com/,new e.StaleWhileRevalidate,"GET")}));
