"use strict";(self.webpackChunkgatsby_starter_glass=self.webpackChunkgatsby_starter_glass||[]).push([[458],{7383:function(e,t,a){var r=a(7294),n=a(3494),i=a(1621);t.Z=e=>{let{posts:t}=e;const a=t.map((e=>{let{frontmatter:t,fields:a,excerpt:n,timeToRead:i}=e;const{title:s,tags:l,date:d,description:m}=t,{slug:p}=a;return r.createElement(o,{key:p,tags:l,title:s,date:d,slug:p,timeToRead:i,description:m,excerpt:n})}));return r.createElement(s,null,a)};const o=e=>{let{title:t,date:a,timeToRead:n,tags:o,excerpt:s,description:c,slug:g}=e;return r.createElement(l,null,r.createElement(i.Z,{tags:o}),r.createElement(d,null,r.createElement("a",{href:g},t)),r.createElement(m,{dangerouslySetInnerHTML:{__html:c||s}}),r.createElement(p,null,r.createElement("span",null,a),r.createElement("span",null,n," mins")))},s=n.default.ul.withConfig({displayName:"post-list__StyledPostList",componentId:"sc-rmizj4-0"})(["padding:0;list-style:none;display:grid;justify-items:center;grid-gap:var(--size-600);grid-template-columns:repeat(auto-fit,minmax(35ch,1fr));@media screen and (max-width:500px){&{display:block;}}"]),l=n.default.li.withConfig({displayName:"post-list__StyledPostListItem",componentId:"sc-rmizj4-1"})(["position:relative;display:flex;flex-direction:column;padding:1.5rem;border:1px solid rgba(255,255,255,0.5);background-color:rgba(255,255,255,0.3);backdrop-filter:blur(10px);border-radius:8px;&:hover{background-color:rgba(255,255,255,0.5);}@media screen and (max-width:500px){&{margin-top:var(--size-600);}}"]),d=n.default.h2.withConfig({displayName:"post-list__PostListTitle",componentId:"sc-rmizj4-2"})(["line-height:1.2;margin-top:1rem;margin-bottom:1rem;text-transform:capitalize;font-size:var(--size-700);font-weight:700;& a{text-decoration:none;color:inherit;}& a::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;}"]),m=n.default.p.withConfig({displayName:"post-list__PostListExcerpt",componentId:"sc-rmizj4-3"})(["margin-top:auto;font-size:var(--size-500);"]),p=n.default.div.withConfig({displayName:"post-list__PostListMeta",componentId:"sc-rmizj4-4"})(["margin-top:2rem;font-size:var(--size-400);display:flex;justify-content:space-between;"])},1444:function(e,t,a){var r=a(5444);const n=(0,a(3494).default)(r.Link).withConfig({displayName:"styled-link__StyledLink",componentId:"sc-1e3ktw4-0"})(["padding:0.5rem;padding-left:1.5rem;padding-right:1.5rem;color:inherit;background-color:rgba(255,255,255,0.4);text-decoration:none;border-radius:0px;border:1px solid rgba(255,255,255,0.8);text-transform:uppercase;border-radius:4px;"]);t.Z=n},1621:function(e,t,a){var r=a(7294),n=a(3494);t.Z=e=>{let{tags:t}=e;return r.createElement("div",null,t&&t.map((e=>{return r.createElement(i,{key:e},r.createElement("a",{href:`/tags/${t=e,t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((e=>e.toLowerCase())).join("-")}/`},e));var t})))};const i=n.default.span.withConfig({displayName:"tags__Tag",componentId:"sc-16itk8x-0"})(["margin-right:0.6rem;margin-bottom:0.6rem;text-transform:uppercase;font-size:var(--size-400);& a{position:relative;z-index:2;background-color:rgba(255,255,255,0.7);text-decoration:none;color:inherit;padding:0.2rem 0.6rem;border:1px solid rgba(255,255,255,1);border-radius:4px;}& a:hover{background-color:rgba(255,255,255,0.9);}"])},4835:function(e,t,a){a.r(t);var r=a(7294),n=a(6569),i=a(7383),o=a(1444),s=a(3494);t.default=e=>{let{pageContext:t,data:a}=e;const{tag:o}=t,{totalCount:s}=a.allMarkdownRemark,p=a.allMarkdownRemark.nodes,c=`Posts tagged ${o}`;return r.createElement(n.Z,{title:c},r.createElement(l,null,r.createElement(d,null,s,' posts tagged "',o,'"'),r.createElement("a",{style:{marginTop:"var(--size-400)",color:"inherit",textTransform:"uppercase"},href:"/tags/"},"view all tags"),r.createElement(i.Z,{posts:p}),r.createElement(m,{to:"/tags/"},"View All tags")))};const l=s.default.div.withConfig({displayName:"tags-template__TagsTemplateWrapper",componentId:"sc-1wm19nq-0"})(["padding-top:var(--size-900);"]),d=s.default.h1.withConfig({displayName:"tags-template__Title",componentId:"sc-1wm19nq-1"})(["font-size:var(--size-800);"]);var m=(0,s.default)(o.Z).withConfig({displayName:"tags-template___StyledStyledLink",componentId:"sc-1wm19nq-2"})(["margin-top:var(--size-400);display:inline-block;"])}}]);