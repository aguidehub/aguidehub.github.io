"use strict";(self.webpackChunkgatsby_starter_glass=self.webpackChunkgatsby_starter_glass||[]).push([[946],{1621:function(e,t,a){var n=a(7294),i=a(9),r=a(5444);t.Z=function(e){var t=e.tags;return n.createElement("div",null,t&&t.map((function(e){return n.createElement(o,{key:e},n.createElement(r.Link,{to:"/tags/"+(t=e,t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-"))},e));var t})))};var o=i.default.span.withConfig({displayName:"tags__Tag",componentId:"sc-16itk8x-0"})(["margin-right:0.6rem;margin-bottom:0.6rem;text-transform:uppercase;font-size:var(--size-300);& a{position:relative;z-index:2;background-color:rgba(255,255,255,0.7);text-decoration:none;color:inherit;padding:0.2rem 0.6rem;border:1px solid rgba(255,255,255,1);border-radius:4px;}& a:hover{background-color:rgba(255,255,255,0.9);}"])},5416:function(e,t,a){function n(e,t){return t||(t=e.slice(0)),e.raw=t,e}a.r(t),a.d(t,{breakpoints:function(){return u},default:function(){return b},mediaQueries:function(){return g}});var i,r,o=a(7294),l=a(5444),s=a(6569),d=a(9),p=a(1621),c=function(){return o.createElement("section",null,o.createElement(f,null,"Follow me on ",o.createElement("a",{href:"https://twitter.com/aguidehub",rel:"noopener",target:"_BLANK"},"Twitter")),o.createElement(m,null,o.createElement("div",{dangerouslySetInnerHTML:{__html:'<iframe src="https://aguidehub.substack.com/embed" width="100%" height="320" frameborder="0" scrolling="no"></iframe>'}})))},m=d.default.div.withConfig({displayName:"subscription__SubscriptionContainer",componentId:"sc-14f83i4-0"})(["position:relative;display:flex;flex-direction:column;border:2px solid #6166DC;background:#fff;box-shadow:0px 0px 10px rgb(0 0 0 / 65%);z-index:1;"]),f=d.default.h3.withConfig({displayName:"subscription__SocialText",componentId:"sc-14f83i4-1"})(["margin-bottom:20px;text-align:center;"]),u=(d.default.div.withConfig({displayName:"ads__Content",componentId:"sc-1foosz9-0"})(["position:-webkit-sticky;position:sticky;top:10px;margin:0 auto;width:200px;"]),{sm:20,md:30,lg:45,xl:60}),g=function(e){return function(t){return"@media (min-width: "+u[e]+"em) { "+t+" }"}},b=function(e){var t=e.data,a=t.markdownRemark,n=a.frontmatter,i=a.excerpt,r=a.html,d=t.prev,m=t.next;return o.createElement(s.Z,{title:n.title,description:n.description||i,socialImage:n.social_image?n.social_image:""},o.createElement(h,null,o.createElement(x,null),o.createElement(v,null,o.createElement(_,null,o.createElement("article",null,o.createElement(k,null,n.title),o.createElement(y,null,n.date),o.createElement(z,{dangerouslySetInnerHTML:{__html:r}})),o.createElement(c,null),o.createElement(E,null,d&&o.createElement("div",null,o.createElement("span",null,"previous"),o.createElement(l.Link,{to:d.fields.slug}," ",d.frontmatter.title)),m&&o.createElement("div",null,o.createElement("span",null,"next"),o.createElement(l.Link,{to:m.fields.slug}," ",m.frontmatter.title))),o.createElement(p.Z,{tags:n.tags}))),o.createElement(w,null)))},h=d.default.div.withConfig({displayName:"post-template__BodyContainer",componentId:"sc-afk1br-0"})(["display:flex;"]),x=d.default.div.withConfig({displayName:"post-template__LeftContainer",componentId:"sc-afk1br-1"})(["display:none;",";"],g("md")(i||(i=n(["\n    display: flex;\n    flex: 1;\n  "])))),v=d.default.div.withConfig({displayName:"post-template__MiddleContainer",componentId:"sc-afk1br-2"})(["flex:3;"]),w=d.default.div.withConfig({displayName:"post-template__RightContainer",componentId:"sc-afk1br-3"})(["display:none;",";"],g("md")(r||(r=n(["\n  display: flex;\n  flex: 1;\n"])))),_=d.default.div.withConfig({displayName:"post-template__PostWrapper",componentId:"sc-afk1br-4"})(["padding-top:var(--size-900);padding-bottom:var(--size-900);margin-left:auto;margin-right:auto;max-width:70ch;word-wrap:break-word;"]),k=d.default.h1.withConfig({displayName:"post-template__PostTitle",componentId:"sc-afk1br-5"})(["font-size:var(--size-700);"]),y=d.default.span.withConfig({displayName:"post-template__PostDate",componentId:"sc-afk1br-6"})(["font-size:var(--size-400);padding-top:1rem;text-transform:uppercase;"]),z=d.default.section.withConfig({displayName:"post-template__PostContent",componentId:"sc-afk1br-7"})(["padding-top:var(--size-800);& > * + *{margin-top:var(--size-300);}& > p + p{margin-top:var(--size-700);}* + h1,* + h2,* + h3{margin-top:var(--size-900);}h1{font-size:var(--size-700);}h2{font-size:var(--size-600);}h3{font-size:var(--size-500);}b,strong{font-weight:600;}a{color:inherit;text-decoration:underline;text-decoration-thickness:0.125rem;}blockquote{padding-left:var(--size-400);border-left:5px solid;font-style:italic;}code{font-family:'Source Sans Pro',monospace;overflow-x:auto;white-space:pre-wrap;}pre{overflow-x:auto;white-space:pre-wrap;max-width:100%;}"]),E=d.default.nav.withConfig({displayName:"post-template__PostPagination",componentId:"sc-afk1br-8"})(["display:flex;flex-wrap:wrap;margin-top:var(--size-900);& > *{position:relative;flex:1;display:flex;flex-direction:column;padding:1rem;padding-top:0.5rem;padding-bottom:0.5rem;border-radius:8px;border:1px solid rgba(255,255,255,0.5);background-color:rgba(255,255,255,0.3);backdrop-filter:blur(10px);margin:0.5rem;}& > *:hover{background-color:rgba(255,255,255,0.5);}& span{text-transform:uppercase;opacity:0.6;font-size:var(--size-400);padding-bottom:var(--size-500);}& a{color:inherit;text-decoration:none;font-size:var(--size-400);text-transform:capitalize;}& a::after{content:'';position:absolute;left:0;right:0;top:0;bottom:0;}"])}}]);
//# sourceMappingURL=component---src-templates-post-template-js-9e28bacd3c384d0bb827.js.map