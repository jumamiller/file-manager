import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "../../shared/layouts/sidebar/sidebar.component";
import {AuthGuard} from "../../core/guards/auth.guard";
import {PressReleaseListComponent} from "./press-release-list/press-release-list.component";
import {PressReleaseDetailsComponent} from "./press-release-details/press-release-details.component";
import {CreatePressReleaseComponent} from "./create-press-release/create-press-release.component";
import {PressReleaseEditComponent} from "./press-release-edit/press-release-edit.component";

const routes: Routes = [
  {
    path:'',
    component:SidebarComponent,
    canActivate: [AuthGuard],
    children:[
      {path:'list',component:PressReleaseListComponent},
      {path:'list/details',component:PressReleaseDetailsComponent},
      {path:'list/edit',component:PressReleaseEditComponent},
      {path:'create',component:CreatePressReleaseComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PressReleaseRoutingModule { }
