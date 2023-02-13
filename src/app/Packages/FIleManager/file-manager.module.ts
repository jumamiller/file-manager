import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileManagerRoutingModule } from './file-manager-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {FileManagerComponent} from "./file-manager/file-manager.component";


@NgModule({
  declarations: [
    FileManagerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FileManagerRoutingModule
  ]
})
export class FileManagerModule { }
