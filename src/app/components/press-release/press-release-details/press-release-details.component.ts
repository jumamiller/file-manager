import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {PressRelease} from "../../../core/models/press-release";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-press-release-details',
  templateUrl: './press-release-details.component.html',
  styleUrls: ['./press-release-details.component.css']
})
export class PressReleaseDetailsComponent implements OnInit {

  press:PressRelease;
  pressId:any;
  loading=true;
  imageURL=environment.ASSETS_URL;
  constructor(
    private apiService:ApiService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.pressId=this.activatedRoute.snapshot.queryParamMap.get('id');
    this.getSinglePressRelease();
  }
  /**
   * get news
   */
  getSinglePressRelease(){
    this.apiService.getSinglePressRelease(this.pressId)
      .subscribe((res)=>{
        this.press=res.data;
        this.loading=false;
      },error => {
        this.toastrService.error(error.error.message,'Error');
        this.loading=false;
      })
  }
}
