import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CitizensListComponent } from './citizens/citizens-list/citizens-list.component';
import { AddNewCitizensComponent } from './citizens/add-new-citizens/add-new-citizens.component';
import { EditCitizenComponent } from './citizens/edit-citizen/edit-citizen.component';
import { SingleCitizenComponent } from './citizens/single-citizen/single-citizen.component';
import { AddNewOfficialComponent } from './officials/add-new-official/add-new-official.component';
import { EditOfficialComponent } from './officials/edit-official/edit-official.component';
import { OfficialsListComponent } from './officials/officials-list/officials-list.component';
import { SingleOfficialComponent } from './officials/single-official/single-official.component';
import { RolesListComponent } from './roles/roles-list/roles-list.component';
import { AddRolesComponent } from './roles/add-roles/add-roles.component';
import { EditRolesComponent } from './roles/edit-roles/edit-roles.component';
import { SingleRoleDetailsComponent } from './roles/single-role-details/single-role-details.component';
import {SharedModule} from "../../shared/shared.module";
import { RecursiveComponent } from './recursive/recursive.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CitizensListComponent,
    AddNewCitizensComponent,
    EditCitizenComponent,
    SingleCitizenComponent,
    AddNewOfficialComponent,
    EditOfficialComponent,
    OfficialsListComponent,
    SingleOfficialComponent,
    RolesListComponent,
    AddRolesComponent,
    EditRolesComponent,
    SingleRoleDetailsComponent,
    RecursiveComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        UsersRoutingModule,
        FormsModule
    ]
})
export class UsersModule { }
