import{a as w}from"./chunk-UUK2MEKI.js";import{a as u,b as m}from"./chunk-MUSGDK5O.js";import"./chunk-6EW4IUTA.js";import{i as E}from"./chunk-SPF45QKE.js";import"./chunk-Y5TDRMM2.js";import"./chunk-TU2ZNCML.js";import{d as D}from"./chunk-63TX3NUI.js";import"./chunk-ZOPMU54Y.js";import{l as x}from"./chunk-KALLYKT4.js";import{$b as b,Jb as v,Qb as f,Rb as g,Sb as C,Ub as n,Za as d,_a as y,ac as S,bc as h,gc as F,hc as _,la as s,oa as p,pb as l,yb as r,zb as o}from"./chunk-MLHGNWXV.js";var k=()=>["/categories"],I=(()=>{class a{constructor(e){this.categoryService=s(w),this.toastService=s(E),this.questions$=e.getCategoryQuestions()}handleFormSubmit(e){console.log("Form submitted:",e.formData);let t={title:e.formData.categoryTitle,description:e.formData.categoryDescription,display_order:e.formData.categoryDisplayOrder};this.categoryService.addCategory(t).subscribe({next:i=>{console.log(i),i.status?(this.toastService.success("Category is created successfully!"),this.dynamicFormComponent.resetForm()):this.toastService.error("Unknown error occured")},error:i=>{console.log(i)}})}static{this.\u0275fac=function(t){return new(t||a)(y(m))}}static{this.\u0275cmp=p({type:a,selectors:[["app-category-create"]],viewQuery:function(t,i){if(t&1&&f(u,5),t&2){let c;g(c=C())&&(i.dynamicFormComponent=c.first)}},standalone:!0,features:[b([m]),S],decls:22,vars:7,consts:[[1,"container","min-vh-100","py-5"],[1,"row"],[1,"col-lg-12","mx-auto"],[1,"card","main-card"],[1,"card-header","d-flex","align-items-center"],["aria-label","breadcrumb",1,"w-100"],[1,"breadcrumb","my-auto"],[1,"breadcrumb-item"],["href","#"],[1,"breadcrumb-item","active"],["routerLinkActive","router-link-active",3,"routerLink"],["aria-current","page",1,"breadcrumb-item","active"],[1,"card-body"],[1,"col-lg-6"],[3,"submitEvent","questions","btnText","perPage"]],template:function(t,i){t&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"nav",5)(6,"ol",6)(7,"li",7)(8,"a",8),n(9,"Home"),o()(),r(10,"li",9),n(11,"Administration"),o(),r(12,"li",7)(13,"a",10),n(14,"Categories"),o()(),r(15,"li",11),n(16,"Create"),o()()()(),r(17,"div",12)(18,"div",1)(19,"div",13)(20,"app-dynamic-form",14),F(21,"async"),v("submitEvent",function(Q){return i.handleFormSubmit(Q)}),o()()()()()()()()),t&2&&(d(13),l("routerLink",h(6,k)),d(7),l("questions",_(21,4,i.questions$))("btnText","Save Category")("perPage",3))},dependencies:[x,u,D]})}}return a})();export{I as CategoryCreateComponent};