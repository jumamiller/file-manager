"use strict";(self.webpackChunkadmin_development=self.webpackChunkadmin_development||[]).push([[892],{4892:(h,l,s)=>{s.r(l),s.d(l,{LocalGovernmentsModule:()=>A});var r=s(8583),i=s(3423),c=s(7037),t=s(7716),d=s(5384);function m(n,o){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td",13),t._uU(2),t.qZA(),t.TgZ(3,"td",13),t._uU(4),t.qZA(),t.TgZ(5,"td",13),t._uU(6),t.qZA(),t.TgZ(7,"td",13),t._uU(8),t.qZA(),t.TgZ(9,"td",13),t._uU(10),t.qZA(),t.TgZ(11,"td",13),t._uU(12),t.qZA(),t.TgZ(13,"td",14),t.TgZ(14,"button",15),t._UZ(15,"i",16),t.qZA(),t.qZA(),t.TgZ(16,"td",14),t.TgZ(17,"button",17),t._UZ(18,"i",18),t.qZA(),t.qZA(),t.TgZ(19,"td",14),t.TgZ(20,"button",19),t._UZ(21,"i",20),t.qZA(),t.qZA(),t.qZA()),2&n){const e=o.$implicit,a=o.index;t.xp6(2),t.Oqu(a+1),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.state),t.xp6(2),t.Oqu(e.chairman),t.xp6(2),t.Oqu(e.population),t.xp6(2),t.Oqu(e.area)}}function g(n,o){1&n&&(t.TgZ(0,"div",21),t._UZ(1,"div",22),t.qZA())}const Z=function(){return["/admin/local-government-area/add-local-government"]},v=[{path:"",component:c.k,children:[{path:"list-governments",component:(()=>{class n{constructor(e){this.apiService=e,this.loading=!0}ngOnInit(){this.getLGAs()}getLGAs(){this.apiService.getLocalGovernments().subscribe(e=>{this.lgas=e.data,this.loading=!1})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-list-local-governments"]],decls:34,vars:4,consts:[[1,"content","mat-elevation-z8"],[1,"citizens"],[1,"row"],[1,"col-md-8"],[1,"col-md-4"],[1,"btn","btn-danger","text-right","mt-2","ml-5",3,"routerLink"],[1,"table-responsive"],[1,"text-center","text-dark"],[1,"table","table-striped","table-hover","table-bordered"],["scope","col"],["scope","col",1,"text-center"],[4,"ngFor","ngForOf"],["class","d-flex justify-content-center my-1",4,"ngIf"],[1,""],[1,"text-center"],[1,"btn","btn-success"],[1,"fas","fa-eye"],[1,"btn","btn-primary"],[1,"fas","fa-user-edit"],[1,"btn","btn-danger"],[1,"fas","fa-trash"],[1,"d-flex","justify-content-center","my-1"],["role","status","aria-hidden","true",1,"spinner-border"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"a",5),t._uU(6,"Add Local Government Area"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"h4",7),t._uU(9,"Kogi Local Governments"),t.qZA(),t.TgZ(10,"table",8),t.TgZ(11,"thead"),t.TgZ(12,"tr"),t.TgZ(13,"th",9),t._uU(14,"#"),t.qZA(),t.TgZ(15,"th",9),t._uU(16,"Name"),t.qZA(),t.TgZ(17,"th",9),t._uU(18,"State"),t.qZA(),t.TgZ(19,"th",9),t._uU(20,"Chairman"),t.qZA(),t.TgZ(21,"th",9),t._uU(22,"Population"),t.qZA(),t.TgZ(23,"th",9),t._uU(24,"Area"),t.qZA(),t.TgZ(25,"th",10),t._uU(26,"View"),t.qZA(),t.TgZ(27,"th",10),t._uU(28,"Edit"),t.qZA(),t.TgZ(29,"th",10),t._uU(30,"Remove"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(31,"tbody"),t.YNc(32,m,22,6,"tr",11),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(33,g,2,0,"div",12),t.qZA()),2&e&&(t.xp6(5),t.Q6J("routerLink",t.DdM(3,Z)),t.xp6(27),t.Q6J("ngForOf",a.lgas),t.xp6(1),t.Q6J("ngIf",a.loading))},directives:[i.yS,r.sg,r.O5],styles:['.content[_ngcontent-%COMP%]{height:calc(100vh - 98px);border-radius:10px;margin:16px 32px;font-size:2rem;color:#d3d3d3}table[_ngcontent-%COMP%]{border:2px solid #333333;box-sizing:border-box}thead[_ngcontent-%COMP%]{background:#E1EAFB;font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:175.6%;color:#333}.table-totals[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif;font-style:normal;font-weight:normal;font-size:18px;line-height:175.6%;color:#000}']}),n})()},{path:"add-local-government",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-local-governments"]],decls:2,vars:0,template:function(e,a){1&e&&(t.TgZ(0,"p"),t._uU(1,"add-local-governments works!"),t.qZA())},styles:[""]}),n})()}]}];let f=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[i.Bz.forChild(v)],i.Bz]}),n})(),A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.ez,f]]}),n})()}}]);