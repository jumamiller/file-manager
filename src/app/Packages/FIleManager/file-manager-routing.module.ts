import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "../../shared/layouts/sidebar/sidebar.component";
import {AuthGuard} from "../../core/guards/auth.guard";
import {FileManagerComponent} from "./file-manager/file-manager.component";

const routes: Routes = [
  {
    path:'',
    component:SidebarComponent,
    canActivate: [AuthGuard],
    children:[
      {path:'listing',component:FileManagerComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileManagerRoutingModule { }
