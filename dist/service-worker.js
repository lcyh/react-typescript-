if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,c,i)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const t={uri:location.origin+r.slice(1)};return Promise.all(c.map(r=>{switch(r){case"exports":return s;case"module":return t;default:return e(r)}})).then(e=>{const r=i(...e);return s.default||(s.default=r),s})}))}}define("./service-worker.js",["./workbox-ff1480dc"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./dll/react_0e1cbca0.dll.js",revision:"f9f43f4cff018c14d200a2d3cda3ea83"},{url:"./index.html",revision:"0e504469981690c71fba7915fdad5947"},{url:"./static/css/main.f7ff4a2a.css",revision:"49ba3449c24939b6861d2670167230cb"},{url:"./static/js/main.ee95c66a.js",revision:"43a6c2bba6cec9019f6fce9dd08bae95"},{url:"./static/js/vendor.ee95c66a.js",revision:"454174aca0e1256a9af77c5fbf1f7440"},{url:"./static/js/vendors~main.ee95c66a.js",revision:"862079d7229b1c94b11aca8481d31c38"},{url:"./static/js/vendors~vendor.ee95c66a.js",revision:"01e3e708450842801dea17ad0002a2d2"},{url:"./static/js/vendors~vendor.ee95c66a.js.LICENSE.txt",revision:"7ec01595672f75e83fd81b41f132f4c1"}],{})}));
//# sourceMappingURL=service-worker.js.map