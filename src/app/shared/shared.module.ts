import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import { ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import {MaterialModule} from "../material-module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    ReactiveFormsModule,
    SidebarComponent,
    MaterialModule,
    RouterModule
  ],
  imports: [
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule
  ],
})
export class SharedModule { }
