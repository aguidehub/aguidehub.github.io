"use strict";(self.webpackChunkgatsby_starter_glass=self.webpackChunkgatsby_starter_glass||[]).push([[946],{1621:function(e,t,a){var n=a(7294),o=a(9),r=a(5444);t.Z=function(e){var t=e.tags;return n.createElement("div",null,t&&t.map((function(e){return n.createElement(i,{key:e},n.createElement(r.Link,{to:"/tags/"+(t=e,t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-"))},e));var t})))};var i=o.default.span.withConfig({displayName:"tags__Tag",componentId:"sc-16itk8x-0"})(["margin-right:0.6rem;margin-bottom:0.6rem;text-transform:uppercase;font-size:var(--size-300);& a{position:relative;z-index:2;background-color:rgba(255,255,255,0.7);text-decoration:none;color:inherit;padding:0.2rem 0.6rem;border:1px solid rgba(255,255,255,1);border-radius:4px;}& a:hover{background-color:rgba(255,255,255,0.9);}"])},6780:function(e,t,a){function n(e,t){return t||(t=e.slice(0)),e.raw=t,e}a.r(t),a.d(t,{breakpoints:function(){return h},default:function(){return v},mediaQueries:function(){return x}});var o,r,i=a(7294),l=a(5444),s=a(6569),d=a(9),c=a(1621),p=function(){return i.createElement("section",null,i.createElement(u,null,"Follow me on ",i.createElement("a",{href:"https://twitter.com/aguidehub",rel:"noopener",target:"_BLANK"},"Twitter")),i.createElement(m,null,i.createElement("div",{dangerouslySetInnerHTML:{__html:'<iframe src="https://aguidehub.substack.com/embed" width="100%" height="320" frameborder="0" scrolling="no"></iframe>'}})))},m=d.default.div.withConfig({displayName:"subscription__SubscriptionContainer",componentId:"sc-14f83i4-0"})(["position:relative;display:flex;flex-direction:column;border:2px solid #6166DC;background:#fff;box-shadow:0px 0px 10px rgb(0 0 0 / 65%);z-index:1;"]),u=d.default.h3.withConfig({displayName:"subscription__SocialText",componentId:"sc-14f83i4-1"})(["margin-bottom:20px;text-align:center;"]),f=function(){var e;return(0,i.useEffect)((function(){try{(window.adsbygoogle||[]).push({})}catch(e){console.error(e)}}),[]),i.createElement(g,null,i.createElement("ins",{className:"adsbygoogle",style:(e={display:"block",position:"-webkit-sticky"},e.position="sticky",e.top="10px",e),"data-ad-client":"ca-pub-6106226996374193","data-ad-slot":4511921079,"data-ad-format":"auto","data-full-width-responsive":"true"}))},g=d.default.div.withConfig({displayName:"ads__Content",componentId:"sc-1foosz9-0"})(["position:-webkit-sticky;position:sticky;top:10px;margin:0 auto;width:200px;"]),b=function(){return(0,i.useEffect)((function(){try{(window.adsbygoogle||[]).push({})}catch(e){console.error(e)}}),[]),i.createElement("ins",{className:"adsbygoogle",style:{marginTop:"10px"},"data-ad-client":"ca-pub-6106226996374193","data-ad-slot":4511921079,"data-ad-format":"auto","data-full-width-responsive":"true"})},h={sm:20,md:30,lg:45,xl:60},x=function(e){return function(t){return"@media (min-width: "+h[e]+"em) { "+t+" }"}},v=function(e){var t=e.data,a=t.markdownRemark,n=a.frontmatter,o=a.excerpt,r=a.html,d=t.prev,m=t.next;return i.createElement(s.Z,{title:n.title,description:n.description||o,socialImage:n.social_image?n.social_image:""},i.createElement(w,null,i.createElement(y,null,i.createElement(b,null),i.createElement(b,null),i.createElement(f,null)),i.createElement(k,null,i.createElement(_,null,i.createElement("article",null,i.createElement(z,null,n.title),i.createElement(C,null,n.date),i.createElement(I,{dangerouslySetInnerHTML:{__html:r}})),i.createElement(p,null),i.createElement(N,null,d&&i.createElement("div",null,i.createElement("span",null,"previous"),i.createElement(l.Link,{to:d.fields.slug}," ",d.frontmatter.title)),m&&i.createElement("div",null,i.createElement("span",null,"next"),i.createElement(l.Link,{to:m.fields.slug}," ",m.frontmatter.title))),i.createElement(c.Z,{tags:n.tags}))),i.createElement(E,null,i.createElement(b,null),i.createElement(b,null),i.createElement(f,null))))},w=d.default.div.withConfig({displayName:"post-template__BodyContainer",componentId:"sc-afk1br-0"})(["display:flex;"]),y=d.default.div.withConfig({displayName:"post-template__LeftContainer",componentId:"sc-afk1br-1"})(["display:none;",";"],x("md")(o||(o=n(["\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n  "])))),k=d.default.div.withConfig({displayName:"post-template__MiddleContainer",componentId:"sc-afk1br-2"})(["flex:3;"]),E=d.default.div.withConfig({displayName:"post-template__RightContainer",componentId:"sc-afk1br-3"})(["display:none;",";"],x("md")(r||(r=n(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"])))),_=d.default.div.withConfig({displayName:"post-template__PostWrapper",componentId:"sc-afk1br-4"})(["padding-top:var(--size-900);padding-bottom:var(--size-900);margin-left:auto;margin-right:auto;max-width:70ch;word-wrap:break-word;"]),z=d.default.h1.withConfig({displayName:"post-template__PostTitle",componentId:"sc-afk1br-5"})(["font-size:var(--size-700);"]),C=d.default.span.withConfig({displayName:"post-template__PostDate",componentId:"sc-afk1br-6"})(["font-size:var(--size-400);padding-top:1rem;text-transform:uppercase;"]),I=d.default.section.withConfig({displayName:"post-template__PostContent",componentId:"sc-afk1br-7"})(["padding-top:var(--size-800);& > * + *{margin-top:var(--size-300);}& > p + p{margin-top:var(--size-700);}* + h1,* + h2,* + h3{margin-top:var(--size-900);}h1{font-size:var(--size-700);}h2{font-size:var(--size-600);}h3{font-size:var(--size-500);}b,strong{font-weight:600;}a{color:inherit;text-decoration:underline;text-decoration-thickness:0.125rem;}blockquote{padding-left:var(--size-400);border-left:5px solid;font-style:italic;}code{font-family:'Source Sans Pro',monospace;overflow-x:auto;white-space:pre-wrap;}pre{overflow-x:auto;white-space:pre-wrap;max-width:100%;}"]),N=d.default.nav.withConfig({displayName:"post-template__PostPagination",componentId:"sc-afk1br-8"})(["display:flex;flex-wrap:wrap;margin-top:var(--size-900);& > *{position:relative;flex:1;display:flex;flex-direction:column;padding:1rem;padding-top:0.5rem;padding-bottom:0.5rem;border-radius:8px;border:1px solid rgba(255,255,255,0.5);background-color:rgba(255,255,255,0.3);backdrop-filter:blur(10px);margin:0.5rem;}& > *:hover{background-color:rgba(255,255,255,0.5);}& span{text-transform:uppercase;opacity:0.6;font-size:var(--size-400);padding-bottom:var(--size-500);}& a{color:inherit;text-decoration:none;font-size:var(--size-400);text-transform:capitalize;}& a::after{content:'';position:absolute;left:0;right:0;top:0;bottom:0;}"])}}]);
//# sourceMappingURL=component---src-templates-post-template-js-5220734a20c973e47b45.js.map