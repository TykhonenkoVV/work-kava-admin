"use strict";(self.webpackChunkwork_kava_admin=self.webpackChunkwork_kava_admin||[]).push([[539],{539:(e,t,l)=>{l.r(t),l.d(t,{default:()=>se});var n=l(3061),i=l(6555),a=l(876),o=l(5043),r=l(3003),s=l(9615),d=l(6753),c=l(114);const p=e=>e===c.f$?{localeBlocks:["title","standart"],globalBlocks:["coffee","water"],images:["img","webpImg"]}:e===c.xX?{localeBlocks:["title","standart"],globalBlocks:["coffee","water","milk"],images:["img","webpImg"]}:e===c.qY?{localeBlocks:["title","standart"],globalBlocks:["weight"],images:["img","webpImg"]}:e===c.d4||e===c.iK||e===c.n?{localeBlocks:["title","standart","xl","ingredients"],images:["img","webpImg"]}:e===c.t9?{localeBlocks:["title","price","caption"],images:["img","webpImg"]}:void 0;var h=l(5903),u=l(1874);const x=(0,h.A)(u.ah)`
  margin-bottom: 16px;
`,m=h.A.h1`
  margin-bottom: 16px;
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    font-size: 20px;
  }
`,g=h.A.h2`
  font-size: 22px;
  margin-bottom: 16px;
  @media screen and (${e=>{let{theme:t}=e;return t.devices.lessMobile}}) {
    font-size: 20px;
  }
`,v=h.A.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,f=(e,t)=>{return"standart"===t||"xl"===t?`${e.toUpperCase()} (${n=e,l={en:36,de:8364,ua:8372}[n],String.fromCharCode(l)})`:e.toUpperCase();var l,n},j=(0,h.A)(u.HL)`
  flex-shrink: 0;
  margin-inline-end: 10px;
  &.long {
    width: 60px;
  }
`,b=h.A.label`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`,_=(h.A.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`,h.A.div`
  display: flex;
  gap: 10px;
`,h.A.input`
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
`),k=(0,h.A)(u.rA)`
  flex-shrink: 0;
  margin-inline-start: 10px;
  width: 32px;
  height: 32px;
  color: currentColor;
  fill: currentColor;
  &:disabled {
    cursor: not-allowed;
    color: ${e=>{let{theme:t}=e;return t.colors.primaryDisabledText}};
    background-color: ${e=>{let{theme:t}=e;return t.colors.buttonsDisabledBackground}};
  }
`,y=h.A.textarea`
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
`;var w=l(3261),C=l(5051),A=l(8093),$=l(579);const N=e=>{let{data:t,localed:l,onChange:n,product:i,errors:a}=e;const{locale:s}=(0,r.d4)(C.mB);return(0,$.jsx)($.Fragment,{children:(0,$.jsx)("div",{children:l?(0,$.jsx)($.Fragment,{children:null===t||void 0===t?void 0:t.map(e=>(0,$.jsxs)(o.Fragment,{children:[(0,$.jsxs)(u.E9,{children:["title"===e&&d.v[s].name_title,"price"===e&&d.v[s].price_title,"standart"===e&&d.v[s].price_standart_title,"xl"===e&&d.v[s].price_xl_title,"ingredients"===e&&d.v[s].ingredients_title,"caption"===e&&d.v[s].caption_title]}),["en","de","ua"].map(t=>{var l;return(0,$.jsxs)(o.Fragment,{children:[(0,$.jsxs)(b,{children:[(0,$.jsx)(j,{children:f(t,e)}),"ingredients"===e||"caption"===e?(0,$.jsx)(y,{name:`${e}_${t}`,onChange:n,defaultValue:i&&i[t][e]}):(0,$.jsx)(_,{type:"text",name:`${e}_${t}`,onChange:n,defaultValue:i&&i[t][e]}),i&&(0,$.jsx)(k,{type:"button",disabled:!0,children:(0,$.jsx)(w.A,{w:18,h:18,icon:"undo"})})]}),(null===a||void 0===a||null===(l=a[t])||void 0===l?void 0:l[e])&&(0,$.jsx)(A.y,{text:a[t][e]})]},t)})]},e))}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(u.E9,{children:d.v[s].ingredients_title}),null===t||void 0===t?void 0:t.map(e=>(0,$.jsxs)(o.Fragment,{children:[(0,$.jsxs)(b,{children:[(0,$.jsxs)(j,{className:"long",children:["water"===e&&d.v[s].water_caption,"coffee"===e&&d.v[s].coffee_caption,"milk"===e&&d.v[s].milk_caption,"weight"===e&&d.v[s].weight_caption]}),(0,$.jsx)(_,{type:"text",name:e,onChange:n,defaultValue:i&&i[e]}),i&&(0,$.jsx)(k,{type:"button",disabled:!0,children:(0,$.jsx)(w.A,{w:18,h:18,icon:"undo"})})]}),(null===a||void 0===a?void 0:a[e])&&(0,$.jsx)(A.y,{text:a[e]})]},e))]})})})},B=(0,h.A)(u.E9)`
  margin-block-end: 0;
`,M=(h.A.button`
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primaryText}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.buttonsBackground}};
`,h.A.div`
  @media screen and (${e=>{let{theme:t}=e;return t.devices.onlyMobile}}) {
    flex-direction: column;
  }
  display: flex;
  gap: 16px;
`),O=h.A.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,E=h.A.label`
  display: flex;
  flex-direction: column;
  & span {
    margin-block-end: 16px;
  }
`,I=h.A.img`
  border-radius: 10px;
  background-color: #deb887;
`,R=e=>{let{onChange:t,images:l,errors:n}=e;const{locale:i}=(0,r.d4)(C.mB),a=["Jpg/Png","Webp"];return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(B,{children:d.v[i].images_title}),(0,$.jsx)(M,{children:Object.keys(l).map((e,o)=>(0,$.jsxs)(O,{style:{flexBasis:"calc(100% - 10px)"},children:[(0,$.jsxs)(E,{children:[(0,$.jsx)("span",{children:a[o]}),(0,$.jsx)("input",{id:e,type:"file",accept:"img"===e?"image/png, image/jpeg":"image/webp",hidden:!0,name:e,onChange:t}),(0,$.jsx)(u.OV,{type:"button",onClick:()=>document.getElementById(`${e}`).click(),children:d.v[i].select_file})]}),(0,$.jsx)(I,{src:l[e],alt:"Raster"}),(null===n||void 0===n?void 0:n[e])&&(0,$.jsx)(A.y,{text:n[e]})]},e))})]})};var S=l(1946);const F=h.A.h1`
  font-size: 18px;
  margin-bottom: 16px;
  text-align: center;
`,L=(0,h.A)(u.OV)`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`,V=e=>{let{action:t,onCloseModal:l,data:n,names:i}=e;const{locale:a}=(0,r.d4)(C.mB);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(F,{children:d.v[a].select_an_action}),(0,$.jsx)(L,{onClick:()=>{l()},children:i.cancel}),(0,$.jsx)(L,{onClick:()=>{t&&t(n),l()},children:i.action})]})};var q=l(3166),z=l(6422),T=l(6945),U=l(7367),K=l(9090),W=l(4292),X=l(9999),D=l(9627),H=l(8195);const Q=()=>{const e=(0,r.d4)(U.lN),t=(0,r.d4)(K.G_),l=(0,r.d4)(W.$3),n=(0,r.d4)(T.Hu),i=(0,r.d4)(X.Kc),a=(0,r.d4)(D.KY),o=(0,r.d4)(H._0);return{[c.f$]:e,[c.xX]:t,[c.qY]:l,[c.d4]:n,[c.iK]:i,[c.n]:a,[c.t9]:o}};var Y=l(342);const Z=e=>{var t,l,h;let{dataId:f}=e;const j=(0,r.wA)(),b=(0,s.Zp)(),{locale:_,shortLocale:k}=(0,Y.A)(),[y,w]=(0,o.useState)(),[C,A]=(0,o.useState)(),[B,M]=(0,o.useState)(!1),[O,E]=(0,o.useState)(),[I,F]=(0,o.useState)(!1),[L,T]=(0,o.useState)({img:`${c.q9}w_470,h_260,c_fill/v1766148203/workkava/service/image-not-found.png`,webpImg:`${c.q9}w_470,h_260,c_fill/v1766148203/workkava/service/image-not-found.png`}),{id:U}=(0,s.g)(),K=(0,o.useRef)(null),{isModalOpen:W,openModal:X,closeModal:D}=(0,i.h)(),{isModalOpen:H,openModal:Z,closeModal:J}=(0,i.h)(),G=(0,s.zy)(),P=Q(),ee=(0,o.useRef)(null===G||void 0===G||null===(t=G.state)||void 0===t?void 0:t.props),te=null===ee||void 0===ee||null===(l=ee.current)||void 0===l?void 0:l.index,le=null===ee||void 0===ee||null===(h=ee.current)||void 0===h?void 0:h.pathname,ne=p(le),{isLoading:ie,collection:ae,operation:oe}=(0,a.k)(le,"edit-form"===f?c.L4:c.tq);(0,o.useEffect)(()=>{if(U){const e=ae.findIndex(e=>e._id===U);w(ae[e]),T({img:`${c.q9}/${ae[e].imgURL}`,webpImg:`${c.q9}/${ae[e].webpImgURL}`})}},[U,ae]),(0,o.useEffect)(()=>{A("edit-form"===f&&y?null===y||void 0===y?void 0:y[k].title:(0,z.L)(le,_)),"add-form"===f&&E((e=>{let t={};return Object.keys(e).forEach(l=>{"globalBlocks"!==l&&"images"!==l||e[l].forEach(e=>t[e]=""),"localeBlocks"===l&&(t.en||(t.en={}),t.de||(t.de={}),t.ua||(t.ua={}),e.localeBlocks.forEach(e=>{t.en[e]="",t.de[e]="",t.ua[e]=""}))}),t})(p(le)))},[y,f,k,le,_]),(0,o.useEffect)(()=>{B&&(M(!1),Z())},[B,Z]);const re=e=>{E(((e,t,l,n)=>{const{name:i,value:a}=e.target;let o={};const r=i.split("_"),s=2===r.length,d=null===t||void 0===t?void 0:t[r[1]];if("edit-form"===n)if(s)if(a===l[r[1]][r[0]]||Number(a)===l[r[1]][r[0]]){if("object"===typeof t&&Object.keys(t).length>0)if(Object.keys(null===t||void 0===t?void 0:t[r[1]]).length<2){const e={...t};delete e[r[1]],o=e}else{const e={...t};delete e[r[1]][r[0]],o=e}}else if(d){let e=a;const l=Number(a);isNaN(a)||""===a||(e=l),o={...t,[r[1]]:{...t[r[1]],[r[0]]:e}}}else{let e=a;const l=Number(a);isNaN(a)||""===a||(e=l),o={...t,[r[1]]:{[r[0]]:e}}}else if(a===l[i]||Number(a)===l[i]){const e={...t};delete e[i],o=e}else{let e=a;const l=Number(a);isNaN(a)||""===a||(e=l),o={...t,[i]:e}}else if(s)if(d){let e=a;const l=Number(a);isNaN(a)||""===a||(e=l),o={...t,[r[1]]:{...t[r[1]],[r[0]]:e}}}else{let e=a;const l=Number(a);isNaN(a)||""===a||(e=l),o={...t,[r[1]]:{[r[0]]:e}}}else{let e=a;const l=Number(a);isNaN(a)||""===a||(e=l),o={...t,[i]:e}}return o})(e,O,y,f))},se=()=>{!P[le]&&O?b(le):J()};return(0,$.jsxs)($.Fragment,{children:[ie&&(0,$.jsx)(n.a,{}),(0,$.jsx)(x,{to:le,children:d.v[_].ba\u0441k_to_produkt_list}),(0,$.jsx)(m,{children:C}),(0,$.jsx)(g,{children:"edit-form"===f?d.v[_].edit_product:d.v[_].add_new_product}),(0,$.jsxs)(v,{"data-id":f,ref:K,onSubmit:e=>{if(e.preventDefault(),"edit-form"===f&&(O&&0!==Object.keys(O).length?X():(E(!1),Z())),"add-form"===f){const e=((e,t,l)=>{const n=["water","coffee","milk","standart","xl","price"],i=["img","webpImg"];let a={};return Object.keys(e).forEach(t=>{var o;const r=e[t],s=""===r;"object"!==typeof r||i.includes(t)?s?i.includes(t)?a[t]=d.v[l].error_empty_file:a[t]=d.v[l].error_empty_field:n.includes(t)?isNaN(e[t])&&(a[t]=d.v[l].error_numeric_value):null!==(o=a)&&void 0!==o&&o[t]&&delete a[t]:(a[t]||(a[t]={}),Object.keys(r).forEach(i=>{if(""===e[t][i])a[t]||(a[t]={}),a[t][i]=d.v[l].error_empty_field;else if(n.includes(i))isNaN(e[t][i])?a[t][i]=d.v[l].error_numeric_value:0===e[t][i]&&(a[t][i]=d.v[l].error_null_value);else{var o,r,s;null!==(o=a)&&void 0!==o&&null!==(r=o[t])&&void 0!==r&&r[i]&&delete a[t][i],null!==(s=a)&&void 0!==s&&s[t]&&0===(null===Object||void 0===Object?void 0:Object.keys(a[t])).length&&delete a[t]}}))}),0===Object.keys(a).length&&(a=!1),a})(O,0,_);e?F(e):X()}},children:[(0,$.jsx)(N,{data:ne.localeBlocks,product:y,title:d.v[_].name_title,localed:!0,onChange:re,errors:I}),(null===ne||void 0===ne?void 0:ne.globalBlocks)&&(0,$.jsx)(N,{data:ne.globalBlocks,product:y,title:d.v[_].name_title,localed:!1,onChange:re,errors:I}),(0,$.jsx)(R,{onChange:e=>{const t=e.target.files[0],l=e.target.name;if(t){const e=new FileReader;E({...O,[l]:t}),e.onloadend=()=>{T({...L,[l]:e.result})},e.readAsDataURL(t)}},images:L,errors:I}),(0,$.jsx)(u.OV,{type:"submit",children:d.v[_].submit})]}),W&&(0,$.jsx)(S.a,{onClose:D,children:(0,$.jsx)(V,{action:()=>{D(),"edit-form"===f&&(j(oe({id:U,data:O})),M(!0)),"add-form"===f&&(j(oe({...O,index:te,archived:!1})),M(!0))},data:le,onCloseModal:D,names:{cancel:d.v[_].cancel,action:d.v[_].submit}})}),H&&!ie&&!P[le]&&(0,$.jsx)(S.a,{onClose:se,children:(0,$.jsx)(q.W,{type:"fulfilled",data:le,text:"edit-modal"===f?d.v[_].success_update:d.v[_].success_added})}),H&&!ie&&(P[le]||!O)&&(0,$.jsx)(S.a,{onClose:se,children:(0,$.jsx)(q.W,{type:P[le]?"rejected":"warning",onClose:se,text:P[le]?P[le].message:d.v[_].nothing_has_changed})})]})};var J=l(2374);const G=["#ffffff","#bdff99","#ffc999","#f1c2f2","#d8f1fe","#f5ffb9"];var P=l(3054);const ee=h.A.div`
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
`,te=h.A.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 26px;
  gap: 10px;
`,le=h.A.span`
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
`,ne=e=>e.filter.status;var ie=l(3479);const ae=e=>{let{className:t,onChange:l,onToggle:n,forwardedRef:i}=e;const{locale:a}=(0,r.d4)(C.mB),o=(0,r.wA)(),s=(0,r.d4)(ne),c=e=>{const t=e.target.id;o((0,ie.V)(t)),l(t),n(t)};return(0,$.jsxs)(ee,{className:t,ref:i,children:[(0,$.jsxs)(te,{children:[(0,$.jsx)(le,{className:"active"===s?"active":null}),d.v[a].only_active_cards,(0,$.jsx)("input",{id:"active",hidden:!0,name:"filter",type:"radio",checked:"active"===s,onChange:c})]}),(0,$.jsxs)(te,{children:[(0,$.jsx)(le,{className:"archive"===s?"active":null}),d.v[a].only_archived_cards,(0,$.jsx)("input",{id:"archive",hidden:!0,name:"filter",type:"radio",checked:"archive"===s,onChange:c})]}),(0,$.jsxs)(te,{children:[(0,$.jsx)(le,{className:"all"===s?"active":null}),d.v[a].all_cards,(0,$.jsx)("input",{id:"all",hidden:!0,name:"filter",type:"radio",checked:"all"===s,onChange:c})]})]})};var oe=l(9142);const re=e=>{let{data:t,title:l,checkedRadio:p}=e;const h=(0,r.wA)(),x=(0,P.S)(),{locale:m}=(0,r.d4)(C.mB),g=(0,o.useRef)(null),v=(0,o.useRef)(null),{pathname:f}=(0,s.zy)(),j=Q(),[b,_]=(0,o.useState)(),[k,y]=(0,o.useState)(null),[A,N]=(0,o.useState)(),[B,M]=(0,o.useState)(),[O,E]=(0,o.useState)(!1),{isModalOpen:I,openModal:R,closeModal:F}=(0,i.h)(),{isModalOpen:L,openModal:z,closeModal:T}=(0,i.h)(),{isModalOpen:U,openModal:K,closeModal:W}=(0,i.h)(),{isModalOpen:X,closeModal:D,toggleModal:H}=(0,i.h)();(0,oe.w)([g,v],D,"selectFilter");const Y="en-UK"===m?"en":"de-DE"===m?"de":"ua",{isLoading:Z,operation:ee}=(0,a.k)(f,A),te=(e=>{if(0===e.length)return-1;{const t=e.flatMap(e=>e.index);return Math.max.apply(null,t)}})(t)+1;(0,o.useEffect)(()=>{O&&(E(!1),K())},[O,K]),(0,o.useEffect)(()=>{y(d.v[m].only_active_cards),h((0,ie.V)("active")),_(t.filter(e=>!1===e.archived))},[h,t,m]);const le=()=>{H()};return(0,$.jsxs)($.Fragment,{children:[Z&&(0,$.jsx)(n.a,{}),(0,$.jsx)(J.HX,{children:l}),(0,$.jsxs)(J.Fr,{onClick:le,type:"button",ref:v,children:[(0,$.jsx)(w.A,{w:16,h:16,icon:"filter"}),(0,$.jsx)("span",{children:k}),(0,$.jsx)(J.In,{w:12,h:12,icon:"arrow",rotate:X?"180deg":0})]}),(0,$.jsx)(ae,{className:X?null:"visually-hidden",onChange:e=>{"active"===e&&(y(d.v[m].only_active_cards),_(t.filter(e=>!1===e.archived))),"archive"===e&&(y(d.v[m].only_archived_cards),_(t.filter(e=>!0===e.archived))),"all"===e&&(y(d.v[m].all_cards),_(t))},onToggle:le,local:m,checkedRadio:p,forwardedRef:g}),(0,$.jsxs)(J.mN,{to:c.Qy,state:{props:{pathname:f,index:te}},children:[(0,$.jsx)(w.A,{w:x>413?16:12,h:x>413?16:12,icon:"add"}),(0,$.jsx)("span",{children:d.v[m].add_new_product})]}),(null===b||void 0===b?void 0:b.length)>0&&(0,$.jsx)(J.KR,{children:null===b||void 0===b?void 0:b.map((e,t)=>(0,$.jsxs)(J.vx,{children:[(0,$.jsx)(J.ZB,{children:e[Y].title}),(0,$.jsx)(J.dJ,{color:G[t],className:e.archived?"archived":null,children:(0,$.jsx)(J.Xq,{width:120,src:`${c.q9}w_240,c_fill/${e.imgURL}`,alt:e[Y].title})}),(0,$.jsxs)(J.Mm,{children:[(0,$.jsx)(J.hB,{to:`${c.nX}/${e._id}`,state:{props:{pathname:f,index:te}},children:(0,$.jsx)(w.A,{w:24,h:24,icon:"edit"})}),(0,$.jsx)(u.rA,{onClick:()=>(e=>{N(c.L4),M(e),R()})({id:e._id,archived:e.archived}),children:(0,$.jsx)(w.A,{w:24,h:24,icon:e.archived?"unarchive":"archive"})}),(0,$.jsx)(u.rA,{onClick:()=>(e=>{N(c.WM),M(e),z()})({id:e._id}),children:(0,$.jsx)(w.A,{w:24,h:24,icon:"delete"})})]})]},e._id))}),I&&(0,$.jsx)(S.a,{onClose:F,children:(0,$.jsx)(V,{action:e=>{let{id:t,archived:l}=e;h((0,ie.V)("active")),h(ee({id:t,data:{archived:!l}})),E(!0)},onCloseModal:F,data:B,names:{cancel:d.v[m].cancel,action:B.archived?d.v[m].restore:d.v[m].archive}})}),L&&(0,$.jsx)(S.a,{onClose:T,children:(0,$.jsx)(V,{action:e=>{let{id:t}=e;h((0,ie.V)("active")),h(ee(t)),E(!0)},onCloseModal:T,data:B,names:{cancel:d.v[m].cancel,action:d.v[m].delete}})}),U&&!Z&&!j[f]&&(0,$.jsx)(S.a,{onClose:W,children:(0,$.jsx)(q.W,{type:"fulfilled",onClose:W,text:d.v[m].success_update})}),U&&!Z&&j[f]&&(0,$.jsx)(S.a,{onClose:W,children:(0,$.jsx)(q.W,{type:"rejected",onClose:W,text:j[f].message})})]})},se=()=>{const{isLoggedIn:e}=(0,Y.A)(),t=(0,r.wA)(),{pathname:l}=(0,s.zy)(),{locale:n}=(0,r.d4)(C.mB),i=(0,z.L)(l,n),{collection:d,operation:p}=(0,a.k)(l,c.ZO);return(0,o.useEffect)(()=>{e&&p&&(t((0,ie.V)(c.Hc)),t(p()))},[t,e,p]),(0,$.jsx)(u.Eh,{children:(0,$.jsx)(u.mc,{children:l===c.Qy||`/${l.split("/")[1]}`===c.nX?(0,$.jsx)(Z,{dataId:l===c.Qy?"add-form":"edit-form"}):d&&(0,$.jsx)(re,{data:d,title:i})})})}}}]);
//# sourceMappingURL=539.3909776f.chunk.js.map