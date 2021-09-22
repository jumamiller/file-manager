"use strict";(self.webpackChunkadmin_development=self.webpackChunkadmin_development||[]).push([[299],{9299:(U,m,s)=>{s.r(m),s.d(m,{MinistryModule:()=>C});var l=s(5987),p=s(7037),t=s(7716),u=s(5384),g=s(9344),d=s(8583);function f(e,r){if(1&e){const i=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td",13),t._uU(2),t.qZA(),t.TgZ(3,"td",13),t._uU(4),t.qZA(),t.TgZ(5,"td",13),t._uU(6),t.qZA(),t.TgZ(7,"td",13),t._uU(8),t.qZA(),t.TgZ(9,"td",13),t._uU(10),t.qZA(),t.TgZ(11,"td",14),t.TgZ(12,"button",15),t._UZ(13,"i",16),t.qZA(),t.qZA(),t.TgZ(14,"td",14),t.TgZ(15,"button",17),t._UZ(16,"i",18),t.qZA(),t.qZA(),t.TgZ(17,"td",14),t.TgZ(18,"button",19),t.NdJ("click",function(){const c=t.CHM(i).$implicit;return t.oxw().removeMinistry(c.id)}),t._UZ(19,"i",20),t.qZA(),t.qZA(),t.qZA()}if(2&e){const i=r.$implicit,n=r.index;t.xp6(2),t.Oqu(n+1),t.xp6(2),t.Oqu(i.name),t.xp6(2),t.Oqu(i.description),t.xp6(2),t.Oqu(i.budget),t.xp6(2),t.Oqu(i.address)}}function Z(e,r){1&e&&(t.TgZ(0,"div",21),t._UZ(1,"div",22),t.qZA())}const h=function(){return["/admin/ministry/add-new-kogi-ministry"]};let y=(()=>{class e{constructor(i,n,a){this.apiService=i,this.toastrService=n,this.router=a,this.ministries=[],this.loading=!0}ngOnInit(){this.listOfMinistries()}listOfMinistries(){this.apiService.getMinistry().subscribe(i=>{this.ministries=i.data,this.loading=!1})}removeMinistry(i){this.apiService.removeMinistry(i).subscribe(n=>{this.toastrService.success(n.message,"Success"),this.reloadCurrentRoute()},n=>{this.toastrService.error(n.error.message,"Error")})}reloadCurrentRoute(){let i=this.router.url;this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>{this.router.navigate([i])})}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(u.s),t.Y36(g._W),t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ministries-list"]],decls:32,vars:4,consts:[[1,"content","mat-elevation-z8"],[1,"citizens"],[1,"row"],[1,"col-md-8"],[1,"col-md-4"],[1,"btn","btn-danger","text-right","mt-2","ml-5",3,"routerLink"],[1,"table-responsive"],[1,"text-center","text-dark"],[1,"table","table-striped","table-hover","table-bordered"],["scope","col"],["scope","col",1,"text-center"],[4,"ngFor","ngForOf"],["class","d-flex justify-content-center my-1",4,"ngIf"],[1,""],[1,"text-center"],[1,"btn","btn-success"],[1,"fas","fa-eye"],[1,"btn","btn-primary"],[1,"fas","fa-user-edit"],[1,"btn","btn-danger",3,"click"],[1,"fas","fa-trash"],[1,"d-flex","justify-content-center","my-1"],["role","status","aria-hidden","true",1,"spinner-border"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"a",5),t._uU(6,"Add New Ministry"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"h4",7),t._uU(9,"Kogi Ministries"),t.qZA(),t.TgZ(10,"table",8),t.TgZ(11,"thead"),t.TgZ(12,"tr"),t.TgZ(13,"th",9),t._uU(14,"#"),t.qZA(),t.TgZ(15,"th",9),t._uU(16,"Name"),t.qZA(),t.TgZ(17,"th",9),t._uU(18,"Description"),t.qZA(),t.TgZ(19,"th",9),t._uU(20,"Budget"),t.qZA(),t.TgZ(21,"th",9),t._uU(22,"Address"),t.qZA(),t.TgZ(23,"th",10),t._uU(24,"View"),t.qZA(),t.TgZ(25,"th",10),t._uU(26,"Edit"),t.qZA(),t.TgZ(27,"th",10),t._uU(28,"Remove"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"tbody"),t.YNc(30,f,20,5,"tr",11),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(31,Z,2,0,"div",12),t.qZA()),2&i&&(t.xp6(5),t.Q6J("routerLink",t.DdM(3,h)),t.xp6(25),t.Q6J("ngForOf",n.ministries),t.xp6(1),t.Q6J("ngIf",n.loading))},directives:[l.yS,d.sg,d.O5],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}table[_ngcontent-%COMP%]{border:2px solid #333333;box-sizing:border-box}thead[_ngcontent-%COMP%]{background:#E1EAFB;font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}.table-totals[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}']}),e})(),b=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-single-ministry-details"]],decls:2,vars:0,template:function(i,n){1&i&&(t.TgZ(0,"p"),t._uU(1,"single-ministry-details works!"),t.qZA())},styles:[".content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}"]}),e})();var o=s(3679);function A(e,r){1&e&&(t.TgZ(0,"button",18),t._uU(1,"Add Ministry"),t.qZA())}function v(e,r){1&e&&(t.TgZ(0,"button",19),t._uU(1,"Adding Ministry..."),t.qZA())}let T=(()=>{class e{constructor(i,n,a){this.formBuilder=i,this.apiService=n,this.toastrService=a,this.submitting=!1}ngOnInit(){this.ministryFormControl()}ministryFormControl(){this.ministryForm=this.formBuilder.group({name:["",o.kI.required],description:["",o.kI.required],address:["",o.kI.required],budget:["",o.kI.required]})}get form(){return this.ministryForm.controls}onSubmit(){this.submitting=!0,this.apiService.addMinistry({budget:this.form.budget.value,description:this.form.description.value,name:this.form.name.value}).subscribe(n=>{this.toastrService.success(n.message,"Success"),this.submitting=!1},n=>{this.toastrService.error(n.error.message,"Error"),this.submitting=!1})}handleFileInput(i){const n=new FormData;n.append("image",i.target.files[0]),console.log(n),this.apiService.uploadMinistryImage(n).subscribe(a=>{console.log(a)},a=>{console.log(a)})}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(o.qu),t.Y36(u.s),t.Y36(g._W))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-new-ministry"]],decls:25,vars:3,consts:[[1,"content","mat-elevation-z8"],[1,"text-center","text-dark"],[1,"add-new-user"],[3,"formGroup","ngSubmit"],[1,"form-row","m-3"],[1,"col-md-4"],["for","name"],["type","text","id","name","formControlName","name","placeholder","","required","",1,"form-control"],["for","budget"],["type","number","id","budget","formControlName","budget","placeholder","","required","",1,"form-control"],["for","file"],["type","file","id","file","formControlName","banner_image","placeholder","","required","",1,"form-control-file",3,"change"],[1,"col-md-12"],["for","description"],["cols","7","rows","7","id","description","formControlName","description","required","",1,"form-control"],[1,"submission","m-4"],["class","btn btn-danger",4,"ngIf"],["class","btn btn-success",4,"ngIf"],[1,"btn","btn-danger"],[1,"btn","btn-success"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"h2",1),t._uU(2,"Add New Ministry"),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"form",3),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t.TgZ(7,"label",6),t._uU(8,"Name"),t.qZA(),t._UZ(9,"input",7),t.qZA(),t.TgZ(10,"div",5),t.TgZ(11,"label",8),t._uU(12,"Expected Annual Budget"),t.qZA(),t._UZ(13,"input",9),t.qZA(),t.TgZ(14,"div",5),t.TgZ(15,"label",10),t._uU(16,"Upload Image"),t.qZA(),t.TgZ(17,"input",11),t.NdJ("change",function(c){return n.handleFileInput(c)}),t.qZA(),t.qZA(),t.TgZ(18,"div",12),t.TgZ(19,"label",13),t._uU(20,"Description"),t.qZA(),t._UZ(21,"textarea",14),t.qZA(),t.qZA(),t.TgZ(22,"div",15),t.YNc(23,A,2,0,"button",16),t.YNc(24,v,2,0,"button",17),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(4),t.Q6J("formGroup",n.ministryForm),t.xp6(19),t.Q6J("ngIf",!n.submitting),t.xp6(1),t.Q6J("ngIf",n.submitting))},directives:[o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,o.Q7,o.wV,d.O5],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}label[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:20px;line-height:36px;color:#000}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:27px;color:#b7b7b7}']}),e})();var M=s(8668);const q=[{path:"",component:p.k,canActivate:[M.a],children:[{path:"kogi-ministries-list",component:y},{path:"kogi-ministry-list/ministry-details",component:b},{path:"add-new-kogi-ministry",component:T}]}];let x=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(q)],l.Bz]}),e})();var _=s(4466);let C=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[x,_.m]]}),e})()}}]);