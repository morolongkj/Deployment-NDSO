import{b as x}from"./chunk-M5IPXDXJ.js";import{m as c,n as a}from"./chunk-APBDOC4F.js";import{j as Q}from"./chunk-4YKIQALY.js";import"./chunk-5GXOS7PB.js";import{g as P,u as _}from"./chunk-CNFZGMVO.js";import{$b as F,Ab as m,Jb as v,Pb as g,Qb as h,Rb as y,Tb as w,Za as p,_a as l,_b as S,fc as b,gc as C,la as r,oa as u,pb as f,yb as s,zb as n}from"./chunk-AK6AH6QP.js";var B=(()=>{class i{constructor(o){this.authService=r(x),this.toastService=r(Q),this.router=r(_),this.questions$=o.getForgotPasswordQuestions()}ngOnInit(){this.authService.isAuthenticatedUser()&&this.router.navigate(["/dashboard"])}handleFormSubmit(o){let e={email:o.formData.emailAddress,password:o.formData.password};this.authService.requestResetPassword(e).subscribe({next:t=>{console.log(t),this.toastService.success(t.message||"Successful"),this.dynamicFormComponent.resetForm()},error:t=>{console.log(t)}})}static{this.\u0275fac=function(e){return new(e||i)(l(a))}}static{this.\u0275cmp=u({type:i,selectors:[["app-forgot-password"]],viewQuery:function(e,t){if(e&1&&g(c,5),e&2){let d;h(d=y())&&(t.dynamicFormComponent=d.first)}},standalone:!0,features:[S([a]),F],decls:14,vars:4,consts:[[1,"container","min-vh-100","py-5"],[1,"row"],[1,"col-lg-10","mx-auto"],[1,"card","main-card"],[1,"card-body"],[1,"col-lg-6","d-flex","align-items-center","justify-content-center"],["src","../../../../assets/memory.png","alt","key image","width","150","data-aos","fade-down","data-aos-duration","2000",1,"img-fluid"],[1,"col-lg-6"],["data-aos","fade-down","data-aos-duration","2000",1,"text-start"],["data-aos","fade-right","data-aos-duration","2000",1,"custom-hr"],[3,"submitEvent","questions","btnText"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",1)(6,"div",5),m(7,"img",6),n(),s(8,"div",7)(9,"h3",8),w(10," Forgot Password "),n(),m(11,"hr",9),s(12,"app-dynamic-form",10),b(13,"async"),v("submitEvent",function(q){return t.handleFormSubmit(q)}),n()()()()()()()()),e&2&&(p(12),f("questions",C(13,2,t.questions$))("btnText","Reset Password"))},dependencies:[P,c]})}}return i})();export{B as ForgotPasswordComponent};
