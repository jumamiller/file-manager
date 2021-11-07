import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarqueeRoutingModule } from './marquee-routing.module';
import { MarqueeListComponent } from './marquee-list/marquee-list.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    MarqueeListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MarqueeRoutingModule
  ],
  exports:[
    SharedModule
  ]
})
export class MarqueeModule { }
