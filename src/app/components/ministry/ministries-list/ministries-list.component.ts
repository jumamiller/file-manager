import { Component, OnInit } from '@angular/core';
import {Ministry} from "../../../core/models/ministry";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-ministries-list',
  templateUrl: './ministries-list.component.html',
  styleUrls: ['./ministries-list.component.css']
})
export class MinistriesListComponent implements OnInit {

  ministries: Ministry[]=[];
  loading=true;
  constructor(private apiService:ApiService,private toastrService:ToastrService,private router:Router) { }

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

  /**
   * remove ministry
   * @param id
   */
  removeMinistry(id:number){
    this.apiService.removeMinistry(id)
      .subscribe((res)=>{
        this.toastrService.success(res.message,'Success');
        this.reloadCurrentRoute();
      },error => {
        this.toastrService.error(error.error.message,'Error');
      })
  }
  /**
   * reload
   */
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
