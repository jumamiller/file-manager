"use strict";(self.webpackChunkadmin_development=self.webpackChunkadmin_development||[]).push([[299],{9299:(w,c,a)=>{a.r(c),a.d(c,{MinistryModule:()=>S});var l=a(5987),p=a(7037),t=a(7716),u=a(5384),o=a(3679),g=a(9344),m=a(8583);function f(e,r){if(1&e){const i=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td",33),t._uU(2),t.qZA(),t.TgZ(3,"td",33),t._uU(4),t.qZA(),t.TgZ(5,"td",33),t._uU(6),t.qZA(),t.TgZ(7,"td",33),t._uU(8),t.qZA(),t.TgZ(9,"td",34),t.TgZ(10,"button",35),t._UZ(11,"i",36),t.qZA(),t.qZA(),t.TgZ(12,"td",34),t.TgZ(13,"button",37),t.NdJ("click",function(){const d=t.CHM(i).$implicit;return t.oxw().onMinistrySelection(d.id)}),t._UZ(14,"i",38),t.qZA(),t.qZA(),t.TgZ(15,"td",34),t.TgZ(16,"button",39),t.NdJ("click",function(){const d=t.CHM(i).$implicit;return t.oxw().removeMinistry(d.id)}),t._UZ(17,"i",40),t.qZA(),t.qZA(),t.qZA()}if(2&e){const i=r.$implicit,n=r.index;t.xp6(2),t.Oqu(n+1),t.xp6(2),t.Oqu(i.name),t.xp6(2),t.Oqu(i.description),t.xp6(2),t.Oqu(i.budget)}}function Z(e,r){1&e&&(t.TgZ(0,"div",41),t._UZ(1,"div",42),t.qZA())}function b(e,r){if(1&e&&(t.TgZ(0,"button",43),t._uU(1,"Update Ministry"),t.qZA()),2&e){const i=t.oxw();t.Q6J("disabled",i.editForm.invalid)}}function h(e,r){1&e&&(t.TgZ(0,"button",44),t._uU(1,"updating..."),t.qZA())}const y=function(){return["/admin/ministry/add-new-kogi-ministry"]};let A=(()=>{class e{constructor(i,n,s,d){this.apiService=i,this.fb=n,this.toastrService=s,this.router=d,this.submitting=!1,this.ministries=[],this.loading=!0}ngOnInit(){this.editMinistryFormControls(),this.listOfMinistries()}editMinistryFormControls(){this.editForm=this.fb.group({name:[""],description:[""],budget:[""]})}get form(){return this.editForm.controls}onMinistrySelection(i){this.selectedMinistryId=i}listOfMinistries(){this.apiService.getMinistry().subscribe(i=>{this.ministries=i.data,this.loading=!1})}removeMinistry(i){this.apiService.removeMinistry(i).subscribe(n=>{this.toastrService.success(n.message,"Success"),this.reloadCurrentRoute()},n=>{this.toastrService.error(n.error.message,"Error")})}onMinistryUpdate(){this.submitting=!0,this.apiService.updateMinistry({name:this.form.name.value,description:this.form.description.value,budget:this.form.budget.value},this.selectedMinistryId).subscribe(n=>{this.toastrService.success(n.message,"Success"),this.submitting=!1,this.reloadCurrentRoute()},n=>{this.toastrService.error(n.error.message,"Error"),this.submitting=!1})}reloadCurrentRoute(){let i=this.router.url;this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>{this.router.navigate([i])})}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(u.s),t.Y36(o.qu),t.Y36(g._W),t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ministries-list"]],decls:58,vars:7,consts:[[1,"content","mat-elevation-z8"],[1,"citizens"],[1,"row"],[1,"col-md-8"],[1,"col-md-4"],[1,"btn","btn-danger","text-right","mt-2","ml-5",3,"routerLink"],[1,"table-responsive"],[1,"text-center","text-dark"],[1,"table","table-striped","table-hover","table-bordered"],["scope","col"],["scope","col",1,"text-center"],[4,"ngFor","ngForOf"],["class","d-flex justify-content-center my-1",4,"ngIf"],["data-backdrop","false","id","exampleModal","tabindex","-1","role","dialog","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","budget"],["type","text","id","budget","formControlName","budget",1,"form-control"],["for","description"],["cols","7","rows","7","id","description","formControlName","description",1,"form-control"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary"],["type","submit","class","btn btn-danger",3,"disabled",4,"ngIf"],["type","button","class","btn btn-success",4,"ngIf"],[1,""],[1,"text-center"],[1,"btn","btn-success"],[1,"fas","fa-eye"],["data-toggle","modal","data-target","#exampleModal",1,"btn","btn-primary",3,"click"],[1,"fas","fa-user-edit"],[1,"btn","btn-danger",3,"click"],[1,"fas","fa-trash"],[1,"d-flex","justify-content-center","my-1"],["role","status","aria-hidden","true",1,"spinner-border"],["type","submit",1,"btn","btn-danger",3,"disabled"],["type","button",1,"btn","btn-success"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"a",5),t._uU(6,"Add New Ministry"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"h4",7),t._uU(9,"Kogi Ministries"),t.qZA(),t.TgZ(10,"table",8),t.TgZ(11,"thead"),t.TgZ(12,"tr"),t.TgZ(13,"th",9),t._uU(14,"#"),t.qZA(),t.TgZ(15,"th",9),t._uU(16,"Name"),t.qZA(),t.TgZ(17,"th",9),t._uU(18,"Description"),t.qZA(),t.TgZ(19,"th",9),t._uU(20,"Budget"),t.qZA(),t.TgZ(21,"th",10),t._uU(22,"View"),t.qZA(),t.TgZ(23,"th",10),t._uU(24,"Edit"),t.qZA(),t.TgZ(25,"th",10),t._uU(26,"Remove"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"tbody"),t.YNc(28,f,18,4,"tr",11),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(29,Z,2,0,"div",12),t.qZA(),t.TgZ(30,"div",13),t.TgZ(31,"div",14),t.TgZ(32,"div",15),t.TgZ(33,"div",16),t.TgZ(34,"h5",17),t._uU(35,"Edit Ministry"),t.qZA(),t.TgZ(36,"button",18),t.TgZ(37,"span",19),t._uU(38,"\xd7"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(39,"div",20),t.TgZ(40,"form",21),t.NdJ("ngSubmit",function(){return n.onMinistryUpdate()}),t.TgZ(41,"div",22),t.TgZ(42,"label",23),t._uU(43,"Ministry Name"),t.qZA(),t._UZ(44,"input",24),t.qZA(),t.TgZ(45,"div",22),t.TgZ(46,"label",25),t._uU(47,"Ministry Budget"),t.qZA(),t._UZ(48,"input",26),t.qZA(),t.TgZ(49,"div",22),t.TgZ(50,"label",27),t._uU(51,"Description"),t.qZA(),t._UZ(52,"textarea",28),t.qZA(),t.TgZ(53,"div",29),t.TgZ(54,"button",30),t._uU(55,"Close"),t.qZA(),t.YNc(56,b,2,1,"button",31),t.YNc(57,h,2,0,"button",32),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(5),t.Q6J("routerLink",t.DdM(6,y)),t.xp6(23),t.Q6J("ngForOf",n.ministries),t.xp6(1),t.Q6J("ngIf",n.loading),t.xp6(11),t.Q6J("formGroup",n.editForm),t.xp6(16),t.Q6J("ngIf",!n.submitting),t.xp6(1),t.Q6J("ngIf",n.submitting))},directives:[l.yS,m.sg,m.O5,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}table[_ngcontent-%COMP%]{border:2px solid #333333;box-sizing:border-box}thead[_ngcontent-%COMP%]{background:#E1EAFB;font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}.table-totals[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}']}),e})(),M=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-single-ministry-details"]],decls:2,vars:0,template:function(i,n){1&i&&(t.TgZ(0,"p"),t._uU(1,"single-ministry-details works!"),t.qZA())},styles:[".content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}"]}),e})();function T(e,r){1&e&&(t.TgZ(0,"button",18),t._uU(1,"Add Ministry"),t.qZA())}function v(e,r){1&e&&(t.TgZ(0,"button",19),t._uU(1,"Adding Ministry..."),t.qZA())}let _=(()=>{class e{constructor(i,n,s){this.formBuilder=i,this.apiService=n,this.toastrService=s,this.submitting=!1}ngOnInit(){this.ministryFormControl()}ministryFormControl(){this.ministryForm=this.formBuilder.group({name:["",o.kI.required],description:["",o.kI.required],address:["",o.kI.required],budget:["",o.kI.required]})}get form(){return this.ministryForm.controls}onSubmit(){this.submitting=!0,this.apiService.addMinistry({budget:this.form.budget.value,description:this.form.description.value,name:this.form.name.value}).subscribe(n=>{this.toastrService.success(n.message,"Success"),this.submitting=!1},n=>{this.toastrService.error(n.error.message,"Error"),this.submitting=!1})}handleFileInput(i){const n=new FormData;n.append("image",i.target.files[0]),console.log(n),this.apiService.uploadMinistryImage(n).subscribe(s=>{console.log(s)},s=>{console.log(s)})}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(o.qu),t.Y36(u.s),t.Y36(g._W))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-new-ministry"]],decls:25,vars:3,consts:[[1,"content","mat-elevation-z8"],[1,"text-center","text-dark"],[1,"add-new-user"],[3,"formGroup","ngSubmit"],[1,"form-row","m-3"],[1,"col-md-4"],["for","name"],["type","text","id","name","formControlName","name","placeholder","","required","",1,"form-control"],["for","budget"],["type","number","id","budget","formControlName","budget","placeholder","","required","",1,"form-control"],["for","file"],["type","file","id","file","formControlName","banner_image","placeholder","","required","",1,"form-control-file",3,"change"],[1,"col-md-12"],["for","description"],["cols","7","rows","7","id","description","formControlName","description","required","",1,"form-control"],[1,"submission","m-4"],["class","btn btn-danger",4,"ngIf"],["class","btn btn-success",4,"ngIf"],[1,"btn","btn-danger"],[1,"btn","btn-success"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"h2",1),t._uU(2,"Add New Ministry"),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"form",3),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t.TgZ(7,"label",6),t._uU(8,"Name"),t.qZA(),t._UZ(9,"input",7),t.qZA(),t.TgZ(10,"div",5),t.TgZ(11,"label",8),t._uU(12,"Expected Annual Budget"),t.qZA(),t._UZ(13,"input",9),t.qZA(),t.TgZ(14,"div",5),t.TgZ(15,"label",10),t._uU(16,"Upload Image"),t.qZA(),t.TgZ(17,"input",11),t.NdJ("change",function(d){return n.handleFileInput(d)}),t.qZA(),t.qZA(),t.TgZ(18,"div",12),t.TgZ(19,"label",13),t._uU(20,"Description"),t.qZA(),t._UZ(21,"textarea",14),t.qZA(),t.qZA(),t.TgZ(22,"div",15),t.YNc(23,T,2,0,"button",16),t.YNc(24,v,2,0,"button",17),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(4),t.Q6J("formGroup",n.ministryForm),t.xp6(19),t.Q6J("ngIf",!n.submitting),t.xp6(1),t.Q6J("ngIf",n.submitting))},directives:[o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,o.Q7,o.wV,m.O5],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}label[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:20px;line-height:36px;color:#000}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:27px;color:#b7b7b7}']}),e})();var q=a(8668);const x=[{path:"",component:p.k,canActivate:[q.a],children:[{path:"kogi-ministries-list",component:A},{path:"kogi-ministry-list/ministry-details",component:M},{path:"add-new-kogi-ministry",component:_}]}];let C=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(x)],l.Bz]}),e})();var U=a(4466);let S=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[C,U.m]]}),e})()}}]);