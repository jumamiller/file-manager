"use strict";(self.webpackChunkadmin_development=self.webpackChunkadmin_development||[]).push([[454],{6454:(ut,q,a)=>{a.r(q),a.d(q,{ProjectModule:()=>pt});var l=a(8583),d=a(3423),y=a(7037),h=a(5299),U=a(2340),t=a(7716),T=a(5384),P=a(8562),v=a(4142);const w=function(){return["/admin/projects/add-new-kogi-project"]};function J(o,r){1&o&&(t.TgZ(0,"p",12),t.TgZ(1,"a",13),t._uU(2,"Add New Projects"),t.qZA(),t.qZA()),2&o&&(t.xp6(1),t.Q6J("routerLink",t.DdM(1,w)))}function N(o,r){1&o&&(t.TgZ(0,"th",8),t._uU(1,"View"),t.qZA())}function S(o,r){1&o&&(t.TgZ(0,"th",8),t._uU(1,"Edit"),t.qZA())}function E(o,r){1&o&&(t.TgZ(0,"th",8),t._uU(1,"Remove"),t.qZA())}function I(o,r){if(1&o&&(t.TgZ(0,"span",21),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.status)}}function O(o,r){if(1&o&&(t.TgZ(0,"span",22),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.status)}}function M(o,r){if(1&o&&(t.TgZ(0,"span",23),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.status)}}function Q(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"td",15),t.TgZ(1,"button",24),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit;return t.oxw(2).projectDetails(s.id)}),t._UZ(2,"i",25),t.qZA(),t.qZA()}}function Y(o,r){1&o&&(t.TgZ(0,"td",15),t.TgZ(1,"button",26),t._UZ(2,"i",27),t.qZA(),t.qZA())}function F(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"td",15),t.TgZ(1,"button",28),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit;return t.oxw(2).remove(s.id)}),t._UZ(2,"i",29),t.qZA(),t.qZA()}}const p=function(o){return[o,"nav"]};function D(o,r){if(1&o&&(t.TgZ(0,"tr"),t.TgZ(1,"td",14),t._uU(2),t.qZA(),t.TgZ(3,"td",15),t._UZ(4,"img",16),t.qZA(),t.TgZ(5,"td",14),t._uU(6),t.qZA(),t.TgZ(7,"td",14),t._uU(8),t.qZA(),t.TgZ(9,"td",14),t._uU(10),t.qZA(),t.TgZ(11,"td",14),t._uU(12),t.qZA(),t.TgZ(13,"td",14),t._uU(14),t.qZA(),t.TgZ(15,"td",14),t._uU(16),t.qZA(),t.TgZ(17,"td",15),t.YNc(18,I,2,1,"span",17),t.YNc(19,O,2,1,"span",18),t.YNc(20,M,2,1,"span",19),t.qZA(),t.YNc(21,Q,3,0,"td",20),t.YNc(22,Y,3,0,"td",20),t.YNc(23,F,3,0,"td",20),t.qZA()),2&o){const e=r.$implicit,i=r.index,s=t.oxw(2);t.xp6(2),t.Oqu(i+1),t.xp6(2),t.Q6J("src",s.imageURL+e.image_path,t.LSH),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.description),t.xp6(2),t.Oqu(e.client),t.xp6(2),t.Oqu(e.start_date),t.xp6(2),t.Oqu(e.end_date),t.xp6(2),t.Oqu(e.total_duration),t.xp6(2),t.Q6J("ngIf","completed"==e.status),t.xp6(1),t.Q6J("ngIf","in progress"==e.status),t.xp6(1),t.Q6J("ngIf","upcoming"==e.status),t.xp6(1),t.Q6J("appAccessControl",t.VKq(14,p,s.permissionType.VIEW_PROJECTS)),t.xp6(1),t.Q6J("appAccessControl",t.VKq(16,p,s.permissionType.EDIT_PROJECTS)),t.xp6(1),t.Q6J("appAccessControl",t.VKq(18,p,s.permissionType.DELETE_PROJECTS))}}function L(o,r){1&o&&(t.TgZ(0,"div",30),t._UZ(1,"div",31),t.qZA())}function z(o,r){if(1&o&&(t.TgZ(0,"div",1),t.YNc(1,J,3,2,"p",2),t.TgZ(2,"div",3),t.TgZ(3,"div",4),t.TgZ(4,"h4",5),t._uU(5,"Kogi Projects"),t.qZA(),t.TgZ(6,"table",6),t.TgZ(7,"thead"),t.TgZ(8,"tr"),t.TgZ(9,"th",7),t._uU(10,"#"),t.qZA(),t.TgZ(11,"th",7),t._uU(12,"Image"),t.qZA(),t.TgZ(13,"th",7),t._uU(14,"Name"),t.qZA(),t.TgZ(15,"th",7),t._uU(16,"Description"),t.qZA(),t.TgZ(17,"th",7),t._uU(18,"Client"),t.qZA(),t.TgZ(19,"th",7),t._uU(20,"Start Date"),t.qZA(),t.TgZ(21,"th",7),t._uU(22,"End Date"),t.qZA(),t.TgZ(23,"th",7),t._uU(24,"Duration"),t.qZA(),t.TgZ(25,"th",8),t._uU(26,"Status"),t.qZA(),t.YNc(27,N,2,0,"th",9),t.YNc(28,S,2,0,"th",9),t.YNc(29,E,2,0,"th",9),t.qZA(),t.qZA(),t.TgZ(30,"tbody"),t.YNc(31,D,24,20,"tr",10),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(32,L,2,0,"div",11),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("appAccessControl",t.VKq(6,p,e.permissionType.CREATE_PROJECTS)),t.xp6(26),t.Q6J("appAccessControl",t.VKq(8,p,e.permissionType.VIEW_PROJECTS)),t.xp6(1),t.Q6J("appAccessControl",t.VKq(10,p,e.permissionType.EDIT_PROJECTS)),t.xp6(1),t.Q6J("appAccessControl",t.VKq(12,p,e.permissionType.DELETE_PROJECTS)),t.xp6(2),t.Q6J("ngForOf",e.projects),t.xp6(1),t.Q6J("ngIf",e.loading)}}const R=function(o){return[o,"page"]};let B=(()=>{class o{constructor(e,i,s){this.apiService=e,this.confirmationAlert=i,this.router=s,this.permissionType=h.v,this.projects=[],this.loading=!0,this.imageURL=U.N.ASSETS_URL}ngOnInit(){this.listOfProjects()}listOfProjects(){this.apiService.listOfProjects().subscribe(e=>{this.projects=e.data,this.loading=!1})}projectDetails(e){this.router.navigate(["admin/projects/kogi-projects-list/details/"],{queryParams:{project_id:`${e}`}})}remove(e){this.confirmationAlert.sweetAlert("Are you sure?","Deleting an project is an irreversible process.","","","question",!0,"Yes, Delete Project!","No, Cancel","",this.apiService.removeProject(e))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(T.s),t.Y36(P.C),t.Y36(d.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-projects-list"]],decls:1,vars:3,consts:[["class","content mat-elevation-z8",4,"appAccessControl"],[1,"content","mat-elevation-z8"],["class","text-right p-1 m-1",4,"appAccessControl"],[1,"citizens"],[1,"table-responsive"],[1,"text-center","text-dark"],[1,"table","table-striped","table-hover","table-bordered"],["scope","col"],["scope","col",1,"text-center"],["scope","col","class","text-center",4,"appAccessControl"],[4,"ngFor","ngForOf"],["class","d-flex justify-content-center my-1",4,"ngIf"],[1,"text-right","p-1","m-1"],[1,"btn","btn-danger",3,"routerLink"],[1,""],[1,"text-center"],["width","50","height","50","alt","Project Image",1,"rounded-circle",3,"src"],["class","badge badge-success",4,"ngIf"],["class","badge badge-danger",4,"ngIf"],["class","badge badge-primary",4,"ngIf"],["class","text-center",4,"appAccessControl"],[1,"badge","badge-success"],[1,"badge","badge-danger"],[1,"badge","badge-primary"],["disabled","",1,"btn","btn-success",3,"click"],[1,"fas","fa-eye"],[1,"btn","btn-primary"],[1,"fas","fa-user-edit"],[1,"btn","btn-danger",3,"click"],[1,"fas","fa-trash"],[1,"d-flex","justify-content-center","my-1"],["role","status","aria-hidden","true",1,"spinner-border"]],template:function(e,i){1&e&&t.YNc(0,z,33,14,"div",0),2&e&&t.Q6J("appAccessControl",t.VKq(1,R,i.permissionType.VIEW_PROJECTS))},directives:[v.J,l.sg,l.O5,d.yS],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}table[_ngcontent-%COMP%]{border:2px solid #333333;box-sizing:border-box}thead[_ngcontent-%COMP%]{background:#E1EAFB;font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}.table-totals[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}']}),o})();var j=a(9344),n=a(3679);function k(o,r){1&o&&(t.TgZ(0,"div",7),t._UZ(1,"div",8),t.qZA())}function V(o,r){if(1&o&&(t.TgZ(0,"form"),t.TgZ(1,"div",9),t.TgZ(2,"div",10),t.TgZ(3,"label"),t._uU(4,"Name"),t.qZA(),t._UZ(5,"input",11),t.qZA(),t.TgZ(6,"div",10),t.TgZ(7,"label"),t._uU(8,"Category"),t.qZA(),t._UZ(9,"input",11),t.qZA(),t.TgZ(10,"div",10),t.TgZ(11,"label"),t._uU(12,"Description"),t.qZA(),t._UZ(13,"textarea",12),t.qZA(),t.TgZ(14,"div",10),t.TgZ(15,"label"),t._uU(16,"Ministry"),t.qZA(),t._UZ(17,"input",11),t.qZA(),t.TgZ(18,"div",10),t.TgZ(19,"label"),t._uU(20,"Status"),t.qZA(),t._UZ(21,"input",11),t.qZA(),t.TgZ(22,"div",10),t.TgZ(23,"label"),t._uU(24,"Client"),t.qZA(),t._UZ(25,"input",11),t.qZA(),t.TgZ(26,"div",10),t.TgZ(27,"label"),t._uU(28,"Contractor"),t.qZA(),t._UZ(29,"input",11),t.qZA(),t.TgZ(30,"div",10),t.TgZ(31,"label"),t._uU(32,"Contractor Contacts"),t.qZA(),t._UZ(33,"input",11),t.qZA(),t.TgZ(34,"div",10),t.TgZ(35,"label"),t._uU(36,"Facilitator"),t.qZA(),t._UZ(37,"input",11),t.qZA(),t.TgZ(38,"div",10),t.TgZ(39,"label"),t._uU(40,"Facilitator Contacts"),t.qZA(),t._UZ(41,"input",11),t.qZA(),t.TgZ(42,"div",10),t.TgZ(43,"label"),t._uU(44,"Start Date"),t.qZA(),t._UZ(45,"input",11),t.qZA(),t.TgZ(46,"div",10),t.TgZ(47,"label"),t._uU(48,"End Date"),t.qZA(),t._UZ(49,"input",11),t.qZA(),t.TgZ(50,"div",10),t.TgZ(51,"label"),t._uU(52,"Duration"),t.qZA(),t._UZ(53,"input",11),t.qZA(),t.TgZ(54,"div",10),t.TgZ(55,"label"),t._uU(56,"Added On:"),t.qZA(),t._UZ(57,"input",11),t.ALo(58,"date"),t.qZA(),t.qZA(),t.qZA()),2&o){const e=t.oxw(2);t.xp6(5),t.Q6J("value",e.project.name),t.xp6(4),t.Q6J("value",e.project.category),t.xp6(4),t.Q6J("value",e.project.description),t.xp6(4),t.Q6J("value",e.project.ministry),t.xp6(4),t.Q6J("value",e.project.status),t.xp6(4),t.Q6J("value",e.project.client),t.xp6(4),t.Q6J("value",e.project.contractor),t.xp6(4),t.Q6J("value",e.project.contractor_contacts),t.xp6(4),t.Q6J("value",e.project.facilitator_name),t.xp6(4),t.Q6J("value",e.project.facilitator_contacts),t.xp6(4),t.Q6J("value",e.project.start_date),t.xp6(4),t.Q6J("value",e.project.end_date),t.xp6(4),t.Q6J("value",e.project.total_duration),t.xp6(4),t.Q6J("value",t.lcZ(58,14,e.project.created_at))}}function K(o,r){if(1&o&&(t.TgZ(0,"div",1),t.YNc(1,k,2,0,"div",2),t.TgZ(2,"div",3),t.TgZ(3,"div",4),t.TgZ(4,"p",5),t._uU(5),t.qZA(),t.qZA(),t.YNc(6,V,59,16,"form",6),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.loading),t.xp6(4),t.hij("",e.project.name," Details"),t.xp6(1),t.Q6J("ngIf",e.project)}}const $=function(o){return[o,"page"]};let H=(()=>{class o{constructor(e,i,s){this.route=e,this.apiService=i,this.toastrService=s,this.permissionType=h.v,this.loading=!0}ngOnInit(){this.projectId=this.route.snapshot.queryParamMap.get("project_id"),this.getCurrentProjectDetails()}getCurrentProjectDetails(){this.apiService.singleProjectDetails(this.projectId).subscribe(e=>{e.success?(this.project=e.data,this.toastrService.success(e.message,"Success"),this.loading=!1):this.toastrService.warning(e.message,"Failed")},e=>{this.toastrService.error(e.errors.message,"Error")})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.gz),t.Y36(T.s),t.Y36(j._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-single-project-details"]],decls:1,vars:3,consts:[["class","mat-elevation-z8 content",4,"appAccessControl"],[1,"mat-elevation-z8","content"],["class","d-flex justify-content-center my-1",4,"ngIf"],[1,"m-5"],[1,"text-center","mt-2"],[1,""],[4,"ngIf"],[1,"d-flex","justify-content-center","my-1"],["role","status","aria-hidden","true",1,"spinner-border"],[1,"form-row"],[1,"col-md-4"],["type","text",1,"form-control",3,"value"],[1,"form-control","text-lowercase",3,"value"]],template:function(e,i){1&e&&t.YNc(0,K,7,3,"div",0),2&e&&t.Q6J("appAccessControl",t.VKq(1,$,i.permissionType.VIEW_PROJECTS))},directives:[v.J,l.O5,n._Y,n.JL],pipes:[l.uU],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}label[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:20px;line-height:36px;color:#000}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:27px;color:#b7b7b7}p[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:20px;line-height:48px;color:#1c416d}']}),o})();var b=a(3815),C=a(9866);function G(o,r){if(1&o&&(t.TgZ(0,"option",52),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}function W(o,r){if(1&o&&(t.TgZ(0,"option",52),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}function X(o,r){if(1&o&&(t.TgZ(0,"button",56),t._uU(1,"Add New Project"),t.qZA()),2&o){const e=t.oxw(3);t.Q6J("disabled",e.projectForm.invalid)}}function tt(o,r){1&o&&(t.TgZ(0,"button",57),t._uU(1,"Processing New Project..."),t.qZA())}function et(o,r){if(1&o&&(t.TgZ(0,"div",53),t.YNc(1,X,2,1,"button",54),t.YNc(2,tt,2,0,"button",55),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!e.submitting),t.xp6(1),t.Q6J("ngIf",e.submitting)}}const ot=function(o){return[o,"nav"]};function rt(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",1),t.TgZ(1,"h2",2),t._uU(2,"Add New Project"),t.qZA(),t.TgZ(3,"div",3),t.TgZ(4,"form",4),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().onSubmit()}),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t.TgZ(7,"label",7),t._uU(8,"Name"),t.qZA(),t._UZ(9,"input",8),t.qZA(),t.TgZ(10,"div",6),t.TgZ(11,"label",7),t._uU(12,"Project Type"),t.qZA(),t.TgZ(13,"select",9),t.TgZ(14,"option",10),t._uU(15,"Select Project Type"),t.qZA(),t.TgZ(16,"option",11),t._uU(17,"Regular"),t.qZA(),t.TgZ(18,"option",12),t._uU(19,"Spotlight"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"div",6),t.TgZ(21,"label",13),t._uU(22,"Category"),t.qZA(),t._UZ(23,"input",14),t.qZA(),t.TgZ(24,"div",6),t.TgZ(25,"label",15),t._uU(26,"Description"),t.qZA(),t._UZ(27,"input",16),t.qZA(),t.TgZ(28,"div",6),t.TgZ(29,"label",17),t._uU(30,"Budget"),t.qZA(),t._UZ(31,"input",18),t.qZA(),t.TgZ(32,"div",6),t.TgZ(33,"label",19),t._uU(34,"Ministry"),t.qZA(),t.TgZ(35,"select",20),t.NdJ("change",function(s){return t.CHM(e),t.oxw().onMinistryChange(s.target)}),t.YNc(36,G,2,2,"option",21),t.qZA(),t.qZA(),t.TgZ(37,"div",6),t.TgZ(38,"label",22),t._uU(39,"Bureaus"),t.qZA(),t.TgZ(40,"select",23),t.NdJ("change",function(s){return t.CHM(e),t.oxw().onBureauChange(s.target)}),t.YNc(41,W,2,2,"option",21),t.qZA(),t.qZA(),t.TgZ(42,"div",6),t.TgZ(43,"label",24),t._uU(44,"Project Status"),t.qZA(),t.TgZ(45,"select",25),t.TgZ(46,"option",26),t._uU(47,"Budgeted"),t.qZA(),t.TgZ(48,"option",27),t._uU(49,"Upcoming"),t.qZA(),t.TgZ(50,"option",28),t._uU(51,"In Progress"),t.qZA(),t.TgZ(52,"option",29),t._uU(53,"Completed"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(54,"div",6),t.TgZ(55,"label",30),t._uU(56,"Client"),t.qZA(),t._UZ(57,"input",31),t.qZA(),t.TgZ(58,"div",6),t.TgZ(59,"label",32),t._uU(60,"Contractor"),t.qZA(),t._UZ(61,"input",33),t.qZA(),t.TgZ(62,"div",6),t.TgZ(63,"label",34),t._uU(64," Contractor Contacts"),t.qZA(),t._UZ(65,"input",35),t.qZA(),t.TgZ(66,"div",6),t.TgZ(67,"label",36),t._uU(68,"Facilitator"),t.qZA(),t._UZ(69,"input",37),t.qZA(),t.TgZ(70,"div",6),t.TgZ(71,"label",38),t._uU(72,"Facilitator Contacts"),t.qZA(),t._UZ(73,"input",39),t.qZA(),t.TgZ(74,"div",6),t.TgZ(75,"label",40),t._uU(76,"Expected Start Date"),t.qZA(),t._UZ(77,"input",41),t.qZA(),t.TgZ(78,"div",6),t.TgZ(79,"label",42),t._uU(80,"Expected End Date"),t.qZA(),t._UZ(81,"input",43),t.qZA(),t.TgZ(82,"div",6),t.TgZ(83,"label",44),t._uU(84,"Total Duration"),t.qZA(),t._UZ(85,"input",45),t.qZA(),t.TgZ(86,"div",6),t.TgZ(87,"label",46),t._uU(88,"Banner Images"),t.qZA(),t.TgZ(89,"input",47),t.NdJ("change",function(s){return t.CHM(e),t.oxw().handleFileInput(s)}),t.qZA(),t.qZA(),t.TgZ(90,"div",6),t.TgZ(91,"label",48),t._uU(92,"Upload Other Images"),t.qZA(),t.TgZ(93,"input",49),t.NdJ("change",function(s){return t.CHM(e),t.oxw().handleMultipleFileInput(s)}),t.qZA(),t.qZA(),t.qZA(),t.YNc(94,et,3,2,"div",50),t.qZA(),t._UZ(95,"ngx-spinner",51),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("formGroup",e.projectForm),t.xp6(32),t.Q6J("ngForOf",e.ministries),t.xp6(5),t.Q6J("ngForOf",e.bureaus),t.xp6(53),t.Q6J("appAccessControl",t.VKq(4,ot,e.permissionType.CREATE_PROJECTS))}}const it=function(o){return[o,"page"]};let nt=(()=>{class o{constructor(e,i,s,c){this.formBuilder=e,this.spinner=i,this.toastrService=s,this.apiService=c,this.permissionType=h.v,this.loading=!0,this.submitting=!1,this.projectImages=[]}ngOnInit(){this.getBureaus(),this.getMinistries(),this.projectFormControls()}getMinistries(){this.apiService.getMinistry().subscribe(e=>{this.ministries=e.data})}onMinistryChange(e){this.selectedMinistryId=e.value}getBureaus(){this.apiService.getBureaus().subscribe(e=>{this.bureaus=e.data})}onBureauChange(e){this.selectedBureauId=e.value}projectFormControls(){this.projectForm=this.formBuilder.group({name:["",n.kI.required],description:["",n.kI.required],client:["",n.kI.required],category:["",n.kI.required],budget:["",n.kI.required],contractor:["",n.kI.required],contractor_contacts:["",n.kI.required],facilitator_name:["",n.kI.required],facilitator_contacts:["",n.kI.required],total_duration:["",n.kI.required],start_date:["",n.kI.required],end_date:["",n.kI.required],type:["",n.kI.required],status:[""]})}get form(){return this.projectForm.controls}onSubmit(){this.submitting=!0,this.apiService.createNewProjects({ministry_id:this.selectedMinistryId,bureaus_id:this.selectedBureauId,client:this.form.client.value,type:this.form.type.value,contractor:this.form.contractor.value,contractor_contacts:this.form.contractor_contacts.value,description:this.form.description.value,end_date:this.form.end_date.value,facilitator_contacts:this.form.facilitator_contacts.value,facilitator_name:this.form.facilitator_name.value,project_image:this.cardImageBase64,status:"upcoming",category:this.form.category.value,name:this.form.name.value,start_date:this.form.start_date.value,total_duration:this.form.total_duration.value,budget:this.form.budget.value,other_project_images:this.projectImages}).subscribe(i=>{i?(this.submitting=!1,this.toastrService.success("You have successfully added a new project")):(this.submitting=!1,this.toastrService.error("Something went wrong while adding project,try again later","Failed"))},i=>{this.submitting=!1,this.toastrService.error(i.errors.message)})}handleFileInput(e){if(this.imageError=null,e.target.files&&e.target.files[0]){const i=20971520,s=["image/png","image/jpeg"],c=15200,u=25600;if(e.target.files[0].size>i)return this.imageError="Maximum size allowed is "+i/1e3+"Mb",this.toastrService.error(this.imageError,"Error"),!1;if(!b.includes(s,e.target.files[0].type))return this.imageError="Only Images are allowed ( JPG | PNG )",this.toastrService.error(this.imageError,"Error"),!1;const g=new FileReader;g.onload=m=>{const _=new Image;_.src=m.target.result,_.onload=Z=>{if(Z.currentTarget.height>c&&Z.currentTarget.width>u)return this.imageError="Maximum dimensions allowed "+c+"*"+u+"px",!1;this.cardImageBase64=m.target.result,this.isImageSaved=!0}},g.readAsDataURL(e.target.files[0])}}handleMultipleFileInput(e){if(this.imageError=null,e.target.files&&e.target.files[0]){const i=20971520,s=["image/png","image/jpeg"],c=15200,u=25600;if(e.target.files[0].size>i)return this.imageError="Maximum size allowed is "+i/1e3+"Mb",this.toastrService.error(this.imageError,"Error"),!1;if(!b.includes(s,e.target.files[0].type))return this.imageError="Only Images are allowed ( JPG | PNG )",this.toastrService.error(this.imageError,"Error"),!1;const g=new FileReader;g.onload=m=>{const _=new Image;_.src=m.target.result,_.onload=Z=>{if(Z.currentTarget.height>c&&Z.currentTarget.width>u)return this.imageError="Maximum dimensions allowed "+c+"*"+u+"px",!1;{let dt=m.target.result;this.spinner.show(),this.apiService.uploadProjectImages(dt).subscribe(f=>{this.spinner.hide(),this.projectImages.push(f.file_path),this.toastrService.success(f.message,"Success")},f=>{this.toastrService.error(f.error.message,"Error")})}}},g.readAsDataURL(e.target.files[0])}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(n.qu),t.Y36(C.t2),t.Y36(j._W),t.Y36(T.s))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-new-project"]],decls:1,vars:3,consts:[["class","content mat-elevation-z8",4,"appAccessControl"],[1,"content","mat-elevation-z8"],[1,"text-center","text-dark"],[1,"add-new-user"],["enctype","multipart/form-data",3,"formGroup","ngSubmit"],[1,"form-row","m-3"],[1,"col-md-4"],["for","name"],["type","text","id","name","formControlName","name","placeholder","Agriculture","required","",1,"form-control"],["formControlName","type","required","",1,"form-control"],["disabled",""],["value","regular"],["value","spotlight"],["for","category"],["type","text","id","category","formControlName","category","placeholder","Transportation","required","",1,"form-control"],["for","description"],["type","text","id","description","formControlName","description","placeholder","","required","",1,"form-control"],["for","budget"],["type","number","id","budget","formControlName","budget","placeholder","","required","",1,"form-control"],["for","ministry"],["id","ministry",1,"form-control",3,"change"],[3,"value",4,"ngFor","ngForOf"],["for","bureau"],["id","bureau",1,"form-control",3,"change"],["for","status"],["formControlName","status","id","status",1,"custom-select"],["value","budgeted"],["value","upcoming"],["value","in-progress"],["value","completed"],["for","client"],["type","text","id","client","formControlName","client","placeholder","","required","",1,"form-control"],["for","contractor"],["type","text","id","contractor","formControlName","contractor","placeholder","","required","",1,"form-control"],["for","contractor-contacts"],["type","text","id","contractor-contacts","formControlName","contractor_contacts","placeholder","","required","",1,"form-control"],["for","facilitator"],["type","text","id","facilitator","formControlName","facilitator_name","placeholder","","required","",1,"form-control"],["for","facilitator-contacts"],["type","text","id","facilitator-contacts","formControlName","facilitator_contacts","placeholder","","required","",1,"form-control"],["for","start-date"],["type","date","id","start-date","formControlName","start_date","placeholder","","required","",1,"form-control"],["for","end-date"],["type","date","id","end-date","formControlName","end_date","placeholder","","required","",1,"form-control"],["for","total-duration"],["type","text","id","total-duration","formControlName","total_duration","placeholder","","required","",1,"form-control"],["for","project_image"],["type","file","id","project_image","multiple","","placeholder","","required","",1,"form-control-file",3,"change"],["for","other_project_images"],["type","file","id","other_project_images","multiple","","placeholder","","required","",1,"form-control-file",3,"change"],["class","submission m-4 text-right",4,"appAccessControl"],["bdColor","rgba(0, 0, 0, 1)","template","<img src='https://media.giphy.com/media/o8igknyuKs6aY/giphy.gif' />"],[3,"value"],[1,"submission","m-4","text-right"],["class","btn btn-danger",3,"disabled",4,"ngIf"],["class","btn btn-success",4,"ngIf"],[1,"btn","btn-danger",3,"disabled"],[1,"btn","btn-success"]],template:function(e,i){1&e&&t.YNc(0,rt,96,6,"div",0),2&e&&t.Q6J("appAccessControl",t.VKq(1,it,i.permissionType.CREATE_PROJECTS))},directives:[v.J,n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,n.Q7,n.EJ,n.YN,n.Kr,n.wV,l.sg,C.Ro,l.O5],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}label[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:20px;line-height:36px;color:#000}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:27px;color:#b7b7b7}']}),o})();var st=a(8668);const at=[{path:"",component:y.k,canActivate:[st.a],children:[{path:"kogi-projects-list",component:B},{path:"kogi-projects-list/details",component:H},{path:"add-new-kogi-project",component:nt}]}];let ct=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.Bz.forChild(at)],d.Bz]}),o})();var lt=a(4466);let pt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.ez,ct,lt.m]]}),o})()}}]);