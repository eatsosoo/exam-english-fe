var T=Object.defineProperty;var P=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var L=(o,n,t)=>n in o?T(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,j=(o,n)=>{for(var t in n||(n={}))N.call(n,t)&&L(o,t,n[t]);if(P)for(var t of P(n))$.call(n,t)&&L(o,t,n[t]);return o};var A=(o,n)=>{var t={};for(var r in o)N.call(o,r)&&n.indexOf(r)<0&&(t[r]=o[r]);if(o!=null&&P)for(var r of P(o))n.indexOf(r)<0&&$.call(o,r)&&(t[r]=o[r]);return t};var w=(o,n,t)=>new Promise((r,F)=>{var d=a=>{try{c(t.next(a))}catch(i){F(i)}},g=a=>{try{c(t.throw(a))}catch(i){F(i)}},c=a=>a.done?r(a.value):Promise.resolve(a.value).then(d,g);c((t=t.apply(o,n)).next())});import U from"./FormRender-CCzKsxyr.js";import{a8 as G,bt as B,f as D,e as O,ab as H,aa as X,o as Y}from"./antd-BFwNME3X.js";import{g as I,J as x,d as oo,f as eo,c as k,p as q,u as to,a7 as y,Z as R,_ as J,k as W,a9 as V,F as no,aa as so,a8 as ro,ad as ao,ae as io,ac as Z}from"./vue-DhXvXWyK.js";import{f as mo,a as z}from"./index-CPmZTTF6.js";import{bI as lo,d as fo}from"./entry/index-BcidWyMC.js";import"./index-C6-hvTEn.js";import"./formItemConfig-aHKmEwFH.js";import"./componentMap-BjYe58Mw.js";import"./useFormItem-oxzr_Srp.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DFfZeCIC.js";import"./index-BKjGR123.js";import"./index-DVzcH--h.js";import"./useWindowSizeFn-SAmktNkd.js";import"./uuid-D0SLUWHI.js";import"./useSortable-Chl02yjp.js";import"./download-C8Z1CAz1.js";import"./base64Conver-bBv-IO2K.js";import"./index-BQqLbfF_.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-D_32YSSg.js";import"./copyTextToClipboard-DJj00FMq.js";import"./index-BH-x8rO3.js";import"./index-BO5ERYHo.js";import"./useFormDesignState-DralYB1h.js";function co(o,n,t,r){(()=>{const u=I(),C=u==null?void 0:u.parent;C&&o.formConfig.schemas.forEach(m=>{B(m.componentProps,(M,e)=>{O(M)&&(m.componentProps[e]=M.bind(C))}),B(m.on,(M,e)=>{O(M)&&(m.componentProps[e]=M.bind(C))})})})();const{emit:d}=t,g=G.useForm,{resetFields:c,validate:a,clearValidate:i,validateField:h}=g(n,[]);return{validate:a,validateField:h,resetFields:c,clearValidate:i,submit:()=>w(this,null,function*(){var C,m;const u=D(x(n.value));return d==null||d("submit",u),(m=(C=o.formConfig).submit)==null||m.call(C,u),u})}}function uo(o,n,t,r){const F=e=>mo(o.formConfig.schemas,s=>s.field===e),d=(e,s,l)=>{const f=F(e);f&&(f[s]=l)},g=(e,s,l)=>{const f=F(e);f!=null&&f.componentProps&&(["options","treeData"].includes(s)&&c(e,void 0),f.componentProps[s]=l)},c=(e,s)=>{var l;typeof e=="string"?(o.formModel[e]=s,(l=t.value)==null||l.validateField(e,s,[])):Object.keys(e).forEach(p=>{var b;o.formModel[p]=e[p],(b=t.value)==null||b.validateField(p,e[p],[])})},a=(e,s)=>{o.formConfig[e]=s},i=e=>D(o.formModel)[e],h=()=>w(this,null,function*(){return D(o.formModel)}),v=e=>{d(e,"hidden",!0)},u=e=>{typeof e=="string"?g(e,"disabled",!0):a("disabled",e!==!1)},C=e=>{d(e,"hidden",!1)},m={};return(e=>{z(e,s=>{z(e,l=>{var f;m[l.field]||(m[l.field]=new Set),(f=s.link)!=null&&f.includes(l.field)&&O(s.update)&&m[l.field].add(s)}),m[s.field].add(s)})})(o.formConfig.schemas),j({linkOn:m,setValue:c,getValue:i,hidden:v,show:C,set:d,get:F,setProps:g,getData:h,disable:u},r)}const po=oo({name:"VFormCreate",components:{FormRender:U,Form:G,Row:H},props:{fApi:{type:Object},formModel:{type:Object,default:()=>({})},formConfig:{type:Object,required:!0}},emits:["submit","change","update:fApi","update:formModel"],setup(o,n){const t=o.formConfig.layout=="vertical"?X:H,{emit:r}=n,F=eo(null),d=k({get:()=>o.formModel,set:p=>r("update:formModel",p)}),g=k(()=>o.formConfig.schemas&&o.formConfig.schemas.filter(p=>p.hidden!==!0)),c=lo(o,"fApi",r),{submit:a,validate:i,clearValidate:h,resetFields:v,validateField:u}=co(o,d,n),f=uo({formConfig:o.formConfig,formData:o.formModel},n,F,{submit:a,validate:i,validateField:u,resetFields:v,clearValidate:h}),{linkOn:C}=f,m=A(f,["linkOn"]);c.value=m;const M=p=>{var S;const{schema:b,value:K}=p,{field:Q}=to(b);(S=C[Q])==null||S.forEach(_=>{var E;(E=_.update)==null||E.call(_,K,_,c.value)})},e=k(()=>Y(o.formConfig,["disabled","labelWidth","schemas"])),s=()=>{a()};q("formModel",d);const l=(p,b)=>{d.value[p]=b};return q("setFormModelMethod",l),{eFormModel:F,submit:a,validate:i,validateField:u,resetFields:v,clearValidate:h,handleChange:M,formModelProps:e,handleSubmit:s,setFormModel:l,formModelNew:d,wrapperComp:t,noHiddenList:g}}}),Fo={class:"v-form-container"};function go(o,n,t,r,F,d){const g=y("FormRender"),c=y("Row"),a=y("Form");return R(),J("div",Fo,[W(a,Z({class:"v-form-model",ref:"eFormModel",model:o.formModel},o.formModelProps),{default:V(()=>[W(c,null,{default:V(()=>[(R(!0),J(no,null,so(o.noHiddenList,(i,h)=>(R(),ro(g,{key:h,schema:i,formConfig:o.formConfig,formData:o.formModelNew,onChange:o.handleChange,setFormModel:o.setFormModel,onSubmit:o.handleSubmit,onReset:o.resetFields},ao({_:2},[i&&i.componentProps?{name:"schema.componentProps!.slotName",fn:V(()=>[io(o.$slots,i.componentProps.slotName,Z({ref_for:!0},{formModel:o.formModel,field:i.field,schema:i}),void 0,!0)]),key:"0"}:void 0]),1032,["schema","formConfig","formData","onChange","setFormModel","onSubmit","onReset"]))),128))]),_:3})]),_:3},16,["model"])])}const Jo=fo(po,[["render",go],["__scopeId","data-v-06441f85"]]);export{Jo as default};
