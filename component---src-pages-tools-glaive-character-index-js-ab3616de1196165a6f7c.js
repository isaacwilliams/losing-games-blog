(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{133:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(171),i=(n(31),n(227),n(6)),l=n.n(i),c=(n(228),n(69),n(66),n(47),n(67),n(159)),s=n.n(c),u=(n(152),n(160)),m=n.n(u),d=(n(30),n(230)),p=n.n(d),f=n(192),h=n(135),g=n(164),b=h.c.div.withConfig({displayName:"components__CharacterAppWrapper",componentId:"sc-1brh4ec-0"})(["p{margin:1em 0;}ul{li{margin:0.25em 0;}}strong{font-weight:600;}"]),v=h.c.div.withConfig({displayName:"components__CharacterDetails",componentId:"sc-1brh4ec-1"})(["margin-bottom:2em;"]),y=h.c.header.withConfig({displayName:"components__Header",componentId:"sc-1brh4ec-2"})(["display:flex;justify-content:space-between;margin-top:2rem;margin-bottom:2rem;@media (max-width:42rem){flex-direction:column;align-items:flex-start;}"]),w=h.c.h2.withConfig({displayName:"components__Name",componentId:"sc-1brh4ec-3"})(["font-size:1.8rem;font-weight:600;flex-shrink:1;"]),E=h.c.div.withConfig({displayName:"components__Controls",componentId:"sc-1brh4ec-4"})(["display:flex;flex-wrap:nowrap;margin-top:0.25em;height:1.5em;flex-shrink:0;"]),x=Object(h.c)(g.a).withConfig({displayName:"components__RerollButton",componentId:"sc-1brh4ec-5"})(["font-size:0.8em;"]),C=Object(h.c)(g.a).withConfig({displayName:"components__SwitchStatsButton",componentId:"sc-1brh4ec-6"})(["font-size:0.8em;background:white;text-decoration:underline;color:grey;&:hover{background:white;color:black;}"]),k=h.c.div.withConfig({displayName:"components__ColumnContainer",componentId:"sc-1brh4ec-7"})(["display:flex;@media (max-width:42rem){display:block;}"]),I=h.c.div.withConfig({displayName:"components__Column",componentId:"sc-1brh4ec-8"})(["width:50%;padding-right:1rem;@media (max-width:42rem){width:auto;margin-bottom:2em;padding-right:0;}"]),_=h.c.h3.withConfig({displayName:"components__ColumnTitle",componentId:"sc-1brh4ec-9"})(["font-weight:600;border-bottom:1px solid black;margin-bottom:1em;"]),S=function(e){return Math.floor(Math.random()*e)+1},q=function(e){return function(t){return Object(f.sum)(Object(f.times)(function(){return S(t)},e))}},j=function(){return q(2)(6)+3},N=function(){return Object(f.min)(Object(f.times)(function(){return S(3)},3))},R=function(e){return Math.floor(e/3)-3},P=function(e){return function(e){return e>=0?"+"+e:""+e}(R(e))},T=function(e){return e[Math.floor(Math.random()*e.length)]},O=function(e){return void 0===e&&(e={columns:!0,cast:!0}),function(t){return new Promise(function(n,a){p()(t,e,function(e,t){if(e)return a(e);n(t)})})}},A=function(){var e=m()(s.a.mark(function e(t){var n,a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.text();case 5:return a=e.sent,e.next=8,O()(a);case 8:return r=e.sent,e.abrupt("return",r);case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=m()(s.a.mark(function e(){var t,n,a,r,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([A("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-Gk5zIkpo2A9AwhSQKnCEprv-g2vk7vHP8qWxJFm-c6osL00jvjtR8gsCbxwlthulAJh3f5mXqSPk/pub?gid=153117320&single=true&output=csv"),A("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-Gk5zIkpo2A9AwhSQKnCEprv-g2vk7vHP8qWxJFm-c6osL00jvjtR8gsCbxwlthulAJh3f5mXqSPk/pub?gid=1613277797&single=true&output=csv"),A("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-Gk5zIkpo2A9AwhSQKnCEprv-g2vk7vHP8qWxJFm-c6osL00jvjtR8gsCbxwlthulAJh3f5mXqSPk/pub?gid=828688644&single=true&output=csv"),A("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-Gk5zIkpo2A9AwhSQKnCEprv-g2vk7vHP8qWxJFm-c6osL00jvjtR8gsCbxwlthulAJh3f5mXqSPk/pub?gid=674498928&single=true&output=csv")]);case 2:return t=e.sent,n=t[0],a=t[1],r=t[2],o=t[3],e.abrupt("return",{backgrounds:n,startingGear:a,debtholders:r,names:o});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),D=/(?![^)(]*\([^)(]*?\)\)),(?![^\(]*\))/,z=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={loaded:!1,statType:"glog"},t}l()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.setState({showKnaveStats:window.location.hash.indexOf("knave")>0}),G().then(function(t){var n=t.backgrounds,a=t.startingGear,r=t.names,o=t.debtholders;e.setState({loaded:!0,backgrounds:n,startingGear:a,names:r,debtholders:o}),e.rollCharacter(e.state.statType)})},n.rollCharacter=function(e){var t=this.state,n=t.backgrounds,a=t.startingGear,r=t.names,o=t.debtholders,i=S(10),l=S(10),c=S(10),s=S(10),u=T(n),m={statType:e,stats:"knave"===e?{str:N(),dex:N(),con:N(),int:N(),wis:N(),cha:N()}:function(){var e={str:j(),dex:j(),con:j(),int:j(),wis:j(),cha:j()},t=Object.entries(e).reduce(function(e,t){var n=e[0],a=e[1],r=t[0],o=t[1];return o<a?[r,o]:[n,a]},["",1/0]),n=t[0],a=t[1];return e[n]=Math.max(a,j()),e}(),knaveHp:S(8),name:function(e){var t=T(e)["Given name"];"[Roll on surnames]"===t&&(t=T(e).Surname,console.log("picked from surname",t));var n=T(e).Surname;return"[Roll on given names]"===n&&(n=T(e)["Given name"],console.log("picked from given",n)),t+" "+n}(r),failedCareer:u["Failed career"],items:[u["Item 1"],u["Item 2"],"------","Torches","Box of matches","Rations","------","Equipment rolls: "+i+", "+l+", "+c+", "+s,"------"].concat(function(e){return function(t,n,a,r){return e[t-1].Weapon.split(D).concat(e[n-1].Armour.split(D),e[a-1].Item.split(D),[r+" pennies"])}}(a)(i,l,c,s)),debt:{holder:T(o),owed:10*(q(2)(6)+3)}};this.setState({character:m})},n.switchStatType=function(e){this.setState({statType:e}),this.rollCharacter(e)},n.render=function(){var e=this,t=this.state,n=t.loaded,a=t.character;if(!n||!a)return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Loading..."));var o=a.items,i=a.failedCareer,l=a.name,c=a.stats,s=a.statType,u=a.debt,m=Object(f.startsWith)("Special:"),d=o.filter(m).map(function(e){return e.replace("Special:","")})[0],p=o.filter(Object(f.negate)(m));return r.a.createElement(b,null,r.a.createElement(v,null,r.a.createElement(y,null,r.a.createElement(w,null,l),r.a.createElement(E,null,r.a.createElement(x,{onClick:function(){return e.rollCharacter(s)}},"Roll again")," ","knave"===s?r.a.createElement(C,{onClick:function(){return e.switchStatType("glog")}},"Switch to GLOG stats"):r.a.createElement(C,{onClick:function(){return e.switchStatType("knave")}},"Switch to Knave stats"))),r.a.createElement("p",null,"Failed career: ",r.a.createElement("strong",null,i)),d&&r.a.createElement("p",null,"Special: ",r.a.createElement("strong",null,d)),r.a.createElement("p",null,"Debt: owes ",r.a.createElement("strong",null,"£",u.owed)," to a ",r.a.createElement("strong",null,u.holder["Debt-holder"]),r.a.createElement("span",{className:"detail"}," - ",u.holder["Debt-holder detail"]))),r.a.createElement(k,null,"knave"===s?r.a.createElement(I,null,r.a.createElement(_,null,"Stats"),r.a.createElement("ul",null,r.a.createElement("li",null,"Str: ",c.str," | ",c.str+10),r.a.createElement("li",null,"Dex: ",c.dex," | ",c.dex+10),r.a.createElement("li",null,"Con: ",c.con," | ",c.con+10),r.a.createElement("li",null,"Int: ",c.int," | ",c.int+10),r.a.createElement("li",null,"Wis: ",c.wis," | ",c.wis+10),r.a.createElement("li",null,"Cha: ",c.cha," | ",c.cha+10)),r.a.createElement("ul",null,r.a.createElement("li",null,"HP: ",a.knaveHp))):r.a.createElement(I,null,r.a.createElement(_,null,"Stats"),r.a.createElement("ul",null,r.a.createElement("li",null,"Str: ",c.str," (",P(c.str),")"),r.a.createElement("li",null,"Dex: ",c.dex," (",P(c.dex),")"),r.a.createElement("li",null,"Con: ",c.con," (",P(c.con),")"),r.a.createElement("li",null,"Int: ",c.int," (",P(c.int),")"),r.a.createElement("li",null,"Wis: ",c.wis," (",P(c.wis),")"),r.a.createElement("li",null,"Cha: ",c.cha," (",P(c.cha),")")),r.a.createElement("ul",null,r.a.createElement("li",null,"Attack: 11"),r.a.createElement("li",null,"HP: ",c.con-4),r.a.createElement("li",null,"Move: ",12+R(c.dex)),r.a.createElement("li",null,"Stealth: ",5+R(c.dex)),r.a.createElement("li",null,"Initiative: ",c.wis),r.a.createElement("li",null,"Save: ",6+R(c.dex)))),r.a.createElement(I,null,r.a.createElement(_,null,"Gear"),r.a.createElement("p",null,"Inventory slots: ","knave"===s?c.str+10:c.str),r.a.createElement("ul",null,p.map(function(e,t){return r.a.createElement("li",{key:t},e)})))))},t}(a.Component);n.d(t,"frontmatter",function(){return H});var H={title:"Glaive character",path:"/tools/glaive-character",date:"2018-11-20",description:"Character auto-roller for my GLoG/Knave mashup"};t.default=function(){return r.a.createElement(o.a,{data:H},r.a.createElement(z,null))}},137:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var a="red",r="black",o="black",i="grey"},138:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var a=n(135),r=Object(a.b)(["@import url('https://fonts.googleapis.com/css?family=Lato:400,400i,700|Open+Sans:700');"]),o=Object(a.b)(["font-family:'Lato',sans-serif;"]),i=Object(a.b)(["font-family:'Open Sans',sans-serif;font-weight:700;"]);Object(a.b)([""," font-size:1rem;border:none;"],o)},139:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(136),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(141),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(29);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},140:function(e,t,n){"use strict";n.d(t,"b",function(){return o});var a=n(135),r=n(138),o=Object(a.b)([""," font-size:1rem;border:none;"],r.a);t.a=Object(a.b)(["html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}"])},141:function(e,t,n){var a;e.exports=(a=n(143))&&a.default||a},142:function(e){e.exports={data:{site:{siteMetadata:{title:"Losing Games"}}}}},143:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(46),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},144:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(149),i=n.n(o),l=n(142),c=(n(4),n(146)),s=n.n(c),u=n(139),m=n(135),d=n(140),p=n(138),f=n(137);function h(){var e=i()(["\n    ","\n    ","\n\n    body {\n        ","\n        font-size: 18px;\n        line-height: 1.33;\n        color: ",";\n    }\n\n    a {\n        color: ",";\n\n        &:hover {\n            color: ",";\n        }\n    }\n"]);return h=function(){return e},e}var g=Object(m.a)(h(),d.a,p.c,p.a,f.a,f.c,f.d),b=function(e){var t=e.children;return r.a.createElement(u.StaticQuery,{query:"3388207342",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(g,null),t({data:e}))},data:l})},v=m.c.div.withConfig({displayName:"ContentContainer",componentId:"sc-1eahtq3-0"})(["margin:0 auto;max-width:41rem;@media (max-width:42rem){padding:0 2rem;}"]),y=(n(28),n(147),n(6)),w=n.n(y),E=n(150),x=m.c.button.withConfig({displayName:"DiceRollerForm__RollerButton",componentId:"sc-1xqna79-0"})(["display:inline-block;position:relative;"," outline:none;cursor:pointer;background:white;width:1.5rem;height:1.2rem;padding:0;margin:0;font-size:0;&:before{top:-5px;left:5px;position:absolute;font-size:1.5rem;content:'⚄';cursor:pointer;pointer-events:none;}&:hover{color:",";}"],d.b,f.c),C=m.c.form.withConfig({displayName:"DiceRollerForm__Form",componentId:"sc-1xqna79-1"})(["display:flex;"]),k=m.c.input.withConfig({displayName:"DiceRollerForm__Input",componentId:"sc-1xqna79-2"})([""," width:4rem;font-size:0.8rem;outline:none;margin-right:0.5em;padding:0.2em;text-align:right;border:1px solid white;&:hover{border-color:lightgrey;}&:focus{border-color:black;}"],d.b),I=function(e){var t=e.query,n=e.setQuery,a=e.rollDice,o=e.registerInput;return r.a.createElement(C,{onSubmit:function(e){e.preventDefault(),a(t)}},r.a.createElement(k,{type:"text",placeholder:"1d20",ref:o,value:t,onChange:function(e){return n(e.target.value)}}),r.a.createElement(x,null,"Roll"))},_=m.c.div.withConfig({displayName:"DiceRollerResult__Result",componentId:"sc-1lx22ng-0"})(["padding:0.2rem 0.4rem;font-size:0.8rem;width:100%;"]),S=m.c.span.withConfig({displayName:"DiceRollerResult__ResultQuery",componentId:"sc-1lx22ng-1"})(["color:",";"],f.b),q=m.c.span.withConfig({displayName:"DiceRollerResult__ResultTotal",componentId:"sc-1lx22ng-2"})(["font-weight:600;"]),j=function(e){var t,n=e.result,a=e.query,o=(t=n.rolls,function(e){return e<t.length-1?" + ":" = "});return r.a.createElement(_,null,r.a.createElement(S,null,a,": "),n.rolls.length>1?n.rolls.map(function(e,t){return e+" "+o(t)}):"",r.a.createElement(q,null,n.total))},N=m.c.div.withConfig({displayName:"DiceRoller__RollerContainer",componentId:"giqrmu-0"})(["position:relative;"]),R=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={show:!1,result:null,query:""},t}w()(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){var n=this;!t.result&&this.state.result&&(this.t=setTimeout(function(){n.setState({result:null}),n.input.focus()},3e3))},n.componentWillUnmount=function(){this.t&&clearTimeout(this.t)},n.render=function(){var e=this;return r.a.createElement(N,null,this.state.result?r.a.createElement(j,{result:this.state.result,query:this.state.query||"1d20"}):r.a.createElement(I,{query:this.state.query,setQuery:function(t){return e.setState({query:t})},rollDice:function(t){var n=t.length>0?t:"1d20",a=Object(E.roll)(n);a&&e.setState({result:a})},registerInput:function(t){e.input=t}}))},t}(a.Component),P=m.c.header.withConfig({displayName:"Header__HeaderContainer",componentId:"sc-9eu2yh-0"})(["padding:1rem 0;"]),T=Object(m.b)(["&:hover{&:before{transform:rotate(-90deg);}}"]),O=(Object(m.b)([""]),m.c.h1.withConfig({displayName:"Header__SiteTitle",componentId:"sc-9eu2yh-1"})(["position:relative;font-weight:600;"," &:before{position:absolute;left:-1.5rem;content:'✕';font-weight:400;transform:rotate(0deg);transition:transform 0.25s ease-in-out;}",""],p.b,function(e){return e.isIndexPage?null:T})),A=m.c.div.withConfig({displayName:"Header__HeaderAlignment",componentId:"sc-9eu2yh-2"})(["display:flex;justify-content:space-between;"]),G=m.c.nav.withConfig({displayName:"Header__HeaderNav",componentId:"sc-9eu2yh-3"})(["display:flex;ul{display:flex;align-items:center;li{margin-right:1em;font-size:0.8rem;}}"]),D=Object(m.c)(u.Link).withConfig({displayName:"Header__NavLink",componentId:"sc-9eu2yh-4"})(["position:relative;&:before{position:absolute;left:-1em;content:'✧';text-decoration:none;color:black;}"]),z=function(e){var t=e.siteTitle,n=e.isIndexPage;return r.a.createElement(P,null,r.a.createElement(v,null,r.a.createElement(A,null,r.a.createElement(O,{isIndexPage:n},r.a.createElement(u.Link,{to:"/"},t)),r.a.createElement(G,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(D,{to:"/tools"},"Tools"))),r.a.createElement(R,null)))))},H=m.c.footer.withConfig({displayName:"Footer__FooterContainer",componentId:"sc-1xqajj9-0"})(["padding:5rem 0 3rem 0;font-size:0.9rem;color:",";a{color:",";}"],f.b,f.b),F=function(e){e.siteTitle;return r.a.createElement(H,null,r.a.createElement(v,null,"© ",(new Date).getFullYear()," Isaac Williams"," — ",r.a.createElement("a",{href:"http://isaacwilliams.net"},"Website")," — ",r.a.createElement("a",{href:"https://twitter.com/isaacwilliams"},"Twitter")))};t.a=function(e){var t=e.children,n=e.isIndexPage;return r.a.createElement(b,null,function(e){var a=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{siteTitle:a.site.siteMetadata.title,isIndexPage:n}),r.a.createElement(v,null,t),r.a.createElement(F,null))})}},155:function(e,t,n){"use strict";var a=n(135),r=n(138);t.a=a.c.h1.withConfig({displayName:"PageTitle",componentId:"nom89n-0"})(["display:flex;align-items:center;justify-content:center;width:100%;"," text-align:center;font-weight:600;font-size:2rem;&:before,&:after{position:relative;display:inline-block;font-size:1rem;content:'✳︎ ✳︎ ✳︎';font-weight:400;white-space:nowrap;}&:before{margin-right:1em;}&:after{margin-left:1em;}@media (max-width:42rem){flex-direction:column;&:before{margin-right:0;margin-bottom:1em;}&:after{margin-left:0;margin-top:1em;}}"],r.b)},156:function(e,t,n){"use strict";var a=n(135);t.a=a.c.header.withConfig({displayName:"PageHeader",componentId:"sc-1p8keor-0"})(["padding:2rem 0;"])},164:function(e,t,n){"use strict";var a=n(135),r=n(140),o=n(137),i=a.c.button.withConfig({displayName:"Button",componentId:"sc-3uo7g7-0"})([""," padding:0.25em 0.75em;font-weight:600;background:",";color:white;border-radius:3px;cursor:pointer;outline:none;&:hover{background:",";}"],r.b,o.d,o.c);t.a=i},171:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(135),i=n(144),l=n(155),c=Object(o.c)(l.a).withConfig({displayName:"ToolPageTitle",componentId:"et7hly-0"})(["&:before,&:after{content:'✧ ✧ ✧';}"]),s=n(156),u=o.c.div.withConfig({displayName:"ToolPage__ToolDescription",componentId:"sc-1ds8lef-0"})(["color:grey;text-align:center;margin-top:0.25rem;"]);t.a=function(e){var t=e.data,n=t.title,a=t.description,o=e.children;return r.a.createElement(i.a,null,r.a.createElement(s.a,null,r.a.createElement(c,null,n),r.a.createElement(u,null,a)),o)}},234:function(e,t){},236:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-tools-glaive-character-index-js-ab3616de1196165a6f7c.js.map