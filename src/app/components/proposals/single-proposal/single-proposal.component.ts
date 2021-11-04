import { Component, OnInit } from '@angular/core';
import {Suggestion} from "../../../core/models/suggestion";
import {environment} from "../../../../environments/environment";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {ConfirmationAlertService} from "../../../core/helpers/confirmation-alert.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-proposal',
  templateUrl: './single-proposal.component.html',
  styleUrls: ['./single-proposal.component.css']
})
export class SingleProposalComponent implements OnInit {

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
      'Deleting a proposal is an irreversible process and the sender will cease to see it.',
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
