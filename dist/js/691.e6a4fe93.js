"use strict";(self["webpackChunkleftyprint"]=self["webpackChunkleftyprint"]||[]).push([[691],{1691:function(e,s,l){l.r(s),l.d(s,{default:function(){return w}});var n=l(3396),a=l(9242);const r={class:"container"},t=(0,n.Uk)("回首頁"),o=(0,n._)("p",null,"Login",-1),i={class:"mb-3"},u=(0,n._)("label",{for:"exampleInputEmail1",class:"form-label"},"Email address",-1),c=(0,n._)("div",{id:"emailHelp",class:"form-text"}," We'll never share your email with anyone else. ",-1),p={class:"mb-3"},m=(0,n._)("label",{for:"exampleInputPassword1",class:"form-label"},"Password",-1),d=(0,n._)("div",{class:"mb-3 form-check"},[(0,n._)("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),(0,n._)("label",{class:"form-check-label",for:"exampleCheck1"},"Check me out")],-1);function h(e,s,l,h,f,k){const b=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("nav",null,[(0,n.Wm)(b,{to:"/"},{default:(0,n.w5)((()=>[t])),_:1})]),o,(0,n._)("form",null,[(0,n._)("div",i,[u,(0,n.wy)((0,n._)("input",{type:"email",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=e=>f.user.username=e)},null,512),[[a.nr,f.user.username]]),c]),(0,n._)("div",p,[m,(0,n.wy)((0,n._)("input",{type:"password",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=e=>f.user.password=e)},null,512),[[a.nr,f.user.password]])]),d,(0,n._)("button",{class:"btn btn-primary",onClick:s[2]||(s[2]=(0,a.iM)(((...e)=>k.login&&k.login(...e)),["prevent"]))},"Submit")])])}var f={data(){return{user:{username:"yuwen7005@gmail.com",password:""}}},methods:{login(){const e="https://vue3-course-api.hexschool.io/v2/admin/signin";this.$http.post(e,this.user).then((e=>{document.cookie=`groenToken=${e.data.token};expires=${new Date(e.data.expired)}`,this.$router.push("/admin/products")}))}}},k=l(89);const b=(0,k.Z)(f,[["render",h]]);var w=b}}]);
//# sourceMappingURL=691.e6a4fe93.js.map