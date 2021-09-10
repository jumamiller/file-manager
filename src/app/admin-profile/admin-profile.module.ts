import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProfileRoutingModule } from './admin-profile-routing.module';
import { MyAccountComponent } from './my-account/my-account.component';
import {SharedModule} from "../shared/shared.module";
import {MaterialModule} from "../material-module";
import { SecurityComponent } from './security/security.component';
import { AccountAppearanceComponent } from './account-appearance/account-appearance.component';


@NgModule({
  declarations: [
    MyAccountComponent,
    SecurityComponent,
    AccountAppearanceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    AdminProfileRoutingModule
  ]
})
export class AdminProfileModule { }
