"use strict";(self.webpackChunkadmin_development=self.webpackChunkadmin_development||[]).push([[164],{6164:(Ct,y,s)=>{s.r(y),s.d(y,{ProjectModule:()=>bt});var l=s(8583),Z=s(3423),P=s(7037),T=s(5299),q=s(2340),t=s(7716),x=s(5384),w=s(8562),A=s(4142);const J=function(){return["/admin/projects/add-new-kogi-project"]};function S(o,i){1&o&&(t.TgZ(0,"p",12),t.TgZ(1,"a",13),t._uU(2,"Add New Projects"),t.qZA(),t.qZA()),2&o&&(t.xp6(1),t.Q6J("routerLink",t.DdM(1,J)))}function N(o,i){1&o&&(t.TgZ(0,"th",8),t._uU(1,"View"),t.qZA())}function E(o,i){1&o&&(t.TgZ(0,"th",8),t._uU(1,"Edit"),t.qZA())}function I(o,i){1&o&&(t.TgZ(0,"th",8),t._uU(1,"Remove"),t.qZA())}function O(o,i){if(1&o&&(t.TgZ(0,"span",22),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.status)}}function Q(o,i){if(1&o&&(t.TgZ(0,"span",23),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.status)}}function M(o,i){if(1&o&&(t.TgZ(0,"span",24),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.status)}}function D(o,i){if(1&o&&(t.TgZ(0,"span",25),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.status)}}function F(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"td",15),t.TgZ(1,"button",26),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit;return t.oxw(2).projectDetails(n.id)}),t._UZ(2,"i",27),t.qZA(),t.qZA()}}function Y(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"td",15),t.TgZ(1,"button",28),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit;return t.oxw(2).redirectToEdit(n.id)}),t._UZ(2,"i",29),t.qZA(),t.qZA()}}function L(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"td",15),t.TgZ(1,"button",30),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit;return t.oxw(2).remove(n.id)}),t._UZ(2,"i",31),t.qZA(),t.qZA()}}const f=function(o){return[o,"nav"]};function R(o,i){if(1&o&&(t.TgZ(0,"tr"),t.TgZ(1,"td",14),t._uU(2),t.qZA(),t.TgZ(3,"td",15),t._UZ(4,"img",16),t.qZA(),t.TgZ(5,"td",14),t._uU(6),t.qZA(),t.TgZ(7,"td",14),t._uU(8),t.qZA(),t.TgZ(9,"td",14),t._uU(10),t.qZA(),t.TgZ(11,"td",14),t._uU(12),t.qZA(),t.TgZ(13,"td",14),t._uU(14),t.qZA(),t.TgZ(15,"td",15),t.YNc(16,O,2,1,"span",17),t.YNc(17,Q,2,1,"span",18),t.YNc(18,M,2,1,"span",19),t.YNc(19,D,2,1,"span",20),t.qZA(),t.YNc(20,F,3,0,"td",21),t.YNc(21,Y,3,0,"td",21),t.YNc(22,L,3,0,"td",21),t.qZA()),2&o){const e=i.$implicit,r=i.index,n=t.oxw(2);t.xp6(2),t.Oqu(r+1),t.xp6(2),t.Q6J("src",n.imageURL+e.image_path,t.LSH),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.client),t.xp6(2),t.Oqu(e.start_date),t.xp6(2),t.Oqu(e.end_date),t.xp6(2),t.Oqu(e.total_duration),t.xp6(2),t.Q6J("ngIf","completed"==e.status),t.xp6(1),t.Q6J("ngIf","in-progress"==e.status),t.xp6(1),t.Q6J("ngIf","upcoming"==e.status),t.xp6(1),t.Q6J("ngIf","budgeted"==e.status),t.xp6(1),t.Q6J("appAccessControl",t.VKq(14,f,n.permissionType.VIEW_PROJECTS)),t.xp6(1),t.Q6J("appAccessControl",t.VKq(16,f,n.permissionType.EDIT_PROJECTS)),t.xp6(1),t.Q6J("appAccessControl",t.VKq(18,f,n.permissionType.DELETE_PROJECTS))}}function z(o,i){1&o&&(t.TgZ(0,"div",32),t._UZ(1,"div",33),t.qZA())}function B(o,i){if(1&o&&(t.TgZ(0,"div",1),t.YNc(1,S,3,2,"p",2),t.TgZ(2,"div",3),t.TgZ(3,"div",4),t.TgZ(4,"h4",5),t._uU(5,"Kogi Projects"),t.qZA(),t.TgZ(6,"table",6),t.TgZ(7,"thead"),t.TgZ(8,"tr"),t.TgZ(9,"th",7),t._uU(10,"#"),t.qZA(),t.TgZ(11,"th",7),t._uU(12,"Image"),t.qZA(),t.TgZ(13,"th",7),t._uU(14,"Name"),t.qZA(),t.TgZ(15,"th",7),t._uU(16,"Client"),t.qZA(),t.TgZ(17,"th",7),t._uU(18,"Start Date"),t.qZA(),t.TgZ(19,"th",7),t._uU(20,"End Date"),t.qZA(),t.TgZ(21,"th",7),t._uU(22,"Duration"),t.qZA(),t.TgZ(23,"th",8),t._uU(24,"Status"),t.qZA(),t.YNc(25,N,2,0,"th",9),t.YNc(26,E,2,0,"th",9),t.YNc(27,I,2,0,"th",9),t.qZA(),t.qZA(),t.TgZ(28,"tbody"),t.YNc(29,R,23,20,"tr",10),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(30,z,2,0,"div",11),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("appAccessControl",t.VKq(6,f,e.permissionType.CREATE_PROJECTS)),t.xp6(24),t.Q6J("appAccessControl",t.VKq(8,f,e.permissionType.VIEW_PROJECTS)),t.xp6(1),t.Q6J("appAccessControl",t.VKq(10,f,e.permissionType.EDIT_PROJECTS)),t.xp6(1),t.Q6J("appAccessControl",t.VKq(12,f,e.permissionType.DELETE_PROJECTS)),t.xp6(2),t.Q6J("ngForOf",e.projects),t.xp6(1),t.Q6J("ngIf",e.loading)}}const k=function(o){return[o,"page"]};let V=(()=>{class o{constructor(e,r,n){this.apiService=e,this.confirmationAlert=r,this.router=n,this.permissionType=T.v,this.projects=[],this.loading=!0,this.imageURL=q.N.ASSETS_URL}ngOnInit(){this.listOfProjects()}listOfProjects(){this.apiService.listOfProjects().subscribe(e=>{this.projects=e.data,this.loading=!1})}projectDetails(e){this.router.navigate(["admin/projects/kogi-projects-list/details/"],{queryParams:{project_id:`${e}`}})}redirectToEdit(e){this.router.navigate(["admin/projects/kogi-projects-list/edit-details/"],{queryParams:{project_id:`${e}`}})}remove(e){this.confirmationAlert.sweetAlert("Are you sure?","Deleting an project is an irreversible process.","","","question",!0,"Yes, Delete Project!","No, Cancel","",this.apiService.removeProject(e))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(x.s),t.Y36(w.C),t.Y36(Z.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-projects-list"]],decls:1,vars:3,consts:[["class","content mat-elevation-z8",4,"appAccessControl"],[1,"content","mat-elevation-z8"],["class","text-right p-1 m-1",4,"appAccessControl"],[1,"citizens"],[1,"table-responsive"],[1,"text-center","text-dark"],[1,"table","table-striped","table-hover","table-bordered"],["scope","col"],["scope","col",1,"text-center"],["scope","col","class","text-center",4,"appAccessControl"],[4,"ngFor","ngForOf"],["class","d-flex justify-content-center my-1",4,"ngIf"],[1,"text-right","p-1","m-1"],[1,"btn","btn-danger",3,"routerLink"],[1,""],[1,"text-center"],["width","50","height","50","alt","Project Image",1,"rounded-circle",3,"src"],["class","badge badge-success",4,"ngIf"],["class","badge badge-danger",4,"ngIf"],["class","badge badge-primary",4,"ngIf"],["class","badge badge-warning",4,"ngIf"],["class","text-center",4,"appAccessControl"],[1,"badge","badge-success"],[1,"badge","badge-danger"],[1,"badge","badge-primary"],[1,"badge","badge-warning"],[1,"btn","btn-success",3,"click"],[1,"fas","fa-eye"],[1,"btn","btn-primary",3,"click"],[1,"fas","fa-user-edit"],[1,"btn","btn-danger",3,"click"],[1,"fas","fa-trash"],[1,"d-flex","justify-content-center","my-1"],["role","status","aria-hidden","true",1,"spinner-border"]],template:function(e,r){1&e&&t.YNc(0,B,31,14,"div",0),2&e&&t.Q6J("appAccessControl",t.VKq(1,k,r.permissionType.VIEW_PROJECTS))},directives:[A.J,l.sg,l.O5,Z.yS],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}table[_ngcontent-%COMP%]{border:2px solid #333333;box-sizing:border-box}thead[_ngcontent-%COMP%]{background:#E1EAFB;font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}.table-totals[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}']}),o})();var j=s(9344),a=s(3679);function K(o,i){1&o&&(t.TgZ(0,"div",4),t._UZ(1,"div",5),t.qZA())}function H(o,i){if(1&o&&(t.TgZ(0,"div",12),t.TgZ(1,"label"),t._uU(2,"Ministry"),t.qZA(),t._UZ(3,"input",13),t.qZA()),2&o){const e=t.oxw(3);t.xp6(3),t.Q6J("value",e.project.ministry.name)}}function $(o,i){if(1&o&&(t.TgZ(0,"div",12),t.TgZ(1,"label"),t._uU(2,"Bureau"),t.qZA(),t._UZ(3,"input",13),t.qZA()),2&o){const e=t.oxw(3);t.xp6(3),t.Q6J("value",e.project.bureau.name)}}function G(o,i){if(1&o&&(t.TgZ(0,"div",20),t.TgZ(1,"div",21),t._UZ(2,"img",22),t.qZA(),t.qZA()),2&o){const e=i.$implicit,r=t.oxw(3);t.xp6(2),t.Q6J("src",r.imageURL+e.file_path,t.LSH)}}function W(o,i){if(1&o&&(t.TgZ(0,"div",6),t.TgZ(1,"div",7),t._UZ(2,"img",8),t.qZA(),t.TgZ(3,"div",9),t.TgZ(4,"p",10),t._uU(5),t.qZA(),t.qZA(),t.TgZ(6,"form"),t.TgZ(7,"div",11),t.TgZ(8,"div",12),t.TgZ(9,"label"),t._uU(10,"Name"),t.qZA(),t._UZ(11,"input",13),t.qZA(),t.TgZ(12,"div",12),t.TgZ(13,"label"),t._uU(14,"Category"),t.qZA(),t._UZ(15,"input",13),t.qZA(),t.YNc(16,H,4,1,"div",14),t.YNc(17,$,4,1,"div",14),t.TgZ(18,"div",12),t.TgZ(19,"label"),t._uU(20,"Status"),t.qZA(),t._UZ(21,"input",13),t.qZA(),t.TgZ(22,"div",12),t.TgZ(23,"label"),t._uU(24,"Client"),t.qZA(),t._UZ(25,"input",13),t.qZA(),t.TgZ(26,"div",12),t.TgZ(27,"label"),t._uU(28,"Contractor"),t.qZA(),t._UZ(29,"input",13),t.qZA(),t.TgZ(30,"div",12),t.TgZ(31,"label"),t._uU(32,"Contractor Contacts"),t.qZA(),t._UZ(33,"input",13),t.qZA(),t.TgZ(34,"div",12),t.TgZ(35,"label"),t._uU(36,"Facilitator"),t.qZA(),t._UZ(37,"input",13),t.qZA(),t.TgZ(38,"div",12),t.TgZ(39,"label"),t._uU(40,"Facilitator Contacts"),t.qZA(),t._UZ(41,"input",13),t.qZA(),t.TgZ(42,"div",12),t.TgZ(43,"label"),t._uU(44,"Start Date"),t.qZA(),t._UZ(45,"input",13),t.qZA(),t.TgZ(46,"div",12),t.TgZ(47,"label"),t._uU(48,"End Date"),t.qZA(),t._UZ(49,"input",13),t.qZA(),t.TgZ(50,"div",12),t.TgZ(51,"label"),t._uU(52,"Duration"),t.qZA(),t._UZ(53,"input",13),t.qZA(),t.TgZ(54,"div",12),t.TgZ(55,"label"),t._uU(56,"Added On:"),t.qZA(),t._UZ(57,"input",13),t.ALo(58,"date"),t.qZA(),t.TgZ(59,"div",15),t.TgZ(60,"label"),t._uU(61,"Description"),t.qZA(),t._UZ(62,"textarea",16),t.qZA(),t.qZA(),t.qZA(),t._UZ(63,"hr"),t.TgZ(64,"p",17),t._uU(65,"Project Images"),t.qZA(),t.TgZ(66,"div",18),t.YNc(67,G,3,1,"div",19),t.qZA(),t._UZ(68,"hr"),t.qZA()),2&o){const e=t.oxw(2);t.xp6(2),t.Q6J("src",e.imageURL+e.project.image_path,t.LSH),t.xp6(3),t.Oqu(e.project.name),t.xp6(6),t.Q6J("value",e.project.name),t.xp6(4),t.Q6J("value",e.project.category),t.xp6(1),t.Q6J("ngIf",e.project.ministry),t.xp6(1),t.Q6J("ngIf",e.project.bureau),t.xp6(4),t.Q6J("value",e.project.status),t.xp6(4),t.Q6J("value",e.project.client),t.xp6(4),t.Q6J("value",e.project.contractor),t.xp6(4),t.Q6J("value",e.project.contractor_contacts),t.xp6(4),t.Q6J("value",e.project.facilitator_name),t.xp6(4),t.Q6J("value",e.project.facilitator_contacts),t.xp6(4),t.Q6J("value",e.project.start_date),t.xp6(4),t.Q6J("value",e.project.end_date),t.xp6(4),t.Q6J("value",e.project.total_duration),t.xp6(4),t.Q6J("value",t.lcZ(58,18,e.project.created_at)),t.xp6(5),t.Q6J("value",e.project.description),t.xp6(5),t.Q6J("ngForOf",e.project.project_images)}}function X(o,i){if(1&o&&(t.TgZ(0,"div",1),t.YNc(1,K,2,0,"div",2),t.YNc(2,W,69,20,"div",3),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.loading),t.xp6(1),t.Q6J("ngIf",e.project)}}const tt=function(o){return[o,"page"]};let et=(()=>{class o{constructor(e,r,n){this.route=e,this.apiService=r,this.toastrService=n,this.permissionType=T.v,this.imageURL=q.N.ASSETS_URL,this.loading=!0}ngOnInit(){this.getCurrentProjectDetails()}getCurrentProjectDetails(){let e=this.route.snapshot.queryParamMap.get("project_id");this.apiService.singleProjectDetails(e).subscribe(r=>{r.success?(this.project=r.data,this.toastrService.success(r.message,"Success"),console.log(),this.loading=!1):this.toastrService.warning(r.message,"Failed")},r=>{this.toastrService.error(r.errors.message,"Error")})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(Z.gz),t.Y36(x.s),t.Y36(j._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-single-project-details"]],decls:1,vars:3,consts:[["class","mat-elevation-z8 content",4,"appAccessControl"],[1,"mat-elevation-z8","content"],["class","d-flex justify-content-center my-1",4,"ngIf"],["class","m-5",4,"ngIf"],[1,"d-flex","justify-content-center","my-1"],["role","status","aria-hidden","true",1,"spinner-border"],[1,"m-5"],[1,"text-center"],["alt","image","height","100","width","100",1,"rounded-circle",3,"src"],[1,"text-center","mt-2"],[1,""],[1,"form-row"],[1,"col-md-4"],["type","text",1,"form-control",3,"value"],["class","col-md-4",4,"ngIf"],[1,"col-md-12"],["cols","7","rows","7",1,"form-control","text-lowercase",3,"value"],[1,"text-center","font-weight-bolder"],[1,"row","justify-content-around"],["class","col-md-3 project-cards",4,"ngFor","ngForOf"],[1,"col-md-3","project-cards"],[1,"card","m-auto","border-0"],["height","150","width","200","alt","Ministry image",1,"card-img-top",3,"src"]],template:function(e,r){1&e&&t.YNc(0,X,3,2,"div",0),2&e&&t.Q6J("appAccessControl",t.VKq(1,tt,r.permissionType.VIEW_PROJECTS))},directives:[A.J,l.O5,a._Y,a.JL,l.sg],pipes:[l.uU],styles:['.content[_ngcontent-%COMP%]{height:auto;border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}label[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:20px;line-height:36px;color:#000}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:27px}p[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:20px;line-height:48px;color:#1c416d}']}),o})();var b=s(3815),C=s(9866);function ot(o,i){if(1&o&&(t.TgZ(0,"option",54),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}function rt(o,i){if(1&o&&(t.TgZ(0,"option",54),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}function it(o,i){if(1&o&&(t.TgZ(0,"button",58),t._uU(1,"Add New Project"),t.qZA()),2&o){const e=t.oxw(3);t.Q6J("disabled",e.projectForm.invalid)}}function nt(o,i){1&o&&(t.TgZ(0,"button",59),t._uU(1,"Processing New Project..."),t.qZA())}function at(o,i){if(1&o&&(t.TgZ(0,"div",55),t.YNc(1,it,2,1,"button",56),t.YNc(2,nt,2,0,"button",57),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!e.submitting),t.xp6(1),t.Q6J("ngIf",e.submitting)}}const ct=function(o){return[o,"nav"]};function st(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",1),t.TgZ(1,"h2",2),t._uU(2,"Add New Kogi State Project"),t.qZA(),t.TgZ(3,"div",3),t.TgZ(4,"form",4),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().onSubmit()}),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t.TgZ(7,"label",7),t._uU(8,"Name"),t.qZA(),t._UZ(9,"input",8),t.qZA(),t.TgZ(10,"div",6),t.TgZ(11,"label",7),t._uU(12,"Project Type"),t.qZA(),t.TgZ(13,"select",9),t.TgZ(14,"option",10),t._uU(15,"Select Project Type"),t.qZA(),t.TgZ(16,"option",11),t._uU(17,"Regular"),t.qZA(),t.TgZ(18,"option",12),t._uU(19,"Spotlight"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"div",6),t.TgZ(21,"label",13),t._uU(22,"Category"),t.qZA(),t._UZ(23,"input",14),t.qZA(),t.TgZ(24,"div",6),t.TgZ(25,"label",15),t._uU(26,"Budget"),t.qZA(),t._UZ(27,"input",16),t.qZA(),t.TgZ(28,"div",6),t.TgZ(29,"label",17),t._uU(30,"Ministry"),t.qZA(),t.TgZ(31,"select",18),t.NdJ("change",function(n){return t.CHM(e),t.oxw().onMinistryChange(n.target)}),t.TgZ(32,"option"),t._uU(33,"Select Project Ministry"),t.qZA(),t.YNc(34,ot,2,2,"option",19),t.qZA(),t.qZA(),t.TgZ(35,"div",6),t.TgZ(36,"label",20),t._uU(37,"Bureaus"),t.qZA(),t.TgZ(38,"select",21),t.NdJ("change",function(n){return t.CHM(e),t.oxw().onBureauChange(n.target)}),t.TgZ(39,"option"),t._uU(40,"Select Project Bureau"),t.qZA(),t.YNc(41,rt,2,2,"option",19),t.qZA(),t.qZA(),t.TgZ(42,"div",6),t.TgZ(43,"label",22),t._uU(44,"Project Status"),t.qZA(),t.TgZ(45,"select",23),t.TgZ(46,"option",24),t._uU(47,"Budgeted"),t.qZA(),t.TgZ(48,"option",25),t._uU(49,"Upcoming"),t.qZA(),t.TgZ(50,"option",26),t._uU(51,"In Progress"),t.qZA(),t.TgZ(52,"option",27),t._uU(53,"Completed"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(54,"div",6),t.TgZ(55,"label",28),t._uU(56,"Client"),t.qZA(),t._UZ(57,"input",29),t.qZA(),t.TgZ(58,"div",6),t.TgZ(59,"label",30),t._uU(60,"Contractor"),t.qZA(),t._UZ(61,"input",31),t.qZA(),t.TgZ(62,"div",6),t.TgZ(63,"label",32),t._uU(64," Contractor Contacts"),t.qZA(),t._UZ(65,"input",33),t.qZA(),t.TgZ(66,"div",6),t.TgZ(67,"label",34),t._uU(68,"Facilitator"),t.qZA(),t._UZ(69,"input",35),t.qZA(),t.TgZ(70,"div",6),t.TgZ(71,"label",36),t._uU(72,"Facilitator Contacts"),t.qZA(),t._UZ(73,"input",37),t.qZA(),t.TgZ(74,"div",6),t.TgZ(75,"label",38),t._uU(76,"Expected Start Date"),t.qZA(),t._UZ(77,"input",39),t.qZA(),t.TgZ(78,"div",6),t.TgZ(79,"label",40),t._uU(80,"Expected End Date"),t.qZA(),t._UZ(81,"input",41),t.qZA(),t.TgZ(82,"div",6),t.TgZ(83,"label",42),t._uU(84,"Total Duration"),t.qZA(),t._UZ(85,"input",43),t.qZA(),t.TgZ(86,"div",44),t.TgZ(87,"label",45),t._uU(88,"Banner Images"),t.qZA(),t.TgZ(89,"input",46),t.NdJ("change",function(n){return t.CHM(e),t.oxw().handleFileInput(n)}),t.qZA(),t.qZA(),t.TgZ(90,"div",44),t.TgZ(91,"label",47),t._uU(92,"Upload Other Images"),t.qZA(),t.TgZ(93,"input",48),t.NdJ("change",function(n){return t.CHM(e),t.oxw().handleMultipleFileInput(n)}),t.qZA(),t.qZA(),t.TgZ(94,"div",49),t.TgZ(95,"label",50),t._uU(96,"Description"),t.qZA(),t._UZ(97,"textarea",51),t.qZA(),t.qZA(),t.YNc(98,at,3,2,"div",52),t.qZA(),t._UZ(99,"ngx-spinner",53),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("formGroup",e.projectForm),t.xp6(30),t.Q6J("ngForOf",e.ministries),t.xp6(7),t.Q6J("ngForOf",e.bureaus),t.xp6(57),t.Q6J("appAccessControl",t.VKq(4,ct,e.permissionType.CREATE_PROJECTS))}}const lt=function(o){return[o,"page"]};let dt=(()=>{class o{constructor(e,r,n,c){this.formBuilder=e,this.spinner=r,this.toastrService=n,this.apiService=c,this.permissionType=T.v,this.loading=!0,this.submitting=!1,this.projectImages=[]}ngOnInit(){this.getBureaus(),this.getMinistries(),this.projectFormControls()}getMinistries(){this.apiService.getMinistry().subscribe(e=>{this.ministries=e.data})}onMinistryChange(e){this.selectedMinistryId=e.value}getBureaus(){this.apiService.getBureaus().subscribe(e=>{this.bureaus=e.data})}onBureauChange(e){this.selectedBureauId=e.value}projectFormControls(){this.projectForm=this.formBuilder.group({name:["",a.kI.required],description:["",a.kI.required],client:["",a.kI.required],category:["",a.kI.required],budget:["",a.kI.required],contractor:["",a.kI.required],contractor_contacts:["",a.kI.required],facilitator_name:["",a.kI.required],facilitator_contacts:["",a.kI.required],total_duration:["",a.kI.required],start_date:["",a.kI.required],end_date:["",a.kI.required],type:["",a.kI.required],status:[""]})}get form(){return this.projectForm.controls}onSubmit(){this.submitting=!0,this.apiService.createNewProjects({ministry_id:this.selectedMinistryId,bureaus_id:this.selectedBureauId,client:this.form.client.value,type:this.form.type.value,contractor:this.form.contractor.value,contractor_contacts:this.form.contractor_contacts.value,description:this.form.description.value,end_date:this.form.end_date.value,facilitator_contacts:this.form.facilitator_contacts.value,facilitator_name:this.form.facilitator_name.value,project_image:this.cardImageBase64,status:this.form.status.value,category:this.form.category.value,name:this.form.name.value,start_date:this.form.start_date.value,total_duration:this.form.total_duration.value,budget:this.form.budget.value,other_project_images:this.projectImages}).subscribe(r=>{r?(this.submitting=!1,this.toastrService.success("You have successfully added a new project")):(this.submitting=!1,this.toastrService.error("Something went wrong while adding project,try again later","Failed"))},r=>{this.submitting=!1,this.toastrService.error(r.errors.message)})}handleFileInput(e){if(this.imageError=null,e.target.files&&e.target.files[0]){const r=20971520,n=["image/png","image/jpeg"],c=15200,d=25600;if(e.target.files[0].size>r)return this.imageError="Maximum size allowed is "+r/1e3+"Mb",this.toastrService.error(this.imageError,"Error"),!1;if(!b.includes(n,e.target.files[0].type))return this.imageError="Only Images are allowed ( JPG | PNG )",this.toastrService.error(this.imageError,"Error"),!1;const u=new FileReader;u.onload=g=>{const m=new Image;m.src=g.target.result,m.onload=_=>{if(_.currentTarget.height>c&&_.currentTarget.width>d)return this.imageError="Maximum dimensions allowed "+c+"*"+d+"px",!1;this.cardImageBase64=g.target.result,this.isImageSaved=!0}},u.readAsDataURL(e.target.files[0])}}handleMultipleFileInput(e){if(this.imageError=null,e.target.files&&e.target.files[0]){const r=20971520,n=["image/png","image/jpeg"],c=15200,d=25600;if(e.target.files[0].size>r)return this.imageError="Maximum size allowed is "+r/1e3+"Mb",this.toastrService.error(this.imageError,"Error"),!1;if(!b.includes(n,e.target.files[0].type))return this.imageError="Only Images are allowed ( JPG | PNG )",this.toastrService.error(this.imageError,"Error"),!1;const u=new FileReader;u.onload=g=>{const m=new Image;m.src=g.target.result,m.onload=_=>{if(_.currentTarget.height>c&&_.currentTarget.width>d)return this.imageError="Maximum dimensions allowed "+c+"*"+d+"px",!1;{let U=g.target.result;this.spinner.show(),this.apiService.uploadProjectImages(U).subscribe(p=>{this.spinner.hide(),this.projectImages.push(p.file_path),this.toastrService.success(p.message,"Success")},p=>{this.toastrService.error(p.error.message,"Error")})}}},u.readAsDataURL(e.target.files[0])}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(a.qu),t.Y36(C.t2),t.Y36(j._W),t.Y36(x.s))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-new-project"]],decls:1,vars:3,consts:[["class","content mat-elevation-z8",4,"appAccessControl"],[1,"content","mat-elevation-z8"],[1,"text-center","text-dark"],[1,"add-new-user"],["enctype","multipart/form-data",3,"formGroup","ngSubmit"],[1,"form-row","m-3"],[1,"col-md-4"],["for","name"],["type","text","id","name","formControlName","name","placeholder","Agriculture","required","",1,"form-control"],["formControlName","type","required","",1,"form-control"],["disabled",""],["value","regular"],["value","spotlight"],["for","category"],["type","text","id","category","formControlName","category","placeholder","Transportation","required","",1,"form-control"],["for","budget"],["type","number","id","budget","formControlName","budget","placeholder","","required","",1,"form-control"],["for","ministry"],["id","ministry",1,"form-control",3,"change"],[3,"value",4,"ngFor","ngForOf"],["for","bureau"],["id","bureau",1,"form-control",3,"change"],["for","status"],["formControlName","status","id","status",1,"custom-select"],["value","budgeted"],["value","upcoming"],["value","in-progress"],["value","completed"],["for","client"],["type","text","id","client","formControlName","client","placeholder","","required","",1,"form-control"],["for","contractor"],["type","text","id","contractor","formControlName","contractor","placeholder","","required","",1,"form-control"],["for","contractor-contacts"],["type","text","id","contractor-contacts","formControlName","contractor_contacts","placeholder","","required","",1,"form-control"],["for","facilitator"],["type","text","id","facilitator","formControlName","facilitator_name","placeholder","","required","",1,"form-control"],["for","facilitator-contacts"],["type","text","id","facilitator-contacts","formControlName","facilitator_contacts","placeholder","","required","",1,"form-control"],["for","start-date"],["type","date","id","start-date","formControlName","start_date","placeholder","","required","",1,"form-control"],["for","end-date"],["type","date","id","end-date","formControlName","end_date","placeholder","","required","",1,"form-control"],["for","total-duration"],["type","text","id","total-duration","formControlName","total_duration","placeholder","","required","",1,"form-control"],[1,"col-md-6"],["for","project_image"],["type","file","id","project_image","placeholder","","required","",1,"form-control-file",3,"change"],["for","other_project_images"],["type","file","id","other_project_images","placeholder","upload one at a time","required","",1,"form-control-file",3,"change"],[1,"col-md-12"],["for","description"],["id","description","formControlName","description","rows","7","cols","7",1,"form-control"],["class","submission m-4 text-right",4,"appAccessControl"],["bdColor","rgba(0, 0, 0, 1)","template","<img src='https://media.giphy.com/media/o8igknyuKs6aY/giphy.gif' />"],[3,"value"],[1,"submission","m-4","text-right"],["class","btn btn-danger",3,"disabled",4,"ngIf"],["class","btn btn-success",4,"ngIf"],[1,"btn","btn-danger",3,"disabled"],[1,"btn","btn-success"]],template:function(e,r){1&e&&t.YNc(0,st,100,6,"div",0),2&e&&t.Q6J("appAccessControl",t.VKq(1,lt,r.permissionType.CREATE_PROJECTS))},directives:[A.J,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,a.Q7,a.EJ,a.YN,a.Kr,a.wV,l.sg,C.Ro,l.O5],styles:['.content[_ngcontent-%COMP%]{height:auto;border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}label[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:20px;line-height:36px;color:#000}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font-size:18px;line-height:27px}']}),o})();var pt=s(8668);function ut(o,i){1&o&&(t.TgZ(0,"div",4),t._UZ(1,"div",5),t.qZA())}function gt(o,i){1&o&&(t.TgZ(0,"button",59),t._uU(1,"Edit Project"),t.qZA())}function mt(o,i){1&o&&(t.TgZ(0,"button",60),t._uU(1,"Processing Project..."),t.qZA())}function _t(o,i){if(1&o&&(t.TgZ(0,"div",56),t.YNc(1,gt,2,0,"button",57),t.YNc(2,mt,2,0,"button",58),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.Q6J("ngIf",!e.submitting),t.xp6(1),t.Q6J("ngIf",e.submitting)}}function ft(o,i){if(1&o&&(t.TgZ(0,"div",61),t.TgZ(1,"div",62),t._UZ(2,"img",63),t.qZA(),t.qZA()),2&o){const e=i.$implicit,r=t.oxw(3);t.xp6(2),t.Q6J("src",r.imageURL+e.file_path,t.LSH)}}const Zt=function(o){return[o,"nav"]};function ht(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",6),t.TgZ(1,"div",7),t._UZ(2,"img",8),t.qZA(),t.TgZ(3,"div",9),t.TgZ(4,"p",10),t._uU(5),t.qZA(),t.qZA(),t.TgZ(6,"form",11),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw(2).onSubmit()}),t.TgZ(7,"div",12),t.TgZ(8,"div",13),t.TgZ(9,"label",14),t._uU(10,"Name"),t.qZA(),t._UZ(11,"input",15),t.qZA(),t.TgZ(12,"div",13),t.TgZ(13,"label",14),t._uU(14,"Project Type"),t.qZA(),t.TgZ(15,"select",16),t.TgZ(16,"option",17),t._uU(17),t.qZA(),t.TgZ(18,"option",18),t._uU(19,"Regular"),t.qZA(),t.TgZ(20,"option",19),t._uU(21,"Spotlight"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"div",13),t.TgZ(23,"label",20),t._uU(24,"Category"),t.qZA(),t._UZ(25,"input",21),t.qZA(),t.TgZ(26,"div",13),t.TgZ(27,"label",22),t._uU(28,"Budget"),t.qZA(),t._UZ(29,"input",23),t.qZA(),t.TgZ(30,"div",13),t.TgZ(31,"label",24),t._uU(32,"Project Status"),t.qZA(),t.TgZ(33,"select",25),t.TgZ(34,"option",17),t._uU(35),t.qZA(),t.TgZ(36,"option",26),t._uU(37,"Budgeted"),t.qZA(),t.TgZ(38,"option",27),t._uU(39,"Upcoming"),t.qZA(),t.TgZ(40,"option",28),t._uU(41,"In Progress"),t.qZA(),t.TgZ(42,"option",29),t._uU(43,"Completed"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(44,"div",13),t.TgZ(45,"label",30),t._uU(46,"Client"),t.qZA(),t._UZ(47,"input",31),t.qZA(),t.TgZ(48,"div",13),t.TgZ(49,"label",32),t._uU(50,"Contractor"),t.qZA(),t._UZ(51,"input",33),t.qZA(),t.TgZ(52,"div",13),t.TgZ(53,"label",34),t._uU(54," Contractor Contacts"),t.qZA(),t._UZ(55,"input",35),t.qZA(),t.TgZ(56,"div",13),t.TgZ(57,"label",36),t._uU(58,"Facilitator"),t.qZA(),t._UZ(59,"input",37),t.qZA(),t.TgZ(60,"div",13),t.TgZ(61,"label",38),t._uU(62,"Facilitator Contacts"),t.qZA(),t._UZ(63,"input",39),t.qZA(),t.TgZ(64,"div",13),t.TgZ(65,"label",40),t._uU(66,"Expected Start Date"),t.qZA(),t._UZ(67,"input",41),t.ALo(68,"date"),t.qZA(),t.TgZ(69,"div",13),t.TgZ(70,"label",42),t._uU(71,"Expected End Date"),t.qZA(),t._UZ(72,"input",43),t.ALo(73,"date"),t.qZA(),t.TgZ(74,"div",13),t.TgZ(75,"label",44),t._uU(76,"Total Duration"),t.qZA(),t._UZ(77,"input",45),t.qZA(),t.TgZ(78,"div",46),t.TgZ(79,"label",47),t._uU(80,"Upload Other Images"),t.qZA(),t.TgZ(81,"input",48),t.NdJ("change",function(n){return t.CHM(e),t.oxw(2).handleMultipleFileInput(n)}),t.qZA(),t.qZA(),t.TgZ(82,"div",49),t.TgZ(83,"label",50),t._uU(84,"Description"),t.qZA(),t._UZ(85,"textarea",51),t.qZA(),t.qZA(),t.YNc(86,_t,3,2,"div",52),t.qZA(),t._UZ(87,"hr"),t.TgZ(88,"p",53),t._uU(89,"Project Images"),t.qZA(),t.TgZ(90,"div",54),t.YNc(91,ft,3,1,"div",55),t.qZA(),t._UZ(92,"hr"),t.qZA()}if(2&o){const e=t.oxw(2);t.xp6(2),t.Q6J("src",e.imageURL+e.project.image_path,t.LSH),t.xp6(3),t.Oqu(e.project.name),t.xp6(1),t.Q6J("formGroup",e.editProjectForm),t.xp6(5),t.Q6J("placeholder",e.project.name),t.xp6(6),t.Oqu(e.project.type),t.xp6(8),t.Q6J("placeholder",e.project.category),t.xp6(4),t.Q6J("placeholder",e.project.budget),t.xp6(6),t.Oqu(e.project.status),t.xp6(12),t.Q6J("placeholder",e.project.client),t.xp6(4),t.Q6J("placeholder",e.project.contractor),t.xp6(4),t.Q6J("placeholder",e.project.contractor_contacts),t.xp6(4),t.Q6J("placeholder",e.project.facilitator_name),t.xp6(4),t.Q6J("placeholder",e.project.facilitator_contacts),t.xp6(4),t.Q6J("title",t.xi3(68,19,e.project.start_date,"full")),t.xp6(5),t.Q6J("title",t.xi3(73,22,e.project.end_date,"full")),t.xp6(5),t.Q6J("placeholder",e.project.total_duration),t.xp6(8),t.Q6J("placeholder",e.project.description),t.xp6(1),t.Q6J("appAccessControl",t.VKq(25,Zt,e.permissionType.CREATE_PROJECTS)),t.xp6(5),t.Q6J("ngForOf",e.project.project_images)}}function vt(o,i){if(1&o&&(t.TgZ(0,"div",1),t.YNc(1,ut,2,0,"div",2),t.YNc(2,ht,93,27,"div",3),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.loading),t.xp6(1),t.Q6J("ngIf",e.project)}}const Tt=function(o){return[o,"page"]},At=[{path:"",component:P.k,canActivate:[pt.a],children:[{path:"kogi-projects-list",component:V},{path:"kogi-projects-list/details",component:et},{path:"kogi-projects-list/edit-details",component:(()=>{class o{constructor(e,r,n,c,d){this.fb=e,this.route=r,this.apiService=n,this.spinner=c,this.toastrService=d,this.submitting=!1,this.permissionType=T.v,this.imageURL=q.N.ASSETS_URL,this.loading=!0,this.projectImages=[]}ngOnInit(){this.getCurrentProjectDetails(),this.editProjectControl()}editProjectControl(){this.editProjectForm=this.fb.group({name:[""],description:[""],client:[""],category:[""],budget:[""],contractor:[""],contractor_contacts:[""],facilitator_name:[""],facilitator_contacts:[""],total_duration:[""],start_date:[""],end_date:[""],type:[""],status:[""]})}getCurrentProjectDetails(){let e=this.route.snapshot.queryParamMap.get("project_id");this.apiService.singleProjectDetails(e).subscribe(r=>{r.success?(this.project=r.data,this.toastrService.success(r.message,"Success"),console.log(),this.loading=!1):this.toastrService.warning(r.message,"Failed")},r=>{this.toastrService.error(r.errors.message,"Error")})}get form(){return this.editProjectForm.controls}onSubmit(){let e=this.route.snapshot.queryParamMap.get("project_id");this.submitting=!0,this.apiService.updateProject({client:this.form.client.value,type:this.form.type.value,contractor:this.form.contractor.value,contractor_contacts:this.form.contractor_contacts.value,description:this.form.description.value,end_date:this.form.end_date.value,facilitator_contacts:this.form.facilitator_contacts.value,facilitator_name:this.form.facilitator_name.value,project_image:this.cardImageBase64,status:this.form.status.value,category:this.form.category.value,name:this.form.name.value,start_date:this.form.start_date.value,total_duration:this.form.total_duration.value,budget:this.form.budget.value,other_project_images:this.projectImages},e).subscribe(n=>{n?(this.submitting=!1,this.toastrService.success(n.data.message,"Success")):(this.submitting=!1,this.toastrService.error("Something went wrong while adding project,try again later","Failed"))},n=>{this.submitting=!1,this.toastrService.error(n.errors.message)})}handleMultipleFileInput(e){if(this.imageError=null,e.target.files&&e.target.files[0]){const r=20971520,n=["image/png","image/jpeg"],c=15200,d=25600;if(e.target.files[0].size>r)return this.imageError="Maximum size allowed is "+r/1e3+"Mb",this.toastrService.error(this.imageError,"Error"),!1;if(!b.includes(n,e.target.files[0].type))return this.imageError="Only Images are allowed ( JPG | PNG )",this.toastrService.error(this.imageError,"Error"),!1;const u=new FileReader;u.onload=g=>{const m=new Image;m.src=g.target.result,m.onload=_=>{if(_.currentTarget.height>c&&_.currentTarget.width>d)return this.imageError="Maximum dimensions allowed "+c+"*"+d+"px",!1;{let U=g.target.result;this.spinner.show(),this.apiService.uploadProjectImages(U).subscribe(p=>{this.spinner.hide(),this.projectImages.push(p.file_path),this.toastrService.success(p.message,"Success")},p=>{this.toastrService.error(p.error.message,"Error")})}}},u.readAsDataURL(e.target.files[0])}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(a.qu),t.Y36(Z.gz),t.Y36(x.s),t.Y36(C.t2),t.Y36(j._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit-project-details"]],decls:1,vars:3,consts:[["class","mat-elevation-z8 content",4,"appAccessControl"],[1,"mat-elevation-z8","content"],["class","d-flex justify-content-center my-1",4,"ngIf"],["class","m-5",4,"ngIf"],[1,"d-flex","justify-content-center","my-1"],["role","status","aria-hidden","true",1,"spinner-border"],[1,"m-5"],[1,"text-center"],["alt","image","height","100","width","100",1,"rounded-circle",3,"src"],[1,"text-center","mt-2"],[1,""],[3,"formGroup","ngSubmit"],[1,"form-row","m-3"],[1,"col-md-4"],["for","name"],["type","text","id","name","formControlName","name","placeholder","Agriculture","required","",1,"form-control",3,"placeholder"],["formControlName","type","required","",1,"form-control"],["disabled",""],["value","regular"],["value","spotlight"],["for","category"],["type","text","id","category","formControlName","category","placeholder","Transportation","required","",1,"form-control",3,"placeholder"],["for","budget"],["type","number","id","budget","formControlName","budget","placeholder","","required","",1,"form-control",3,"placeholder"],["for","status"],["formControlName","status","id","status",1,"custom-select"],["value","budgeted"],["value","upcoming"],["value","in-progress"],["value","completed"],["for","client"],["type","text","id","client","formControlName","client","placeholder","","required","",1,"form-control",3,"placeholder"],["for","contractor"],["type","text","id","contractor","formControlName","contractor","placeholder","","required","",1,"form-control",3,"placeholder"],["for","contractor-contacts"],["type","text","id","contractor-contacts","formControlName","contractor_contacts","placeholder","","required","",1,"form-control",3,"placeholder"],["for","facilitator"],["type","text","id","facilitator","formControlName","facilitator_name","placeholder","","required","",1,"form-control",3,"placeholder"],["for","facilitator-contacts"],["type","text","id","facilitator-contacts","formControlName","facilitator_contacts","placeholder","","required","",1,"form-control",3,"placeholder"],["for","start-date"],["type","date","id","start-date","formControlName","start_date","placeholder","","required","",1,"form-control",3,"title"],["for","end-date"],["type","date","id","end-date","formControlName","end_date","placeholder","","required","",1,"form-control",3,"title"],["for","total-duration"],["type","text","id","total-duration","formControlName","total_duration","placeholder","","required","",1,"form-control",3,"placeholder"],[1,"col-md-6"],["for","other_project_images"],["type","file","id","other_project_images","placeholder","upload one at a time","required","",1,"form-control-file",3,"change"],[1,"col-md-12"],["for","description"],["id","description","formControlName","description","rows","7","cols","7",1,"form-control",3,"placeholder"],["class","submission m-4 text-right",4,"appAccessControl"],[1,"text-center","font-weight-bolder"],[1,"row","justify-content-around"],["class","col-md-3 project-cards",4,"ngFor","ngForOf"],[1,"submission","m-4","text-right"],["class","btn btn-danger",4,"ngIf"],["class","btn btn-success",4,"ngIf"],[1,"btn","btn-danger"],[1,"btn","btn-success"],[1,"col-md-3","project-cards"],[1,"card","m-auto","border-0"],["height","150","width","200","alt","Ministry image",1,"card-img-top",3,"src"]],template:function(e,r){1&e&&t.YNc(0,vt,3,2,"div",0),2&e&&t.Q6J("appAccessControl",t.VKq(1,Tt,r.permissionType.VIEW_PROJECTS))},directives:[A.J,l.O5,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,a.Q7,a.EJ,a.YN,a.Kr,a.wV,l.sg],pipes:[l.uU],styles:['.content[_ngcontent-%COMP%]{height:auto;border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}label[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:20px;line-height:36px;color:#000}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:27px}p[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:20px;line-height:48px;color:#1c416d}']}),o})()},{path:"add-new-kogi-project",component:dt}]}];let qt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[Z.Bz.forChild(At)],Z.Bz]}),o})();var jt=s(4466);let bt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.ez,qt,jt.m]]}),o})()}}]);