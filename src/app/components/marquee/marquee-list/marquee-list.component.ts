import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ConfirmationAlertService} from "../../../core/helpers/confirmation-alert.service";

@Component({
  selector: 'app-marquee-list',
  templateUrl: './marquee-list.component.html',
  styleUrls: ['./marquee-list.component.css']
})
export class MarqueeListComponent implements OnInit {

  submitting=false;
  marqueeForm:FormGroup;
  marquees:any;
  constructor(
    private apiService:ApiService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private confirmationAlert:ConfirmationAlertService
  ) { }

  ngOnInit(): void {
    this.getCurrentMarquee();
    this.marqueeFormControl();
  }

  marqueeFormControl(){
    this.marqueeForm=this.formBuilder.group({
      first_input:['',Validators.required],
      second_input:['',Validators.required],
      optional_input:[''],
    })
  }
  get form(){
    return this.marqueeForm.controls;
  }

  onSubmit(){
    this.submitting=true;
    let marquee:any={
      first_input:this.form.first_input.value,
      second_input:this.form.second_input.value,
      optional_input:this.form.optional_input.value,
    }
    this.apiService.createMarquee(marquee)
      .subscribe((res)=>{
        this.toastrService.success(res.message,'Success');
        this.submitting=false;
      },error => {
        this.toastrService.error(error.error.message,'Error');
        this.submitting=false;
      })
  }
  /**
   *
   */
  getCurrentMarquee(){
    this.apiService.getMarquees()
      .subscribe((res)=>{
        this.marquees=res.data;
      },error => {
        this.toastrService.error(error.error.message('Error'))
      })
  }
  /**
   * remove marquee
   * @param id
   */
  remove(id: number)
  {
    this.confirmationAlert.sweetAlert(
      'Are you sure?',
      'Deleting a marquee is an irreversible process and will not show on KOGAS home page',
      '',
      '',
      'question',
      true,
      'Yes, Delete Marquee!',
      'No, Cancel',
      '',
      this.apiService.removeMarquee(id)
    );
  }

}
