import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "../../shared/layouts/sidebar/sidebar.component";
import {ProposalListComponent} from "./proposal-list/proposal-list.component";
import {AuthGuard} from "../../core/guards/auth.guard";
import {SingleProposalComponent} from "./single-proposal/single-proposal.component";

const routes: Routes = [
  {
    path:'',
    component:SidebarComponent,
    canActivate:[AuthGuard],
    children: [
      {path:'my-proposal-requests',component:ProposalListComponent},
      {path:'my-proposal-requests/:id',component:SingleProposalComponent}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProposalsRoutingModule { }
