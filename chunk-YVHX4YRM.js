import"./chunk-BYXBJQAS.js";import{b as Q,c as G}from"./chunk-BR4DLS2C.js";import{a as K}from"./chunk-SFKBN2CK.js";import{a as Te}from"./chunk-TLK6SMY5.js";import{a as Ce}from"./chunk-UUK2MEKI.js";import{a as z}from"./chunk-ZXEL4EV3.js";import{b as B,c as We,d as U,f as H,h as qe,i as Re,j as je,k as Oe}from"./chunk-KH62GCST.js";import{a as oe,b as Z}from"./chunk-MUSGDK5O.js";import{a as Ee,b as we,c as Me,d as Ve,e as Ie,f as Fe,g as Le,h as ke,i as Pe,j as Ne,k as De,l as Ae}from"./chunk-6EW4IUTA.js";import{i as N}from"./chunk-SPF45QKE.js";import{c as D,e as A,f as W,h as q,j as R,k as j,l as ve,r as Se,s as X,t as Y,u as ye,v as O,x as $}from"./chunk-Y5TDRMM2.js";import"./chunk-TU2ZNCML.js";import{a as be,d as he}from"./chunk-63TX3NUI.js";import{b as re}from"./chunk-ZOPMU54Y.js";import{i as J,j as k,l as xe,o as P}from"./chunk-KALLYKT4.js";import{$b as pe,Ab as h,Bb as I,Cb as F,Eb as g,Jb as f,Kb as s,Qb as se,Rb as ce,Sb as me,Tb as x,Ub as d,Vb as y,Wa as ae,Wb as M,Yb as T,Za as l,Zb as v,_a as le,_b as S,ac as L,bc as _e,ec as ue,gc as ie,hc as ge,ic as fe,jc as w,la as C,nb as u,oa as V,pb as c,vb as de,wb as te,xb as ne,ya as p,yb as o,za as _,zb as r}from"./chunk-MLHGNWXV.js";function Qe(n,m){if(n&1){let e=g();o(0,"button",15),f("click",function(){p(e);let t=s(),a=x(25);return _(t.addproduct(a))}),h(1,"i",16),r()}}function Ge(n,m){if(n&1){let e=g();o(0,"button",19),f("click",function(){p(e);let t=s().$implicit,a=s(2);return _(a.deleteTenderProduct(t))}),h(1,"i",20),r()}}function Ke(n,m){if(n&1&&(o(0,"tr")(1,"td"),d(2),r(),o(3,"td"),d(4),r(),o(5,"td"),d(6),r(),o(7,"td"),u(8,Ge,2,0,"button",18),r()()),n&2){let e=m.$implicit,i=s(2);l(2),y(e.code),l(2),y(e.title),l(2),y(e.quantity),l(2),c("ngIf",!i.tender.isEditing&&i.tender.current_status==="Draft"||i.tender.current_status==="Initiated"||i.tender.current_status==="Submitted")}}function Je(n,m){if(n&1&&(I(0),u(1,Ke,9,4,"tr",17),F()),n&2){let e=s();l(),c("ngForOf",e.tender.products)}}function Xe(n,m){n&1&&(o(0,"tr")(1,"td",21),h(2,"i",22),o(3,"div"),d(4,"No products available"),r()()())}function Ye(n,m){if(n&1&&(o(0,"option",37),d(1),r()),n&2){let e=m.$implicit;c("value",e.id),l(),M(" ",e.title," ")}}function Ze(n,m){n&1&&(o(0,"div",38),d(1," Please select a product. "),r())}function et(n,m){n&1&&(o(0,"div",38),d(1," Quantity is required and must be a positive number. "),r())}function tt(n,m){if(n&1){let e=g();o(0,"div",23)(1,"h5",24),d(2,"Add a Product"),r(),o(3,"button",25),f("click",function(){let t=p(e).$implicit;return _(t.dismiss("Cross click"))}),r()(),o(4,"div",26)(5,"form",27,2),f("ngSubmit",function(){p(e);let t=x(6),a=s();return _(a.onSubmit(t))}),o(7,"div",28)(8,"label",29),d(9,"Product"),r(),o(10,"select",30,3),S("ngModelChange",function(t){p(e);let a=s();return v(a.productModel.product_id,t)||(a.productModel.product_id=t),_(t)}),o(12,"option",31),d(13,"Select a product"),r(),u(14,Ye,2,2,"option",32),r(),u(15,Ze,2,0,"div",33),r(),o(16,"div",28)(17,"label",34),d(18,"Quantity"),r(),o(19,"input",35,4),S("ngModelChange",function(t){p(e);let a=s();return v(a.productModel.quantity,t)||(a.productModel.quantity=t),_(t)}),r(),u(21,et,2,0,"div",33),r(),o(22,"button",36),d(23," Add Product "),r()()()}if(n&2){let e=x(6),i=x(11),t=x(20),a=s();l(10),T("ngModel",a.productModel.product_id),l(4),c("ngForOf",a.products),l(),c("ngIf",i.invalid&&i.touched),l(4),T("ngModel",a.productModel.quantity),l(2),c("ngIf",t.invalid&&t.touched),l(),c("disabled",e.invalid)}}var He=(()=>{class n{constructor(){this.modalService=C(B),this.productService=C(Te),this.tenderService=C(K),this.toastService=C(N),this.confirmService=C(z),this.productModel={product_id:"",tender_id:"",quantity:0},this.products=[]}ngOnInit(){this.productModel.tender_id=this.tender.id,this.loadProducts()}loadProducts(){this.productService.getProducts().subscribe({next:e=>{this.products=e.data.products,console.log(this.products)}})}addproduct(e){this.modalService.open(e,{centered:!0})}onSubmit(e){e.valid&&(console.log("Form Submitted!",this.productModel),this.tenderService.addTenderProduct(this.productModel).subscribe({next:i=>{console.log(i),this.toastService.success(i.message),this.productModel={product_id:"",tender_id:this.tender.id,quantity:0},this.modalService.dismissAll(),this.tender.products.push(i.tenderProduct)},error:i=>{console.log(i)}}))}deleteTenderProduct(e){this.confirmService.confirm("Confirm Deletion",`Are you sure you want to delete ${e.code}?`).then(i=>{i&&this.tenderService.deleteTenderProduct(e.id).subscribe({next:t=>{console.log("Delete successful",t),this.toastService.success("Delete successful"),this.tender.products=this.tender.products.filter(a=>a.id!==e.id)},error:t=>{console.error("Error deleting product",t),this.toastService.success("Error deleting product")}})})}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=V({type:n,selectors:[["app-tender-products"]],inputs:{tender:"tender"},standalone:!0,features:[L],decls:26,vars:3,consts:[["noData",""],["content",""],["productForm","ngForm"],["product","ngModel"],["quantity","ngModel"],[1,"card","h-100"],[1,"card-body"],[1,"d-flex","justify-content-between","align-items-center","mb-3"],[1,"card-title","mb-0"],["class","btn btn-primary btn-sm",3,"click",4,"ngIf"],[1,"row","my-3"],[1,"col-lg-12"],[1,"table-responsive"],[1,"table"],[4,"ngIf","ngIfElse"],[1,"btn","btn-primary","btn-sm",3,"click"],[1,"bi","bi-plus"],[4,"ngFor","ngForOf"],["class","btn btn-sm btn-danger",3,"click",4,"ngIf"],[1,"btn","btn-sm","btn-danger",3,"click"],[1,"bi","bi-trash"],["colspan","4",1,"text-center","text-muted","py-4"],[1,"bi","bi-emoji-frown",2,"font-size","2rem"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"mt-3",3,"ngSubmit"],[1,"mb-3"],["for","product",1,"form-label"],["id","product","required","","name","product",1,"form-select",3,"ngModelChange","ngModel"],["value","","disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],["class","text-danger",4,"ngIf"],["for","quantity",1,"form-label"],["type","number","id","quantity","required","","name","quantity","min","1",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary",3,"disabled"],[3,"value"],[1,"text-danger"]],template:function(i,t){if(i&1&&(o(0,"div",5)(1,"div",6)(2,"div",7)(3,"h5",8),d(4,"Products"),r(),u(5,Qe,2,0,"button",9),r(),o(6,"div",10)(7,"div",11)(8,"div",12)(9,"table",13)(10,"thead")(11,"tr")(12,"th"),d(13,"Code"),r(),o(14,"th"),d(15,"Title"),r(),o(16,"th"),d(17,"Quantity"),r(),o(18,"th"),d(19,"Action"),r()()(),o(20,"tbody"),u(21,Je,2,1,"ng-container",14)(22,Xe,5,0,"ng-template",null,0,w),r()()()()()()(),u(24,tt,24,6,"ng-template",null,1,w)),i&2){let a=x(23);l(5),c("ngIf",!t.tender.isEditing&&t.tender.current_status==="Draft"||t.tender.current_status==="Initiated"||t.tender.current_status==="Submitted"),l(16),c("ngIf",t.tender.products.length>0)("ngIfElse",a)}},dependencies:[$,j,X,Y,D,ve,Se,A,W,O,ye,R,q,U,H,P,J,k,Q,G]})}}return n})();function nt(n,m){if(n&1){let e=g();o(0,"button",12),f("click",function(){p(e);let t=s(),a=x(13);return _(t.attachFile(a))}),h(1,"i",13),r()}}function it(n,m){if(n&1){let e=g();o(0,"button",18),f("click",function(){p(e);let t=s().$implicit,a=s(2);return _(a.deleteTenderAttachment(t))}),h(1,"i",19),r()}}function rt(n,m){if(n&1&&(o(0,"li",15)(1,"span"),h(2,"i",16),d(3),r(),u(4,it,2,0,"button",17),r()),n&2){let e=m.$implicit,i=s(2);l(3),y(e.file_name),l(),c("ngIf",!i.tender.isEditing&&i.tender.current_status==="Draft"||i.tender.current_status==="Initiated"||i.tender.current_status==="Submitted")}}function ot(n,m){if(n&1&&(I(0),u(1,rt,5,2,"li",14),F()),n&2){let e=s();l(),c("ngForOf",e.tender.attachments)}}function at(n,m){n&1&&(o(0,"li",20),h(1,"i",21),o(2,"div"),d(3,"No attachments available"),r()())}function lt(n,m){n&1&&(o(0,"div",33),d(1," Please select a file to upload. "),r())}function dt(n,m){n&1&&(o(0,"div",33),d(1," Please provide a filename. "),r())}function st(n,m){if(n&1){let e=g();o(0,"div",27)(1,"label",34),d(2,"File Name"),r(),o(3,"input",35),S("ngModelChange",function(t){p(e);let a=s(2);return v(a.fileName,t)||(a.fileName=t),_(t)}),r(),u(4,dt,2,0,"div",30),r()}if(n&2){s();let e=x(6),i=s();l(3),T("ngModel",i.fileName),l(),c("ngIf",!i.fileName&&e.submitted)}}function ct(n,m){if(n&1&&(o(0,"div",27)(1,"strong"),d(2,"Selected File:"),r(),d(3),r()),n&2){let e=s(2);l(3),M(" ",e.selectedFile.name," ")}}function mt(n,m){if(n&1){let e=g();o(0,"div",22)(1,"h5",23),d(2,"Attach a File"),r(),o(3,"button",24),f("click",function(){let t=p(e).$implicit;return _(t.dismiss("Cross click"))}),r()(),o(4,"div",25)(5,"form",26,2),f("ngSubmit",function(){p(e);let t=s();return _(t.onSubmit())}),o(7,"div",27)(8,"label",28),d(9,"Upload File"),r(),o(10,"input",29),f("change",function(t){p(e);let a=s();return _(a.onFileSelected(t))}),r(),u(11,lt,2,0,"div",30),r(),u(12,st,5,2,"div",31)(13,ct,4,1,"div",31),o(14,"button",32),d(15," Upload "),r()()()}if(n&2){let e=x(6),i=s();l(11),c("ngIf",!i.selectedFile&&e.submitted),l(),c("ngIf",i.selectedFile),l(),c("ngIf",i.selectedFile),l(),c("disabled",!i.selectedFile)}}var ze=(()=>{class n{constructor(){this.modalService=C(B),this.tenderService=C(K),this.toastService=C(N),this.confirmService=C(z),this.selectedFile=null,this.fileName="",this.progress=0,this.currentAttachment={}}attachFile(e){this.modalService.open(e,{centered:!0})}onFileSelected(e){let i=e.target;i.files&&i.files.length>0&&(this.selectedFile=i.files[0],this.fileName=this.selectedFile.name)}onSubmit(){if(this.selectedFile){console.log("File ready for upload:",this.selectedFile);let e=new FormData;e.append("file",this.selectedFile),e.append("tender_id",this.tender.id),e.append("file_name",this.fileName),this.tenderService.addTenderAttachment(e).subscribe(i=>{i.type===re.UploadProgress?i.total&&(this.progress=Math.round(100*i.loaded/i.total),console.log(this.progress)):i.type===re.Response&&(Object.assign(this.currentAttachment,i.body),this.toastService.success("File upload is successful"),this.tender.attachments.push(this.currentAttachment.tenderAttachment),this.modalService.dismissAll())},i=>{this.toastService.error("Upload failed!")})}}deleteTenderAttachment(e){this.confirmService.confirm("Confirm Deletion",`Are you sure you want to delete ${e.file_name}?`).then(i=>{i&&this.tenderService.deleteTenderAttachment(e.id).subscribe({next:t=>{console.log("Delete successful",t),this.toastService.success("Delete successful"),this.tender.attachments=this.tender.attachments.filter(a=>a.id!==e.id)},error:t=>{console.error("Error deleting product",t),this.toastService.success("Error deleting an attachment")}})})}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=V({type:n,selectors:[["app-tender-attachments"]],inputs:{tender:"tender"},standalone:!0,features:[L],decls:14,vars:3,consts:[["noAttachments",""],["content",""],["fileUploadForm","ngForm"],[1,"card","h-100"],[1,"card-body"],[1,"d-flex","justify-content-between","align-items-center","mb-3"],[1,"card-title","mb-0"],["class","btn btn-primary btn-sm",3,"click",4,"ngIf"],[1,"row","my-3"],[1,"col-lg-12"],[1,"list-group"],[4,"ngIf","ngIfElse"],[1,"btn","btn-primary","btn-sm",3,"click"],[1,"bi","bi-file-earmark-plus"],["class","list-group-item d-flex justify-content-between align-items-center",4,"ngFor","ngForOf"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],[1,"bi","bi-paperclip","me-2"],["type","button","class","btn btn-danger btn-sm",3,"click",4,"ngIf"],["type","button",1,"btn","btn-danger","btn-sm",3,"click"],[1,"bi","bi-trash"],[1,"list-group-item","text-center","text-muted","py-4"],[1,"bi","bi-folder-x",2,"font-size","2rem"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"mt-3",3,"ngSubmit"],[1,"mb-3"],["for","file",1,"form-label"],["type","file","id","file","name","file","required","",1,"form-control",3,"change"],["class","text-danger",4,"ngIf"],["class","mb-3",4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"text-danger"],["for","filename",1,"form-label"],["type","text","id","filename","name","filename","placeholder","Enter a file name","required","",1,"form-control",3,"ngModelChange","ngModel"]],template:function(i,t){if(i&1&&(o(0,"div",3)(1,"div",4)(2,"div",5)(3,"h5",6),d(4,"Attachments"),r(),u(5,nt,2,0,"button",7),r(),o(6,"div",8)(7,"div",9)(8,"ul",10),u(9,ot,2,1,"ng-container",11)(10,at,4,0,"ng-template",null,0,w),r()()()()(),u(12,mt,16,4,"ng-template",null,1,w)),i&2){let a=x(11);l(5),c("ngIf",!t.tender.isEditing&&t.tender.current_status==="Draft"||t.tender.current_status==="Initiated"||t.tender.current_status==="Submitted"),l(4),c("ngIf",t.tender.attachments.length>0)("ngIfElse",a)}},dependencies:[$,j,D,A,W,O,R,q,U,H,P,J,k,Q,G]})}}return n})();var pt=(n,m)=>m.id,_t=()=>["/tenders/create"],ut=(n,m,e)=>({id:"Tenders-pagination",itemsPerPage:n,currentPage:m,totalItems:e});function gt(n,m){if(n&1&&(o(0,"option",23),d(1),r()),n&2){let e=m.$implicit;c("value",e),l(),M(" ",e," ")}}function ft(n,m){if(n&1&&(o(0,"span"),d(1),r()),n&2){let e=s().$implicit;l(),y(e.reference_number)}}function xt(n,m){if(n&1){let e=g();o(0,"input",61),S("ngModelChange",function(t){p(e);let a=s().$implicit;return v(a.reference_number,t)||(a.reference_number=t),_(t)}),r()}if(n&2){let e=s().$implicit;T("ngModel",e.reference_number),c("readonly",!e.isEditing)}}function bt(n,m){if(n&1&&(o(0,"span"),d(1),r()),n&2){let e=s().$implicit;l(),y(e.title)}}function ht(n,m){if(n&1){let e=g();o(0,"input",61),S("ngModelChange",function(t){p(e);let a=s().$implicit;return v(a.title,t)||(a.title=t),_(t)}),r()}if(n&2){let e=s().$implicit;T("ngModel",e.title),c("readonly",!e.isEditing)}}function Ct(n,m){if(n&1&&h(0,"div",62),n&2){let e=s().$implicit;c("innerHTML",e.description,ae)}}function Tt(n,m){if(n&1){let e=g();o(0,"ckeditor",63),S("ngModelChange",function(t){p(e);let a=s().$implicit;return v(a.description,t)||(a.description=t),_(t)}),r()}if(n&2){let e=s().$implicit,i=s(2);T("ngModel",e.description),c("editor",i.Editor)("config",i.config)}}function vt(n,m){if(n&1&&(o(0,"span"),d(1),r()),n&2){let e=s().$implicit;l(),y(e.opening_date)}}function St(n,m){if(n&1){let e=g();o(0,"input",64),S("ngModelChange",function(t){p(e);let a=s().$implicit;return v(a.opening_date,t)||(a.opening_date=t),_(t)}),r()}if(n&2){let e=s().$implicit;T("ngModel",e.opening_date),c("readonly",!e.isEditing)}}function yt(n,m){if(n&1&&(o(0,"span"),d(1),r()),n&2){let e=s().$implicit;l(),y(e.opening_time)}}function Et(n,m){if(n&1){let e=g();o(0,"input",65),S("ngModelChange",function(t){p(e);let a=s().$implicit;return v(a.opening_time,t)||(a.opening_time=t),_(t)}),r()}if(n&2){let e=s().$implicit;T("ngModel",e.opening_time),c("readonly",!e.isEditing)}}function wt(n,m){if(n&1&&(o(0,"span"),d(1),r()),n&2){let e=s().$implicit;l(),y(e.closing_date)}}function Mt(n,m){if(n&1){let e=g();o(0,"input",64),S("ngModelChange",function(t){p(e);let a=s().$implicit;return v(a.closing_date,t)||(a.closing_date=t),_(t)}),r()}if(n&2){let e=s().$implicit;T("ngModel",e.closing_date),c("readonly",!e.isEditing)}}function Vt(n,m){if(n&1&&(o(0,"span"),d(1),r()),n&2){let e=s().$implicit;l(),y(e.closing_time)}}function It(n,m){if(n&1){let e=g();o(0,"input",65),S("ngModelChange",function(t){p(e);let a=s().$implicit;return v(a.closing_time,t)||(a.closing_time=t),_(t)}),r()}if(n&2){let e=s().$implicit;T("ngModel",e.closing_time),c("readonly",!e.isEditing)}}function Ft(n,m){if(n&1){let e=g();o(0,"li")(1,"a",72),f("click",function(){p(e);let t=s(2).$implicit,a=s(2);return _(a.toggleEdit(t))}),h(2,"i",73),d(3," Edit "),r()()}}function Lt(n,m){if(n&1){let e=g();o(0,"div",66)(1,"button",67),d(2," Action "),r(),o(3,"ul",68),u(4,Ft,4,0,"li",39),o(5,"li"),h(6,"hr",69),r(),o(7,"li")(8,"a",70),f("click",function(){p(e);let t=s().$implicit,a=s(2);return _(a.deleteTender(t))}),h(9,"i",71),d(10," Delete "),r()()()()}if(n&2){let e=s().$implicit;l(4),c("ngIf",!e.isEditing)}}function kt(n,m){if(n&1){let e=g();o(0,"button",74),f("click",function(){p(e);let t=s().$implicit,a=s(2);return _(a.saveTender(t))}),h(1,"i",75),d(2," Save "),r()}}function Pt(n,m){if(n&1){let e=g();o(0,"button",76),f("click",function(){p(e);let t=s().$implicit,a=s(2);return _(a.updateStatus(t.id,"Submitted"))}),d(1," Submit for Verification "),r()}}function Nt(n,m){if(n&1){let e=g();o(0,"button",76),f("click",function(){p(e);let t=s().$implicit,a=s(2);return _(a.reCreateTender(t))}),d(1," Modify and Re-submit Tender "),r()}}function Dt(n,m){if(n&1){let e=g();o(0,"button",77),f("click",function(){p(e);let t=s(3);return _(t.showRemarksInput=!t.showRemarksInput)}),d(1," Reject for Modifications "),r()}}function At(n,m){if(n&1){let e=g();o(0,"div",78)(1,"input",79),S("ngModelChange",function(t){p(e);let a=s(3);return v(a.remarks,t)||(a.remarks=t),_(t)}),r(),o(2,"button",80),f("click",function(){p(e);let t=s().$implicit,a=s(2);return _(a.rejectTender(t.id,a.remarks))}),d(3," Confirm Reject "),r()()}if(n&2){let e=s(3);l(),T("ngModel",e.remarks),l(),c("disabled",!e.remarks)}}function Wt(n,m){if(n&1){let e=g();o(0,"button",81),f("click",function(){p(e);let t=s().$implicit,a=s(2);return _(a.updateStatus(t.id,"Verified"))}),d(1," Verify Tender "),r()}}function qt(n,m){if(n&1){let e=g();o(0,"button",77),f("click",function(){p(e);let t=s().$implicit,a=s(2);return _(a.submitApproval(t.id,"rejected"))}),o(1,"span",82),d(2),r(),d(3,"Reject Tender "),r()}if(n&2){let e=s().$implicit;l(2),y(e.total_rejections)}}function Rt(n,m){if(n&1){let e=g();o(0,"button",83),f("click",function(){p(e);let t=s().$implicit,a=s(2);return _(a.submitApproval(t.id,"approved"))}),o(1,"span",82),d(2),r(),d(3,"Approve Tender "),r()}if(n&2){let e=s().$implicit;l(2),y(e.total_approvals)}}function jt(n,m){if(n&1){let e=g();o(0,"button",84),f("click",function(){p(e);let t=s().$implicit,a=s(2),b=x(63);return _(a.publishTender(b,t))}),d(1," Publish Tender "),r()}}function Ot(n,m){n&1&&(o(0,"button",85),d(1," Prepare a Bid "),r())}function $t(n,m){if(n&1&&(o(0,"tr")(1,"td"),u(2,ft,2,1,"span",39)(3,xt,1,2,"input",40),r(),o(4,"td"),u(5,bt,2,1,"span",39)(6,ht,1,2,"input",40),r(),o(7,"td"),u(8,Ct,1,1,"div",41)(9,Tt,1,3,"ckeditor",42),r(),o(10,"td"),u(11,vt,2,1,"span",39)(12,St,1,2,"input",43),r(),o(13,"td"),u(14,yt,2,1,"span",39)(15,Et,1,2,"input",44),r(),o(16,"td"),u(17,wt,2,1,"span",39)(18,Mt,1,2,"input",43),r(),o(19,"td"),u(20,Vt,2,1,"span",39)(21,It,1,2,"input",44),r(),o(22,"td")(23,"span",45),d(24),r()(),o(25,"td")(26,"span"),d(27),r()()(),o(28,"tr")(29,"td",46),h(30,"app-tender-attachments",47),r(),o(31,"td",46),h(32,"app-tender-products",47),r(),o(33,"td",48),u(34,Lt,11,1,"div",49)(35,kt,3,0,"button",50),r()(),o(36,"tr")(37,"td",51),d(38),r(),o(39,"td",52)(40,"div",53),u(41,Pt,2,0,"button",54)(42,Nt,2,0,"button",54)(43,Dt,2,0,"button",55)(44,At,4,2,"div",56)(45,Wt,2,0,"button",57)(46,qt,4,1,"button",55)(47,Rt,4,1,"button",58)(48,jt,2,0,"button",59)(49,Ot,2,0,"button",60),r()()()),n&2){let e=m.$implicit,i=s(2);l(2),c("ngIf",!e.isEditing),l(),c("ngIf",e.isEditing),l(2),c("ngIf",!e.isEditing),l(),c("ngIf",e.isEditing),l(2),c("ngIf",!e.isEditing),l(),c("ngIf",e.isEditing),l(2),c("ngIf",!e.isEditing),l(),c("ngIf",e.isEditing),l(2),c("ngIf",!e.isEditing),l(),c("ngIf",e.isEditing),l(2),c("ngIf",!e.isEditing),l(),c("ngIf",e.isEditing),l(2),c("ngIf",!e.isEditing),l(),c("ngIf",e.isEditing),l(3),y(e.current_status),l(3),y(e.created_by_name),l(2),c("colSpan",3),l(),c("tender",e),l(),c("colSpan",5),l(),c("tender",e),l(2),c("ngIf",!e.isEditing&&e.current_status==="Draft"||e.current_status==="Initiated"||e.current_status==="Submitted"),l(),c("ngIf",e.isEditing),l(3),M(" ",e.reference_number," "),l(3),c("ngIf",e.current_status==="Draft"),l(),c("ngIf",e.current_status==="Rejected"),l(),c("ngIf",e.current_status==="Submitted"&&!i.showRemarksInput),l(),c("ngIf",i.showRemarksInput),l(),c("ngIf",e.current_status==="Submitted"&&!i.showRemarksInput),l(),c("ngIf",e.current_status==="Verified"),l(),c("ngIf",e.current_status==="Verified"),l(),c("ngIf",e.current_status==="Approved"),l(),c("ngIf",e.current_status==="Published")}}function Bt(n,m){if(n&1&&(I(0),te(1,$t,50,32,null,null,pt),ie(3,"paginate"),F()),n&2){let e=s();l(),ne(fe(3,0,e.tenders,ue(3,ut,e.perPage,e.page,e.total)))}}function Ut(n,m){n&1&&(o(0,"tr")(1,"td",86),h(2,"i",87),o(3,"div"),d(4,"No tenders available"),r()()())}function Ht(n,m){if(n&1){let e=g();o(0,"app-dynamic-form",88),ie(1,"async"),f("submitEvent",function(t){p(e);let a=s();return _(a.handleFormSubmit(t))}),r()}if(n&2){let e=s();c("questions",ge(1,3,e.questions$))("btnText","Filter")("perPage",2)}}function zt(n,m){n&1&&(o(0,"div",106),d(1," Opening Date is required "),r())}function Qt(n,m){n&1&&(o(0,"div",106),d(1," Opening Time is required "),r())}function Gt(n,m){n&1&&(o(0,"div",106),d(1," Closing Date is required "),r())}function Kt(n,m){n&1&&(o(0,"div",106),d(1," Closing Time is required "),r())}function Jt(n,m){n&1&&(o(0,"div",106),d(1," Ensure that the closing date/time is after the opening date/time. "),r())}function Xt(n,m){if(n&1){let e=g();o(0,"div",89)(1,"h4",90),d(2),r(),o(3,"button",91),f("click",function(){let t=p(e).$implicit;return _(t.dismiss("Cross click"))}),r()(),o(4,"div",92)(5,"form",93,3),f("ngSubmit",function(){p(e);let t=x(6),a=s();return _(a.onSubmit(t))}),o(7,"div",20)(8,"div",94)(9,"label",95),d(10,"Opening Date"),r(),o(11,"input",96,4),S("ngModelChange",function(t){p(e);let a=s();return v(a.selectedTender.opening_date,t)||(a.selectedTender.opening_date=t),_(t)}),r(),u(13,zt,2,0,"div",97),r(),o(14,"div",94)(15,"label",98),d(16,"Opening Time"),r(),o(17,"input",99,5),S("ngModelChange",function(t){p(e);let a=s();return v(a.selectedTender.opening_time,t)||(a.selectedTender.opening_time=t),_(t)}),r(),u(19,Qt,2,0,"div",97),r()(),o(20,"div",20)(21,"div",94)(22,"label",100),d(23,"Closing Date"),r(),o(24,"input",101,6),S("ngModelChange",function(t){p(e);let a=s();return v(a.selectedTender.closing_date,t)||(a.selectedTender.closing_date=t),_(t)}),r(),u(26,Gt,2,0,"div",97),r(),o(27,"div",94)(28,"label",102),d(29,"Closing Time"),r(),o(30,"input",103,7),S("ngModelChange",function(t){p(e);let a=s();return v(a.selectedTender.closing_time,t)||(a.selectedTender.closing_time=t),_(t)}),r(),u(32,Kt,2,0,"div",97),r()(),u(33,Jt,2,0,"div",97),o(34,"div",36)(35,"div",104)(36,"button",105),d(37," Publish Tender "),r()()()()()}if(n&2){let e=x(6),i=x(12),t=x(18),a=x(25),b=x(31),E=s();l(2),M("Publish: ",E.selectedTender.reference_number,""),l(9),T("ngModel",E.selectedTender.opening_date),l(2),c("ngIf",i.invalid&&i.touched),l(4),T("ngModel",E.selectedTender.opening_time),l(2),c("ngIf",t.invalid&&t.touched),l(5),T("ngModel",E.selectedTender.closing_date),l(2),c("ngIf",a.invalid&&a.touched),l(4),T("ngModel",E.selectedTender.closing_time),l(2),c("ngIf",b.invalid&&b.touched),l(),c("ngIf",e.invalid&&e.touched),l(3),c("disabled",!e.valid||!E.isClosingAfterOpening())}}var Xn=(()=>{class n{constructor(e){this.tenderService=C(K),this.toastService=C(N),this.confirmService=C(z),this.categoryService=C(Ce),this.modalService=C(B),this.route=C(be),this.tenders=[],this.page=1,this.perPage=1,this.total=0,this.pageSizes=[1,2,5,10,15],this.isLoading=!1,this.filters={},this.currentTender={},this.categories=[],this.categoriesLoading=!1,this.Editor=Ie,this.config={height:"400px",toolbar:["undo","redo","|","bold","italic","link","|","heading","|","bulletedList","numberedList"],plugins:[Pe,Me,Le,Ve,Ae,ke,Fe,Ne,De],mention:{feeds:[{marker:"@",feed:["@user","@jane","@foo","@bar"],minimumCharacters:1}]}},this.progress=0,this.tenderStatusList=[],this.showRemarksInput=!1,this.remarks="",this.selectedTender={},this.questions$=e.getCategoryFiltersQuestions()}ngOnInit(){this.categoriesLoading=!0,this.categoryService.getCategories().subscribe({next:e=>{e.data.categories.forEach(i=>this.categories.push({label:i.title,value:i.id})),this.categoriesLoading=!1}}),this.getTenderStatusList(),this.route.queryParams.subscribe(e=>{let i=e.status;i?this.filters.current_status_id=i:this.filters={},this.getTenders()})}getTenders(){this.total=0,this.tenderService.getTenders(this.page,this.perPage,this.filters).subscribe({next:e=>{this.tenders=e.data.tenders,this.total=e.data.total}})}handlePageChange(e){this.page=e,this.getTenders()}handlePageSizeChange(e){this.perPage=e.target.value,this.page=1,this.getTenders()}handleFormSubmit(e){let i={title:e.formData.title,description:e.formData.description||""};this.filters=i,console.log(this.filters),this.page=1,this.getTenders()}toggleEdit(e){e.isEditing=!e.isEditing}saveTender(e){e.isEditing=!1,console.log(e),this.tenderService.updateTender(e.id,e).subscribe({next:i=>{Object.assign(e,i);let t=this.tenders.findIndex(a=>a.id===e.id);t!==-1&&(this.tenders[t]=e),this.toastService.success("Updated successfully")},error:i=>{console.log(i)}})}deleteTender(e){this.confirmService.confirm("Confirm Deletion",`Are you sure you want to delete tender: ${e.reference_number}?`).then(i=>{i&&this.tenderService.deleteTender(e.id).subscribe({next:t=>{console.log("Delete successful",t),this.toastService.success("Delete successful"),this.tenders=this.tenders.filter(a=>a.id!==e.id)},error:t=>{console.error("Error deleting tender",t),this.toastService.success("Error deleting tender")}})})}getTenderStatusList(){this.tenderService.getTenderStatusList().subscribe({next:e=>{this.tenderStatusList=e.data.tenderStatuses}})}updateStatus(e,i,t=""){let a=this.getStatusId(i),b=this.tenders.find(E=>E.id===e);b?(console.log("Updated Tender:",b),this.confirmService.confirm("Confirm Status Change",`Are you sure you want to update tender: ${b.reference_number}?`).then(E=>{E&&this.tenderService.updateTender(e,{current_status_id:a,remarks:t}).subscribe({next:ee=>{console.log(ee),b.current_status_id=a,b.current_status=i,this.toastService.success("Status is updated successfully")},error:ee=>{console.log(ee),this.toastService.error("Status could not be updated")}})})):console.log("Tender not found.")}rejectTender(e,i){console.log(`Tender ID: ${e}, Remarks: ${i}`),this.remarks="",this.showRemarksInput=!1,this.updateStatus(e,"Rejected",i)}submitApproval(e,i){let t=this.tenders.find(a=>a.id===e);if(t){let a={tender_id:e,approval_type:i};this.tenderService.addTenderApproval(a).subscribe({next:b=>{console.log(b.total_rejections),t.total_approvals=b.total_approvals,t.total_rejections=b.total_rejections,t.total_approvals>=3&&(t.current_status="Approved",t.current_status_id=this.getStatusId("Approved")),t.total_rejections>=3&&(t.current_status="Rejected",t.current_status_id=this.getStatusId("Rejected"))},error:b=>{console.log(b)}})}}reCreateTender(e){let i={reference_number:e.reference_number,title:e.title,description:e.description,opening_date:e.opening_date,opening_time:e.opening_time,closing_date:e.closing_date,closing_time:e.closing_time,products:e.products,attachments:e.attachments};this.tenderService.addTender(i).subscribe({next:t=>{console.log(t),this.page=1,this.getTenders(),this.toastService.success("New tender with same data is created successfully.")},error:t=>{console.log(t),this.toastService.error("Some error occured.")}})}publishTender(e,i){this.selectedTender=i,this.modalService.open(e,{centered:!0,size:"lg"})}isClosingAfterOpening(){let e=new Date(`${this.selectedTender.opening_date}T${this.selectedTender.opening_time}`),i=new Date(`${this.selectedTender.closing_date}T${this.selectedTender.closing_time}`);return!isNaN(e.getTime())&&!isNaN(i.getTime())?i>e:!1}onSubmit(e){e.valid&&this.isClosingAfterOpening()?(console.log("Form submitted",this.selectedTender),this.selectedTender.current_status_id=this.getStatusId("Published"),this.tenderService.updateTender(this.selectedTender.id,this.selectedTender).subscribe({next:i=>{console.log(i)},error:i=>{console.log(i)}})):console.error("Form is invalid")}getStatusId(e){let i=this.tenderStatusList.find(t=>t.status===e);return i?i.id:void 0}openModal(e,i){this.currentTender=i,this.modalService.open(e,{centered:!0,size:"lg"})}static{this.\u0275fac=function(i){return new(i||n)(le(Z))}}static{this.\u0275cmp=V({type:n,selectors:[["app-admin-tender-list"]],viewQuery:function(i,t){if(i&1&&se(oe,5),i&2){let a;ce(a=me())&&(t.dynamicFormComponent=a.first)}},standalone:!0,features:[pe([Z]),L],decls:64,vars:8,consts:[["noData",""],["popContent",""],["publish",""],["tenderForm","ngForm"],["openingDate","ngModel"],["openingTime","ngModel"],["closingDate","ngModel"],["closingTime","ngModel"],[1,"container","min-vh-100","py-5"],[1,"row"],[1,"col-lg-12","mx-auto"],[1,"card","main-card"],[1,"card-header","d-flex","align-items-center"],["aria-label","breadcrumb",1,"w-100"],[1,"breadcrumb","my-auto"],[1,"breadcrumb-item"],["href","#"],[1,"breadcrumb-item","active"],["aria-current","page",1,"breadcrumb-item","active"],[1,"card-body"],[1,"row","mb-3"],[1,"col-md-3","my-auto"],[1,"p-1",3,"change"],[3,"value"],[1,"col-md-9","text-end"],["role","group","aria-label","Basic example",1,"btn-group"],["type","button",1,"btn","btn-light",3,"ngbPopover","popoverTitle","autoClose"],[1,"bi","bi-filter","me-2"],[1,"btn","btn-light",3,"routerLink"],[1,"bi","bi-database-add","me-2"],[1,"col-lg-12"],[1,"table-responsive"],[1,"table"],[1,"bg-primary"],["scope","col"],[4,"ngIf","ngIfElse"],[1,"row","my-3"],[1,"col-lg-10","text-center","mx-auto"],["id","Tenders-pagination","previousLabel","Prev","nextLabel","Next",1,"bg-success",3,"pageChange","responsive"],[4,"ngIf"],["type","text","class","form-control","required","true",3,"ngModel","readonly","ngModelChange",4,"ngIf"],[3,"innerHTML",4,"ngIf"],["data","<p>Hello, world!</p>",3,"ngModel","editor","config","ngModelChange",4,"ngIf"],["type","date","class","form-control","required","true",3,"ngModel","readonly","ngModelChange",4,"ngIf"],["type","time","class","form-control","required","true",3,"ngModel","readonly","ngModelChange",4,"ngIf"],[1,"badge","bg-primary"],[3,"colSpan"],[3,"tender"],[1,"text-end"],["class","btn-group","role","group","aria-label","View, Edit, and Delete Dropdown",4,"ngIf"],["type","button","class","btn btn-success btn-sm",3,"click",4,"ngIf"],[1,"bg-brown","text-white"],["colspan","8",1,"bg-light","text-end"],[1,"d-flex","justify-content-end","gap-2"],["type","button","class","btn btn-primary",3,"click",4,"ngIf"],["type","button","class","btn btn-danger",3,"click",4,"ngIf"],["class","d-flex flex-column",4,"ngIf"],["type","button","class","btn btn-warning",3,"click",4,"ngIf"],["type","button","class","btn btn-success",3,"click",4,"ngIf"],["type","button","class","btn btn-info",3,"click",4,"ngIf"],["type","button","class","btn btn-primary",4,"ngIf"],["type","text","required","true",1,"form-control",3,"ngModelChange","ngModel","readonly"],[3,"innerHTML"],["data","<p>Hello, world!</p>",3,"ngModelChange","ngModel","editor","config"],["type","date","required","true",1,"form-control",3,"ngModelChange","ngModel","readonly"],["type","time","required","true",1,"form-control",3,"ngModelChange","ngModel","readonly"],["role","group","aria-label","View, Edit, and Delete Dropdown",1,"btn-group"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-primary","dropdown-toggle"],[1,"dropdown-menu"],[1,"dropdown-divider"],[1,"dropdown-item","text-danger",3,"click"],[1,"bi","bi-trash"],[1,"dropdown-item",3,"click"],[1,"bi","bi-pencil-square"],["type","button",1,"btn","btn-success","btn-sm",3,"click"],[1,"bi","bi-check-lg","me-2"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],[1,"d-flex","flex-column"],["type","text","placeholder","Enter remarks","required","",1,"form-control","mb-2",3,"ngModelChange","ngModel"],["type","button",1,"btn","btn-danger",3,"click","disabled"],["type","button",1,"btn","btn-warning",3,"click"],[1,"badge","bg-light","text-dark","me-2"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-info",3,"click"],["type","button",1,"btn","btn-primary"],["colspan","9",1,"text-center","text-muted","py-4"],[1,"bi","bi-emoji-frown",2,"font-size","2rem"],[3,"submitEvent","questions","btnText","perPage"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],["novalidate","",3,"ngSubmit"],[1,"col-lg-6"],["for","openingDate"],["type","date","id","openingDate","name","openingDate","required","",1,"form-control",3,"ngModelChange","ngModel"],["class","error",4,"ngIf"],["for","openingTime"],["type","time","id","openingTime","name","openingTime","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","closingDate"],["type","date","id","closingDate","name","closingDate","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","closingTime"],["type","time","id","closingTime","name","closingTime","required","",1,"form-control",3,"ngModelChange","ngModel"],[1,"col-lg-12","text-end"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"error"]],template:function(i,t){if(i&1){let a=g();o(0,"div",8)(1,"div",9)(2,"div",10)(3,"div",11)(4,"div",12)(5,"nav",13)(6,"ol",14)(7,"li",15)(8,"a",16),d(9,"Home"),r()(),o(10,"li",17),d(11,"Procurement"),r(),o(12,"li",18),d(13," Tenders "),r()()()(),o(14,"div",19)(15,"div",20)(16,"div",21),d(17," Per Page: "),o(18,"select",22),f("change",function(E){return p(a),_(t.handlePageSizeChange(E))}),te(19,gt,2,2,"option",23,de),r()(),o(21,"div",24)(22,"div",25)(23,"button",26),h(24,"i",27),d(25,"Filter "),r(),o(26,"a",28),h(27,"i",29),d(28,"Add "),r()()()(),o(29,"div",9)(30,"div",30)(31,"div",31)(32,"table",32)(33,"thead")(34,"tr",33)(35,"th",34),d(36,"Reference Number"),r(),o(37,"th",34),d(38,"Title"),r(),o(39,"th",34),d(40,"Description"),r(),o(41,"th",34),d(42,"Opening Date"),r(),o(43,"th",34),d(44,"Opening Time"),r(),o(45,"th",34),d(46,"Closing Date"),r(),o(47,"th",34),d(48,"Closing Date"),r(),o(49,"th",34),d(50,"Current Status"),r(),o(51,"th",34),d(52,"Created By"),r()()(),o(53,"tbody"),u(54,Bt,4,7,"ng-container",35)(55,Ut,5,0,"ng-template",null,0,w),r()()()()(),o(57,"div",36)(58,"div",37)(59,"pagination-controls",38),f("pageChange",function(E){return p(a),_(t.handlePageChange(E))}),r()()()()()(),u(60,Ht,2,5,"ng-template",null,1,w),r()(),u(62,Xt,38,11,"ng-template",null,2,w)}if(i&2){let a=x(56),b=x(61);l(19),ne(t.pageSizes),l(4),c("ngbPopover",b)("popoverTitle","Filter Tenders")("autoClose","outside"),l(3),c("routerLink",_e(7,_t)),l(28),c("ngIf",t.tenders.length>0)("ngIfElse",a),l(5),c("responsive",!0)}},dependencies:[Oe,Re,je,$,j,X,Y,D,A,W,O,R,q,xe,oe,U,We,H,he,P,k,Q,G,we,Ee,qe,He,ze]})}}return n})();export{Xn as TenderListComponent};
