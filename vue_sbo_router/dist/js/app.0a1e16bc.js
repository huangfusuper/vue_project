(function(e){function t(t){for(var r,a,c=t[0],i=t[1],l=t[2],f=0,d=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(d.length)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},u=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c9395":"dcc85677","chunk-2d0d5c8f":"aaa78d69","chunk-2d0de531":"8762c63b"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=a(e);var l=new Error;u=function(t){i.onerror=i.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",l.name="ChunkLoadError",l.type=r,l.request=u,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var s=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-link",{attrs:{to:"/home"}},[e._v("首页")]),n("router-link",{attrs:{to:"/about"}},[e._v("关于")]),n("router-link",{attrs:{to:"/user/"+e.name}},[e._v("用户")]),n("router-view")],1)},u=[],a={name:"App",data:function(){return{name:"huangfu"}},methods:{homeClick:function(){this.$router.push("/home")},aboutClick:function(){this.$router.push("/about")}}},c=a,i=(n("de60"),n("2877")),l=Object(i["a"])(c,o,u,!1,null,"450c5c88",null),f=l.exports,s=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(s["a"]);var d=[{path:"",redirect:"/home"},{path:"/home",component:function(){return n.e("chunk-2d0c9395").then(n.bind(null,"57da"))}},{path:"/about",component:function(){return n.e("chunk-2d0de531").then(n.bind(null,"84ba"))}},{path:"/user/:userId",component:function(){return n.e("chunk-2d0d5c8f").then(n.bind(null,"7088"))}}],p=new s["a"]({routes:d,mode:"history"}),h=p;r["a"].config.productionTip=!1,new r["a"]({router:h,render:function(e){return e(f)}}).$mount("#app")},"956f":function(e,t,n){},de60:function(e,t,n){"use strict";n("956f")}});
//# sourceMappingURL=app.0a1e16bc.js.map