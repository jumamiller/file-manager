"use strict";(self.webpackChunkadmin_development=self.webpackChunkadmin_development||[]).push([[950],{1950:(P,c,a)=>{a.r(c),a.d(c,{MinistryModule:()=>w});var p=a(5987),u=a(7037),t=a(7716),g=a(5384),d=a(8583);function m(n,o){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td",13),t._uU(2),t.qZA(),t.TgZ(3,"td",13),t._uU(4),t.qZA(),t.TgZ(5,"td",13),t._uU(6),t.qZA(),t.TgZ(7,"td",13),t._uU(8),t.qZA(),t.TgZ(9,"td",13),t._uU(10),t.qZA(),t.TgZ(11,"td",14),t.TgZ(12,"button",15),t._UZ(13,"i",16),t.qZA(),t.qZA(),t.TgZ(14,"td",14),t.TgZ(15,"button",17),t._UZ(16,"i",18),t.qZA(),t.qZA(),t.TgZ(17,"td",14),t.TgZ(18,"button",19),t._UZ(19,"i",20),t.qZA(),t.qZA(),t.qZA()),2&n){const e=o.$implicit,i=o.index;t.xp6(2),t.Oqu(i+1),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.description),t.xp6(2),t.Oqu(e.budget),t.xp6(2),t.Oqu(e.address)}}function f(n,o){1&n&&(t.TgZ(0,"div",21),t._UZ(1,"div",22),t.qZA())}const Z=function(){return["/admin/ministry/add-new-kogi-ministry"]};let h=(()=>{class n{constructor(e){this.apiService=e,this.ministries=[],this.loading=!0}ngOnInit(){this.listOfMinistries()}listOfMinistries(){this.apiService.getMinistry().subscribe(e=>{this.ministries=e.data,this.loading=!1})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-ministries-list"]],decls:32,vars:4,consts:[[1,"content","mat-elevation-z8"],[1,"citizens"],[1,"row"],[1,"col-md-8"],[1,"col-md-4"],[1,"btn","btn-danger","text-right","mt-2","ml-5",3,"routerLink"],[1,"table-responsive"],[1,"text-center","text-dark"],[1,"table","table-striped","table-hover","table-bordered"],["scope","col"],["scope","col",1,"text-center"],[4,"ngFor","ngForOf"],["class","d-flex justify-content-center my-1",4,"ngIf"],[1,""],[1,"text-center"],[1,"btn","btn-success"],[1,"fas","fa-eye"],[1,"btn","btn-primary"],[1,"fas","fa-user-edit"],[1,"btn","btn-danger"],[1,"fas","fa-trash"],[1,"d-flex","justify-content-center","my-1"],["role","status","aria-hidden","true",1,"spinner-border"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"a",5),t._uU(6,"Add New Ministry"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"h4",7),t._uU(9,"Kogi Ministries"),t.qZA(),t.TgZ(10,"table",8),t.TgZ(11,"thead"),t.TgZ(12,"tr"),t.TgZ(13,"th",9),t._uU(14,"#"),t.qZA(),t.TgZ(15,"th",9),t._uU(16,"Name"),t.qZA(),t.TgZ(17,"th",9),t._uU(18,"Description"),t.qZA(),t.TgZ(19,"th",9),t._uU(20,"Budget"),t.qZA(),t.TgZ(21,"th",9),t._uU(22,"Address"),t.qZA(),t.TgZ(23,"th",10),t._uU(24,"View"),t.qZA(),t.TgZ(25,"th",10),t._uU(26,"Edit"),t.qZA(),t.TgZ(27,"th",10),t._uU(28,"Remove"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"tbody"),t.YNc(30,m,20,5,"tr",11),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(31,f,2,0,"div",12),t.qZA()),2&e&&(t.xp6(5),t.Q6J("routerLink",t.DdM(3,Z)),t.xp6(25),t.Q6J("ngForOf",i.ministries),t.xp6(1),t.Q6J("ngIf",i.loading))},directives:[p.yS,d.sg,d.O5],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}table[_ngcontent-%COMP%]{border:2px solid #333333;box-sizing:border-box}thead[_ngcontent-%COMP%]{background:#E1EAFB;font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}.table-totals[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}']}),n})(),v=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-single-ministry-details"]],decls:2,vars:0,template:function(e,i){1&e&&(t.TgZ(0,"p"),t._uU(1,"single-ministry-details works!"),t.qZA())},styles:[".content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}"]}),n})();var s=a(3679),b=a(9344),y=a(7469);class A{constructor(o){this.file=o,this.name=o.name,this.isUploading=!1,this.progress=0}}let T=(()=>{class n{constructor(){this.files=[],this.mouseOver=new t.vpe}onDragEnter(e){this.mouseOver.emit(!0),this.preventAndStop(e)}onDragLeave(e){this.mouseOver.emit(!1)}onDrop(e){const i=this.getDataTransfer(e);!i||(this.extractFiles(i.files),this.preventAndStop(e),this.mouseOver.emit(!1))}getDataTransfer(e){return e.dataTransfer?e.dataTransfer:e.originalEvent.dataTransfer}extractFiles(e){for(const i in Object.getOwnPropertyNames(e)){const r=e[i];if(this.canBeUploaded(r)){const l=new A(r);this.files.push(l)}}console.log(this.files)}canBeUploaded(e){return!(this.alreadyDropped(e.name)||!this.isImage(e.type))}preventAndStop(e){e.preventDefault(),e.stopPropagation()}alreadyDropped(e){for(const i of this.files)if(i.name===e)return console.log(`The file ${e} was already dropped`),!0;return!1}isImage(e){return""!==e&&void 0!==e&&e.startsWith("image")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=t.lG2({type:n,selectors:[["","appNgDropFiles",""]],hostBindings:function(e,i){1&e&&t.NdJ("dragover",function(l){return i.onDragEnter(l)})("dragleave",function(l){return i.onDragLeave(l)})("drop",function(l){return i.onDrop(l)})},inputs:{files:"files"},outputs:{mouseOver:"mouseOver"}}),n})();const _=function(n){return{width:n}};function q(n,o){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"number"),t.qZA(),t.TgZ(6,"td"),t.TgZ(7,"div",11),t._UZ(8,"div",12),t.qZA(),t.qZA(),t.qZA()),2&n){const e=o.$implicit;t.xp6(2),t.Oqu(e.name),t.xp6(2),t.hij("",t.xi3(5,3,e.file.size/1024/1024,".2-2")," MB"),t.xp6(4),t.Q6J("ngStyle",t.VKq(6,_,e.progress+"%"))}}const M=function(n){return{"file-over":n}};let U=(()=>{class n{constructor(e){this.photoUploadService=e,this.files=[],this.isOverDrop=!1}ngOnInit(){}upload(){this.photoUploadService.uploadImages(this.files)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(y.M))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-upload"]],decls:27,vars:6,consts:[[1,"row"],[1,"col-md-4"],["appNgDropFiles","",1,"well","drop-zone",3,"files","ngClass","mouseOver"],["src","../../../assets/drop-images.png","alt","drop-images"],[1,"col-md-8"],[1,"btn","btn-success","mr-2",3,"disabled","click"],[1,"btn","btn-danger",3,"click"],[1,"table-responsive"],[1,"table","table-striped","table-hover"],[1,"thead=dark"],[4,"ngFor","ngForOf"],[1,"progress"],["role","progressbar",1,"progress-bar",3,"ngStyle"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h3"),t._uU(3,"Select files"),t.qZA(),t.TgZ(4,"div",2),t.NdJ("mouseOver",function(l){return i.isOverDrop=l}),t.TgZ(5,"h4"),t._uU(6,"Drop here your images"),t.qZA(),t._UZ(7,"img",3),t.qZA(),t.qZA(),t.TgZ(8,"div",4),t.TgZ(9,"h4"),t._uU(10,"Load files"),t.qZA(),t.TgZ(11,"button",5),t.NdJ("click",function(){return i.upload()}),t._uU(12,"Upload to Ministry"),t.qZA(),t.TgZ(13,"button",6),t.NdJ("click",function(){return i.files=[]}),t._uU(14,"Clean all"),t.qZA(),t.TgZ(15,"div",7),t.TgZ(16,"table",8),t.TgZ(17,"thead",9),t.TgZ(18,"tr"),t.TgZ(19,"th"),t._uU(20,"File Name"),t.qZA(),t.TgZ(21,"th"),t._uU(22,"Size"),t.qZA(),t.TgZ(23,"th"),t._uU(24,"Progress"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"tbody"),t.YNc(26,q,9,8,"tr",10),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(4),t.Q6J("files",i.files)("ngClass",t.VKq(4,M,i.isOverDrop)),t.xp6(7),t.Q6J("disabled",0===i.files.length),t.xp6(15),t.Q6J("ngForOf",i.files))},directives:[T,d.mk,d.sg,d.PC],pipes:[d.JJ],styles:[".main-container[_ngcontent-%COMP%]{margin-top:40px}.drop-zone[_ngcontent-%COMP%]{border:dotted 3px lightgray;opacity:.5;color:#666;text-align:center}.file-over[_ngcontent-%COMP%]{border:dotted 3px dodgerblue}.table[_ngcontent-%COMP%]{margin-top:30px}.text-green[_ngcontent-%COMP%]{color:green}"]}),n})();function C(n,o){1&n&&(t.TgZ(0,"button",16),t._uU(1,"Add Ministry"),t.qZA())}function x(n,o){1&n&&(t.TgZ(0,"button",17),t._uU(1,"Adding Ministry..."),t.qZA())}let O=(()=>{class n{constructor(e,i,r){this.formBuilder=e,this.apiService=i,this.toastrService=r,this.submitting=!1}ngOnInit(){this.ministryFormControl()}ministryFormControl(){this.ministryForm=this.formBuilder.group({name:["",s.kI.required],description:["",s.kI.required],address:["",s.kI.required],budget:["",s.kI.required]})}get form(){return this.ministryForm.controls}onSubmit(){this.submitting=!0,this.apiService.addMinistry({budget:this.form.budget.value,description:this.form.description.value,name:this.form.name.value},this.formData).subscribe(i=>{this.toastrService.success(i.message,"Success"),this.submitting=!1},i=>{this.toastrService.error(i.error.message,"Error"),this.submitting=!1})}handleFileInput(e){let i=new FormData;i.append("banner_image",e.target.files[0]),this.apiService.uploadMinistryImage(i).subscribe(r=>{this.toastrService.success(r.message,"Success"),this.submitting=!1},r=>{console.log(r),this.toastrService.error(r.error.message,"Error"),this.submitting=!1})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s.qu),t.Y36(g.s),t.Y36(b._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-new-ministry"]],decls:22,vars:3,consts:[[1,"content","mat-elevation-z8"],[1,"text-center","text-dark"],[1,"add-new-user"],[3,"formGroup","ngSubmit"],[1,"form-row","m-3"],[1,"col-md-6"],["for","name"],["type","text","id","name","formControlName","name","placeholder","","required","",1,"form-control"],["for","budget"],["type","number","id","budget","formControlName","budget","placeholder","","required","",1,"form-control"],[1,"col-md-12"],["for","description"],["cols","7","rows","7","id","description","formControlName","description","required","",1,"form-control"],[1,"submission","m-4"],["class","btn btn-danger",4,"ngIf"],["class","btn btn-success",4,"ngIf"],[1,"btn","btn-danger"],[1,"btn","btn-success"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h2",1),t._uU(2,"Add New Ministry"),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"form",3),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t.TgZ(7,"label",6),t._uU(8,"Name"),t.qZA(),t._UZ(9,"input",7),t.qZA(),t.TgZ(10,"div",5),t.TgZ(11,"label",8),t._uU(12,"Expected Annual Budget"),t.qZA(),t._UZ(13,"input",9),t.qZA(),t.TgZ(14,"div",10),t.TgZ(15,"label",11),t._uU(16,"Description"),t.qZA(),t._UZ(17,"textarea",12),t.qZA(),t.qZA(),t.TgZ(18,"div",13),t.YNc(19,C,2,0,"button",14),t.YNc(20,x,2,0,"button",15),t.qZA(),t.qZA(),t._UZ(21,"app-upload"),t.qZA(),t.qZA()),2&e&&(t.xp6(4),t.Q6J("formGroup",i.ministryForm),t.xp6(15),t.Q6J("ngIf",!i.submitting),t.xp6(1),t.Q6J("ngIf",i.submitting))},directives:[s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,s.Q7,s.wV,d.O5,U],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}label[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:20px;line-height:36px;color:#000}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:27px;color:#b7b7b7}']}),n})();var D=a(8668);const F=[{path:"",component:u.k,canActivate:[D.a],children:[{path:"kogi-ministries-list",component:h},{path:"kogi-ministry-list/ministry-details",component:v},{path:"add-new-kogi-ministry",component:O}]}];let N=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.Bz.forChild(F)],p.Bz]}),n})();var S=a(4466);let w=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[N,S.m]]}),n})()}}]);