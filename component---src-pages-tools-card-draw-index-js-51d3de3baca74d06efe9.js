(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{CJNR:function(e,t,n){"use strict";var r=n("vOnD"),a=n("xdbU"),o=n("vvhN"),c=r.c.button.withConfig({displayName:"Button",componentId:"ekqulj-0"})([""," padding:0.25em 0.75em;font-weight:600;background:",";color:white;border-radius:3px;cursor:pointer;outline:none;&:hover{background:",";}"],a.b,o.d,o.c);t.a=c},Vvj1:function(e,t,n){e.exports=n.p+"static/svg-cards-ee03ae14955f0b10b6c060a800ccb08d.svg"},kA5P:function(e,t,n){"use strict";n.r(t),n.d(t,"frontmatter",(function(){return O}));var r=n("q1tI"),a=n.n(r),o=n("PblB"),c=(n("rvZc"),n("pIFo"),n("YS3K")),i=n("vOnD"),l=n("CJNR"),f=(n("f3/d"),n("a1Th"),n("Btvt"),n("XfO3"),n("HEwt"),n("rGqo"),n("rE2o"),n("ioFf"),n("rpcZ")),u=n.n(f),d=n("ucyK");function s(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=["1","2","3","4","5","6","7","8","9","10","jack","queen","king"],h=function(e){return p.map((function(t){return e+"_"+t}))},b=[].concat(s(h("diamond")),s(h("spade")),s(h("heart")),s(h("club"))),w=function(){var e=Object(r.useState)(),t=(e[0],e[1],Object(r.useState)([])),n=t[0],a=t[1],o=Object(r.useState)([]),c=o[0],i=o[1],l=Object(r.useState)("#000000"),f=l[0],m=l[1];return[n,c,f,function(){var e=n.shift();e&&(a(s(n)),i([].concat(s(c),[e])))},function(e){console.log("SHUFFLING",e),i([]),a(function(e){for(var t=u()(e),n=[],r=s(b);r.length;){var a=Math.floor(t()*r.length),o=r.splice(a,1);n=[].concat(s(n),s(o))}if(e.endsWith("_joker")){var c=n.length-Math.floor(10*t());n.splice(c,0,"joker_red")}return n}(e)),m(function(e){var t=u()(e);return d.a[Math.floor(t()*d.a.length)]}(e))}]},y=n("Vvj1"),g=i.c.div.withConfig({displayName:"CardDraw__DrawButtonsContainer",componentId:"sc-2lte6y-0"})(["display:flex;justify-content:space-between;margin-bottom:1rem;"]),v=i.c.span.withConfig({displayName:"CardDraw__Seed",componentId:"sc-2lte6y-1"})(["margin-left:1rem;color:grey;strong{font-weight:bold;}"]),C=i.c.div.withConfig({displayName:"CardDraw__DrawDeckContainer",componentId:"sc-2lte6y-2"})(["display:flex;justify-content:space-between;margin-bottom:1rem;"]),j=i.c.div.withConfig({displayName:"CardDraw__DrawDeck",componentId:"sc-2lte6y-3"})(["display:flex;&.empty{opacity:0.2;}"]),E=i.c.div.withConfig({displayName:"CardDraw__DrawCard",componentId:"sc-2lte6y-4"})(["display:flex;"]),k=i.c.ul.withConfig({displayName:"CardDraw__DrawHistoryList",componentId:"sc-2lte6y-5"})(["display:flex;flex-wrap:wrap;width:700px;"]),x=i.c.li.withConfig({displayName:"CardDraw__DrawHistoryCard",componentId:"sc-2lte6y-6"})(["margin:0.1rem;opacity:0.2;&.active{opacity:1;}"]),D="abcdefghijklmnopqrstuvwxyz",S=function(e){void 0===e&&(e="");for(var t="";t.length<6;)t+=D[Math.floor(Math.random()*D.length)];return""+t+e},_=function(e){var t,n=Object(r.useState)((t=window.document.location.hash)&&t.replace("#","")||S()),o=n[0],i=n[1],f=w(),u=f[0],d=f[1],s=f[2],m=f[3],p=f[4];return Object(r.useEffect)((function(){p(o),window.document.location.hash=o}),[o]),a.a.createElement("div",null,a.a.createElement(g,null,a.a.createElement("div",null,a.a.createElement(l.a,{onClick:function(){i(S(o.endsWith("_joker")?"_joker":""))}},"Shuffle"),a.a.createElement(v,null,"Seed: ",a.a.createElement("strong",null,o))),a.a.createElement(l.a,{onClick:m},"Draw")),a.a.createElement(C,null,a.a.createElement(j,{className:0===u.length?"empty":null},a.a.createElement("svg",{width:169,height:244},a.a.createElement("use",{xlinkHref:y+"#back",x:"0",y:"0",fill:s}),"}")),a.a.createElement(E,null,Object(c.last)(d)&&a.a.createElement("svg",{width:169,height:244},a.a.createElement("use",{xlinkHref:y+"#"+Object(c.last)(d),x:"0",y:"0"})))),a.a.createElement("div",null,a.a.createElement(k,null,b.map((function(e){return a.a.createElement(x,{key:e,className:d.indexOf(e)>-1?"active":null},a.a.createElement("svg",{width:"3rem",height:"3.5rem",viewBox:"0 0 169 244"},a.a.createElement("use",{xlinkHref:y+"#"+e,x:"0",y:"0"})))})))))},O={title:"Card draw",path:"/tools/card-draw",date:"2020-04-25",description:"Draw from a deck of playing cards, with a seeded randomiser"};t.default=function(){return a.a.createElement(o.a,{data:O},a.a.createElement(_,null))}},rpcZ:function(e,t,n){"use strict";(function(t){n("NO8f");var r=[],a=void 0===t?window:t,o=Math.pow(256,6),c=Math.pow(2,52),i=2*c,l=Math.random;function f(e){var t,n=e.length,r=this,a=0,o=r.i=r.j=0,c=r.S=[];for(n||(e=[n++]);a<256;)c[a]=a++;for(a=0;a<256;a++)c[a]=c[o=255&o+e[a%n]+(t=c[a])],c[o]=t;(r.g=function(e){for(var t,n=0,a=r.i,o=r.j,c=r.S;e--;)t=c[a=255&a+1],n=256*n+c[255&(c[a]=c[o=255&o+t])+(c[o]=t)];return r.i=a,r.j=o,n})(256)}function u(e,t){var n,r=[],a=(typeof e)[0];if(t&&"o"==a)for(n in e)try{r.push(u(e[n],t-1))}catch(o){}return r.length?r:"s"==a?e:e+"\0"}function d(e,t){for(var n,r=e+"",a=0;a<r.length;)t[255&a]=255&(n^=19*t[255&a])+r.charCodeAt(a++);return m(t)}function s(e){try{return a.crypto.getRandomValues(e=new Uint8Array(256)),m(e)}catch(t){return[+new Date,a,a.navigator&&a.navigator.plugins,a.screen,m(r)]}}function m(e){return String.fromCharCode.apply(0,e)}e.exports=function(t,n){if(n&&!0===n.global)return n.global=!1,Math.random=e.exports(t,n),n.global=!0,Math.random;var a=n&&n.entropy||!1,l=[],p=(d(u(a?[t,m(r)]:0 in arguments?t:s(),3),l),new f(l));return d(m(p.S),r),function(){for(var e=p.g(6),t=o,n=0;e<c;)e=256*(e+n),t*=256,n=p.g(1);for(;e>=i;)e/=2,t/=2,n>>>=1;return(e+n)/t}},e.exports.resetGlobal=function(){Math.random=l},d(Math.random(),r)}).call(this,n("yLpj"))},ucyK:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=["#ffffff","#f6f6f6","#e4e4e4","#b6b6b6","#929292","#686868","#454545","#393939"],a=["#fbd1bf","#cb977f","#db6f56","#f0d0c8","#c19877","#956d4d","#633728","#5b3735","#eb9840","#e2deb5","#f7e1e1","#7e675f","#eee476","#87db73","#90daef","#d37b2d","#f7738c","#e24261","#b582d6","#bab163","#a8d676","#698b98","#58666b","#66586b","#e4e4e4","#b6b6b6","#929292","#686868","#454545","#393939","#5ff892","#5ec9c5","#fcc919","#30a4ee","#d651ee","#fa427a","#6554ce","#433b73","#683b73","#183f3a","#3e593e","#c3e0c1"]}}]);
//# sourceMappingURL=component---src-pages-tools-card-draw-index-js-51d3de3baca74d06efe9.js.map