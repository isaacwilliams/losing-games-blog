(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{152:function(t,e){!function(e){"use strict";var r,n=Object.prototype,a=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",s="object"==typeof t,f=e.regeneratorRuntime;if(f)s&&(t.exports=f);else{(f=e.regeneratorRuntime=s?t.exports:{}).wrap=b;var l="suspendedStart",h="suspendedYield",p="executing",d="completed",g={},m={};m[i]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==n&&a.call(y,i)&&(m=y);var w=k.prototype=E.prototype=Object.create(m);L.prototype=w.constructor=k,k.constructor=L,k[u]=L.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},f.awrap=function(t){return{__await:t}},I(_.prototype),_.prototype[c]=function(){return this},f.AsyncIterator=_,f.async=function(t,e,r,n){var a=new _(b(t,e,r,n));return f.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},I(w),w[u]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,a){return c.type="throw",c.arg=t,e.next=n,a&&(e.method="next",e.arg=r),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;C(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}}}function b(t,e,r,n){var a=e&&e.prototype instanceof E?e:E,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=function(t,e,r){var n=l;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===a)throw o;return R()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=x(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function E(){}function L(){}function k(){}function I(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function _(t){var e;this._invoke=function(r,n){function o(){return new Promise(function(e,o){!function e(r,n,o,i){var c=x(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&a.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(s).then(function(t){u.value=t,o(u)},i)}i(c.arg)}(r,n,e,o)})}return e=e?e.then(o,o):o()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var a=x(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:R}}function R(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},159:function(t,e,r){t.exports=r(167)},160:function(t,e){function r(t,e,r,n,a,o,i){try{var c=t[o](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,a)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise(function(a,o){var i=t.apply(e,n);function c(t){r(i,a,o,c,u,"next",t)}function u(t){r(i,a,o,c,u,"throw",t)}c(void 0)})}}},164:function(t,e,r){"use strict";var n=r(135),a=r(140),o=r(137),i=n.c.button.withConfig({displayName:"Button",componentId:"sc-3uo7g7-0"})([""," padding:0.25em 0.75em;font-weight:600;background:",";color:white;border-radius:3px;cursor:pointer;outline:none;&:hover{background:",";}"],a.b,o.d,o.c);e.a=i},167:function(t,e,r){var n=function(){return this}()||Function("return this")(),a=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=a&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(152),a)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},252:function(t,e,r){t.exports=r.p+"static/heads-ff8bef0a271aa2f741ccf08c2823e209.png"},253:function(t,e,r){t.exports=r.p+"static/eyes-1d403e0361ec627daed5887e6f74c0ae.png"},254:function(t,e,r){t.exports=r.p+"static/noses-1601920f393878e432faeb1fa86f6f39.png"},255:function(t,e,r){t.exports=r.p+"static/mouths-d4f2dbfb962cd78670c184372ed5f0c8.png"},256:function(t,e,r){t.exports=r.p+"static/hair-front-317437961cb5b9c3d537123f0c8b418a.png"},257:function(t,e,r){t.exports=r.p+"static/hair-back-1aa2b6c2cd2af370e1fa208c4d5fb85d.png"},258:function(t,e,r){t.exports=r.p+"static/hair-face-24ad6103ecb12ebc629ecf9e2de4953b.png"},259:function(t,e,r){t.exports=r.p+"static/bodies-ee419526cef3852e1c90d300faec2634.png"},260:function(t,e,r){t.exports=r.p+"static/bodies-skin-637f269fc0a3fc1df5980f4ba66a9cbc.png"},261:function(t,e,r){t.exports=r.p+"static/accessory-front-e032f74a6c4b9a8b300483b53ffde18b.png"},262:function(t,e,r){t.exports=r.p+"static/accessory-back-87c70fc4c5159d2fdd6d209e31f3eb53.png"},263:function(t,e,r){"use strict";r.r(e);r(31);var n,a=r(6),o=r.n(a),i=r(0),c=r.n(i),u=r(135),s=r(159),f=r.n(s),l=(r(152),r(160)),h=r.n(l),p=function(t,e,r){var n=Math.floor(t.width/e),a=Math.floor(t.height/r);return{image:t,size:n*a,sprite:function(a){var o=a%n,i=Math.floor(a/n),c=document.createElement("canvas");return c.width=e,c.height=r,c.getContext("2d").drawImage(t,o*e,i*r,e,r,0,0,e,r),c}}},d=(r(66),r(47),r(67),r(30),function(t){return new Promise(function(e){var r=new Image;r.addEventListener("load",function(){return e(r)}),r.src=t})}),g=function(){var t=h()(f.a.mark(function t(e){var r;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n||n.length!==e.length){t.next=2;break}return t.abrupt("return",n);case 2:return t.next=4,Promise.all(e.map(d));case 4:return r=t.sent,n=r,t.abrupt("return",n);case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),m=function(t,e){var r=document.createElement("canvas");r.width=t.width,r.height=t.height;var n=r.getContext("2d");return n.fillStyle=e,n.fillRect(0,0,r.width,r.height),n.globalCompositeOperation="multiply",n.drawImage(t,0,0),n.globalCompositeOperation="destination-in",n.drawImage(t,0,0),r},v=function(t){var e=new Date,r=t.canvas.width,n=t.canvas.height;return setInterval(function(){var a=parseInt((new Date-e)/1e3*16)/16;t.save(),t.clearRect(0,0,r,n),t.translate(r/2,n/2),t.rotate(2*Math.PI*a);for(var o=0;o<16;o++)t.beginPath(),t.rotate(2*Math.PI/16),t.moveTo(15,0),t.lineTo(25,0),t.lineWidth=2,t.strokeStyle="rgba(0,0,0,"+o/16+")",t.stroke();t.restore()},1e3/30)},y=["#fbd1bf","#cb977f","#db6f56","#f0d0c8","#c19877","#956d4d","#633728","#5b3735","#eb9840","#e2deb5","#f7e1e1","#7e675f","#eee476","#87db73","#90daef","#d37b2d","#f7738c","#e24261","#b582d6","#bab163","#a8d676","#698b98","#58666b","#66586b","#e4e4e4","#b6b6b6","#929292","#686868","#454545","#393939","#5ff892","#5ec9c5","#fcc919","#30a4ee","#d651ee","#fa427a","#6554ce","#433b73","#683b73","#183f3a","#3e593e","#c3e0c1"],w=function(t){return Math.floor(Math.random()*t)},b=function(){var t=h()(f.a.mark(function t(e,n,a,o){var i,c,u,s,l,h,d,b,x,E,L,k,I,_,O,P,C,j,N,R,S,V,G,M,z,F,T,D,A,J,Y,B;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===n&&(n=12),void 0===a&&(a=24),void 0===o&&(o=32),i=e.getContext("2d"),c=v(i),t.next=7,g([r(252),r(253),r(254),r(255),r(256),r(257),r(258),r(259),r(260),r(261),r(262)]);case 7:u=t.sent,s=u[0],l=u[1],h=u[2],d=u[3],b=u[4],x=u[5],E=u[6],L=u[7],k=u[8],I=u[9],_=u[10],clearInterval(c),i.fillStyle="#ffffff",i.fillRect(0,0,e.width,e.height),O=y[w(n)],P=y[w(a)],C=y[w(o)],j=y[w(o)],N=p(s,512,512),R=p(l,512,512),S=p(h,512,512),V=p(d,512,512),G=p(b,512,512),M=p(x,512,512),z=p(E,512,512),F=p(L,512,512),T=p(k,512,512),D=p(I,512,512),A=p(_,512,512),J=w(G.size),Y=w(F.size),B=w(D.size),i.drawImage(m(A.sprite(B),j),0,0),i.drawImage(m(M.sprite(J),P),0,0),i.drawImage(m(T.sprite(Y),O),0,0),i.drawImage(m(F.sprite(Y),C),0,0),i.drawImage(m(N.sprite(w(N.size)),O),0,0),i.drawImage(V.sprite(w(V.size)),0,0),i.drawImage(R.sprite(w(R.size)),0,0),Math.random()<.1&&i.drawImage(m(z.sprite(w(4)),P),0,0),i.drawImage(m(S.sprite(w(S.size)),O),0,0),i.drawImage(m(G.sprite(J),P),0,0),i.drawImage(m(D.sprite(B),j),0,0);case 51:case"end":return t.stop()}},t,this)}));return function(e,r,n,a){return t.apply(this,arguments)}}(),x=r(164),E=u.c.div.withConfig({displayName:"PortraitGenerator__GeneratorOption",componentId:"yrrjdm-0"})(["display:flex;flex-direction:row;align-items:center;margin:0.5rem 0;"]),L=u.c.label.withConfig({displayName:"PortraitGenerator__OptionLabel",componentId:"yrrjdm-1"})(["display:inline-block;width:16rem;"]),k=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))||this).state={skinVariance:12,hairVariance:24,clothingVariance:y.length,accessories:!0},e}o()(e,t);var r=e.prototype;return r.componentDidMount=function(){this.draw()},r.draw=function(){var t=this.state,e=t.skinVariance,r=t.hairVariance,n=t.clothingVariance,a=t.accessories;b(this.canvas,e,r,n,a)},r.download=function(){var t=this.canvas.toDataURL("image/png").replace("image/png","image/octet-stream");this.downloadLink.setAttribute("href",t)},r.render=function(){var t=this,e=this.state,r=e.skinVariance,n=e.hairVariance,a=e.clothingVariance;return c.a.createElement("div",null,c.a.createElement("canvas",{ref:function(e){t.canvas=e},width:"512",height:"512"}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("p",null,c.a.createElement(x.a,{onClick:function(){return t.draw()}},"New portrait")," ",c.a.createElement("a",{ref:function(e){t.downloadLink=e},download:"portrait.png"},c.a.createElement(x.a,{onClick:function(){return t.download()}},"Download"))),c.a.createElement("div",null,c.a.createElement(E,null,c.a.createElement(L,null,"Skin color variance"),c.a.createElement("input",{type:"range",min:"6",max:y.length,step:"6",value:r,onChange:function(e){return t.setState({skinVariance:parseInt(e.target.value)})}})),c.a.createElement(E,null,c.a.createElement(L,null,"Hair color variance"),c.a.createElement("input",{type:"range",min:"6",max:y.length,step:"6",value:n,onChange:function(e){return t.setState({hairVariance:parseInt(e.target.value)})}})),c.a.createElement(E,null,c.a.createElement(L,null,"Clothing color variance"),c.a.createElement("input",{type:"range",min:"6",max:y.length,step:"6",value:a,onChange:function(e){return t.setState({clothingVariance:parseInt(e.target.value)})}}))))},e}(i.Component);e.default=k}}]);
//# sourceMappingURL=1-52a34c2c9f87e04ff11f.js.map