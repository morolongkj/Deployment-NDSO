import{a as u,b as n}from"./chunk-OQEK375C.js";import{d as F,k as P,p as _,y as w}from"./chunk-FT6CM3TU.js";import{Ab as b,Bb as Q,Db as g,Eb as q,Ma as d,Na as l,_ as o,ba as p,cb as f,kb as s,lb as c,rb as v,ub as y,vb as h,wb as S,xb as C}from"./chunk-I5PQAQ5I.js";var O=(()=>{let i=class i{constructor(t){this.authService=o(_),this.toastService=o(w),this.router=o(P),this.questions$=t.getPrequalificationQuestions()}ngOnInit(){}handleFormSubmit(t){console.log("Form submitted:",t.formData)}};i.\u0275fac=function(e){return new(e||i)(l(n))},i.\u0275cmp=p({type:i,selectors:[["app-pre-qualification-create"]],viewQuery:function(e,r){if(e&1&&y(u,5),e&2){let m;h(m=S())&&(r.dynamicFormComponent=m.first)}},standalone:!0,features:[b([n]),Q],decls:10,vars:5,consts:[[1,"container","min-vh-100","ps-md-0","py-5"],[1,"row"],[1,"col-lg-10","mx-auto"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[3,"submitEvent","questions","btnText","perPage"]],template:function(e,r){e&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h5",5),C(6,"Call for Prequalification"),c()(),s(7,"div",6)(8,"app-dynamic-form",7),g(9,"async"),v("submitEvent",function(E){return r.handleFormSubmit(E)}),c()()()()()()),e&2&&(d(8),f("questions",q(9,3,r.questions$))("btnText","Save")("perPage",6))},dependencies:[F,u]});let a=i;return a})();export{O as PreQualificationCreateComponent};
