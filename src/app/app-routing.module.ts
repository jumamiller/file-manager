import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SidebarComponent} from "./shared/layouts/sidebar/sidebar.component";
import {MessagesComponent} from "./components/messages/messages.component";

const routes: Routes = [

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
  },
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
    loadChildren: () => import('./components/admin-profile/admin-profile.module').then(mod=>mod.AdminProfileModule)
  },
  {
    path:'admin/appointments',
    loadChildren: () => import('./components/appointments/appointments.module').then(mod=>mod.AppointmentsModule)
  },
  {
    path:'admin/suggestions',
    loadChildren: () => import('./components/idea-suggestions/idea-suggestions.module').then(mod=>mod.IdeaSuggestionsModule)
  },
  {
    path:'admin/complaints',
    loadChildren: () => import('./components/query/query.module').then(mod=>mod.QueryModule)
  },
  {
    path:'admin/manage-users',
    loadChildren: () => import('./components/users/users.module').then(mod=>mod.UsersModule)
  },
  {
    path:'admin/ministry',
    loadChildren: () => import('./components/ministry/ministry.module').then(mod=>mod.MinistryModule),
  },
  {
    path:'admin/news',
    loadChildren: () => import('./components/news/news.module').then(mod=>mod.NewsModule),
  },
  {
    path:'admin/projects',
    loadChildren: () => import('./components/project/project.module').then(mod=>mod.ProjectModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
