(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"2dtT":function(e,n,t){"use strict";var r=t("oNNP"),l=t("Cjod"),o=t("RdQs");e.exports=function(e){var n=e||{},t=n.createElement,i=n.components||{};function a(e,n,l){var o=r(i,e)?i[e]:e;return t(o,n,l)}this.Compiler=function(e){return"root"===e.type&&(e=1===e.children.length&&"element"===e.children[0].type?e.children[0]:{type:"element",tagName:"div",properties:e.properties||{},children:e.children}),l(a,o(e),n.prefix)}}},"3hrv":function(e,n,t){"use strict";var r=t("vOnD"),l=t("fCkO"),o=t("wl2n");function i(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n        flex-direction: column;\n        padding-bottom: 1rem;\n\n        font-size: 2rem;\n\n        &:before {\n            margin-right: 0;\n            margin-bottom: 0.5em;\n        }\n\n        &:after {\n            margin-left: 0;\n            margin-top: 0.5em;\n        }\n    "]);return i=function(){return e},e}n.a=r.c.h1.withConfig({displayName:"PageTitle",componentId:"sc-1vk9no-0"})(["display:flex;align-items:center;justify-content:center;width:100%;"," text-align:center;font-weight:900;font-size:2.1rem;&:before,&:after{"," position:relative;display:inline-block;font-size:1rem;content:'✳︎ ✳︎ ✳︎';font-weight:400;white-space:nowrap;}&:before{margin-right:1em;}&:after{margin-left:1em;}",""],l.b,l.a,o.a.phone(i()))},"6GVF":function(e,n,t){"use strict";t.r(n),t.d(n,"pageQuery",(function(){return E}));var r=t("q1tI"),l=t.n(r),o=t("TJpk"),i=t.n(o),a=t("y7tD"),u=t("vOnD"),s=t("2dtT"),c=t.n(s),p=t("YS3K"),f=t("aTjO"),d=t("3hrv"),h=t("6qXI"),m=t("oNwT"),g=(t("Vd3H"),u.c.div.withConfig({displayName:"BlogPostTagsList__TagsContainer",componentId:"itfm6s-0"})(["display:flex;padding-top:4rem;font-size:0.9rem;"])),y=u.c.li.withConfig({displayName:"BlogPostTagsList__TagsLi",componentId:"itfm6s-1"})(["display:inline-block;margin-left:1rem;&:before{content:'⨳';margin-right:0.1rem;color:grey;}"]),v=Object(u.c)(f.a).withConfig({displayName:"BlogPostTagsList__StyledLink",componentId:"itfm6s-2"})(["color:grey;"]),b=function(e){var n=e.tags;return l.a.createElement(g,null,"Tags:",l.a.createElement("ul",null,n.sort().map((function(e){return l.a.createElement(y,{key:e},l.a.createElement(v,{tag:e}))}))))},x=t("CnBM"),w=t.n(x),k=w()({loader:function(){return t.e(20).then(t.bind(null,"/AUC"))},loading:function(){return null}}),S=w()({loader:function(){return Promise.all([t.e(3),t.e(19)]).then(t.bind(null,"T744"))},loading:function(){return l.a.createElement("div",null,"Loading...")}}),O=Object(p.get)(["frontmatter","image","childImageSharp","fluid","src"]),C=u.c.div.withConfig({displayName:"BlogPost__PostDate",componentId:"sc-1u8xcd7-0"})(["color:grey;text-align:center;margin-top:0.25rem;"]),T=new c.a({createElement:l.a.createElement,components:{"portrait-generator":S,"table-roller":k}}).Compiler,E="2425239770";n.default=function(e){var n=e.data.markdownRemark,t=O(n),r=n.frontmatter.tags||[];return l.a.createElement(a.a,null,l.a.createElement("article",null,l.a.createElement(i.a,{title:"Losing Games - "+n.frontmatter.title,meta:[{name:"og:image",content:t},{name:"og:title",content:"Losing Games - "+n.frontmatter.title},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:"@isaacwilliams"},{name:"og:description",content:n.excerpt},{name:"description",content:n.excerpt}]}),l.a.createElement(h.a,null,l.a.createElement(d.a,null,n.frontmatter.title),l.a.createElement(C,null,n.frontmatter.date)),l.a.createElement(m.a,null,T(n.htmlAst)),l.a.createElement(b,{tags:r})))}},"6qXI":function(e,n,t){"use strict";var r=t("vOnD"),l=t("wl2n");function o(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["padding: 1rem 0;"]);return o=function(){return e},e}n.a=r.c.header.withConfig({displayName:"PageHeader",componentId:"dk5uax-0"})(["padding:2rem 4rem 3rem 4rem;",""],l.a.phone(o()))},"7+hk":function(e,n,t){"use strict";var r=t("z2ZG"),l=t("du5t"),o=t("eAD1"),i=t("dXJL"),a=t("bHgY"),u=t("RXC2");e.exports=r([o,l,i,a,u])},CC3I:function(e,n,t){var r=t("Lc7W");e.exports=function(e,n){var t,l=null;if(!e||"string"!=typeof e)return l;for(var o,i,a=r(e),u="function"==typeof n,s=0,c=a.length;s<c;s++)o=(t=a[s]).property,i=t.value,u?n(o,i,t):i&&(l||(l={}),l[o]=i);return l}},Cjod:function(e,n,t){"use strict";t("pIFo");var r=t("7+hk"),l=t("IEZ+"),o=t("F6fn"),i=t("TTG4"),a=t("vfP8"),u=t("CC3I"),s=t("qrWY"),c=t("i+/2"),p=/-([a-z])/g;function f(e,n,t,r){var l,u=r.schema,s=o(u,n);null==t||!1===t||t!=t||s.boolean&&!t||(null!==t&&"object"==typeof t&&"length"in t&&(t=(s.commaSeparated?a:i).stringify(t)),s.boolean&&!0===r.hyperscript&&(t=""),s.mustUseProperty||(!0===r.vdom?l="attributes":!0===r.hyperscript&&(l="attrs")),l?(void 0===e[l]&&(e[l]={}),e[l][s.attribute]=t):e[r.react&&s.space?s.property:s.attribute]=t)}function d(e){return Boolean(e&&e.context&&e.cleanup)}function h(e,n){return n.toUpperCase()}e.exports=function(e,n,t){var o,i,a,m=t||{};if("function"!=typeof e)throw new Error("h is not a function");"string"==typeof m||"boolean"==typeof m?(o=m,m={}):o=m.prefix;i=function(e){var n=e&&e("div");return Boolean(n&&("_owner"in n||"_store"in n)&&null===n.key)}(e),a=function(e){return e&&"VirtualNode"===e("div").type}(e),null==o&&(o=(!0===i||!0===a)&&"h-");if(c("root",n))n=1===n.children.length&&c("element",n.children[0])?n.children[0]:{type:"element",tagName:"div",properties:{},children:n.children};else if(!c("element",n))throw new Error("Expected root or element, not `"+(n&&n.type||n)+"`");return function e(n,t,r){var o,i,a,d,m,g,y,v,b,x=r.schema,w=x,k=t.tagName;"html"===x.space&&"svg"===k.toLowerCase()&&(w=l,r.schema=w);!0===r.vdom&&"html"===w.space&&(k=k.toUpperCase());for(d in o=t.properties,i={},o)f(i,d,o[d],r);"string"!=typeof i.style||!0!==r.vdom&&!0!==r.react||(i.style=function(e,n){var t={};try{u(e,(function(e,n){t[function(e){"-ms-"===e.slice(0,4)&&(e="ms-"+e.slice(4));return e.replace(p,h)}(e)]=n}))}catch(r){throw r.message=n+"[style]"+r.message.slice("undefined".length),r}return t}(i.style,k));r.prefix&&(r.key++,i.key=r.prefix+r.key);r.vdom&&"html"!==w.space&&(i.namespace=s[w.space]);m=[],a=t.children,g=a?a.length:0,y=-1;for(;++y<g;)v=a[y],c("element",v)?m.push(e(n,v,r)):c("text",v)&&m.push(v.value);return b=0===m.length?n(k,i):n(k,i,m),r.schema=x,b}(e,n,{schema:"svg"===m.space?l:r,prefix:o,key:0,react:i,vdom:a,hyperscript:d(e)})}},CnBM:function(e,n,t){"use strict";t("91GP"),t("VRzm"),t("XfO3"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("8+KV"),t("LK8F"),t("/SS/"),t("hHhE"),t("rE2o"),t("ioFf");var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var a=t("q1tI"),u=t("17x9"),s=[],c=[];function p(e){var n=e(),t={loading:!0,loaded:null,error:null};return t.promise=n.then((function(e){return t.loading=!1,t.loaded=e,e})).catch((function(e){throw t.loading=!1,t.error=e,e})),t}function f(e){var n={loading:!1,loaded:{},error:null},t=[];try{Object.keys(e).forEach((function(r){var l=p(e[r]);l.loading?n.loading=!0:(n.loaded[r]=l.loaded,n.error=l.error),t.push(l.promise),l.promise.then((function(e){n.loaded[r]=e})).catch((function(e){n.error=e}))}))}catch(r){n.error=r}return n.promise=Promise.all(t).then((function(e){return n.loading=!1,e})).catch((function(e){throw n.loading=!1,e})),n}function d(e,n){return a.createElement((t=e)&&t.__esModule?t.default:t,n);var t}function h(e,n){var p,f;if(!n.loading)throw new Error("react-loadable requires a `loading` component");var h=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:d,webpack:null,modules:null},n),m=null;function g(){return m||(m=e(h.loader)),m.promise}return s.push(g),"function"==typeof h.webpack&&c.push((function(){if(e=h.webpack,"object"===r(t.m)&&e().every((function(e){return void 0!==e&&void 0!==t.m[e]})))return g();var e})),f=p=function(n){function t(r){l(this,t);var i=o(this,n.call(this,r));return i.retry=function(){i.setState({error:null,loading:!0,timedOut:!1}),m=e(h.loader),i._loadModule()},g(),i.state={error:m.error,pastDelay:!1,timedOut:!1,loading:m.loading,loaded:m.loaded},i}return i(t,n),t.preload=function(){return g()},t.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},t.prototype._loadModule=function(){var e=this;if(this.context.loadable&&Array.isArray(h.modules)&&h.modules.forEach((function(n){e.context.loadable.report(n)})),m.loading){"number"==typeof h.delay&&(0===h.delay?this.setState({pastDelay:!0}):this._delay=setTimeout((function(){e.setState({pastDelay:!0})}),h.delay)),"number"==typeof h.timeout&&(this._timeout=setTimeout((function(){e.setState({timedOut:!0})}),h.timeout));var n=function(){e._mounted&&(e.setState({error:m.error,loaded:m.loaded,loading:m.loading}),e._clearTimeouts())};m.promise.then((function(){n()})).catch((function(e){n()}))}},t.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},t.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},t.prototype.render=function(){return this.state.loading||this.state.error?a.createElement(h.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?h.render(this.state.loaded,this.props):null},t}(a.Component),p.contextTypes={loadable:u.shape({report:u.func.isRequired})},f}function m(e){return h(p,e)}m.Map=function(e){if("function"!=typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return h(f,e)};var g=function(e){function n(){return l(this,n),o(this,e.apply(this,arguments))}return i(n,e),n.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},n.prototype.render=function(){return a.Children.only(this.props.children)},n}(a.Component);function y(e){for(var n=[];e.length;){var t=e.pop();n.push(t())}return Promise.all(n).then((function(){if(e.length)return y(e)}))}g.propTypes={report:u.func.isRequired},g.childContextTypes={loadable:u.shape({report:u.func.isRequired}).isRequired},m.Capture=g,m.preloadAll=function(){return new Promise((function(e,n){y(s).then(e,n)}))},m.preloadReady=function(){return new Promise((function(e,n){y(c).then(e,e)}))},e.exports=m},D3zA:function(e,n,t){"use strict";t("2Spj");var r=t("aI7X");e.exports=Function.prototype.bind||r},DUvi:function(e,n,t){"use strict";t("V+eJ");var r=t("bAF5"),l=t("dKIx"),o=t("qTn3");e.exports=function(e){var n,t,i=e.space,a=e.mustUseProperty||[],u=e.attributes||{},s=e.properties,c=e.transform,p={},f={};for(n in s)t=new o(n,c(u,n),s[n],i),-1!==a.indexOf(n)&&(t.mustUseProperty=!0),p[n]=t,f[r(n)]=n,f[r(t.attribute)]=n;return new l(p,f,i)}},F6fn:function(e,n,t){"use strict";t("pIFo");var r=t("bAF5"),l=t("qTn3"),o=t("Ut8p");e.exports=function(e,n){var t=r(n),p=n,f=o;if(t in e.normal)return e.property[e.normal[t]];t.length>4&&"data"===t.slice(0,4)&&i.test(n)&&("-"===n.charAt(4)?p=function(e){var n=e.slice(5).replace(a,c);return"data"+n.charAt(0).toUpperCase()+n.slice(1)}(n):n=function(e){var n=e.slice(4);if(a.test(n))return e;"-"!==(n=n.replace(u,s)).charAt(0)&&(n="-"+n);return"data"+n}(n),f=l);return new f(p,n)};var i=/^data[-a-z0-9.:_]+$/i,a=/-[a-z]/g,u=/[A-Z]/g;function s(e){return"-"+e.toLowerCase()}function c(e){return e.charAt(1).toUpperCase()}},FWC9:function(e,n,t){"use strict";var r=0;function l(){return Math.pow(2,++r)}n.boolean=l(),n.booleanish=l(),n.overloadedBoolean=l(),n.number=l(),n.spaceSeparated=l(),n.commaSeparated=l(),n.commaOrSpaceSeparated=l()},"IEZ+":function(e,n,t){"use strict";var r=t("z2ZG"),l=t("du5t"),o=t("eAD1"),i=t("dXJL"),a=t("bHgY"),u=t("zktx");e.exports=r([o,l,i,a,u])},Lc7W:function(e,n,t){t("pIFo"),t("mGWK"),t("SRfc");var r=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,l=/\n/g,o=/^\s*/,i=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,a=/^:\s*/,u=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,s=/^[;\s]*/,c=/^\s+|\s+$/g;function p(e){return e?e.replace(c,""):""}e.exports=function(e,n){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var t=1,c=1;function f(e){var n=e.match(l);n&&(t+=n.length);var r=e.lastIndexOf("\n");c=~r?e.length-r:c+e.length}function d(){var e={line:t,column:c};return function(n){return n.position=new h(e),v(),n}}function h(e){this.start=e,this.end={line:t,column:c},this.source=n.source}h.prototype.content=e;var m=[];function g(r){var l=new Error(n.source+":"+t+":"+c+": "+r);if(l.reason=r,l.filename=n.source,l.line=t,l.column=c,l.source=e,!n.silent)throw l;m.push(l)}function y(n){var t=n.exec(e);if(t){var r=t[0];return f(r),e=e.slice(r.length),t}}function v(){y(o)}function b(e){var n;for(e=e||[];n=x();)!1!==n&&e.push(n);return e}function x(){var n=d();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var t=2;""!=e.charAt(t)&&("*"!=e.charAt(t)||"/"!=e.charAt(t+1));)++t;if(t+=2,""===e.charAt(t-1))return g("End of comment missing");var r=e.slice(2,t-2);return c+=2,f(r),e=e.slice(t),c+=2,n({type:"comment",comment:r})}}function w(){var e=d(),n=y(i);if(n){if(x(),!y(a))return g("property missing ':'");var t=y(u),l=e({type:"declaration",property:p(n[0].replace(r,"")),value:t?p(t[0].replace(r,"")):""});return y(s),l}}return v(),function(){var e,n=[];for(b(n);e=w();)!1!==e&&(n.push(e),b(n));return n}()}},RXC2:function(e,n,t){"use strict";var r=t("FWC9"),l=t("DUvi"),o=t("y3WP"),i=r.boolean,a=r.overloadedBoolean,u=r.booleanish,s=r.number,c=r.spaceSeparated,p=r.commaSeparated;e.exports=l({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:o,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:p,acceptCharset:c,accessKey:c,action:null,allowFullScreen:i,allowPaymentRequest:i,allowUserMedia:i,alt:null,as:null,async:i,autoCapitalize:null,autoComplete:c,autoFocus:i,autoPlay:i,capture:i,charSet:null,checked:i,cite:null,className:c,cols:s,colSpan:null,content:null,contentEditable:u,controls:i,controlsList:c,coords:s|p,crossOrigin:null,data:null,dateTime:null,decoding:null,default:i,defer:i,dir:null,dirName:null,disabled:i,download:a,draggable:u,encType:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:i,formTarget:null,headers:c,height:s,hidden:i,high:s,href:null,hrefLang:null,htmlFor:c,httpEquiv:c,id:null,inputMode:null,integrity:null,is:null,isMap:i,itemId:null,itemProp:c,itemRef:c,itemScope:i,itemType:c,kind:null,label:null,lang:null,language:null,list:null,loop:i,low:s,manifest:null,max:null,maxLength:s,media:null,method:null,min:null,minLength:s,multiple:i,muted:i,name:null,nonce:null,noModule:i,noValidate:i,open:i,optimum:s,pattern:null,ping:c,placeholder:null,playsInline:i,poster:null,preload:null,readOnly:i,referrerPolicy:null,rel:c,required:i,reversed:i,rows:s,rowSpan:s,sandbox:c,scope:null,scoped:i,seamless:i,selected:i,shape:null,size:s,sizes:c,slot:null,span:s,spellCheck:u,src:null,srcDoc:null,srcLang:null,srcSet:p,start:s,step:null,style:null,tabIndex:s,target:null,title:null,translate:null,type:null,typeMustMatch:i,useMap:null,value:u,width:s,wrap:null,align:null,aLink:null,archive:c,axis:null,background:null,bgColor:null,border:s,borderColor:null,bottomMargin:s,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:i,declare:i,event:null,face:null,frame:null,frameBorder:null,hSpace:s,leftMargin:s,link:null,longDesc:null,lowSrc:null,marginHeight:s,marginWidth:s,noResize:i,noHref:i,noShade:i,noWrap:i,object:null,profile:null,prompt:null,rev:null,rightMargin:s,rules:null,scheme:null,scrolling:u,standby:null,summary:null,text:null,topMargin:s,valueType:null,version:null,vAlign:null,vLink:null,vSpace:s,allowTransparency:null,autoCorrect:null,autoSave:null,prefix:null,property:null,results:s,security:null,unselectable:null}})},RdQs:function(e,n,t){"use strict";t("Tze0");var r=t("ZkSf"),l=Object.prototype.hasOwnProperty,o={align:"text-align",valign:"vertical-align",height:"height",width:"width"};function i(e){var n;if("tr"===e.tagName||"td"===e.tagName||"th"===e.tagName)for(n in o)l.call(o,n)&&void 0!==e.properties[n]&&(a(e,o[n],e.properties[n]),delete e.properties[n])}function a(e,n,t){var r=(e.properties.style||"").trim();r&&!/;\s*/.test(r)&&(r+=";"),r&&(r+=" ");var l=r+n+": "+t+";";e.properties.style=l}e.exports=function(e){return r(e,"element",i),e}},TTG4:function(e,n,t){"use strict";t("KKXr"),t("Tze0"),n.parse=function(e){var n=String(e||"").trim();return""===n?[]:n.split(r)},n.stringify=function(e){return e.join(" ").trim()};var r=/[ \t\n\r\f]+/g},U6jy:function(e,n){e.exports=function(){for(var e={},n=0;n<arguments.length;n++){var r=arguments[n];for(var l in r)t.call(r,l)&&(e[l]=r[l])}return e};var t=Object.prototype.hasOwnProperty},Ut8p:function(e,n,t){"use strict";e.exports=l;var r=l.prototype;function l(e,n){this.property=e,this.attribute=n}r.space=null,r.attribute=null,r.property=null,r.boolean=!1,r.booleanish=!1,r.overloadedBoolean=!1,r.number=!1,r.commaSeparated=!1,r.spaceSeparated=!1,r.commaOrSpaceSeparated=!1,r.mustUseProperty=!1,r.defined=!1},Zasy:function(e,n,t){"use strict";function r(e){if("string"==typeof e)return function(e){return function(n){return Boolean(n&&n.type===e)}}(e);if(null==e)return i;if("object"==typeof e)return("length"in e?o:l)(e);if("function"==typeof e)return e;throw new Error("Expected function, string, or object as test")}function l(e){return function(n){var t;for(t in e)if(n[t]!==e[t])return!1;return!0}}function o(e){var n=function(e){for(var n=[],t=e.length,l=-1;++l<t;)n[l]=r(e[l]);return n}(e),t=n.length;return function(){var e=-1;for(;++e<t;)if(n[e].apply(this,arguments))return!0;return!1}}function i(){return!0}e.exports=r},ZkSf:function(e,n,t){"use strict";t("V+eJ"),e.exports=a;var r=t("uzq8"),l=r.CONTINUE,o=r.SKIP,i=r.EXIT;function a(e,n,t,l){"function"==typeof n&&"function"!=typeof t&&(l=t,t=n,n=null),r(e,n,(function(e,n){var r=n[n.length-1],l=r?r.children.indexOf(e):null;return t(e,l,r)}),l)}a.CONTINUE=l,a.SKIP=o,a.EXIT=i},aI7X:function(e,n,t){"use strict";t("a1Th"),t("h7Nl"),t("Btvt");var r="Function.prototype.bind called on incompatible ",l=Array.prototype.slice,o=Object.prototype.toString;e.exports=function(e){var n=this;if("function"!=typeof n||"[object Function]"!==o.call(n))throw new TypeError(r+n);for(var t,i=l.call(arguments,1),a=function(){if(this instanceof t){var r=n.apply(this,i.concat(l.call(arguments)));return Object(r)===r?r:this}return n.apply(e,i.concat(l.call(arguments)))},u=Math.max(0,n.length-i.length),s=[],c=0;c<u;c++)s.push("$"+c);if(t=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(a),n.prototype){var p=function(){};p.prototype=n.prototype,t.prototype=new p,p.prototype=null}return t}},aTjO:function(e,n,t){"use strict";t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP");var r=t("q1tI"),l=t.n(r),o=t("Wbzz"),i=t("LvDl");n.a=function(e){var n=e.tag,t=e.children,r=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,["tag","children"]);return l.a.createElement(o.a,Object.assign({},r,{to:"/tags/"+Object(i.kebabCase)(n)}),t||Object(i.capitalize)(n))}},bAF5:function(e,n,t){"use strict";t("pIFo"),e.exports=function(e){return e.toLowerCase().replace(/\b[:-]\b/g,"")}},bHgY:function(e,n,t){"use strict";var r=t("FWC9"),l=t("DUvi"),o=r.booleanish,i=r.number,a=r.spaceSeparated;e.exports=l({transform:function(e,n){return"role"===n?n:"aria-"+n.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:o,ariaAutoComplete:null,ariaBusy:o,ariaChecked:o,ariaColCount:i,ariaColIndex:i,ariaColSpan:i,ariaControls:a,ariaCurrent:null,ariaDescribedBy:a,ariaDetails:null,ariaDisabled:o,ariaDropEffect:a,ariaErrorMessage:null,ariaExpanded:o,ariaFlowTo:a,ariaGrabbed:o,ariaHasPopup:null,ariaHidden:o,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:a,ariaLevel:i,ariaLive:null,ariaModal:o,ariaMultiLine:o,ariaMultiSelectable:o,ariaOrientation:null,ariaOwns:a,ariaPlaceholder:null,ariaPosInSet:i,ariaPressed:o,ariaReadOnly:o,ariaRelevant:null,ariaRequired:o,ariaRoleDescription:a,ariaRowCount:i,ariaRowIndex:i,ariaRowSpan:i,ariaSelected:o,ariaSetSize:i,ariaSort:null,ariaValueMax:i,ariaValueMin:i,ariaValueNow:i,ariaValueText:null,role:null}})},dKIx:function(e,n,t){"use strict";e.exports=l;var r=l.prototype;function l(e,n,t){this.property=e,this.normal=n,t&&(this.space=t)}r.space=null,r.normal={},r.property={}},dXJL:function(e,n,t){"use strict";var r=t("DUvi"),l=t("y3WP");e.exports=r({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:l,properties:{xmlns:null,xmlnsXLink:null}})},du5t:function(e,n,t){"use strict";var r=t("DUvi");e.exports=r({space:"xlink",transform:function(e,n){return"xlink:"+n.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}})},eAD1:function(e,n,t){"use strict";var r=t("DUvi");e.exports=r({space:"xml",transform:function(e,n){return"xml:"+n.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}})},"i+/2":function(e,n,t){"use strict";function r(e){if("string"==typeof e)return function(e){return function(n){return Boolean(n&&n.type===e)}}(e);if(null==e)return i;if("object"==typeof e)return("length"in e?o:l)(e);if("function"==typeof e)return e;throw new Error("Expected function, string, or object as test")}function l(e){return function(n){var t;for(t in e)if(n[t]!==e[t])return!1;return!0}}function o(e){var n=function(e){for(var n=[],t=e.length,l=-1;++l<t;)n[l]=r(e[l]);return n}(e),t=n.length;return function(){var e=-1;for(;++e<t;)if(n[e].apply(this,arguments))return!0;return!1}}function i(){return!0}e.exports=function e(n,t,l,o,i){var a=null!=o,u=null!=l,s=r(n);if(u&&("number"!=typeof l||l<0||l===1/0))throw new Error("Expected positive finite index or child node");if(a&&(!e(null,o)||!o.children))throw new Error("Expected parent node");if(!t||!t.type||"string"!=typeof t.type)return!1;if(a!==u)throw new Error("Expected both parent and index");return Boolean(s.call(i,t,l,o))}},oNNP:function(e,n,t){"use strict";var r=t("D3zA");e.exports=r.call(Function.call,Object.prototype.hasOwnProperty)},oNwT:function(e,n,t){"use strict";var r=t("vOnD"),l=t("fCkO"),o=t("wl2n");function i(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n        &.right, &.left {\n            width: 50%;\n            z-index: 100;\n            margin-top: 0;\n            margin-bottom: 1rem;\n        }\n\n        &.left {\n            float: left;\n            margin-left: -5rem;\n            margin-right: 1.5rem;\n        }\n\n        &.right {\n            float: right;\n            margin-right: -5rem;\n            margin-left: 1.5rem;\n        }"]);return i=function(){return e},e}var a=r.c.div.withConfig({displayName:"RichContent",componentId:"sc-1c1ox6j-0"})([""," font-size:1rem;line-height:1.5;p{margin:0.5em 0 0.8em 0;}em{font-style:italic;}strong{font-weight:600;}h1,h2,h3,h4,h5{"," margin:1.5em 0 0.3em 0;font-weight:600;&:first-child{margin-top:0;}}h1{font-size:1.8rem;text-align:center;}h2{font-size:1.4rem;}h3{font-size:1.2rem;color:#444;}a{.gatsby-resp-image-wrapper{box-shadow:0 1px 3px rgba(0,0,0,0.3);transition:box-shadow 0.2s ease-in-out;&:hover{box-shadow:0 3px 6px rgba(0,0,0,0.3);}}}.gatsby-resp-image-figcaption{padding:0.3rem 0.5rem;text-align:center;font-size:0.9rem;color:grey;border:1px solid #eee;border-top:0;a{color:grey;}}.image-container{position:relative;margin:1rem 15%;","}blockquote{"," font-weight:400;position:relative;font-style:italic;margin-left:2em;&:before{position:absolute;content:'>';left:-2em;color:#666;}}ul,ol{margin-left:2em;counter-reset:li;li{margin:0.3em 0;p{margin:0;}position:relative;counter-increment:li;&:before{position:absolute;left:-2em;color:#666;}}}ul{li:before{content:'•';}}ol{li:before{content:counter(li) '.';}}table{margin:1em 0;box-sizing:content-box;border-spacing:0.5em;font-size:0.9rem;word-break:keep-all;td,th{padding:0.4em 0.5em;&:first-child{white-space:nowrap;}}th{border-bottom:1px solid grey;}th{text-align:left;font-weight:700;}tbody{tr:nth-child(odd){background-color:#eee;}tr:last-child{border-bottom:1px solid #eee;}}}.table-wide{table{min-width:100%;}}.column-container{display:flex;> div{margin-right:20px;&.column-2{flex-basis:50%;}&:last-of-type{margin-right:0;}}}"],l.a,l.b,o.a.desktop(i()),l.b);n.a=a},qTn3:function(e,n,t){"use strict";var r=t("Ut8p"),l=t("FWC9");function o(e,n,t,o){i(this,"space",o),r.call(this,e,n),i(this,"boolean",a(t,l.boolean)),i(this,"booleanish",a(t,l.booleanish)),i(this,"overloadedBoolean",a(t,l.overloadedBoolean)),i(this,"number",a(t,l.number)),i(this,"commaSeparated",a(t,l.commaSeparated)),i(this,"spaceSeparated",a(t,l.spaceSeparated)),i(this,"commaOrSpaceSeparated",a(t,l.commaOrSpaceSeparated))}function i(e,n,t){t&&(e[n]=t)}function a(e,n){return(e&n)===n}e.exports=o,o.prototype=new r,o.prototype.defined=!0},qrWY:function(e){e.exports=JSON.parse('{"html":"http://www.w3.org/1999/xhtml","mathml":"http://www.w3.org/1998/Math/MathML","svg":"http://www.w3.org/2000/svg","xlink":"http://www.w3.org/1999/xlink","xml":"http://www.w3.org/XML/1998/namespace","xmlns":"http://www.w3.org/2000/xmlns/"}')},uzq8:function(e,n,t){"use strict";e.exports=l;var r=t("Zasy");function l(e,n,t,l){var i;function a(e,r,u){var s,c=[];return(n&&!i(e,r,u[u.length-1]||null)||!1!==(c=o(t(e,u)))[0])&&e.children&&"skip"!==c[0]&&!1===(s=o(function(e,n){var t,r=l?-1:1,o=(l?e.length:-1)+r;for(;o>-1&&o<e.length;){if(!1===(t=a(e[o],o,n))[0])return t;o="number"==typeof t[1]?t[1]:o+r}}(e.children,u.concat(e))))[0]?s:c}"function"==typeof n&&"function"!=typeof t&&(l=t,t=n,n=null),i=r(n),a(e,null,[])}function o(e){return null!==e&&"object"==typeof e&&"length"in e?e:"number"==typeof e?[!0,e]:[e]}l.CONTINUE=!0,l.SKIP="skip",l.EXIT=!1},vGni:function(e,n,t){"use strict";e.exports=function(e,n){return n in e?e[n]:n}},vfP8:function(e,n,t){"use strict";t("Tze0"),t("V+eJ"),n.parse=function(e){var n,t=[],r=String(e||""),l=r.indexOf(","),o=0,i=!1;for(;!i;)-1===l&&(l=r.length,i=!0),!(n=r.slice(o,l).trim())&&i||t.push(n),o=l+1,l=r.indexOf(",",o);return t},n.stringify=function(e,n){var t=n||{},r=!1===t.padLeft?"":" ",l=t.padRight?" ":"";""===e[e.length-1]&&(e=e.concat(""));return e.join(l+","+r).trim()}},y3WP:function(e,n,t){"use strict";var r=t("vGni");e.exports=function(e,n){return r(e,n.toLowerCase())}},z2ZG:function(e,n,t){"use strict";var r=t("U6jy"),l=t("dKIx");e.exports=function(e){var n,t,o=e.length,i=[],a=[],u=-1;for(;++u<o;)n=e[u],i.push(n.property),a.push(n.normal),t=n.space;return new l(r.apply(null,i),r.apply(null,a),t)}},zktx:function(e,n,t){"use strict";var r=t("FWC9"),l=t("DUvi"),o=t("vGni"),i=r.boolean,a=r.number,u=r.spaceSeparated,s=r.commaSeparated,c=r.commaOrSpaceSeparated;e.exports=l({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:o,properties:{about:c,accentHeight:a,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:a,amplitude:a,arabicForm:null,ascent:a,attributeName:null,attributeType:null,azimuth:a,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:a,by:null,calcMode:null,capHeight:a,className:u,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:a,diffuseConstant:a,direction:null,display:null,dur:null,divisor:a,dominantBaseline:null,download:i,dx:null,dy:null,edgeMode:null,editable:null,elevation:a,enableBackground:null,end:null,event:null,exponent:a,externalResourcesRequired:null,fill:null,fillOpacity:a,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:s,g2:s,glyphName:s,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:a,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:a,horizOriginX:a,horizOriginY:a,id:null,ideographic:a,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:a,k:a,k1:a,k2:a,k3:a,k4:a,kernelMatrix:c,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:a,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:a,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:a,overlineThickness:a,paintOrder:null,panose1:null,path:null,pathLength:a,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:a,pointsAtY:a,pointsAtZ:a,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:c,r:null,radius:null,refX:null,refY:null,rel:c,rev:c,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:c,requiredFeatures:c,requiredFonts:c,requiredFormats:c,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:a,specularExponent:a,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:a,strikethroughThickness:a,string:null,stroke:null,strokeDashArray:c,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:a,strokeOpacity:a,strokeWidth:null,style:null,surfaceScale:a,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:c,tabIndex:a,tableValues:null,target:null,targetX:a,targetY:a,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:c,to:null,transform:null,u1:null,u2:null,underlinePosition:a,underlineThickness:a,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:a,values:null,vAlphabetic:a,vMathematical:a,vectorEffect:null,vHanging:a,vIdeographic:a,version:null,vertAdvY:a,vertOriginX:a,vertOriginY:a,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:a,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}})}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-58985690ae0ede1baa08.js.map