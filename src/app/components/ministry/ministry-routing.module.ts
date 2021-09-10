import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "../../shared/layouts/sidebar/sidebar.component";
import {MinistriesListComponent} from "./ministries-list/ministries-list.component";
import {SingleMinistryDetailsComponent} from "./single-ministry-details/single-ministry-details.component";
import {AddNewMinistryComponent} from "./add-new-ministry/add-new-ministry.component";

const routes: Routes = [
  {
    path:'',
    component:SidebarComponent,
    children:[
      {path:'kogi-ministries-list',component:MinistriesListComponent},
      {path:'kogi-ministry-list/ministry-details',component:SingleMinistryDetailsComponent},
      {path:'add-new-kogi-ministry',component: AddNewMinistryComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinistryRoutingModule { }
