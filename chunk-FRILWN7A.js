import{a as M}from"./chunk-ZKCSYBW7.js";import{b as A}from"./chunk-EO2ZYVW3.js";import{a as c,b as m}from"./chunk-MUSGDK5O.js";import"./chunk-6EW4IUTA.js";import{i as F}from"./chunk-SPF45QKE.js";import"./chunk-Y5TDRMM2.js";import"./chunk-TU2ZNCML.js";import{c as D,d as P}from"./chunk-63TX3NUI.js";import"./chunk-ZOPMU54Y.js";import{l as x}from"./chunk-KALLYKT4.js";import{$b as S,Ab as f,Jb as h,Qb as v,Rb as b,Sb as y,Ub as s,Za as u,_a as g,ac as C,e as Q,gc as w,hc as _,la as a,oa as l,pb as p,yb as o,zb as n}from"./chunk-MLHGNWXV.js";var R=Q(M());var U=(()=>{class r{constructor(e){this.authService=a(A),this.toastService=a(F),this.router=a(D),this.questions$=e.getRegistrationQuestions()}ngOnInit(){R.default.init(),this.authService.isAuthenticatedUser()&&this.router.navigate(["/"])}handleFormSubmit(e){console.log("Form submitted:",e.formData);let t={first_name:e.formData.firstName,last_name:e.formData.lastName,email:e.formData.emailAddress,username:e.formData.emailAddress,password:e.formData.password};e.formData.password===e.formData.confirmPassword?this.authService.register(t).subscribe({next:i=>{console.log(i),i.status&&(this.dynamicFormComponent.resetForm(),this.toastService.success("Registration is successful","Account Created"),this.authService.login(t).subscribe({}))},error:i=>{console.log(i)}}):this.toastService.error("Passwords does not match","Cannot Submit")}static{this.\u0275fac=function(t){return new(t||r)(g(m))}}static{this.\u0275cmp=l({type:r,selectors:[["app-register"]],viewQuery:function(t,i){if(t&1&&v(c,5),t&2){let d;b(d=y())&&(i.dynamicFormComponent=d.first)}},standalone:!0,features:[S([m]),C],decls:21,vars:5,consts:[[1,"container","min-vh-100","ps-md-0","py-5"],[1,"row","g-0"],[1,"col-md-4","col-lg-6"],[1,"login","d-flex","align-items-center","py-5"],[1,"container"],[1,"row"],[1,"col-md-9","col-lg-8","mx-auto"],["data-aos","fade-right","data-aos-duration","2000",1,"login-heading","mb-4"],["routerLink","/auth/login","data-aos","fade-right","data-aos-duration","2000",1,"btn","btn-outline-dark","btn-lg"],[1,"col-md-8","col-lg-6","login-col"],["data-aos","fade-down","data-aos-duration","2000",1,"login-heading","mb-4"],["data-aos","fade-right","data-aos-duration","2000",1,"custom-hr"],[3,"submitEvent","questions","btnText","perPage"]],template:function(t,i){t&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h3",7),s(8," Already have an Account? "),n(),o(9,"a",8),s(10,"Sign In Now"),n()()()()()(),o(11,"div",9)(12,"div",3)(13,"div",4)(14,"div",5)(15,"div",6)(16,"h3",10),s(17," Create new Account "),n(),f(18,"hr",11),o(19,"app-dynamic-form",12),w(20,"async"),h("submitEvent",function(E){return i.handleFormSubmit(E)}),n()()()()()()()()),t&2&&(u(19),p("questions",_(20,3,i.questions$))("btnText","Register")("perPage",5))},dependencies:[P,x,c],styles:[".login[_ngcontent-%COMP%]{min-height:100vh}.bg-image[_ngcontent-%COMP%]{background-image:url(https://source.unsplash.com/WEQbe2jBg40/600x1200);background-size:cover;background-position:center}.login-heading[_ngcontent-%COMP%]{font-weight:300}.btn-login[_ngcontent-%COMP%]{font-size:.9rem;letter-spacing:.05rem;padding:.75rem 1rem}@media only screen and (min-width: 768px){.login-col[_ngcontent-%COMP%]{border-left:3px solid #8c3b0b}}"]})}}return r})();export{U as RegisterComponent};