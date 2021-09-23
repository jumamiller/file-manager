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

@NgModule({
  declarations: [
    SidebarComponent,
    NgDropFilesDirective,
    OfficialCategoryPipe
  ],
  exports: [
    ReactiveFormsModule,
    SidebarComponent,
    MaterialModule,
    NgxPaginationModule,
    RouterModule,
    CommonModule,
    NgDropFilesDirective,
    OfficialCategoryPipe

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
