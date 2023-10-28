/*! For license information please see component---src-templates-contact-template-js-166d59213bd4c79dc1cc.js.LICENSE.txt */
"use strict";(self.webpackChunkgatsby_starter_glass=self.webpackChunkgatsby_starter_glass||[]).push([[987],{267:function(e,t,r){r.r(t),r.d(t,{default:function(){return qe}});var n=r(7294),i=r(6569),a=e=>e instanceof HTMLElement;const s={BLUR:"blur",CHANGE:"change",INPUT:"input"},o={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},c="select",u="undefined",l="max",d="min",f="maxLength",p="minLength",h="pattern",m="required",g="validate";var y=e=>null==e;const v=e=>"object"==typeof e;var b=e=>!y(e)&&!Array.isArray(e)&&v(e)&&!(e instanceof Date),E=e=>/^\w*$/.test(e),O=e=>e.filter(Boolean),R=e=>O(e.replace(/["|']/g,"").replace(/\[/g,".").replace(/\]/g,"").split("."));function w(e,t,r){let n=-1;const i=E(t)?[t]:R(t),a=i.length,s=a-1;for(;++n<a;){const t=i[n];let a=r;if(n!==s){const r=e[t];a=b(r)||Array.isArray(r)?r:isNaN(+i[n+1])?{}:[]}e[t]=a,e=e[t]}return e}var C=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(const r in e)E(r)?t[r]=e[r]:w(t,r,e[r]);return t},S=e=>void 0===e,A=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;const n=O(t.split(/[,[\].]+?/)).reduce(((e,t)=>y(e)?e:e[t]),e);return S(n)||n===e?S(e[t])?r:e[t]:n},k=(e,t)=>{a(e)&&e.removeEventListener&&(e.removeEventListener(s.INPUT,t),e.removeEventListener(s.CHANGE,t),e.removeEventListener(s.BLUR,t))};const x={isValid:!1,value:null};var _=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.ref.checked?{isValid:!0,value:t.ref.value}:e),x):x,j=e=>[...e].filter((e=>{let{selected:t}=e;return t})).map((e=>{let{value:t}=e;return t})),N=e=>"radio"===e.type,V=e=>"file"===e.type,F=e=>"checkbox"===e.type,L=e=>e.type===`${c}-multiple`;const D={value:!1,isValid:!1},T={value:!0,isValid:!0};var I=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.ref.checked)).map((e=>{let{ref:{value:t}}=e;return t}));return{value:t,isValid:!!t.length}}const{checked:t,value:r,attributes:n}=e[0].ref;return t?n&&!S(n.value)?S(r)||""===r?T:{value:r,isValid:!0}:T:D}return D};function M(e,t,r,n,i){const a=e.current[t];if(a){const{ref:{value:e,disabled:t},ref:r,valueAsNumber:s,valueAsDate:o,setValueAs:c}=a;if(t&&n)return;return V(r)?r.files:N(r)?_(a.options).value:L(r)?j(r.options):F(r)?I(a.options).value:i?e:s?""===e?NaN:+e:o?r.valueAsDate:c?c(e):e}if(r)return A(r.current,t)}function U(e){return!e||e instanceof HTMLElement&&e.nodeType!==Node.DOCUMENT_NODE&&U(e.parentNode)}var P=e=>b(e)&&!Object.keys(e).length,B=e=>"boolean"==typeof e;function z(e,t){const r=E(t)?[t]:R(t),n=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let n=0;for(;n<r;)e=S(e)?n++:e[t[n++]];return e}(e,r),i=r[r.length-1];let a;n&&delete n[i];for(let s=0;s<r.slice(0,-1).length;s++){let t,n=-1;const i=r.slice(0,-(s+1)),o=i.length-1;for(s>0&&(a=e);++n<i.length;){const r=i[n];t=t?t[r]:e[r],o===n&&(b(t)&&P(t)||Array.isArray(t)&&!t.filter((e=>b(e)&&!P(e)||B(e))).length)&&(a?delete a[r]:delete e[r]),a=t}}return e}const H=(e,t)=>e&&e.ref===t;var W=e=>y(e)||!v(e);function q(e,t){if(W(e)||W(t))return t;for(const n in t){const i=e[n],a=t[n];try{e[n]=b(i)&&b(a)||Array.isArray(i)&&Array.isArray(a)?q(i,a):a}catch(r){}}return e}function G(e,t,r){if(W(e)||W(t)||e instanceof Date||t instanceof Date)return e===t;if(!(0,n.isValidElement)(e)){const n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(const a of n){const n=e[a];if(!r||"ref"!==a){const e=t[a];if((b(n)||Array.isArray(n))&&(b(e)||Array.isArray(e))?!G(n,e,r):n!==e)return!1}}}return!0}function $(e,t,r,n,i){let a=-1;for(;++a<e.length;){for(const n in e[a])Array.isArray(e[a][n])?(!r[a]&&(r[a]={}),r[a][n]=[],$(e[a][n],A(t[a]||{},n,[]),r[a][n],r[a],n)):G(A(t[a]||{},n),e[a][n])?w(r[a]||{},n):r[a]=Object.assign(Object.assign({},r[a]),{[n]:!0});n&&!r.length&&delete n[i]}return r}var Y=(e,t,r)=>q($(e,t,r.slice(0,e.length)),$(t,e,r.slice(0,e.length))),Z=e=>"string"==typeof e,J=(e,t,r,n,i)=>{const a={};for(const s in e.current)(S(i)||(Z(i)?s.startsWith(i):Array.isArray(i)&&i.find((e=>s.startsWith(e)))))&&(a[s]=M(e,s,void 0,n));return r?C(a):q(t,C(a))},K=e=>e instanceof RegExp,Q=e=>b(e)&&!K(e)?e:{value:e,message:""},X=e=>"function"==typeof e,ee=e=>Z(e)||(0,n.isValidElement)(e);function te(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"validate";if(ee(e)||B(e)&&!e)return{type:r,message:ee(e)?e:"",ref:t}}var re=(e,t,r,n,i)=>t?Object.assign(Object.assign({},r[e]),{types:Object.assign(Object.assign({},r[e]&&r[e].types?r[e].types:{}),{[n]:i||!0})}):{},ne=async(e,t,r,n)=>{let{ref:i,ref:{value:a},options:s,required:o,maxLength:c,minLength:u,min:v,max:E,pattern:O,validate:R}=r;const w=i.name,C={},S=N(i),A=F(i),k=S||A,x=""===a,j=re.bind(null,w,t,C),V=function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:f,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:p;const s=e?t:r;C[w]=Object.assign({type:e?n:a,message:s,ref:i},j(e?n:a,s))};if(o&&(!S&&!A&&(x||y(a))||B(a)&&!a||A&&!I(s).isValid||S&&!_(s).isValid)){const{value:r,message:n}=ee(o)?{value:!!o,message:o}:Q(o);if(r&&(C[w]=Object.assign({type:m,message:n,ref:k?((e.current[w].options||[])[0]||{}).ref:i},j(m,n)),!t))return C}if(!(y(v)&&y(E)||""===a)){let e,r;const n=Q(E),s=Q(v);if(isNaN(a)){const t=i.valueAsDate||new Date(a);Z(n.value)&&(e=t>new Date(n.value)),Z(s.value)&&(r=t<new Date(s.value))}else{const t=i.valueAsNumber||parseFloat(a);y(n.value)||(e=t>n.value),y(s.value)||(r=t<s.value)}if((e||r)&&(V(!!e,n.message,s.message,l,d),!t))return C}if(Z(a)&&!x&&(c||u)){const e=Q(c),r=Q(u),n=!y(e.value)&&a.length>e.value,i=!y(r.value)&&a.length<r.value;if((n||i)&&(V(n,e.message,r.message),!t))return C}if(Z(a)&&O&&!x){const{value:e,message:r}=Q(O);if(K(e)&&!e.test(a)&&(C[w]=Object.assign({type:h,message:r,ref:i},j(h,r)),!t))return C}if(R){const r=M(e,w,n,!1,!0),a=k&&s?s[0].ref:i;if(X(R)){const e=te(await R(r),a);if(e&&(C[w]=Object.assign(Object.assign({},e),j(g,e.message)),!t))return C}else if(b(R)){let e={};for(const[n,i]of Object.entries(R)){if(!P(e)&&!t)break;const s=te(await i(r),a,n);s&&(e=Object.assign(Object.assign({},s),j(n,s.message)),t&&(C[w]=e))}if(!P(e)&&(C[w]=Object.assign({ref:a},e),!t))return C}}return C};const ie=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];for(const n in t){const i=e+(b(t)?`.${n}`:`[${n}]`);W(t[n])?r.push(i):ie(i,t[n],r)}return r};var ae=(e,t,r,n,i)=>{let a;return r.add(t),P(e)||(a=A(e,t),(b(a)||Array.isArray(a))&&ie(t,a).forEach((e=>r.add(e)))),S(a)?i?n:A(n,t):a},se=e=>{let{isOnBlur:t,isOnChange:r,isOnTouch:n,isTouched:i,isReValidateOnBlur:a,isReValidateOnChange:s,isBlurEvent:o,isSubmitted:c,isOnAll:u}=e;return!u&&(!c&&n?!(i||o):(c?a:t)?!o:!(c?s:r)||o)},oe=e=>e.substring(0,e.indexOf("["));const ce=(e,t)=>RegExp(`^${t}([|.)\\d+`.replace(/\[/g,"\\[").replace(/\]/g,"\\]")).test(e);var ue=(e,t)=>[...e].some((e=>ce(t,e)));var le=typeof window!==u&&typeof document!==u;function de(e){var t;let r;if(W(e)||le&&(e instanceof File||a(e)))return e;if(!["Set","Map","Object","Date","Array"].includes(null===(t=e.constructor)||void 0===t?void 0:t.name))return e;if(e instanceof Date)return r=new Date(e.getTime()),r;if(e instanceof Set){r=new Set;for(const t of e)r.add(t);return r}if(e instanceof Map){r=new Map;for(const t of e.keys())r.set(t,de(e.get(t)));return r}r=Array.isArray(e)?[]:{};for(const n in e)r[n]=de(e[n]);return r}var fe=e=>({isOnSubmit:!e||e===o.onSubmit,isOnBlur:e===o.onBlur,isOnChange:e===o.onChange,isOnAll:e===o.all,isOnTouch:e===o.onTouched}),pe=e=>N(e)||F(e);const he=typeof window===u,me=le?"Proxy"in window:typeof Proxy!==u;function ge(){let{mode:e=o.onSubmit,reValidateMode:t=o.onChange,resolver:r,context:i,defaultValues:u={},shouldFocusError:l=!0,shouldUnregister:d=!0,criteriaMode:f}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const p=(0,n.useRef)({}),h=(0,n.useRef)({}),m=(0,n.useRef)({}),g=(0,n.useRef)(new Set),v=(0,n.useRef)({}),R=(0,n.useRef)({}),x=(0,n.useRef)({}),_=(0,n.useRef)({}),j=(0,n.useRef)(u),D=(0,n.useRef)(!1),T=(0,n.useRef)(!1),I=(0,n.useRef)(),B=(0,n.useRef)({}),q=(0,n.useRef)({}),$=(0,n.useRef)(i),K=(0,n.useRef)(r),Q=(0,n.useRef)(new Set),ee=(0,n.useRef)(fe(e)),{isOnSubmit:te,isOnTouch:re}=ee.current,ce=f===o.all,[ge,ye]=(0,n.useState)({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touched:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!te,errors:{}}),ve=(0,n.useRef)({isDirty:!me,dirtyFields:!me,touched:!me||re,isValidating:!me,isSubmitting:!me,isValid:!me}),be=(0,n.useRef)(ge),Ee=(0,n.useRef)(),{isOnBlur:Oe,isOnChange:Re}=(0,n.useRef)(fe(t)).current;$.current=i,K.current=r,be.current=ge,B.current=d?{}:P(B.current)?de(u):B.current;const we=(0,n.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};D.current||(be.current=Object.assign(Object.assign({},be.current),e),ye(be.current))}),[]),Ce=()=>ve.current.isValidating&&we({isValidating:!0}),Se=(0,n.useCallback)((function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,a=r||(e=>{let{errors:t,name:r,error:n,validFields:i,fieldsWithValidation:a}=e;const s=S(n),o=A(t,r);return s&&!!o||!s&&!G(o,n,!0)||s&&A(a,r)&&!A(i,r)})({errors:be.current.errors,error:t,name:e,validFields:_.current,fieldsWithValidation:x.current});const s=A(be.current.errors,e);t?(z(_.current,e),a=a||!s||!G(s,t,!0),w(be.current.errors,e,t)):((A(x.current,e)||K.current)&&(w(_.current,e,!0),a=a||s),z(be.current.errors,e)),(a&&!y(r)||!P(n)||ve.current.isValidating)&&we(Object.assign(Object.assign(Object.assign({},n),K.current?{isValid:!!i}:{}),{isValidating:!1}))}),[]),Ae=(0,n.useCallback)(((e,t)=>{const{ref:r,options:n}=p.current[e],i=le&&a(r)&&y(t)?"":t;N(r)?(n||[]).forEach((e=>{let{ref:t}=e;return t.checked=t.value===i})):V(r)&&!Z(i)?r.files=i:L(r)?[...r.options].forEach((e=>e.selected=i.includes(e.value))):F(r)&&n?n.length>1?n.forEach((e=>{let{ref:t}=e;return t.checked=Array.isArray(i)?!!i.find((e=>e===t.value)):i===t.value})):n[0].ref.checked=!!i:r.value=i}),[]),ke=(0,n.useCallback)(((e,t)=>{if(ve.current.isDirty){const r=Ie();return e&&t&&w(r,e,t),!G(r,j.current)}return!1}),[]),xe=(0,n.useCallback)((function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(ve.current.isDirty||ve.current.dirtyFields){const r=!G(A(j.current,e),M(p,e,B)),n=A(be.current.dirtyFields,e),i=be.current.isDirty;r?w(be.current.dirtyFields,e,!0):z(be.current.dirtyFields,e);const a={isDirty:ke(),dirtyFields:be.current.dirtyFields},s=ve.current.isDirty&&i!==a.isDirty||ve.current.dirtyFields&&n!==A(be.current.dirtyFields,e);return s&&t&&we(a),s?a:{}}return{}}),[]),_e=(0,n.useCallback)((async(e,t)=>{const r=(await ne(p,ce,p.current[e],B))[e];return Se(e,r,t),S(r)}),[Se,ce]),je=(0,n.useCallback)((async e=>{const{errors:t}=await K.current(Ie(),$.current,ce),r=be.current.isValid;if(Array.isArray(e)){const r=e.map((e=>{const r=A(t,e);return r?w(be.current.errors,e,r):z(be.current.errors,e),!r})).every(Boolean);return we({isValid:P(t),isValidating:!1}),r}{const n=A(t,e);return Se(e,n,r!==P(t),{},P(t)),!n}}),[Se,ce]),Ne=(0,n.useCallback)((async e=>{const t=e||Object.keys(p.current);if(Ce(),K.current)return je(t);if(Array.isArray(t)){!e&&(be.current.errors={});const r=await Promise.all(t.map((async e=>await _e(e,null))));return we({isValidating:!1}),r.every(Boolean)}return await _e(t)}),[je,_e]),Ve=(0,n.useCallback)(((e,t,r)=>{let{shouldDirty:n,shouldValidate:i}=r;const a={};w(a,e,t);for(const s of ie(e,t))p.current[s]&&(Ae(s,A(a,s)),n&&xe(s),i&&Ne(s))}),[Ne,Ae,xe]),Fe=(0,n.useCallback)(((e,t,r)=>{if(!d&&!W(t)&&w(B.current,e,Array.isArray(t)?[...t]:Object.assign({},t)),p.current[e])Ae(e,t),r.shouldDirty&&xe(e),r.shouldValidate&&Ne(e);else if(!W(t)&&(Ve(e,t,r),Q.current.has(e))){const n=oe(e)||e;w(h.current,e,t),q.current[n]({[n]:A(h.current,n)}),(ve.current.isDirty||ve.current.dirtyFields)&&r.shouldDirty&&(w(be.current.dirtyFields,e,Y(t,A(j.current,e,[]),A(be.current.dirtyFields,e,[]))),we({isDirty:!G(Object.assign(Object.assign({},Ie()),{[e]:t}),j.current)}))}!d&&w(B.current,e,t)}),[xe,Ae,Ve]),Le=e=>T.current||g.current.has(e)||g.current.has((e.match(/\w+/)||[])[0]),De=e=>{let t=!0;if(!P(v.current))for(const r in v.current)e&&v.current[r].size&&!v.current[r].has(e)&&!v.current[r].has(oe(e))||(R.current[r](),t=!1);return t};function Te(e){if(!d){let t=de(e);for(const e of Q.current)E(e)&&!t[e]&&(t=Object.assign(Object.assign({},t),{[e]:[]}));return t}return e}function Ie(e){if(Z(e))return M(p,e,B);if(Array.isArray(e)){const t={};for(const r of e)w(t,r,M(p,r,B));return t}return Te(J(p,de(B.current),d))}I.current=I.current?I.current:async e=>{let{type:t,target:r}=e,n=r.name;const i=p.current[n];let a,o;if(i){const e=t===s.BLUR,c=se(Object.assign({isBlurEvent:e,isReValidateOnChange:Re,isReValidateOnBlur:Oe,isTouched:!!A(be.current.touched,n),isSubmitted:be.current.isSubmitted},ee.current));let u=xe(n,!1),l=!P(u)||!e&&Le(n);if(e&&!A(be.current.touched,n)&&ve.current.touched&&(w(be.current.touched,n,!0),u=Object.assign(Object.assign({},u),{touched:be.current.touched})),!d&&F(r)&&w(B.current,n,M(p,n)),c)return!e&&De(n),(!P(u)||l&&P(u))&&we(u);if(Ce(),K.current){const{errors:e}=await K.current(Ie(),$.current,ce),t=be.current.isValid;if(a=A(e,n),F(r)&&!a&&K.current){const t=oe(n),r=A(e,t,{});r.type&&r.message&&(a=r),t&&(r||A(be.current.errors,t))&&(n=t)}o=P(e),t!==o&&(l=!0)}else a=(await ne(p,ce,i,B))[n];!e&&De(n),Se(n,a,l,u,o)}};const Me=(0,n.useCallback)((async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=P(p.current)?j.current:{},{errors:r}=await K.current(Object.assign(Object.assign(Object.assign({},t),Ie()),e),$.current,ce)||{},n=P(r);be.current.isValid!==n&&we({isValid:n})}),[ce]),Ue=(0,n.useCallback)(((e,t)=>{!function(e,t,r,n,i,a){const{ref:s,ref:{name:o}}=r,c=e.current[o];if(!i){const t=M(e,o,n);!S(t)&&w(n.current,o,t)}s.type&&c?N(s)||F(s)?Array.isArray(c.options)&&c.options.length?(O(c.options).forEach((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;(U(e.ref)&&H(e,e.ref)||a)&&(k(e.ref,t),z(c.options,`[${r}]`))})),c.options&&!O(c.options).length&&delete e.current[o]):delete e.current[o]:(U(s)&&H(c,s)||a)&&(k(s,t),delete e.current[o]):delete e.current[o]}(p,I.current,e,B,d,t),d&&(z(_.current,e.ref.name),z(x.current,e.ref.name))}),[d]),Pe=(0,n.useCallback)((e=>{if(T.current)we();else{for(const t of g.current)if(t.startsWith(e)){we();break}De(e)}}),[]),Be=(0,n.useCallback)(((e,t)=>{e&&(Ue(e,t),d&&!O(e.options||[]).length&&(z(be.current.errors,e.ref.name),w(be.current.dirtyFields,e.ref.name,!0),we({isDirty:ke()}),ve.current.isValid&&K.current&&Me(),Pe(e.ref.name)))}),[Me,Ue]);const ze=(0,n.useCallback)(((e,t,r)=>{const n=r?v.current[r]:g.current;let i=J(p,de(B.current),d,!1,e);if(Z(e)){const r=oe(e)||e;return Q.current.has(r)&&(i=Object.assign(Object.assign({},m.current),i)),ae(i,e,n,S(A(j.current,e))?t:A(j.current,e),!0)}const a=S(t)?j.current:t;return Array.isArray(e)?e.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:ae(i,t,n,a)})),{}):(T.current=S(r),C(!P(i)&&i||a))}),[]);function He(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{name:r,type:n,value:i}=e,o=Object.assign({ref:e},t),u=p.current,l=pe(e),f=ue(Q.current,r),h=t=>le&&(!a(e)||t===e);let m,g=u[r],y=!0;if(g&&(l?Array.isArray(g.options)&&O(g.options).find((e=>i===e.ref.value&&h(e.ref))):h(g.ref)))return void(u[r]=Object.assign(Object.assign({},g),t));g=n?l?Object.assign({options:[...O(g&&g.options||[]),{ref:e}],ref:{type:n,name:r}},t):Object.assign({},o):o,u[r]=g;const v=S(A(B.current,r));P(j.current)&&v||(m=A(v?j.current:B.current,r),y=S(m),y||f||Ae(r,m)),P(t)||(w(x.current,r,!0),!te&&ve.current.isValid&&ne(p,ce,g,B).then((e=>{const t=be.current.isValid;P(e)?w(_.current,r,!0):z(_.current,r),t!==P(e)&&we()}))),!d||f&&y||!f&&z(be.current.dirtyFields,r),n&&function(e,t,r){let{ref:n}=e;a(n)&&r&&(n.addEventListener(t?s.CHANGE:s.INPUT,r),n.addEventListener(s.BLUR,r))}(l&&g.options?g.options[g.options.length-1]:g,l||e.type===`${c}-one`,I.current)}const We=(0,n.useCallback)(((e,t)=>async r=>{r&&r.preventDefault&&(r.preventDefault(),r.persist());let n={},i=Te(J(p,de(B.current),d,!0));ve.current.isSubmitting&&we({isSubmitting:!0});try{if(K.current){const{errors:e,values:t}=await K.current(i,$.current,ce);be.current.errors=n=e,i=t}else for(const e of Object.values(p.current))if(e){const{name:t}=e.ref,r=await ne(p,ce,e,B);r[t]?(w(n,t,r[t]),z(_.current,t)):A(x.current,t)&&(z(be.current.errors,t),w(_.current,t,!0))}P(n)&&Object.keys(be.current.errors).every((e=>e in p.current))?(we({errors:{},isSubmitting:!0}),await e(i,r)):(be.current.errors=Object.assign(Object.assign({},be.current.errors),n),t&&await t(be.current.errors,r),l&&((e,t)=>{for(const r in e)if(A(t,r)){const t=e[r];if(t){if(t.ref.focus&&S(t.ref.focus()))break;if(t.options){t.options[0].ref.focus();break}}}})(p.current,be.current.errors))}finally{be.current.isSubmitting=!1,we({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:P(be.current.errors),submitCount:be.current.submitCount+1})}}),[l,ce]);(0,n.useEffect)((()=>{r&&ve.current.isValid&&Me(),Ee.current=Ee.current||!le?Ee.current:function(e,t){const r=new MutationObserver((()=>{for(const r of Object.values(e.current))if(r&&r.options)for(const e of r.options)e&&e.ref&&U(e.ref)&&t(r);else r&&U(r.ref)&&t(r)}));return r.observe(window.document,{childList:!0,subtree:!0}),r}(p,Be)}),[Be,j.current]),(0,n.useEffect)((()=>()=>{Ee.current&&Ee.current.disconnect(),D.current=!0,Object.values(p.current).forEach((e=>Be(e,!0)))}),[]),!r&&ve.current.isValid&&(ge.isValid=G(_.current,x.current)&&P(be.current.errors));const qe={trigger:Ne,setValue:(0,n.useCallback)((function(e,t,r){Fe(e,t,r||{}),Le(e)&&we(),De(e)}),[Fe,Ne]),getValues:(0,n.useCallback)(Ie,[]),register:(0,n.useCallback)((function(e,t){if(!he)if(Z(e))He({name:e},t);else{if(!b(e)||!("name"in e))return t=>t&&He(t,e);He(e,t)}}),[j.current]),unregister:(0,n.useCallback)((function(e){for(const t of Array.isArray(e)?e:[e])Be(p.current[t],!0)}),[]),formState:me?new Proxy(ge,{get:(e,t)=>{if(t in e)return ve.current[t]=!0,e[t]}}):ge},Ge=(0,n.useMemo)((()=>Object.assign({isFormDirty:ke,updateWatchedValue:Pe,shouldUnregister:d,updateFormState:we,removeFieldEventListener:Ue,watchInternal:ze,mode:ee.current,reValidateMode:{isReValidateOnBlur:Oe,isReValidateOnChange:Re},validateResolver:r?Me:void 0,fieldsRef:p,resetFieldArrayFunctionRef:q,useWatchFieldsRef:v,useWatchRenderFunctionsRef:R,fieldArrayDefaultValuesRef:h,validFieldsRef:_,fieldsWithValidationRef:x,fieldArrayNamesRef:Q,readFormStateRef:ve,formStateRef:be,defaultValuesRef:j,shallowFieldsStateRef:B,fieldArrayValuesRef:m},qe)),[j.current,Pe,d,Ue,ze]);return Object.assign({watch:function(e,t){return ze(e,t)},control:Ge,handleSubmit:We,reset:(0,n.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(le)for(const n of Object.values(p.current))if(n){const{ref:e,options:t}=n,i=pe(e)&&Array.isArray(t)?t[0].ref:e;if(a(i))try{i.closest("form").reset();break}catch(r){}}p.current={},j.current=Object.assign({},e||j.current),e&&De(""),Object.values(q.current).forEach((e=>X(e)&&e())),B.current=d?{}:de(e||j.current),(e=>{let{errors:t,isDirty:r,isSubmitted:n,touched:i,isValid:a,submitCount:s,dirtyFields:o}=e;a||(_.current={},x.current={}),h.current={},g.current=new Set,T.current=!1,we({submitCount:s?be.current.submitCount:0,isDirty:!!r&&be.current.isDirty,isSubmitted:!!n&&be.current.isSubmitted,isValid:!!a&&be.current.isValid,dirtyFields:o?be.current.dirtyFields:{},touched:i?be.current.touched:{},errors:t?be.current.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})})(t)}),[]),clearErrors:(0,n.useCallback)((function(e){e&&(Array.isArray(e)?e:[e]).forEach((e=>p.current[e]&&E(e)?delete be.current.errors[e]:z(be.current.errors,e))),we({errors:e?be.current.errors:{}})}),[]),setError:(0,n.useCallback)((function(e,t){const r=(p.current[e]||{}).ref;w(be.current.errors,e,Object.assign(Object.assign({},t),{ref:r})),we({isValid:!1}),t.shouldFocus&&r&&r.focus&&r.focus()}),[]),errors:ge.errors},qe)}const ye=(0,n.createContext)(null);ye.displayName="RHFContext";function ve(){return ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ve.apply(this,arguments)}function be(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Ee=function(e){var t,r;function i(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(be(t)),t.handleErrored=t.handleErrored.bind(be(t)),t.handleChange=t.handleChange.bind(be(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(be(t)),t}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},a.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},a.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},a.executeAsync=function(){var e=this;return new Promise((function(t,r){e.executionResolve=t,e.executionReject=r,e.execute()}))},a.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},a.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},a.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},a.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},a.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},a.componentDidMount=function(){this.explicitRender()},a.componentDidUpdate=function(){this.explicitRender()},a.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},a.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},a.handleRecaptchaRef=function(e){this.captcha=e},a.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return n.createElement("div",ve({},t,{ref:this.handleRecaptchaRef}))},i}(n.Component);Ee.displayName="ReCAPTCHA",Ee.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var Oe=r(5697),Re=r.n(Oe),we=r(5706),Ce=r.n(we);function Se(){return Se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Se.apply(this,arguments)}var Ae={},ke=0;var xe="onloadcallback";var _e,je;(_e=function(){return"https://"+(("undefined"!=typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+xe+"&render=explicit"},je=(je={callbackName:xe,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",r=function(t){var r,i;function a(e,r){var n;return(n=t.call(this,e,r)||this).state={},n.__scriptURL="",n}i=t,(r=a).prototype=Object.create(i.prototype),r.prototype.constructor=r,r.__proto__=i;var s=a.prototype;return s.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+ke++),this.__scriptLoaderID},s.setupScriptURL=function(){return this.__scriptURL="function"==typeof _e?_e():_e,this.__scriptURL},s.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},s.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=Ae[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[je.callbackName]},s.componentDidMount=function(){var e=this,t=this.setupScriptURL(),r=this.asyncScriptLoaderGetScriptLoaderID(),n=je,i=n.globalName,a=n.callbackName,s=n.scriptId;if(i&&void 0!==window[i]&&(Ae[t]={loaded:!0,observers:{}}),Ae[t]){var o=Ae[t];return o&&(o.loaded||o.errored)?void this.asyncScriptLoaderHandleLoad(o):void(o.observers[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var c={};c[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)},Ae[t]={loaded:!1,observers:c};var u=document.createElement("script");for(var l in u.src=t,u.async=!0,je.attributes)u.setAttribute(l,je.attributes[l]);s&&(u.id=s);var d=function(e){if(Ae[t]){var r=Ae[t].observers;for(var n in r)e(r[n])&&delete r[n]}};a&&"undefined"!=typeof window&&(window[a]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),u.onload=function(){var e=Ae[t];e&&(e.loaded=!0,d((function(t){return!a&&(t(e),!0)})))},u.onerror=function(){var e=Ae[t];e&&(e.errored=!0,d((function(t){return t(e),!0})))},document.body.appendChild(u)},s.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===je.removeOnUnmount)for(var t=document.getElementsByTagName("script"),r=0;r<t.length;r+=1)t[r].src.indexOf(e)>-1&&t[r].parentNode&&t[r].parentNode.removeChild(t[r]);var n=Ae[e];n&&(delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===je.removeOnUnmount&&delete Ae[e])},s.render=function(){var t=je.globalName,r=this.props,i=(r.asyncScriptOnLoad,r.forwardedRef),a=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(r,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!=typeof window&&(a[t]=void 0!==window[t]?window[t]:void 0),a.ref=i,(0,n.createElement)(e,a)},a}(n.Component),i=(0,n.forwardRef)((function(e,t){return(0,n.createElement)(r,Se({},e,{forwardedRef:t}))}));return i.displayName="AsyncScriptLoader("+t+")",i.propTypes={asyncScriptOnLoad:Re().func},Ce()(i,e)})(Ee);function Ne(){return Ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ne.apply(this,arguments)}function Ve(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}var Fe=["children"],Le=n.createContext();Le.displayName="NetlifyFormContext";var De=function(e){var t=e.children,r=Ve(e,Fe);return n.createElement(Le.Provider,{value:Ne({},r)},t)};function Te(){return n.useContext(Le)}var Ie=["label"],Me=function(e){var t=e.label,r=void 0===t?"Leave the following field empty:":t,i=Ve(e,Ie),a=Te(),s=a.handleChange,o=a.honeypotName;return n.createElement("p",{hidden:!0},n.createElement("label",null,r," ",n.createElement("input",Ne({type:"text"},i,{name:o,onChange:s}))))},Ue=function(e){for(var t=new FormData,r=0,n=Object.keys(e);r<n.length;r++){var i=n[r];t.append(i,e[i])}return t};function Pe(e,t){var r=t.type,n=t.payload;switch(r){case"CHANGE_FORM_DATA":var i,a=n.name,s=n.value,o=n.type;return Ne({},e,{values:Ne({},e.values,(i={},i[a]="checkbox"!==o?s:n.checked,i))});case"RESET_FORM":return Ne({},e,{values:n});case"SET_SUCCESS":return Ne({},e,{success:!0,error:!1,submitting:!1,submitted:!0});case"SET_ERROR":return Ne({},e,{success:!1,error:!0,submitting:!1});case"SET_SUBMITTING":return Ne({},e,{submitting:!0});case"SET_HONEYPOT_NAME":return Ne({},e,{honeypotName:n});case"ENABLE_RECAPTCHA":return Ne({},e,{recaptchaEnabled:n});default:throw new Error('Action type "'+r+'" is not defined.')}}var Be=["children"],ze=function(e){var t=e.children,r=Ve(e,Be),i=Te(),a=i.formRef,s=i.formName,o=i.formAction,c=i.honeypotName,u=i.recaptchaEnabled,l=i.handleSubmit,d=i.handleReset,f={};return c&&(f["data-netlify-honeypot"]=c),u&&(f["data-netlify-recaptcha"]=!0),n.createElement("form",Ne({ref:a,method:"post",name:s,action:o,onSubmit:l,onReset:d,"data-netlify":!0},f,r),n.createElement("input",{type:"hidden",name:"form-name",value:s}),t?"function"==typeof t?t(i):function(e){return 0===n.Children.count(e)}(t)?null:t:null)},He=function(e){var t=e.name,r=void 0===t?"Form":t,i=e.action,a=void 0===i?"":i,s=e.honeypotName,o=void 0===s?"":s,c=e.enableRecaptcha,u=void 0!==c&&c,l=e.onSuccess,d=void 0===l?function(){}:l,f=e.onFailure,p=void 0===f?function(){}:f,h={},m={success:!1,error:!1,submitting:!1,submitted:!1,response:null,values:h,formName:r,formAction:a,honeypotName:o,recaptchaEnabled:u,recaptchaInvisible:!1},g=n.useReducer(Pe,m),y=g[0],v=g[1],b=n.useRef(null),E=n.useRef(null),O=n.useCallback((function(e){return v({type:"SET_HONEYPOT_NAME",payload:e})}),[]),R=n.useCallback((function(e){return v({type:"ENABLE_RECAPTCHA",payload:e})}),[]);return Ne({},y,{handleChange:function(e){var t=e.target,r=t.name,n=t.value,i=t.files;v({type:"CHANGE_FORM_DATA",payload:null!=i&&i.length>0?{name:r,value:i[0]}:{name:r,value:n}})},handleSubmit:function(e,t){void 0===e&&(e=null),void 0===t&&(t={});try{var r=function(e){return n?e:(v({type:"SET_SUBMITTING"}),Promise.resolve(fetch("/",{method:"POST",body:Ue(i)})).then((function(e){var t={state:y,formRef:b,recaptchaRef:E};return 200!==e.status?(v({type:"SET_ERROR"}),p(e,t)):(v({type:"SET_SUCCESS"}),d(e,t))})))},n=!1;e&&e.preventDefault();var i=Ne({"form-name":y.formName},t,y.values),a=function(){if(y.recaptchaEnabled){var e=function(e){i["g-recaptcha-response"]=e};if(null===E.current)throw new Error("reCAPTCHA is enabled but reference not found, make sure you render the reCAPTCHA-component somewhere.");return"invisible"===E.current.props.size?Promise.resolve(E.current.executeAsync()).then(e):e(E.current.getValue())}}();return Promise.resolve(a&&a.then?a.then(r):r(a))}catch(s){return Promise.reject(s)}},handleReset:function(){v({type:"RESET_FORM",payload:h})},setHoneypotName:O,enableRecaptcha:R,formRef:b,recaptchaRef:E})},We=r(3494);var qe=e=>{let{data:t}=e;const{html:r,frontmatter:a}=t.markdownRemark;return n.createElement(i.Z,{title:a.title},n.createElement($e,null,n.createElement(Ye,{dangerouslySetInnerHTML:{__html:r}}),n.createElement(Ge,null)))};const Ge=()=>{const{register:e,handleSubmit:t,errors:r}=ge(),i=He({name:"Contact",action:"/thanks",honeypotName:"bot-field"});return n.createElement(Ze,null,n.createElement(De,i,n.createElement(ze,{onSubmit:t((e=>{i.handleSubmit(null,e),console.log(e)}))},n.createElement(Me,null),n.createElement(Je,null,n.createElement("label",{htmlFor:"name"},"Name"),n.createElement("input",{id:"name",name:"name",type:"text",ref:e({required:"Name is required"})}),r.name&&n.createElement(Ke,null,r.name.message)),n.createElement(Je,null,n.createElement("label",{htmlFor:"email"},"Email"),n.createElement("input",{id:"email",name:"email",type:"text",ref:e({required:"Email is required.",pattern:{message:"Email is not valid.",value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/}})}),r.email&&n.createElement(Ke,null,r.email.message)),n.createElement(Je,null,n.createElement("label",{htmlFor:"message"},"Your message"),n.createElement("textarea",{id:"message",name:"message",rows:"4",ref:e({required:"Message is required"})}),r.message&&n.createElement(Ke,null,r.message.message)),n.createElement(Qe,null,i.success&&n.createElement(Xe,null,"Message sent succesfully"),i.error&&n.createElement(et,null,"Something want wrong, please try again.")),n.createElement(tt,{type:"submit"},"Send Message"))))},$e=We.default.div.withConfig({displayName:"contact-template__ContactWrapper",componentId:"sc-gu7eak-0"})(["display:flex;align-items:center;height:100%;justify-content:space-around;margin-top:1rem;padding-bottom:1rem;& > *{flex:1;}@media screen and (max-width:1000px){&{flex-direction:column;justify-content:flex-start;}& > *{margin-top:2rem;flex:0;width:100%;}}"]),Ye=We.default.div.withConfig({displayName:"contact-template__ContactCopy",componentId:"sc-gu7eak-1"})(["max-width:45ch;& p{font-size:var(--size-500);}"]),Ze=We.default.div.withConfig({displayName:"contact-template__FormWrapper",componentId:"sc-gu7eak-2"})(["max-width:45ch;padding:1rem;padding-top:0;border-radius:4px;border:1px solid rgba(255,255,255,0.7);background-color:rgba(255,255,255,0.5);backdrop-filter:blur(10px);"]),Je=We.default.div.withConfig({displayName:"contact-template__FormGroup",componentId:"sc-gu7eak-3"})(["display:flex;flex-direction:column;font-family:inherit;& label{margin-top:1rem;text-transform:capitalize;font-size:var(--size-500);}& input,textarea{resize:vertical;font-size:var(--size-500);font-family:inherit;padding:0.25rem 0.5rem;border-radius:4px;background-color:#e4b8c7;border:2px solid transparent;}& textarea:focus,input:focus{outline:none;border:2px solid #80576e;}"]),Ke=We.default.span.withConfig({displayName:"contact-template__FormErrorMessage",componentId:"sc-gu7eak-4"})(["color:red;font-size:var(--size-400);opacity:0.7;"]),Qe=We.default.div.withConfig({displayName:"contact-template__FormFeedbackWrapper",componentId:"sc-gu7eak-5"})(["margin-top:1rem;text-transform:uppercase;font-size:var(--size-400);"]),Xe=We.default.span.withConfig({displayName:"contact-template__FormSucessFeedback",componentId:"sc-gu7eak-6"})(["color:green;"]),et=We.default.span.withConfig({displayName:"contact-template__FormErrorFeedback",componentId:"sc-gu7eak-7"})(["color:red;"]),tt=We.default.button.withConfig({displayName:"contact-template__FormButton",componentId:"sc-gu7eak-8"})(["margin-top:1rem;padding:0.45rem;padding-left:1.25rem;padding-right:1.5rem;background-color:#37292c;color:#fafafa;border:1px solid rgba(255,255,255,0.8);text-transform:uppercase;border-radius:4px;"])}}]);