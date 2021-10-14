import { Component, OnInit } from '@angular/core';
import {PermissionType} from "../../../core/constants/permission-type";
import {Project} from "../../../core/models/project";
import {environment} from "../../../../environments/environment";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import * as _ from 'lodash';
import { NgxSpinnerService } from "ngx-spinner";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-edit-project-details',
  templateUrl: './edit-project-details.component.html',
  styleUrls: ['./edit-project-details.component.css']
})
export class EditProjectDetailsComponent implements OnInit {

  editProjectForm:FormGroup;
  projectId:any;
  submitting=false;

  permissionType=PermissionType;
  project:Project;
  imageURL=environment.ASSETS_URL;
  loading=true;

  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  projectImages=[];


  constructor(
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private apiService:ApiService,
    private spinner: NgxSpinnerService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCurrentProjectDetails();
    this.editProjectControl();
  }

  /**
   * form control
   */
  editProjectControl(){
    this.editProjectForm=this.fb.group({
      name:[''],
      description: [''],
      client:[''],
      category:[''],
      budget:[''],
      contractor:[''],
      contractor_contacts:[''],
      facilitator_name:[''],
      facilitator_contacts:[''],
      total_duration:[''],
      start_date:[''],
      end_date:[''],
      type:[''],
      status:[''],
    });
  }

  /**
   * current project details
   */
  getCurrentProjectDetails(){
    let id=this.route.snapshot.queryParamMap.get('project_id')
    this.apiService.singleProjectDetails(id)
      .subscribe((res)=>{
        if(res.success){
          this.project=res.data;
          this.toastrService.success(res.message,'Success');
          console.log()
          this.loading=false;
        }
        else{
          this.toastrService.warning(res.message,'Failed');
        }
      },error => {
        this.toastrService.error(error.errors.message,'Error');
      })
  }
  get form(){
    return this.editProjectForm.controls;
  }

  /**
   * update project details
   */
  onSubmit(){
    let id=this.route.snapshot.queryParamMap.get('project_id')
    this.submitting=true;
    let project:any={
      client:  this.form.client.value,
      type:  this.form.type.value,
      contractor:  this.form.contractor.value,
      contractor_contacts:  this.form.contractor_contacts.value,
      description:  this.form.description.value,
      end_date: this.form.end_date.value,
      facilitator_contacts: this.form.facilitator_contacts.value,
      facilitator_name: this.form.facilitator_name.value,
      project_image: this.cardImageBase64,
      status: this.form.status.value,
      category: this.form.category.value,
      name: this.form.name.value,
      start_date: this.form.start_date.value,
      total_duration: this.form.total_duration.value,
      budget: this.form.budget.value,
      other_project_images: this.projectImages,
    }
    this.apiService.updateProject(project,id)
      .subscribe((res)=>{
        if(res){
          this.submitting=false;
          this.toastrService.success(res.data.message,'Success');
        }
        else{
          this.submitting=false;
          this.toastrService.error('Something went wrong while adding project,try again later','Failed');
        }
      },error => {
        this.submitting=false;
        this.toastrService.error(error.errors.message);
      })
  }
  /**
   * handle multiple file uploads
   */
  // @ts-ignore
  handleMultipleFileInput(fileInput){
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 15200;
      const max_width = 25600;

      if (fileInput.target.files[0].size > max_size) {
        this.imageError =
          'Maximum size allowed is ' + max_size / 1000 + 'Mb';
        this.toastrService.error(this.imageError,'Error');
        return false;
      }

      if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
        this.toastrService.error(this.imageError,'Error');
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        // @ts-ignore
        image.onload = rs => {
          const img_height = rs.currentTarget['height'];
          const img_width = rs.currentTarget['width'];

          if (img_height > max_height && img_width > max_width) {
            this.imageError =
              'Maximum dimensions allowed ' +
              max_height +
              '*' +
              max_width +
              'px';
            return false;
          } else {
            let image=e.target.result;
            /** spinner starts on init */
            this.spinner.show();
            this.apiService.uploadProjectImages(image)
              .subscribe((res)=>{
                this.spinner.hide();
                this.projectImages.push(res.file_path);
                this.toastrService.success(res.message,'Success');
              },error => {
                this.toastrService.error(error.error.message,'Error');
              })
          }
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
}
