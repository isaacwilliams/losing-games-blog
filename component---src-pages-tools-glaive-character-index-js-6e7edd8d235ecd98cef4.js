(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{133:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(177),i=(n(31),n(237),n(6)),l=n.n(i),c=(n(238),n(69),n(66),n(47),n(67),n(162)),s=n.n(c),u=(n(156),n(163)),m=n.n(u),d=(n(30),n(240)),p=n.n(d),h=n(168),f=n(136),g=n(167),b=f.c.div.withConfig({displayName:"components__CharacterAppWrapper",componentId:"sc-1brh4ec-0"})(["p{margin:1em 0;}ul{li{margin:0.25em 0;}}strong{font-weight:600;}"]),v=f.c.div.withConfig({displayName:"components__CharacterDetails",componentId:"sc-1brh4ec-1"})(["margin-bottom:2em;"]),y=f.c.header.withConfig({displayName:"components__Header",componentId:"sc-1brh4ec-2"})(["display:flex;justify-content:space-between;margin-top:2rem;margin-bottom:2rem;@media (max-width:42rem){flex-direction:column;align-items:flex-start;}"]),w=f.c.h2.withConfig({displayName:"components__Name",componentId:"sc-1brh4ec-3"})(["font-size:1.8rem;font-weight:600;flex-shrink:1;"]),E=f.c.div.withConfig({displayName:"components__Controls",componentId:"sc-1brh4ec-4"})(["display:flex;flex-wrap:nowrap;margin-top:0.25em;height:1.5em;flex-shrink:0;"]),A=Object(f.c)(g.a).withConfig({displayName:"components__RerollButton",componentId:"sc-1brh4ec-5"})(["font-size:0.8em;"]),C=Object(f.c)(g.a).withConfig({displayName:"components__SwitchStatsButton",componentId:"sc-1brh4ec-6"})(["font-size:0.8em;background:white;text-decoration:underline;color:grey;&:hover{background:white;color:black;}"]),k=f.c.div.withConfig({displayName:"components__ColumnContainer",componentId:"sc-1brh4ec-7"})(["display:flex;@media (max-width:42rem){display:block;}"]),I=f.c.div.withConfig({displayName:"components__Column",componentId:"sc-1brh4ec-8"})(["width:50%;padding-right:1rem;@media (max-width:42rem){width:auto;margin-bottom:2em;padding-right:0;}"]),x=f.c.h3.withConfig({displayName:"components__ColumnTitle",componentId:"sc-1brh4ec-9"})(["font-weight:600;border-bottom:1px solid black;margin-bottom:1em;"]),S=function(e){return Math.floor(Math.random()*e)+1},R=function(e){return function(t){return Object(h.sum)(Object(h.times)(function(){return S(t)},e))}},j=function(){return R(2)(6)+3},P=function(){return Object(h.min)(Object(h.times)(function(){return S(3)},3))},N=function(e){return Math.floor(e/3)-3},T=function(e){return function(e){return e>=0?"+"+e:""+e}(N(e))},L=function(e){return e[Math.floor(Math.random()*e.length)]},z=function(e){return void 0===e&&(e={columns:!0,cast:!0}),function(t){return new Promise(function(n,a){p()(t,e,function(e,t){if(e)return a(e);n(t)})})}},O=function(){var e=m()(s.a.mark(function e(t){var n,a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.text();case 5:return a=e.sent,e.next=8,z()(a);case 8:return r=e.sent,e.abrupt("return",r);case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=m()(s.a.mark(function e(){var t,n,a,r,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([O("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-Gk5zIkpo2A9AwhSQKnCEprv-g2vk7vHP8qWxJFm-c6osL00jvjtR8gsCbxwlthulAJh3f5mXqSPk/pub?gid=153117320&single=true&output=csv"),O("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-Gk5zIkpo2A9AwhSQKnCEprv-g2vk7vHP8qWxJFm-c6osL00jvjtR8gsCbxwlthulAJh3f5mXqSPk/pub?gid=1613277797&single=true&output=csv"),O("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-Gk5zIkpo2A9AwhSQKnCEprv-g2vk7vHP8qWxJFm-c6osL00jvjtR8gsCbxwlthulAJh3f5mXqSPk/pub?gid=828688644&single=true&output=csv"),O("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-Gk5zIkpo2A9AwhSQKnCEprv-g2vk7vHP8qWxJFm-c6osL00jvjtR8gsCbxwlthulAJh3f5mXqSPk/pub?gid=674498928&single=true&output=csv")]);case 2:return t=e.sent,n=t[0],a=t[1],r=t[2],o=t[3],e.abrupt("return",{backgrounds:n,startingGear:a,debtholders:r,names:o});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),W=/(?![^)(]*\([^)(]*?\)\)),(?![^\(]*\))/,B=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={loaded:!1,statType:"glog"},t}l()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.setState({showKnaveStats:window.location.hash.indexOf("knave")>0}),_().then(function(t){var n=t.backgrounds,a=t.startingGear,r=t.names,o=t.debtholders;e.setState({loaded:!0,backgrounds:n,startingGear:a,names:r,debtholders:o}),e.rollCharacter(e.state.statType)})},n.rollCharacter=function(e){var t=this.state,n=t.backgrounds,a=t.startingGear,r=t.names,o=t.debtholders,i=S(10),l=S(10),c=S(10),s=S(10),u=L(n),m={statType:e,stats:"knave"===e?{str:P(),dex:P(),con:P(),int:P(),wis:P(),cha:P()}:function(){var e={str:j(),dex:j(),con:j(),int:j(),wis:j(),cha:j()},t=Object.entries(e).reduce(function(e,t){var n=e[0],a=e[1],r=t[0],o=t[1];return o<a?[r,o]:[n,a]},["",1/0]),n=t[0],a=t[1];return e[n]=Math.max(a,j()),e}(),knaveHp:S(8),name:function(e){var t=L(e)["Given name"];"[Roll on surnames]"===t&&(t=L(e).Surname,console.log("picked from surname",t));var n=L(e).Surname;return"[Roll on given names]"===n&&(n=L(e)["Given name"],console.log("picked from given",n)),t+" "+n}(r),failedCareer:u["Failed career"],items:[u["Item 1"],u["Item 2"],"------","Torches","Box of matches","Rations","------","Equipment rolls: "+i+", "+l+", "+c+", "+s,"------"].concat(function(e){return function(t,n,a,r){return e[t-1].Weapon.split(W).concat(e[n-1].Armour.split(W),e[a-1].Item.split(W),[r+" pennies"])}}(a)(i,l,c,s)),debt:{holder:L(o),owed:10*(R(2)(6)+3)}};this.setState({character:m})},n.switchStatType=function(e){this.setState({statType:e}),this.rollCharacter(e)},n.render=function(){var e=this,t=this.state,n=t.loaded,a=t.character;if(!n||!a)return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Loading..."));var o=a.items,i=a.failedCareer,l=a.name,c=a.stats,s=a.statType,u=a.debt,m=Object(h.startsWith)("Special:"),d=o.filter(m).map(function(e){return e.replace("Special:","")})[0],p=o.filter(Object(h.negate)(m));return r.a.createElement(b,null,r.a.createElement(v,null,r.a.createElement(y,null,r.a.createElement(w,null,l),r.a.createElement(E,null,r.a.createElement(A,{onClick:function(){return e.rollCharacter(s)}},"Roll again")," ","knave"===s?r.a.createElement(C,{onClick:function(){return e.switchStatType("glog")}},"Switch to GLOG stats"):r.a.createElement(C,{onClick:function(){return e.switchStatType("knave")}},"Switch to Knave stats"))),r.a.createElement("p",null,"Failed career: ",r.a.createElement("strong",null,i)),d&&r.a.createElement("p",null,"Special: ",r.a.createElement("strong",null,d)),r.a.createElement("p",null,"Debt: owes ",r.a.createElement("strong",null,"£",u.owed)," to a ",r.a.createElement("strong",null,u.holder["Debt-holder"]),r.a.createElement("span",{className:"detail"}," - ",u.holder["Debt-holder detail"]))),r.a.createElement(k,null,"knave"===s?r.a.createElement(I,null,r.a.createElement(x,null,"Stats"),r.a.createElement("ul",null,r.a.createElement("li",null,"Str: ",c.str," | ",c.str+10),r.a.createElement("li",null,"Dex: ",c.dex," | ",c.dex+10),r.a.createElement("li",null,"Con: ",c.con," | ",c.con+10),r.a.createElement("li",null,"Int: ",c.int," | ",c.int+10),r.a.createElement("li",null,"Wis: ",c.wis," | ",c.wis+10),r.a.createElement("li",null,"Cha: ",c.cha," | ",c.cha+10)),r.a.createElement("ul",null,r.a.createElement("li",null,"HP: ",a.knaveHp))):r.a.createElement(I,null,r.a.createElement(x,null,"Stats"),r.a.createElement("ul",null,r.a.createElement("li",null,"Str: ",c.str," (",T(c.str),")"),r.a.createElement("li",null,"Dex: ",c.dex," (",T(c.dex),")"),r.a.createElement("li",null,"Con: ",c.con," (",T(c.con),")"),r.a.createElement("li",null,"Int: ",c.int," (",T(c.int),")"),r.a.createElement("li",null,"Wis: ",c.wis," (",T(c.wis),")"),r.a.createElement("li",null,"Cha: ",c.cha," (",T(c.cha),")")),r.a.createElement("ul",null,r.a.createElement("li",null,"Attack: 11"),r.a.createElement("li",null,"HP: ",c.con-4),r.a.createElement("li",null,"Move: ",12+N(c.dex)),r.a.createElement("li",null,"Stealth: ",5+N(c.dex)),r.a.createElement("li",null,"Initiative: ",c.wis),r.a.createElement("li",null,"Save: ",6+N(c.dex)))),r.a.createElement(I,null,r.a.createElement(x,null,"Gear"),r.a.createElement("p",null,"Inventory slots: ","knave"===s?c.str+10:c.str),r.a.createElement("ul",null,p.map(function(e,t){return r.a.createElement("li",{key:t},e)})))))},t}(a.Component);n.d(t,"frontmatter",function(){return q});var q={title:"Glaive character",path:"/tools/glaive-character",date:"2018-11-20",description:"Character auto-roller for my GLoG/Knave mashup"};t.default=function(){return r.a.createElement(o.a,{data:q},r.a.createElement(B,null))}},138:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var a="red",r="black",o="black",i="grey"},139:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var a=n(136),r=Object(a.b)(["@import url('https://fonts.googleapis.com/css?family=Lato:400,400i,700|Vollkorn:400i,700,900');"]),o=Object(a.b)(["font-family:'Lato',sans-serif;"]),i=Object(a.b)(["font-family:'Vollkorn',serif;font-weight:700;"]);Object(a.b)([""," font-size:1rem;border:none;"],o)},140:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(137),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(142),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(29);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},141:function(e,t,n){"use strict";n.d(t,"b",function(){return o});var a=n(136),r=n(139),o=Object(a.b)([""," font-size:1rem;border:none;"],r.a);t.a=Object(a.b)(["html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}"])},142:function(e,t,n){var a;e.exports=(a=n(144))&&a.default||a},143:function(e){e.exports={data:{site:{siteMetadata:{title:"Losing Games"}}}}},144:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(46),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},145:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAATBJREFUWIXFl90ShCAIhaFp3/+Bc4a9MBXJFJCdPTdtppxvifwB+LMQAICI7js82bMU7HXKBgRIfSNRM80wURBnF7vFh4Pf3L8JEKkOjDB/xq06BBXvcAVAlLFXbREQPcBTOxBP8wZRX0kuwtUAgM991daEKhZCn4EkOnBZMmH6I/IV7EKYsziqAS+E6xW+FaEVwl0/vAhH0gSWYCbz1WeoyYTLnEPMMlA0y8RIavNVBopmmXCZF2kBtBDWCcsE8BNZADR1YF47tACWIjRBaABWc8HW2rEC0E5EbogZgHZ63VrA3gCsc7sbYgTgXVhcEBJgd1dkhuAAUVsyE0QGIJIdvOZmiJYBeXDwm68hmNchHmCQ+TtE7zH4CoiQdYo4mqVB3KqyIckHhT8cToM97PoC3rJ9Nokm0lIAAAAASUVORK5CYII="},146:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAJdJREFUOI2lk9EOAyEIBAfj/f8Hl4Q+nLbIAUlT3mSZFUXFYHKG0sd8LswUEQOulatMNvzCTAAGwIJvIdnlAW9GZI6VvFxhZjKD9mH21mVBYuw13R1oECKQwr6DrlUfBwz7Er+RdVLCmcHPEQ26I6Qj9gbVJNoRj5CoxliaiPWw+uKsZlQC522X7+Q2WB+jgHOTxci/3/kNTV4zMcSMeKYAAAAASUVORK5CYII="},147:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(153),i=n.n(o),l=n(143),c=(n(4),n(148)),s=n.n(c),u=n(140),m=n(136),d=n(141),p=n(139),h=n(138);function f(){var e=i()(["\n    ","\n    ","\n\n    body {\n        ","\n        font-size: 18px;\n        line-height: 1.33;\n        color: ",";\n    }\n\n    a {\n        color: ",";\n\n        &:hover {\n            color: ",";\n        }\n    }\n"]);return f=function(){return e},e}var g=Object(m.a)(f(),d.a,p.c,p.a,h.a,h.c,h.d),b=function(e){var t=e.children;return r.a.createElement(u.StaticQuery,{query:"3388207342",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"A blog about D&D & other games"}]},r.a.createElement("html",{lang:"en"}),r.a.createElement("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:n(145)}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:n(146)})),r.a.createElement(g,null),t({data:e}))},data:l})},v=m.c.div.withConfig({displayName:"ContentContainer",componentId:"sc-1m59fxh-0"})(["margin:0 auto;max-width:41rem;@media (max-width:42rem){padding:0 2rem;}"]),y=(n(28),n(150),n(6)),w=n.n(y),E=n(154),A=m.c.button.withConfig({displayName:"DiceRollerForm__RollerButton",componentId:"sc-1xqna79-0"})(["display:inline-block;position:relative;"," outline:none;cursor:pointer;background:white;width:1.5rem;height:1.2rem;padding:0;margin:0;font-size:0;&:before{top:-8px;left:5px;position:absolute;font-size:1.5rem;content:'⚄';cursor:pointer;pointer-events:none;}&:hover{color:",";}"],d.b,h.c),C=m.c.form.withConfig({displayName:"DiceRollerForm__Form",componentId:"sc-1xqna79-1"})(["display:flex;"]),k=m.c.input.withConfig({displayName:"DiceRollerForm__Input",componentId:"sc-1xqna79-2"})([""," width:4rem;font-size:0.8rem;outline:none;margin-right:0.5em;margin-top:-0.1em;padding:0.2em;text-align:right;border:1px solid white;&:hover{border-color:lightgrey;}&:focus{border-color:black;}"],d.b),I=function(e){var t=e.query,n=e.setQuery,a=e.rollDice,o=e.registerInput;return r.a.createElement(C,{onSubmit:function(e){e.preventDefault(),a(t)}},r.a.createElement(k,{type:"text",placeholder:"1d20",ref:o,value:t,onChange:function(e){return n(e.target.value)}}),r.a.createElement(A,null,"Roll"))},x=m.c.div.withConfig({displayName:"DiceRollerResult__Result",componentId:"sc-1lx22ng-0"})(["padding:0.2rem 0.4rem;font-size:0.8rem;width:100%;"]),S=m.c.span.withConfig({displayName:"DiceRollerResult__ResultQuery",componentId:"sc-1lx22ng-1"})(["color:",";"],h.b),R=m.c.span.withConfig({displayName:"DiceRollerResult__ResultTotal",componentId:"sc-1lx22ng-2"})(["font-weight:600;"]),j=function(e){var t,n=e.result,a=e.query,o=(t=n.rolls,function(e){return e<t.length-1?" + ":" = "});return r.a.createElement(x,null,r.a.createElement(S,null,a,": "),n.rolls.length>1?n.rolls.map(function(e,t){return e+" "+o(t)}):"",r.a.createElement(R,null,n.total))},P=m.c.div.withConfig({displayName:"DiceRoller__RollerContainer",componentId:"giqrmu-0"})(["position:relative;height:1em;"]),N=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={show:!1,result:null,query:""},t}w()(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){var n=this;!t.result&&this.state.result&&(this.t=setTimeout(function(){n.setState({result:null}),n.input.focus()},3e3))},n.componentWillUnmount=function(){this.t&&clearTimeout(this.t)},n.render=function(){var e=this;return r.a.createElement(P,null,this.state.result?r.a.createElement(j,{result:this.state.result,query:this.state.query||"1d20"}):r.a.createElement(I,{query:this.state.query,setQuery:function(t){return e.setState({query:t})},rollDice:function(t){var n=t.length>0?t:"1d20",a=Object(E.roll)(n);a&&e.setState({result:a})},registerInput:function(t){e.input=t}}))},t}(a.Component),T=m.c.header.withConfig({displayName:"Header__HeaderContainer",componentId:"leoys2-0"})(["padding:1rem 0;"]),L=Object(m.b)(["&:hover{&:before{transform:rotate(-90deg);}}"]),z=(Object(m.b)([""]),m.c.h1.withConfig({displayName:"Header__SiteTitle",componentId:"leoys2-1"})(["position:relative;font-weight:600;"," &:before{"," position:absolute;left:-1.5rem;top:-0.1rem;content:'✕';font-weight:400;transform:rotate(0deg);transition:transform 0.25s ease-in-out;}",""],p.b,p.a,function(e){return e.isIndexPage?null:L})),O=m.c.div.withConfig({displayName:"Header__HeaderAlignment",componentId:"leoys2-2"})(["display:flex;justify-content:space-between;"]),_=m.c.nav.withConfig({displayName:"Header__HeaderNav",componentId:"leoys2-3"})(["display:flex;ul{display:flex;align-items:center;li{margin-right:1em;font-size:0.8rem;}}"]),W=Object(m.c)(u.Link).withConfig({displayName:"Header__NavLink",componentId:"leoys2-4"})(["position:relative;&:before{position:absolute;left:-1em;content:'✧';text-decoration:none;color:black;}"]),B=function(e){var t=e.siteTitle,n=e.isIndexPage;return r.a.createElement(T,null,r.a.createElement(v,null,r.a.createElement(O,null,r.a.createElement(z,{isIndexPage:n},r.a.createElement(u.Link,{to:"/"},t)),r.a.createElement(_,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(W,{to:"/tools"},"Tools"))),r.a.createElement(N,null)))))},q=m.c.footer.withConfig({displayName:"Footer__FooterContainer",componentId:"twnpg-0"})(["padding:5rem 0 3rem 0;font-size:0.9rem;color:",";a{color:",";}"],h.b,h.b),H=function(e){e.siteTitle;return r.a.createElement(q,null,r.a.createElement(v,null,"© ",(new Date).getFullYear()," Isaac Williams"," — ",r.a.createElement("a",{href:"http://isaacwilliams.net"},"Website")," — ",r.a.createElement("a",{href:"https://twitter.com/isaacwilliams"},"Twitter")))};t.a=function(e){var t=e.children,n=e.isIndexPage;return r.a.createElement(b,null,function(e){var a=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{siteTitle:a.site.siteMetadata.title,isIndexPage:n}),r.a.createElement(v,null,t),r.a.createElement(H,null))})}},151:function(e,t,n){"use strict";var a=n(136),r=n(139);t.a=a.c.h1.withConfig({displayName:"PageTitle",componentId:"nom89n-0"})(["display:flex;align-items:center;justify-content:center;width:100%;"," text-align:center;font-weight:900;font-size:2.5rem;&:before,&:after{"," position:relative;display:inline-block;font-size:1rem;content:'✳︎ ✳︎ ✳︎';font-weight:400;white-space:nowrap;}&:before{margin-right:1em;}&:after{margin-left:1em;}@media (max-width:42rem){flex-direction:column;&:before{margin-right:0;margin-bottom:1em;}&:after{margin-left:0;margin-top:1em;}}"],r.b,r.a)},159:function(e,t,n){"use strict";var a=n(136);t.a=a.c.header.withConfig({displayName:"PageHeader",componentId:"sc-1p8keor-0"})(["padding:2rem 4rem;margin-bottom:1rem;"])},167:function(e,t,n){"use strict";var a=n(136),r=n(141),o=n(138),i=a.c.button.withConfig({displayName:"Button",componentId:"sc-3uo7g7-0"})([""," padding:0.25em 0.75em;font-weight:600;background:",";color:white;border-radius:3px;cursor:pointer;outline:none;&:hover{background:",";}"],r.b,o.d,o.c);t.a=i},177:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(136),i=n(148),l=n.n(i),c=n(147),s=n(151),u=Object(o.c)(s.a).withConfig({displayName:"ToolPageTitle",componentId:"et7hly-0"})(["&:before,&:after{content:'✧ ✧ ✧';}"]),m=n(159),d=o.c.div.withConfig({displayName:"ToolPage__ToolDescription",componentId:"sc-1ds8lef-0"})(["color:grey;text-align:center;margin-top:0.25rem;"]);t.a=function(e){var t=e.data,n=t.title,a=t.description,o=e.children;return r.a.createElement(c.a,null,r.a.createElement(l.a,{title:"Losing Games - "+n}),r.a.createElement(m.a,null,r.a.createElement(u,null,n),r.a.createElement(d,null,a)),o)}},244:function(e,t){},246:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-tools-glaive-character-index-js-6e7edd8d235ecd98cef4.js.map