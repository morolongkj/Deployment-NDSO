import{b as Ee,c as Ge}from"./chunk-TBPE5XZ7.js";import{a as ae}from"./chunk-AH2EGK5Q.js";import{a as re}from"./chunk-E7KANFFP.js";import{a as ve,b as ye,c as Ce,d as ge,e as he,f as be,g as Fe,h as Ne,i as De,j as Se,k as xe,l as _e,n as Ie}from"./chunk-UZNDUMES.js";import{i as ne}from"./chunk-AGSWOYKP.js";import{b as me,c as E,d as le,e as F,f as y,g as se,i as ce,k as C,m as de,n as s,o as N,p as pe,q as ue,r as fe,v as g}from"./chunk-JCKB2E4I.js";import"./chunk-N6Q423HR.js";import{d as I,e as oe,j as f,w as ie}from"./chunk-4WYIZYTR.js";import{$ as Q,$b as d,Ab as v,Db as z,Eb as J,Fa as K,H as L,Jb as _,Kb as x,Pb as w,Qb as k,Rb as V,Sb as X,Tb as l,Ub as Y,Vb as u,Za as n,_a as p,_b as Z,a as P,ac as ee,b as A,fa as $,gb as U,la as T,n as q,nb as b,oa as c,pb as r,qc as te,ub as W,ya as H,yb as m,za as B,zb as a}from"./chunk-N6N27DRQ.js";var M=(()=>{class o{constructor(e){this.formgroupDirective=e,this.formName=e.control}static{this.\u0275fac=function(t){return new(t||o)(p(s))}}static{this.\u0275cmp=c({type:o,selectors:[["app-dynamic-input"]],inputs:{field:"field"},standalone:!0,features:[d],decls:4,vars:4,consts:[[3,"formGroup"],[1,"form-control",3,"type","formControlName"]],template:function(t,i){t&1&&(m(0,"form",0)(1,"label"),l(2),a(),v(3,"input",1),a()),t&2&&(r("formGroup",i.formName),n(2),u("",i.field.label," : "),n(),r("type",i.field.type)("formControlName",i.field.fieldName))},dependencies:[g,C,E,F,y,s,N]})}}return o})();function Pe(o,D){if(o&1&&(m(0,"label")(1,"label",2),v(2,"input",3),l(3),a()()),o&2){let e=D.$implicit,t=x();n(2),r("name",t.field.fieldName)("formControlName",t.field.fieldName)("value",e.value),n(),u(" ",e.label," ")}}var Me=(()=>{class o{constructor(e){this.formgroupDirective=e,this.formName=e.control}static{this.\u0275fac=function(t){return new(t||o)(p(s))}}static{this.\u0275cmp=c({type:o,selectors:[["app-dynamic-radio"]],inputs:{field:"field"},standalone:!0,features:[d],decls:4,vars:3,consts:[[3,"formGroup"],[4,"ngFor","ngForOf"],["ngFor","let option of field.options"],["type","radio",3,"name","formControlName","value"]],template:function(t,i){t&1&&(m(0,"form",0)(1,"h3"),l(2),a(),b(3,Pe,4,4,"label",1),a()),t&2&&(r("formGroup",i.formName),n(2),Y(i.field.label),n(),r("ngForOf",i.field.options))},dependencies:[g,C,E,de,F,y,s,N,f,I]})}}return o})();var Te=(()=>{class o{constructor(){this.messageSubject=new q,this.message$=this.messageSubject.asObservable()}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275prov=$({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();function qe(o,D){if(o&1&&(m(0,"option",4),l(1),a()),o&2){let e=D.$implicit;r("value",e.value),n(),u(" ",e.label," ")}}var we=(()=>{class o{constructor(e,t){this.messageService=e,this.formGroupDirective=t,this.alive=!0,this.formName=t.control}ngAfterViewInit(){this.listenForLinkData()}ngOnDestroy(){this.alive=!1}listenForLinkData(){this.field?.link&&this.messageService.message$.pipe(L(e=>e.link===this.field.link),Q(()=>this.alive)).subscribe(e=>{this.field.options=e.data})}changedValue(e){this.field.provideData&&this.messageService.messageSubject.next({link:this.field.fieldName,data:this.field.provideData.filter(t=>t.sourceValue===e)})}static{this.\u0275fac=function(t){return new(t||o)(p(Te),p(s))}}static{this.\u0275cmp=c({type:o,selectors:[["app-dynamic-select"]],inputs:{field:"field"},standalone:!0,features:[d],decls:6,vars:4,consts:[["dynamicSelect",""],[3,"formGroup"],[1,"form-select",3,"change","formControlName"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,i){if(t&1){let h=J();m(0,"form",1)(1,"label"),l(2),a(),m(3,"select",2,0),_("change",function(){H(h);let Re=X(4);return B(i.changedValue(Re.value))}),b(5,qe,2,2,"option",3),a()()}t&2&&(r("formGroup",i.formName),n(2),u("",i.field.label,":"),n(),r("formControlName",i.field.fieldName),n(2),r("ngForOf",i.field.options))},dependencies:[g,C,ue,fe,pe,F,y,s,N,f,I,Ee,Ge]})}}return o})();var ke=(()=>{class o{constructor(e){this.formgroupDirective=e,this.formName=e.control}static{this.\u0275fac=function(t){return new(t||o)(p(s))}}static{this.\u0275cmp=c({type:o,selectors:[["app-dynamic-checkbox"]],inputs:{field:"field"},standalone:!0,features:[d],decls:4,vars:5,consts:[[3,"formGroup"],["type","checkbox",3,"name","formControlName","value"]],template:function(t,i){t&1&&(m(0,"form",0)(1,"label"),l(2),v(3,"input",1),a()()),t&2&&(r("formGroup",i.formName),n(2),u(" ",i.field.label," "),n(),r("name",i.field.fieldName)("formControlName",i.field.fieldName)("value",i.field.value))},dependencies:[g,C,me,F,y,s,N,f]})}}return o})();function Le(o,D){if(o&1&&v(0,"textarea",1),o&2){let e=x();r("formControlName",e.field.fieldName)}}function Qe(o,D){if(o&1&&v(0,"ckeditor",2),o&2){let e=x();r("formControlName",e.field.fieldName)("id",e.field.fieldName)("editor",e.Editor)("config",e.config)}}var Ve=(()=>{class o{constructor(e){this.formgroupDirective=e,this.Editor=he,this.config={height:"400px",toolbar:["undo","redo","|","bold","italic","link","|","heading","|","bulletedList","numberedList"],plugins:[De,Ce,Fe,ge,_e,Ne,be,Se,xe],mention:{feeds:[{marker:"@",feed:["@user","@jane","@foo","@bar"],minimumCharacters:1}]}},this.formName=e.control}static{this.\u0275fac=function(t){return new(t||o)(p(s))}}static{this.\u0275cmp=c({type:o,selectors:[["app-dynamic-textarea"]],inputs:{field:"field"},standalone:!0,features:[d],decls:5,vars:3,consts:[[3,"formGroup"],[3,"formControlName"],["data","<p>Hello, world!</p>",3,"formControlName","id","editor","config"]],template:function(t,i){t&1&&(m(0,"form",0)(1,"label"),l(2),a(),b(3,Le,1,1,"textarea",1)(4,Qe,1,4),a()),t&2&&(r("formGroup",i.formName),n(2),u("",i.field.label," : "),n(),W(3,i.field.richText?4:3))},dependencies:[g,C,E,F,y,s,N,f,ye,ve]})}}return o})();var $e=["dynamicInputContainer"],Oe=(()=>{class o{constructor(e){this.cd=e,this.supportedDynamicComponents=[{name:"text",component:M},{name:"textarea",component:Ve},{name:"number",component:M},{name:"select",component:we},{name:"radio",component:Me},{name:"date",component:M},{name:"checkbox",component:ke}]}ngAfterViewInit(){this.registerDynamicField()}registerDynamicField(){this.dynamicInputContainer.clear();let e=this.getComponentByType(this.field.type);this.dynamicInputContainer.createComponent(e).setInput("field",this.field),this.cd.detectChanges()}getComponentByType(e){return this.supportedDynamicComponents.find(i=>i.name===e)?.component||M}static{this.\u0275fac=function(t){return new(t||o)(p(te))}}static{this.\u0275cmp=c({type:o,selectors:[["app-dynamic-field"]],viewQuery:function(t,i){if(t&1&&w($e,5,U),t&2){let h;k(h=V())&&(i.dynamicInputContainer=h.first)}},inputs:{field:"field"},standalone:!0,features:[d],decls:2,vars:0,consts:[["dynamicInputContainer",""]],template:function(t,i){t&1&&z(0,null,0)}})}}return o})();function He(o,D){if(o&1&&(m(0,"div"),l(1),a()),o&2){let e=x(2);n(),u(" * ",e.fieldName," is required ")}}function Be(o,D){if(o&1&&(m(0,"div",1),b(1,He,2,1,"div",2),a()),o&2){let e=x();n(),r("ngIf",e.formName.controls[e.fieldName]==null||e.formName.controls[e.fieldName].errors==null?null:e.formName.controls[e.fieldName].errors.required)}}var je=(()=>{class o{constructor(e){this.formgroupDirective=e}ngOnInit(){this.formName=this.formgroupDirective.control}static{this.\u0275fac=function(t){return new(t||o)(p(s))}}static{this.\u0275cmp=c({type:o,selectors:[["app-dynamic-error"]],inputs:{fieldName:"fieldName"},standalone:!0,features:[d],decls:1,vars:1,consts:[["class","alert text-danger",4,"ngIf"],[1,"alert","text-danger"],[4,"ngIf"]],template:function(t,i){t&1&&b(0,Be,2,1,"div",0),t&2&&r("ngIf",i.formName.controls[i.fieldName].invalid&&(i.formName.controls[i.fieldName].dirty||i.formName.controls[i.fieldName].touched))},dependencies:[f,oe]})}}return o})();function Ke(o,D){if(o&1&&(m(0,"div",7),v(1,"app-dynamic-field",8)(2,"app-dynamic-error",9),a()),o&2){let e=D.$implicit;n(),r("field",e),n(),r("fieldName",e.fieldName)}}var j=(()=>{class o{constructor(){this.submitEvent=new K,this.btnText="Save",this.fields=[]}ngOnInit(){this.buildForm()}buildForm(){let e=this.getFormControlsFields();this.dynamicFormGroup=new se(e)}getFormControlsFields(){let e={};for(let t of Object.keys(this.model)){let i=this.model[t],h=this.addValidator(i.rules);e[t]=new ce(i.value,h),this.fields.push(A(P({},i),{fieldName:t}))}return e}addValidator(e){return e?Object.keys(e).map(i=>{switch(i){case"required":return le.required;default:return null}}).filter(i=>i!==null):[]}onSubmit(){let e=this.dynamicFormGroup.value;console.table(e);let t={formData:e};this.submitEvent.emit(t)}resetForm(){this.dynamicFormGroup.reset()}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=c({type:o,selectors:[["app-custom-form"]],inputs:{model:"model",btnText:"btnText"},outputs:{submitEvent:"submitEvent"},standalone:!0,features:[d],decls:8,vars:4,consts:[[3,"ngSubmit","formGroup"],[1,"form-row"],["class","my-2",4,"ngFor","ngForOf"],[1,"form-row","mt-4"],[1,"col-lg-6","ms-auto","text-end"],["type","submit",1,"btn","btn-primary","ms-1",3,"disabled"],[1,"bi","bi-send","ms-2"],[1,"my-2"],[3,"field"],[3,"fieldName"]],template:function(t,i){t&1&&(m(0,"form",0),_("ngSubmit",function(){return i.onSubmit()}),m(1,"div",1),b(2,Ke,3,2,"div",2),a(),m(3,"div",3)(4,"div",4)(5,"button",5),l(6),v(7,"i",6),a()()()()),t&2&&(r("formGroup",i.dynamicFormGroup),n(2),r("ngForOf",i.fields),n(3),r("disabled",!i.dynamicFormGroup.valid),n(),u(" ",i.btnText," "))},dependencies:[f,I,g,C,y,s,Oe,je]})}}return o})();var Ue=()=>["/products"],Jt=(()=>{class o{constructor(){this.productService=T(ae),this.toastService=T(ne),this.categoryService=T(re),this.model={title:{type:"text",value:"",label:"Name/Title",rules:{required:!0}},code:{type:"text",value:"",label:"Product Code",rules:{required:!0}},description:{type:"textarea",value:"",label:"Description",richText:!0,rules:{required:!0}},category:{id:"category",label:"Category",type:"select",options:[],rules:{required:!0}}}}ngOnInit(){this.categoryService.getCategories().subscribe({next:e=>{e.data.categories.forEach(t=>this.model.category.options.push({label:t.title,value:t.id}))}})}handleFormSubmit(e){console.log("Form submitted:",e.formData);let t={title:e.formData.title,code:e.formData.code,category_id:e.formData.category,description:e.formData.description};this.productService.addProduct(t).subscribe({next:i=>{console.log(i),i.status?(this.toastService.success("Product is created successfully!"),this.customFormComponent.resetForm()):this.toastService.error("Unknown error occured")}})}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=c({type:o,selectors:[["app-admin-product-create"]],viewQuery:function(t,i){if(t&1&&w(j,5),t&2){let h;k(h=V())&&(i.customFormComponent=h.first)}},standalone:!0,features:[Z([Ie]),d],decls:21,vars:4,consts:[[1,"container","min-vh-100","py-5"],[1,"row"],[1,"col-lg-12","mx-auto"],[1,"card","main-card"],[1,"card-header","d-flex","align-items-center"],["aria-label","breadcrumb",1,"w-100"],[1,"breadcrumb","my-auto"],[1,"breadcrumb-item"],["href","#"],[1,"breadcrumb-item","active"],["routerLinkActive","router-link-active",3,"routerLink"],["aria-current","page",1,"breadcrumb-item","active"],[1,"card-body"],[1,"col-lg-6"],[3,"submitEvent","model","btnText"]],template:function(t,i){t&1&&(m(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"nav",5)(6,"ol",6)(7,"li",7)(8,"a",8),l(9,"Home"),a()(),m(10,"li",9),l(11,"Administration"),a(),m(12,"li",7)(13,"a",10),l(14,"Products"),a()(),m(15,"li",11),l(16,"Create"),a()()()(),m(17,"div",12)(18,"div",1)(19,"div",13)(20,"app-custom-form",14),_("submitEvent",function(R){return i.handleFormSubmit(R)}),a()()()()()()()()),t&2&&(n(13),r("routerLink",ee(3,Ue)),n(7),r("model",i.model)("btnText","Save Product"))},dependencies:[ie,j,f]})}}return o})();export{Jt as ProductCreateComponent};
