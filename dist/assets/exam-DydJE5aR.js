import{d as B,f as p,o as D,j as T,a7 as L,Z as a,_ as i,k as n,a9 as r,a8 as b,G as v,a0 as l,u as c,ab as y,m as N,A as O,$ as e,F as w,aa as C,a1 as R,a2 as V,a3 as j}from"./vue-DhXvXWyK.js";import{e as A,a as z,d as M}from"./entry/index-BcidWyMC.js";import{_ as P}from"./BasicTable.vue_vue_type_script_setup_true_lang-wYzSQTfH.js";import"./TableImg.vue_vue_type_style_index_0_lang-D3F4T3v_.js";import"./index-BKjGR123.js";import{u as G}from"./useTable-CjgbZnnJ.js";import{getExamOfStudentColumns as K,getSearchExamOfStudentConfig as Q}from"./tableData-BTxkGeqt.js";import{_ as U}from"./ExamineType1.vue_vue_type_script_setup_true_lang-uoXiUeTT.js";import{a as Z}from"./student-DuYQ3A9a.js";import{Q as q,O as H}from"./antd-BFwNME3X.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-DbX2m63q.js";import"./FormItem.vue_vue_type_script_lang-BQsfJt-d.js";import"./componentMap-BjYe58Mw.js";import"./useFormItem-oxzr_Srp.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DFfZeCIC.js";import"./index-BQqLbfF_.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-D_32YSSg.js";import"./copyTextToClipboard-DJj00FMq.js";import"./index-BH-x8rO3.js";import"./index-BO5ERYHo.js";import"./index-DVzcH--h.js";import"./useWindowSizeFn-SAmktNkd.js";import"./base64Conver-bBv-IO2K.js";import"./helper-JLwI6lBn.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BL3smh9L.js";import"./useForm-CX4sdfhA.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./onMountedOrActivated-CvY6VkYA.js";import"./useSortable-Chl02yjp.js";import"./download-C8Z1CAz1.js";import"./class-6s197Rj_.js";import"./Quiz.vue_vue_type_script_setup_true_lang-DtuenCZI.js";import"./data-C-2nBY8q.js";const J=m=>(V("data-v-0f4b14a7"),m=m(),j(),m),W={class:"mb-4 flex items-center justify-end gap-2 m-4"},X={class:"px-4 h-full"},Y={class:"sticky bottom-0 bg-white box-shadow"},ee={class:"flex gap-4 py-2 px-2"},te={key:0,class:"flex items-center"},oe={class:"text-xl font-semibold mr-2"},se={class:"flex gap-2"},ae={key:1,class:"text-lg text-center"},ie={class:"font-semibold mr-4"},ne=J(()=>e("span",{class:"font-light"},"0 of 13 questions",-1)),re=B({__name:"exam",setup(m){const h=p(null),{toggle:g,isFullscreen:S}=A(h),{t:I}=z(),u=p(1),x=p(""),d=p(40*60),F=setInterval(()=>{const o=Math.floor(d.value/60),f=d.value%60;x.value=`${o}:${f<10?"0":""}${f}`,d.value<=0&&clearInterval(F),d.value--},1e3),[$]=G({api:Z(),columns:K(),useSearchForm:!0,formConfig:Q(),showTableSetting:!1,tableSetting:{fullScreen:!0},showIndexColumn:!0,rowKey:"id",showSelectionBar:!1,actionColumn:{title:I("table.action"),dataIndex:"action"}});function E(o){g()}function k(o){(o.key==="F5"||o.key==="Escape")&&o.preventDefault()}return D(()=>{window.addEventListener("keydown",k)}),T(()=>{window.addEventListener("keydown",k)}),(o,f)=>{const _=L("a-button");return a(),i("div",null,[n(P,{onRegister:c($)},{bodyCell:r(({column:t,record:s})=>[t.key==="status"?(a(),b(c(q),{key:0,color:s.score?"green":"red"},{default:r(()=>[v(l(s.score?"v":"x"),1)]),_:2},1032,["color"])):y("",!0),t.key==="action"?(a(),b(_,{key:1,size:"small",preIcon:"ant-design:edit-filled",onClick:le=>E(s.id)},null,8,["onClick"])):y("",!0)]),_:1},8,["onRegister"]),N(e("div",{ref_key:"domRef",ref:h,class:"bg-white"},[e("div",W,[n(_,{type:"default"},{default:r(()=>[v("Thời gian: "+l(x.value),1)]),_:1}),n(_,{type:"primary",onClick:c(g)},{default:r(()=>[v(" Nộp bài ")]),_:1},8,["onClick"])]),e("div",X,[n(U)]),e("div",Y,[e("div",ee,[(a(),i(w,null,C(3,t=>n(c(H),{key:t,onClick:s=>u.value=t,class:R(u.value===t?"shrink-0 border-[#0960bd]":"flex-1 cursor-pointer")},{default:r(()=>[u.value===t?(a(),i("div",te,[e("div",oe,"Part "+l(t),1),e("div",se,[(a(),i(w,null,C(13,s=>e("div",{key:s,class:"rounded-full h-8 w-8 border flex items-center justify-center border-gray-200"},l(s),1)),64))])])):(a(),i("div",ae,[e("span",ie,"Part "+l(t),1),ne]))]),_:2},1032,["onClick","class"])),64))])])],512),[[O,c(S)]])])}}}),Ge=M(re,[["__scopeId","data-v-0f4b14a7"]]);export{Ge as default};
