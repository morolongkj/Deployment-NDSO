import{b as q}from"./chunk-PUHQXN2A.js";import{a as c,b as r}from"./chunk-J4DAXATX.js";import"./chunk-S7AA3UJJ.js";import{i as F}from"./chunk-SOBBRMPV.js";import"./chunk-22GTFEIV.js";import"./chunk-76MW4KX4.js";import{c as g}from"./chunk-SRT76A6V.js";import"./chunk-E4MEA7MR.js";import{m as _}from"./chunk-N57PBUIL.js";import{$b as S,Jb as f,Qb as v,Rb as y,Sb as h,Ub as C,Za as p,_a as d,ac as Q,gc as P,hc as b,la as n,oa as u,pb as l,yb as m,zb as s}from"./chunk-MLHGNWXV.js";var L=(()=>{class t{constructor(i){this.authService=n(q),this.toastService=n(F),this.router=n(g),this.questions$=i.getPrequalificationQuestions()}ngOnInit(){}handleFormSubmit(i){console.log("Form submitted:",i.formData)}static{this.\u0275fac=function(e){return new(e||t)(d(r))}}static{this.\u0275cmp=u({type:t,selectors:[["app-pre-qualification-create"]],viewQuery:function(e,o){if(e&1&&v(c,5),e&2){let a;y(a=h())&&(o.dynamicFormComponent=a.first)}},standalone:!0,features:[S([r]),Q],decls:10,vars:5,consts:[[1,"container","min-vh-100","ps-md-0","py-5"],[1,"row"],[1,"col-lg-10","mx-auto"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[3,"submitEvent","questions","btnText","perPage"]],template:function(e,o){e&1&&(m(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h5",5),C(6,"Call for Prequalification"),s()(),m(7,"div",6)(8,"app-dynamic-form",7),P(9,"async"),f("submitEvent",function(w){return o.handleFormSubmit(w)}),s()()()()()()),e&2&&(p(8),l("questions",b(9,3,o.questions$))("btnText","Save")("perPage",6))},dependencies:[_,c]})}}return t})();export{L as PreQualificationCreateComponent};