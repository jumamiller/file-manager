import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Ministry} from "../../../core/models/ministry";

@Component({
  selector: 'app-single-ministry-details',
  templateUrl: './single-ministry-details.component.html',
  styleUrls: ['./single-ministry-details.component.css']
})
export class SingleMinistryDetailsComponent implements OnInit {

  ministry:Ministry;
  loading=true;
  constructor(private apiService:ApiService,private route:ActivatedRoute,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getSingleMinistry();
  }

  getSingleMinistry(){
    let ministryId=this.route.snapshot.queryParamMap.get('ministryId');
    console.log(ministryId);
    this.apiService.showSingleMinistry(ministryId)
      .subscribe((res)=>{
        this.ministry=res.data;
        this.toastrService.success(res.message,'Success');
        this.loading=false;
      },error => {
        this.toastrService.error(error.error.message,'Error');
      })
  }

}
