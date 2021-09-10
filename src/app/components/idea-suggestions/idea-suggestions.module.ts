import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeaSuggestionsRoutingModule } from './idea-suggestions-routing.module';
import { SubmissionsComponent } from './submissions/submissions.component';
import { SingleSubmissionsComponent } from './single-submissions/single-submissions.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    SubmissionsComponent,
    SingleSubmissionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IdeaSuggestionsRoutingModule
  ]
})
export class IdeaSuggestionsModule { }
