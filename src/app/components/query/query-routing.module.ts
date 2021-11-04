import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "../../shared/layouts/sidebar/sidebar.component";
import {MyQueriesComponent} from "./my-queries/my-queries.component";
import {SingleQueryComponent} from "./single-query/single-query.component";
import {AuthGuard} from "../../core/guards/auth.guard";

const routes: Routes = [
  {
    path:'',
    component: SidebarComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path:'my-query-lists',
        component: MyQueriesComponent,
      },
      {
        path:'my-query-lists/:id',
        component: SingleQueryComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueryRoutingModule { }
