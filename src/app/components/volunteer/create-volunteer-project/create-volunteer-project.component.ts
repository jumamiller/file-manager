import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {Volunteer} from "../../../core/models/volunteer";

@Component({
  selector: 'app-create-volunteer-project',
  templateUrl: './create-volunteer-project.component.html',
  styleUrls: ['./create-volunteer-project.component.css']
})
export class CreateVolunteerProjectComponent implements OnInit {
  volunteerProjectForm: FormGroup;
  submitting=false;

  constructor(private apiService:ApiService,private toastrService:ToastrService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formControls();
  }

  formControls(){
    this.volunteerProjectForm=this.fb.group({
      title:['',[]],
      description:['',[]],
      purpose:['',[]],
      location:['',[]],
      duration:['',[]],
      status:['',[]],
      resources:['',[]],
    });
  }

  get form(){
    return this.volunteerProjectForm.controls;
  }

  onSubmit() {
    this.submitting=true;
    let project:Volunteer={
      title: this.form.title.value,
      description: this.form.description.value,
      purpose: this.form.purpose.value,
      location: this.form.location.value,
      duration: this.form.duration.value,
      status: this.form.status.value,
      resources: this.form.description.value
    }

    this.apiService.addNewVolunteerProject(project)
      .subscribe((res)=>{
        if(res.success){
          this.toastrService.success(res.message,'Success');
          this.submitting=false;
        }
        else{
          this.toastrService.warning(res.message,'Failed');
          this.submitting=false;
        }

      },error => {
        this.toastrService.error(error.error.message,'Error');
        this.submitting=false;
      })
  }
}
