import{h as e}from"./vendor.js";import{k as n,m as c,i as m,f as p,n as u,o as g,p as b,q as v}from"./data.js";function h(){const a=document.querySelector("#fx-important-providers"),l=document.querySelector("#fx-provider-modal");for(const s of n){const r=c(s),i=e("div",{class:"col col-12 col-md-4 mb-4 d-flex"},e("div",{class:"box-card bg-white border-blue"},e("div",{class:"box-card-header p-3 tight-margin bg-blue-20 flex-grow-1"},e("h4",{class:"h5"},m("groups",s,"title"),p(s,l))),e("div",null,e("div",{class:"p-3"},e("ol",{class:"list-unstyled mb-0"},r.slice(0,5).map(([t,o],d)=>e("li",{class:"mb-2","data-bs-toggle":"tooltip","data-bs-placement":"left",title:u(t)},e("div",{class:"d-flex align-items-center position-relative",style:"height: 0.75rem;"},e("div",{class:"h5 m-0"},g(t.code)),e("div",{class:`ms-1 rounded h-100 ${d===0?"bg-blue-600":"bg-gray-400"}`,role:"progressbar",style:`width: ${o*100}%`,"aria-valuenow":Math.round(o*100),"aria-valuemin":"0","aria-valuemax":"100"}),e("small",{class:"ms-auto position-absolute",style:"right: 0"},b(o))))))))));a.appendChild(i)}v(a)}document.addEventListener("DOMContentLoaded",h);
