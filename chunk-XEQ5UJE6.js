import{a as w}from"./chunk-4IHH3MHP.js";import{a as P}from"./chunk-FNKQNIT6.js";import{m as c,n as r}from"./chunk-UZNDUMES.js";import{i as Q}from"./chunk-AGSWOYKP.js";import"./chunk-JCKB2E4I.js";import"./chunk-N6Q423HR.js";import{g as D}from"./chunk-4WYIZYTR.js";import{$b as b,Ab as y,Jb as f,Pb as v,Qb as C,Rb as h,Tb as S,Za as d,_a as l,_b as g,e as E,fc as F,gc as _,la as a,oa as p,pb as u,yb as m,zb as s}from"./chunk-N6N27DRQ.js";var T=E(P());var L=(()=>{class i{constructor(e){this.companyService=a(w),this.toastService=a(Q),this.questions$=e.getCompanyQuestions()}ngOnInit(){T.default.init()}handleFormSubmit(e){console.log("Form submitted:",e.formData);let t={title:e.formData.companyTitle,description:e.formData.companyDescription,display_order:e.formData.companyDisplayOrder};this.companyService.addCompany(t).subscribe({next:o=>{console.log(o),o.status?(this.toastService.success("Company is created successfully!"),this.dynamicFormComponent.resetForm()):this.toastService.error("Unknown error occured")},error:o=>{console.log(o)}})}static{this.\u0275fac=function(t){return new(t||i)(l(r))}}static{this.\u0275cmp=p({type:i,selectors:[["app-company-create"]],viewQuery:function(t,o){if(t&1&&v(c,5),t&2){let n;C(n=h())&&(o.dynamicFormComponent=n.first)}},standalone:!0,features:[g([r]),b],decls:12,vars:5,consts:[[1,"container","min-vh-100","my-5"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-body"],["data-aos","fade-down","data-aos-duration","2000",1,"card-title"],["data-aos","fade-right","data-aos-duration","2000",1,"custom-hr"],[1,"row","my-3"],[1,"col-lg-6"],[3,"submitEvent","questions","btnText","perPage"]],template:function(t,o){t&1&&(m(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h5",5),S(6," Create Company Profile "),s(),y(7,"hr",6),m(8,"div",7)(9,"div",8)(10,"app-dynamic-form",9),F(11,"async"),f("submitEvent",function(q){return o.handleFormSubmit(q)}),s()()()()()()()()),t&2&&(d(10),u("questions",_(11,3,o.questions$))("btnText","Save")("perPage",7))},dependencies:[D,c]})}}return i})();export{L as CompanyCreateComponent};
