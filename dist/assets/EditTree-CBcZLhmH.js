import{_ as i}from"./index-CzsjOkIr.js";import{t as s,a as m,b as D}from"./data-BOfxtlv4.js";import{P as h}from"./index-DnpQZsBg.js";import{ab as b,aa as n,aE as g,bn as k}from"./antd-BFwNME3X.js";import{d as N,Z as x,a8 as C,a9 as a,k as t,u as e,G as f,a0 as c,l as d}from"./vue-DhXvXWyK.js";import"./entry/index-BcidWyMC.js";import"./useContextMenu-CwDkUxcv.js";import"./PageWrapper.vue_vue_type_style_index_0_lang-wgu38p8X.js";import"./useContentViewHeight-CCI8OV4I.js";import"./useWindowSizeFn-SAmktNkd.js";import"./onMountedOrActivated-CvY6VkYA.js";const G=N({__name:"EditTree",setup(M){function o(r){const p=[{label:"新增",handler:()=>{},icon:"bi:plus"},{label:"删除",handler:()=>{},icon:"bx:bxs-folder-open"}];return new Promise(l=>{l(p)})}const u=[{render:r=>d(g,{class:"ml-2",onClick:()=>{}})},{render:()=>d(k)}];function _({level:r}){return r===1?"ion:git-compare-outline":r===2?"ion:home":r===3?"ion:airplane":""}return(r,p)=>(x(),C(e(h),{title:"Tree函数操作示例"},{default:a(()=>[t(e(b),{gutter:[16,16]},{default:a(()=>[t(e(n),{span:8},{default:a(()=>[t(e(i),{title:"右侧操作按钮/自定义图标",helpMessage:"帮助信息",treeData:e(s),actionList:u,renderIcon:_},null,8,["treeData"])]),_:1}),t(e(n),{span:8},{default:a(()=>[t(e(i),{title:"右键菜单",treeData:e(s),beforeRightClick:o},null,8,["treeData"])]),_:1}),t(e(n),{span:8},{default:a(()=>[t(e(i),{title:"工具栏使用",toolbar:"",checkable:"",search:"",treeData:e(s),beforeRightClick:o},null,8,["treeData"])]),_:1}),t(e(n),{span:8},{default:a(()=>[t(e(i),{title:"没有fieldNames，插槽有效",helpMessage:"正确的示例",treeData:e(m)},{title:a(l=>[f(" 插槽："+c(l.name),1)]),_:1},8,["treeData"])]),_:1}),t(e(n),{span:8},{default:a(()=>[t(e(i),{title:"有fieldNames后，插槽失效",helpMessage:"错误的示例, 应该显示插槽的内容才对",fieldNames:{key:"id",title:"name"},treeData:e(D)},{title:a(l=>[f(" 插槽："+c(l.title),1)]),_:1},8,["treeData"])]),_:1}),t(e(n),{span:8},{default:a(()=>[t(e(i),{title:"有fieldNames后，actionList失效",helpMessage:"错误的示例，应该在鼠标移上去时，显示新增和删除按钮才对",treeData:e(m),actionList:u,fieldNames:{key:"key",title:"name"}},null,8,["treeData"])]),_:1})]),_:1})]),_:1}))}});export{G as default};
