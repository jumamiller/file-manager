import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { SubCategoryListComponent } from './sub-category-list/sub-category-list.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    AddCategoryComponent,
    CategoryListComponent,
    SubCategoryListComponent,
    AddSubCategoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
