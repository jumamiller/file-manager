import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import { ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import {MaterialModule} from "../material-module";
import {CommonModule} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import { OfficialCategoryPipe} from "../core/pipes/official-category.pipe";
import {OfficialOfficePipe} from "../core/pipes/official-office.pipe";
import {MinistryPipe} from "../core/pipes/ministry.pipe";
import {AccessControlDirective} from "../core/directives/access-control.directive";
import {NgxSpinnerModule} from "ngx-spinner";
import {DateAgoPipe} from "../core/pipes/date-ago.pipe";

@NgModule({
  declarations: [
    SidebarComponent,
    OfficialCategoryPipe,
    OfficialOfficePipe,
    MinistryPipe,
    DateAgoPipe,
    AccessControlDirective,
  ],
  exports: [
    ReactiveFormsModule,
    SidebarComponent,
    MaterialModule,
    NgxPaginationModule,
    RouterModule,
    CommonModule,
    OfficialCategoryPipe,
    DateAgoPipe,
    OfficialOfficePipe,
    MinistryPipe,
    AccessControlDirective,
    NgxSpinnerModule,

  ],
    imports: [
        RouterModule,
        HttpClientModule,
        ReactiveFormsModule,
        MaterialModule,
        NgxPaginationModule,
        CommonModule,
        NgxSpinnerModule
    ],
})
export class SharedModule { }
