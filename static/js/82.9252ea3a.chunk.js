"use strict";(self.webpackChunkwork_kava_admin=self.webpackChunkwork_kava_admin||[]).push([[82],{2082:(e,t,i)=>{i.r(t),i.d(t,{default:()=>me});var n=i(5043),l=i(5903),r=i(1874);const a=(0,l.A)(r.ah)`
  margin-bottom: 16px;
`,d=l.A.h1`
  margin-bottom: 16px;
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    font-size: 20px;
  }
`,o=l.A.h2`
  font-size: 22px;
  margin-bottom: 16px;
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    font-size: 20px;
  }
`,s=l.A.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,c=l.A.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: start;
  gap: 16px;
`;var p=i(9615);const u=e=>({en:36,de:8364,ua:8372}[e]),h=e=>String(e[0]).toUpperCase()+String(e).slice(1),x=e=>String.fromCharCode(e),g=(e,t)=>{const i=e.split("_"),n=i[i.length-1];return"Price"===t||"Preis"===t||"\u0426\u0456\u043d\u0430"===t?3===i.length?`${n.toUpperCase()} ${h(e.split("_")[1])} (${x(u(n))})`:`${n.toUpperCase()} (${x(u(n))})`:i.length>1?n.toUpperCase():h(i[0])},m=l.A.input`
  width: 100%;
  height: 32px;
  padding-left: 10px;
  padding-right: 10px;
  outline: unset;
  color: inherit;
  caret-color: currentColor;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  border-radius: 4px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.elementsBackground}};
`,v=l.A.textarea`
  outline: unset;
  height: 100px;
  color: inherit;
  caret-color: currentColor;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  border-radius: 4px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.elementsBackground}};
  resize: none;
`;var f=i(579);const j=e=>{let{data:t,title:i,onChange:n}=e;return(0,f.jsxs)("div",{children:[(0,f.jsx)(r.E9,{children:i}),null===t||void 0===t?void 0:t.map(e=>(0,f.jsxs)(r.Gw,{children:[(0,f.jsx)(r.HL,{children:g(e,i)}),"ingredients_en"===t[0]?(0,f.jsx)(v,{name:e,onChange:n}):(0,f.jsx)(m,{type:"text",name:e,hidden:"Image"===i,onChange:n})]},e))]})};var _=i(114);const b=e=>e===_.f$?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],ingredients:["coffee","water"],images:["img","webpImg"]}:e===_.xX?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],ingredients:["coffee","water","milk"],images:["img","webpImg"]}:e===_.qY?{title:["title_en","title_de","title_ua"],price:["price_en","price_de","price_ua"],weight:["weight"],images:["img","webpImg"]}:e===_.d4||e===_.iK?{title:["title_en","title_de","title_ua"],price:["price_standart_en","price_double_en","price_standart_de","price_double_de","price_standart_ua","price_double_ua"],ingredients:["ingredients_en","ingredients_de","ingredients_ua"],images:["img","webpImg"]}:e===_.n?{title:["title_en","title_de","title_ua"],price:["price_standart_en","price_xl_en","price_standart_de","price_xl_de","price_standart_ua","price_xl_ua"],ingredients:["ingredients_en","ingredients_de","ingredients_ua"],images:["img","webpImg"]}:void 0,w=e=>{if(!Object.keys(e).length)return!1;const t=Object.keys(e);let i=!0;for(let n=0;n<t.length;n++)if(null===e[t[n]]||""===e[t[n]]||0===e[t[n]]){i=!1;break}return i};var k=i(3003),y=i(5051),C=i(6753);const A=e=>{let{onChange:t}=e;const{locale:i}=(0,k.d4)(y.mB),n=["Jpg/Png","Webp"];return(0,f.jsxs)("div",{children:[(0,f.jsx)(r.E9,{children:C.v[i].images_title}),["img","webpImg"].map((e,l)=>(0,f.jsxs)(r.Gw,{children:[(0,f.jsx)(r.HL,{children:n[l]}),(0,f.jsx)("input",{id:e,type:"file",hidden:!0,name:e,onChange:t}),(0,f.jsx)(r.OV,{type:"button",onClick:()=>document.getElementById(`${e}`).click(),children:C.v[i].select_file})]},e))]})};var $=i(3061),M=i(7954),I=i(7950),E=i(5285);const R=document.querySelector("#modal-root"),L=e=>{let{onClose:t,children:i}=e;(0,n.useEffect)(()=>(window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}));const l=e=>{"Escape"===e.code&&"function"===typeof t&&t()};return(0,I.createPortal)((0,f.jsx)(E.z,{onClick:e=>{e.target===e.currentTarget&&"function"===typeof t&&t()},children:i}),R)};var B=i(6555),N=i(6422);const S=l.A.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 280px;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.primaryBackground}};
  border: 1px solid white;
  border-radius: 10px;
`,z=l.A.h1`
  font-size: 18px;
  margin-bottom: 16px;
  text-align: center;
`,O=(0,l.A)(r.OV)`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`,V=e=>{let{action:t,onCloseModal:i,data:n,names:l}=e;const{local:r}=(0,k.d4)(y.mB);return(0,f.jsxs)(S,{children:[(0,f.jsx)(z,{children:C.v[r].select_an_action}),(0,f.jsx)(O,{onClick:()=>{i()},children:l.cancel}),(0,f.jsx)(O,{onClick:()=>{t&&t()},children:l.action})]})},F=()=>{var e,t,i;const{locale:l}=(0,k.d4)(y.mB),u=(0,p.Zp)(),h=(0,k.wA)(),x=(0,n.useRef)(null),g=(0,n.useRef)(null),{isModalOpen:m,openModal:v,closeModal:I}=(0,B.h)(),E=(0,p.zy)(),R=(0,n.useRef)(null===E||void 0===E||null===(e=E.state)||void 0===e?void 0:e.props),S=null===R||void 0===R||null===(t=R.current)||void 0===t?void 0:t.pathname,z=(0,N.L)(S,l),O=b(S),{isLoading:F,operation:q}=(0,M.k)(S,_.tq),U=null===R||void 0===R||null===(i=R.current)||void 0===i?void 0:i.index,D=(e=>{const t=Object.keys(e),i=[];t.forEach(t=>e[t].forEach(e=>i.push(e)));const n={};return i.map(e=>n[e]=null),n.archived=!1,n.img=null,n.webpImg=null,n})(O),[T,G]=(0,n.useState)(D),[H,P]=(0,n.useState)({img:null,webpImg:null}),W=e=>{const{name:t,value:i}=e.target,n=Number(i);let l=i;isNaN(i)||(l=n),G({...T,[t]:l})};return(0,f.jsxs)(f.Fragment,{children:[F&&(0,f.jsx)($.a,{}),(0,f.jsx)(a,{to:S,children:C.v[l].ba\u0441k_to_produkt_list}),(0,f.jsx)(d,{children:z}),(0,f.jsx)(o,{children:C.v[l].add_new_product}),(0,f.jsxs)(s,{ref:g,onSubmit:e=>{e.preventDefault();w(T)?(h(q({...T,index:U})),e.current,g.current.reset(),P({img:null,webpImg:null}),v("askAdd")):alert("Not all fields are filled in")},children:[(0,f.jsx)(j,{data:O.title,title:C.v[l].name_title,onChange:W}),(0,f.jsx)(j,{data:O.price,title:C.v[l].price_title,onChange:W}),(null===O||void 0===O?void 0:O.ingredients)&&(0,f.jsx)(j,{data:O.ingredients,title:C.v[l].ingredients_title,onChange:W}),(null===O||void 0===O?void 0:O.weight)&&(0,f.jsx)(j,{data:O.weight,title:C.v[l].weight_title,onChange:W}),(0,f.jsx)(A,{onChange:e=>{const t=e.target.files[0],i=e.target.name;if(t){const e=new FileReader;G({...T,[i]:t}),e.onloadend=()=>{P({...H,[i]:e.result})},e.readAsDataURL(t)}}}),(0,f.jsxs)(c,{children:[(null===H||void 0===H?void 0:H.img)&&(0,f.jsx)("img",{src:null===H||void 0===H?void 0:H.img,alt:"Raster"}),(null===H||void 0===H?void 0:H.webpImg)&&(0,f.jsx)("img",{src:null===H||void 0===H?void 0:H.webpImg,alt:"Webp"})]}),(0,f.jsx)(r.OV,{type:"submit",children:C.v[l].submit})]}),m.askAdd&&!F&&(0,f.jsx)(L,{id:"askAdd",forwardetRef:x,onClose:()=>I("askAdd"),children:(0,f.jsx)(V,{action:e=>{u(e)},onCloseModal:()=>I("askAdd"),data:S,names:{cancel:C.v[l].add_new_product,action:C.v[l].ba\u0441k_to_produkt_list}})})]})},q=(0,l.A)(r.ah)`
  margin-bottom: 16px;
`,U=l.A.h1`
  margin-bottom: 16px;
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    font-size: 20px;
  }
`,D=l.A.h2`
  font-size: 22px;
  margin-bottom: 16px;
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    font-size: 20px;
  }
`,T=l.A.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,G=l.A.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: start;
  gap: 16px;
`,H=(0,l.A)(r.HL)`
  flex-shrink: 0;
  margin-inline-end: 10px;
`,P=l.A.label`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`,W=(l.A.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`,l.A.div`
  display: flex;
  gap: 10px;
`,l.A.input`
  width: 100%;
  height: 32px;
  padding-left: 10px;
  padding-right: 10px;
  outline: unset;
  color: inherit;
  caret-color: currentColor;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  border-radius: 4px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.elementsBackground}};
`),X=(0,l.A)(r.rA)`
  flex-shrink: 0;
  margin-inline-start: 10px;
  width: 32px;
  height: 32px;
`,Z=l.A.textarea`
  outline: unset;
  width: 100%;
  height: 100px;
  padding-inline-start: 10px;
  padding-top: 10px;
  padding-inline-end: 10px;
  padding-bottom: 10px;
  color: inherit;
  caret-color: currentColor;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  border-radius: 4px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.elementsBackground}};
  resize: none;
`;var J=i(4208);const K=e=>{let{data:t,title:i,onChange:n,product:l}=e;return(0,f.jsx)(f.Fragment,{children:l&&(0,f.jsxs)("div",{children:[(0,f.jsx)(r.E9,{children:i}),null===t||void 0===t?void 0:t.map(e=>(0,f.jsxs)(P,{children:[(0,f.jsx)(H,{children:g(e,i)}),t.includes("ingredients_en")?(0,f.jsx)(Z,{name:e,onChange:n,defaultValue:l[e]}):(0,f.jsx)(W,{type:"text",name:e,onChange:n,defaultValue:l[e]}),(0,f.jsx)(X,{children:(0,f.jsx)(J.A,{w:18,h:18,icon:"undo"})})]},e))]})})},Q=e=>{let{onChange:t}=e;const{locale:i}=(0,k.d4)(y.mB),n=["Jpg/Png","Webp"];return(0,f.jsxs)("div",{children:[(0,f.jsx)(r.E9,{children:C.v[i].images_title}),["img","webpImg"].map((e,l)=>(0,f.jsxs)(r.Gw,{children:[(0,f.jsx)(r.HL,{children:n[l]}),(0,f.jsx)("input",{id:e,type:"file",accept:"img"===e?"image/png, image/jpeg":"image/webp",hidden:!0,name:e,onChange:t}),(0,f.jsx)(r.OV,{type:"button",onClick:()=>document.getElementById(`${e}`).click(),children:C.v[i].select_file})]},e))]})},Y=l.A.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 280px;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.primaryBackground}};
  border: 1px solid white;
  border-radius: 10px;
`,ee=l.A.h1`
  font-size: 18px;
  margin-bottom: 16px;
  text-align: center;
`,te=l.A.p``,ie=e=>{let{data:t,text:i}=e;return(0,f.jsxs)(Y,{children:[(0,f.jsx)(ee,{children:"Info"}),(0,f.jsx)(te,{children:i}),(0,f.jsx)(r.ah,{to:t,children:"Ok"})]})},ne=()=>{var e,t;const i=(0,k.wA)(),l=(0,p.Zp)(),[a,d]=(0,n.useState)(),[o,s]=(0,n.useState)(!1),{id:c}=(0,p.g)(),{locale:u}=(0,k.d4)(y.mB),h=(0,n.useRef)(null),{isModalOpen:x,openModal:g,closeModal:m}=(0,B.h)(),v=(0,p.zy)(),j=(0,n.useRef)(null===v||void 0===v||null===(e=v.state)||void 0===e?void 0:e.props),A=null===j||void 0===j||null===(t=j.current)||void 0===t?void 0:t.pathname,I=b(A),{isLoading:E,collection:R,operation:N}=(0,M.k)(A,_.L4),[S,z]=(0,n.useState)(),[O,F]=(0,n.useState)({img:null,webpImg:null});(0,n.useEffect)(()=>{if(c){const e=R.findIndex(e=>e._id===c);d(R[e]),F({img:`${_.q9}/${R[e].imgURL}`,webpImg:`${_.q9}/${R[e].webpImgURL}`})}},[c,R]),(0,n.useEffect)(()=>{o&&(s(!1),g("infoModal"))},[o,g]);const H=e=>{const{name:t,value:i}=e.target,n=Number(i);let l=i;isNaN(i)||(l=n),l===a[t]?z(e=>{const i={...e};return delete i[t],i}):z({...S,[t]:l})};return(0,f.jsxs)(f.Fragment,{children:[E&&(0,f.jsx)($.a,{}),(0,f.jsx)(q,{to:A,children:C.v[u].ba\u0441k_to_produkt_list}),(0,f.jsx)(U,{children:u===_.qL?null===a||void 0===a?void 0:a.title_en:u===_.MG?null===a||void 0===a?void 0:a.title_de:null===a||void 0===a?void 0:a.title_ua}),(0,f.jsx)(D,{children:C.v[u].edit_product}),(0,f.jsxs)(T,{ref:h,onSubmit:e=>{if(e.preventDefault(),!S)return alert("Not all fields are filled in");w(S)?g("askEdit"):alert("Not all fields are filled in")},children:[(0,f.jsx)(K,{data:I.title,title:C.v[u].name_title,onChange:H,product:a,type:"text"}),(0,f.jsx)(K,{data:I.price,title:C.v[u].price_title,onChange:H,product:a,type:"number"}),(null===I||void 0===I?void 0:I.ingredients)&&(0,f.jsx)(K,{data:I.ingredients,title:C.v[u].ingredients_title,onChange:H,product:a,type:"text"}),(null===I||void 0===I?void 0:I.weight)&&(0,f.jsx)(K,{data:I.weight,title:C.v[u].weight_title,onChange:H,product:a,type:"number"}),(0,f.jsx)(Q,{onChange:e=>{const t=e.target.files[0],i=e.target.name;if(t){const e=new FileReader;z({...S,[i]:t}),e.onloadend=()=>{F({...O,[i]:e.result})},e.readAsDataURL(t)}}}),(0,f.jsxs)(G,{children:[(null===O||void 0===O?void 0:O.img)&&(0,f.jsx)("img",{src:null===O||void 0===O?void 0:O.img,alt:"Raster"}),(null===O||void 0===O?void 0:O.webpImg)&&(0,f.jsx)("img",{src:null===O||void 0===O?void 0:O.webpImg,alt:"Webp"})]}),(0,f.jsx)(r.OV,{type:"submit",children:C.v[u].submit})]}),x.askEdit&&(0,f.jsx)(L,{onClose:()=>m("askEdit"),children:(0,f.jsx)(V,{action:()=>{m("askEdit"),i(N({id:c,data:S})),s(!0)},data:A,onCloseModal:()=>m("askEdit"),names:{cancel:C.v[u].cancel,action:C.v[u].submit}})}),x.infoModal&&!E&&(0,f.jsx)(L,{onClose:()=>{l(A)},children:(0,f.jsx)(ie,{data:A,text:C.v[u].success_update})})]})};var le=i(2374);const re=["#ffffff","#bdff99","#ffc999","#f1c2f2","#d8f1fe","#f5ffb9"];var ae=i(3054);const de=l.A.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: -1px;
  padding-left: 16px;
  padding-top: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.elementsBackground}};
  &.visually-hidden {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }
`,oe=l.A.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 26px;
  gap: 10px;
`,se=l.A.span`
  position: relative;
  display: block;
  width: 14px;
  height: 14px;
  background-color: #ffffff;
  border-radius: 50%;
  &.active {
    &::before {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 10px;
      height: 10px;
      background-color: ${e=>{let{theme:t}=e;return t.colors.buttonsBackground}};
      border-radius: 50%;
    }
  }
`,ce=e=>e.filter.status;var pe=i(3479);const ue=e=>{let{className:t,onChange:i,onToggle:n,forwardedRef:l}=e;const{locale:r}=(0,k.d4)(y.mB),a=(0,k.wA)(),d=(0,k.d4)(ce),o=e=>{const t=e.target.id;a((0,pe.V)(t)),i(t),n(t)};return(0,f.jsxs)(de,{className:t,ref:l,children:[(0,f.jsxs)(oe,{children:[(0,f.jsx)(se,{className:"active"===d?"active":null}),C.v[r].only_active_cards,(0,f.jsx)("input",{id:"active",hidden:!0,name:"filter",type:"radio",checked:"active"===d,onChange:o})]}),(0,f.jsxs)(oe,{children:[(0,f.jsx)(se,{className:"archive"===d?"active":null}),C.v[r].only_archived_cards,(0,f.jsx)("input",{id:"archive",hidden:!0,name:"filter",type:"radio",checked:"archive"===d,onChange:o})]}),(0,f.jsxs)(oe,{children:[(0,f.jsx)(se,{className:"all"===d?"active":null}),C.v[r].all_cards,(0,f.jsx)("input",{id:"all",hidden:!0,name:"filter",type:"radio",checked:"all"===d,onChange:o})]})]})};var he=i(9142);const xe=e=>{let{data:t,title:i,checkedRadio:l}=e;const a=(0,k.wA)(),d=(0,n.useRef)(null),o=(0,n.useRef)(null),[s,c]=(0,n.useState)(),[u,h]=(0,n.useState)(),{isModalOpen:x,openModal:g,closeModal:m,toggleModal:v}=(0,B.h)();(0,he.w)([d,o],m,"selectFilter");const j=(0,ae.S)(),{locale:b}=(0,k.d4)(y.mB),{pathname:w}=(0,p.zy)(),{isLoading:A,operation:I}=(0,M.k)(w,s),[E,R]=(0,n.useState)(),[N,S]=(0,n.useState)(null),z=(e=>{if(0===e.length)return-1;{const t=e.flatMap(e=>e.index);return Math.max.apply(null,t)}})(t)+1;(0,n.useEffect)(()=>{S(C.v[b].only_active_cards),a((0,pe.V)("active")),R(t.filter(e=>!1===e.archived))},[a,t,b]);const O=()=>{v("selectFilter")};return(0,f.jsxs)(f.Fragment,{children:[A&&(0,f.jsx)($.a,{}),(0,f.jsx)(le.HX,{children:i}),(0,f.jsxs)(le.Fr,{onClick:O,type:"button",ref:o,children:[(0,f.jsx)(J.A,{w:16,h:16,icon:"filter"}),(0,f.jsx)("span",{children:N}),(0,f.jsx)(le.In,{w:12,h:12,icon:"arrow",rotate:null!==x&&void 0!==x&&x.selectFilter?"180deg":0})]}),(0,f.jsx)(ue,{className:null!==x&&void 0!==x&&x.selectFilter?null:"visually-hidden",onChange:e=>{"active"===e&&(S(C.v[b].only_active_cards),R(t.filter(e=>!1===e.archived))),"archive"===e&&(S(C.v[b].only_archived_cards),R(t.filter(e=>!0===e.archived))),"all"===e&&(S(C.v[b].all_cards),R(t))},onToggle:O,local:b,checkedRadio:l,forwardedRef:d}),(0,f.jsxs)(le.mN,{to:_.Qy,state:{props:{pathname:w,index:z}},children:[(0,f.jsx)(J.A,{w:j>413?16:12,h:j>413?16:12,icon:"add"}),(0,f.jsx)("span",{children:C.v[b].add_new_product})]}),(null===E||void 0===E?void 0:E.length)>0&&(0,f.jsx)(le.KR,{children:null===E||void 0===E?void 0:E.map((e,t)=>(0,f.jsxs)(le.vx,{children:[(0,f.jsx)(le.ZB,{children:b===_.qL?e.title_en:b===_.MG?e.title_de:e.title_ua}),(0,f.jsx)(le.dJ,{color:re[t],className:e.archived?"archived":null,children:(0,f.jsx)(le.Xq,{width:120,src:`${_.q9}w_240,c_fill/${e.imgURL}`,alt:e.title_en})}),(0,f.jsxs)(le.Mm,{children:[(0,f.jsx)(le.hB,{to:`${_.nX}/${e._id}`,state:{props:{pathname:w,index:z}},children:(0,f.jsx)(J.A,{w:24,h:24,icon:"edit"})}),(0,f.jsx)(r.rA,{onClick:()=>(e=>{c(_.L4),h(e),g("askArchive")})({id:e._id,archived:e.archived}),children:(0,f.jsx)(J.A,{w:24,h:24,icon:e.archived?"unarchive":"archive"})}),(0,f.jsx)(r.rA,{onClick:()=>(e=>{c(_.WM),h(e),g("askDelete")})({id:e._id}),children:(0,f.jsx)(J.A,{w:24,h:24,icon:"delete"})})]})]},e._id))}),(null===x||void 0===x?void 0:x.askArchive)&&(0,f.jsx)(L,{onClose:()=>m("askArchive"),children:(0,f.jsx)(V,{action:e=>{let{id:t,archived:i}=e;a((0,pe.V)("active")),a(I({id:t,data:{archived:!i}}))},onCloseModal:()=>m("askArchive"),data:u,names:{cancel:C.v[b].cancel,action:u.archived?C.v[b].restore:C.v[b].archive}})}),(null===x||void 0===x?void 0:x.askDelete)&&(0,f.jsx)(L,{onClose:()=>m("askDelete"),children:(0,f.jsx)(V,{action:e=>{let{id:t}=e;a((0,pe.V)("active")),a(I(t))},onCloseModal:()=>m("askDelete"),data:u,names:{cancel:C.v[b].cancel,action:C.v[b].delete}})})]})};var ge=i(342);const me=()=>{const{isLoggedIn:e}=(0,ge.A)(),t=(0,k.wA)(),{pathname:i}=(0,p.zy)(),{locale:l}=(0,k.d4)(y.mB),a=(0,N.L)(i,l),{collection:d,operation:o}=(0,M.k)(i,_.ZO);return(0,n.useEffect)(()=>{e&&o&&(t((0,pe.V)("active")),t(o()))},[t,e,o]),(0,f.jsx)(r.Eh,{children:(0,f.jsx)(r.mc,{children:i===_.Qy?(0,f.jsx)(F,{}):"edit"===i.split("/")[1]?(0,f.jsx)(ne,{}):d&&(0,f.jsx)(xe,{data:d,title:a})})})}}}]);
//# sourceMappingURL=82.9252ea3a.chunk.js.map