"use strict";(self["webpackChunkleftyprint"]=self["webpackChunkleftyprint"]||[]).push([[17],{7017:function(t,e,o){o.r(e),o.d(e,{default:function(){return g}});var n=o(6252),r=o(9963);const s={class:"container"},u=(0,n._)("p",null,"Dashboard",-1),i=(0,n.Uk)("後台首頁"),a=(0,n.Uk)(" | "),c=(0,n.Uk)("產品列表"),h=(0,n.Uk)(" |   "),l=(0,n.Uk)(" |   "),p=(0,n.Uk)("回首頁");function d(t,e,o,d,k,m){const f=(0,n.up)("router-link"),g=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",s,[u,(0,n._)("nav",null,[(0,n.Wm)(f,{to:"/admin"},{default:(0,n.w5)((()=>[i])),_:1}),a,(0,n.Wm)(f,{to:"/admin/products"},{default:(0,n.w5)((()=>[c])),_:1}),h,(0,n._)("a",{href:"#",onClick:e[0]||(e[0]=(0,r.iM)((t=>m.logout()),["prevent"]))},"登出"),l,(0,n.Wm)(f,{to:"/"},{default:(0,n.w5)((()=>[p])),_:1})]),(0,n.Wm)(g)])}var k={data(){return{}},methods:{checkAdmin(){const t="https://vue3-course-api.hexschool.io/v2/api/user/check",e=document.cookie.replace(/(?:(?:^|.*;\s*)groenToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=e,e?this.$http.post(t).then((t=>{})).catch((t=>{alert(t.response.data.message),this.$router.push("/login")})):(alert("尚未登入後台"),this.$router.push("/login"))},logout(){document.cookie="groenToken=;expires=;",alert("已登出後台"),this.$router.push("/login")}},mounted(){this.checkAdmin()}},m=o(3744);const f=(0,m.Z)(k,[["render",d]]);var g=f}}]);
//# sourceMappingURL=17.4be5a3f9.js.map