"use strict";(self.webpackChunkadmin_development=self.webpackChunkadmin_development||[]).push([[610],{610:(P,f,o)=>{o.r(f),o.d(f,{IdeaSuggestionsModule:()=>$});var m=o(8583),g=o(3423),h=o(7037),a=o(3679),v=o(5299),c=o(2340),t=o(7716),l=o(5384),_=o(9344),Z=o(8562),C=o(4142),A=o(1095),p=o(3935),T=o(6627);function S(n,s){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"slice"),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij("",t.Dn7(2,1,e.response,0,20),"...")}}function y(n,s){1&n&&(t.TgZ(0,"span",24),t._uU(1,"You have not responded to this suggestion"),t.qZA())}const b=function(){return["/admin/suggestions/my-submissions/details"]};function x(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"a",25),t.NdJ("click",function(){t.CHM(e);const u=t.oxw().$implicit;return t.oxw(2).onSuggestionClick(u.id)}),t._uU(1,"Respond"),t.qZA()}2&n&&t.Q6J("routerLink",t.DdM(1,b))}const r=function(n){return["/admin/suggestions/submissions/details",n]},q=function(n){return[n,"nav"]};function U(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td",13),t._uU(2),t.qZA(),t.TgZ(3,"td",13),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"td",14),t._UZ(7,"img",15),t.qZA(),t.TgZ(8,"td",13),t._uU(9),t.qZA(),t.TgZ(10,"td",13),t._uU(11),t.ALo(12,"slice"),t.qZA(),t.TgZ(13,"td",13),t.YNc(14,S,3,5,"span",16),t.YNc(15,y,2,0,"span",17),t.qZA(),t.TgZ(16,"td",14),t.TgZ(17,"span",18),t._uU(18),t.qZA(),t.qZA(),t.TgZ(19,"td",14),t.TgZ(20,"button",19),t.TgZ(21,"mat-icon"),t._uU(22,"more_vert"),t.qZA(),t.qZA(),t.TgZ(23,"mat-menu",null,20),t.TgZ(25,"a",21),t._uU(26,"View Entry"),t.qZA(),t.YNc(27,x,2,2,"a",22),t.TgZ(28,"a",23),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.oxw(2).remove(d.id)}),t._uU(29,"Delete Entry"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=s.$implicit,i=s.index,u=t.MAs(24),d=t.oxw(2);t.xp6(2),t.Oqu(i+1),t.xp6(2),t.Oqu(t.lcZ(5,12,e.created_at)),t.xp6(3),t.Q6J("src",d.imageURL+e.attachment_url,t.LSH),t.xp6(2),t.AsE("",e.user.first_name," ",e.user.last_name,""),t.xp6(2),t.hij("",t.Dn7(12,14,e.message,0,20),"..."),t.xp6(3),t.Q6J("ngIf",e.response),t.xp6(1),t.Q6J("ngIf",!e.response),t.xp6(3),t.Oqu(e.status),t.xp6(2),t.Q6J("matMenuTriggerFor",u),t.xp6(5),t.Q6J("routerLink",t.VKq(18,r,e.id)),t.xp6(2),t.Q6J("appAccessControl",t.VKq(20,q,d.permissions.RESPOND_TO_QUERIES))}}function w(n,s){1&n&&(t.TgZ(0,"h4",14),t._uU(1,"You have no new suggestions"),t.qZA())}function I(n,s){if(1&n&&(t.TgZ(0,"div",13),t.YNc(1,w,2,0,"h4",26),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",0==e.suggestions.length)}}function R(n,s){1&n&&(t.TgZ(0,"div",27),t._UZ(1,"div",28),t.qZA())}function F(n,s){if(1&n&&(t.TgZ(0,"div",2),t.TgZ(1,"h5",3),t._uU(2,"Ideas/Suggestions"),t.qZA(),t.TgZ(3,"div",4),t.TgZ(4,"div",5),t.TgZ(5,"table",6),t.TgZ(6,"thead",7),t.TgZ(7,"tr"),t.TgZ(8,"th",8),t._uU(9,"#"),t.qZA(),t.TgZ(10,"th",8),t._uU(11,"Date"),t.qZA(),t.TgZ(12,"th",8),t._uU(13,"Attachment"),t.qZA(),t.TgZ(14,"th",8),t._uU(15,"Name"),t.qZA(),t.TgZ(16,"th",8),t._uU(17,"Suggestion"),t.qZA(),t.TgZ(18,"th",8),t._uU(19,"Response"),t.qZA(),t.TgZ(20,"th",9),t._uU(21,"Status"),t.qZA(),t.TgZ(22,"th",9),t._uU(23,"Actions"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"tbody"),t.YNc(25,U,30,22,"tr",10),t.qZA(),t.qZA(),t.qZA(),t.YNc(26,I,2,1,"div",11),t.YNc(27,R,2,0,"div",12),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(25),t.Q6J("ngForOf",e.suggestions),t.xp6(1),t.Q6J("ngIf",e.suggestions),t.xp6(1),t.Q6J("ngIf",e.loading)}}function B(n,s){if(1&n&&(t.TgZ(0,"button",49),t._uU(1,"Send Response"),t.qZA()),2&n){const e=t.oxw(2);t.Q6J("disabled",e.responseForm.invalid)}}function E(n,s){1&n&&(t.TgZ(0,"button",50),t._uU(1,"Sending Response..."),t.qZA())}function Y(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",29),t.TgZ(1,"div",30),t.TgZ(2,"div",31),t.TgZ(3,"div",32),t.TgZ(4,"h3",33),t._uU(5,"Respond to Suggestion"),t.qZA(),t.TgZ(6,"button",34),t.TgZ(7,"span",35),t._uU(8,"\xd7"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",36),t.TgZ(10,"form",37),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().onOfficialResponse()}),t.TgZ(11,"div",38),t.TgZ(12,"label"),t._uU(13,"Status"),t.qZA(),t.TgZ(14,"select",39),t.TgZ(15,"option",40),t._uU(16,"Under Review"),t.qZA(),t.TgZ(17,"option",41),t._uU(18,"Rejected"),t.qZA(),t.TgZ(19,"option",42),t._uU(20,"Approved"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"div",38),t.TgZ(22,"label",43),t._uU(23,"Response"),t.qZA(),t._UZ(24,"textarea",44),t.qZA(),t.TgZ(25,"div",45),t.TgZ(26,"button",46),t._uU(27,"Close"),t.qZA(),t.YNc(28,B,2,1,"button",47),t.YNc(29,E,2,0,"button",48),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(10),t.Q6J("formGroup",e.responseForm),t.xp6(18),t.Q6J("ngIf",!e.submitting),t.xp6(1),t.Q6J("ngIf",e.submitting)}}const M=function(n){return[n,"page"]};let L=(()=>{class n{constructor(e,i,u,d,O){this.apiService=e,this.fb=i,this.toastrService=u,this.confirmationAlert=d,this.router=O,this.permissions=v.v,this.submitting=!1,this.loading=!0,this.imageURL=c.N.ASSETS_URL}ngOnInit(){this.suggestionsList(),this.responseFormControl()}suggestionsList(){this.apiService.getListOfMySuggestionsRequest().subscribe(e=>{this.suggestions=e.data,this.loading=!1},e=>{this.toastrService.error(e.error.message,"Error")})}responseFormControl(){this.responseForm=this.fb.group({response:["",[a.kI.required]],status:[""]})}get form(){return this.responseForm.controls}onOfficialResponse(){this.submitting=!0,this.apiService.respondToSubmission({response:this.form.response.value,status:this.form.status.value},this.suggestion_id).subscribe(i=>{this.toastrService.success("You have successfully responded to this suggestion","Success"),this.submitting=!1,this.reloadCurrentRoute()},i=>{this.toastrService.error(i.error.message,"Error"),this.submitting=!1})}reloadCurrentRoute(){let e=this.router.url;this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>{this.router.navigate([e])})}onSuggestionClick(e){this.suggestion_id=e}remove(e){this.confirmationAlert.sweetAlert("Are you sure?","Deleting a suggestion is an irreversible process and the sender will cease to see it.","","","question",!0,"Yes, Delete Suggestion!","No, Cancel","",this.apiService.removeSubmissionRequest(e))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.s),t.Y36(a.qu),t.Y36(_._W),t.Y36(Z.C),t.Y36(g.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-submissions"]],decls:2,vars:6,consts:[["class","content mat-elevation-z8",4,"appAccessControl"],["class","modal fade","data-backdrop","false","id","exampleModal","tabindex","-1","role","dialog","aria-labelledby","exampleModalLabel","aria-hidden","true",4,"appAccessControl"],[1,"content","mat-elevation-z8"],[1,"text-center","title"],[1,"appointment-table","p-3"],[1,"table-responsive"],[1,"table","table-bordered","table-hover","table-striped"],[1,"thead-bg"],["scope","col"],["scope","col",1,"text-center"],[4,"ngFor","ngForOf"],["class","",4,"ngIf"],["class","d-flex justify-content-center my-1",4,"ngIf"],[1,""],[1,"text-center"],["alt","attachment","height","50","width","50",1,"rounded-circle",3,"src"],[4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"text-capitalize","badge","badge-danger"],["mat-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"routerLink"],["mat-menu-item","","data-toggle","modal","data-target","#exampleModal",3,"routerLink","click",4,"appAccessControl"],["mat-menu-item","",1,"text-danger",3,"click"],[1,"text-danger"],["mat-menu-item","","data-toggle","modal","data-target","#exampleModal",3,"routerLink","click"],["class","text-center",4,"ngIf"],[1,"d-flex","justify-content-center","my-1"],["role","status","aria-hidden","true",1,"spinner-border"],["data-backdrop","false","id","exampleModal","tabindex","-1","role","dialog","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["formControlName","status",1,"form-control"],["value","under-review"],["value","rejected"],["value","approved"],["for","response"],["cols","7","rows","7","id","response","formControlName","response",1,"form-control"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary"],["type","submit","class","btn btn-danger",3,"disabled",4,"ngIf"],["type","button","class","btn btn-success",4,"ngIf"],["type","submit",1,"btn","btn-danger",3,"disabled"],["type","button",1,"btn","btn-success"]],template:function(e,i){1&e&&(t.YNc(0,F,28,3,"div",0),t.YNc(1,Y,30,3,"div",1)),2&e&&(t.Q6J("appAccessControl",t.VKq(2,M,i.permissions.VIEW_IDEAS)),t.xp6(1),t.Q6J("appAccessControl",t.VKq(4,M,i.permissions.RESPOND_TO_QUERIES)))},directives:[C.J,m.sg,m.O5,A.lW,p.p6,T.Hw,p.VK,g.yS,p.OP,a._Y,a.JL,a.sg,a.EJ,a.JJ,a.u,a.YN,a.Kr,a.Fj],pipes:[m.uU,m.OU],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}.appointment-cols[_ngcontent-%COMP%]{margin-top:20px}h5[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:24px;line-height:175.6%;color:#000}.appointment-heading[_ngcontent-%COMP%]   .add-appointment[_ngcontent-%COMP%]{background:#003679;border-radius:3px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:16px;line-height:175.6%;padding:5px;text-decoration:none;color:#fff}.appointment-list[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}.appointment-table[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}.appointment-table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:#FFFFFF;border:1px solid #1C416D;box-sizing:border-box;border-radius:2px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}.appointment-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:#E1EAFB;font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}.appointment-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}.table-totals[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}@media only screen and (min-device-width: 320px) and (max-device-width: 480px){.appointment-heading[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.appointment-cols[_ngcontent-%COMP%]{margin-top:0}.appointment-heading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:400;font-size:16px;color:#000;text-align:center}.appointment-heading[_ngcontent-%COMP%]   .add-appointment[_ngcontent-%COMP%]{background:#003679;border-radius:3px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:300;font-size:12px;text-decoration:none;color:#fff}.appointment-table[_ngcontent-%COMP%]   .appointment-list[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;color:#002b5c;margin:5px;animation-name:showing-items;animation-duration:4s}@keyframes showing-items{0%{color:red}25%{color:#ff0}50%{color:#00f}to{color:green}}.appointment-table[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;color:#000}.appointment-table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:#FFFFFF;border:1px solid #1C416D;box-sizing:border-box;border-radius:2px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:12px;color:#000}}']}),n})();var J=o(3537);function z(n,s){1&n&&(t.TgZ(0,"div",3),t._UZ(1,"div",4),t.qZA())}function D(n,s){if(1&n&&(t.TgZ(0,"div",8),t.TgZ(1,"h4"),t._uU(2),t.ALo(3,"dateAgo"),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.qZA(),t.qZA()),2&n){const e=t.oxw(2);t.xp6(2),t.hij("You Reacted to this suggestion ",t.lcZ(3,2,e.suggestion.updated_at)," By: "),t.xp6(3),t.Oqu(e.suggestion.response)}}function N(n,s){if(1&n&&(t.TgZ(0,"div",5),t.TgZ(1,"div",6),t._UZ(2,"img",7),t.qZA(),t.TgZ(3,"div",8),t.TgZ(4,"h4"),t._uU(5),t.ALo(6,"dateAgo"),t.TgZ(7,"span",9),t._uU(8),t.qZA(),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA(),t.qZA(),t.YNc(11,D,6,4,"div",10),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("src",e.imageURL+e.suggestion.attachment_url,t.LSH),t.xp6(3),t.lnq("Submitted ",t.lcZ(6,7,e.suggestion.created_at)," By: ",e.suggestion.user.first_name," ",e.suggestion.user.last_name," "),t.xp6(3),t.Oqu(e.suggestion.status),t.xp6(2),t.Oqu(e.suggestion.message),t.xp6(1),t.Q6J("ngIf",e.suggestion.response)}}let Q=(()=>{class n{constructor(e,i,u,d){this.apiService=e,this.toastrService=i,this.confirmationAlert=u,this.activatedRoute=d,this.loading=!0,this.imageURL=c.N.ASSETS_URL}ngOnInit(){this.getSuggestionDetails()}getSuggestionDetails(){this.apiService.getSingleSubmissionRequest(this.activatedRoute.snapshot.params.id).subscribe(i=>{this.suggestion=i.data,this.loading=!1},i=>{this.toastrService.error(i.error.message,"Error"),this.loading=!1})}remove(e){this.confirmationAlert.sweetAlert("Are you sure?","Deleting a suggestion is an irreversible process and the sender will cease to see it.","","","question",!0,"Yes, Delete Appointment!","No, Cancel","",this.apiService.removeSubmissionRequest(e))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.s),t.Y36(_._W),t.Y36(Z.C),t.Y36(g.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-single-submissions"]],decls:5,vars:2,consts:[[1,"content","mat-elevation-z8"],["class","d-flex justify-content-center my-1",4,"ngIf"],["class","suggestion",4,"ngIf"],[1,"d-flex","justify-content-center","my-1"],["role","status","aria-hidden","true",1,"spinner-border"],[1,"suggestion"],[1,"attachment"],["alt","attachment",3,"src"],[1,"suggestion-body"],[1,"badge","badge-danger"],["class","suggestion-body",4,"ngIf"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h3"),t._uU(2,"Suggestion Details"),t.qZA(),t.YNc(3,z,2,0,"div",1),t.YNc(4,N,12,9,"div",2),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngIf",i.loading),t.xp6(1),t.Q6J("ngIf",i.suggestion))},directives:[m.O5],pipes:[J.R],styles:[".content[_ngcontent-%COMP%]{height:auto;border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}h3[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-style:normal;font-weight:500;font-size:24px;line-height:60px;text-align:center;color:#2d2b96}.attachment[_ngcontent-%COMP%]{width:98%;margin:auto}.attachment[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:600px}.suggestion[_ngcontent-%COMP%]   .suggestion-body[_ngcontent-%COMP%]{padding:10px}.suggestion[_ngcontent-%COMP%]   .suggestion-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-style:normal;font-weight:700;font-size:20px;line-height:175.6%;text-align:left;color:#000}.suggestion[_ngcontent-%COMP%]   .suggestion-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000;white-space:pre-line}"]}),n})();var W=o(8668);const j=[{path:"",component:h.k,canActivate:[W.a],children:[{path:"submissions",component:L},{path:"submissions/details/:id",component:Q}]}];let K=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.Bz.forChild(j)],g.Bz]}),n})();var k=o(4466);let $=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,k.m,K]]}),n})()},8562:(P,f,o)=>{o.d(f,{C:()=>v});var m=o(8259),g=o.n(m),h=o(7716),a=o(3423);let v=(()=>{class c{constructor(l){this.router=l,this.swalWithBootstrapButtons=g().mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"btn btn-danger"},buttonsStyling:!1})}sweetAlert(l,_,Z,C,A,p,T,S,y,b){return g().fire({title:l,text:_,input:Z,inputPlaceholder:C,icon:A,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",showCancelButton:p,confirmButtonText:T,cancelButtonText:S,showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}).then(x=>{x.value?b.subscribe(r=>{null!=r?r.success?(this.swalWithBootstrapButtons.fire("Congratulations,!",`${r.message}`,"success"),this.reloadCurrentRoute()):this.swalWithBootstrapButtons.fire("Failed,!",`${r.message}`,"warning"):this.swalWithBootstrapButtons.fire("Failed,!","Server Error","error")},r=>{this.swalWithBootstrapButtons.fire("Failed,!",`${r}`,"error")}):x.dismiss===g().DismissReason.cancel?this.swalWithBootstrapButtons.fire("Cancelled","Your request to cancel this operation was processed successfully!","error"):b.subscribe(r=>{r.success?(this.swalWithBootstrapButtons.fire("Congratulations,!",`${r.message}`,"success"),this.reloadCurrentRoute()):this.swalWithBootstrapButtons.fire("Failed,!",`${r.message}`,"warning")})})}reloadCurrentRoute(){let l=this.router.url;this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>{this.router.navigate([l])})}}return c.\u0275fac=function(l){return new(l||c)(h.LFG(a.F0))},c.\u0275prov=h.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);