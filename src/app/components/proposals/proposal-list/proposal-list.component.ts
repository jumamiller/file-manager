import { Component, OnInit } from '@angular/core';
import {Suggestion} from "../../../core/models/suggestion";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {PermissionType} from "../../../core/constants/permission-type";
import {environment} from "../../../../environments/environment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ConfirmationAlertService} from "../../../core/helpers/confirmation-alert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {

  permissions=PermissionType;
  proposals:Suggestion[];
  permissionType=PermissionType;
  loading=true;
  imageURL=environment.ASSETS_URL;

  submitting=false;
  responseForm:FormGroup;
  suggestion_id:number;

  constructor(
    private apiService:ApiService,
    private toastrService:ToastrService,
    private fb:FormBuilder,
    private confirmationAlert:ConfirmationAlertService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.suggestionsList();
    this.responseFormControl();
  }

  suggestionsList(){
    this.apiService.getListOfMyProposalsRequest()
      .subscribe((res)=>{
        this.proposals=res.data;
        this.loading=false;
      },error => {
        this.toastrService.error(error.error.message,'Error');
        this.loading=false;
      })
  }

  //appointment response form
  responseFormControl(){
    this.responseForm=this.fb.group({
      response:['',[Validators.required]],
      status:[''],
    });
  }

  get form(){
    return this.responseForm.controls;
  }

  /**
   * on submission of response
   */
  onOfficialResponse() {
    this.submitting=true;
    let suggestion:any={
      response: this.form.response.value,
      status: this.form.status.value,
    };
    this.apiService.respondToSubmission(suggestion,this.suggestion_id)
      .subscribe((res)=>{
        this.toastrService.success('You have successfully responded to this proposal','Success');
        this.submitting=false;
        this.reloadCurrentRoute();
      },error => {
        this.toastrService.error(error.error.message,'Error');
        this.submitting=false;
      })
  }

  /**
   *
   */
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  onProposalClick(id: any) {
    this.suggestion_id=id;
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
      'Yes, Delete Suggestion!',
      'No, Cancel',
      '',
      this.apiService.removeSubmissionRequest(submission_id)
    );
  }
}
