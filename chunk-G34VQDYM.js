import{b as q}from"./chunk-Q66QXDY7.js";import{m as c,n as r}from"./chunk-UZNDUMES.js";import{i as F}from"./chunk-AGSWOYKP.js";import"./chunk-JCKB2E4I.js";import"./chunk-N6Q423HR.js";import{g as _,v as g}from"./chunk-4WYIZYTR.js";import{$b as Q,Jb as f,Pb as v,Qb as y,Rb as h,Tb as C,Za as p,_a as d,_b as S,fc as P,gc as b,la as n,oa as u,pb as l,yb as m,zb as s}from"./chunk-N6N27DRQ.js";var L=(()=>{class t{constructor(i){this.authService=n(q),this.toastService=n(F),this.router=n(g),this.questions$=i.getPrequalificationQuestions()}ngOnInit(){}handleFormSubmit(i){console.log("Form submitted:",i.formData)}static{this.\u0275fac=function(e){return new(e||t)(d(r))}}static{this.\u0275cmp=u({type:t,selectors:[["app-pre-qualification-create"]],viewQuery:function(e,o){if(e&1&&v(c,5),e&2){let a;y(a=h())&&(o.dynamicFormComponent=a.first)}},standalone:!0,features:[S([r]),Q],decls:10,vars:5,consts:[[1,"container","min-vh-100","ps-md-0","py-5"],[1,"row"],[1,"col-lg-10","mx-auto"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[3,"submitEvent","questions","btnText","perPage"]],template:function(e,o){e&1&&(m(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h5",5),C(6,"Call for Prequalification"),s()(),m(7,"div",6)(8,"app-dynamic-form",7),P(9,"async"),f("submitEvent",function(w){return o.handleFormSubmit(w)}),s()()()()()()),e&2&&(p(8),l("questions",b(9,3,o.questions$))("btnText","Save")("perPage",6))},dependencies:[_,c]})}}return t})();export{L as PreQualificationCreateComponent};
