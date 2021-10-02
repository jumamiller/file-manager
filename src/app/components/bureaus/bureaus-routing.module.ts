import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "../../shared/layouts/sidebar/sidebar.component";
import {AuthGuard} from "../../core/guards/auth.guard";
import {BureausListComponent} from "./bureaus-list/bureaus-list.component";
import {AddBureausComponent} from "./add-bureaus/add-bureaus.component";

const routes: Routes = [
  {
    path: '',
    component:SidebarComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path:'bureau-list',
        component: BureausListComponent,
      },
      {
        path:'add-bureau',
        component: AddBureausComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BureausRoutingModule { }
