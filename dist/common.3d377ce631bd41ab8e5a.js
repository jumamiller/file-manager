"use strict";(self.webpackChunkadmin_development=self.webpackChunkadmin_development||[]).push([[592],{8668:(v,s,t)=>{t.d(s,{a:()=>i});var e=t(7716),o=t(5987),c=t(263),_=t(9344);let i=(()=>{class r{constructor(a,u,n){this.router=a,this.authService=u,this.toastrService=n}canActivate(a,u){return!!this.authService.currentUserValue||(this.toastrService.error("You're not authenticated to access this resource","ACCESS DENIED"),this.router.navigate(["/admin/auth/login"],{queryParams:{returnUrl:u.url}}),!1)}}return r.\u0275fac=function(a){return new(a||r)(e.LFG(o.F0),e.LFG(c.e),e.LFG(_._W))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);