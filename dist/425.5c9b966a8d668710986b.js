"use strict";(self.webpackChunkadmin_development=self.webpackChunkadmin_development||[]).push([[425],{8425:(U,l,i)=>{i.r(l),i.d(l,{AppointmentsModule:()=>M});var s=i(8583),p=i(3423),c=i(7037),t=i(7716),g=i(5384),d=i(1095),r=i(3935),m=i(6627);const f=function(){return["/appointments/my-appointments/details"]},Z=function(){return["/appointments/my-appointments/edit"]};function u(n,o){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td",11),t._uU(2),t.qZA(),t.TgZ(3,"td",11),t._uU(4),t.qZA(),t.TgZ(5,"td",11),t._uU(6),t.qZA(),t.TgZ(7,"td",11),t._uU(8),t.qZA(),t.TgZ(9,"td",11),t._uU(10),t.qZA(),t.TgZ(11,"td",11),t._uU(12),t.qZA(),t.TgZ(13,"td",11),t._uU(14),t.qZA(),t.TgZ(15,"td",11),t._uU(16),t.qZA(),t.TgZ(17,"td",12),t.TgZ(18,"span",11),t._uU(19),t.qZA(),t.qZA(),t.TgZ(20,"td",2),t.TgZ(21,"button",13),t.TgZ(22,"mat-icon"),t._uU(23,"more_vert"),t.qZA(),t.qZA(),t.TgZ(24,"mat-menu",null,14),t.TgZ(26,"a",15),t._uU(27,"View Entry"),t.qZA(),t.TgZ(28,"a",15),t._uU(29,"Leave Comment"),t.qZA(),t.TgZ(30,"a",16),t._uU(31,"Delete Entry"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const e=o.$implicit,a=o.index,O=t.MAs(25);t.xp6(2),t.Oqu(a+1),t.xp6(2),t.Oqu(e.date),t.xp6(2),t.Oqu(e.ministry),t.xp6(2),t.Oqu(e.department),t.xp6(2),t.Oqu(e.message),t.xp6(2),t.AsE("",e.first_name," ",e.last_name,""),t.xp6(2),t.Oqu(e.phone),t.xp6(2),t.Oqu(e.email),t.xp6(3),t.Oqu(e.status),t.xp6(2),t.Q6J("matMenuTriggerFor",O),t.xp6(5),t.Q6J("routerLink",t.DdM(13,f)),t.xp6(2),t.Q6J("routerLink",t.DdM(14,Z))}}function A(n,o){1&n&&(t.TgZ(0,"div",17),t._UZ(1,"div",18),t.qZA())}let h=(()=>{class n{constructor(e){this.apiService=e,this.loading=!0}ngOnInit(){this.getAllAppointments()}getAllAppointments(){this.apiService.getAllAppointments().subscribe(e=>{this.appointments=e.data,this.loading=!1},e=>{console.log(e)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-appointment-list"]],decls:32,vars:2,consts:[[1,"content","mat-elevation-z8"],[1,"appointment-heading"],[1,"text-center"],[1,"appointment-table"],[1,"table-responsive"],[1,"table","table-bordered","table-hover","table-striped"],[1,"thead-bg"],["scope","col"],["scope","col",1,"text-center"],[4,"ngFor","ngForOf"],["class","d-flex justify-content-center my-1",4,"ngIf"],[1,""],[1,"text-center","text-success"],["mat-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"routerLink"],["mat-menu-item","",1,"text-danger"],[1,"d-flex","justify-content-center","my-1"],["role","status","aria-hidden","true",1,"spinner-border"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h5",2),t._uU(3,"Appointments"),t.qZA(),t.qZA(),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t.TgZ(6,"table",5),t.TgZ(7,"thead",6),t.TgZ(8,"tr"),t.TgZ(9,"th",7),t._uU(10,"S/N"),t.qZA(),t.TgZ(11,"th",7),t._uU(12,"Scheduled Date"),t.qZA(),t.TgZ(13,"th",7),t._uU(14,"Ministry"),t.qZA(),t.TgZ(15,"th",7),t._uU(16,"Department"),t.qZA(),t.TgZ(17,"th",7),t._uU(18,"Message"),t.qZA(),t.TgZ(19,"th",7),t._uU(20,"Citizen"),t.qZA(),t.TgZ(21,"th",7),t._uU(22,"Phone"),t.qZA(),t.TgZ(23,"th",7),t._uU(24,"Email"),t.qZA(),t.TgZ(25,"th",8),t._uU(26,"Status"),t.qZA(),t.TgZ(27,"th",8),t._uU(28,"Actions"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"tbody"),t.YNc(30,u,32,15,"tr",9),t.qZA(),t.qZA(),t.qZA(),t.YNc(31,A,2,0,"div",10),t.qZA(),t.qZA()),2&e&&(t.xp6(30),t.Q6J("ngForOf",a.appointments),t.xp6(1),t.Q6J("ngIf",a.loading))},directives:[s.sg,s.O5,d.lW,r.p6,m.Hw,r.VK,p.yS,r.OP],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}.appointment-cols[_ngcontent-%COMP%]{margin-top:20px}.appointment-heading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:24px;line-height:175.6%;color:#000}.appointment-heading[_ngcontent-%COMP%]   .add-appointment[_ngcontent-%COMP%]{background:#003679;border-radius:3px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:16px;line-height:175.6%;padding:5px;text-decoration:none;color:#fff}.appointment-list[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}.appointment-table[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}.appointment-table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:#FFFFFF;border:1px solid #1C416D;box-sizing:border-box;border-radius:2px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}.appointment-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:#E1EAFB;font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}.appointment-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}.table-totals[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}@media only screen and (min-device-width: 320px) and (max-device-width: 480px){.appointment-heading[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.appointment-cols[_ngcontent-%COMP%]{margin-top:0}.appointment-heading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:400;font-size:16px;color:#000;text-align:center}.appointment-heading[_ngcontent-%COMP%]   .add-appointment[_ngcontent-%COMP%]{background:#003679;border-radius:3px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:300;font-size:12px;text-decoration:none;color:#fff}.appointment-table[_ngcontent-%COMP%]   .appointment-list[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;color:#002b5c;margin:5px;animation-name:showing-items;animation-duration:4s}@keyframes showing-items{0%{color:red}25%{color:#ff0}50%{color:#00f}to{color:green}}.appointment-table[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;color:#000}.appointment-table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:#FFFFFF;border:1px solid #1C416D;box-sizing:border-box;border-radius:2px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:12px;color:#000}}']}),n})(),T=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-appointments"]],decls:2,vars:0,template:function(e,a){1&e&&(t.TgZ(0,"p"),t._uU(1,"add-appointments works!"),t.qZA())},styles:[""]}),n})();var x=i(1769);const q=function(){return["/appointments/my-appointments"]};let v=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-single-appointment"]],decls:73,vars:2,consts:[[1,"content","mat-elevation-z8"],[1,"back",3,"routerLink"],[1,""],[1,"row","justify-content-evenly","content-header"],[1,"col-md-6","text-left","action-buttons"],[1,"status"],[1,"col-md-6","text-right"],[1,"row"],[1,"col-md-10"],[1,"col-md-1","border-end","p-2"],[1,"edit-button"],[1,"col-md-1","p-2"],[1,"clear-button"],[1,"divider"],[1,"invitee-details"],[1,"title"],[1,"row","mt-5"],[1,"col-md-6"],[1,"reason-for-appointment","mt-3"],[1,"border"],[1,"delete"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"a",1),t.TgZ(2,"span",2),t.TgZ(3,"mat-icon"),t._uU(4,"keyboard_backspace"),t.qZA(),t.qZA(),t._uU(5,"Back to Appointments "),t.qZA(),t.TgZ(6,"div",3),t.TgZ(7,"div",4),t.TgZ(8,"button",5),t._uU(9,"Pending"),t.qZA(),t.qZA(),t.TgZ(10,"div",6),t.TgZ(11,"div",7),t._UZ(12,"div",8),t.TgZ(13,"div",9),t.TgZ(14,"button",10),t.TgZ(15,"mat-icon"),t._uU(16," border_color"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",11),t.TgZ(18,"button",12),t.TgZ(19,"mat-icon"),t._uU(20,"clear"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"div",13),t._UZ(22,"mat-divider"),t.qZA(),t.TgZ(23,"div",14),t.TgZ(24,"h4",15),t._uU(25,"Invitee"),t.qZA(),t.TgZ(26,"div",13),t._UZ(27,"mat-divider"),t.qZA(),t.TgZ(28,"div",16),t.TgZ(29,"div",17),t.TgZ(30,"p",2),t.TgZ(31,"mat-icon"),t._uU(32,"perm_identity"),t.qZA(),t._uU(33," Dr. Alisu Dansuki"),t.qZA(),t.qZA(),t.TgZ(34,"div",17),t.TgZ(35,"p",2),t.TgZ(36,"mat-icon"),t._uU(37,"email"),t.qZA(),t._uU(38," emailaddress@email.com"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(39,"div",7),t.TgZ(40,"div",17),t.TgZ(41,"p",2),t.TgZ(42,"mat-icon"),t._uU(43,"work"),t.qZA(),t._uU(44," Chief of Staff"),t.qZA(),t.qZA(),t.TgZ(45,"div",17),t.TgZ(46,"p",2),t.TgZ(47,"mat-icon"),t._uU(48," call"),t.qZA(),t._uU(49," +234 908 765 4321"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(50,"div",14),t.TgZ(51,"h4",15),t._uU(52,"Appointment Details"),t.qZA(),t.TgZ(53,"div",13),t._UZ(54,"mat-divider"),t.qZA(),t.TgZ(55,"div",16),t.TgZ(56,"div",17),t.TgZ(57,"p",2),t.TgZ(58,"mat-icon"),t._uU(59,"calendar_today"),t.qZA(),t._uU(60," Jan. 7th, 2020."),t.qZA(),t.qZA(),t.TgZ(61,"div",17),t.TgZ(62,"p",2),t.TgZ(63,"mat-icon"),t._uU(64,"query_builder"),t.qZA(),t._uU(65," 11:30 AM"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(66,"div",18),t.TgZ(67,"p"),t._uU(68,"Reason for Appointment"),t.qZA(),t.TgZ(69,"p",19),t._uU(70," Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(71,"a",20),t._uU(72,"Delete Appointment"),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("routerLink",t.DdM(1,q)))},directives:[p.yS,m.Hw,x.d],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}.back[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;text-decoration:none;font-style:normal;font-weight:500;font-size:18px;line-height:175.6%;color:#000}.content-header[_ngcontent-%COMP%]{margin:20px}.content-header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{background:#E1EAFB;border-radius:3px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:175.6%;text-align:center;color:#006f34;border:0}.content-header[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%]{border:0;background:#FFFFFF}.content-header[_ngcontent-%COMP%]   .clear-button[_ngcontent-%COMP%]{border-color:#fba714;color:#fba714;background:#FFFFFF}.divider[_ngcontent-%COMP%]{margin-top:20px}.invitee-details[_ngcontent-%COMP%]{margin:20px}.invitee-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:24px;line-height:175.6%;color:#000}.invitee-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:20px;line-height:175.6%;color:#000}.reason-for-appointment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:20px;line-height:175.6%;color:#000}.delete[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:18px;line-height:175.6%;margin:5px;text-align:right;-webkit-text-decoration-line:underline;text-decoration-line:underline;color:red}']}),n})(),y=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit-appointment"]],decls:4,vars:0,consts:[[1,"content","mat-elevation-z8"],[1,"m-5","text-center"],[1,"mt-5","text-danger"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"p",2),t._uU(3,"Edit contents will go here"),t.qZA(),t.qZA(),t.qZA())},styles:[".content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}"]}),n})();var _=i(8668);const C=[{path:"",component:c.k,canActivate:[_.a],children:[{path:"my-appointments",component:h},{path:"add-appointments",component:T},{path:"my-appointments/details",component:v},{path:"my-appointments/edit",component:y}]}];let P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.Bz.forChild(C)],p.Bz]}),n})();var b=i(7514);let M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[s.ez,P,b.q]]}),n})()}}]);