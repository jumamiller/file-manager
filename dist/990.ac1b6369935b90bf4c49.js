"use strict";(self.webpackChunkadmin_development=self.webpackChunkadmin_development||[]).push([[990],{2990:(w,m,i)=>{i.r(m),i.d(m,{CategoryModule:()=>B});var d=i(8583),c=i(3423),p=i(7037),C=i(8668),t=i(7716),a=i(3679);function Z(e,r){if(1&e&&(t.TgZ(0,"button",11),t._uU(1,"Add Category"),t.qZA()),2&e){const o=t.oxw();t.Q6J("disabled",o.categoryForm.invalid)}}function l(e,r){1&e&&(t.TgZ(0,"button",12),t._uU(1,"Processing New category..."),t.qZA())}let h=(()=>{class e{constructor(){this.loading=!0,this.submitting=!1}ngOnInit(){}onSubmit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-category"]],decls:13,vars:3,consts:[[1,"content","mat-elevation-z8"],[1,"text-center","text-dark"],[1,"add-new-user"],["enctype","multipart/form-data",3,"formGroup","ngSubmit"],[1,"form-row","m-3"],[1,"col-md-4"],["for","firstName"],["type","text","id","firstName","formControlName","firstName","placeholder","John","required","",1,"form-control"],[1,"submission","m-4","text-right"],["type","submit","class","btn btn-danger",3,"disabled",4,"ngIf"],["type","submit","class","btn btn-success",4,"ngIf"],["type","submit",1,"btn","btn-danger",3,"disabled"],["type","submit",1,"btn","btn-success"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"h2",1),t._uU(2,"Add New Government Official"),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"form",3),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t.TgZ(7,"label",6),t._uU(8,"First Name"),t.qZA(),t._UZ(9,"input",7),t.qZA(),t.qZA(),t.TgZ(10,"div",8),t.YNc(11,Z,2,1,"button",9),t.YNc(12,l,2,0,"button",10),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(4),t.Q6J("formGroup",n.categoryForm),t.xp6(7),t.Q6J("ngIf",!n.submitting),t.xp6(1),t.Q6J("ngIf",n.submitting))},directives:[a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,a.Q7,d.O5],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}label[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:20px;line-height:36px;color:#000}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:27px}']}),e})();var b=i(5384),_=i(9344),A=i(8562);function v(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td",27),t._uU(2),t.qZA(),t.TgZ(3,"td",27),t._uU(4),t.qZA(),t.TgZ(5,"td",27),t._uU(6),t.qZA(),t.TgZ(7,"td",28),t.TgZ(8,"button",29),t.NdJ("click",function(){const u=t.CHM(o).$implicit;return t.oxw().onCategoryClick(u)}),t._UZ(9,"i",30),t.qZA(),t.qZA(),t.TgZ(10,"td",28),t.TgZ(11,"button",31),t.NdJ("click",function(){const u=t.CHM(o).$implicit;return t.oxw().removeCategory(u.id)}),t._UZ(12,"i",32),t.qZA(),t.qZA(),t.qZA()}if(2&e){const o=r.$implicit,n=r.index;t.xp6(2),t.Oqu(n+1),t.xp6(2),t.Oqu(o.category_name),t.xp6(2),t.Oqu(o.category_description||"No description found")}}function T(e,r){1&e&&(t.TgZ(0,"div",33),t._UZ(1,"div",34),t.qZA())}function x(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"div",35),t.TgZ(1,"div",13),t.TgZ(2,"div",14),t.TgZ(3,"div",15),t.TgZ(4,"h1",36),t._uU(5),t.qZA(),t.TgZ(6,"button",17),t.TgZ(7,"span",18),t._uU(8,"\xd7"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",19),t.TgZ(10,"form",20),t.NdJ("ngSubmit",function(){return t.CHM(o),t.oxw().onCategoryEdit()}),t.TgZ(11,"div",21),t.TgZ(12,"label"),t._uU(13,"Name"),t.qZA(),t._UZ(14,"input",37),t.qZA(),t.TgZ(15,"div",21),t.TgZ(16,"label"),t._uU(17,"Description"),t.qZA(),t._UZ(18,"input",38),t.qZA(),t.TgZ(19,"div",24),t.TgZ(20,"button",25),t._uU(21,"Close"),t.qZA(),t.TgZ(22,"button",39),t._uU(23),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const o=t.oxw();t.xp6(5),t.Oqu(o.selectedCategory.category_name),t.xp6(5),t.Q6J("formGroup",o.editCategoryForm),t.xp6(4),t.Q6J("placeholder",o.selectedCategory.category_name),t.xp6(4),t.Q6J("placeholder",o.selectedCategory.category_description),t.xp6(5),t.hij("Update ",o.selectedCategory.category_name,"")}}function U(e,r){1&e&&(t.TgZ(0,"button",39),t._uU(1,"Add Category"),t.qZA())}function f(e,r){1&e&&(t.TgZ(0,"button",39),t._uU(1,"Adding New Category..."),t.qZA())}const F=[{path:"",component:p.k,canActivate:[C.a],children:[{path:"add-new-category",component:h},{path:"category-list",component:(()=>{class e{constructor(o,n,g,u,q){this.apiService=o,this.fb=n,this.toastrService=g,this.router=u,this.confirmationAlert=q,this.submitting=!1,this.loading=!0}ngOnInit(){this.getCategories(),this.editFormControls(),this.addNewCategoryControls()}getCategories(){this.apiService.getCategories().subscribe(o=>{this.categories=o.data,this.loading=!1},o=>{this.toastrService.error(o.error.message,"Error")})}addNewCategoryControls(){this.addNewCategoryForm=this.fb.group({category_name:[""],category_description:[""]})}editFormControls(){this.editCategoryForm=this.fb.group({category_name:[""],category_description:[""]})}get form(){return this.editCategoryForm.controls}get catForm(){return this.addNewCategoryForm.controls}removeCategory(o){this.confirmationAlert.sweetAlert("Are you sure?","Deleting a category is an irreversible process and will affect the associated official Kogas","","","question",!0,"Yes, Delete Category!","No, Cancel","",this.apiService.removeCategory(o))}onCategoryClick(o){this.selectedCategory=o}onCategoryCreation(){this.submitting=!0,this.apiService.createCategory({category_name:this.catForm.category_name.value,category_description:this.catForm.category_description.value}).subscribe(n=>{this.toastrService.success(n.message,"Success"),this.submitting=!1,this.reloadCurrentRoute()},n=>{this.toastrService.error(n.error.message,"Error"),this.submitting=!1})}onCategoryEdit(){this.confirmationAlert.sweetAlert("Are you sure?","Editing a category will reflect on the associated officials","","","question",!0,"Yes, Update Category!","No, Cancel","",this.apiService.updateCategories({category_name:this.form.category_name.value,category_description:this.form.category_description.value},this.selectedCategory.id))}reloadCurrentRoute(){let o=this.router.url;this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>{this.router.navigate([o])})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(b.s),t.Y36(a.qu),t.Y36(_._W),t.Y36(c.F0),t.Y36(A.C))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-category-list"]],decls:49,vars:6,consts:[[1,"content","mat-elevation-z8"],[1,"m-1","p-1","text-right"],["data-target","#addCategory","data-toggle","modal",1,"btn","btn-danger","text-right","mt-2","ml-5"],[1,"citizens"],[1,"table-responsive"],[1,"text-center","text-dark"],[1,"table","table-striped","table-hover","table-bordered"],["scope","col"],["scope","col",1,"text-center"],[4,"ngFor","ngForOf"],["class","d-flex justify-content-center my-1",4,"ngIf"],["class","modal fade","data-backdrop","false","id","viewLGA","tabindex","-1","role","dialog","aria-labelledby","editRoleModalLabel","aria-hidden","true",4,"ngIf"],["data-backdrop","false","id","addCategory","tabindex","-1","role","dialog","aria-labelledby","editRoleModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","addNewModalLabel",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","formControlName","category_name",1,"form-control"],["type","text","formControlName","category_description",1,"form-control"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-danger"],["type","submit","class","btn btn-success",4,"ngIf"],[1,""],[1,"text-center"],["data-target","#viewLGA","data-toggle","modal",1,"btn","btn-success",3,"click"],[1,"fas","fa-edit"],[1,"btn","btn-danger",3,"click"],[1,"fas","fa-trash"],[1,"d-flex","justify-content-center","my-1"],["role","status","aria-hidden","true",1,"spinner-border"],["data-backdrop","false","id","viewLGA","tabindex","-1","role","dialog","aria-labelledby","editRoleModalLabel","aria-hidden","true",1,"modal","fade"],["id","viewLGAModalLabel",1,"modal-title"],["type","text","formControlName","category_name",1,"form-control",3,"placeholder"],["type","text","formControlName","category_description",1,"form-control",3,"placeholder"],["type","submit",1,"btn","btn-success"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"p",1),t.TgZ(2,"a",2),t._uU(3,"Add Officials Category"),t.qZA(),t.qZA(),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t.TgZ(6,"h4",5),t._uU(7,"Kogi State Categories"),t.qZA(),t.TgZ(8,"table",6),t.TgZ(9,"thead"),t.TgZ(10,"tr"),t.TgZ(11,"th",7),t._uU(12,"#"),t.qZA(),t.TgZ(13,"th",8),t._uU(14,"Name"),t.qZA(),t.TgZ(15,"th",8),t._uU(16,"Description"),t.qZA(),t.TgZ(17,"th",8),t._uU(18,"Edit"),t.qZA(),t.TgZ(19,"th",8),t._uU(20,"Remove"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"tbody"),t.YNc(22,v,13,3,"tr",9),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(23,T,2,0,"div",10),t.qZA(),t.YNc(24,x,24,5,"div",11),t.TgZ(25,"div",12),t.TgZ(26,"div",13),t.TgZ(27,"div",14),t.TgZ(28,"div",15),t.TgZ(29,"h1",16),t._uU(30,"Add New Category"),t.qZA(),t.TgZ(31,"button",17),t.TgZ(32,"span",18),t._uU(33,"\xd7"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"div",19),t.TgZ(35,"form",20),t.NdJ("ngSubmit",function(){return n.onCategoryCreation()}),t.TgZ(36,"div",21),t.TgZ(37,"label"),t._uU(38,"Name"),t.qZA(),t._UZ(39,"input",22),t.qZA(),t.TgZ(40,"div",21),t.TgZ(41,"label"),t._uU(42,"Description"),t.qZA(),t._UZ(43,"input",23),t.qZA(),t.TgZ(44,"div",24),t.TgZ(45,"button",25),t._uU(46,"Close"),t.qZA(),t.YNc(47,U,2,0,"button",26),t.YNc(48,f,2,0,"button",26),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(22),t.Q6J("ngForOf",n.categories),t.xp6(1),t.Q6J("ngIf",n.loading),t.xp6(1),t.Q6J("ngIf",n.selectedCategory),t.xp6(11),t.Q6J("formGroup",n.addNewCategoryForm),t.xp6(12),t.Q6J("ngIf",!n.submitting),t.xp6(1),t.Q6J("ngIf",n.submitting))},directives:[d.sg,d.O5,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}table[_ngcontent-%COMP%]{border:2px solid #333333;box-sizing:border-box}thead[_ngcontent-%COMP%]{background:#E1EAFB;font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}.table-totals[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}']}),e})()},{path:"add-new-sub-category",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-sub-category"]],decls:2,vars:0,template:function(o,n){1&o&&(t.TgZ(0,"p"),t._uU(1,"add-sub-category works!"),t.qZA())},styles:[""]}),e})()},{path:"sub-category-list",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sub-category-list"]],decls:2,vars:0,template:function(o,n){1&o&&(t.TgZ(0,"p"),t._uU(1,"sub-category-list works!"),t.qZA())},styles:[""]}),e})()}]}];let S=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.Bz.forChild(F)],c.Bz]}),e})();var L=i(4466);let B=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.ez,L.m,S]]}),e})()},8562:(w,m,i)=>{i.d(m,{C:()=>t});var d=i(8259),c=i.n(d),p=i(7716),C=i(3423);let t=(()=>{class a{constructor(l){this.router=l,this.swalWithBootstrapButtons=c().mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"btn btn-danger"},buttonsStyling:!1})}sweetAlert(l,h,b,_,A,v,T,x,U,f){return c().fire({title:l,text:h,input:b,inputPlaceholder:_,icon:A,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",showCancelButton:v,confirmButtonText:T,cancelButtonText:x,showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}).then(y=>{y.value?f.subscribe(s=>{null!=s?s.success?(this.swalWithBootstrapButtons.fire("Congratulations,!",`${s.message}`,"success"),this.reloadCurrentRoute()):this.swalWithBootstrapButtons.fire("Failed,!",`${s.message}`,"warning"):this.swalWithBootstrapButtons.fire("Failed,!","Server Error","error")},s=>{this.swalWithBootstrapButtons.fire("Failed,!",`${s}`,"error")}):y.dismiss===c().DismissReason.cancel?this.swalWithBootstrapButtons.fire("Cancelled","Your request to cancel this operation was processed successfully!","error"):f.subscribe(s=>{s.success?(this.swalWithBootstrapButtons.fire("Congratulations,!",`${s.message}`,"success"),this.reloadCurrentRoute()):this.swalWithBootstrapButtons.fire("Failed,!",`${s.message}`,"warning")})})}reloadCurrentRoute(){let l=this.router.url;this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>{this.router.navigate([l])})}}return a.\u0275fac=function(l){return new(l||a)(p.LFG(C.F0))},a.\u0275prov=p.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);