import{d as C,al as K,f as m,a7 as N,Z as n,a8 as P,a9 as e,k as t,G as p,u as r,$ as c,_ as f,aa as y,a0 as v,F as _,ab as k}from"./vue-DhXvXWyK.js";import{P as V}from"./index-DnpQZsBg.js";import{h as D,i as h}from"./entry/index-BcidWyMC.js";import{R as b}from"./antd-BFwNME3X.js";import"./PageWrapper.vue_vue_type_style_index_0_lang-wgu38p8X.js";import"./useContentViewHeight-CCI8OV4I.js";import"./useWindowSizeFn-SAmktNkd.js";import"./onMountedOrActivated-CvY6VkYA.js";const w={class:"pt-4 m-4 desc-wrap"},$=C({name:"AccountDetail",__name:"AccountDetail",setup(F){var i;const g=b,u=b.TabPane,T=K(),B=D(),o=m((i=T.params)==null?void 0:i.id),s=m("detail"),{setTitle:x}=h();x("详情：用户"+o.value);function A(){B("/system/account")}return(G,l)=>{const d=N("a-button");return n(),P(r(V),{title:"用户"+o.value+"的资料",content:"这是用户资料详情页面。本页面仅用于演示相同路由在tab中打开多个页面并且显示不同的数据",contentBackground:"",onBack:A},{extra:e(()=>[t(d,{type:"primary",danger:""},{default:e(()=>[p(" 禁用账号 ")]),_:1}),t(d,{type:"primary"},{default:e(()=>[p(" 修改密码 ")]),_:1})]),footer:e(()=>[t(r(g),{"default-active-key":"detail",activeKey:s.value,"onUpdate:activeKey":l[0]||(l[0]=a=>s.value=a)},{default:e(()=>[t(r(u),{key:"detail",tab:"用户资料"}),t(r(u),{key:"logs",tab:"操作日志"})]),_:1},8,["activeKey"])]),default:e(()=>[c("div",w,[s.value=="detail"?(n(),f(_,{key:0},y(10,a=>c("div",{key:a},"这是用户"+v(o.value)+"资料Tab",1)),64)):k("",!0),s.value=="logs"?(n(),f(_,{key:1},y(10,a=>c("div",{key:a},"这是用户"+v(o.value)+"操作日志Tab",1)),64)):k("",!0)])]),_:1},8,["title"])}}});export{$ as default};
