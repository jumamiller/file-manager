"use strict";(self.webpackChunkadmin_development=self.webpackChunkadmin_development||[]).push([[876],{3876:(T,l,e)=>{e.r(l),e.d(l,{AdminProfileModule:()=>_});var d=e(8583),a=e(3423),g=e(7037),t=e(7716),p=e(263),c=e(1769),f=e(6627),s=e(3679);const m=function(){return["/"]},u=function(){return["/admin/profile/account-security"]};let Z=(()=>{class n{constructor(o){this.authService=o}ngOnInit(){this.getCurrentUser()}getCurrentUser(){this.user=this.authService.currentUserValue.data,console.log(this.user)}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(p.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-my-account"]],decls:88,vars:9,consts:[[1,"content","mat-elevation-z8"],[1,"row"],[1,"col-md-4","p-5","divider"],[1,"title"],[1,"update-account-alert","mt-5"],[1,"col-md-1"],[1,"text-warning"],[1,"col-md-11"],[1,"text-center"],[1,"complete-profile-button","btn-block",3,"routerLink"],[1,"mt-5","links"],[1,"inline-links"],[1,"profile-links",3,"routerLink"],[1,"col-md-8","p-5","col-content"],[1,"links"],[1,"account-edit-form"],[1,"col-md-10"],[1,"form-group"],["type","text","name","firstName","id","firstName",1,"form-control",3,"value"],["type","text","name","lastName","id","lastName",1,"form-control",3,"value"],[1,"col-md-2","file-col"],[1,"file-input","text-center","m-auto"],["src","../../../../assets/images/camera.png","alt","",1,""],[1,"row","mt-3"],[1,"col"],["for","email"],["type","email","placeholder","","id","email","name","email",1,"form-control",3,"value"],["for","phone"],["type","tel","placeholder","","id","phone","name","phone",1,"form-control",3,"value"],["for","state"],["type","text","placeholder","","id","state","name","state",1,"form-control",3,"value"],["for","LGA"],["type","text","placeholder","","id","LGA","name","LGA",1,"form-control"],["for","gender"],["type","text","placeholder","","id","gender","name","gender",1,"form-control"],["for","age"],["type","number","placeholder","","id","age","name","age",1,"form-control"],[1,"divider","mt-5"],[1,"row","mt-5","edit-buttons"],[1,"col-md-6","discard"],[1,"btn","discard-changes"],[1,"col-md-6","profile","text-right"],[1,"btn","complete-account"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h3",3),t._uU(4,"Settings"),t.qZA(),t._UZ(5,"mat-divider"),t.TgZ(6,"div",4),t.TgZ(7,"div",1),t.TgZ(8,"div",5),t.TgZ(9,"mat-icon",6),t._uU(10,"report"),t.qZA(),t.qZA(),t.TgZ(11,"div",7),t.TgZ(12,"h4",8),t._uU(13,"Account Settings"),t.qZA(),t.TgZ(14,"p"),t._uU(15,"Complete your profile to gain access to all features"),t.qZA(),t.qZA(),t.TgZ(16,"a",9),t._uU(17,"Complete My Profile"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",10),t._UZ(19,"mat-divider"),t.TgZ(20,"h4",3),t._uU(21,"Update My Details"),t.qZA(),t.TgZ(22,"p",11),t._uU(23,"Personal Information,email"),t.qZA(),t.qZA(),t.TgZ(24,"div",10),t._UZ(25,"mat-divider"),t.TgZ(26,"a",12),t._uU(27,"Security"),t.qZA(),t.TgZ(28,"p",11),t._uU(29,"Change Password, 2FA"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",13),t.TgZ(31,"h3",3),t._uU(32,"Update My Details"),t.qZA(),t.TgZ(33,"div",14),t._UZ(34,"mat-divider"),t.TgZ(35,"h4",3),t._uU(36,"Personal Information"),t.qZA(),t.TgZ(37,"div",15),t.TgZ(38,"form"),t.TgZ(39,"div",1),t.TgZ(40,"div",16),t.TgZ(41,"div",17),t.TgZ(42,"label"),t._uU(43,"First Name"),t.qZA(),t._UZ(44,"input",18),t.qZA(),t.TgZ(45,"div",17),t.TgZ(46,"label"),t._uU(47,"Last Name"),t.qZA(),t._UZ(48,"input",19),t.qZA(),t.qZA(),t.TgZ(49,"div",20),t.TgZ(50,"div",21),t._UZ(51,"img",22),t.qZA(),t.qZA(),t.qZA(),t.TgZ(52,"div",23),t.TgZ(53,"div",24),t.TgZ(54,"label",25),t._uU(55,"Email"),t.qZA(),t._UZ(56,"input",26),t.qZA(),t.TgZ(57,"div",24),t.TgZ(58,"label",27),t._uU(59,"Phone"),t.qZA(),t._UZ(60,"input",28),t.qZA(),t.qZA(),t.TgZ(61,"div",23),t.TgZ(62,"div",24),t.TgZ(63,"label",29),t._uU(64,"State"),t.qZA(),t._UZ(65,"input",30),t.qZA(),t.TgZ(66,"div",24),t.TgZ(67,"label",31),t._uU(68,"Local Government Area"),t.qZA(),t._UZ(69,"input",32),t.qZA(),t.qZA(),t.TgZ(70,"div",23),t.TgZ(71,"div",24),t.TgZ(72,"label",33),t._uU(73,"Gender"),t.qZA(),t._UZ(74,"input",34),t.qZA(),t.TgZ(75,"div",24),t.TgZ(76,"label",35),t._uU(77,"Age"),t.qZA(),t._UZ(78,"input",36),t.qZA(),t.qZA(),t.qZA(),t.TgZ(79,"div",37),t._UZ(80,"mat-divider"),t.qZA(),t.TgZ(81,"div",38),t.TgZ(82,"div",39),t.TgZ(83,"button",40),t._uU(84,"Discard Changes"),t.qZA(),t.qZA(),t.TgZ(85,"div",41),t.TgZ(86,"button",42),t._uU(87,"Complete My Profile"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(16),t.Q6J("routerLink",t.DdM(7,m)),t.xp6(10),t.Q6J("routerLink",t.DdM(8,u)),t.xp6(18),t.Q6J("value",r.user.first_name),t.xp6(4),t.Q6J("value",r.user.last_name),t.xp6(8),t.Q6J("value",r.user.email),t.xp6(4),t.Q6J("value",r.user.phone),t.xp6(5),t.Q6J("value",r.user.city))},directives:[c.d,f.Hw,a.yS,s._Y,s.JL],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 100px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}.links[_ngcontent-%COMP%]   .profile-links[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;text-decoration:none;font-style:normal;font-weight:600;font-size:20px;line-height:175.6%;color:#000}.title[_ngcontent-%COMP%]{width:auto;height:36px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:24px;line-height:175.6%;color:#000}.links[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:16px;line-height:175.6%;color:#003679}.update-account-alert[_ngcontent-%COMP%]{width:auto;height:auto;background:gray;border-radius:3px}.update-account-alert[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-style:normal;font-weight:600;font-size:16px;line-height:175.6%;color:#000}.update-account-alert[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-style:normal;font-weight:normal;font-size:14px;line-height:140%;color:#000}.complete-profile-button[_ngcontent-%COMP%]{width:70%;color:#000;height:35px;background:#FBA714;margin:auto;border-radius:3px;font-size:14px;text-align:center;padding:5px;text-decoration:none}.divider[_ngcontent-%COMP%]{border-right:1px solid #E5E5E5}.links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:222px;height:36px;left:427px;top:515px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:16px;line-height:175.6%;color:#000}.account-edit-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:207px;height:19px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;line-height:140%;color:#333}.account-edit-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:40px;border:1px solid #D2D2D2;box-sizing:border-box;border-radius:3px}.account-edit-form[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%]{height:140px;background:#C4C4C4;border-radius:3px}.edit-buttons[_ngcontent-%COMP%]   .complete-account[_ngcontent-%COMP%]{background:#CA0C5C;font-family:"Poppins",sans-serif;font-style:normal;font-weight:bold;font-size:14px;line-height:175.6%;text-align:center;color:#fff}.edit-buttons[_ngcontent-%COMP%]   .discard-changes[_ngcontent-%COMP%]{background:#F4F4F4;border-radius:3px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;line-height:175.6%;text-align:center;color:#0009}@media only screen and (min-device-width: 320px) and (max-device-width: 480px){.content[_ngcontent-%COMP%]{border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}.title[_ngcontent-%COMP%]{margin-top:0;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:20px;color:#000}.col-content[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0003;transition:.3s;width:auto}.links[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:16px;color:#003679;padding:0;margin:0}.links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:12px;margin:0;padding:0;color:#000}.account-edit-form[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%]{height:40px;margin:5px;padding:5px;background:#C4C4C4;border-radius:3px}.file-col[_ngcontent-%COMP%]{padding:8px;margin:5px}.edit-buttons[_ngcontent-%COMP%]   .discard[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:14px;text-align:center;border:0;background:#c70038;color:#fff;padding:8px;width:100%;margin:5px}.edit-buttons[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:auto;background:#003679;border-radius:3px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:14px;text-align:center;color:#fff;margin:5px;padding:8px}}']}),n})();var h=e(7539);const x=function(){return["/admin/profile/account-settings"]};let P=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-security"]],decls:76,vars:4,consts:[[1,"content","mat-elevation-z8"],[1,"row","justify-content-around"],[1,"col-md-3","p-5"],[1,"title"],[1,"mt-5","links"],[1,"profile-links",3,"routerLink"],[1,"inline-links"],[1,"col-md-9","p-5","col-content"],[1,"account-edit-form"],[1,"row"],[1,"col-md-8"],[1,"form-group"],["for","oldPassword"],["type","password","name","oldPassword","id","oldPassword",1,"form-control"],["for","newPassword"],["type","password","name","newPassword","id","newPassword",1,"form-control"],["for","verifyPassword"],["type","password","name","verifyPassword","id","verifyPassword",1,"form-control"],[1,"col-md-4"],[1,"password-description"],[1,"text-dark"],[1,"dashed"],[1,"factor-auth-descriptions","mt-5"],[1,"profile-links","text-dark"],[1,"divider","mt-5"],[1,""],[1,"col-md-6"],[1,"example-margin",3,"checked"],[1,"row","mt-5","edit-buttons"],[1,"col-md-6","discard"],[1,"col-md-6","profile"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h3",3),t._uU(4,"Settings"),t.qZA(),t.TgZ(5,"div",4),t._UZ(6,"mat-divider"),t.TgZ(7,"a",5),t._uU(8,"Account Settings"),t.qZA(),t.TgZ(9,"p",6),t._uU(10,"Personal Information,email"),t.qZA(),t.qZA(),t.TgZ(11,"div",4),t._UZ(12,"mat-divider"),t.TgZ(13,"h4",3),t._uU(14,"Security"),t.qZA(),t.TgZ(15,"p",6),t._uU(16,"Change Password, 2FA"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",7),t.TgZ(18,"h3",3),t._uU(19,"Security"),t.qZA(),t.TgZ(20,"div",4),t._UZ(21,"mat-divider"),t.TgZ(22,"h4",3),t._uU(23,"Change Password"),t.qZA(),t.TgZ(24,"div",8),t.TgZ(25,"form"),t.TgZ(26,"div",9),t.TgZ(27,"div",10),t.TgZ(28,"div",11),t.TgZ(29,"label",12),t._uU(30,"Old Password"),t.qZA(),t._UZ(31,"input",13),t.qZA(),t.TgZ(32,"div",11),t.TgZ(33,"label",14),t._uU(34,"New Password"),t.qZA(),t._UZ(35,"input",15),t.qZA(),t.TgZ(36,"div",11),t.TgZ(37,"label",16),t._uU(38,"Verify Password"),t.qZA(),t._UZ(39,"input",17),t.qZA(),t.qZA(),t.TgZ(40,"div",18),t.TgZ(41,"div",19),t.TgZ(42,"h5",20),t._uU(43,"Change Your Password"),t.qZA(),t.TgZ(44,"ul",21),t.TgZ(45,"li"),t._uU(46,"Must be at least 8 characters"),t.qZA(),t.TgZ(47,"li"),t._uU(48,"Must contain at least 1 Capital letter"),t.qZA(),t.TgZ(49,"li"),t._uU(50,"Must contain at least 1 number"),t.qZA(),t.TgZ(51,"li"),t._uU(52,"Must contain at least 1 special character"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(53,"div",22),t.TgZ(54,"h3",23),t._uU(55,"Two Factor Authentications(2FA)"),t.qZA(),t.TgZ(56,"div",24),t._UZ(57,"mat-divider"),t.qZA(),t.TgZ(58,"p",25),t._uU(59," Two-factor authentication (2FA) is a security system that requires two distinct forms of identification in order to access something. "),t.qZA(),t.TgZ(60,"div",9),t.TgZ(61,"div",26),t.TgZ(62,"mat-checkbox",27),t._uU(63,"Enable Email Verification!"),t.qZA(),t.qZA(),t.TgZ(64,"div",26),t.TgZ(65,"mat-checkbox",27),t._uU(66,"Enable Email Verification!"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(67,"div",24),t._UZ(68,"mat-divider"),t.qZA(),t.TgZ(69,"div",28),t.TgZ(70,"div",29),t.TgZ(71,"button",25),t._uU(72,"Discard Changes"),t.qZA(),t.qZA(),t.TgZ(73,"div",30),t.TgZ(74,"button",25),t._uU(75,"Save Changes"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(7),t.Q6J("routerLink",t.DdM(3,x)),t.xp6(55),t.Q6J("checked",!0),t.xp6(3),t.Q6J("checked",!0))},directives:[c.d,a.yS,s._Y,s.JL,h.oG],styles:['.content[_ngcontent-%COMP%]{height:auto;border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}.links[_ngcontent-%COMP%]   .profile-links[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;text-decoration:none;font-style:normal;font-weight:600;font-size:20px;line-height:175.6%;color:#000}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;line-height:21px;color:#333}.password-description[_ngcontent-%COMP%]{width:auto;padding:4px;background:#F5F5F5;border-radius:2px}.mat-checkbox[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:14px;line-height:21px;color:#333}.password-description[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:bold;font-size:14px;line-height:21px;color:#333}.factor-auth-descriptions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:16px;line-height:175.6%;color:#000}.title[_ngcontent-%COMP%]{width:auto;height:36px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:24px;line-height:175.6%;color:#000}.links[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:16px;line-height:175.6%;color:#003679}.update-account-alert[_ngcontent-%COMP%]{width:auto;height:151px;background:gray;border-radius:3px}.update-account-alert[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-size:12px;color:#fff}.complete-profile-button[_ngcontent-%COMP%]{width:auto;height:35px;margin:auto;background:#003679;border-radius:3px;font-size:14px;text-align:center;padding:5px;text-decoration:none}.links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:222px;height:36px;left:427px;top:515px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:16px;line-height:175.6%;color:#000}.account-edit-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:207px;height:19px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;line-height:140%;color:#333}.account-edit-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:40px;border:1px solid #D2D2D2;box-sizing:border-box;border-radius:3px}.account-edit-form[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%]{height:140px;background:#C4C4C4;border-radius:3px}.edit-buttons[_ngcontent-%COMP%]   .discard[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;text-align:center;border:0;color:#0009}.edit-buttons[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:auto;height:auto;background:#003679;border-radius:3px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:14px;line-height:175.6%;text-align:center;color:#fff}@media only screen and (min-device-width: 320px) and (max-device-width: 480px){.content[_ngcontent-%COMP%]{border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}.title[_ngcontent-%COMP%]{margin-top:0;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:20px;color:#000}.col-content[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0003;transition:.3s;width:auto}.links[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:16px;color:#003679;padding:0;margin:0}.links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:12px;margin:0;padding:0;color:#000}.account-edit-form[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%]{height:40px;margin:5px;padding:5px;background:#C4C4C4;border-radius:3px}.file-col[_ngcontent-%COMP%]{padding:8px;margin:5px}.edit-buttons[_ngcontent-%COMP%]   .discard[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:14px;text-align:center;border:0;background:#c70038;color:#fff;padding:8px;width:100%;margin:5px}.edit-buttons[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:auto;background:#003679;border-radius:3px;font-family:"Poppins",sans-serif;font-style:normal;font-weight:600;font-size:14px;text-align:center;color:#fff;margin:5px;padding:8px}}']}),n})();var C=e(8668);const A=[{path:"",component:g.k,canActivate:[C.a],children:[{path:"account-settings",component:Z},{path:"account-security",component:P}]}];let y=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[a.Bz.forChild(A)],a.Bz]}),n})();var v=e(4466),M=e(7514);let _=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.ez,v.m,M.q,y]]}),n})()}}]);