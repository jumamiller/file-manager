import { Component, OnInit } from '@angular/core';
import {Suggestion} from "../../../core/models/suggestion";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PermissionType} from "../../../core/constants/permission-type";
import {environment} from "../../../../environments/environment";
import {ConfirmationAlertService} from "../../../core/helpers/confirmation-alert.service";

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {

  permissions=PermissionType;
  suggestions:Suggestion[];
  submitting=false;
  loading=true;
  responseForm:FormGroup;
  suggestion_id:number;
  imageURL=environment.ASSETS_URL;
  constructor(private apiService:ApiService,
              private fb:FormBuilder,
              private toastrService:ToastrService,
              private confirmationAlert:ConfirmationAlertService,
              private router:Router) { }

  ngOnInit(): void {
    this.suggestionsList();
    this.responseFormControl();
  }

  /**
   * my suggestion list
   */
  suggestionsList(){
    this.apiService.getListOfMySuggestionsRequest()
      .subscribe((res)=>{
        this.suggestions=res.data;
        this.loading=false;
      },error => {
        this.toastrService.error(error.error.message,'Error');
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
        this.toastrService.success('You have successfully responded to this suggestion','Success');
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

  onSuggestionClick(id: any) {
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
      'Deleting a suggestion is an irreversible process and the sender will cease to see it.',
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
