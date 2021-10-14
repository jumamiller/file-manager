import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "../../shared/layouts/sidebar/sidebar.component";
import {ProjectsListComponent} from "./projects-list/projects-list.component";
import {SingleProjectDetailsComponent} from "./single-project-details/single-project-details.component";
import {AddNewProjectComponent} from "./add-new-project/add-new-project.component";
import {AuthGuard} from "../../core/guards/auth.guard";
import {EditProjectDetailsComponent} from "./edit-project-details/edit-project-details.component";

const routes: Routes = [
  {
    path:'',
    component:SidebarComponent,
    canActivate: [AuthGuard],
    children:[
      {path:'kogi-projects-list',component:ProjectsListComponent},
      {path:'kogi-projects-list/details',component:SingleProjectDetailsComponent},
      {path:'kogi-projects-list/edit-details',component:EditProjectDetailsComponent},
      {path:'add-new-kogi-project',component:AddNewProjectComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
