(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{133:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(149),i=n.n(o),l=n(148),c=n(135),u=n(214),s=n.n(u),m=n(169),d=n(152),p=n(160),f=n(170),g=n(238),h=n.n(g)()({loader:function(){return n.e(2).then(n.bind(null,270))},loading:function(){return a.a.createElement("div",null,"Loading...")}});n.d(t,"pageQuery",function(){return v});var b=Object(m.get)(["frontmatter","image","childImageSharp","fluid","src"]),y=c.c.article.withConfig({displayName:"BlogPost__PostContainer",componentId:"sc-1ojbjws-0"})([""]),A=c.c.div.withConfig({displayName:"BlogPost__PostDate",componentId:"sc-1ojbjws-1"})(["color:grey;text-align:center;margin-top:0.25rem;"]),w=new s.a({createElement:a.a.createElement,components:{"portrait-generator":h}}).Compiler,v="860470851";t.default=function(e){var t=e.data.markdownRemark,n=b(t);return a.a.createElement(l.a,null,a.a.createElement(y,null,a.a.createElement(i.a,{title:"Losing Games - "+t.frontmatter.title,meta:[{name:"og:image",content:n},{name:"description",content:t.excerpt}]}),a.a.createElement(p.a,null,a.a.createElement(d.a,null,t.frontmatter.title),a.a.createElement(A,null,t.frontmatter.date)),a.a.createElement(f.a,null,w(t.htmlAst))))}},137:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var r="red",a="black",o="black",i="grey"},138:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var r=n(135),a=Object(r.b)(["@import url('https://fonts.googleapis.com/css?family=Lato:400,400i,700|Vollkorn:400i,700,900');"]),o=Object(r.b)(["font-family:'Lato',sans-serif;"]),i=Object(r.b)(["font-family:'Vollkorn',serif;font-weight:700;"]);Object(r.b)([""," font-size:1rem;border:none;"],o)},140:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(136),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(143),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var m=n(29);n.d(t,"parsePath",function(){return m.a});var d=a.a.createContext({}),p=function(e){return a.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},141:function(e,t,n){"use strict";n(66),n(46),n(154);var r=n(135),a={desktop:992,tablet:768,phone:672},o=Object.keys(a).reduce(function(e,t){return e[t]=function(){return Object(r.b)(["@media (max-width:","em){","}"],a[t]/16,r.b.apply(void 0,arguments))},e},{});t.a=o},142:function(e,t,n){"use strict";n.d(t,"b",function(){return o});var r=n(135),a=n(138),o=Object(r.b)([""," font-size:1rem;border:none;"],a.a);t.a=Object(r.b)(["html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}"])},143:function(e,t,n){var r;e.exports=(r=n(145))&&r.default||r},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Losing Games"}}}}},145:function(e,t,n){"use strict";n.r(t);n(28);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(47),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},146:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAATBJREFUWIXFl90ShCAIhaFp3/+Bc4a9MBXJFJCdPTdtppxvifwB+LMQAICI7js82bMU7HXKBgRIfSNRM80wURBnF7vFh4Pf3L8JEKkOjDB/xq06BBXvcAVAlLFXbREQPcBTOxBP8wZRX0kuwtUAgM991daEKhZCn4EkOnBZMmH6I/IV7EKYsziqAS+E6xW+FaEVwl0/vAhH0gSWYCbz1WeoyYTLnEPMMlA0y8RIavNVBopmmXCZF2kBtBDWCcsE8BNZADR1YF47tACWIjRBaABWc8HW2rEC0E5EbogZgHZ63VrA3gCsc7sbYgTgXVhcEBJgd1dkhuAAUVsyE0QGIJIdvOZmiJYBeXDwm68hmNchHmCQ+TtE7zH4CoiQdYo4mqVB3KqyIckHhT8cToM97PoC3rJ9Nokm0lIAAAAASUVORK5CYII="},147:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAJdJREFUOI2lk9EOAyEIBAfj/f8Hl4Q+nLbIAUlT3mSZFUXFYHKG0sd8LswUEQOulatMNvzCTAAGwIJvIdnlAW9GZI6VvFxhZjKD9mH21mVBYuw13R1oECKQwr6DrlUfBwz7Er+RdVLCmcHPEQ26I6Qj9gbVJNoRj5CoxliaiPWw+uKsZlQC522X7+Q2WB+jgHOTxci/3/kNTV4zMcSMeKYAAAAASUVORK5CYII="},148:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(139),i=n.n(o),l=n(144),c=(n(4),n(149)),u=n.n(c),s=n(140),m=n(135),d=n(142),p=n(138),f=n(137);function g(){var e=i()(["\n    ","\n    ","\n\n    body {\n        ","\n        font-size: 18px;\n        line-height: 1.33;\n        color: ",";\n    }\n\n    a {\n        color: ",";\n\n        &:hover {\n            color: ",";\n        }\n    }\n"]);return g=function(){return e},e}var h=Object(m.a)(g(),d.a,p.c,p.a,f.a,f.c,f.d),b=function(e){var t=e.children;return a.a.createElement(s.StaticQuery,{query:"3388207342",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"A blog about D&D & other games"}]},a.a.createElement("html",{lang:"en"}),a.a.createElement("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),a.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:n(146)}),a.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:n(147)})),a.a.createElement(h,null),t({data:e}))},data:l})},y=n(141);function A(){var e=i()(["padding: 0 2rem;"]);return A=function(){return e},e}var w=m.c.div.withConfig({displayName:"ContentContainer",componentId:"sc-1m59fxh-0"})(["margin:0 auto;max-width:41rem;",""],y.a.phone(A())),v=(n(28),n(151),n(6)),E=n.n(v),I=n(155),x=m.c.button.withConfig({displayName:"DiceRollerForm__RollerButton",componentId:"sc-1xqna79-0"})(["display:inline-block;position:relative;"," outline:none;cursor:pointer;background:white;width:1.5rem;height:1.2rem;padding:0;margin:0;font-size:0;&:before{top:-8px;left:5px;position:absolute;font-size:1.5rem;content:'⚄';cursor:pointer;pointer-events:none;}&:hover{color:",";}"],d.b,f.c),C=m.c.form.withConfig({displayName:"DiceRollerForm__Form",componentId:"sc-1xqna79-1"})(["display:flex;"]),k=m.c.input.withConfig({displayName:"DiceRollerForm__Input",componentId:"sc-1xqna79-2"})([""," width:4rem;font-size:0.8rem;outline:none;margin-right:0.5em;margin-top:-0.1em;padding:0.2em;text-align:right;border:1px solid white;&:hover{border-color:lightgrey;}&:focus{border-color:black;}"],d.b),R=function(e){var t=e.query,n=e.setQuery,r=e.rollDice,o=e.registerInput;return a.a.createElement(C,{onSubmit:function(e){e.preventDefault(),r(t)}},a.a.createElement(k,{type:"text",placeholder:"1d20",ref:o,value:t,onChange:function(e){return n(e.target.value)}}),a.a.createElement(x,null,"Roll"))},j=m.c.div.withConfig({displayName:"DiceRollerResult__Result",componentId:"sc-1lx22ng-0"})(["padding:0.2rem 0.4rem;font-size:0.8rem;width:100%;"]),z=m.c.span.withConfig({displayName:"DiceRollerResult__ResultQuery",componentId:"sc-1lx22ng-1"})(["color:",";"],f.b),P=m.c.span.withConfig({displayName:"DiceRollerResult__ResultTotal",componentId:"sc-1lx22ng-2"})(["font-weight:600;"]),L=function(e){var t,n=e.result,r=e.query,o=(t=n.rolls,function(e){return e<t.length-1?" + ":" = "});return a.a.createElement(j,null,a.a.createElement(z,null,r,": "),n.rolls.length>1?n.rolls.map(function(e,t){return e+" "+o(t)}):"",a.a.createElement(P,null,n.total))},N=m.c.div.withConfig({displayName:"DiceRoller__RollerContainer",componentId:"giqrmu-0"})(["position:relative;height:1em;"]),B=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={show:!1,result:null,query:""},t}E()(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){var n=this;!t.result&&this.state.result&&(this.t=setTimeout(function(){n.setState({result:null}),n.input.focus()},3e3))},n.componentWillUnmount=function(){this.t&&clearTimeout(this.t)},n.render=function(){var e=this;return a.a.createElement(N,null,this.state.result?a.a.createElement(L,{result:this.state.result,query:this.state.query||"1d20"}):a.a.createElement(R,{query:this.state.query,setQuery:function(t){return e.setState({query:t})},rollDice:function(t){var n=t.length>0?t:"1d20",r=Object(I.roll)(n);r&&e.setState({result:r})},registerInput:function(t){e.input=t}}))},t}(r.Component);function O(){var e=i()(["margin-right: -1rem;"]);return O=function(){return e},e}var S=m.c.header.withConfig({displayName:"Header__HeaderContainer",componentId:"leoys2-0"})(["padding:1rem 0;"]),T=Object(m.b)(["&:hover{&:before{transform:rotate(-90deg);}}"]),Z=(Object(m.b)([""]),m.c.h1.withConfig({displayName:"Header__SiteTitle",componentId:"leoys2-1"})(["position:relative;font-weight:600;"," &:before{"," position:absolute;left:-1.5rem;top:-0.1rem;content:'✕';font-weight:400;transform:rotate(0deg);transition:transform 0.25s ease-in-out;}",""],p.b,p.a,function(e){return e.isIndexPage?null:T})),W=m.c.div.withConfig({displayName:"Header__HeaderAlignment",componentId:"leoys2-2"})(["display:flex;justify-content:space-between;",""],y.a.phone(O())),q=m.c.nav.withConfig({displayName:"Header__HeaderNav",componentId:"leoys2-3"})(["display:flex;ul{display:flex;align-items:center;li{margin-right:1em;font-size:0.8rem;}}"]),D=Object(m.c)(s.Link).withConfig({displayName:"Header__NavLink",componentId:"leoys2-4"})(["position:relative;&:before{position:absolute;left:-1em;content:'✧';text-decoration:none;color:black;}"]),H=function(e){var t=e.siteTitle,n=e.isIndexPage;return a.a.createElement(S,null,a.a.createElement(w,null,a.a.createElement(W,null,a.a.createElement(Z,{isIndexPage:n},a.a.createElement(s.Link,{to:"/"},t)),a.a.createElement(q,null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(D,{to:"/tools"},"Tools"))),a.a.createElement(B,null)))))},J=m.c.footer.withConfig({displayName:"Footer__FooterContainer",componentId:"twnpg-0"})(["padding:5rem 0 3rem 0;font-size:0.9rem;color:",";a{color:",";}"],f.b,f.b),Y=function(e){e.siteTitle;return a.a.createElement(J,null,a.a.createElement(w,null,"© ",(new Date).getFullYear()," Isaac Williams"," — ",a.a.createElement("a",{href:"http://isaacwilliams.net"},"Website")," — ",a.a.createElement("a",{href:"https://twitter.com/isaacwilliams"},"Twitter")))};t.a=function(e){var t=e.children,n=e.isIndexPage;return a.a.createElement(b,null,function(e){var r=e.data;return a.a.createElement(a.a.Fragment,null,a.a.createElement(H,{siteTitle:r.site.siteMetadata.title,isIndexPage:n}),a.a.createElement(w,null,t),a.a.createElement(Y,null))})}},152:function(e,t,n){"use strict";var r=n(139),a=n.n(r),o=n(135),i=n(138),l=n(141);function c(){var e=a()(["\n        flex-direction: column;\n        padding-bottom: 1rem;\n\n        font-size: 2rem;\n\n        &:before {\n            margin-right: 0;\n            margin-bottom: 0.5em;\n        }\n\n        &:after {\n            margin-left: 0;\n            margin-top: 0.5em;\n        }\n    "]);return c=function(){return e},e}t.a=o.c.h1.withConfig({displayName:"PageTitle",componentId:"nom89n-0"})(["display:flex;align-items:center;justify-content:center;width:100%;"," text-align:center;font-weight:900;font-size:2.5rem;&:before,&:after{"," position:relative;display:inline-block;font-size:1rem;content:'✳︎ ✳︎ ✳︎';font-weight:400;white-space:nowrap;}&:before{margin-right:1em;}&:after{margin-left:1em;}",""],i.b,i.a,l.a.phone(c()))},160:function(e,t,n){"use strict";var r=n(139),a=n.n(r),o=n(135),i=n(141);function l(){var e=a()(["padding: 1rem 0;"]);return l=function(){return e},e}t.a=o.c.header.withConfig({displayName:"PageHeader",componentId:"sc-1p8keor-0"})(["padding:2rem 4rem;margin-bottom:1rem;",""],i.a.phone(l()))},170:function(e,t,n){"use strict";var r=n(135),a=n(138),o=r.c.div.withConfig({displayName:"RichContent",componentId:"sc-1iv7yo1-0"})([""," p{margin:0.5em 0 0.8em 0;}em{font-style:italic;}strong{font-weight:600;}h1,h2,h3,h4,h5{"," margin:1.5em 0 0.3em 0;font-weight:600;}h1{font-size:1.8rem;}h2{font-size:1.6rem;}h3{font-size:1.3rem;}a{.gatsby-resp-image-wrapper{box-shadow:0 1px 3px rgba(0,0,0,0.3);transition:box-shadow 0.2s ease-in-out;&:hover{box-shadow:0 3px 6px rgba(0,0,0,0.3);}}}blockquote{"," font-weight:400;position:relative;font-style:italic;margin-left:2em;&:before{position:absolute;content:'>';left:-2em;color:#666;}}ul,ol{margin-left:2em;counter-reset:li;li{margin:0.3em 0;p{margin:0;}position:relative;counter-increment:li;&:before{position:absolute;left:-2em;color:#666;}}}ul{li:before{content:'-';}}ol{li:before{content:counter(li) '.';}}table{width:100%;box-sizing:content-box;border-spacing:0.5em;font-size:15px;word-break:keep-all;td,th{padding:0.4em 0.5em;}th{border-bottom:1px solid grey;}th{text-align:left;font-weight:700;}tbody{tr:nth-child(odd){background-color:#eee;}}}"],a.a,a.b,a.b);t.a=o}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-5eb682694d9b7008802d.js.map