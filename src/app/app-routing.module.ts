import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SidebarComponent} from "./shared/layouts/sidebar/sidebar.component";
import {MessagesComponent} from "./components/messages/messages.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'/admin/profile/account-settings',
    pathMatch:'full',
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },

  {
    path:'admin',
    component:SidebarComponent,
    children:[
      {path:'messages',component: MessagesComponent}
    ]
  },

  {
    path:'admin/profile',
    loadChildren: () => import('./admin-profile/admin-profile.module').then(mod=>mod.AdminProfileModule)
  },
  {
    path:'admin/appointments',
    loadChildren: () => import('./appointments/appointments.module').then(mod=>mod.AppointmentsModule)
  },
  {
    path:'admin/suggestions',
    loadChildren: () => import('./idea-suggestions/idea-suggestions.module').then(mod=>mod.IdeaSuggestionsModule)
  },
  {
    path:'complaints',
    loadChildren: () => import('./query/query.module').then(mod=>mod.QueryModule)
  },
  {
    path:'admin/auth',
    component: AuthLayoutComponent,
    children:[
      {
        path:'login',
        component: LoginComponent,
      },
      {
        path:'register',
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
