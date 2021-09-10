import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryRoutingModule } from './query-routing.module';
import { MyQueriesComponent } from './my-queries/my-queries.component';
import { SingleQueryComponent } from './single-query/single-query.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    MyQueriesComponent,
    SingleQueryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    QueryRoutingModule
  ]
})
export class QueryModule { }
