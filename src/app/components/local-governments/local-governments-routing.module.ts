import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "../../shared/layouts/sidebar/sidebar.component";
import {ListLocalGovernmentsComponent} from "./list-local-governments/list-local-governments.component";
import {AddLocalGovernmentsComponent} from "./add-local-governments/add-local-governments.component";

const routes: Routes = [
  {
    path:'',
    component: SidebarComponent,
    children:[
      {path:'list-governments',component:ListLocalGovernmentsComponent},
      {path:'add-local-government',component:AddLocalGovernmentsComponent}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalGovernmentsRoutingModule { }
