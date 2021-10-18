import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "../../shared/layouts/sidebar/sidebar.component";
import {MyAccountComponent} from "./my-account/my-account.component";
import {SecurityComponent} from "./security/security.component";
import {AuthGuard} from "../../core/guards/auth.guard";

const routes: Routes = [
  {
    path:'',
    component: SidebarComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'account-settings',component: MyAccountComponent
      },
      {
        path:'account-security',component:SecurityComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminProfileRoutingModule { }
