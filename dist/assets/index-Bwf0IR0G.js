var f=(i,n,e)=>new Promise((c,m)=>{var p=o=>{try{s(e.next(o))}catch(t){m(t)}},d=o=>{try{s(e.throw(o))}catch(t){m(t)}},s=o=>o.done?c(o.value):Promise.resolve(o.value).then(p,d);s((e=e.apply(i,n)).next())});import{P as g}from"./index-DnpQZsBg.js";import{_ as x}from"./BasicForm.vue_vue_type_script_setup_true_lang-DbX2m63q.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BL3smh9L.js";import"./componentMap-BjYe58Mw.js";import{u as b}from"./useForm-CX4sdfhA.js";import{a as P,u as N,j as C}from"./entry/index-BcidWyMC.js";import{d as v,a7 as k,Z as S,a8 as j,a9 as l,$ as w,k as u,u as r,G as _,a0 as y}from"./vue-DhXvXWyK.js";import"./PageWrapper.vue_vue_type_style_index_0_lang-wgu38p8X.js";import"./useContentViewHeight-CCI8OV4I.js";import"./useWindowSizeFn-SAmktNkd.js";import"./antd-BFwNME3X.js";import"./onMountedOrActivated-CvY6VkYA.js";import"./FormItem.vue_vue_type_script_lang-BQsfJt-d.js";import"./helper-JLwI6lBn.js";import"./index-DVzcH--h.js";import"./useFormItem-oxzr_Srp.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DFfZeCIC.js";import"./index-BKjGR123.js";import"./uuid-D0SLUWHI.js";import"./useSortable-Chl02yjp.js";import"./download-C8Z1CAz1.js";import"./base64Conver-bBv-IO2K.js";import"./index-BQqLbfF_.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-D_32YSSg.js";import"./copyTextToClipboard-DJj00FMq.js";import"./index-BH-x8rO3.js";import"./index-BO5ERYHo.js";const{t:a}=P(),B=[{field:"passwordOld",label:a("form.security.oldPassword"),component:"InputPassword",required:!0},{field:"passwordNew",label:a("form.security.newPassword"),component:"StrengthMeter",componentProps:{placeholder:a("form.security.newPassword")},rules:[{required:!0,message:a("form.security.passwordNotEmpty")}]},{field:"confirmPassword",label:a("form.security.confirmPassword"),component:"InputPassword",dynamicRules:({values:i})=>[{required:!0,validator:(n,e)=>e?e!==i.passwordNew?Promise.reject(a("form.security.confirmPasswordNotMatch")):Promise.resolve():Promise.reject(a("form.security.passwordNotEmpty"))}]}],q={class:"py-8 bg-white flex flex-col justify-center items-center"},I={class:"flex justify-center"},ne=v({name:"ChangePassword",__name:"index",setup(i){const n=N(),{t:e}=P(),[c,{validate:m,resetFields:p}]=b({size:"default",baseColProps:{span:24},labelWidth:100,showActionButtonGroup:!1,schemas:B});function d(){return f(this,null,function*(){try{const s=yield m(),{passwordOld:o,passwordNew:t,confirmPassword:h}=s;(yield C({current_password:o,password:t,password_confirmation:h}))&&n.logout()}catch(s){}})}return(s,o)=>{const t=k("a-button");return S(),j(r(g),{title:r(e)("sys.changePassword.title"),content:r(e)("sys.changePassword.content")},{default:l(()=>[w("div",q,[u(r(x),{onRegister:r(c)},null,8,["onRegister"]),w("div",I,[u(t,{onClick:r(p)},{default:l(()=>[_(y(r(e)("common.resetText")),1)]),_:1},8,["onClick"]),u(t,{class:"!ml-4",type:"primary",onClick:d},{default:l(()=>[_(y(r(e)("common.saveText")),1)]),_:1})])])]),_:1},8,["title","content"])}}});export{ne as default};
