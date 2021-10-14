import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { SingleProjectDetailsComponent } from './single-project-details/single-project-details.component';
import { AddNewProjectComponent } from './add-new-project/add-new-project.component';
import {SharedModule} from "../../shared/shared.module";
import { EditProjectDetailsComponent } from './edit-project-details/edit-project-details.component';


@NgModule({
  declarations: [
    ProjectsListComponent,
    SingleProjectDetailsComponent,
    AddNewProjectComponent,
    EditProjectDetailsComponent
  ],
    imports: [
        CommonModule,
        ProjectRoutingModule,
        SharedModule
    ]
})
export class ProjectModule { }
