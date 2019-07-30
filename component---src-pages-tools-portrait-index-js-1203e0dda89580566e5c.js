(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{132:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),o=n(147),l=n(167),a=n(157),s=n(179);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(a.a,null,r.a.createElement(l.a,null,"Portrait generator")),r.a.createElement(s.a,null))}},146:function(e,t,n){!function(t){"use strict";var n={};function i(){this.numDice=0,this.numSides=0,this.modifier=0,this.minResult=0,this.maxResult=0,this.avgResult=0}function r(){this.rolls=[],this.modifier=0,this.total=0}r.prototype.toString=function(){return 1===this.rolls.length&&0===this.modifier?this.rolls[0]+"":this.rolls.length>1&&0===this.modifier?this.rolls.join(" + ")+" = "+this.total:1===this.rolls.length&&this.modifier>0?this.rolls[0]+" + "+this.modifier+" = "+this.total:this.rolls.length>1&&this.modifier>0?this.rolls.join(" + ")+" + "+this.modifier+" = "+this.total:1===this.rolls.length&&this.modifier<0?this.rolls[0]+" - "+Math.abs(this.modifier)+" = "+this.total:this.rolls.length>1&&this.modifier<0?this.rolls.join(" + ")+" - "+Math.abs(this.modifier)+" = "+this.total:void 0},n.parse=function(e){var t,n=new i;return!!(t=e.match(/^([1-9]\d*)?d([1-9]\d*)([+-]\d+)?$/i))&&(n.numDice=t[1]-0||1,n.numSides=t[2]-0,n.modifier=t[3]-0||0,n.minResult=1*n.numDice+n.modifier,n.maxResult=n.numDice*n.numSides+n.modifier,n.avgResult=(n.maxResult+n.minResult)/2,n)},n.validate=function(e){return!!n.parse(e)},n.roll=function(e){var t,i=new r;if(!(t=n.parse(e)))return!1;for(var o=0;o<t.numDice;o++)i.rolls[o]=1+Math.floor(Math.random()*t.numSides);i.modifier=t.modifier;for(var l=0;l<i.rolls.length;l++)i.total+=i.rolls[l];return i.total+=i.modifier,i},e.exports?e.exports=n:t.droll=n}(this)},147:function(e,t,n){"use strict";var i=n(0),r=n.n(i),o=n(143),l=n(140),a=n(136),s=n(139),c=a.c.div.withConfig({displayName:"ContentContainer",componentId:"sc-1eahtq3-0"})(["margin:0 auto;max-width:41rem;@media (max-width:42rem){padding:0 2rem;}"]),m=(n(28),n(150),n(6)),u=n.n(m),d=n(146),h=n(141),f=n(138),p=a.c.button.withConfig({displayName:"DiceRollerForm__RollerButton",componentId:"sc-1xqna79-0"})(["display:inline-block;position:relative;"," outline:none;cursor:pointer;background:white;width:1.5rem;height:1.2rem;padding:0;margin:0;font-size:0;&:before{top:-5px;left:5px;position:absolute;font-size:1.5rem;content:'⚄';cursor:pointer;pointer-events:none;}&:hover{color:",";}"],h.b,f.c),g=a.c.form.withConfig({displayName:"DiceRollerForm__Form",componentId:"sc-1xqna79-1"})(["display:flex;"]),w=a.c.input.withConfig({displayName:"DiceRollerForm__Input",componentId:"sc-1xqna79-2"})([""," width:4rem;font-size:0.8rem;outline:none;margin-right:0.5em;padding:0.2em;text-align:right;border:1px solid white;&:hover{border-color:lightgrey;}&:focus{border-color:black;}"],h.b),y=function(e){var t=e.query,n=e.setQuery,i=e.rollDice,o=e.registerInput;return r.a.createElement(g,{onSubmit:function(e){e.preventDefault(),i(t)}},r.a.createElement(w,{type:"text",placeholder:"1d20",ref:o,value:t,onChange:function(e){return n(e.target.value)}}),r.a.createElement(p,null,"Roll"))},v=a.c.div.withConfig({displayName:"DiceRollerResult__Result",componentId:"sc-1lx22ng-0"})(["padding:0.2rem 0.4rem;font-size:0.8rem;width:100%;"]),b=a.c.span.withConfig({displayName:"DiceRollerResult__ResultQuery",componentId:"sc-1lx22ng-1"})(["color:",";"],f.b),x=a.c.span.withConfig({displayName:"DiceRollerResult__ResultTotal",componentId:"sc-1lx22ng-2"})(["font-weight:600;"]),E=function(e){var t,n=e.result,i=e.query,o=(t=n.rolls,function(e){return e<t.length-1?" + ":" = "});return r.a.createElement(v,null,r.a.createElement(b,null,i,": "),n.rolls.length>1?n.rolls.map(function(e,t){return e+" "+o(t)}):"",r.a.createElement(x,null,n.total))},I=a.c.div.withConfig({displayName:"DiceRoller__RollerContainer",componentId:"giqrmu-0"})(["position:relative;"]),_=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))||this).state={show:!1,result:null,query:""},t}u()(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){var n=this;!t.result&&this.state.result&&(this.t=setTimeout(function(){n.setState({result:null}),n.input.focus()},3e3))},n.componentWillUnmount=function(){this.t&&clearTimeout(this.t)},n.render=function(){var e=this;return r.a.createElement(I,null,this.state.result?r.a.createElement(E,{result:this.state.result,query:this.state.query||"1d20"}):r.a.createElement(y,{query:this.state.query,setQuery:function(t){return e.setState({query:t})},rollDice:function(t){var n=t.length>0?t:"1d20",i=Object(d.roll)(n);i&&e.setState({result:i})},registerInput:function(t){e.input=t}}))},t}(i.Component),C=a.c.header.withConfig({displayName:"Header__HeaderContainer",componentId:"sc-9eu2yh-0"})(["padding:1rem 0;"]),R=Object(a.b)(["&:hover{&:before{transform:rotate(-90deg);}}"]),N=(Object(a.b)([""]),a.c.h1.withConfig({displayName:"Header__SiteTitle",componentId:"sc-9eu2yh-1"})(["position:relative;font-weight:600;"," &:before{position:absolute;left:-1.5rem;content:'✕';font-weight:400;transform:rotate(0deg);transition:transform 0.25s ease-in-out;}",""],s.b,function(e){return e.isIndexPage?null:R})),D=a.c.div.withConfig({displayName:"Header__HeaderAlignment",componentId:"sc-9eu2yh-2"})(["display:flex;justify-content:space-between;"]),q=a.c.nav.withConfig({displayName:"Header__HeaderNav",componentId:"sc-9eu2yh-3"})(["display:flex;ul{display:flex;align-items:center;li{margin-right:1em;font-size:0.8rem;}}"]),j=Object(a.c)(l.Link).withConfig({displayName:"Header__NavLink",componentId:"sc-9eu2yh-4"})(["position:relative;&:before{position:absolute;left:-1em;content:'✧';text-decoration:none;color:black;}"]),T=function(e){var t=e.siteTitle,n=e.isIndexPage;return r.a.createElement(C,null,r.a.createElement(c,null,r.a.createElement(D,null,r.a.createElement(N,{isIndexPage:n},r.a.createElement(l.Link,{to:"/"},t)),r.a.createElement(q,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(j,{to:"/tools"},"Tools"))),r.a.createElement(_,null)))))},k=a.c.footer.withConfig({displayName:"Footer__FooterContainer",componentId:"sc-1xqajj9-0"})(["padding:5rem 0 3rem 0;font-size:0.9rem;color:",";a{color:",";}"],f.b,f.b),S=function(e){e.siteTitle;return r.a.createElement(k,null,r.a.createElement(c,null,"© ",(new Date).getFullYear()," Isaac Williams"," — ",r.a.createElement("a",{href:"http://isaacwilliams.net"},"Website")," — ",r.a.createElement("a",{href:"https://twitter.com/isaacwilliams"},"Twitter")))};t.a=function(e){var t=e.children,n=e.isIndexPage;return r.a.createElement(o.a,null,function(e){var i=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{siteTitle:i.site.siteMetadata.title,isIndexPage:n}),r.a.createElement(c,null,t),r.a.createElement(S,null))})}},156:function(e,t,n){"use strict";var i=n(136),r=n(139);t.a=i.c.h1.withConfig({displayName:"PageTitle",componentId:"nom89n-0"})(["display:flex;align-items:center;justify-content:center;width:100%;"," text-align:center;font-weight:600;font-size:2rem;&:before,&:after{position:relative;display:inline-block;font-size:1rem;content:'✳︎ ✳︎ ✳︎';font-weight:400;white-space:nowrap;}&:before{margin-right:1em;}&:after{margin-left:1em;}@media (max-width:42rem){flex-direction:column;&:before{margin-right:0;margin-bottom:1em;}&:after{margin-left:0;margin-top:1em;}}"],r.b)},157:function(e,t,n){"use strict";var i=n(136);t.a=i.c.header.withConfig({displayName:"PageHeader",componentId:"sc-1p8keor-0"})(["padding:2rem 0;"])},167:function(e,t,n){"use strict";var i=n(136),r=n(156);t.a=Object(i.c)(r.a).withConfig({displayName:"ToolPageTitle",componentId:"et7hly-0"})(["&:before,&:after{content:'✧ ✧ ✧';}"])}}]);
//# sourceMappingURL=component---src-pages-tools-portrait-index-js-1203e0dda89580566e5c.js.map