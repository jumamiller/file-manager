import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalGovernmentsRoutingModule } from './local-governments-routing.module';
import { ListLocalGovernmentsComponent } from './list-local-governments/list-local-governments.component';
import { AddLocalGovernmentsComponent } from './add-local-governments/add-local-governments.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ListLocalGovernmentsComponent,
    AddLocalGovernmentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LocalGovernmentsRoutingModule
  ]
})
export class LocalGovernmentsModule { }
