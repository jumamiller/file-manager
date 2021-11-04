import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProposalsRoutingModule } from './proposals-routing.module';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import {SharedModule} from "../../shared/shared.module";
import { SingleProposalComponent } from './single-proposal/single-proposal.component';


@NgModule({
  declarations: [
    ProposalListComponent,
    SingleProposalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProposalsRoutingModule
  ],
  exports:[
    SharedModule
  ]
})
export class ProposalsModule { }
