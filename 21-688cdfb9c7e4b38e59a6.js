(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"2N7r":function(e,t,n){e.exports=n.p+"static/hair-face-689c5cd5c4e660666d6e7c503bfcef70.png"},"2dL2":function(e,t,n){e.exports=n.p+"static/hair-back-1aa2b6c2cd2af370e1fa208c4d5fb85d.png"},"8Rr9":function(e,t,n){e.exports=n.p+"static/accessory-front-e032f74a6c4b9a8b300483b53ffde18b.png"},Fr2y:function(e,t,n){e.exports=n.p+"static/heads-3a4387a375a9f322af1bb17bbec3eb2e.png"},In09:function(e,t,n){e.exports=n.p+"static/eyes-1d403e0361ec627daed5887e6f74c0ae.png"},KPUV:function(e,t,n){e.exports=n.p+"static/bodies-ee419526cef3852e1c90d300faec2634.png"},LoA0:function(e,t,n){e.exports=n.p+"static/mouths-d4f2dbfb962cd78670c184372ed5f0c8.png"},RSr4:function(e,t,n){e.exports=n.p+"static/noses-a46f7deda35adb3a76e2f62ac3985ddb.png"},T744:function(e,t,n){"use strict";n.r(t);n("a1Th"),n("Btvt"),n("I5cv"),n("pIFo");var a=n("q1tI"),r=n.n(a),i=n("vOnD"),c=n("wl2n"),o=(n("VRzm"),n("o0o1")),l=n.n(o),u=(n("ls82"),function(e,t,n){var a=Math.floor(e.width/t),r=Math.floor(e.height/n);return{image:e,size:a*r,sprite:function(r){var i=r%a,c=Math.floor(r/a),o=document.createElement("canvas");return o.width=t,o.height=n,o.getContext("2d").drawImage(e,i*t,c*n,t,n,0,0,t,n),o}}});n("rGqo"),n("yt8O"),n("XfO3");function s(e,t,n,a,r,i,c){try{var o=e[i](c),l=o.value}catch(u){return void n(u)}o.done?t(l):Promise.resolve(l).then(a,r)}var f,d=function(e){return new Promise((function(t){var n=new Image;n.addEventListener("load",(function(){return t(n)})),n.src=e}))},p=function(){var e,t=(e=l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f||f.length!==t.length){e.next=2;break}return e.abrupt("return",f);case 2:return e.next=4,Promise.all(t.map(d));case 4:return n=e.sent,f=n,e.abrupt("return",f);case 7:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function c(e){s(i,a,r,c,o,"next",e)}function o(e){s(i,a,r,c,o,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}(),h=function(e,t){var n=document.createElement("canvas");n.width=e.width,n.height=e.height;var a=n.getContext("2d");return a.fillStyle=t,a.fillRect(0,0,n.width,n.height),a.globalCompositeOperation="multiply",a.drawImage(e,0,0),a.globalCompositeOperation="destination-in",a.drawImage(e,0,0),n},m=function(e){var t=new Date,n=e.canvas.width,a=e.canvas.height;return setInterval((function(){var r=parseInt((new Date-t)/1e3*16)/16;e.save(),e.clearRect(0,0,n,a),e.translate(n/2,a/2),e.rotate(2*Math.PI*r);for(var i=0;i<16;i++)e.beginPath(),e.rotate(2*Math.PI/16),e.moveTo(15,0),e.lineTo(25,0),e.lineWidth=2,e.strokeStyle="rgba(0,0,0,"+i/16+")",e.stroke();e.restore()}),1e3/30)},g=n("ucyK");function v(e,t,n,a,r,i,c){try{var o=e[i](c),l=o.value}catch(u){return void n(u)}o.done?t(l):Promise.resolve(l).then(a,r)}var b=function(e){return Math.floor(Math.random()*e)},w=function(e){return function(t){return e[b(Math.min(t,e.length))]}},y=function(e){switch(e){case"lineart":return w(["#ffffff"]);case"greyscale":return w(g.b);default:return w(g.a)}},x=function(){var e,t=(e=l.a.mark((function e(t,a,r,i,c){var o,s,f,d,g,v,w,x,I,E,k,C,V,P,S,L,z,M,R,_,N,D,O,G,F,A,K,T,H,J,U,W,q;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===a&&(a=12),void 0===r&&(r=24),void 0===i&&(i=32),void 0===c&&(c="colors"),o=t.getContext("2d"),s=m(o),e.next=8,p([n("Fr2y"),n("In09"),n("RSr4"),n("LoA0"),n("W/gH"),n("2dL2"),n("2N7r"),n("KPUV"),n("VNtL"),n("8Rr9"),n("pDVt")]);case 8:f=e.sent,d=f[0],g=f[1],v=f[2],w=f[3],x=f[4],I=f[5],E=f[6],k=f[7],C=f[8],V=f[9],P=f[10],clearInterval(s),o.fillStyle="#ffffff",o.fillRect(0,0,t.width,t.height),S=y(c),L=S(a),z=S(r),M=S(i),R=S(i),_=u(d,512,512),N=u(g,512,512),D=u(v,512,512),O=u(w,512,512),G=u(x,512,512),F=u(I,512,512),A=u(E,512,512),K=u(k,512,512),T=u(C,512,512),H=u(V,512,512),J=u(P,512,512),U=b(G.size),W=b(K.size),q=b(H.size),o.drawImage(h(J.sprite(q),R),0,0),o.drawImage(h(F.sprite(U),z),0,0),o.drawImage(h(T.sprite(W),L),0,0),o.drawImage(h(K.sprite(W),M),0,0),o.drawImage(h(_.sprite(b(_.size)),L),0,0),o.drawImage(O.sprite(b(O.size)),0,0),o.drawImage(N.sprite(b(N.size)),0,0),Math.random()<.1&&o.drawImage(h(A.sprite(b(8)),z),0,0),o.drawImage(h(D.sprite(b(D.size)),L),0,0),o.drawImage(h(G.sprite(U),z),0,0),o.drawImage(h(H.sprite(q),R),0,0);case 53:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function c(e){v(i,a,r,c,o,"next",e)}function o(e){v(i,a,r,c,o,"throw",e)}c(void 0)}))});return function(e,n,a,r,i){return t.apply(this,arguments)}}(),I=n("CJNR");function E(){var e=C(["\n        font-size: 0.9rem;\n    "]);return E=function(){return e},e}function k(){var e=C(["\n        width: 300px;\n        height: 300px;\n    "]);return k=function(){return e},e}function C(e,t){return t||(t=e.slice(0)),e.raw=t,e}var V=i.c.canvas.withConfig({displayName:"PortraitGenerator__Canvas",componentId:"ducuoy-0"})(["width:512px;height:512px;",""],c.a.phone(k())),P=i.c.div.withConfig({displayName:"PortraitGenerator__GeneratorOption",componentId:"ducuoy-1"})(["display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:0.5rem 0;",""],c.a.phone(E())),S=i.c.label.withConfig({displayName:"PortraitGenerator__OptionLabel",componentId:"ducuoy-2"})(["display:inline-block;width:16rem;"]),L=function(e){var t,n;n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a;a=i;function i(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={skinVariance:12,hairVariance:24,clothingVariance:g.a.length,fillStyle:"colors"},t}var c=i.prototype;return c.componentDidMount=function(){this.draw()},c.draw=function(){var e=this.state,t=e.skinVariance,n=e.hairVariance,a=e.clothingVariance,r=e.fillStyle;x(this.canvas,t,n,a,r)},c.download=function(){var e=this.canvas.toDataURL("image/png").replace("image/png","image/octet-stream");this.downloadLink.setAttribute("href",e)},c.render=function(){var e=this,t=this.state,n=t.skinVariance,a=t.hairVariance,i=t.clothingVariance,c=t.fillStyle;return r.a.createElement("div",null,r.a.createElement(V,{ref:function(t){e.canvas=t},width:"512",height:"512"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement(I.a,{onClick:function(){return e.draw()}},"New portrait")," ",r.a.createElement("a",{ref:function(t){e.downloadLink=t},download:"portrait.png"},r.a.createElement(I.a,{onClick:function(){return e.download()}},"Download"))),r.a.createElement("div",null,r.a.createElement(P,null,r.a.createElement(S,null,"Fill style"),r.a.createElement("select",{checked:g.a,value:c,onChange:function(t){return e.setState({fillStyle:t.target.value})}},r.a.createElement("option",{value:"colors"},"Colors"),r.a.createElement("option",{value:"greyscale"},"Greyscale"),r.a.createElement("option",{value:"lineart"},"Lineart"))),"colors"==c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null,r.a.createElement(S,null,"Skin color variance"),r.a.createElement("input",{type:"range",min:"6",max:g.a.length,step:"6",value:n,onChange:function(t){return e.setState({skinVariance:parseInt(t.target.value)})}})),r.a.createElement(P,null,r.a.createElement(S,null,"Hair color variance"),r.a.createElement("input",{type:"range",min:"6",max:g.a.length,step:"6",value:a,onChange:function(t){return e.setState({hairVariance:parseInt(t.target.value)})}})),r.a.createElement(P,null,r.a.createElement(S,null,"Clothing color variance"),r.a.createElement("input",{type:"range",min:"6",max:g.a.length,step:"6",value:i,onChange:function(t){return e.setState({clothingVariance:parseInt(t.target.value)})}})))))},i}(a.Component);t.default=L},VNtL:function(e,t,n){e.exports=n.p+"static/bodies-skin-637f269fc0a3fc1df5980f4ba66a9cbc.png"},"W/gH":function(e,t,n){e.exports=n.p+"static/hair-front-317437961cb5b9c3d537123f0c8b418a.png"},pDVt:function(e,t,n){e.exports=n.p+"static/accessory-back-87c70fc4c5159d2fdd6d209e31f3eb53.png"},ucyK:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=["#ffffff","#f6f6f6","#e4e4e4","#b6b6b6","#929292","#686868","#454545","#393939"],r=["#fbd1bf","#cb977f","#db6f56","#f0d0c8","#c19877","#956d4d","#633728","#5b3735","#eb9840","#e2deb5","#f7e1e1","#7e675f","#eee476","#87db73","#90daef","#d37b2d","#f7738c","#e24261","#b582d6","#bab163","#a8d676","#698b98","#58666b","#66586b","#e4e4e4","#b6b6b6","#929292","#686868","#454545","#393939","#5ff892","#5ec9c5","#fcc919","#30a4ee","#d651ee","#fa427a","#6554ce","#433b73","#683b73","#183f3a","#3e593e","#c3e0c1"]}}]);
//# sourceMappingURL=21-688cdfb9c7e4b38e59a6.js.map