import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProposalsRoutingModule } from './proposals-routing.module';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ProposalListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProposalsRoutingModule
  ]
})
export class ProposalsModule { }
