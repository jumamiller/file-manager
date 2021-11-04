import { Component, OnInit } from '@angular/core';
import {PermissionType} from "../../../core/constants/permission-type";
import {Suggestion} from "../../../core/models/suggestion";
import {environment} from "../../../../environments/environment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {ConfirmationAlertService} from "../../../core/helpers/confirmation-alert.service";
import {Router} from "@angular/router";
import {Inquiry} from "../../../core/models/inquiry";

@Component({
  selector: 'app-my-queries',
  templateUrl: './my-queries.component.html',
  styleUrls: ['./my-queries.component.css']
})
export class MyQueriesComponent implements OnInit {

  permissions=PermissionType;
  inquiries:Inquiry[];
  permissionType=PermissionType;
  loading=true;
  imageURL=environment.ASSETS_URL;

  submitting=false;
  responseForm:FormGroup;
  inquiry_id:number;

  constructor(
    private apiService:ApiService,
    private toastrService:ToastrService,
    private fb:FormBuilder,
    private confirmationAlert:ConfirmationAlertService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.listOfMyInquiryRequests();
    this.responseFormControl();
  }

  /**
   * inquiries sent to currently authenticated official
   */
  listOfMyInquiryRequests(){
    this.apiService.getListInquiryRequest()
      .subscribe((res)=>{
        // @ts-ignore
        this.inquiries=res.data;
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
    let inquiry:Inquiry={
      response: this.form.response.value,
      status: this.form.status.value,
    };
    this.apiService.updateInquiryRequest(inquiry,this.inquiry_id)
      .subscribe((res)=>{
        this.toastrService.success('You have successfully responded to this inquiry','Success');
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

  /**
   * onclick event
   * @param id
   */
  onInquiryClick(id: any) {
    this.inquiry_id=id;
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
