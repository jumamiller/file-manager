import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "../../shared/layouts/sidebar/sidebar.component";
import {VolunteerProjectsComponent} from "./volunteer-projects/volunteer-projects.component";
import {CreateVolunteerProjectComponent} from "./create-volunteer-project/create-volunteer-project.component";

const routes: Routes = [
  {
    path:'',
    component:SidebarComponent,
    children:[
      {
        path:'projects-list',
        component:VolunteerProjectsComponent
      },
      {
        path:'add-volunteer-projects',
        component:CreateVolunteerProjectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteerRoutingModule { }
