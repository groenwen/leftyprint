"use strict";(self["webpackChunkleftyprint"]=self["webpackChunkleftyprint"]||[]).push([[164],{7164:function(t,l,n){n.r(l),n.d(l,{default:function(){return w}});var u=n(6252),d=n(3577);const e={class:"table"},a=(0,u._)("thead",null,[(0,u._)("tr",null,[(0,u._)("td",null,"Category"),(0,u._)("td",null,"Title"),(0,u._)("td",null,"單/雙面"),(0,u._)("td",null,"尺寸"),(0,u._)("td",null,"材質"),(0,u._)("td",null,"張數"),(0,u._)("td",null,"單價"),(0,u._)("td",null,"總數"),(0,u._)("td",null,"特價")])],-1),r={class:"badge text-bg-secondary"},c=(0,u._)("br",null,null,-1),o={class:"small text-secondary"};function s(t,l,n,s,i,_){return(0,u.wg)(),(0,u.iD)("div",null,[(0,u._)("table",e,[a,(0,u._)("tbody",null,[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(i.carts,(t=>((0,u.wg)(),(0,u.iD)("tr",{key:t.id},[(0,u._)("td",null,[(0,u._)("span",r,(0,d.zw)(t.product.category),1)]),(0,u._)("td",null,[(0,u.Uk)((0,d.zw)(t.product.title)+" ",1),c,(0,u._)("span",o,(0,d.zw)(t.product.id),1)]),(0,u._)("td",null,(0,d.zw)(t.product.content.side),1),(0,u._)("td",null,(0,d.zw)(t.product.content.width)+" mm X "+(0,d.zw)(t.product.content.height)+" mm",1),(0,u._)("td",null,(0,d.zw)(t.product.content.material),1),(0,u._)("td",null,(0,d.zw)(t.product.content.qty)+" "+(0,d.zw)(t.product.unit),1),(0,u._)("td",null,"$ "+(0,d.zw)(t.product.price),1),(0,u._)("td",null,(0,d.zw)(t.qty),1),(0,u._)("td",null,"$ "+(0,d.zw)(t.total),1)])))),128))])])])}var i={data(){return{carts:[]}},methods:{getCarts(){const t="https://vue3-course-api.hexschool.io/v2/api/groen/cart";this.$http.get(t).then((t=>{console.log(t.data.data.carts),this.carts=t.data.data.carts})).catch((t=>{console.log(t)}))}},mounted(){this.getCarts()}},_=n(3744);const p=(0,_.Z)(i,[["render",s]]);var w=p}}]);
//# sourceMappingURL=164.cd08ac0b.js.map