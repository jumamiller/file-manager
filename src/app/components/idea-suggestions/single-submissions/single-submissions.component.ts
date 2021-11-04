import { Component, OnInit } from '@angular/core';
import {Suggestion} from "../../../core/models/suggestion";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {ConfirmationAlertService} from "../../../core/helpers/confirmation-alert.service";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-single-submissions',
  templateUrl: './single-submissions.component.html',
  styleUrls: ['./single-submissions.component.css']
})
export class SingleSubmissionsComponent implements OnInit {

  suggestion:Suggestion;
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
    this.apiService.getSingleSubmissionRequest(id)
      .subscribe((res)=>{
        // @ts-ignore
        this.suggestion=res.data;
        this.loading=false;
      },error => {
        this.toastrService.error(error.error.message,'Error');
        this.loading=false;
      })
  }
  /**
   * remove suggestion
   * @param submission_id
   */
  remove(submission_id: number)
  {
    this.confirmationAlert.sweetAlert(
      'Are you sure?',
      'Deleting a suggestion is an irreversible process and the sender will cease to see it.',
      '',
      '',
      'question',
      true,
      'Yes, Delete Appointment!',
      'No, Cancel',
      '',
      this.apiService.removeSubmissionRequest(submission_id)
    );
  }

}
