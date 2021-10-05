import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Project} from "../../../core/models/project";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {PermissionType} from "../../../core/constants/permission-type";

@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.css']
})
export class AddNewProjectComponent implements OnInit {

  projectForm:FormGroup;
  permissionType=PermissionType;
  constructor(
    private formBuilder:FormBuilder,
    private toatrService:ToastrService,
    private apiService:ApiService) { }

  ngOnInit(): void {
    this.projectFormControls();
  }

  /**
   * project controls
   */
  projectFormControls(){
    this.projectForm=this.formBuilder.group({
      name:['',Validators.required],
      description: ['',Validators.required],
      category:['',Validators.required],
      project_image:['',Validators.required],
      client:['',Validators.required],
      contractor:['',Validators.required],
      contractor_contacts:['',Validators.required],
      facilitator_name:['',Validators.required],
      facilitator_contacts:['',Validators.required],
      ministry:['',Validators.required],
      total_duration:['',Validators.required],
      start_date:['',Validators.required],
      end_date:['',Validators.required],
      status:[''],
    });
  }
  get form(){
    return this.projectForm.controls;
  }

  /**
   *
   */
  onSubmit(){
    let project:Project={
      category: this.form.category.value,
      client:  this.form.client.value,
      contractor:  this.form.contractor.value,
      contractor_contacts:  this.form.contractor_contacts.value,
      description:  this.form.description.value,
      end_date: this.form.end_date.value,
      facilitator_contacts: this.form.facilitator_contacts.value,
      facilitator_name: this.form.facilitator_name.value,
      project_image: this.form.project_image.value,
      status: 'upcoming',
      ministry: this.form.ministry.value,
      name: this.form.name.value,
      start_date: this.form.start_date.value,
      total_duration: this.form.total_duration.value
    }
    this.apiService.createNewProjects(project)
      .subscribe((res)=>{
        if(res){
          this.toatrService.success('You have successfully added a new project');
        }
        else{
          this.toatrService.error('Something went wrong while adding project,try again later','Failed');
        }
      },error => {
        this.toatrService.error(error.errors.message);
      })
  }

}
