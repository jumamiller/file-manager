import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "../../shared/layouts/sidebar/sidebar.component";
import {AuthGuard} from "../../core/guards/auth.guard";
import {AddCategoryComponent} from "./add-category/add-category.component";
import {CategoryListComponent} from "./category-list/category-list.component";
import {AddSubCategoryComponent} from "./add-sub-category/add-sub-category.component";
import {SubCategoryListComponent} from "./sub-category-list/sub-category-list.component";

const routes: Routes = [
  {
    path:'',
    component:SidebarComponent,
    canActivate: [AuthGuard],
    children:[
      {path:'add-new-category',component:AddCategoryComponent},
      {path:'category-list',component:CategoryListComponent},
      {path:'add-new-sub-category',component:AddSubCategoryComponent},
      {path:'sub-category-list',component:SubCategoryListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
