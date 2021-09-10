import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "../../shared/layouts/sidebar/sidebar.component";
import {ProjectsListComponent} from "./projects-list/projects-list.component";
import {SingleProjectDetailsComponent} from "./single-project-details/single-project-details.component";
import {AddNewProjectComponent} from "./add-new-project/add-new-project.component";

const routes: Routes = [
  {
    path:'',
    component:SidebarComponent,
    children:[
      {path:'kogi-projects-list',component:ProjectsListComponent},
      {path:'kogi-projects-list/details',component:SingleProjectDetailsComponent},
      {path:'add-new-kogi-project',component:AddNewProjectComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
