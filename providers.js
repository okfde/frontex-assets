import{h as e}from"./vendor.js";import{k as c,m,i as u,f as g,n as p,o as v,p as b}from"./data.js";function h(){var t;const s=document.querySelector("#fx-important-providers"),r=document.querySelector("#fx-provider-modal");for(const a of c){const i=m(a),d=e("div",{class:"col col-12 col-md-4 mb-4 d-flex"},e("div",{class:"box-card bg-white border-blue"},e("div",{class:"box-card-header p-3 tight-margin bg-blue-20 flex-grow-1"},e("h4",{class:"h5"},u("groups",a,"title"),g(a,r))),e("div",null,e("div",{class:"p-3"},e("ol",{class:"list-unstyled mb-0"},i.slice(0,5).map(([l,o],n)=>e("li",{class:"mb-2","data-toggle":"tooltip","data-placement":"left",title:p(l)},e("div",{class:"d-flex align-items-center position-relative",style:"height: 0.75rem;"},e("div",{class:"h5 m-0"},v(l.code)),e("div",{class:`ml-1 rounded h-100 ${n===0?"bg-blue-600":"bg-gray-400"}`,role:"progressbar",style:`width: ${o*100}%`,"aria-valuenow":Math.round(o*100),"aria-valuemin":"0","aria-valuemax":"100"}),e("small",{class:"ml-auto position-absolute",style:"right: 0"},b(o))))))))));s.appendChild(d)}(t=window.BSN)==null||t.initCallback()}document.addEventListener("DOMContentLoaded",h);
