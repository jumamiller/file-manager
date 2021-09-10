import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinistryRoutingModule } from './ministry-routing.module';
import { MinistriesListComponent } from './ministries-list/ministries-list.component';
import { SingleMinistryDetailsComponent } from './single-ministry-details/single-ministry-details.component';
import { AddNewMinistryComponent } from './add-new-ministry/add-new-ministry.component';


@NgModule({
  declarations: [
    MinistriesListComponent,
    SingleMinistryDetailsComponent,
    AddNewMinistryComponent
  ],
  imports: [
    CommonModule,
    MinistryRoutingModule
  ]
})
export class MinistryModule { }