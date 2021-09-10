import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "../../shared/layouts/sidebar/sidebar.component";
import {CitizensListComponent} from "./citizens/citizens-list/citizens-list.component";
import {AddNewCitizensComponent} from "./citizens/add-new-citizens/add-new-citizens.component";
import {EditCitizenComponent} from "./citizens/edit-citizen/edit-citizen.component";
import {SingleCitizenComponent} from "./citizens/single-citizen/single-citizen.component";
import {OfficialsListComponent} from "./officials/officials-list/officials-list.component";
import {AddNewOfficialComponent} from "./officials/add-new-official/add-new-official.component";
import {EditOfficialComponent} from "./officials/edit-official/edit-official.component";
import {SingleOfficialComponent} from "./officials/single-official/single-official.component";
import {RolesListComponent} from "./roles/roles-list/roles-list.component";
import {EditRolesComponent} from "./roles/edit-roles/edit-roles.component";
import {AddRolesComponent} from "./roles/add-roles/add-roles.component";
import {SingleRoleDetailsComponent} from "./roles/single-role-details/single-role-details.component";

const routes: Routes = [
  {
    path:'',
    component: SidebarComponent,
    children: [
      {path:'citizens-list',component: CitizensListComponent},
      {path:'add-new-citizens',component:AddNewCitizensComponent},
      {path:'citizens-list/edit-citizen-details',component:EditCitizenComponent},
      {path:'citizens-list/citizen-details',component:SingleCitizenComponent},

      {path:'officials-list',component:OfficialsListComponent},
      {path:'add-new-official',component:AddNewOfficialComponent},
      {path:'officials-lists/edit-official-details',component:EditOfficialComponent},
      {path:'officials-lists/official-details',component:SingleOfficialComponent},

      {path:'roles-list',component:RolesListComponent},
      {path:'edit-roles',component:EditRolesComponent},
      {path:'add-new-roles',component:AddRolesComponent},
      {path:'roles-list/role-details',component:SingleRoleDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
