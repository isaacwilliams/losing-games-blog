(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{CJNR:function(e,t,n){"use strict";var r=n("vOnD"),a=n("xdbU"),o=n("vvhN"),i=r.c.button.withConfig({displayName:"Button",componentId:"ekqulj-0"})([""," padding:0.25em 0.75em;font-weight:600;background:",";color:white;border-radius:3px;cursor:pointer;outline:none;&:hover{background:",";}"],a.b,o.d,o.c);t.a=i},Vvj1:function(e,t,n){e.exports=n.p+"static/svg-cards-ee03ae14955f0b10b6c060a800ccb08d.svg"},kA5P:function(e,t,n){"use strict";n.r(t),n.d(t,"frontmatter",(function(){return q}));var r=n("q1tI"),a=n.n(r),o=n("PblB"),i=(n("f3/d"),n("YS3K")),c=(n("LvDl"),n("vOnD")),d=n("CJNR"),l=(n("a1Th"),n("Btvt"),n("XfO3"),n("HEwt"),n("rGqo"),n("rE2o"),n("ioFf"),n("rpcZ")),u=n.n(l),f=n("ucyK");function s(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=[{id:"standard",name:"Standard"},{id:"standard-jokers",name:"Standard (including Jokers)"},{id:"a-year-in",name:"A Year In... (10 cards discarded)"},{id:"quiet-year",name:"The Quiet Year (ordered suites)"},{id:"quiet-year-short",name:"The Quiet Year (short game)"}],h=["1","2","3","4","5","6","7","8","9","10","jack","queen","king"],b=function(e){return h.map((function(t){return e+"_"+t}))},y=[].concat(s(b("diamond")),s(b("spade")),s(b("heart")),s(b("club"))),g=function(e,t){for(var n=[],r=t;r.length;){var a=Math.floor(e()*r.length),o=r.splice(a,1);n=[].concat(s(n),s(o))}return n},w=function(e,t){var n=u()(e);switch(t){case"standard-jokers":return function(e){return g(e,[].concat(s(y),["joker_black","joker_red"]))}(n);case"a-year-in":return function(e){return Object(i.drop)(10,g(e,s(y)))}(n);case"quiet-year":return function(e){return[].concat(s(g(e,b("heart"))),s(g(e,b("diamond"))),s(g(e,b("club"))),s(g(e,b("spade"))))}(n);case"quiet-year-short":return function(e){for(var t=Object(i.drop)(4,g(e,b("heart"))),n=Object(i.drop)(3,g(e,b("diamond")).filter((function(e){return"diamond_king"!==e}))),r=Object(i.drop)(4,g(e,b("club"))),a=Object(i.drop)(4,g(e,b("spade")));-1===a.indexOf("spade_king");)a=Object(i.drop)(4,g(e,b("spade")));return[].concat(s(t),s(n),s(r),s(a))}(n);case"standard":default:return function(e){return g(e,s(y))}(n)}},v=function(){var e=Object(r.useState)(),t=(e[0],e[1],Object(r.useState)([])),n=t[0],a=t[1],o=Object(r.useState)([]),i=o[0],c=o[1],d=Object(r.useState)("#000000"),l=d[0],m=d[1];return[n,i,l,function(){var e=n.shift();e&&(a(s(n)),c([].concat(s(i),[e])))},function(e,t){console.log("SHUFFLING",e),c([]),a(w(e,t)),m(function(e,t){var n=u()(""+e+t);return f.a[Math.floor(n()*f.a.length)]}(e,t))}]},j=(n("SRfc"),"abcdefghijklmnopqrstuvwxyz"),C=function(e){for(var t="";t.length<6;)t+=j[Math.floor(Math.random()*j.length)];return""+t},E=n("Vvj1"),k=c.c.div.withConfig({displayName:"CardDraw__DrawButtonsContainer",componentId:"sc-2lte6y-0"})(["display:flex;justify-content:space-between;margin-bottom:1rem;"]),x=c.c.div.withConfig({displayName:"CardDraw__ShuffuleUtils",componentId:"sc-2lte6y-1"})(["color:grey;font-size:0.9rem;strong{font-weight:bold;}"]),O=c.c.span.withConfig({displayName:"CardDraw__ShuffleInput",componentId:"sc-2lte6y-2"})(["margin-left:0.5rem;margin-right:0.5rem;"]),S=c.c.div.withConfig({displayName:"CardDraw__DrawDeckContainer",componentId:"sc-2lte6y-3"})(["display:flex;justify-content:space-between;margin-bottom:1rem;"]),D=c.c.div.withConfig({displayName:"CardDraw__DrawDeck",componentId:"sc-2lte6y-4"})(["position:relative;display:flex;&.empty{svg{opacity:0.2;}}"]),_=c.c.div.withConfig({displayName:"CardDraw__CardCountOverlay",componentId:"sc-2lte6y-5"})(["position:absolute;display:flex;align-items:center;justify-content:center;top:0;left:0;right:0;bottom:0;div{background:white;border-radius:0.3rem;padding:0.5rem;box-shadow:0 1px 2px rgba(0,0,0,0.5);}"]),I=c.c.div.withConfig({displayName:"CardDraw__DrawCard",componentId:"sc-2lte6y-6"})(["display:flex;"]),N=c.c.ul.withConfig({displayName:"CardDraw__DrawHistoryList",componentId:"sc-2lte6y-7"})(["display:flex;flex-wrap:wrap;width:700px;"]),M=c.c.li.withConfig({displayName:"CardDraw__DrawHistoryCard",componentId:"sc-2lte6y-8"})(["margin:0.1rem;opacity:0.2;&.active{opacity:1;}"]),A=function(e){var t=Object(r.useState)(function(){if("undefined"!=typeof window){var e=window.document.location.hash.match(/seed=([^&]*)/);return Object(i.last)(e)}}()||C()),n=t[0],o=t[1],c=Object(r.useState)(function(){if("undefined"!=typeof window){var e=window.document.location.hash.match(/mode=([^&]*)/);return Object(i.last)(e)}}()||p[0].id),l=c[0],u=c[1];Object(r.useEffect)((function(){g(n,l),"undefined"!=typeof window&&(window.document.location.hash="seed="+n+"&mode="+l)}),[n,l]);var f=v(),s=f[0],m=f[1],h=f[2],b=f[3],g=f[4];return a.a.createElement("div",null,a.a.createElement(k,null,a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(d.a,{onClick:function(){return o(C())}},"Shuffle")),a.a.createElement(x,null,"Shuffle type:",a.a.createElement(O,null,a.a.createElement("select",{value:l,onChange:function(e){return u(e.target.value)}},p.map((function(e){var t=e.id,n=e.name;return a.a.createElement("option",{key:t,value:t},n)})))),"Seed:",a.a.createElement(O,null,a.a.createElement("input",{type:"text",value:n,onChange:function(e){return o(e.target.value)}})))),a.a.createElement(d.a,{onClick:b},"Draw")),a.a.createElement(S,null,a.a.createElement(D,{className:0===s.length?"empty":null},a.a.createElement("svg",{width:169,height:244},a.a.createElement("use",{xlinkHref:E+"#back",x:"0",y:"0",fill:h}),"}"),a.a.createElement(_,null,a.a.createElement("div",null,s.length," ",1===s.length?"card":"cards"))),a.a.createElement(I,null,Object(i.last)(m)&&a.a.createElement("svg",{width:169,height:244},a.a.createElement("use",{xlinkHref:E+"#"+Object(i.last)(m),x:"0",y:"0"})))),a.a.createElement("div",null,a.a.createElement(N,null,y.map((function(e){return a.a.createElement(M,{key:e,className:m.indexOf(e)>-1?"active":null},a.a.createElement("svg",{width:"3rem",height:"3.5rem",viewBox:"0 0 169 244"},a.a.createElement("use",{xlinkHref:E+"#"+e,x:"0",y:"0"})))})))))},q={title:"Card draw",path:"/tools/card-draw",date:"2020-04-25",description:"Draw from a deck of playing cards, with a seeded randomiser"};t.default=function(){return a.a.createElement(o.a,{data:q},a.a.createElement(A,null))}},rpcZ:function(e,t,n){"use strict";(function(t){n("NO8f");var r=[],a=void 0===t?window:t,o=Math.pow(256,6),i=Math.pow(2,52),c=2*i,d=Math.random;function l(e){var t,n=e.length,r=this,a=0,o=r.i=r.j=0,i=r.S=[];for(n||(e=[n++]);a<256;)i[a]=a++;for(a=0;a<256;a++)i[a]=i[o=255&o+e[a%n]+(t=i[a])],i[o]=t;(r.g=function(e){for(var t,n=0,a=r.i,o=r.j,i=r.S;e--;)t=i[a=255&a+1],n=256*n+i[255&(i[a]=i[o=255&o+t])+(i[o]=t)];return r.i=a,r.j=o,n})(256)}function u(e,t){var n,r=[],a=(typeof e)[0];if(t&&"o"==a)for(n in e)try{r.push(u(e[n],t-1))}catch(o){}return r.length?r:"s"==a?e:e+"\0"}function f(e,t){for(var n,r=e+"",a=0;a<r.length;)t[255&a]=255&(n^=19*t[255&a])+r.charCodeAt(a++);return m(t)}function s(e){try{return a.crypto.getRandomValues(e=new Uint8Array(256)),m(e)}catch(t){return[+new Date,a,a.navigator&&a.navigator.plugins,a.screen,m(r)]}}function m(e){return String.fromCharCode.apply(0,e)}e.exports=function(t,n){if(n&&!0===n.global)return n.global=!1,Math.random=e.exports(t,n),n.global=!0,Math.random;var a=n&&n.entropy||!1,d=[],p=(f(u(a?[t,m(r)]:0 in arguments?t:s(),3),d),new l(d));return f(m(p.S),r),function(){for(var e=p.g(6),t=o,n=0;e<i;)e=256*(e+n),t*=256,n=p.g(1);for(;e>=c;)e/=2,t/=2,n>>>=1;return(e+n)/t}},e.exports.resetGlobal=function(){Math.random=d},f(Math.random(),r)}).call(this,n("yLpj"))},ucyK:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=["#ffffff","#f6f6f6","#e4e4e4","#b6b6b6","#929292","#686868","#454545","#393939"],a=["#fbd1bf","#cb977f","#db6f56","#f0d0c8","#c19877","#956d4d","#633728","#5b3735","#eb9840","#e2deb5","#f7e1e1","#7e675f","#eee476","#87db73","#90daef","#d37b2d","#f7738c","#e24261","#b582d6","#bab163","#a8d676","#698b98","#58666b","#66586b","#e4e4e4","#b6b6b6","#929292","#686868","#454545","#393939","#5ff892","#5ec9c5","#fcc919","#30a4ee","#d651ee","#fa427a","#6554ce","#433b73","#683b73","#183f3a","#3e593e","#c3e0c1"]}}]);
//# sourceMappingURL=component---src-pages-tools-card-draw-index-js-47d97d66c753f9784315.js.map