var J=Object.defineProperty,Q=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var K=(s,t,a)=>t in s?J(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,E=(s,t)=>{for(var a in t||(t={}))ee.call(t,a)&&K(s,a,t[a]);if(M)for(var a of M(t))te.call(t,a)&&K(s,a,t[a]);return s},Z=(s,t)=>Q(s,Y(t));var q=(s,t,a)=>new Promise((r,g)=>{var w=u=>{try{h(a.next(u))}catch(m){g(m)}},k=u=>{try{h(a.throw(u))}catch(m){g(m)}},h=u=>u.done?r(u.value):Promise.resolve(u.value).then(w,k);h((a=a.apply(s,t)).next())});import{c as U,q as oe,d as ne,aE as ae,s as f,ay as se,az as re}from"./entry/index-BcidWyMC.js";import{a as ie}from"./useContentViewHeight-CCI8OV4I.js";import{l as ce,ax as le,an as ue,o as G,aS as fe}from"./antd-BFwNME3X.js";import{d as X,Z as T,_ as A,$ as I,ae as S,a1 as z,u as c,ag as V,f as P,w as D,y as j,H as ge,K as he,ah as de,p as pe,c as p,a8 as L,ad as me,aa as He,a9 as N,ac as ye,ab as O,aj as be,ak as Fe,F as ve,G as Se,a0 as ke}from"./vue-DhXvXWyK.js";import{o as Ce}from"./onMountedOrActivated-CvY6VkYA.js";import{u as $e}from"./useWindowSizeFn-SAmktNkd.js";const Re=X({name:"PageFooter",inheritAttrs:!1,__name:"PageFooter",setup(s){const{prefixCls:t}=U("page-footer"),{getCalcContentWidth:a}=oe();return(r,g)=>(T(),A("div",{class:z(c(t)),style:V({width:c(a)})},[I("div",{class:z(`${c(t)}__left`)},[S(r.$slots,"left",{},void 0,!0)],2),S(r.$slots,"default",{},void 0,!0),I("div",{class:z(`${c(t)}__right`)},[S(r.$slots,"right",{},void 0,!0)],2)],6))}}),_e=ne(Re,[["__scopeId","data-v-dafa78ce"]]);function we(s,t,a,r,g=0,w=P(0)){const k=P(null),{footerHeightRef:h}=ie();let u={useLayoutFooter:!0};const m=i=>{u=i};function W(){j(()=>{x()})}function C(i,B="all"){var b,F,v,R;function y(o){return Number(o.replace(/[^\d]/g,""))}let l=0;const d="0px";if(i){const o=getComputedStyle(i),e=y((b=o==null?void 0:o.marginTop)!=null?b:d),n=y((F=o==null?void 0:o.marginBottom)!=null?F:d),H=y((v=o==null?void 0:o.paddingTop)!=null?v:d),_=y((R=o==null?void 0:o.paddingBottom)!=null?R:d);B==="all"?(l+=e,l+=n,l+=H,l+=_):B==="top"?(l+=e,l+=H):(l+=n,l+=_)}return l}function $(i){return i==null?null:i instanceof HTMLDivElement?i:i.$el}function x(){return q(this,null,function*(){var R;if(!s.value)return;yield j();const i=$(c(t));if(!i)return;const{bottomIncludeBody:B}=ae(i);let y=0;a.forEach(o=>{var e,n;y+=(n=(e=$(c(o)))==null?void 0:e.offsetHeight)!=null?n:0});let l=(R=C(i))!=null?R:0;r.forEach(o=>{l+=C($(c(o)))});let d=0;function b(o,e){if(o&&e){const n=o.parentElement;n&&(ce(e)?n.classList.contains(e)?d+=C(n,"bottom"):(d+=C(n,"bottom"),b(n,e)):le(e)&&e>0&&(d+=C(n,"bottom"),b(n,--e)))}}ge(g)?b(i,c(g)):b(i,g);let F=B-c(h)-c(w)-y-l-d;const v=()=>{var o;(o=u.elements)==null||o.forEach(e=>{var n,H;F+=(H=(n=$(c(e)))==null?void 0:n.offsetHeight)!=null?H:0})};u.useLayoutFooter&&c(h)>0,v(),k.value=F})}return Ce(()=>{j(()=>{x()})}),$e(()=>{x()},{wait:50,immediate:!0}),D(()=>[h.value],()=>{x()},{flush:"post",immediate:!0}),{redoHeight:W,setCompensation:m,contentHeight:k}}const We=X({name:"PageWrapper",inheritAttrs:!1,__name:"PageWrapper",props:{title:f.string,dense:f.bool,ghost:f.bool,headerSticky:f.bool,headerStyle:Object,content:f.string,contentStyle:{type:Object},contentBackground:f.bool,contentFullHeight:f.bool.def(!1),contentClass:f.string,fixedHeight:f.bool,upwardSpace:f.oneOfType([f.number,f.string]).def(0)},setup(s){const t=s,a=he(),r=de(),g=P(null),w=P(null),k=P(null),h=P(null),{height:u}=se(g),{prefixCls:m}=U("page-wrapper");pe(re,p(()=>t.fixedHeight));const W=p(()=>t.contentFullHeight),C=p(()=>t.upwardSpace),{redoHeight:$,setCompensation:x,contentHeight:i}=we(W,g,[w,h],[k],C),B=ue($,50);x({useLayoutFooter:!0,elements:[h]});const y=p(()=>{var e;return[m,{[`${m}--dense`]:t.dense},(e=a.class)!=null?e:{}]}),l=p(()=>{const{contentFullHeight:e,fixedHeight:n}=t;return E({},e&&n?{height:"100%"}:{})}),d=p(()=>{const{headerSticky:e}=t;return e?E({position:"sticky",top:0,zIndex:99},t.headerStyle):{}}),b=p(()=>t.content||(r==null?void 0:r.headerContent)||t.title||v.value.length),F=p(()=>(r==null?void 0:r.leftFooter)||(r==null?void 0:r.rightFooter)),v=p(()=>Object.keys(G(r,"default","leftFooter","rightFooter","headerContent"))),R=p(()=>{const{contentFullHeight:e,contentStyle:n,fixedHeight:H}=t;if(!e)return E({},n);const _=`${c(i)}px`;return E(Z(E({},n),{minHeight:_}),H?{height:_}:{})}),o=p(()=>{const{contentBackground:e,contentClass:n}=t;return[`${m}-content`,n,{[`${m}-content-bg`]:e}]});return D(()=>[F.value],()=>{$()},{flush:"post",immediate:!0}),D(u,()=>{const{contentFullHeight:e,fixedHeight:n}=t;e&&n&&B()}),(e,n)=>(T(),A("div",{class:z(y.value),style:V(l.value),ref_key:"wrapperRef",ref:g},[b.value?(T(),L(c(fe),ye({key:0,ghost:s.ghost,title:s.title},c(G)(e.$attrs,"class"),{style:d.value,ref_key:"headerRef",ref:w}),me({default:N(()=>[s.content?(T(),A(ve,{key:0},[Se(ke(s.content),1)],64)):S(e.$slots,"headerContent",{key:1})]),_:2},[He(v.value,H=>({name:H,fn:N(_=>[S(e.$slots,H,be(Fe(_||{})))])}))]),1040,["ghost","title","style"])):O("",!0),I("div",{class:z(["overflow-hidden",o.value]),style:V(R.value),ref_key:"contentRef",ref:k},[S(e.$slots,"default")],6),F.value?(T(),L(_e,{key:1,ref_key:"footerRef",ref:h},{left:N(()=>[S(e.$slots,"leftFooter")]),right:N(()=>[S(e.$slots,"rightFooter")]),_:3},512)):O("",!0)],6))}});export{We as _,_e as p};
