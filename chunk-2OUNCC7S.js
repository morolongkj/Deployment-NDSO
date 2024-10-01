import{a as O}from"./chunk-FZNBEZIG.js";import{b as F}from"./chunk-M5IPXDXJ.js";import{m as c,n as d}from"./chunk-APBDOC4F.js";import{j as P}from"./chunk-4YKIQALY.js";import"./chunk-5GXOS7PB.js";import{g as _,u as L,v as E}from"./chunk-CNFZGMVO.js";import{$b as w,Ab as f,Jb as h,Pb as v,Qb as b,Rb as y,Tb as r,Za as u,_a as g,_b as S,e as M,fc as x,gc as C,la as s,oa as l,pb as p,yb as o,zb as n}from"./chunk-AK6AH6QP.js";var k=M(O());var J=(()=>{class a{constructor(i){this.authService=s(F),this.toastService=s(P),this.router=s(L),this.questions$=i.getLoginQuestions()}ngOnInit(){k.default.init(),this.authService.isAuthenticatedUser()&&this.router.navigate(["/dashboard"])}handleFormSubmit(i){let e={email:i.formData.emailAddress,password:i.formData.password};this.authService.login(e).subscribe({next:t=>{console.log(t),t.status?(this.toastService.success("Logged in successfully!"),this.dynamicFormComponent.resetForm()):this.toastService.error("Wrong username and/or password")},error:t=>{console.log(t)}})}static{this.\u0275fac=function(e){return new(e||a)(g(d))}}static{this.\u0275cmp=l({type:a,selectors:[["app-login"]],viewQuery:function(e,t){if(e&1&&v(c,5),e&2){let m;b(m=y())&&(t.dynamicFormComponent=m.first)}},standalone:!0,features:[S([d]),w],decls:27,vars:5,consts:[[1,"container","min-vh-100","ps-md-0","py-3"],[1,"row","g-0"],[1,"col-md-8","col-lg-6","login-col"],[1,"login","d-flex","align-items-center","py-5"],[1,"container"],[1,"row"],[1,"col-md-9","col-lg-8","mx-auto"],["data-aos","fade-down","data-aos-duration","2000",1,"login-heading","mb-4"],["data-aos","fade-right","data-aos-duration","2000",1,"custom-hr"],[3,"submitEvent","questions","btnText","perPage"],[1,"row","mt-3"],[1,"col-lg-12","text-end"],["routerLink","/auth/forgot-password","data-aos","fade-down","data-aos-duration","2000",1,"text-primary","forgot-password"],[1,"col-md-4","col-lg-6"],["data-aos","fade-left","data-aos-duration","2000",1,"login-heading","mb-4"],["data-aos","fade-left","data-aos-duration","2000",1,"text-muted","mb-4"],["routerLink","/auth/register","data-aos","fade-up","data-aos-duration","2000",1,"btn","btn-outline-dark","btn-lg"]],template:function(e,t){e&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h3",7),r(8," Welcome back! "),n(),f(9,"hr",8),o(10,"app-dynamic-form",9),x(11,"async"),h("submitEvent",function(Q){return t.handleFormSubmit(Q)}),n(),o(12,"div",10)(13,"div",11)(14,"a",12),r(15,"Forgot Password?"),n()()()()()()()(),o(16,"div",13)(17,"div",3)(18,"div",4)(19,"div",5)(20,"div",6)(21,"h3",14),r(22," Don't have an Account? "),n(),o(23,"h6",15),r(24," We've got you covered. Join us and be part of our thriving network. "),n(),o(25,"a",16),r(26,"Register as a Supplier"),n()()()()()()()()),e&2&&(u(10),p("questions",C(11,3,t.questions$))("btnText","Login")("perPage",2))},dependencies:[E,_,c],styles:[".login[_ngcontent-%COMP%]{min-height:100vh}.bg-image[_ngcontent-%COMP%]{background-image:url(https://source.unsplash.com/WEQbe2jBg40/600x1200);background-size:cover;background-position:center}.login-heading[_ngcontent-%COMP%]{font-weight:300}.btn-login[_ngcontent-%COMP%]{font-size:.9rem;letter-spacing:.05rem;padding:.75rem 1rem}@media only screen and (min-width: 768px){.login-col[_ngcontent-%COMP%]{border-right:3px solid #8c3b0b}}"]})}}return a})();export{J as LoginComponent};
