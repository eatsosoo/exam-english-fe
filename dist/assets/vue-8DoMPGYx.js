import{b as n}from"./antd-BFwNME3X.js";import{r as u}from"./index-C0Ld875h.js";import{r as c}from"./overlay-C3p-Ialw.js";import{r as f}from"./xml-CF9Fh3cQ.js";import{a as m}from"./javascript-C48KDVBS.js";import{a as x}from"./coffeescript-BHkz8eUN.js";import{a as g}from"./css-KPPdhYgq.js";import{a as v}from"./sass-DwHNhqop.js";import{a as y}from"./stylus-DTVazJM8.js";import{a as d}from"./pug-C9ueJOw1.js";import{a as b}from"./handlebars-CMDFauKa.js";function $(r,p){for(var e=0;e<p.length;e++){const s=p[e];if(typeof s!="string"&&!Array.isArray(s)){for(const t in s)if(t!=="default"&&!(t in r)){const a=Object.getOwnPropertyDescriptor(s,t);a&&Object.defineProperty(r,t,a.get?a:{enumerable:!0,get:()=>s[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var h={exports:{}};(function(r,p){(function(e){e(u(),c(),f(),m,x,g,v,y,d,b)})(function(e){var s={script:[["lang",/coffee(script)?/,"coffeescript"],["type",/^(?:text|application)\/(?:x-)?coffee(?:script)?$/,"coffeescript"],["lang",/^babel$/,"javascript"],["type",/^text\/babel$/,"javascript"],["type",/^text\/ecmascript-\d+$/,"javascript"]],style:[["lang",/^stylus$/i,"stylus"],["lang",/^sass$/i,"sass"],["lang",/^less$/i,"text/x-less"],["lang",/^scss$/i,"text/x-scss"],["type",/^(text\/)?(x-)?styl(us)?$/i,"stylus"],["type",/^text\/sass/i,"sass"],["type",/^(text\/)?(x-)?scss$/i,"text/x-scss"],["type",/^(text\/)?(x-)?less$/i,"text/x-less"]],template:[["lang",/^vue-template$/i,"vue"],["lang",/^pug$/i,"pug"],["lang",/^handlebars$/i,"handlebars"],["type",/^(text\/)?(x-)?pug$/i,"pug"],["type",/^text\/x-handlebars-template$/i,"handlebars"],[null,null,"vue-template"]]};e.defineMode("vue-template",function(t,a){var l={token:function(o){if(o.match(/^\{\{.*?\}\}/))return"meta mustache";for(;o.next()&&!o.match("{{",!1););return null}};return e.overlayMode(e.getMode(t,a.backdrop||"text/html"),l)}),e.defineMode("vue",function(t){return e.getMode(t,{name:"htmlmixed",tags:s})},"htmlmixed","xml","javascript","coffeescript","css","sass","stylus","pug","handlebars"),e.defineMIME("script/x-vue","vue"),e.defineMIME("text/x-vue","vue")})})();var i=h.exports;const E=n(i),S=$({__proto__:null,default:E},[i]);export{S as v};
