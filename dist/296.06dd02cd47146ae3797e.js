"use strict";(self.webpackChunkadmin_development=self.webpackChunkadmin_development||[]).push([[296],{296:(U,l,e)=>{e.r(l),e.d(l,{AdminProfileModule:()=>w});var d=e(8583),a=e(3423),p=e(7037),n=e(7716),g=e(263),c=e(1769),f=e(6627),s=e(3679);const u=function(){return["/"]},m=function(){return["/admin/profile/account-security"]},h=function(){return["/admin/profile/account-appearance"]};let Z=(()=>{class t{constructor(o){this.authService=o}ngOnInit(){this.getCurrentUser()}getCurrentUser(){this.user=this.authService.currentUserValue.data,console.log(this.user)}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(g.e))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-my-account"]],decls:94,vars:11,consts:[[1,"content","mat-elevation-z8"],[1,"row"],[1,"col-md-3","mt-5","p-5"],[1,"title"],[1,"update-account-alert","mt-5"],[1,"col-md-1"],[1,"text-warning"],[1,"col-md-11"],[1,"text-center"],[1,"complete-profile-button","btn-block",3,"routerLink"],[1,"mt-5","links"],[1,"inline-links"],[1,"profile-links",3,"routerLink"],[1,"col-md-9","mt-5","p-5","col-content"],[1,"account-edit-form"],[1,"col-md-10"],[1,"form-group"],["type","text","name","firstName","id","firstName",1,"form-control",3,"value"],["type","text","name","lastName","id","lastName",1,"form-control",3,"value"],[1,"col-md-2","file-col"],[1,"file-input","text-center","m-auto"],["src","../../../../assets/images/camera.png","alt","",1,""],[1,"row","mt-3"],[1,"col"],["for","email"],["type","email","placeholder","","id","email","name","email",1,"form-control",3,"value"],["for","phone"],["type","tel","placeholder","","id","phone","name","phone",1,"form-control",3,"value"],["for","state"],["type","text","placeholder","","id","state","name","state",1,"form-control",3,"value"],["for","LGA"],["type","text","placeholder","","id","LGA","name","LGA",1,"form-control"],["for","gender"],["type","text","placeholder","","id","gender","name","gender",1,"form-control"],["for","age"],["type","number","placeholder","","id","age","name","age",1,"form-control"],[1,"divider","mt-5"],[1,"row","mt-5","edit-buttons"],[1,"col-md-6","discard"],[1,"btn","discard-changes"],[1,"col-md-6","profile","text-right"],[1,"btn","complete-account"]],template:function(o,r){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"h3",3),n._uU(4,"Settings"),n.qZA(),n._UZ(5,"mat-divider"),n.TgZ(6,"div",4),n.TgZ(7,"div",1),n.TgZ(8,"div",5),n.TgZ(9,"mat-icon",6),n._uU(10,"report"),n.qZA(),n.qZA(),n.TgZ(11,"div",7),n.TgZ(12,"h4",8),n._uU(13,"Account Settings"),n.qZA(),n.TgZ(14,"p"),n._uU(15,"Complete your profile to gain access to all features"),n.qZA(),n.qZA(),n.TgZ(16,"a",9),n._uU(17,"Complete My Profile"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(18,"div",10),n._UZ(19,"mat-divider"),n.TgZ(20,"h4",3),n._uU(21,"Update My Details"),n.qZA(),n.TgZ(22,"p",11),n._uU(23,"Personal Information,email"),n.qZA(),n.qZA(),n.TgZ(24,"div",10),n._UZ(25,"mat-divider"),n.TgZ(26,"a",12),n._uU(27,"Security"),n.qZA(),n.TgZ(28,"p",11),n._uU(29,"Change Password, 2FA"),n.qZA(),n.qZA(),n.TgZ(30,"div",10),n._UZ(31,"mat-divider"),n.TgZ(32,"a",12),n._uU(33,"Appearance"),n.qZA(),n.TgZ(34,"p",11),n._uU(35,"Dark and Light mode, Font size"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(36,"div",13),n.TgZ(37,"h3",3),n._uU(38,"Update My Details"),n.qZA(),n.TgZ(39,"div",10),n._UZ(40,"mat-divider"),n.TgZ(41,"h4",3),n._uU(42,"Personal Information"),n.qZA(),n.TgZ(43,"div",14),n.TgZ(44,"form"),n.TgZ(45,"div",1),n.TgZ(46,"div",15),n.TgZ(47,"div",16),n.TgZ(48,"label"),n._uU(49,"First Name"),n.qZA(),n._UZ(50,"input",17),n.qZA(),n.TgZ(51,"div",16),n.TgZ(52,"label"),n._uU(53,"Last Name"),n.qZA(),n._UZ(54,"input",18),n.qZA(),n.qZA(),n.TgZ(55,"div",19),n.TgZ(56,"div",20),n._UZ(57,"img",21),n.qZA(),n.qZA(),n.qZA(),n.TgZ(58,"div",22),n.TgZ(59,"div",23),n.TgZ(60,"label",24),n._uU(61,"Email"),n.qZA(),n._UZ(62,"input",25),n.qZA(),n.TgZ(63,"div",23),n.TgZ(64,"label",26),n._uU(65,"Phone"),n.qZA(),n._UZ(66,"input",27),n.qZA(),n.qZA(),n.TgZ(67,"div",22),n.TgZ(68,"div",23),n.TgZ(69,"label",28),n._uU(70,"State"),n.qZA(),n._UZ(71,"input",29),n.qZA(),n.TgZ(72,"div",23),n.TgZ(73,"label",30),n._uU(74,"Local Government Area"),n.qZA(),n._UZ(75,"input",31),n.qZA(),n.qZA(),n.TgZ(76,"div",22),n.TgZ(77,"div",23),n.TgZ(78,"label",32),n._uU(79,"Gender"),n.qZA(),n._UZ(80,"input",33),n.qZA(),n.TgZ(81,"div",23),n.TgZ(82,"label",34),n._uU(83,"Age"),n.qZA(),n._UZ(84,"input",35),n.qZA(),n.qZA(),n.qZA(),n.TgZ(85,"div",36),n._UZ(86,"mat-divider"),n.qZA(),n.TgZ(87,"div",37),n.TgZ(88,"div",38),n.TgZ(89,"button",39),n._uU(90,"Discard Changes"),n.qZA(),n.qZA(),n.TgZ(91,"div",40),n.TgZ(92,"button",41),n._uU(93,"Complete My Profile"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(16),n.Q6J("routerLink",n.DdM(8,u)),n.xp6(10),n.Q6J("routerLink",n.DdM(9,m)),n.xp6(6),n.Q6J("routerLink",n.DdM(10,h)),n.xp6(18),n.Q6J("value",r.user.first_name),n.xp6(4),n.Q6J("value",r.user.last_name),n.xp6(8),n.Q6J("value",r.user.email),n.xp6(4),n.Q6J("value",r.user.phone),n.xp6(5),n.Q6J("value",r.user.city))},directives:[c.d,f.Hw,a.yS,s._Y,s.JL],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}.links[_ngcontent-%COMP%]   .profile-links[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;text-decoration:none;font-style:normal;font-weight:600;font-size:20px;line-height:175.6%;color:#000}.title[_ngcontent-%COMP%]{width:auto;height:36px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:24px;line-height:175.6%;color:#000}.links[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:16px;line-height:175.6%;color:#003679}.update-account-alert[_ngcontent-%COMP%]{width:auto;height:151px;background:#3873E7;border-radius:3px}.update-account-alert[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:16px;line-height:175.6%;color:#000}.update-account-alert[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;line-height:140%;color:#000}.complete-profile-button[_ngcontent-%COMP%]{width:70%;color:#000;height:35px;background:#FBA714;margin:auto;border-radius:3px;font-size:14px;text-align:center;padding:5px;text-decoration:none}.links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:222px;height:36px;left:427px;top:515px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:16px;line-height:175.6%;color:#000}.account-edit-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:207px;height:19px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;line-height:140%;color:#333}.account-edit-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:40px;border:1px solid #D2D2D2;box-sizing:border-box;border-radius:3px}.account-edit-form[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%]{height:140px;background:#C4C4C4;border-radius:3px}.edit-buttons[_ngcontent-%COMP%]   .complete-account[_ngcontent-%COMP%]{background:#CA0C5C;font-family:"Poppins",sans-serif;font-style:normal;font-weight:bold;font-size:14px;line-height:175.6%;text-align:center;color:#fff}.edit-buttons[_ngcontent-%COMP%]   .discard-changes[_ngcontent-%COMP%]{background:#F4F4F4;border-radius:3px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;line-height:175.6%;text-align:center;color:#0009}@media only screen and (min-device-width: 320px) and (max-device-width: 480px){.content[_ngcontent-%COMP%]{border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}.title[_ngcontent-%COMP%]{margin-top:0;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:20px;color:#000}.col-content[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0003;transition:.3s;width:auto}.links[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:16px;color:#003679;padding:0;margin:0}.links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:12px;margin:0;padding:0;color:#000}.account-edit-form[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%]{height:40px;margin:5px;padding:5px;background:#C4C4C4;border-radius:3px}.file-col[_ngcontent-%COMP%]{padding:8px;margin:5px}.edit-buttons[_ngcontent-%COMP%]   .discard[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:14px;text-align:center;border:0;background:#c70038;color:#fff;padding:8px;width:100%;margin:5px}.edit-buttons[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:auto;background:#003679;border-radius:3px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:14px;text-align:center;color:#fff;margin:5px;padding:8px}}']}),t})();var x=e(7539);const P=function(){return["/admin/profile/account-settings"]},C=function(){return["/admin/profile/account-appearance"]};let _=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-security"]],decls:82,vars:6,consts:[[1,"content","mat-elevation-z8"],[1,"row","justify-content-around"],[1,"col-md-3","mt-5","p-5"],[1,"title"],[1,"mt-5","links"],[1,"profile-links",3,"routerLink"],[1,"inline-links"],[1,"col-md-9","mt-5","p-5","col-content"],[1,"account-edit-form"],[1,"row"],[1,"col-md-8"],[1,"form-group"],["for","oldPassword"],["type","password","name","oldPassword","id","oldPassword",1,"form-control"],["for","newPassword"],["type","password","name","newPassword","id","newPassword",1,"form-control"],["for","verifyPassword"],["type","password","name","verifyPassword","id","verifyPassword",1,"form-control"],[1,"col-md-4"],[1,"password-description"],[1,"text-dark"],[1,"dashed"],[1,"factor-auth-descriptions","mt-5"],[1,"profile-links","text-dark"],[1,"divider","mt-5"],[1,""],[1,"col-md-6"],[1,"example-margin",3,"checked"],[1,"row","mt-5","edit-buttons"],[1,"col-md-6","discard"],[1,"col-md-6","profile"]],template:function(o,r){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"h3",3),n._uU(4,"Settings"),n.qZA(),n.TgZ(5,"div",4),n._UZ(6,"mat-divider"),n.TgZ(7,"a",5),n._uU(8,"Account Settings"),n.qZA(),n.TgZ(9,"p",6),n._uU(10,"Personal Information,email"),n.qZA(),n.qZA(),n.TgZ(11,"div",4),n._UZ(12,"mat-divider"),n.TgZ(13,"h4",3),n._uU(14,"Security"),n.qZA(),n.TgZ(15,"p",6),n._uU(16,"Change Password, 2FA"),n.qZA(),n.qZA(),n.TgZ(17,"div",4),n._UZ(18,"mat-divider"),n.TgZ(19,"a",5),n._uU(20,"Appearance"),n.qZA(),n.TgZ(21,"p",6),n._uU(22,"Dark and Light mode, Font size"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(23,"div",7),n.TgZ(24,"h3",3),n._uU(25,"Security"),n.qZA(),n.TgZ(26,"div",4),n._UZ(27,"mat-divider"),n.TgZ(28,"h4",3),n._uU(29,"Change Password"),n.qZA(),n.TgZ(30,"div",8),n.TgZ(31,"form"),n.TgZ(32,"div",9),n.TgZ(33,"div",10),n.TgZ(34,"div",11),n.TgZ(35,"label",12),n._uU(36,"Old Password"),n.qZA(),n._UZ(37,"input",13),n.qZA(),n.TgZ(38,"div",11),n.TgZ(39,"label",14),n._uU(40,"New Password"),n.qZA(),n._UZ(41,"input",15),n.qZA(),n.TgZ(42,"div",11),n.TgZ(43,"label",16),n._uU(44,"Verify Password"),n.qZA(),n._UZ(45,"input",17),n.qZA(),n.qZA(),n.TgZ(46,"div",18),n.TgZ(47,"div",19),n.TgZ(48,"h5",20),n._uU(49,"Change Your Password"),n.qZA(),n.TgZ(50,"ul",21),n.TgZ(51,"li"),n._uU(52,"Must be at least 8 characters"),n.qZA(),n.TgZ(53,"li"),n._uU(54,"Must contain at least 1 Capital letter"),n.qZA(),n.TgZ(55,"li"),n._uU(56,"Must contain at least 1 number"),n.qZA(),n.TgZ(57,"li"),n._uU(58,"Must contain at least 1 special character"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(59,"div",22),n.TgZ(60,"h3",23),n._uU(61,"Two Factor Authentications(2FA)"),n.qZA(),n.TgZ(62,"div",24),n._UZ(63,"mat-divider"),n.qZA(),n.TgZ(64,"p",25),n._uU(65," Two-factor authentication (2FA) is a security system that requires two distinct forms of identification in order to access something. "),n.qZA(),n.TgZ(66,"div",9),n.TgZ(67,"div",26),n.TgZ(68,"mat-checkbox",27),n._uU(69,"Enable Email Verification!"),n.qZA(),n.qZA(),n.TgZ(70,"div",26),n.TgZ(71,"mat-checkbox",27),n._uU(72,"Enable Email Verification!"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(73,"div",24),n._UZ(74,"mat-divider"),n.qZA(),n.TgZ(75,"div",28),n.TgZ(76,"div",29),n.TgZ(77,"button",25),n._uU(78,"Discard Changes"),n.qZA(),n.qZA(),n.TgZ(79,"div",30),n.TgZ(80,"button",25),n._uU(81,"Save Changes"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(7),n.Q6J("routerLink",n.DdM(4,P)),n.xp6(12),n.Q6J("routerLink",n.DdM(5,C)),n.xp6(49),n.Q6J("checked",!0),n.xp6(3),n.Q6J("checked",!0))},directives:[c.d,a.yS,s._Y,s.JL,x.oG],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}.links[_ngcontent-%COMP%]   .profile-links[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;text-decoration:none;font-style:normal;font-weight:600;font-size:20px;line-height:175.6%;color:#000}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;line-height:21px;color:#333}.password-description[_ngcontent-%COMP%]{width:auto;padding:4px;background:#F5F5F5;border-radius:2px}.mat-checkbox[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:14px;line-height:21px;color:#333}.password-description[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:bold;font-size:14px;line-height:21px;color:#333}.factor-auth-descriptions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:16px;line-height:175.6%;color:#000}.title[_ngcontent-%COMP%]{width:auto;height:36px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:24px;line-height:175.6%;color:#000}.links[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:16px;line-height:175.6%;color:#003679}.update-account-alert[_ngcontent-%COMP%]{width:auto;height:151px;background:gray;border-radius:3px}.update-account-alert[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-size:12px;color:#fff}.complete-profile-button[_ngcontent-%COMP%]{width:auto;height:35px;margin:auto;background:#003679;border-radius:3px;font-size:14px;text-align:center;padding:5px;text-decoration:none}.links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:222px;height:36px;left:427px;top:515px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:16px;line-height:175.6%;color:#000}.account-edit-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:207px;height:19px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;line-height:140%;color:#333}.account-edit-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:40px;border:1px solid #D2D2D2;box-sizing:border-box;border-radius:3px}.account-edit-form[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%]{height:140px;background:#C4C4C4;border-radius:3px}.edit-buttons[_ngcontent-%COMP%]   .discard[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;text-align:center;border:0;color:#0009}.edit-buttons[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:auto;height:auto;background:#003679;border-radius:3px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;line-height:175.6%;text-align:center;color:#fff}@media only screen and (min-device-width: 320px) and (max-device-width: 480px){.content[_ngcontent-%COMP%]{border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}.title[_ngcontent-%COMP%]{margin-top:0;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:20px;color:#000}.col-content[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0003;transition:.3s;width:auto}.links[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:16px;color:#003679;padding:0;margin:0}.links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:12px;margin:0;padding:0;color:#000}.account-edit-form[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%]{height:40px;margin:5px;padding:5px;background:#C4C4C4;border-radius:3px}.file-col[_ngcontent-%COMP%]{padding:8px;margin:5px}.edit-buttons[_ngcontent-%COMP%]   .discard[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:14px;text-align:center;border:0;background:#c70038;color:#fff;padding:8px;width:100%;margin:5px}.edit-buttons[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:auto;background:#003679;border-radius:3px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:14px;text-align:center;color:#fff;margin:5px;padding:8px}}']}),t})();const A=function(){return["/admin/profile/account-settings"]},M=function(){return["/admin/profile/account-security"]};let y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-account-appearance"]],decls:35,vars:4,consts:[[1,"content","mat-elevation-z18"],[1,"row","justify-content-around"],[1,"col-md-3","mt-5","p-5"],[1,"title"],[1,"mt-5","links"],[1,"profile-links",3,"routerLink"],[1,"inline-links"],[1,"col-md-9","mt-5","p-5","col-content"],[1,"divider","mt-5"],[1,"row","mt-5","edit-buttons"],[1,"col-md-6","discard"],[1,""],[1,"col-md-6","profile"]],template:function(o,r){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"h3",3),n._uU(4,"Settings"),n.qZA(),n.TgZ(5,"div",4),n._UZ(6,"mat-divider"),n.TgZ(7,"a",5),n._uU(8,"Account Settings"),n.qZA(),n.TgZ(9,"p",6),n._uU(10,"Personal Information,email"),n.qZA(),n.qZA(),n.TgZ(11,"div",4),n._UZ(12,"mat-divider"),n.TgZ(13,"a",5),n._uU(14,"Security"),n.qZA(),n.TgZ(15,"p",6),n._uU(16,"Change Password, 2FA"),n.qZA(),n.qZA(),n.TgZ(17,"div",4),n._UZ(18,"mat-divider"),n.TgZ(19,"h4",3),n._uU(20,"Appearance"),n.qZA(),n.TgZ(21,"p",6),n._uU(22,"Dark and Light mode, Font size"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(23,"div",7),n.TgZ(24,"h3",3),n._uU(25,"Appearance"),n.qZA(),n.TgZ(26,"div",8),n._UZ(27,"mat-divider"),n.qZA(),n.TgZ(28,"div",9),n.TgZ(29,"div",10),n.TgZ(30,"button",11),n._uU(31,"Discard Changes"),n.qZA(),n.qZA(),n.TgZ(32,"div",12),n.TgZ(33,"button",11),n._uU(34,"Save Changes"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(7),n.Q6J("routerLink",n.DdM(2,A)),n.xp6(6),n.Q6J("routerLink",n.DdM(3,M)))},directives:[c.d,a.yS],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}.links[_ngcontent-%COMP%]   .profile-links[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;text-decoration:none;font-style:normal;font-weight:600;font-size:20px;line-height:175.6%;color:#000}.title[_ngcontent-%COMP%]{width:auto;height:36px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:24px;line-height:175.6%;color:#000}.links[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:16px;line-height:175.6%;color:#003679}.update-account-alert[_ngcontent-%COMP%]{width:auto;height:151px;background:gray;border-radius:3px}.update-account-alert[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-size:12px;color:#fff}.complete-profile-button[_ngcontent-%COMP%]{width:auto;height:35px;margin:auto;background:#003679;border-radius:3px;font-size:14px;text-align:center;padding:5px;text-decoration:none}.links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:222px;height:36px;left:427px;top:515px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:16px;line-height:175.6%;color:#000}.account-edit-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:207px;height:19px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;line-height:140%;color:#333}.account-edit-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:40px;border:1px solid #D2D2D2;box-sizing:border-box;border-radius:3px}.account-edit-form[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%]{height:140px;background:#C4C4C4;border-radius:3px}.edit-buttons[_ngcontent-%COMP%]   .discard[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;text-align:center;border:0;color:#0009}.edit-buttons[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:auto;height:auto;background:#003679;border-radius:3px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;line-height:175.6%;text-align:center;color:#fff}@media only screen and (min-device-width: 320px) and (max-device-width: 480px){.content[_ngcontent-%COMP%]{border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}.title[_ngcontent-%COMP%]{margin-top:0;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:20px;color:#000}.col-content[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0003;transition:.3s;width:auto}.links[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:16px;color:#003679;padding:0;margin:0}.links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:12px;margin:0;padding:0;color:#000}.account-edit-form[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%]{height:40px;margin:5px;padding:5px;background:#C4C4C4;border-radius:3px}.file-col[_ngcontent-%COMP%]{padding:8px;margin:5px}.edit-buttons[_ngcontent-%COMP%]   .discard[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:14px;text-align:center;border:0;background:#c70038;color:#fff;padding:8px;width:100%;margin:5px}.edit-buttons[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:auto;background:#003679;border-radius:3px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:14px;text-align:center;color:#fff;margin:5px;padding:8px}}']}),t})();var v=e(8668);const O=[{path:"",component:p.k,canActivate:[v.a],children:[{path:"account-settings",component:Z},{path:"account-security",component:_},{path:"account-appearance",component:y}]}];let T=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[a.Bz.forChild(O)],a.Bz]}),t})();var b=e(4466),q=e(7514);let w=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[d.ez,b.m,q.q,T]]}),t})()}}]);