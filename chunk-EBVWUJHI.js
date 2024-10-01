import{a as D}from"./chunk-VRWIO7NF.js";import{m as l,n as s}from"./chunk-APBDOC4F.js";import{j as x}from"./chunk-4YKIQALY.js";import"./chunk-5GXOS7PB.js";import{g as F,v as q}from"./chunk-CNFZGMVO.js";import{$b as h,Jb as v,Pb as b,Qb as y,Rb as Q,Tb as o,Za as u,_a as f,_b as S,ac as C,fc as _,gc as g,la as c,oa as p,pb as d,yb as r,zb as n}from"./chunk-AK6AH6QP.js";var w=()=>["/questionnaires"],H=(()=>{class a{constructor(e){this.questionnaireService=c(D),this.toastService=c(x),this.questions$=e.getQuestionnaireQuestions()}handleFormSubmit(e){console.log("Form submitted:",e.formData);let t={reference_number:e.formData.referenceNumber,title:e.formData.title,description:e.formData.description,open_from:e.formData.openFrom,open_until:e.formData.openUntil};this.questionnaireService.addQuestionnaire(t).subscribe({next:i=>{console.log(i),i.status?(this.toastService.success("Questionnaire is created successfully!"),this.dynamicFormComponent.resetForm()):this.toastService.error("Unknown error occured")},error:i=>{console.log(i)}})}static{this.\u0275fac=function(t){return new(t||a)(f(s))}}static{this.\u0275cmp=p({type:a,selectors:[["app-questionnaire-create"]],viewQuery:function(t,i){if(t&1&&b(l,5),t&2){let m;y(m=Q())&&(i.dynamicFormComponent=m.first)}},standalone:!0,features:[S([s]),h],decls:22,vars:7,consts:[[1,"container","min-vh-100","py-5"],[1,"row"],[1,"col-lg-12","mx-auto"],[1,"card","main-card"],[1,"card-header","d-flex","align-items-center"],["aria-label","breadcrumb",1,"w-100"],[1,"breadcrumb","my-auto"],[1,"breadcrumb-item"],["href","#"],[1,"breadcrumb-item","active"],["routerLinkActive","router-link-active",3,"routerLink"],["aria-current","page",1,"breadcrumb-item","active"],[1,"card-body"],[1,"col-lg-6"],[3,"submitEvent","questions","btnText","perPage"]],template:function(t,i){t&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"nav",5)(6,"ol",6)(7,"li",7)(8,"a",8),o(9,"Home"),n()(),r(10,"li",9),o(11,"Quality Assurance"),n(),r(12,"li",7)(13,"a",10),o(14,"Questionnaires"),n()(),r(15,"li",11),o(16,"Create"),n()()()(),r(17,"div",12)(18,"div",1)(19,"div",13)(20,"app-dynamic-form",14),_(21,"async"),v("submitEvent",function(E){return i.handleFormSubmit(E)}),n()()()()()()()()),t&2&&(u(13),d("routerLink",C(6,w)),u(7),d("questions",g(21,4,i.questions$))("btnText","Save Questionnaire")("perPage",5))},dependencies:[F,l,q]})}}return a})();export{H as QuestionnaireCreateComponent};