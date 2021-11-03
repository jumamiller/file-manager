import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {News} from "../../../core/models/news";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../../environments/environment";
import {ApiService} from "../../../core/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Ministry} from "../../../core/models/ministry";
import {PressRelease} from "../../../core/models/press-release";
@Component({
  selector: 'app-press-release-edit',
  templateUrl: './press-release-edit.component.html',
  styleUrls: ['./press-release-edit.component.css']
})
export class PressReleaseEditComponent implements OnInit {

  //news banner image
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  press:PressRelease;
  ministries:Ministry[];
  selectedMinistryId:number;

  pressForm:FormGroup;
  loading=true;
  submitting=false;

  pressId:any;
  imageURL=environment.ASSETS_URL;

  constructor(private apiService:ApiService,
              private activatedRoute:ActivatedRoute,
              private toastrService:ToastrService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.pressId=this.activatedRoute.snapshot.queryParamMap.get('id');
    this.getSinglePressRelease();
    this.newsFormControls();
    this.getMinistries();
  }
  /**
   * list of ministries
   */
  getMinistries(){
    this.apiService.getMinistry()
      .subscribe((res)=>{
        this.ministries=res['data'];
        this.loading=false
      },error => {
        this.toastrService.error(error.error.message,'Error');
      })
  }

  /**
   * on ministry change
   * @param ministry
   */
  onMinistryChange(ministry){
    this.selectedMinistryId=ministry.value;
  }

  /**
   * get press statements
   */
  getSinglePressRelease(){
    this.apiService.getSinglePressRelease(this.pressId)
      .subscribe((res)=>{
        this.press=res.data;
        this.setFormValues();
        this.loading=false;
      },error => {
        this.toastrService.error(error.error.message,'Error');
        this.loading=false;
      })
  }

  /**
   * news form
   */
  newsFormControls(){
    this.pressForm=this.formBuilder.group({
      title: ['',[Validators.required]],
      description: ['',[Validators.required]],
      target_audience: ['',[Validators.required]],
    })
  }

  /**
   * form values
   */
  setFormValues(){
    this.pressForm.patchValue({
      title:this.press.title,
      description:this.press.description,
    });
  }

  /**
   * form control
   */
  get form(){
    return this.pressForm.controls;
  }
  /**
   * add news
   */
  onPressUpdate(){
    this.submitting=true;
    let pressRelease:PressRelease={
      description: this.form.description.value,
      ministry_id: this.selectedMinistryId,
      title: this.form.title.value,
      attachment: this.cardImageBase64,
    }
    this.apiService.updatePressRelease(pressRelease,this.pressId)
      .subscribe((res)=>{
        if(res){
          this.toastrService.success(res.message);
          this.submitting=false;
        }
        else{
          this.toastrService.error(res.message,'Failed');
          this.submitting=false;
        }
      },error => {
        this.toastrService.error(error.error.message,'Error');
        this.submitting=false;
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
          }
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

}
