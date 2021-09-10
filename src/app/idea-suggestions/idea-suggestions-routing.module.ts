import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "../shared/layouts/sidebar/sidebar.component";
import {SubmissionsComponent} from "./submissions/submissions.component";
import {SingleSubmissionsComponent} from "./single-submissions/single-submissions.component";

const routes: Routes = [
  {
    path:'',
    component: SidebarComponent,
    children:[
      {
        path:'submissions',
        component: SubmissionsComponent
      },
      {
        path:'submissions/details',
        component: SingleSubmissionsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdeaSuggestionsRoutingModule { }
