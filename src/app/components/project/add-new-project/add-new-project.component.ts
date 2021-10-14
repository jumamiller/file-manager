import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {PermissionType} from "../../../core/constants/permission-type";
import {Ministry} from "../../../core/models/ministry";
import {Bureau} from "../../../core/models/bureau";
import * as _ from 'lodash';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.css']
})
export class AddNewProjectComponent implements OnInit {

  projectForm:FormGroup;
  permissionType=PermissionType;
  ministries:Ministry[];
  bureaus:Bureau[];

  loading=true;
  submitting=false;
  selectedMinistryId:number;
  selectedBureauId:number;

  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;

  projectImages:any=[];

  constructor(
    private formBuilder:FormBuilder,
    private spinner: NgxSpinnerService,
    private toastrService:ToastrService,
    private apiService:ApiService) { }

  ngOnInit(): void {
    this.getBureaus();
    this.getMinistries();
    this.projectFormControls();
  }

  /**
   * get list of ministries
   */
  getMinistries(){
    this.apiService.getMinistry()
      .subscribe((res)=>{
        this.ministries=res['data'];
      })
  }

  /**
   * on ministry change, get current ID
   * @param event
   */
  onMinistryChange(event){
    this.selectedMinistryId=event.value;
  }
  /**
   * get list of ministries
   */
  getBureaus(){
    this.apiService.getBureaus()
      .subscribe((res)=>{
        this.bureaus=res.data;
      })
  }

  /**
   * on bureau change, get current ID
   * @param event
   */
  onBureauChange(event){
    this.selectedBureauId=event.value;
  }

  /**
   * project controls
   */
  projectFormControls(){
    this.projectForm=this.formBuilder.group({
      name:['',Validators.required],
      description: ['',Validators.required],
      client:['',Validators.required],
      category:['',Validators.required],
      budget:['',Validators.required],
      contractor:['',Validators.required],
      contractor_contacts:['',Validators.required],
      facilitator_name:['',Validators.required],
      facilitator_contacts:['',Validators.required],
      total_duration:['',Validators.required],
      start_date:['',Validators.required],
      end_date:['',Validators.required],
      type:['',Validators.required],
      status:[''],
    });
  }
  get form(){
    return this.projectForm.controls;
  }

  /**
   * on submits
   */
  onSubmit(){
    this.submitting=true;
    let project:any={
      ministry_id: this.selectedMinistryId,
      bureaus_id: this.selectedBureauId,
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
    this.apiService.createNewProjects(project)
      .subscribe((res)=>{
        if(res){
          this.submitting=false;
          this.toastrService.success('You have successfully added a new project');
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
   * handle image upload
   * @param fileInput
   */
  // @ts-ignore
  handleFileInput(fileInput) {
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
            this.cardImageBase64 = e.target.result;
            this.isImageSaved = true;
            // this.previewImagePath = imgBase64Path;
          }
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
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
