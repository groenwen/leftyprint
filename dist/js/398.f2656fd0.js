"use strict";(self["webpackChunkleftyprint"]=self["webpackChunkleftyprint"]||[]).push([[398],{9398:function(t,r,i){i.r(r),i.d(r,{default:function(){return b}});var e=i(6252),s=i(3577),c=i(9963);const o=(0,e._)("hr",null,null,-1),n={class:"mb-3"},u=(0,e._)("p",null,"尺寸 (size)",-1),d=["onClick"],l={class:"mb-3"},h=(0,e._)("p",null,"單/雙面 (side)",-1),a=["onClick"],p={class:"table"},P=(0,e._)("thead",null,[(0,e._)("tr",null,[(0,e._)("th",null,"size"),(0,e._)("th",null,"side"),(0,e._)("th",null,"材質"),(0,e._)("th",null,"數量"),(0,e._)("th",null,"origin_price"),(0,e._)("th",null,"Price"),(0,e._)("th",null,"ID")])],-1),g=["onClick"];function _(t,r,i,_,w,z){return(0,e.wg)(),(0,e.iD)("div",null,[(0,e._)("p",null,(0,s.zw)(w.currProduct.title),1),(0,e.Uk)(" "+(0,s.zw)(w.currProduct.description)+" ",1),o,(0,e._)("div",n,[u,((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(w.sizeList,((t,r)=>((0,e.wg)(),(0,e.iD)("a",{href:"#",onClick:(0,c.iM)((r=>z.getProduct("size",t)),["prevent"]),key:`size${r}`,class:(0,s.C_)(["btn btn-sm rounded-pill me-2",[this.currSize===t?"btn-secondary":"btn-outline-secondary"]])},(0,s.zw)(t),11,d)))),128))]),(0,e._)("div",l,[h,((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(w.sideList,((t,r)=>((0,e.wg)(),(0,e.iD)("a",{href:"#",onClick:(0,c.iM)((r=>z.getProduct("side",t)),["prevent"]),key:`side${r}`,class:(0,s.C_)(["btn btn-sm rounded-pill me-2",[this.currProduct.content.side===t?"btn-secondary":"btn-outline-secondary"]])},(0,s.zw)(t),11,a)))),128))]),(0,e._)("table",p,[P,(0,e._)("tbody",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(w.sortProducts,(t=>((0,e.wg)(),(0,e.iD)("tr",{key:t.id,class:(0,s.C_)({"bg-light":this.currProduct.id===t.id})},[(0,e._)("th",null,(0,s.zw)(t.content.width)+"x"+(0,s.zw)(t.content.height),1),(0,e._)("td",null,(0,s.zw)(t.content.side),1),(0,e._)("td",null,(0,s.zw)(t.content.material),1),(0,e._)("td",null,(0,s.zw)(t.content.qty),1),(0,e._)("td",null,"$ "+(0,s.zw)(t.origin_price),1),(0,e._)("td",null,[(0,e._)("a",{href:"#",onClick:(0,c.iM)((r=>z.getProduct("all",t)),["prevent"])},"$ "+(0,s.zw)(t.price),9,g)]),(0,e._)("td",null,(0,s.zw)(t.id),1)],2)))),128))])]),(0,e._)("p",null,"NT$ "+(0,s.zw)(w.currProduct.price),1),(0,e._)("a",{href:"#",class:"btn btn-secondary",onClick:r[0]||(r[0]=(0,c.iM)((t=>z.addToCart()),["prevent"]))},"Add to cart")])}var w={data(){return{text:"123",currProduct:{},currProducts:[],sortProducts:[],currSize:"",sizeList:[],sideList:[],material:[]}},methods:{getProduct(t,r){const i="https://vue3-course-api.hexschool.io/v2/api/groen/products/all";this.$http.get(i).then((i=>{const e=i.data.products;if(this.currProducts=e.filter((t=>t.title===this.currProduct.title)),this.showSizeSide(),"size"===t){const t=r.split("x");this.currProduct.content.width=Number(t[0]),this.currProduct.content.height=Number(t[1]),this.currSize=`${t[0]}x${t[1]}`,console.log(this.currProduct)}else"side"===t?this.currProduct.content.side=r:"all"===t&&(this.currProduct={...r},console.log(this.currProduct));this.sortProduct(t)})).catch((t=>{console.log(t)}))},showSizeSide(){const t=[],r=[];this.currProducts.forEach((i=>{const e=`${i.content.width}x${i.content.height}`;t.push(e),r.push(i.content.side)})),this.sizeList=t.filter(((r,i)=>t.indexOf(r)===i)),this.sideList=r.filter(((t,i)=>r.indexOf(t)===i)),console.log(this.sideList)},sortProduct(t){if("all"===t){const t=this.currProducts.find((t=>{const r=t.content,i=this.currProduct.content;return r.width===i.width&&r.height===i.height&&r.side===i.side&&r.material===i.material&&r.qty===i.qty}));this.currProduct={...t}}else this.sortProducts=this.currProducts.filter((t=>{const r=t.content,i=this.currProduct.content;return r.width===i.width&&r.height===i.height&&r.side===i.side})),this.sortProducts.sort(((t,r)=>t.content.qty-r.content.qty)),this.currProduct={...this.sortProducts[0]};this.$router.push(`/product/${this.currProduct.id}`)},addToCart(){const t="https://vue3-course-api.hexschool.io/v2/api/groen/cart";this.$http.post(t,{data:{product_id:this.currProduct.id,qty:1}}).then((t=>{alert(t.data.message)})).catch((t=>{console.log(t.response.data.message)}))}},mounted(){const{id:t}=this.$route.params,r=`https://vue3-course-api.hexschool.io/v2/api/groen/product/${t}`;this.$http.get(r).then((t=>{this.currProduct=t.data.product,this.currSize=`${this.currProduct.content.width}x${this.currProduct.content.height}`,this.getProduct()})).catch((t=>{console.log(t)}))}},z=i(3744);const f=(0,z.Z)(w,[["render",_]]);var b=f}}]);
//# sourceMappingURL=398.f2656fd0.js.map