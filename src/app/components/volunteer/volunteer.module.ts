import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteerRoutingModule } from './volunteer-routing.module';
import { CreateVolunteerProjectComponent } from './create-volunteer-project/create-volunteer-project.component';
import { VolunteerProjectsComponent } from './volunteer-projects/volunteer-projects.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    CreateVolunteerProjectComponent,
    VolunteerProjectsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VolunteerRoutingModule
  ]
})
export class VolunteerModule { }
