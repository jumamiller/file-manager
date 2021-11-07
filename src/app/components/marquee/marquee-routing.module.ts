import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MarqueeListComponent} from "./marquee-list/marquee-list.component";
import {SidebarComponent} from "../../shared/layouts/sidebar/sidebar.component";

const routes: Routes = [
  {
    path:'',
    component:SidebarComponent,
    children:[
      {
        path:'list',
        component:MarqueeListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarqueeRoutingModule { }
