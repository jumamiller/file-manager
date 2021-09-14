import { Component, OnInit } from '@angular/core';
import {Ministry} from "../../../core/models/ministry";
import {ApiService} from "../../../core/services/api.service";

@Component({
  selector: 'app-ministries-list',
  templateUrl: './ministries-list.component.html',
  styleUrls: ['./ministries-list.component.css']
})
export class MinistriesListComponent implements OnInit {

  ministries: Ministry[]=[];
  loading=true;
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.listOfMinistries();
  }

  /**
   * list of ministries
   */
  listOfMinistries(){
    this.apiService.getMinistry()
      .subscribe((res)=>{
        this.ministries=res['data'];
        this.loading=false;
      })
  }

}
