import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BureausRoutingModule } from './bureaus-routing.module';
import { AddBureausComponent } from './add-bureaus/add-bureaus.component';
import { BureausListComponent } from './bureaus-list/bureaus-list.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    AddBureausComponent,
    BureausListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BureausRoutingModule
  ]
})
export class BureausModule { }
