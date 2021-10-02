import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "../../shared/layouts/sidebar/sidebar.component";
import {AuthGuard} from "../../core/guards/auth.guard";
import {CategoryListComponent} from "./category-list/category-list.component";

const routes: Routes = [
  {
    path:'',
    component:SidebarComponent,
    canActivate: [AuthGuard],
    children:[
      {path:'category-list',component:CategoryListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
