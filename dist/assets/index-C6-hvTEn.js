var Q=Object.defineProperty,U=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var O=(e,a,t)=>a in e?Q(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,u=(e,a)=>{for(var t in a||(a={}))T.call(a,t)&&O(e,t,a[t]);if(I)for(var t of I(a))q.call(a,t)&&O(e,t,a[t]);return e},M=(e,a)=>U(e,X(a));var z=(e,a)=>{var t={};for(var s in e)T.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&I)for(var s of I(e))a.indexOf(s)<0&&q.call(e,s)&&(t[s]=e[s]);return t};var R=(e,a,t)=>new Promise((s,C)=>{var k=m=>{try{p(t.next(m))}catch(d){C(d)}},y=m=>{try{p(t.throw(m))}catch(d){C(d)}},p=m=>m.done?s(m.value):Promise.resolve(m.value).then(k,y);p((t=t.apply(e,a)).next())});import{c as A}from"./formItemConfig-aHKmEwFH.js";import{_ as Y,bH as _,d as x}from"./entry/index-BcidWyMC.js";import{h as E}from"./index-CPmZTTF6.js";import{u as ee}from"./useFormDesignState-DralYB1h.js";import{T as oe,aV as ae,a7 as te,aa as ne,o as se}from"./antd-BFwNME3X.js";import{d as le,r as me,c as P,u as V,I as re,a7 as b,Z as g,a8 as D,a9 as f,k as G,aj as B,ak as H,ad as W,ae as ce,ac as Z,G as ie,a0 as $,ab as N,$ as S,ai as pe,_ as de}from"./vue-DhXvXWyK.js";import"./componentMap-BjYe58Mw.js";import"./useFormItem-oxzr_Srp.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DFfZeCIC.js";import"./index-BKjGR123.js";import"./index-DVzcH--h.js";import"./useWindowSizeFn-SAmktNkd.js";import"./uuid-D0SLUWHI.js";import"./useSortable-Chl02yjp.js";import"./download-C8Z1CAz1.js";import"./base64Conver-bBv-IO2K.js";import"./index-BQqLbfF_.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-D_32YSSg.js";import"./copyTextToClipboard-DJj00FMq.js";import"./index-BH-x8rO3.js";import"./index-BO5ERYHo.js";const he=le({name:"VFormItem",components:{Tooltip:oe,Icon:Y,FormItem:ae,Divider:te,Col:ne},props:{formData:{type:Object,default:()=>({})},schema:{type:Object,required:!0},formConfig:{type:Object,required:!0}},emits:["update:form-data","change"],setup(e,{emit:a}){const t=me({componentMap:A}),{formModel:s,setFormModel:C}=ee(),k=P(()=>{const{colProps:o={}}=e.schema;return o}),y=P(()=>{var j,L;const{formConfig:o}=V(e);let{field:l,required:n,rules:h,labelCol:c,wrapperCol:i}=V(e.schema);const{colon:J}=e.formConfig,{itemProps:r}=V(e.schema);c=c||(o.layout==="horizontal"?o.labelLayout==="flex"?{style:`width:${o.labelWidth}px`}:o.labelCol:{}),i=i||(o.layout==="horizontal"?o.labelLayout==="flex"?{style:"width:auto;flex:1"}:o.wrapperCol:{});const K=o.layout==="horizontal"&&o.labelLayout==="flex"?{display:"flex"}:{},w=Object.assign({},{name:l,style:u({},K),colon:J,required:n,rules:h,labelCol:c,wrapperCol:i},r);return(j=r==null?void 0:r.labelCol)!=null&&j.span||(w.labelCol=c),(L=r==null?void 0:r.wrapperCol)!=null&&L.span||(w.wrapperCol=i),r!=null&&r.rules||(w.rules=h),w}),p=P(()=>A.get(e.schema.component)),m=o=>{var l,n;o.component==="Button"&&((l=o.componentProps)!=null&&l.handle)&&a((n=o.componentProps)==null?void 0:n.handle)},d=_(()=>R(this,null,function*(){var n;let{options:o,treeData:l}=(n=e.schema.componentProps)!=null?n:{};return o&&(o=yield E(o)),l&&(l=yield E(l)),{options:o,treeData:l}})),F=P(()=>{var c;const o=e.schema&&["Switch","Checkbox","Radio"].includes(e.schema.component);let{field:l}=e.schema,i=(c=se(e.schema.componentProps,["options","treeData"]))!=null?c:{},{disabled:n}=i,h=z(i,["disabled"]);return n=e.formConfig.disabled||n,M(u({},h),{disabled:n,[o?"checked":"value"]:s.value[l]})}),v=function(o){const l=["Switch","Checkbox","Radio"].includes(e.schema.component),n=o?o.target:null,h=n?l?n.checked:n.value:o;C(e.schema.field,h),a("change",h)};return M(u({},re(t)),{componentItem:p,formItemProps:y,handleClick:m,asyncProps:d,cmpProps:F,handleChange:v,colPropsComputed:k})}}),ue={key:2};function fe(e,a,t,s,C,k){const y=b("Icon"),p=b("Tooltip"),m=b("Divider"),d=b("FormItem"),F=b("Col");return g(),D(F,B(H(e.colPropsComputed)),{default:f(()=>[G(d,B(H(u({},e.formItemProps))),W({default:f(()=>{var v;return[e.schema.componentProps&&((v=e.schema.componentProps)!=null&&v.slotName)?ce(e.$slots,e.schema.componentProps.slotName,B(Z({key:0},e.schema)),void 0,!0):e.schema.component=="Divider"&&e.schema.label&&!e.formItemProps.hiddenLabel?(g(),D(m,{key:1},{default:f(()=>[ie($(e.schema.label),1)]),_:1})):N("",!0),S("div",null,[(g(),D(pe(e.componentItem),Z({class:"v-form-item-wrapper"},u(u({},e.cmpProps),e.asyncProps),{schema:e.schema,style:e.schema.width?{width:e.schema.width}:{},onChange:e.handleChange,onClick:a[0]||(a[0]=o=>e.handleClick(e.schema))}),null,16,["schema","style","onChange"]))]),["Button"].includes(e.schema.component)?(g(),de("span",ue,$(e.schema.label),1)):N("",!0)]}),_:2},[!e.formItemProps.hiddenLabel&&e.schema.component!=="Divider"?{name:"label",fn:f(()=>[G(p,null,W({default:f(()=>[S("span",null,$(e.schema.label),1),e.schema.helpMessage?(g(),D(y,{key:0,class:"ml-5",icon:"ant-design:question-circle-outlined"})):N("",!0)]),_:2},[e.schema.helpMessage?{name:"title",fn:f(()=>[S("span",null,$(e.schema.helpMessage),1)]),key:"0"}:void 0]),1024)]),key:"0"}:void 0]),1040)]),_:3},16)}const ze=x(he,[["render",fe],["__scopeId","data-v-602e6bc1"]]);export{ze as default};
