import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { SingleProjectDetailsComponent } from './single-project-details/single-project-details.component';
import { AddNewProjectComponent } from './add-new-project/add-new-project.component';


@NgModule({
  declarations: [
    ProjectsListComponent,
    SingleProjectDetailsComponent,
    AddNewProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
