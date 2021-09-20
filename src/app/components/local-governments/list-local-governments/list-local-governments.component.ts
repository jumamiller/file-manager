import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {LocalGovernment} from "../../../core/models/local-government";

@Component({
  selector: 'app-list-local-governments',
  templateUrl: './list-local-governments.component.html',
  styleUrls: ['./list-local-governments.component.css']
})
export class ListLocalGovernmentsComponent implements OnInit {

  lgas:LocalGovernment[];
  loading=true;
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getLGAs();
  }

  /**
   * list of LGAs
   */
  getLGAs(){
    this.apiService.getLocalGovernments()
      .subscribe((res)=>{
        this.lgas=res['data'];
        this.loading=false;
      })
  }

}
