"use strict";(self["webpackChunkleftyprint"]=self["webpackChunkleftyprint"]||[]).push([[75],{4751:function(e,t,s){function a(e){return{all:e=e||new Map,on:function(t,s){var a=e.get(t);a?a.push(s):e.set(t,[s])},off:function(t,s){var a=e.get(t);a&&(s?a.splice(a.indexOf(s)>>>0,1):e.set(t,[]))},emit:function(t,s){var a=e.get(t);a&&a.slice().map((function(e){e(s)})),(a=e.get("*"))&&a.slice().map((function(e){e(t,s)}))}}}s.d(t,{Z:function(){return i}});const l=a();var i=l},9802:function(e,t,s){s.d(t,{Z:function(){return d}});var a=s(6252);function l(e,t,s,l,i,o){return(0,a.wg)(),(0,a.iD)("div")}var i=s(4751),o={data(){return{data:{position:"top",toast:!0,icon:"success",title:"",showConfirmButton:!1,timer:1500}}},methods:{showAlert(e){this.$swal(e)}},mounted(){i.Z.on("sweetalert",(e=>{const t=e.split(", ");this.data.title=t[0],this.data.icon=t[1],this.$swal.fire(this.data)}))},unmounted(){i.Z.off("sweetalert")}},r=s(3744);const n=(0,r.Z)(o,[["render",l]]);var d=n},7075:function(e,t,s){s.r(t),s.d(t,{default:function(){return me}});var a=s(6252),l=s(3577),i=s(9963);const o={class:"container mt-5"},r=(0,a._)("h1",{class:"fs-3 text-dark text-center"},[(0,a._)("span",{class:"align-middle"},"購物車")],-1),n={class:"row"},d={class:"col-8"},c={class:"mb-3 border"},u={class:"px-4 py-2 bg-gray-100 fw-bold d-flex justify-content-between border-bottom"},m=(0,a._)("span",{class:"text-primary"},"項目",-1),f=["disabled"],p={key:0,class:"p-4 text-secondary"},h={key:1},g={key:0,style:{height:"100px"}},_={key:1},v=["src"],b=(0,a.Uk)("  "),w=["src"],y={class:"fw-bold mb-2"},$=(0,a._)("br",null,null,-1),k={class:"text-secondary fs-7"},x=(0,a._)("br",null,null,-1),C=["onClick"],V=(0,a._)("span",{class:"material-symbols-outlined align-middle"},"delete",-1),Z=[V],L={class:"px-4 py-3 border-top"},U={class:"row justify-content-end"},P=(0,a._)("label",{for:"code",class:"col-auto form-label"},[(0,a._)("span",{class:"material-symbols-outlined me-2 fs-4 lh-1 align-top"},"confirmation_number"),(0,a.Uk)("折扣碼 ")],-1),W={class:"col-auto"},z={class:"col-auto"},A={class:"border"},E=(0,a._)("div",{class:"px-4 py-2 text-primary fw-bold bg-gray-100"}," 收件人 ",-1),D={class:"py-4 row justify-content-center"},j={class:"col-6"},q={class:"mb-2"},S=(0,a._)("label",{for:"name",class:"form-label fs-7"},"姓名",-1),M={class:"mb-2"},H=(0,a._)("label",{for:"email",class:"form-label fs-7"},"Email",-1),Y={class:"mb-2"},B=(0,a._)("label",{for:"tel",class:"form-label fs-7"},"電話",-1),F={class:"mb-2"},K=(0,a._)("label",{for:"address",class:"form-label fs-7"},"地址",-1),O={class:"mb-2"},X=(0,a._)("label",{for:"message",class:"form-label fs-7"},"訂單備註",-1),G={class:"col"},I={class:"border bg-gray-100 sticky-top"},J=(0,a._)("div",{class:"p-2 text-center bg-gray-200"}," 訂單摘要 ",-1),N={class:"p-3"},Q={class:"d-flex justify-content-between"},R=(0,a._)("div",null,"商品總計",-1),T=(0,a._)("div",{class:"d-flex justify-content-between"},[(0,a._)("div",null,"運費總計"),(0,a._)("div",null,"免運費")],-1),ee={class:"p-3 d-flex justify-content-between"},te=(0,a._)("div",null,"結帳總金額",-1),se={class:"fw-bolder text-danger"},ae=(0,a.Uk)("$ "),le={class:"fs-5"},ie=(0,a._)("div",{class:"d-grid p-3"},[(0,a._)("button",{type:"submit",class:"btn btn-primary"},"結帳")],-1);function oe(e,t,s,V,oe,re){const ne=(0,a.up)("v-loading"),de=(0,a.up)("SweetAlert"),ce=(0,a.up)("v-field"),ue=(0,a.up)("error-message"),me=(0,a.up)("v-form");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(ne,{active:oe.isLoading},null,8,["active"]),(0,a.Wm)(de),(0,a._)("div",o,[r,(0,a.Wm)(me,{ref:"form",onSubmit:re.onSubmit},{default:(0,a.w5)((({errors:e})=>[(0,a._)("div",n,[(0,a._)("div",d,[(0,a._)("div",c,[(0,a._)("div",u,[m,(0,a._)("button",{class:"btn btn-sm btn-outline-secondary",onClick:t[0]||(t[0]=e=>re.clearCarts()),disabled:oe.carts.length<=0},"清除購物車",8,f)]),(0,a._)("div",null,[oe.carts.length<=0?((0,a.wg)(),(0,a.iD)("p",p,"購物車尚無內容")):((0,a.wg)(),(0,a.iD)("div",h,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(oe.carts,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id,class:"p-4 d-flex justify-content-between align-items-center"},[(0,a._)("div",null,[void 0===e.files?((0,a.wg)(),(0,a.iD)("div",g,"   ")):((0,a.wg)(),(0,a.iD)("div",_,[(0,a._)("img",{src:e.files[0].front,class:"border",height:"100",alt:""},null,8,v),b,(0,a._)("img",{src:e.files[0].back,class:"border",height:"100",alt:""},null,8,w)]))]),(0,a._)("div",null,[(0,a._)("span",y,(0,l.zw)(e.product.title),1),$,(0,a._)("span",k,[(0,a.Uk)((0,l.zw)(e.product.width)+" mm X "+(0,l.zw)(e.product.height)+" mm ",1),x,(0,a.Uk)(" "+(0,l.zw)(e.product.side)+" ／ "+(0,l.zw)(e.product.material)+" ／ "+(0,l.zw)(e.product.p_qty)+" "+(0,l.zw)(e.product.unit),1)])]),(0,a._)("div",null,"$ "+(0,l.zw)(e.product.price),1),(0,a._)("div",null,[(0,a._)("a",{href:"#",class:"btn btn-sm btn-link",onClick:(0,i.iM)((t=>re.delCart(e,e.files[0].id)),["prevent"])},Z,8,C)])])))),128))]))]),(0,a._)("div",L,[(0,a._)("div",U,[P,(0,a._)("div",W,[(0,a.wy)((0,a._)("input",{name:"code",id:"code",type:"text",class:"form-control form-control-sm","onUpdate:modelValue":t[1]||(t[1]=e=>oe.code=e),placeholder:"輸入折扣碼"},null,512),[[i.nr,oe.code]])]),(0,a._)("div",z,[(0,a._)("button",{onClick:t[2]||(t[2]=(...e)=>re.useCoupon&&re.useCoupon(...e)),class:"btn btn-sm btn-secondary"},"使用")])])])]),(0,a._)("div",A,[E,(0,a._)("div",D,[(0,a._)("div",j,[(0,a._)("div",q,[S,(0,a.Wm)(ce,{name:"姓名",id:"name",type:"text",rules:"required",class:(0,l.C_)(["form-control",{"is-invalid":e["姓名"]}]),modelValue:oe.order.user.name,"onUpdate:modelValue":t[3]||(t[3]=e=>oe.order.user.name=e),placeholder:"填入姓名"},null,8,["class","modelValue"]),(0,a.Wm)(ue,{name:"姓名",class:"invalid-feedback"})]),(0,a._)("div",M,[H,(0,a.Wm)(ce,{name:"email",id:"email",type:"email",rules:"required|email",class:(0,l.C_)(["form-control",{"is-invalid":e["email"]}]),modelValue:oe.order.user.email,"onUpdate:modelValue":t[4]||(t[4]=e=>oe.order.user.email=e),placeholder:"填入 Email"},null,8,["class","modelValue"]),(0,a.Wm)(ue,{name:"email",class:"invalid-feedback"})]),(0,a._)("div",Y,[B,(0,a.Wm)(ce,{name:"電話",id:"tel",type:"tel",rules:"required|numeric|min:7|max:10",class:(0,l.C_)(["form-control",{"is-invalid":e["電話"]}]),modelValue:oe.order.user.tel,"onUpdate:modelValue":t[5]||(t[5]=e=>oe.order.user.tel=e)},null,8,["class","modelValue"]),(0,a.Wm)(ue,{name:"電話",class:"invalid-feedback"})]),(0,a._)("div",F,[K,(0,a.Wm)(ce,{name:"地址",id:"address",type:"text",rules:"required",class:(0,l.C_)(["form-control",{"is-invalid":e["地址"]}]),modelValue:oe.order.user.address,"onUpdate:modelValue":t[6]||(t[6]=e=>oe.order.user.address=e)},null,8,["class","modelValue"]),(0,a.Wm)(ue,{name:"地址",class:"invalid-feedback"})]),(0,a._)("div",O,[X,(0,a.Wm)(ce,{as:"textarea",name:"message",id:"message",class:"form-control",rows:"3",modelValue:oe.order.message,"onUpdate:modelValue":t[7]||(t[7]=e=>oe.order.message=e)},null,8,["modelValue"])])])])])]),(0,a._)("div",G,[(0,a._)("div",I,[J,(0,a._)("div",N,[(0,a._)("div",Q,[R,(0,a._)("div",null,"$ "+(0,l.zw)(oe.total),1)]),T]),(0,a._)("div",ee,[te,(0,a._)("div",se,[ae,(0,a._)("span",le,(0,l.zw)(Math.round(oe.final_total)),1)])]),ie])])])])),_:1},8,["onSubmit"])])],64)}var re=s(4751),ne=s(9802),de={data(){return{VUE_APP:"https://vue3-course-api.hexschool.io/v2/api/groen",isLoading:!1,total:0,final_total:0,carts:[],order:{user:{name:"",email:"",tel:"",address:""},message:""},code:""}},components:{SweetAlert:ne.Z},methods:{getCarts(){this.isLoading=!0;const e=`${this.VUE_APP}/cart`;this.$http.get(e).then((e=>{console.log(e.data.data),this.isLoading=!1,this.total=e.data.data.total,this.final_total=e.data.data.final_total;const t=e.data.data.carts,s=[];t.forEach((e=>{if(void 0===e.files||e.files.length<=1)s.push(e);else{const t=e.files.length;for(let a=0;a<t;a++){const t={...e};t.files=[e.files[a]],t.files[0].id=a+1,s.push(t)}}})),this.carts=s,re.Z.emit("cartCount")})).catch((e=>{this.isLoading=!1,re.Z.emit("sweetalert",`${e.response.data.message}, error`)}))},clearCarts(){this.isLoading=!0;const e=`${this.VUE_APP}/carts`;this.$http.delete(e).then((e=>{this.isLoading=!1,re.Z.emit("sweetalert",`${e.data.message}, success`),this.getCarts()})).catch((e=>{this.isLoading=!1,re.Z.emit("sweetalert",`${e.response.data.message}, error`)}))},delCart(e,t){this.isLoading=!0;const s=`${this.VUE_APP}/cart`;this.$http.get(s).then((s=>{const a=s.data.data.carts,l=a.find((t=>t.product_id===e.product_id));if(void 0===l.files||l.files.length<=1){const t=`https://vue3-course-api.hexschool.io/v2/api/groen/cart/${e.id}`;this.$http.delete(t).then((e=>{this.isLoading=!1,re.Z.emit("sweetalert",`${e.data.message}, success`),this.getCarts()})).catch((e=>{this.isLoading=!1,re.Z.emit("sweetalert",`${e.response.data.message}, error`)}))}else{l.files.splice(t-1,1);const s=`https://vue3-course-api.hexschool.io/v2/api/groen/cart/${e.id}`;this.$http.put(s,{data:{product_id:l.id,qty:1,files:l.files}}).then((e=>{this.isLoading=!1,re.Z.emit("sweetalert",`${e.data.message}, success`),this.getCarts()})).catch((e=>{this.isLoading=!1,re.Z.emit("sweetalert",`${e.response.data.message}, error`)}))}})).catch((e=>{this.isLoading=!1,re.Z.emit("sweetalert",`${e.response.data.message}, error`)}))},useCoupon(){const e=`${this.VUE_APP}/coupon`;this.$http.post(e,{data:{code:this.code}}).then((e=>{this.final_total=e.data.data.final_total})).catch((e=>{re.Z.emit("sweetalert",`${e.response.data.message}, error`)}))},onSubmit(){this.isLoading=!0;const e=`${this.VUE_APP}/order`;this.$http.post(e,{data:{...this.order}}).then((e=>{this.isLoading=!1,re.Z.emit("sweetalert",`${e.data.message}, success`),this.getCarts(),this.$refs.form.resetForm()})).catch((e=>{this.isLoading=!1,re.Z.emit("sweetalert",`${e.response.data.message}, error`)}))}},mounted(){this.getCarts()}},ce=s(3744);const ue=(0,ce.Z)(de,[["render",oe]]);var me=ue}}]);
//# sourceMappingURL=75.609e01fa.js.map