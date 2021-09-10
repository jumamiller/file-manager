import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "../../shared/layouts/sidebar/sidebar.component";
import {NewsListComponent} from "./news-list/news-list.component";
import {SingleNewsDetailsComponent} from "./single-news-details/single-news-details.component";
import {AddNewsComponent} from "./add-news/add-news.component";

const routes: Routes = [
  {
    path:'',
    component:SidebarComponent,
    children:[
      {path:'news-list',component:NewsListComponent},
      {path:'news-list/details',component:SingleNewsDetailsComponent},
      {path:'add-news',component:AddNewsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
