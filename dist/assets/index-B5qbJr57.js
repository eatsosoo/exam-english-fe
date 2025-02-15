import{P as B}from"./index-DnpQZsBg.js";import{s as c,a as C,bc as M,bd as y,as as I,aR as g,C as S,ao as Y,b5 as b}from"./entry/index-BcidWyMC.js";import{ax as k,l as R}from"./antd-BFwNME3X.js";import{d as w,f as H,w as U,Z as N,_ as j,a0 as P,r as V,a8 as $,a9 as v,k as l,u as a,$ as h}from"./vue-DhXvXWyK.js";import"./PageWrapper.vue_vue_type_style_index_0_lang-wgu38p8X.js";import"./useContentViewHeight-CCI8OV4I.js";import"./useWindowSizeFn-SAmktNkd.js";import"./onMountedOrActivated-CvY6VkYA.js";const T=1e3,q=w({name:"Time",__name:"Time",props:{value:c.oneOfType([c.number,c.instanceOf(Date),c.string]).isRequired,step:c.number.def(60),mode:c.oneOf(["date","datetime","relative"]).def("relative")},setup(D){const n=D,i=T*60,f=i*60,p=f*24,d=H(""),{t:r}=C();M(O,n.step*T),U(()=>n.value,()=>{O()},{immediate:!0});function E(){const{value:e}=n;let s=0;if(k(e)){const m=e.toString().length>10?e:e*1e3;s=new Date(m).getTime()}else R(e)?s=new Date(e).getTime():S(e)&&(s=e.getTime());return s}function O(){const{mode:e,value:s}=n,m=E();e==="relative"?d.value=x(m):e==="datetime"?d.value=y(s):e==="date"&&(d.value=I(s))}function x(e){const s=new Date().getTime(),m=g(e).isBefore(s);let t=s-e;m||(t=-t);let o="",_=r(m?"component.time.before":"component.time.after");return t<T?o=r("component.time.just"):t<i?o=parseInt(t/T)+r("component.time.seconds")+_:t>=i&&t<f?o=Math.floor(t/i)+r("component.time.minutes")+_:t>=f&&t<p?o=Math.floor(t/f)+r("component.time.hours")+_:t>=p&&t<262386e4?o=Math.floor(t/p)+r("component.time.days")+_:t>=262386e4&&t<=3156786e4&&m?o=g(e).format("MM-DD-HH-mm"):o=g(e).format("YYYY"),o}return(e,s)=>(N(),j("span",null,P(d.value),1))}}),u=Y(q),A=h("br",null,null,-1),F=h("br",null,null,-1),W=h("br",null,null,-1),Z=h("br",null,null,-1),te=w({__name:"index",setup(D){const n=new Date().getTime(),i=V({time1:n-60*3*1e3,time2:n-86400*3*1e3});return(f,p)=>(N(),$(a(B),{title:"时间组件示例"},{default:v(()=>[l(a(b),{title:"基础示例"},{default:v(()=>[l(a(u),{value:i.time1},null,8,["value"]),A,l(a(u),{value:i.time2},null,8,["value"])]),_:1}),l(a(b),{title:"定时更新",class:"my-4"},{default:v(()=>[l(a(u),{value:a(n),step:1},null,8,["value"]),F,l(a(u),{value:a(n),step:5},null,8,["value"])]),_:1}),l(a(b),{title:"定时更新"},{default:v(()=>[l(a(u),{value:a(n),mode:"date"},null,8,["value"]),W,l(a(u),{value:a(n),mode:"datetime"},null,8,["value"]),Z,l(a(u),{value:a(n)},null,8,["value"])]),_:1})]),_:1}))}});export{te as default};
