var p=(t,a,e)=>new Promise((m,c)=>{var u=s=>{try{r(e.next(s))}catch(o){c(o)}},d=s=>{try{r(e.throw(s))}catch(o){c(o)}},r=s=>s.done?m(s.value):Promise.resolve(s.value).then(u,d);r((e=e.apply(t,a)).next())});import{B as $}from"./index-DVzcH--h.js";import{_ as k}from"./BasicForm.vue_vue_type_script_setup_true_lang-DbX2m63q.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BL3smh9L.js";import"./componentMap-BjYe58Mw.js";import{u as S}from"./useForm-CX4sdfhA.js";import{b as w}from"./data-BLwuGLPZ.js";import{k as _,c as F,a as B,b as v}from"./entry/index-BcidWyMC.js";import{d as A,f as g,Z as R,a8 as E,a9 as T,k as q,u as i,ac as O}from"./vue-DhXvXWyK.js";const D=(t,a="modal")=>_.post({url:`/assignments/${t.exam_id}/classes/${t.class_id}`,params:t},{errorMessageMode:a}),z=(t="")=>a=>_.get({url:`/assignments?type=${t}`,params:a,headers:{ignoreCancelToken:!0}}),J=A({__name:"AssignmentModal",emits:["success"],setup(t,{emit:a}){const{t:e}=B(),{createErrorModal:m,createSuccessModal:c}=v(),[u,{validate:d,resetFields:r}]=S({labelWidth:120,schemas:w,showActionButtonGroup:!1,actionColOptions:{span:24}}),{prefixCls:s}=F("register"),o=g(!1),y=g(),h=a;function b(){return p(this,null,function*(){var l;try{const{class_id:n,exam_id:f,title:x,date:C}=yield d(),M={class_id:n,exam_id:f,title:x,date:C.split(" ")[0]};o.value=!0,(yield D(M))&&(c({title:e("form.gradingSearch.titleExam"),content:e("common.createSuccessfully"),getContainer:()=>document.body.querySelector(`.${s}`)||document.body}),r(),h("success"))}catch(n){if(n.errorFields)return;const f=(l=n.response)==null?void 0:l.data.message;m({title:e("sys.api.errorTip"),content:f||n.message||e("sys.api.networkExceptionMsg"),getContainer:()=>document.body.querySelector(`.${s}`)||document.body})}finally{o.value=!1}})}return(l,n)=>(R(),E(i($),O(l.$attrs,{title:i(e)("form.exam.title"),width:"1000px","can-fullscreen":!1,loading:o.value,onOk:b,onCancel:i(r)}),{default:T(()=>[q(i(k),{onRegister:i(u),ref_key:"formRef",ref:y},null,8,["onRegister"])]),_:1},16,["title","loading","onCancel"]))}});export{J as _,z as a};
