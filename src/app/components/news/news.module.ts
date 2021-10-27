import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { EditNewsComponent } from './edit-news/edit-news.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    EditNewsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
