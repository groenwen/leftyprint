(self["webpackChunkleftyprint"]=self["webpackChunkleftyprint"]||[]).push([[293],{3863:function(t,e,s){
/*!
  * Bootstrap collapse.js v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,n){t.exports=n(s(4072),s(9286),s(8737),s(5695))})(0,(function(t,e,s,n){"use strict";const i=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},a=i(e),l=i(s),r=i(n),o="collapse",c="bs.collapse",d=`.${c}`,g=".data-api",u=`show${d}`,h=`shown${d}`,f=`hide${d}`,m=`hidden${d}`,_=`click${d}${g}`,p="show",v="collapse",b="collapsing",w="collapsed",y=`:scope .${v} .${v}`,k="collapse-horizontal",C="width",A="height",x=".collapse.show, .collapse.collapsing",L='[data-bs-toggle="collapse"]',$={parent:null,toggle:!0},T={parent:"(null|element)",toggle:"boolean"};class S extends r.default{constructor(e,s){super(e,s),this._isTransitioning=!1,this._triggerArray=[];const n=l.default.find(L);for(const i of n){const e=t.getSelectorFromElement(i),s=l.default.find(e).filter((t=>t===this._element));null!==e&&s.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return $}static get DefaultType(){return T}static get NAME(){return o}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(x).filter((t=>t!==this._element)).map((t=>S.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;const e=a.default.trigger(this._element,u);if(e.defaultPrevented)return;for(const a of t)a.hide();const s=this._getDimension();this._element.classList.remove(v),this._element.classList.add(b),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(b),this._element.classList.add(v,p),this._element.style[s]="",a.default.trigger(this._element,h)},i=s[0].toUpperCase()+s.slice(1),l=`scroll${i}`;this._queueCallback(n,this._element,!0),this._element.style[s]=`${this._element[l]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const e=a.default.trigger(this._element,f);if(e.defaultPrevented)return;const s=this._getDimension();this._element.style[s]=`${this._element.getBoundingClientRect()[s]}px`,t.reflow(this._element),this._element.classList.add(b),this._element.classList.remove(v,p);for(const i of this._triggerArray){const e=t.getElementFromSelector(i);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(b),this._element.classList.add(v),a.default.trigger(this._element,m)};this._element.style[s]="",this._queueCallback(n,this._element,!0)}_isShown(t=this._element){return t.classList.contains(p)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=t.getElement(e.parent),e}_getDimension(){return this._element.classList.contains(k)?C:A}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(L);for(const s of e){const e=t.getElementFromSelector(s);e&&this._addAriaAndCollapsedClass([s],this._isShown(e))}}_getFirstLevelChildren(t){const e=l.default.find(y,this._config.parent);return l.default.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const s of t)s.classList.toggle(w,!e),s.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"===typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const s=S.getOrCreateInstance(this,e);if("string"===typeof t){if("undefined"===typeof s[t])throw new TypeError(`No method named "${t}"`);s[t]()}}))}}return a.default.on(document,_,L,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const s=t.getSelectorFromElement(this),n=l.default.find(s);for(const t of n)S.getOrCreateInstance(t,{toggle:!1}).toggle()})),t.defineJQueryPlugin(S),S}))},4751:function(t,e,s){"use strict";function n(t){return{all:t=t||new Map,on:function(e,s){var n=t.get(e);n?n.push(s):t.set(e,[s])},off:function(e,s){var n=t.get(e);n&&(s?n.splice(n.indexOf(s)>>>0,1):t.set(e,[]))},emit:function(e,s){var n=t.get(e);n&&n.slice().map((function(t){t(s)})),(n=t.get("*"))&&n.slice().map((function(t){t(e,s)}))}}}s.d(e,{Z:function(){return a}});const i=n();var a=i},7753:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return I}});var n=s(6252);function i(t,e,s,i,a,l){const r=(0,n.up)("headerView"),o=(0,n.up)("router-view"),c=(0,n.up)("footerView");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(r),(0,n.Wm)(o),(0,n.Wm)(c)],64)}var a=s(3577),l=s.p+"img/logo.01788fa6.svg";const r={class:"navbar navbar-expand-md navbar-light bg-white"},o={class:"container"},c=(0,n._)("img",{src:l,height:"28",alt:""},null,-1),d=(0,n._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{class:"navbar-toggler-icon"})],-1),g={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},u={class:"navbar-nav ms-auto"},h=(0,n.Uk)("關於 Print"),f=(0,n.Uk)("所有產品"),m=(0,n._)("span",{class:"material-symbols-outlined"},"shopping_cart",-1),_={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},p=(0,n._)("span",{class:"visually-hidden"},"unread messages",-1);function v(t,e,s,i,l,v){const b=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("nav",r,[(0,n._)("div",o,[(0,n.Wm)(b,{to:"/",class:"navbar-brand"},{default:(0,n.w5)((()=>[c])),_:1}),d,(0,n._)("div",g,[(0,n._)("div",u,[(0,n.Wm)(b,{to:"/about",class:"nav-link"},{default:(0,n.w5)((()=>[h])),_:1}),(0,n.Wm)(b,{to:"/products",class:"nav-link"},{default:(0,n.w5)((()=>[f])),_:1}),(0,n.Wm)(b,{to:"/carts",class:"nav-link position-relative pe-1"},{default:(0,n.w5)((()=>[m,(0,n._)("span",_,[(0,n.Uk)((0,a.zw)(l.carts?.length)+" ",1),p])])),_:1})])])])])])}s(3863);var b=s(4751),w={data(){return{carts:[]}},methods:{getCarts(){const t="https://vue3-course-api.hexschool.io/v2/api/groen/cart";this.$http.get(t).then((t=>{const e=t.data.data.carts,s=[];e.forEach((t=>{if(void 0===t.files||t.files.length<=1)s.push(t);else{const e=t.files.length;for(let n=0;n<e;n++){const e={...t};e.files=[t.files[n]],e.files[0].id=n+1,s.push(e)}}})),this.carts=s})).catch((t=>{alert(t.response.data.message)}))}},mounted(){b.Z.on("cartCount",(()=>{this.getCarts()}))}},y=s(3744);const k=(0,y.Z)(w,[["render",v]]);var C=k,A=s.p+"img/logo_dark.b02c38db.svg";const x={class:"mt-7 bg-gray-200 p-5"},L={class:"container"},$={class:"d-flex flex-lg-row flex-column justify-content-between"},T={class:"d-flex flex-md-row flex-column justify-content-md-center align-items-md-center align-items-start"},S=(0,n._)("img",{class:"me-7 mb-md-0 mb-3",src:A,height:"28",alt:""},null,-1),U=(0,n.Uk)("關於 Print"),W=(0,n.Uk)("所有產品"),D=(0,n._)("ul",{class:"list-unstyled"},[(0,n._)("li",null,[(0,n._)("span",{class:"material-symbols-outlined align-middle fs-6 me-2"},"headset_mic"),(0,n.Uk)("( 02 ) 2222 - 2222 ")]),(0,n._)("li",null,[(0,n._)("span",{class:"material-symbols-outlined align-middle fs-6 me-2"},"drafts"),(0,n.Uk)("yuwen7005@gmail.com ")])],-1),E=(0,n.Uk)("管理員登入"),F=(0,n._)("div",{class:"bg-dark p-3"},[(0,n._)("p",{class:"text-center text-white fs-7"},[(0,n.Uk)("Copyright © Print 2022 | "),(0,n._)("span",{class:"d-md-inline d-block"},"僅個人作品，無商業用途")])],-1);function N(t,e){const s=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",x,[(0,n._)("div",L,[(0,n._)("div",$,[(0,n._)("div",T,[S,(0,n.Wm)(s,{to:"/about",class:"me-5 text-dark"},{default:(0,n.w5)((()=>[U])),_:1}),(0,n.Wm)(s,{to:"/products",class:"me-5 text-dark"},{default:(0,n.w5)((()=>[W])),_:1}),D]),(0,n.Wm)(s,{to:"/admin",class:"btn btn-sm btn-outline-secondary align-self-end"},{default:(0,n.w5)((()=>[E])),_:1})])])]),F],64)}const M={},P=(0,y.Z)(M,[["render",N]]);var Z=P,j={data(){return{}},components:{headerView:C,footerView:Z},mounted(){}};const z=(0,y.Z)(j,[["render",i]]);var I=z}}]);
//# sourceMappingURL=293.87495940.js.map