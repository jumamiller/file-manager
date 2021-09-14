import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {News} from "../../../models/news";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  news:News[];
  loading=true;
  constructor(private apiService:ApiService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getNews();
  }

  /**
   * add news
   */
  getNews(){
    this.apiService.getNews()
      .subscribe((res)=>{
        this.news=res['data'];
        this.loading=false;
      })
  }

}
