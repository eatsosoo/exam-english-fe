var x=(g,r,l)=>new Promise((c,u)=>{var p=e=>{try{a(l.next(e))}catch(s){u(s)}},n=e=>{try{a(l.throw(e))}catch(s){u(s)}},a=e=>e.done?c(e.value):Promise.resolve(e.value).then(p,n);a((l=l.apply(g,r)).next())});import{d as M,f as i,w as B,Z as N,a8 as b,a9 as D,$ as E,k as f,u as v,m as d,A as m,ac as L}from"./vue-DhXvXWyK.js";import{B as O}from"./index-DVzcH--h.js";import{c as A}from"./exam-CAJo7aCX.js";import{a as P,b as C}from"./entry/index-BcidWyMC.js";import T from"./Reading2-lCUqKg8u.js";import V from"./Listening2-Ae0yuu0y.js";import W from"./Writing2-TGI-TgfS.js";import $ from"./Speaking2-BgTuL-qh.js";import{S as F}from"./data-C-2nBY8q.js";import{ap as K}from"./antd-BFwNME3X.js";const U={class:"mb-2"},ae=M({__name:"EditorPartModal",props:{examId:{type:Number,default:null},titleEditor:{type:String,default:""}},setup(g){const r=g,l=i(null),c=i(null),u=i(null),p=i(null),n=i(null),a=i(!1),e=i("reading"),{t:s}=P(),{createMessage:k}=C();function S(){if(!r.examId){k.error(s("sys.exception.noDataTitle"));return}const t={reading:l,listening:c,writing:u,speaking:p}[e.value];t.value&&(a.value=!0,t.value.submitAll(r.examId),a.value=!1)}function I(o){return x(this,null,function*(){try{a.value=!0;const t=yield A(o);n.value=t}catch(t){k.error(s("sys.app.dataNotFound"))}finally{a.value=!1}})}return B(()=>r.examId,o=>{I(o)}),(o,t)=>(N(),b(v(O),L(o.$attrs,{title:r.titleEditor,"default-fullscreen":"","can-fullscreen":!1,loading:a.value,onOk:S}),{default:D(()=>{var _,y,R,w;return[E("div",U,[f(v(K),{value:e.value,"onUpdate:value":t[0]||(t[0]=h=>e.value=h),options:v(F)},null,8,["value","options"])]),d(f(T,{ref_key:"readingRef",ref:l,value:(_=n.value)==null?void 0:_.Reading},null,8,["value"]),[[m,e.value==="reading"]]),d(f(V,{ref_key:"listeningRef",ref:c,value:(y=n.value)==null?void 0:y.Listening},null,8,["value"]),[[m,e.value==="listening"]]),d(f(W,{ref_key:"writingRef",ref:u,value:(R=n.value)==null?void 0:R.Writing},null,8,["value"]),[[m,e.value==="writing"]]),d(f($,{ref_key:"speakingRef",ref:p,value:(w=n.value)==null?void 0:w.Speaking},null,8,["value"]),[[m,e.value==="speaking"]])]}),_:1},16,["title","loading"]))}});export{ae as _};
