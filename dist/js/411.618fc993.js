"use strict";(self["webpackChunkleftyprint"]=self["webpackChunkleftyprint"]||[]).push([[411],{4751:function(A,t,s){function e(A){return{all:A=A||new Map,on:function(t,s){var e=A.get(t);e?e.push(s):A.set(t,[s])},off:function(t,s){var e=A.get(t);e&&(s?e.splice(e.indexOf(s)>>>0,1):A.set(t,[]))},emit:function(t,s){var e=A.get(t);e&&e.slice().map((function(A){A(s)})),(e=A.get("*"))&&e.slice().map((function(A){A(t,s)}))}}}s.d(t,{Z:function(){return a}});const i=e();var a=i},9802:function(A,t,s){s.d(t,{Z:function(){return r}});var e=s(6252);function i(A,t,s,i,a,n){return(0,e.wg)(),(0,e.iD)("div")}var a=s(4751),n={data(){return{data:{position:"top",toast:!0,icon:"success",title:"",showConfirmButton:!1,timer:1500}}},methods:{showAlert(A){this.$swal(A)}},mounted(){a.Z.on("sweetalert",(A=>{const t=A.split(", ");this.data.title=t[0],this.data.icon=t[1],this.$swal.fire(this.data)}))},unmounted(){a.Z.off("sweetalert")}},l=s(3744);const o=(0,l.Z)(n,[["render",i]]);var r=o},5411:function(A,t,s){s.r(t),s.d(t,{default:function(){return _}});var e=s(6252),i=s(3577),a=s(8019),n=s(3109);const l={class:"container mt-5"},o=(0,e.uE)('<div class="d-flex justify-content-between align-items-center mb-5 border-bottom"><h1 class="fs-3 text-dark"><img src="'+a+'" class="me-3" height="55" alt=""><span class="align-middle">所有產品</span></h1><div><span class="me-3 text-primary small">FREE SHIPPING</span><span class="material-symbols-outlined text-primary fs-1 align-middle me-3">local_shipping</span></div></div>',1),r={class:"row g-4"},c={class:"card bg-light p-4 mb-4"},d=(0,e._)("img",{src:n,alt:""},null,-1),u=[d],p={class:"card-body"},g={class:"card-title fw-light"},h={class:"card-text text-secondary"},m={class:"text-end"},f=(0,e.Uk)("查看產品");function v(A,t,s,a,n,d){const v=(0,e.up)("v-loading"),w=(0,e.up)("SweetAlert"),x=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(v,{active:n.isLoading},null,8,["active"]),(0,e.Wm)(w),(0,e._)("div",l,[o,(0,e._)("div",r,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(n.pords,(A=>((0,e.wg)(),(0,e.iD)("div",{class:"col-12 col-md-6 col-xl-4",key:A.id},[(0,e._)("div",c,[(0,e._)("div",{class:"card-img bg-cover",style:(0,i.j5)({backgroundImage:`url(${A.imageUrl})`})},u,4),(0,e._)("div",p,[(0,e._)("h5",g,(0,i.zw)(A.title),1),(0,e._)("p",h,(0,i.zw)(A.content),1),(0,e._)("div",m,[(0,e.Wm)(x,{to:`/product/${A.id}`,class:"card-link btn btn-sm btn-outline-secondary stretched-link"},{default:(0,e.w5)((()=>[f])),_:2},1032,["to"])])])])])))),128))])])],64)}var w=s(4751),x=s(9802),b={data(){return{VUE_APP:"https://vue3-course-api.hexschool.io/v2/api/groen",isLoading:!1,allProds:[],pords:[]}},components:{SweetAlert:x.Z},methods:{getProds(){this.isLoading=!0;const A=`${this.VUE_APP}/products/all`;this.$http.get(A).then((A=>{this.isLoading=!1,this.allProds=A.data.products;let t=this.allProds.map((A=>A.title));t=t.filter(((A,s)=>t.indexOf(A)===s));const s=this.allProds.map(((A,t)=>({index:t,value:A}))),e=["width","height","side","qty"];e.forEach((A=>{s.sort(((t,s)=>t.value[A]>s.value[A]?1:t.value[A]<s.value[A]?-1:0))})),this.allProds=s.map((A=>this.allProds[A.index])),t.forEach(((A,t)=>{const s=this.allProds.find((t=>A===t.title));this.pords.push(s)}))})).catch((A=>{w.Z.emit("sweetalert",`${A.response.data.message}, error`)}))}},mounted(){this.getProds()}},P=s(3744);const E=(0,P.Z)(b,[["render",v]]);var _=E},8019:function(A,t,s){A.exports=s.p+"img/people01.1052021f.svg"},3109:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXAAAAEiCAYAAADgX4nDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG1SURBVHgB7cABDQAAAMKg909tDjcoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgzwCE/AABN7xNfAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=411.618fc993.js.map