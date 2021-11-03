import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PressReleaseRoutingModule } from './press-release-routing.module';
import { CreatePressReleaseComponent } from './create-press-release/create-press-release.component';
import { PressReleaseListComponent } from './press-release-list/press-release-list.component';
import { PressReleaseDetailsComponent } from './press-release-details/press-release-details.component';
import {SharedModule} from "../../shared/shared.module";
import { PressReleaseEditComponent } from './press-release-edit/press-release-edit.component';


@NgModule({
  declarations: [
    CreatePressReleaseComponent,
    PressReleaseListComponent,
    PressReleaseDetailsComponent,
    PressReleaseEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PressReleaseRoutingModule
  ],
  exports: [
    SharedModule
  ]
})
export class PressReleaseModule { }
