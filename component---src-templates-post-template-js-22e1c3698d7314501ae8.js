"use strict";(self.webpackChunkgatsby_starter_glass=self.webpackChunkgatsby_starter_glass||[]).push([[946],{1621:function(e,t,a){var n=a(7294),r=a(9),o=a(5444);t.Z=function(e){var t=e.tags;return n.createElement("div",null,t&&t.map((function(e){return n.createElement(i,{key:e},n.createElement(o.Link,{to:"/tags/"+(t=e,t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-"))},e));var t})))};var i=r.default.span.withConfig({displayName:"tags__Tag",componentId:"sc-16itk8x-0"})(["margin-right:0.6rem;margin-bottom:0.6rem;text-transform:uppercase;font-size:var(--size-300);& a{position:relative;z-index:2;background-color:rgba(255,255,255,0.7);text-decoration:none;color:inherit;padding:0.2rem 0.6rem;border:1px solid rgba(255,255,255,1);border-radius:4px;}& a:hover{background-color:rgba(255,255,255,0.9);}"])},5416:function(e,t,a){function n(e,t){return t||(t=e.slice(0)),e.raw=t,e}a.r(t),a.d(t,{breakpoints:function(){return b},default:function(){return x},mediaQueries:function(){return h}});var r,o,i=a(7294),l=a(5444),s=a(6569),d=a(9),p=a(1621),c=function(){return i.createElement("section",null,i.createElement(f,null,"Follow me on ",i.createElement("a",{href:"https://twitter.com/aguidehub",rel:"noopener",target:"_BLANK"},"Twitter")),i.createElement(m,null,i.createElement("div",{dangerouslySetInnerHTML:{__html:'<iframe src="https://aguidehub.substack.com/embed" width="100%" height="320" frameborder="0" scrolling="no"></iframe>'}})))},m=d.default.div.withConfig({displayName:"subscription__SubscriptionContainer",componentId:"sc-14f83i4-0"})(["position:relative;display:flex;flex-direction:column;border:2px solid #6166DC;background:#fff;box-shadow:0px 0px 10px rgb(0 0 0 / 65%);z-index:1;"]),f=d.default.h3.withConfig({displayName:"subscription__SocialText",componentId:"sc-14f83i4-1"})(["margin-bottom:20px;text-align:center;"]),u=function(){return(0,i.useEffect)((function(){try{(window.adsbygoogle||[]).push({})}catch(e){console.error(e)}}),[]),i.createElement(g,null,i.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-6106226996374193","data-ad-slot":4511921079,"data-ad-format":"auto","data-full-width-responsive":"true"}))},g=d.default.div.withConfig({displayName:"ads__Content",componentId:"sc-1foosz9-0"})(["margin:0 auto;width:200px;margin-top:20px;"]),b={sm:20,md:30,lg:45,xl:60},h=function(e){return function(t){return"@media (min-width: "+b[e]+"em) { "+t+" }"}},x=function(e){var t=e.data,a=t.markdownRemark,n=a.frontmatter,r=a.excerpt,o=a.html,d=t.prev,m=t.next;return i.createElement(s.Z,{title:n.title,description:n.description||r,socialImage:n.social_image?n.social_image:""},i.createElement(v,null,i.createElement(w,null,i.createElement("div",{style:{position:"sticky",top:"0px"}},i.createElement(u,null))),i.createElement(y,null,i.createElement(k,null,i.createElement("article",null,i.createElement(E,null,n.title),i.createElement(z,null,n.date),i.createElement(C,{dangerouslySetInnerHTML:{__html:o}})),i.createElement(c,null),i.createElement(I,null,d&&i.createElement("div",null,i.createElement("span",null,"previous"),i.createElement(l.Link,{to:d.fields.slug}," ",d.frontmatter.title)),m&&i.createElement("div",null,i.createElement("span",null,"next"),i.createElement(l.Link,{to:m.fields.slug}," ",m.frontmatter.title))),i.createElement(p.Z,{tags:n.tags}))),i.createElement(_,null,i.createElement("div",{style:{position:"sticky",top:"0px"}},i.createElement(u,null)))))},v=d.default.div.withConfig({displayName:"post-template__BodyContainer",componentId:"sc-afk1br-0"})(["display:flex;"]),w=d.default.div.withConfig({displayName:"post-template__LeftContainer",componentId:"sc-afk1br-1"})(["display:none;",";"],h("md")(r||(r=n(["\n    display: flex;\n    flex: 1;\n  "])))),y=d.default.div.withConfig({displayName:"post-template__MiddleContainer",componentId:"sc-afk1br-2"})(["flex:3;"]),_=d.default.div.withConfig({displayName:"post-template__RightContainer",componentId:"sc-afk1br-3"})(["display:none;",";"],h("md")(o||(o=n(["\n  display: flex;\n  flex: 1;\n"])))),k=d.default.div.withConfig({displayName:"post-template__PostWrapper",componentId:"sc-afk1br-4"})(["padding-top:var(--size-900);padding-bottom:var(--size-900);margin-left:auto;margin-right:auto;max-width:70ch;word-wrap:break-word;"]),E=d.default.h1.withConfig({displayName:"post-template__PostTitle",componentId:"sc-afk1br-5"})(["font-size:var(--size-700);"]),z=d.default.span.withConfig({displayName:"post-template__PostDate",componentId:"sc-afk1br-6"})(["font-size:var(--size-400);padding-top:1rem;text-transform:uppercase;"]),C=d.default.section.withConfig({displayName:"post-template__PostContent",componentId:"sc-afk1br-7"})(["padding-top:var(--size-800);& > * + *{margin-top:var(--size-300);}& > p + p{margin-top:var(--size-700);}* + h1,* + h2,* + h3{margin-top:var(--size-900);}h1{font-size:var(--size-700);}h2{font-size:var(--size-600);}h3{font-size:var(--size-500);}b,strong{font-weight:600;}a{color:inherit;text-decoration:underline;text-decoration-thickness:0.125rem;}blockquote{padding-left:var(--size-400);border-left:5px solid;font-style:italic;}code{font-family:'Source Sans Pro',monospace;overflow-x:auto;white-space:pre-wrap;}pre{overflow-x:auto;white-space:pre-wrap;max-width:100%;}"]),I=d.default.nav.withConfig({displayName:"post-template__PostPagination",componentId:"sc-afk1br-8"})(["display:flex;flex-wrap:wrap;margin-top:var(--size-900);& > *{position:relative;flex:1;display:flex;flex-direction:column;padding:1rem;padding-top:0.5rem;padding-bottom:0.5rem;border-radius:8px;border:1px solid rgba(255,255,255,0.5);background-color:rgba(255,255,255,0.3);backdrop-filter:blur(10px);margin:0.5rem;}& > *:hover{background-color:rgba(255,255,255,0.5);}& span{text-transform:uppercase;opacity:0.6;font-size:var(--size-400);padding-bottom:var(--size-500);}& a{color:inherit;text-decoration:none;font-size:var(--size-400);text-transform:capitalize;}& a::after{content:'';position:absolute;left:0;right:0;top:0;bottom:0;}"])}}]);
//# sourceMappingURL=component---src-templates-post-template-js-22e1c3698d7314501ae8.js.map