var w=Object.defineProperty;var y=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var v=(e,a,t)=>a in e?w(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,x=(e,a)=>{for(var t in a||(a={}))k.call(a,t)&&v(e,t,a[t]);if(y)for(var t of y(a))E.call(a,t)&&v(e,t,a[t]);return e};import{e as T,a as M,h as r}from"./vendor.js";import{a as S,i as s,c as C,g as q,l as b,b as I,d as j,e as A,f as D,p as H,h as F,j as $,s as B}from"./data.js";function G(e,a,t){const c=S[a.code].map(o=>({index:o.year,value:o[t]})).sort((o,u)=>o.year-u.year),l=S[a.code].map(o=>o.year),d={labelColor:"var(--gray-600)",gridColor:"var(--gray-100)",domainColor:"transparent",tickColor:"var(--gray-200)",tickCount:2},f={width:"container",config:{view:{continuousWidth:400,continuousHeight:80},line:{point:!0}},layer:[{mark:{type:"line",interpolate:"linear"},encoding:{color:{value:"var(--blue-30)"},x:{axis:x({format:""},d),field:"index",scale:{domain:[Math.min(...l),Math.max(...l)]},title:"",type:"quantitative"},y:{field:"value",type:"quantitative",title:"",axis:d},tooltip:[{field:"value",title:s("groups",t,"title")}]}}],data:{name:"data",values:c},$schema:"https://vega.github.io/schema/vega-lite/v5.2.0.json"};T(e,f,{ast:!0,expr:M,renderer:"svg",actions:!1})}let m;function L(e){var u,h;const a=document.querySelector("#fx-country-selector"),t=document.querySelector("#fx-stats"),c=document.querySelector("#fx-hint"),l=document.querySelector("#fx-explorer-modal");a.innerText=q(e),c.innerText=s("description"),(u=e.hint)!=null&&u[b]&&(c.innerHTML+=`<br>${e.hint[b]}`),t.innerHTML="";const d=I[e.code],{sortedGroups:f}=j(e);for(const[n,p]of f){const i=d[n];if(i===0)continue;const g=r("div",{class:"row mb-3"},r("div",{class:"col-12 col-md-6 order-md-2 fx-chart"}),r("div",{class:"text-nowrap col-12 col-md-6 d-flex flex-column justify-content-center my-3"},r("div",null,r("span",{class:"h3"},A(i))," ",s("groups",n,"title")," ",s("stats","providedInTotal"),D(n,l)),r("span",{class:"text-gray-700 mt-1"},H(p)," ",s("stats","ofAll"))));G(g.querySelector(".fx-chart"),e,n),t.appendChild(g)}document.querySelector("#fx-attribution").innerText=s("attribution");const o=document.querySelector("#fx-download-png");if(o){const n=F(e);o.setAttribute("href",n),m&&o.removeEventListener("click",m),m=async p=>{p.preventDefault();const i=()=>window.open(n);await B(e).catch(i)||i()},o.addEventListener("click",m),$&&((h=o.querySelector("i"))==null||h.setAttribute("class","fa fa-share-alt"))}}function O(){const e=document.querySelector("#fx-country-selector");for(const a of C){const t=document.createElement("a");t.classList.add("dropdown-item"),t.href="#!",t.innerText=q(a),t.addEventListener("click",()=>L(a)),e.nextElementSibling.appendChild(t)}}document.addEventListener("DOMContentLoaded",()=>{O(),L(C.find(e=>e.code==="DE"))});
