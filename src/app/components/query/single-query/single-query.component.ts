import { Component, OnInit } from '@angular/core';
import {Suggestion} from "../../../core/models/suggestion";
import {environment} from "../../../../environments/environment";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {ConfirmationAlertService} from "../../../core/helpers/confirmation-alert.service";
import {ActivatedRoute} from "@angular/router";
import {Inquiry} from "../../../core/models/inquiry";

@Component({
  selector: 'app-single-query',
  templateUrl: './single-query.component.html',
  styleUrls: ['./single-query.component.css']
})
export class SingleQueryComponent implements OnInit {


  inquiry:Inquiry;
  loading=true;
  imageURL=environment.ASSETS_URL;

  constructor(
    private apiService:ApiService,
    private toastrService:ToastrService,
    private confirmationAlert:ConfirmationAlertService,
    private activatedRoute:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getSuggestionDetails();
  }

  /**
   * single suggestion details
   */
  getSuggestionDetails(){
    let id=this.activatedRoute.snapshot.params.id;
    this.apiService.getSingleInquiryRequest(id)
      .subscribe((res)=>{
        this.inquiry=res.data;
        this.loading=false;
      },error => {
        this.toastrService.error(error.error.message,'Error');
        this.loading=false;
      })
  }
  /**
   * remove inquiry
   * @param inquiry_id
   */
  remove(inquiry_id: number)
  {
    this.confirmationAlert.sweetAlert(
      'Are you sure?',
      'Deleting a inquiry is an irreversible process and the sender will cease to see it.',
      '',
      '',
      'question',
      true,
      'Yes, Delete Appointment!',
      'No, Cancel',
      '',
      this.apiService.removeInquiryRequest(inquiry_id)
    );
  }

}
