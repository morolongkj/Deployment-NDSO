import{a as $}from"./chunk-EYHLQRL5.js";import"./chunk-BYXBJQAS.js";import{b as O,c as W}from"./chunk-BR4DLS2C.js";import{a as ve}from"./chunk-TLK6SMY5.js";import{a as Ce}from"./chunk-UUK2MEKI.js";import{a as A}from"./chunk-ZXEL4EV3.js";import{b as N,c as ke,d as L,f as D,h as Ne,i as Le,j as De,k as Ae}from"./chunk-KH62GCST.js";import{a as re,b as Z}from"./chunk-MUSGDK5O.js";import{a as Se,b as ye,c as Ee,d as we,e as Qe,f as Me,g as Fe,h as qe,i as Te,j as Pe,k as Ve,l as Ie}from"./chunk-6EW4IUTA.js";import{i as T}from"./chunk-SPF45QKE.js";import{c as U,e as P,f as z,h as G,j as V,k as K,r as J,s as X,t as Y,v as I,x as k}from"./chunk-Y5TDRMM2.js";import"./chunk-TU2ZNCML.js";import{d as xe}from"./chunk-63TX3NUI.js";import{b as oe}from"./chunk-ZOPMU54Y.js";import{i as H,j as F,l as he,o as q}from"./chunk-KALLYKT4.js";import{$b as ue,Ab as f,Bb as B,Cb as j,Eb as g,Jb as b,Kb as m,Nb as ie,Qb as me,Rb as de,Sb as pe,Tb as x,Ub as l,Vb as C,Wa as se,Wb as w,Yb as v,Za as s,Zb as S,_a as le,_b as y,ac as M,bc as _e,ec as ge,gc as ne,hc as fe,ic as be,jc as E,la as h,nb as _,oa as Q,pb as c,vb as ce,wb as ee,xb as te,ya as p,yb as o,za as u,zb as r}from"./chunk-MLHGNWXV.js";function je(t,d){if(t&1){let e=g();o(0,"li",14)(1,"span"),f(2,"i",15),l(3),r(),o(4,"button",16),b("click",function(){let i=p(e).$implicit,a=m(2);return u(a.deleteQuestionnaireDocument(i))}),f(5,"i",17),r()()}if(t&2){let e=d.$implicit;s(3),C(e.file_name)}}function He(t,d){if(t&1&&(B(0),_(1,je,6,1,"li",13),j()),t&2){let e=m();s(),c("ngForOf",e.questionnaire.documents)}}function Ue(t,d){t&1&&(o(0,"li",18),f(1,"i",19),o(2,"div"),l(3,"No documents available"),r()())}function ze(t,d){t&1&&(o(0,"div",31),l(1," Please select a file to upload. "),r())}function Ge(t,d){t&1&&(o(0,"div",31),l(1," Please provide a filename. "),r())}function Ke(t,d){if(t&1){let e=g();o(0,"div",25)(1,"label",32),l(2,"File Name"),r(),o(3,"input",33),y("ngModelChange",function(i){p(e);let a=m(2);return S(a.fileName,i)||(a.fileName=i),u(i)}),r(),_(4,Ge,2,0,"div",28),r()}if(t&2){m();let e=x(6),n=m();s(3),v("ngModel",n.fileName),s(),c("ngIf",!n.fileName&&e.submitted)}}function Je(t,d){if(t&1&&(o(0,"div",25)(1,"strong"),l(2,"Selected File:"),r(),l(3),r()),t&2){let e=m(2);s(3),w(" ",e.selectedFile.name," ")}}function Xe(t,d){if(t&1){let e=g();o(0,"div",20)(1,"h5",21),l(2,"Attach a File"),r(),o(3,"button",22),b("click",function(){let i=p(e).$implicit;return u(i.dismiss("Cross click"))}),r()(),o(4,"div",23)(5,"form",24,2),b("ngSubmit",function(){p(e);let i=m();return u(i.onSubmit())}),o(7,"div",25)(8,"label",26),l(9,"Upload File"),r(),o(10,"input",27),b("change",function(i){p(e);let a=m();return u(a.onFileSelected(i))}),r(),_(11,ze,2,0,"div",28),r(),_(12,Ke,5,2,"div",29)(13,Je,4,1,"div",29),o(14,"button",30),l(15," Upload "),r()()()}if(t&2){let e=x(6),n=m();s(11),c("ngIf",!n.selectedFile&&e.submitted),s(),c("ngIf",n.selectedFile),s(),c("ngIf",n.selectedFile),s(),c("disabled",!n.selectedFile)}}var Re=(()=>{class t{constructor(){this.modalService=h(N),this.questionnaireService=h($),this.toastService=h(T),this.confirmService=h(A),this.selectedFile=null,this.fileName="",this.progress=0,this.currentAttachment={}}attachFile(e){this.modalService.open(e,{centered:!0})}onFileSelected(e){let n=e.target;n.files&&n.files.length>0&&(this.selectedFile=n.files[0],this.fileName=this.selectedFile.name)}onSubmit(){if(this.selectedFile){console.log("File ready for upload:",this.selectedFile);let e=new FormData;e.append("file",this.selectedFile),e.append("questionnaire_id",this.questionnaire.id),e.append("file_name",this.fileName),this.questionnaireService.addQuestionnaireDocument(e).subscribe(n=>{n.type===oe.UploadProgress?n.total&&(this.progress=Math.round(100*n.loaded/n.total),console.log(this.progress)):n.type===oe.Response&&(Object.assign(this.currentAttachment,n.body),this.toastService.success("File upload is successful"),this.questionnaire.attachments.push(this.currentAttachment.QuestionnaireDocument),this.modalService.dismissAll())},n=>{this.toastService.error("Upload failed!")})}}deleteQuestionnaireDocument(e){this.confirmService.confirm("Confirm Deletion",`Are you sure you want to delete ${e.file_name}?`).then(n=>{n&&this.questionnaireService.deleteQuestionnaireDocument(e.id).subscribe({next:i=>{console.log("Delete successful",i),this.toastService.success("Delete successful"),this.questionnaire.attachments=this.questionnaire.attachments.filter(a=>a.id!==e.id)},error:i=>{console.error("Error deleting product",i),this.toastService.success("Error deleting an attachment")}})})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=Q({type:t,selectors:[["app-questionnaire-documents"]],inputs:{questionnaire:"questionnaire"},standalone:!0,features:[M],decls:15,vars:2,consts:[["noAttachments",""],["content",""],["fileUploadForm","ngForm"],[1,"card","h-100"],[1,"card-body"],[1,"d-flex","justify-content-between","align-items-center","mb-3"],[1,"card-title","mb-0"],[1,"btn","btn-primary","btn-sm",3,"click"],[1,"bi","bi-file-earmark-plus"],[1,"row","my-3"],[1,"col-lg-12"],[1,"list-group","list-group-flush"],[4,"ngIf","ngIfElse"],["class","list-group-item d-flex justify-content-between align-items-center",4,"ngFor","ngForOf"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],[1,"bi","bi-paperclip","me-2"],["type","button",1,"btn","btn-danger","btn-sm",3,"click"],[1,"bi","bi-trash"],[1,"list-group-item","text-center","text-muted","py-4"],[1,"bi","bi-folder-x",2,"font-size","2rem"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"mt-3",3,"ngSubmit"],[1,"mb-3"],["for","file",1,"form-label"],["type","file","id","file","name","file","required","",1,"form-control",3,"change"],["class","text-danger",4,"ngIf"],["class","mb-3",4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"text-danger"],["for","filename",1,"form-label"],["type","text","id","filename","name","filename","placeholder","Enter a file name","required","",1,"form-control",3,"ngModelChange","ngModel"]],template:function(n,i){if(n&1){let a=g();o(0,"div",3)(1,"div",4)(2,"div",5)(3,"h5",6),l(4,"Attachments"),r(),o(5,"button",7),b("click",function(){p(a);let R=x(14);return u(i.attachFile(R))}),f(6,"i",8),r()(),o(7,"div",9)(8,"div",10)(9,"ul",11),_(10,He,2,1,"ng-container",12)(11,Ue,4,0,"ng-template",null,0,E),r()()()()(),_(13,Xe,16,4,"ng-template",null,1,E)}if(n&2){let a=x(12);s(10),c("ngIf",i.questionnaire.documents.length>0)("ngIfElse",a)}},dependencies:[k,K,U,P,z,I,V,G,L,D,q,H,F,O,W]})}}return t})();function Ye(t,d){if(t&1){let e=g();o(0,"button",14),b("click",function(){p(e);let i=m(),a=x(23);return u(i.addProduct(a))}),f(1,"i",15),r()}}function Ze(t,d){if(t&1){let e=g();o(0,"button",18),b("click",function(){p(e);let i=m().$implicit,a=m(2);return u(a.deleteQuestionnaireProduct(i))}),f(1,"i",19),r()}}function et(t,d){if(t&1&&(o(0,"tr")(1,"td"),l(2),r(),o(3,"td"),l(4),r(),o(5,"td"),_(6,Ze,2,0,"button",17),r()()),t&2){let e=d.$implicit,n=m(2);s(2),C(e.code),s(2),C(e.title),s(2),c("ngIf",!n.questionnaire.isEditing)}}function tt(t,d){if(t&1&&(B(0),_(1,et,7,3,"tr",16),j()),t&2){let e=m();s(),c("ngForOf",e.questionnaire.products)}}function it(t,d){t&1&&(o(0,"tr")(1,"td",20),f(2,"i",21),o(3,"div"),l(4,"No products available"),r()()())}function nt(t,d){if(t&1&&(o(0,"option",34),l(1),r()),t&2){let e=d.$implicit;c("value",e.id),s(),w(" ",e.title," ")}}function ot(t,d){t&1&&(o(0,"div",35),l(1," Please select a product. "),r())}function rt(t,d){if(t&1){let e=g();o(0,"div",22)(1,"h5",23),l(2,"Add a Product"),r(),o(3,"button",24),b("click",function(){let i=p(e).$implicit;return u(i.dismiss("Cross click"))}),r()(),o(4,"div",25)(5,"form",26,2),b("ngSubmit",function(){p(e);let i=x(6),a=m();return u(a.onSubmit(i))}),o(7,"div",27)(8,"label",28),l(9,"Product"),r(),o(10,"select",29,3),y("ngModelChange",function(i){p(e);let a=m();return S(a.productModel.product_id,i)||(a.productModel.product_id=i),u(i)}),o(12,"option",30),l(13,"Select a product"),r(),_(14,nt,2,2,"option",31),r(),_(15,ot,2,0,"div",32),r(),o(16,"button",33),l(17," Add Product "),r()()()}if(t&2){let e=x(6),n=x(11),i=m();s(10),v("ngModel",i.productModel.product_id),s(4),c("ngForOf",i.products),s(),c("ngIf",n.invalid&&n.touched),s(),c("disabled",e.invalid)}}var Be=(()=>{class t{constructor(){this.modalService=h(N),this.productService=h(ve),this.questionnaireService=h($),this.toastService=h(T),this.confirmService=h(A),this.productModel={product_id:"",questionnaire_id:""},this.products=[]}ngOnInit(){this.productModel.questionnaire_id=this.questionnaire.id,this.loadProducts()}loadProducts(){this.productService.getProducts().subscribe({next:e=>{this.products=e.data.products,console.log(this.products)}})}addProduct(e){this.modalService.open(e,{centered:!0})}onSubmit(e){e.valid&&(console.log("Form Submitted!",this.productModel),this.questionnaireService.addQuestionnaireProduct(this.productModel).subscribe({next:n=>{console.log(n),this.toastService.success(n.message),this.productModel={product_id:"",questionnaire_id:this.questionnaire.id},this.modalService.dismissAll(),this.questionnaire.products.push(n.questionnaireProduct)},error:n=>{console.log(n)}}))}deleteQuestionnaireProduct(e){this.confirmService.confirm("Confirm Deletion",`Are you sure you want to delete ${e.code}?`).then(n=>{n&&this.questionnaireService.deleteQuestionnaireProduct(e.id).subscribe({next:i=>{console.log("Delete successful",i),this.toastService.success("Delete successful"),this.questionnaire.products=this.questionnaire.products.filter(a=>a.id!==e.id)},error:i=>{console.error("Error deleting product",i),this.toastService.success("Error deleting product")}})})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=Q({type:t,selectors:[["app-questionnaire-products"]],inputs:{questionnaire:"questionnaire"},standalone:!0,features:[M],decls:24,vars:3,consts:[["noData",""],["content",""],["productForm","ngForm"],["product","ngModel"],[1,"card","h-100"],[1,"card-body"],[1,"d-flex","justify-content-between","align-items-center","mb-3"],[1,"card-title","mb-0"],["class","btn btn-primary btn-sm",3,"click",4,"ngIf"],[1,"row","my-3"],[1,"col-lg-12"],[1,"table-responsive"],[1,"table"],[4,"ngIf","ngIfElse"],[1,"btn","btn-primary","btn-sm",3,"click"],[1,"bi","bi-plus"],[4,"ngFor","ngForOf"],["class","btn btn-sm btn-danger",3,"click",4,"ngIf"],[1,"btn","btn-sm","btn-danger",3,"click"],[1,"bi","bi-trash"],["colspan","4",1,"text-center","text-muted","py-4"],[1,"bi","bi-emoji-frown",2,"font-size","2rem"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[3,"ngSubmit"],[1,"mb-3"],["for","product",1,"form-label"],["id","product","required","","name","product",1,"form-select",3,"ngModelChange","ngModel"],["value","","disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],["class","text-danger",4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"disabled"],[3,"value"],[1,"text-danger"]],template:function(n,i){if(n&1&&(o(0,"div",4)(1,"div",5)(2,"div",6)(3,"h5",7),l(4,"Products"),r(),_(5,Ye,2,0,"button",8),r(),o(6,"div",9)(7,"div",10)(8,"div",11)(9,"table",12)(10,"thead")(11,"tr")(12,"th"),l(13,"Code"),r(),o(14,"th"),l(15,"Title"),r(),o(16,"th"),l(17,"Action"),r()()(),o(18,"tbody"),_(19,tt,2,1,"ng-container",13)(20,it,5,0,"ng-template",null,0,E),r()()()()()()(),_(22,rt,18,4,"ng-template",null,1,E)),n&2){let a=x(21);s(5),c("ngIf",!i.questionnaire.isEditing),s(14),c("ngIf",i.questionnaire.products.length>0)("ngIfElse",a)}},dependencies:[k,K,X,Y,J,P,z,I,V,G,L,D,q,H,F,O,W]})}}return t})();var at=(t,d)=>d.id,st=()=>["/questionnaires/create"],lt=(t,d,e)=>({id:"Questionnaires-pagination",itemsPerPage:t,currentPage:d,totalItems:e});function ct(t,d){if(t&1&&(o(0,"option",14),l(1),r()),t&2){let e=d.$implicit;c("value",e),s(),w(" ",e," ")}}function mt(t,d){if(t&1&&(o(0,"span"),l(1),r()),t&2){let e=m().$implicit;s(),C(e.title)}}function dt(t,d){if(t&1){let e=g();o(0,"input",48),y("ngModelChange",function(i){p(e);let a=m().$implicit;return S(a.title,i)||(a.title=i),u(i)}),r()}if(t&2){let e=m().$implicit;v("ngModel",e.title),c("readonly",!e.isEditing)}}function pt(t,d){if(t&1&&f(0,"div",49),t&2){let e=m().$implicit;c("innerHTML",e.description,se)}}function ut(t,d){if(t&1){let e=g();o(0,"ckeditor",50),y("ngModelChange",function(i){p(e);let a=m().$implicit;return S(a.description,i)||(a.description=i),u(i)}),r()}if(t&2){let e=m().$implicit,n=m();v("ngModel",e.description),c("editor",n.Editor)("config",n.config)}}function _t(t,d){if(t&1&&(o(0,"span"),l(1),r()),t&2){let e=m().$implicit;s(),C(e.status)}}function gt(t,d){if(t&1){let e=g();o(0,"select",51),y("ngModelChange",function(i){p(e);let a=m().$implicit;return S(a.status,i)||(a.status=i),u(i)}),o(1,"option",14),l(2,"Open"),r(),o(3,"option",14),l(4,"Closed"),r()()}if(t&2){let e=m().$implicit;v("ngModel",e.status),s(),c("value","open"),s(2),c("value","closed")}}function ft(t,d){if(t&1&&(o(0,"span"),l(1),r()),t&2){let e=m().$implicit;s(),C(e.open_from)}}function bt(t,d){if(t&1){let e=g();o(0,"input",52),y("ngModelChange",function(i){p(e);let a=m().$implicit;return S(a.open_from,i)||(a.open_from=i),u(i)}),r()}if(t&2){let e=m().$implicit;v("ngModel",e.open_from),c("readonly",!e.isEditing)}}function ht(t,d){if(t&1&&(o(0,"span"),l(1),r()),t&2){let e=m().$implicit;s(),C(e.open_until)}}function xt(t,d){if(t&1){let e=g();o(0,"input",52),y("ngModelChange",function(i){p(e);let a=m().$implicit;return S(a.open_until,i)||(a.open_until=i),u(i)}),r()}if(t&2){let e=m().$implicit;v("ngModel",e.open_until),c("readonly",!e.isEditing)}}function Ct(t,d){if(t&1){let e=g();o(0,"button",53),b("click",function(){p(e);let i=m().$implicit,a=m();return u(a.toggleEdit(i))}),f(1,"i",54),r()}}function vt(t,d){if(t&1){let e=g();o(0,"button",55),b("click",function(){p(e);let i=m().$implicit,a=m();return u(a.saveQuestionnaire(i))}),f(1,"i",56),r()}}function St(t,d){if(t&1){let e=g();o(0,"tr")(1,"td"),_(2,mt,2,1,"span",31)(3,dt,1,2,"input",32),r(),o(4,"td"),_(5,pt,1,1,"div",33)(6,ut,1,3,"ckeditor",34),r(),o(7,"td"),_(8,_t,2,1,"span",31)(9,gt,5,3,"select",35),r(),o(10,"td"),_(11,ft,2,1,"span",31)(12,bt,1,2,"input",36),r(),o(13,"td"),_(14,ht,2,1,"span",31)(15,xt,1,2,"input",36),r(),o(16,"td")(17,"div",37),f(18,"input",38),o(19,"label",39),l(20),r()()(),o(21,"td",40)(22,"div",41),_(23,Ct,2,0,"button",42)(24,vt,2,0,"button",43),o(25,"button",44),b("click",function(){let i=p(e).$implicit,a=m();return u(a.deleteQuestionnaire(i))}),f(26,"i",45),r()()()(),o(27,"tr")(28,"td",46),f(29,"app-questionnaire-documents",47),r(),o(30,"td",46),f(31,"app-questionnaire-products",47),r()()}if(t&2){let e=d.$implicit;s(2),c("ngIf",!e.isEditing),s(),c("ngIf",e.isEditing),s(2),c("ngIf",!e.isEditing),s(),c("ngIf",e.isEditing),s(2),c("ngIf",!e.isEditing),s(),c("ngIf",e.isEditing),s(2),c("ngIf",!e.isEditing),s(),c("ngIf",e.isEditing),s(2),c("ngIf",!e.isEditing),s(),c("ngIf",e.isEditing),s(3),ie("id",e.id),c("checked",e.is_open_forever==="1"),s(),ie("for",e.id),s(),w(" ",e.is_open_forever==="1"?"Always Open":"Open Until "+e.open_until," "),s(3),c("ngIf",!e.isEditing),s(),c("ngIf",e.isEditing),s(4),c("colSpan",4),s(),c("questionnaire",e),s(),c("colSpan",3),s(),c("questionnaire",e)}}function yt(t,d){if(t&1){let e=g();o(0,"app-dynamic-form",57),ne(1,"async"),b("submitEvent",function(i){p(e);let a=m();return u(a.handleFormSubmit(i))}),r()}if(t&2){let e=m();c("questions",fe(1,3,e.questions$))("btnText","Filter")("perPage",2)}}var Si=(()=>{class t{constructor(e){this.questionnaireService=h($),this.toastService=h(T),this.confirmService=h(A),this.categoryService=h(Ce),this.modalService=h(N),this.questionnaires=[],this.page=1,this.perPage=10,this.total=0,this.pageSizes=[10,20,30,40,50],this.isLoading=!1,this.filters={},this.currentQuestionnaire={},this.Editor=Qe,this.config={height:"400px",toolbar:["undo","redo","|","bold","italic","link","|","heading","|","bulletedList","numberedList"],plugins:[Te,Ee,Fe,we,Ie,qe,Me,Pe,Ve],mention:{feeds:[{marker:"@",feed:["@user","@jane","@foo","@bar"],minimumCharacters:1}]}},this.progress=0,this.questions$=e.getCategoryFiltersQuestions()}ngOnInit(){this.getQuestionnaires()}getQuestionnaires(){this.questionnaireService.getQuestionnaires(this.page,this.perPage,this.filters).subscribe({next:e=>{this.questionnaires=e.data.questionnaires,this.total=e.data.total,console.log(this.questionnaires)}})}handlePageChange(e){this.page=e,this.getQuestionnaires()}handlePageSizeChange(e){this.perPage=e.target.value,this.page=1,this.getQuestionnaires()}handleFormSubmit(e){let n={title:e.formData.title,description:e.formData.description||""};this.filters=n,console.log(this.filters),this.page=1,this.getQuestionnaires()}toggleEdit(e){e.isEditing=!e.isEditing}saveQuestionnaire(e){e.isEditing=!1,console.log(e),this.questionnaireService.updateQuestionnaire(e.id,e).subscribe({next:n=>{Object.assign(e,n);let i=this.questionnaires.findIndex(a=>a.id===e.id);i!==-1&&(this.questionnaires[i]=e),this.toastService.success("Updated successfully")},error:n=>{console.log(n)}})}deleteQuestionnaire(e){this.confirmService.confirm("Confirm Deletion",`Are you sure you want to delete ${e.type}?`).then(n=>{n&&this.questionnaireService.deleteQuestionnaire(e.id).subscribe({next:i=>{console.log("Delete successful",i),this.toastService.success("Delete successful"),this.questionnaires=this.questionnaires.filter(a=>a.id!==e.id)},error:i=>{console.error("Error deleting questionnaire",i),this.toastService.success("Error deleting questionnaire")}})})}openModal(e,n){this.currentQuestionnaire=n,this.modalService.open(e,{centered:!0,size:"lg"})}static{this.\u0275fac=function(n){return new(n||t)(le(Z))}}static{this.\u0275cmp=Q({type:t,selectors:[["app-admin-questionnaire-list"]],viewQuery:function(n,i){if(n&1&&me(re,5),n&2){let a;de(a=pe())&&(i.dynamicFormComponent=a.first)}},standalone:!0,features:[ue([Z]),M],decls:56,vars:13,consts:[["popContent",""],[1,"container","min-vh-100","py-4"],[1,"card"],[1,"card-header","d-flex","align-items-center"],["aria-label","breadcrumb",1,"w-100"],[1,"breadcrumb","my-auto"],[1,"breadcrumb-item"],["href","#"],[1,"breadcrumb-item","active"],["aria-current","page",1,"breadcrumb-item","active"],[1,"card-body"],[1,"row","mb-3"],[1,"col-md-3","my-auto"],[1,"p-1",3,"change"],[3,"value"],[1,"col-md-9","text-end"],["role","group","aria-label","Basic example",1,"btn-group"],["type","button",1,"btn","btn-light",3,"ngbPopover","popoverTitle","autoClose"],[1,"bi","bi-filter","me-2"],[1,"btn","btn-light",3,"routerLink"],[1,"bi","bi-database-add","me-2"],[1,"row"],[1,"col-lg-12"],[1,"table-responsive"],[1,"table"],[1,"bg-primary"],["scope","col"],["scope","col",1,"text-end"],[1,"row","my-3"],[1,"col-lg-10","text-center","mx-auto"],["id","Questionnaires-pagination","previousLabel","Prev","nextLabel","Next",1,"bg-success",3,"pageChange","responsive"],[4,"ngIf"],["type","text","class","form-control","required","true",3,"ngModel","readonly","ngModelChange",4,"ngIf"],[3,"innerHTML",4,"ngIf"],["data","<p>Hello, world!</p>",3,"ngModel","editor","config","ngModelChange",4,"ngIf"],["class","form-control","required","",3,"ngModel","ngModelChange",4,"ngIf"],["type","date","class","form-control","required","true",3,"ngModel","readonly","ngModelChange",4,"ngIf"],[1,"form-check","form-switch"],["type","checkbox",1,"form-check-input",3,"id","checked"],[1,"form-check-label",3,"for"],[1,"text-end"],["role","group","aria-label","Edit and Delete Button Group",1,"btn-group"],["type","button","class","btn btn-primary btn-sm",3,"click",4,"ngIf"],["type","button","class","btn btn-success btn-sm",3,"click",4,"ngIf"],["type","button",1,"btn","btn-danger","btn-sm",3,"click"],[1,"bi","bi-trash"],[3,"colSpan"],[3,"questionnaire"],["type","text","required","true",1,"form-control",3,"ngModelChange","ngModel","readonly"],[3,"innerHTML"],["data","<p>Hello, world!</p>",3,"ngModelChange","ngModel","editor","config"],["required","",1,"form-control",3,"ngModelChange","ngModel"],["type","date","required","true",1,"form-control",3,"ngModelChange","ngModel","readonly"],["type","button",1,"btn","btn-primary","btn-sm",3,"click"],[1,"bi","bi-pencil-square"],["type","button",1,"btn","btn-success","btn-sm",3,"click"],[1,"bi","bi-check-lg"],[3,"submitEvent","questions","btnText","perPage"]],template:function(n,i){if(n&1){let a=g();o(0,"div",1)(1,"div",2)(2,"div",3)(3,"nav",4)(4,"ol",5)(5,"li",6)(6,"a",7),l(7,"Home"),r()(),o(8,"li",8),l(9,"Quality Assurance"),r(),o(10,"li",9),l(11," Questionnaires "),r()()()(),o(12,"div",10)(13,"div",11)(14,"div",12),l(15," Per Page: "),o(16,"select",13),b("change",function(R){return p(a),u(i.handlePageSizeChange(R))}),ee(17,ct,2,2,"option",14,ce),r()(),o(19,"div",15)(20,"div",16)(21,"button",17),f(22,"i",18),l(23,"Filter "),r(),o(24,"a",19),f(25,"i",20),l(26,"Add "),r()()()(),o(27,"div",21)(28,"div",22)(29,"div",23)(30,"table",24)(31,"thead")(32,"tr",25)(33,"th",26),l(34,"Title"),r(),o(35,"th",26),l(36,"Description"),r(),o(37,"th",26),l(38,"Status"),r(),o(39,"th",26),l(40,"Open From"),r(),o(41,"th",26),l(42,"Open Until"),r(),o(43,"th",26),l(44,"Always Receive Submissions?"),r(),o(45,"th",27),l(46,"Action"),r()()(),o(47,"tbody"),ee(48,St,32,20,null,null,at),ne(50,"paginate"),r()()()()(),o(51,"div",28)(52,"div",29)(53,"pagination-controls",30),b("pageChange",function(R){return p(a),u(i.handlePageChange(R))}),r()()()()()(),_(54,yt,2,5,"ng-template",null,0,E)}if(n&2){let a=x(55);s(17),te(i.pageSizes),s(4),c("ngbPopover",a)("popoverTitle","Filter Questionnaires")("autoClose","outside"),s(3),c("routerLink",_e(8,st)),s(24),te(be(50,5,i.questionnaires,ge(9,lt,i.perPage,i.page,i.total))),s(5),c("responsive",!0)}},dependencies:[Ae,Le,De,k,X,Y,U,J,P,I,V,he,re,L,ke,D,xe,q,F,O,W,ye,Se,Ne,Re,Be]})}}return t})();export{Si as QuestionnaireListComponent};
