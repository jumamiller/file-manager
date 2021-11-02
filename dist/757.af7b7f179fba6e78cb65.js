"use strict";(self.webpackChunkadmin_development=self.webpackChunkadmin_development||[]).push([[757],{4757:(Q,l,e)=>{e.r(l),e.d(l,{ProposalsModule:()=>J});var a=e(8583),r=e(3423),c=e(7037),g=e(5299),m=e(2340),t=e(7716),f=e(5384),d=e(9344),u=e(4142),h=e(1095),p=e(3935),x=e(6627);function Z(n,s){1&n&&(t.TgZ(0,"th",8),t._uU(1,"Actions"),t.qZA())}function P(n,s){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const o=t.oxw().$implicit;t.xp6(1),t.Oqu(o.response)}}function v(n,s){1&n&&(t.TgZ(0,"span",23),t._uU(1,"You have not responded to this proposal"),t.qZA())}const _=function(){return["/admin/proposals/submissions/details"]},T=function(){return["/admin/proposals/my-submissions/details"]};function y(n,s){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td",13),t._uU(2),t.qZA(),t.TgZ(3,"td",13),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"td",14),t._UZ(7,"img",15),t.qZA(),t.TgZ(8,"td",13),t._uU(9),t.qZA(),t.TgZ(10,"td",13),t._uU(11),t.qZA(),t.TgZ(12,"td",13),t.YNc(13,P,2,1,"span",16),t.YNc(14,v,2,0,"span",17),t.qZA(),t.TgZ(15,"td",18),t.TgZ(16,"span",13),t._uU(17,"Pending"),t.qZA(),t.qZA(),t.TgZ(18,"td",14),t.TgZ(19,"button",19),t.TgZ(20,"mat-icon"),t._uU(21,"more_vert"),t.qZA(),t.qZA(),t.TgZ(22,"mat-menu",null,20),t.TgZ(24,"a",21),t._uU(25,"View Entry"),t.qZA(),t.TgZ(26,"a",21),t._uU(27,"Respond"),t.qZA(),t.TgZ(28,"a",22),t._uU(29,"Delete Entry"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const o=s.$implicit,i=s.index,S=t.MAs(23),I=t.oxw(2);t.xp6(2),t.Oqu(i+1),t.xp6(2),t.Oqu(t.lcZ(5,11,o.created_at)),t.xp6(3),t.Q6J("src",I.imageURL+o.attachment_url,t.LSH),t.xp6(2),t.AsE("",o.user.first_name," ",o.user.last_name,""),t.xp6(2),t.Oqu(o.message),t.xp6(2),t.Q6J("ngIf",o.response),t.xp6(1),t.Q6J("ngIf",!o.response),t.xp6(5),t.Q6J("matMenuTriggerFor",S),t.xp6(5),t.Q6J("routerLink",t.DdM(13,_)),t.xp6(2),t.Q6J("routerLink",t.DdM(14,T))}}function A(n,s){1&n&&(t.TgZ(0,"h4",14),t._uU(1,"You have no new proposals"),t.qZA())}function C(n,s){if(1&n&&(t.TgZ(0,"div",13),t.YNc(1,A,2,0,"h4",24),t.qZA()),2&n){const o=t.oxw(2);t.xp6(1),t.Q6J("ngIf",0==o.proposals.length)}}function M(n,s){1&n&&(t.TgZ(0,"div",25),t._UZ(1,"div",26),t.qZA())}const O=function(n){return[n,"nav"]};function b(n,s){if(1&n&&(t.TgZ(0,"div",1),t.TgZ(1,"h5",2),t._uU(2,"Proposals"),t.qZA(),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"table",5),t.TgZ(6,"thead",6),t.TgZ(7,"tr"),t.TgZ(8,"th",7),t._uU(9,"#"),t.qZA(),t.TgZ(10,"th",7),t._uU(11,"Date"),t.qZA(),t.TgZ(12,"th",7),t._uU(13,"Attachment"),t.qZA(),t.TgZ(14,"th",7),t._uU(15,"Name"),t.qZA(),t.TgZ(16,"th",7),t._uU(17,"proposal"),t.qZA(),t.TgZ(18,"th",7),t._uU(19,"Response"),t.qZA(),t.TgZ(20,"th",8),t._uU(21,"Status"),t.qZA(),t.YNc(22,Z,2,0,"th",9),t.qZA(),t.qZA(),t.TgZ(23,"tbody"),t.YNc(24,y,30,15,"tr",10),t.qZA(),t.qZA(),t.qZA(),t.YNc(25,C,2,1,"div",11),t.YNc(26,M,2,0,"div",12),t.qZA(),t.qZA()),2&n){const o=t.oxw();t.xp6(22),t.Q6J("appAccessControl",t.VKq(4,O,o.permissionType.RESPOND_TO_IDEAS)),t.xp6(2),t.Q6J("ngForOf",o.proposals),t.xp6(1),t.Q6J("ngIf",o.proposals),t.xp6(1),t.Q6J("ngIf",o.loading)}}const q=function(n){return[n,"page"]};let U=(()=>{class n{constructor(o,i){this.apiService=o,this.toastrService=i,this.permissionType=g.v,this.loading=!0,this.imageURL=m.N.ASSETS_URL}ngOnInit(){this.suggestionsList()}suggestionsList(){this.apiService.getMyProposalsList().subscribe(o=>{this.proposals=o.data,this.loading=!1},o=>{this.toastrService.error(o.error.message,"Error")})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(f.s),t.Y36(d._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-proposal-list"]],decls:1,vars:3,consts:[["class","content mat-elevation-z8",4,"appAccessControl"],[1,"content","mat-elevation-z8"],[1,"text-center","title"],[1,"appointment-table"],[1,"table-responsive"],[1,"table","table-bordered","table-hover","table-striped"],[1,"thead-bg"],["scope","col"],["scope","col",1,"text-center"],["scope","col","class","text-center",4,"appAccessControl"],[4,"ngFor","ngForOf"],["class","",4,"ngIf"],["class","d-flex justify-content-center my-1",4,"ngIf"],[1,""],[1,"text-center"],["alt","attachment","height","50","width","50",1,"rounded-circle",3,"src"],[4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"text-center","text-success"],["mat-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"routerLink"],["mat-menu-item","",1,"text-danger"],[1,"text-danger"],["class","text-center",4,"ngIf"],[1,"d-flex","justify-content-center","my-1"],["role","status","aria-hidden","true",1,"spinner-border"]],template:function(o,i){1&o&&t.YNc(0,b,27,6,"div",0),2&o&&t.Q6J("appAccessControl",t.VKq(1,q,i.permissionType.VIEW_QUERIES))},directives:[u.J,a.sg,a.O5,h.lW,p.p6,x.Hw,p.VK,r.yS,p.OP],pipes:[a.uU],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}.appointment-cols[_ngcontent-%COMP%]{margin-top:20px}h5[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:24px;line-height:175.6%;color:#000}.appointment-heading[_ngcontent-%COMP%]   .add-appointment[_ngcontent-%COMP%]{background:#003679;border-radius:3px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:16px;line-height:175.6%;padding:5px;text-decoration:none;color:#fff}.appointment-list[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}.appointment-table[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}.appointment-table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:#FFFFFF;border:1px solid #1C416D;box-sizing:border-box;border-radius:2px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}.appointment-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:#E1EAFB;font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}.appointment-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}.table-totals[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}@media only screen and (min-device-width: 320px) and (max-device-width: 480px){.appointment-heading[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.appointment-cols[_ngcontent-%COMP%]{margin-top:0}.appointment-heading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:400;font-size:16px;color:#000;text-align:center}.appointment-heading[_ngcontent-%COMP%]   .add-appointment[_ngcontent-%COMP%]{background:#003679;border-radius:3px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:300;font-size:12px;text-decoration:none;color:#fff}.appointment-table[_ngcontent-%COMP%]   .appointment-list[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;color:#002b5c;margin:5px;animation-name:showing-items;animation-duration:4s}@keyframes showing-items{0%{color:red}25%{color:#ff0}50%{color:#00f}to{color:green}}.appointment-table[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;color:#000}.appointment-table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:#FFFFFF;border:1px solid #1C416D;box-sizing:border-box;border-radius:2px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:12px;color:#000}}']}),n})();var L=e(8668);const z=[{path:"",component:c.k,canActivate:[L.a],children:[{path:"citizens-proposals",component:U}]}];let F=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.Bz.forChild(z)],r.Bz]}),n})();var w=e(4466);let J=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[a.ez,w.m,F]]}),n})()}}]);