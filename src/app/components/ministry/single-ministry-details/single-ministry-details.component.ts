import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Ministry} from "../../../core/models/ministry";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-single-ministry-details',
  templateUrl: './single-ministry-details.component.html',
  styleUrls: ['./single-ministry-details.component.css']
})
export class SingleMinistryDetailsComponent implements OnInit {

  ministry:Ministry;
  loading=true;
  imageURL=environment.ASSETS_URL;
  constructor(private apiService:ApiService,private route:ActivatedRoute,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getSingleMinistry();
  }

  getSingleMinistry(){
    let ministryId=this.route.snapshot.queryParamMap.get('ministryId');
    this.apiService.showSingleMinistry(ministryId)
      .subscribe((res)=>{
        this.ministry=res.data;
        console.log(this.imageURL+this.ministry.banner_image);
        this.toastrService.success(res.message,'Success');
        this.loading=false;
      },error => {
        this.toastrService.error(error.error.message,'Error');
      })
  }

}
