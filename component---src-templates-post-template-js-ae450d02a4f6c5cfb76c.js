"use strict";(self.webpackChunkgatsby_starter_glass=self.webpackChunkgatsby_starter_glass||[]).push([[946],{1621:function(e,t,a){var n=a(7294),o=a(9),i=a(5444);t.Z=function(e){var t=e.tags;return n.createElement("div",null,t&&t.map((function(e){return n.createElement(r,{key:e},n.createElement(i.Link,{to:"/tags/"+(t=e,t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-"))},e));var t})))};var r=o.default.span.withConfig({displayName:"tags__Tag",componentId:"sc-16itk8x-0"})(["margin-right:0.6rem;margin-bottom:0.6rem;text-transform:uppercase;font-size:var(--size-300);& a{position:relative;z-index:2;background-color:rgba(255,255,255,0.7);text-decoration:none;color:inherit;padding:0.2rem 0.6rem;border:1px solid rgba(255,255,255,1);border-radius:4px;}& a:hover{background-color:rgba(255,255,255,0.9);}"])},5416:function(e,t,a){function n(e,t){return t||(t=e.slice(0)),e.raw=t,e}a.r(t),a.d(t,{breakpoints:function(){return b},default:function(){return x},mediaQueries:function(){return h}});var o,i,r=a(7294),l=a(5444),s=a(6569),c=a(9),d=a(1621),p=function(){return r.createElement("section",null,r.createElement(f,null,"Follow me on ",r.createElement("a",{href:"https://twitter.com/aguidehub",rel:"noopener",target:"_BLANK"},"Twitter")),r.createElement(m,null,r.createElement("div",{dangerouslySetInnerHTML:{__html:'<iframe src="https://aguidehub.substack.com/embed" width="100%" height="320" frameborder="0" scrolling="no"></iframe>'}})))},m=c.default.div.withConfig({displayName:"subscription__SubscriptionContainer",componentId:"sc-14f83i4-0"})(["position:relative;display:flex;flex-direction:column;border:2px solid #6166DC;background:#fff;box-shadow:0px 0px 10px rgb(0 0 0 / 65%);z-index:1;"]),f=c.default.h3.withConfig({displayName:"subscription__SocialText",componentId:"sc-14f83i4-1"})(["margin-bottom:20px;text-align:center;"]),u=function(e){var t;return(0,r.useEffect)((function(){try{(window.adsbygoogle||[]).push({})}catch(e){console.error(e)}}),[]),r.createElement(g,null,r.createElement("ins",{className:"adsbygoogle",style:e?(t={display:"block",position:"-webkit-sticky"},t.position="sticky",t.top="10px",t):{},"data-ad-client":"ca-pub-6106226996374193","data-ad-slot":4511921079,"data-ad-format":"auto","data-full-width-responsive":"true"}))},g=c.default.div.withConfig({displayName:"ads__Content",componentId:"sc-1foosz9-0"})(["position:-webkit-sticky;position:sticky;top:10px;margin:0 auto;width:200px;"]),b={sm:20,md:30,lg:45,xl:60},h=function(e){return function(t){return"@media (min-width: "+b[e]+"em) { "+t+" }"}},x=function(e){var t=e.data,a=t.markdownRemark,n=a.frontmatter,o=a.excerpt,i=a.html,c=t.prev,m=t.next;return r.createElement(s.Z,{title:n.title,description:n.description||o,socialImage:n.social_image?n.social_image:""},r.createElement(v,null,r.createElement(w,null,r.createElement(u,{float:!1}),r.createElement(u,{float:!1}),r.createElement(u,{float:!0})),r.createElement(y,null,r.createElement(_,null,r.createElement("article",null,r.createElement(E,null,n.title),r.createElement(z,null,n.date),r.createElement(C,{dangerouslySetInnerHTML:{__html:i}})),r.createElement(p,null),r.createElement(I,null,c&&r.createElement("div",null,r.createElement("span",null,"previous"),r.createElement(l.Link,{to:c.fields.slug}," ",c.frontmatter.title)),m&&r.createElement("div",null,r.createElement("span",null,"next"),r.createElement(l.Link,{to:m.fields.slug}," ",m.frontmatter.title))),r.createElement(d.Z,{tags:n.tags}))),r.createElement(k,null,r.createElement(u,{float:!1}),r.createElement(u,{float:!1}),r.createElement(u,{float:!0}))))},v=c.default.div.withConfig({displayName:"post-template__BodyContainer",componentId:"sc-afk1br-0"})(["display:flex;"]),w=c.default.div.withConfig({displayName:"post-template__LeftContainer",componentId:"sc-afk1br-1"})(["display:none;",";"],h("md")(o||(o=n(["\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n  "])))),y=c.default.div.withConfig({displayName:"post-template__MiddleContainer",componentId:"sc-afk1br-2"})(["flex:3;"]),k=c.default.div.withConfig({displayName:"post-template__RightContainer",componentId:"sc-afk1br-3"})(["display:none;",";"],h("md")(i||(i=n(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"])))),_=c.default.div.withConfig({displayName:"post-template__PostWrapper",componentId:"sc-afk1br-4"})(["padding-top:var(--size-900);padding-bottom:var(--size-900);margin-left:auto;margin-right:auto;max-width:70ch;word-wrap:break-word;"]),E=c.default.h1.withConfig({displayName:"post-template__PostTitle",componentId:"sc-afk1br-5"})(["font-size:var(--size-700);"]),z=c.default.span.withConfig({displayName:"post-template__PostDate",componentId:"sc-afk1br-6"})(["font-size:var(--size-400);padding-top:1rem;text-transform:uppercase;"]),C=c.default.section.withConfig({displayName:"post-template__PostContent",componentId:"sc-afk1br-7"})(["padding-top:var(--size-800);& > * + *{margin-top:var(--size-300);}& > p + p{margin-top:var(--size-700);}* + h1,* + h2,* + h3{margin-top:var(--size-900);}h1{font-size:var(--size-700);}h2{font-size:var(--size-600);}h3{font-size:var(--size-500);}b,strong{font-weight:600;}a{color:inherit;text-decoration:underline;text-decoration-thickness:0.125rem;}blockquote{padding-left:var(--size-400);border-left:5px solid;font-style:italic;}code{font-family:'Source Sans Pro',monospace;overflow-x:auto;white-space:pre-wrap;}pre{overflow-x:auto;white-space:pre-wrap;max-width:100%;}"]),I=c.default.nav.withConfig({displayName:"post-template__PostPagination",componentId:"sc-afk1br-8"})(["display:flex;flex-wrap:wrap;margin-top:var(--size-900);& > *{position:relative;flex:1;display:flex;flex-direction:column;padding:1rem;padding-top:0.5rem;padding-bottom:0.5rem;border-radius:8px;border:1px solid rgba(255,255,255,0.5);background-color:rgba(255,255,255,0.3);backdrop-filter:blur(10px);margin:0.5rem;}& > *:hover{background-color:rgba(255,255,255,0.5);}& span{text-transform:uppercase;opacity:0.6;font-size:var(--size-400);padding-bottom:var(--size-500);}& a{color:inherit;text-decoration:none;font-size:var(--size-400);text-transform:capitalize;}& a::after{content:'';position:absolute;left:0;right:0;top:0;bottom:0;}"])}}]);
//# sourceMappingURL=component---src-templates-post-template-js-ae450d02a4f6c5cfb76c.js.map