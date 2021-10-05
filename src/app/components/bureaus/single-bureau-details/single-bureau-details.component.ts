import { Component, OnInit } from '@angular/core';
import {Ministry} from "../../../core/models/ministry";
import {environment} from "../../../../environments/environment";
import {ApiService} from "../../../core/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Bureau} from "../../../core/models/bureau";

@Component({
  selector: 'app-single-bureau-details',
  templateUrl: './single-bureau-details.component.html',
  styleUrls: ['./single-bureau-details.component.css']
})
export class SingleBureauDetailsComponent implements OnInit {

  bureau:Bureau;
  loading=true;
  imageURL=environment.ASSETS_URL;
  constructor(private apiService:ApiService,private route:ActivatedRoute,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getSingleMinistry();
  }
  getSingleMinistry(){
    let bureauId=this.route.snapshot.queryParamMap.get('bureauId');
    this.apiService.getSingleBureau(bureauId)
      .subscribe((res)=>{
        this.bureau=res.data;
        this.toastrService.success(res.message,'Success');
        this.loading=false;
      },error => {
        this.toastrService.error(error.error.message,'Error');
      })
  }

}
