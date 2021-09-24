import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import { ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import {MaterialModule} from "../material-module";
import {CommonModule} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {NgDropFilesDirective} from "../core/directives/ng-drop-files.directive";
import { OfficialCategoryPipe} from "../core/pipes/official-category.pipe";
import {OfficialOfficePipe} from "../core/pipes/official-office.pipe";
import {MinistryPipe} from "../core/pipes/ministry.pipe";

@NgModule({
  declarations: [
    SidebarComponent,
    NgDropFilesDirective,
    OfficialCategoryPipe,
    OfficialOfficePipe,
    MinistryPipe
  ],
  exports: [
    ReactiveFormsModule,
    SidebarComponent,
    MaterialModule,
    NgxPaginationModule,
    RouterModule,
    CommonModule,
    NgDropFilesDirective,
    OfficialCategoryPipe,
    OfficialOfficePipe,
    MinistryPipe


  ],
  imports: [
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxPaginationModule,
    CommonModule
  ],
})
export class SharedModule { }
