"use strict";(self["webpackChunkleftyprint"]=self["webpackChunkleftyprint"]||[]).push([[565],{8565:function(e,l,o){o.r(l),o.d(l,{default:function(){return v}});var a=o(6252),s=o(9963);const i={class:"container"},t={class:"row mb-3"},n={class:"col-6"},r={class:"col-auto"},c=(0,a._)("label",{for:"formFile",class:"form-label"},"上傳檔案",-1),u=(0,a._)("div",{class:"col-auto"},[(0,a._)("input",{class:"btn btn-secondary",type:"submit",value:"上傳"})],-1),d={class:"mb-3"},p=(0,a._)("label",{for:"imageUrl",class:"form-label"},"圖片網址",-1);function m(e,l,o,m,f,g){return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",t,[(0,a._)("div",n,[(0,a._)("form",{class:"row align-items-end",onSubmit:l[1]||(l[1]=(0,s.iM)(((...e)=>g.uploadFile&&g.uploadFile(...e)),["prevent"]))},[(0,a._)("div",r,[c,(0,a._)("input",{class:"form-control",type:"file",id:"fileToUpload",name:"file-to-upload",accept:"image/png, image/jpeg",onChange:l[0]||(l[0]=(...e)=>g.choseFile&&g.choseFile(...e))},null,32)]),u],32)])]),(0,a._)("div",d,[p,(0,a.wy)((0,a._)("textarea",{class:"form-control",id:"imageUrl",rows:"3","onUpdate:modelValue":l[2]||(l[2]=e=>f.imageUrl=e)},null,512),[[s.nr,f.imageUrl]])])])}var f={data(){return{file:{},imageUrl:""}},methods:{choseFile(e){this.file=e.target.files[0],console.log(this.file)},uploadFile(){console.log("hello");const e="https://vue3-course-api.hexschool.io/v2/api/groen/admin/upload",l=new FormData;l.append("file-to-upload",this.file),this.$http.post(e,l).then((e=>{console.log(e),this.imageUrl=e.data.imageUrl})).catch((e=>{console.log(e.response.data.message)}))}},mounted(){}},g=o(3744);const h=(0,g.Z)(f,[["render",m]]);var v=h}}]);
//# sourceMappingURL=565.c311c19b.js.map