var $=Object.defineProperty;var C=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var I=(e,t,n)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))j.call(t,n)&&I(e,n,t[n]);if(C)for(var n of C(t))O.call(t,n)&&I(e,n,t[n]);return e};import{_ as D,b3 as N}from"./entry/index-BcidWyMC.js";import{x as h,a7 as S}from"./antd-BFwNME3X.js";import{d as P,f as w,c as A,o as F,y as H,b as M,u as b,k as c,i as R,F as T,x as V,g as W}from"./vue-DhXvXWyK.js";function z(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!R(e)}const v="context-menu",B={width:{type:Number,default:156},customEvent:{type:Object,default:null},styles:{type:Object},showIcon:{type:Boolean,default:!0},axis:{type:Object,default(){return{x:0,y:0}}},items:{type:Array,default(){return[]}}},_=e=>{const{item:t}=e;return c("span",{style:"display: inline-block; width: 100%; ",class:"px-4",onClick:e.handler.bind(null,t)},[e.showIcon&&t.icon&&c(D,{class:"mr-2",icon:t.icon},null),c("span",null,[t.label])])},U=P({name:"ContextMenu",props:B,setup(e){const t=w(null),n=w(!1),r=A(()=>{const{axis:o,items:s,styles:l,width:i}=e,{x:a,y:d}=o||{x:0,y:0},y=(s||[]).length*40,p=i,x=document.body,E=x.clientWidth<a+p?a-p:a,L=x.clientHeight<d+y?d-y:d;return g({position:"absolute",width:`${i}px`,left:`${E+1}px`,top:`${L+1}px`,zIndex:9999},l)});F(()=>{H(()=>n.value=!0)}),M(()=>{const o=b(t);o&&document.body.removeChild(o)});function m(o,s){const{handler:l,disabled:i}=o;i||(n.value=!1,s==null||s.stopPropagation(),s==null||s.preventDefault(),l==null||l())}function u(o){return o.filter(l=>!l.hidden).map(l=>{const{disabled:i,label:a,children:d,divider:y=!1}=l,p={item:l,handler:m,showIcon:e.showIcon};return!d||d.length===0?c(T,null,[c(h.Item,{disabled:i,class:`${v}__item`,key:a},{default:()=>[c(_,p,null)]}),y?c(S,{key:`d-${a}`},null):null]):b(n)?c(h.SubMenu,{key:a,disabled:i,popupClassName:`${v}__popup`},{title:()=>c(_,p,null),default:()=>u(d)}):null})}return()=>{let o;if(!b(n))return null;const{items:s}=e;return c(h,{inlineIndent:12,mode:"vertical",class:v,ref:t,style:b(r)},z(o=u(s))?o:{default:()=>[o]})}}}),f={domList:[],resolve:()=>{}},X=function(e){const{event:t}=e||{};if(t&&(t==null||t.preventDefault()),!!N)return new Promise(n=>{const r=document.body,m=document.createElement("div"),u={};e.styles&&(u.styles=e.styles),e.items&&(u.items=e.items),e.event&&(u.customEvent=t,u.axis={x:t.clientX,y:t.clientY+r.scrollTop});const o=c(U,u);V(o,m);const s=function(){f.resolve("")};f.domList.push(m);const l=function(){f.domList.forEach(i=>{try{i&&r.removeChild(i)}catch(a){}}),r.removeEventListener("click",s),r.removeEventListener("scroll",s)};f.resolve=function(i){l(),n(i)},l(),r.appendChild(m),r.addEventListener("click",s),r.addEventListener("scroll",s)})},k=function(){f&&(f.resolve(""),f.domList=[])};function K(e=!0){return W()&&e&&M(()=>{k()}),[X,k]}export{K as u};
