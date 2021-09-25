"use strict";(self.webpackChunkadmin_development=self.webpackChunkadmin_development||[]).push([[516],{516:(q,c,i)=>{i.r(c),i.d(c,{VolunteerModule:()=>T});var l=i(8583),a=i(3423),m=i(7037),t=i(7716),p=i(5384),u=i(9344);function d(e,r){if(1&e&&(t.TgZ(0,"tr"),t.TgZ(1,"td",12),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td",13),t.TgZ(16,"span",12),t._uU(17,"Pending"),t.qZA(),t.qZA(),t.qZA()),2&e){const n=r.$implicit,o=r.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(n.title),t.xp6(2),t.Oqu(n.description),t.xp6(2),t.Oqu(n.purpose),t.xp6(2),t.Oqu(n.location),t.xp6(2),t.Oqu(n.duration),t.xp6(2),t.Oqu(n.resources)}}function f(e,r){1&e&&(t.TgZ(0,"div",14),t._UZ(1,"div",15),t.qZA())}const Z=function(){return["/admin/volunteer-projects/add-volunteer-projects"]};let h=(()=>{class e{constructor(n,o){this.apiService=n,this.toastrService=o,this.loading=!0}ngOnInit(){this.getVolunteerProjects()}getVolunteerProjects(){this.apiService.getVolunteerProjects().subscribe(n=>{this.volunteerProjects=n.data,this.loading=!1},n=>{this.toastrService.error(n.error.message,"Error"),this.loading=!1})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p.s),t.Y36(u._W))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-volunteer-projects"]],decls:30,vars:4,consts:[[1,"content","mat-elevation-z8"],[1,"text-right","m-1","p-1","appointment-heading"],[1,"add-appointment",3,"routerLink"],[1,"appointment-table"],[1,"table-responsive"],[1,"text-center","text-dark"],[1,"table","table-bordered","table-hover","table-striped"],[1,"thead-bg"],["scope","col"],["scope","col",1,"text-center"],[4,"ngFor","ngForOf"],["class","d-flex justify-content-center my-1",4,"ngIf"],[1,""],[1,"text-center","text-success"],[1,"d-flex","justify-content-center","my-1"],["role","status","aria-hidden","true",1,"spinner-border"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"p",1),t.TgZ(2,"a",2),t._uU(3,"Add Volunteer Project"),t.qZA(),t.qZA(),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t.TgZ(6,"h4",5),t._uU(7,"Kogi Volunteer Projects"),t.qZA(),t.TgZ(8,"table",6),t.TgZ(9,"thead",7),t.TgZ(10,"tr"),t.TgZ(11,"th",8),t._uU(12,"S/N"),t.qZA(),t.TgZ(13,"th",8),t._uU(14,"Title"),t.qZA(),t.TgZ(15,"th",8),t._uU(16,"Description"),t.qZA(),t.TgZ(17,"th",8),t._uU(18,"Purpose"),t.qZA(),t.TgZ(19,"th",8),t._uU(20,"Location"),t.qZA(),t.TgZ(21,"th",8),t._uU(22,"Duration"),t.qZA(),t.TgZ(23,"th",8),t._uU(24,"Resources"),t.qZA(),t.TgZ(25,"th",9),t._uU(26,"Status"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"tbody"),t.YNc(28,d,18,7,"tr",10),t.qZA(),t.qZA(),t.qZA(),t.YNc(29,f,2,0,"div",11),t.qZA(),t.qZA()),2&n&&(t.xp6(2),t.Q6J("routerLink",t.DdM(3,Z)),t.xp6(26),t.Q6J("ngForOf",o.volunteerProjects),t.xp6(1),t.Q6J("ngIf",o.loading))},directives:[a.yS,l.sg,l.O5],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}.appointment-cols[_ngcontent-%COMP%]{margin-top:20px}.appointment-heading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:24px;line-height:175.6%;color:#000}.appointment-heading[_ngcontent-%COMP%]   .add-appointment[_ngcontent-%COMP%]{background:#CA0C5C;border-radius:3px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:16px;line-height:175.6%;padding:5px;text-decoration:none;color:#fff}.appointment-list[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}.appointment-table[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}.appointment-table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:#FFFFFF;border:1px solid #1C416D;box-sizing:border-box;border-radius:2px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}.appointment-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:#E1EAFB;font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}.appointment-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}.table-totals[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}@media only screen and (min-device-width: 320px) and (max-device-width: 480px){.appointment-heading[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.appointment-cols[_ngcontent-%COMP%]{margin-top:0}.appointment-heading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:400;font-size:16px;color:#000;text-align:center}.appointment-heading[_ngcontent-%COMP%]   .add-appointment[_ngcontent-%COMP%]{background:#CA0C5C;border-radius:3px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:300;font-size:12px;text-decoration:none;color:#fff}.appointment-table[_ngcontent-%COMP%]   .appointment-list[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;color:#002b5c;margin:5px;animation-name:showing-items;animation-duration:4s}@keyframes showing-items{0%{color:red}25%{color:#ff0}50%{color:#00f}to{color:green}}.appointment-table[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;color:#000}.appointment-table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:#FFFFFF;border:1px solid #1C416D;box-sizing:border-box;border-radius:2px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:12px;color:#000}}']}),e})();var s=i(3679);function b(e,r){1&e&&(t.TgZ(0,"button",20),t._uU(1,"Add Volunteer Project"),t.qZA())}function v(e,r){1&e&&(t.TgZ(0,"button",21),t._uU(1,"Adding project..."),t.qZA())}const C=[{path:"",component:m.k,children:[{path:"projects-list",component:h},{path:"add-volunteer-projects",component:(()=>{class e{constructor(n,o,g){this.apiService=n,this.toastrService=o,this.fb=g,this.submitting=!1}ngOnInit(){this.formControls()}formControls(){this.volunteerProjectForm=this.fb.group({title:["",[]],description:["",[]],purpose:["",[]],location:["",[]],duration:["",[]],status:["",[]],resources:["",[]]})}get form(){return this.volunteerProjectForm.controls}onSubmit(){this.submitting=!0,this.apiService.addNewVolunteerProject({title:this.form.title.value,description:this.form.description.value,purpose:this.form.purpose.value,location:this.form.location.value,duration:this.form.duration.value,status:this.form.status.value,resources:this.form.description.value}).subscribe(o=>{o.success?(this.toastrService.success(o.message,"Success"),this.submitting=!1):(this.toastrService.warning(o.message,"Failed"),this.submitting=!1)},o=>{this.toastrService.error(o.error.message,"Error"),this.submitting=!1})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p.s),t.Y36(u._W),t.Y36(s.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-create-volunteer-project"]],decls:49,vars:3,consts:[[1,"content","mat-elevation-z8"],[1,"text-center"],[1,"suggestion-form","m-3"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-6"],[1,"form-group"],["type","text","formControlName","title",1,"form-control"],["type","text","formControlName","description",1,"form-control"],["type","text","formControlName","purpose",1,"form-control"],["type","text","formControlName","location",1,"form-control"],[1,"col-md-4"],["formControlName","status",1,"form-control"],["value","pending"],["value","completed"],["type","date","formControlName","duration",1,"form-control"],["type","text","formControlName","resources",1,"form-control"],[1,"mt-5","text-right"],["type","submit","class","btn btn-danger",4,"ngIf"],["type","submit","class","btn btn-success",4,"ngIf"],["type","submit",1,"btn","btn-danger"],["type","submit",1,"btn","btn-success"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"h3",1),t._uU(2,"Add Volunteer projects"),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"form",3),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t.TgZ(7,"div",6),t.TgZ(8,"label"),t._uU(9,"Title"),t.qZA(),t._UZ(10,"input",7),t.qZA(),t.qZA(),t.TgZ(11,"div",5),t.TgZ(12,"div",6),t.TgZ(13,"label"),t._uU(14,"Description"),t.qZA(),t._UZ(15,"input",8),t.qZA(),t.qZA(),t.TgZ(16,"div",5),t.TgZ(17,"div",6),t.TgZ(18,"label"),t._uU(19,"Purpose"),t.qZA(),t._UZ(20,"input",9),t.qZA(),t.qZA(),t.TgZ(21,"div",5),t.TgZ(22,"div",6),t.TgZ(23,"label"),t._uU(24,"Location"),t.qZA(),t._UZ(25,"input",10),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"div",4),t.TgZ(27,"div",11),t.TgZ(28,"div",6),t.TgZ(29,"label"),t._uU(30,"Status"),t.qZA(),t.TgZ(31,"select",12),t.TgZ(32,"option",13),t._uU(33,"Pending"),t.qZA(),t.TgZ(34,"option",14),t._uU(35,"Completed"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(36,"div",11),t.TgZ(37,"div",6),t.TgZ(38,"label"),t._uU(39,"Duration"),t.qZA(),t._UZ(40,"input",15),t.qZA(),t.qZA(),t.TgZ(41,"div",11),t.TgZ(42,"div",6),t.TgZ(43,"label"),t._uU(44,"Resource"),t.qZA(),t._UZ(45,"input",16),t.qZA(),t.qZA(),t.qZA(),t.TgZ(46,"div",17),t.YNc(47,b,2,0,"button",18),t.YNc(48,v,2,0,"button",19),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(4),t.Q6J("formGroup",o.volunteerProjectForm),t.xp6(43),t.Q6J("ngIf",!o.submitting),t.xp6(1),t.Q6J("ngIf",o.submitting))},directives:[s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,s.EJ,s.YN,s.Kr,l.O5],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}label[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:24px;line-height:36px;color:#000}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{background:#F5F5F5;border-radius:2px}']}),e})()}]}];let x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.Bz.forChild(C)],a.Bz]}),e})();var A=i(4466);let T=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.ez,A.m,x]]}),e})()}}]);