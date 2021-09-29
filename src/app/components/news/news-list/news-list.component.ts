import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {News} from "../../../core/models/news";
import {environment} from "../../../../environments/environment";
import {ConfirmationAlertService} from "../../../core/helpers/confirmation-alert.service";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  news:News[];
  loading=true;
  imageURL=environment.ASSETS_URL;
  constructor(private apiService:ApiService,
              private confirmationAlert:ConfirmationAlertService,
              private toastrService:ToastrService) { }

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
  /**
   * remove news/events
   * @param newsId
   */
  remove(newsId: number)
  {
    this.confirmationAlert.sweetAlert(
      'Are you sure?',
      'Deleting news/event is an irreversible process and will cease to show on the main Kogas home page',
      '',
      '',
      'question',
      true,
      'Yes, Delete News!',
      'No, Cancel',
      '',
      this.apiService.removeNews(newsId)
    );
  }

}
