"use strict";(self.webpackChunkadmin_development=self.webpackChunkadmin_development||[]).push([[610],{610:(Q,m,i)=>{i.r(m),i.d(m,{IdeaSuggestionsModule:()=>L});var g=i(8583),l=i(3423),f=i(7037),a=i(3679),Z=i(5299),t=i(7716),b=i(5384),h=i(9344),_=i(4142),x=i(1095),d=i(3935),p=i(6627);const A=function(){return["/admin/suggestions/my-submissions/details"]};function T(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"a",20),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().$implicit;return t.oxw(2).onSuggestionClick(r.id)}),t._uU(1,"Respond"),t.qZA()}2&n&&t.Q6J("routerLink",t.DdM(1,A))}const v=function(){return["/admin/suggestions/submissions/details"]},q=function(n){return[n,"nav"]};function C(n,o){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td",12),t._uU(2),t.qZA(),t.TgZ(3,"td",12),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"td",12),t._uU(7),t.qZA(),t.TgZ(8,"td",12),t._uU(9),t.qZA(),t.TgZ(10,"td",12),t._uU(11),t.qZA(),t.TgZ(12,"td",12),t._uU(13),t.qZA(),t.TgZ(14,"td",12),t._uU(15),t.qZA(),t.TgZ(16,"td",13),t.TgZ(17,"span",12),t._uU(18,"Pending"),t.qZA(),t.qZA(),t.TgZ(19,"td",14),t.TgZ(20,"button",15),t.TgZ(21,"mat-icon"),t._uU(22,"more_vert"),t.qZA(),t.qZA(),t.TgZ(23,"mat-menu",null,16),t.TgZ(25,"a",17),t._uU(26,"View Entry"),t.qZA(),t.YNc(27,T,2,2,"a",18),t.TgZ(28,"a",19),t._uU(29,"Delete Entry"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const e=o.$implicit,s=o.index,r=t.MAs(24),c=t.oxw(2);t.xp6(2),t.Oqu(s+1),t.xp6(2),t.Oqu(t.lcZ(5,11,e.created_at)),t.xp6(3),t.Oqu(e.official),t.xp6(2),t.AsE("",e.first_name," ",e.last_name,""),t.xp6(2),t.Oqu(e.office),t.xp6(2),t.Oqu(e.message),t.xp6(2),t.Oqu(e.response),t.xp6(5),t.Q6J("matMenuTriggerFor",r),t.xp6(5),t.Q6J("routerLink",t.DdM(13,v)),t.xp6(2),t.Q6J("appAccessControl",t.VKq(14,q,c.permissions.RESPOND_TO_QUERIES))}}function y(n,o){1&n&&(t.TgZ(0,"div",21),t._UZ(1,"div",22),t.qZA())}function P(n,o){if(1&n&&(t.TgZ(0,"div",2),t.TgZ(1,"h5",3),t._uU(2,"Ideas/Suggestions"),t.qZA(),t.TgZ(3,"div",4),t.TgZ(4,"div",5),t.TgZ(5,"table",6),t.TgZ(6,"thead",7),t.TgZ(7,"tr"),t.TgZ(8,"th",8),t._uU(9,"S/N"),t.qZA(),t.TgZ(10,"th",8),t._uU(11,"Date"),t.qZA(),t.TgZ(12,"th",8),t._uU(13,"Name"),t.qZA(),t.TgZ(14,"th",8),t._uU(15,"Official"),t.qZA(),t.TgZ(16,"th",8),t._uU(17,"Office"),t.qZA(),t.TgZ(18,"th",8),t._uU(19,"Suggestion"),t.qZA(),t.TgZ(20,"th",8),t._uU(21,"Response"),t.qZA(),t.TgZ(22,"th",9),t._uU(23,"Status"),t.qZA(),t.TgZ(24,"th",9),t._uU(25,"Actions"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"tbody"),t.YNc(27,C,30,16,"tr",10),t.qZA(),t.qZA(),t.qZA(),t.YNc(28,y,2,0,"div",11),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(27),t.Q6J("ngForOf",e.suggestions),t.xp6(1),t.Q6J("ngIf",e.loading)}}function M(n,o){if(1&n&&(t.TgZ(0,"button",39),t._uU(1,"Send Response"),t.qZA()),2&n){const e=t.oxw(2);t.Q6J("disabled",e.responseForm.invalid)}}function S(n,o){1&n&&(t.TgZ(0,"button",40),t._uU(1,"Sending Response..."),t.qZA())}function O(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",23),t.TgZ(1,"div",24),t.TgZ(2,"div",25),t.TgZ(3,"div",26),t.TgZ(4,"h6",27),t._uU(5,"Respond to Suggestion"),t.qZA(),t.TgZ(6,"button",28),t.TgZ(7,"span",29),t._uU(8,"\xd7"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",30),t.TgZ(10,"form",31),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().onSubmit()}),t.TgZ(11,"div",32),t.TgZ(12,"label",33),t._uU(13,"Response"),t.qZA(),t._UZ(14,"textarea",34),t.qZA(),t.TgZ(15,"div",35),t.TgZ(16,"button",36),t._uU(17,"Close"),t.qZA(),t.YNc(18,M,2,1,"button",37),t.YNc(19,S,2,0,"button",38),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(10),t.Q6J("formGroup",e.responseForm),t.xp6(8),t.Q6J("ngIf",!e.submitting),t.xp6(1),t.Q6J("ngIf",e.submitting)}}const u=function(n){return[n,"page"]};let U=(()=>{class n{constructor(e,s,r,c){this.apiService=e,this.fb=s,this.toastrService=r,this.router=c,this.permissions=Z.v,this.submitting=!1,this.loading=!0}ngOnInit(){this.suggestionsList(),this.responseFormControl()}suggestionsList(){this.apiService.getListOfSuggestions().subscribe(e=>{this.suggestions=e.data,this.loading=!1},e=>{this.toastrService.error(e.error.message,"Error")})}responseFormControl(){this.responseForm=this.fb.group({response:["",[a.kI.required]]})}get form(){return this.responseForm.controls}onSubmit(){this.submitting=!0,this.apiService.respondToSuggestions({response:this.form.response.value,suggestion_id:this.suggestion_id}).subscribe(s=>{this.toastrService.success("You have successfully responded to this suggestion","Success"),this.submitting=!1,this.reloadCurrentRoute()},s=>{this.toastrService.error(s.error.message,"Error"),this.submitting=!1})}reloadCurrentRoute(){let e=this.router.url;this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>{this.router.navigate([e])})}onSuggestionClick(e){this.suggestion_id=e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(b.s),t.Y36(a.qu),t.Y36(h._W),t.Y36(l.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-submissions"]],decls:2,vars:6,consts:[["class","content mat-elevation-z8",4,"appAccessControl"],["class","modal fade","data-backdrop","false","id","exampleModal","tabindex","-1","role","dialog","aria-labelledby","exampleModalLabel","aria-hidden","true",4,"appAccessControl"],[1,"content","mat-elevation-z8"],[1,"text-center","title"],[1,"appointment-table"],[1,"table-responsive"],[1,"table","table-bordered","table-hover","table-striped"],[1,"thead-bg"],["scope","col"],["scope","col",1,"text-center"],[4,"ngFor","ngForOf"],["class","d-flex justify-content-center my-1",4,"ngIf"],[1,""],[1,"text-center","text-success"],[1,"text-center"],["mat-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"routerLink"],["mat-menu-item","","data-toggle","modal","data-target","#exampleModal",3,"routerLink","click",4,"appAccessControl"],["mat-menu-item","",1,"text-danger"],["mat-menu-item","","data-toggle","modal","data-target","#exampleModal",3,"routerLink","click"],[1,"d-flex","justify-content-center","my-1"],["role","status","aria-hidden","true",1,"spinner-border"],["data-backdrop","false","id","exampleModal","tabindex","-1","role","dialog","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","response"],["cols","7","rows","7","id","response","formControlName","response",1,"form-control"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary"],["type","submit","class","btn btn-danger",3,"disabled",4,"ngIf"],["type","button","class","btn btn-success",4,"ngIf"],["type","submit",1,"btn","btn-danger",3,"disabled"],["type","button",1,"btn","btn-success"]],template:function(e,s){1&e&&(t.YNc(0,P,29,2,"div",0),t.YNc(1,O,20,3,"div",1)),2&e&&(t.Q6J("appAccessControl",t.VKq(2,u,s.permissions.VIEW_IDEAS)),t.xp6(1),t.Q6J("appAccessControl",t.VKq(4,u,s.permissions.RESPOND_TO_QUERIES)))},directives:[_.J,g.sg,g.O5,x.lW,d.p6,p.Hw,d.VK,l.yS,d.OP,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u],pipes:[g.uU],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}.appointment-cols[_ngcontent-%COMP%]{margin-top:20px}h5[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:24px;line-height:175.6%;color:#000}.appointment-heading[_ngcontent-%COMP%]   .add-appointment[_ngcontent-%COMP%]{background:#003679;border-radius:3px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:16px;line-height:175.6%;padding:5px;text-decoration:none;color:#fff}.appointment-list[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}.appointment-table[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}.appointment-table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:#FFFFFF;border:1px solid #1C416D;box-sizing:border-box;border-radius:2px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}.appointment-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:#E1EAFB;font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}.appointment-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}.table-totals[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}@media only screen and (min-device-width: 320px) and (max-device-width: 480px){.appointment-heading[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.appointment-cols[_ngcontent-%COMP%]{margin-top:0}.appointment-heading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:400;font-size:16px;color:#000;text-align:center}.appointment-heading[_ngcontent-%COMP%]   .add-appointment[_ngcontent-%COMP%]{background:#003679;border-radius:3px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:300;font-size:12px;text-decoration:none;color:#fff}.appointment-table[_ngcontent-%COMP%]   .appointment-list[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;color:#002b5c;margin:5px;animation-name:showing-items;animation-duration:4s}@keyframes showing-items{0%{color:red}25%{color:#ff0}50%{color:#00f}to{color:green}}.appointment-table[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;color:#000}.appointment-table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:#FFFFFF;border:1px solid #1C416D;box-sizing:border-box;border-radius:2px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:12px;color:#000}}']}),n})();var F=i(1769);const w=function(){return["/appointments/my-appointments"]};let z=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-single-submissions"]],decls:71,vars:2,consts:[[1,"content","mat-elevation-z8"],[1,"back",3,"routerLink"],[1,""],[1,"row","justify-content-evenly","content-header"],[1,"col-md-6","text-left","action-buttons"],[1,"status"],[1,"col-md-6","text-right"],[1,"row"],[1,"col-md-10"],[1,"col-md-1","border-end","p-2"],[1,"edit-button"],[1,"col-md-1","p-2"],[1,"clear-button"],[1,"divider"],[1,"invitee-details"],[1,"title"],[1,"row","mt-5"],[1,"col-md-6"],[1,"reason-for-appointment","mt-3"],[1,"border"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"a",1),t.TgZ(2,"span",2),t.TgZ(3,"mat-icon"),t._uU(4,"keyboard_backspace"),t.qZA(),t.qZA(),t._uU(5,"Back to Appointments "),t.qZA(),t.TgZ(6,"div",3),t.TgZ(7,"div",4),t.TgZ(8,"button",5),t._uU(9,"Pending"),t.qZA(),t.qZA(),t.TgZ(10,"div",6),t.TgZ(11,"div",7),t._UZ(12,"div",8),t.TgZ(13,"div",9),t.TgZ(14,"button",10),t.TgZ(15,"mat-icon"),t._uU(16," border_color"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",11),t.TgZ(18,"button",12),t.TgZ(19,"mat-icon"),t._uU(20,"clear"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"div",13),t._UZ(22,"mat-divider"),t.qZA(),t.TgZ(23,"div",14),t.TgZ(24,"h4",15),t._uU(25,"Submitted To"),t.qZA(),t.TgZ(26,"div",13),t._UZ(27,"mat-divider"),t.qZA(),t.TgZ(28,"div",16),t.TgZ(29,"div",17),t.TgZ(30,"p",2),t.TgZ(31,"mat-icon"),t._uU(32,"perm_identity"),t.qZA(),t._uU(33," Dr. Alisu Dansuki"),t.qZA(),t.qZA(),t.TgZ(34,"div",17),t.TgZ(35,"p",2),t.TgZ(36,"mat-icon"),t._uU(37,"email"),t.qZA(),t._uU(38," emailaddress@email.com"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(39,"div",7),t.TgZ(40,"div",17),t.TgZ(41,"p",2),t.TgZ(42,"mat-icon"),t._uU(43,"work"),t.qZA(),t._uU(44," Chief of Staff"),t.qZA(),t.qZA(),t.TgZ(45,"div",17),t.TgZ(46,"p",2),t.TgZ(47,"mat-icon"),t._uU(48," call"),t.qZA(),t._uU(49," +234 908 765 4321"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(50,"div",14),t.TgZ(51,"h4",15),t._uU(52,"Submission Details"),t.qZA(),t.TgZ(53,"div",13),t._UZ(54,"mat-divider"),t.qZA(),t.TgZ(55,"div",16),t.TgZ(56,"div",17),t.TgZ(57,"p",2),t.TgZ(58,"mat-icon"),t._uU(59,"calendar_today"),t.qZA(),t._uU(60," Jan. 7th, 2020."),t.qZA(),t.qZA(),t.TgZ(61,"div",17),t.TgZ(62,"p",2),t.TgZ(63,"mat-icon"),t._uU(64,"query_builder"),t.qZA(),t._uU(65," 11:30 AM"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(66,"div",18),t.TgZ(67,"p"),t._uU(68,"Idea/Suggestion"),t.qZA(),t.TgZ(69,"p",19),t._uU(70," Sed egestas, ante et vul, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. "),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("routerLink",t.DdM(1,w)))},directives:[l.yS,p.Hw,F.d],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}.back[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;text-decoration:none;font-style:normal;font-weight:500;font-size:18px;line-height:175.6%;color:#000}.content-header[_ngcontent-%COMP%]{margin:20px}.content-header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{background:#E1EAFB;border-radius:3px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:175.6%;text-align:center;color:#006f34;border:0}.content-header[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%]{border:0;background:#FFFFFF}.content-header[_ngcontent-%COMP%]   .clear-button[_ngcontent-%COMP%]{border-color:#fba714;color:#fba714;background:#FFFFFF}.divider[_ngcontent-%COMP%]{margin-top:20px}.invitee-details[_ngcontent-%COMP%]{margin:20px}.invitee-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:24px;line-height:175.6%;color:#000}.invitee-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:20px;line-height:175.6%;color:#000}.reason-for-appointment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:20px;line-height:175.6%;color:#000}.delete[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:18px;line-height:175.6%;margin:5px;text-align:right;-webkit-text-decoration-line:underline;text-decoration-line:underline;color:red}']}),n})();var k=i(8668);const I=[{path:"",component:f.k,canActivate:[k.a],children:[{path:"submissions",component:U},{path:"submissions/details",component:z}]}];let J=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.Bz.forChild(I)],l.Bz]}),n})();var E=i(4466);let L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.ez,E.m,J]]}),n})()}}]);