import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import { Ministry } from "../../../core/models/ministry";
import {ApiService} from "../../../core/services/api.service";

@Component({
  selector: 'app-add-new-ministry',
  templateUrl: './add-new-ministry.component.html',
  styleUrls: ['./add-new-ministry.component.css']
})
export class AddNewMinistryComponent implements OnInit {

  submitting=false;
  ministryForm:FormGroup;
  formData :FormData;
  constructor(
    private formBuilder:FormBuilder,
    private apiService:ApiService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.ministryFormControl();
  }

  /**
   * form control
   */
  ministryFormControl(){
    this.ministryForm= this.formBuilder.group({
      name:['',Validators.required],
      description:['',Validators.required],
      address:['',Validators.required],
      budget:['',Validators.required]
    })
  }
  get form(){
    return this.ministryForm.controls;
  }

  /**
   * on adding a new ministry
   */
  onSubmit(){
    this.submitting=true;
    let ministry:Ministry={
      budget: this.form.budget.value,
      description: this.form.description.value,
      name: this.form.name.value,

    };

    this.apiService.addMinistry(ministry,this.formData)
      .subscribe((res)=>{
        this.toastrService.success(res.message,'Success');
        this.submitting=false;
      },error => {
        this.toastrService.error(error.error.message,'Error');
        this.submitting=false;
      })
  }

  /**
   * handle image upload
   * @param file
   */
  handleFileInput(file) {
    let formData = new FormData();
    formData.append('banner_image', file.target.files[0]);
    this.apiService.uploadMinistryImage(formData)
      .subscribe((res)=>{
        this.toastrService.success(res.message,'Success');
        this.submitting=false;
      },error => {
        console.log(error);
        this.toastrService.error(error.error.message,'Error');
        this.submitting=false;
      })
  }

}
