import{d as v,f as h,r as x,Z as a,a8 as p,a9 as l,$ as c,k as o,u as r,m as n,A as s,ab as u}from"./vue-DhXvXWyK.js";import k from"./Step1-CZfn1lzL.js";import{_ as N}from"./Step2.vue_vue_type_script_setup_true_lang-C3TWAJXw.js";import{_ as P}from"./Step3.vue_vue_type_script_setup_true_lang-C23Zuy7E.js";import{P as V}from"./index-DnpQZsBg.js";import{bk as i}from"./antd-BFwNME3X.js";import{d as b}from"./entry/index-BcidWyMC.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-DbX2m63q.js";import"./FormItem.vue_vue_type_script_lang-BQsfJt-d.js";import"./componentMap-BjYe58Mw.js";import"./useFormItem-oxzr_Srp.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DFfZeCIC.js";import"./index-BKjGR123.js";import"./index-DVzcH--h.js";import"./useWindowSizeFn-SAmktNkd.js";import"./uuid-D0SLUWHI.js";import"./useSortable-Chl02yjp.js";import"./download-C8Z1CAz1.js";import"./base64Conver-bBv-IO2K.js";import"./index-BQqLbfF_.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-D_32YSSg.js";import"./copyTextToClipboard-DJj00FMq.js";import"./index-BH-x8rO3.js";import"./index-BO5ERYHo.js";import"./helper-JLwI6lBn.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BL3smh9L.js";import"./useForm-CX4sdfhA.js";import"./data-CaNweXRQ.js";import"./PageWrapper.vue_vue_type_style_index_0_lang-wgu38p8X.js";import"./useContentViewHeight-CCI8OV4I.js";import"./onMountedOrActivated-CvY6VkYA.js";const B={class:"step-form-form"},C={class:"mt-5"},g=v({name:"FormStepPage",__name:"index",setup(w){const t=h(0),e=x({initStep2:!1,initStep3:!1});function f(m){t.value++,e.initStep2=!0}function d(){t.value--}function _(m){t.value++,e.initStep3=!0}function S(){t.value=0,e.initStep2=!1,e.initStep3=!1}return(m,$)=>(a(),p(r(V),{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:l(()=>[c("div",B,[o(r(i),{current:t.value},{default:l(()=>[o(r(i).Step,{title:"填写转账信息"}),o(r(i).Step,{title:"确认转账信息"}),o(r(i).Step,{title:"完成"})]),_:1},8,["current"])]),c("div",C,[n(o(k,{onNext:f},null,512),[[s,t.value===0]]),e.initStep2?n((a(),p(N,{key:0,onPrev:d,onNext:_},null,512)),[[s,t.value===1]]):u("",!0),e.initStep3?n((a(),p(P,{key:1,onRedo:S},null,512)),[[s,t.value===2]]):u("",!0)])]),_:1}))}}),nt=b(g,[["__scopeId","data-v-778b6ab2"]]);export{nt as default};
