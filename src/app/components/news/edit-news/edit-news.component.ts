import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {News} from "../../../core/models/news";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../../environments/environment";
@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  //news banner image
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  event:News;

  newsForm:FormGroup;
  loading=true;
  submitting=false;

  newsId:any;
  imageURL=environment.ASSETS_URL;
  constructor(private apiService:ApiService,
              private activatedRoute:ActivatedRoute,
              private toastrService:ToastrService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.newsId=this.activatedRoute.snapshot.queryParamMap.get('id');
    this.getSingleNews();
    this.newsFormControls();
  }

  /**
   * get news
   */
  getSingleNews(){
    this.apiService.getSingleNews(this.newsId)
      .subscribe((res)=>{
        this.event=res.data;
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
    this.newsForm=this.formBuilder.group({
      title: ['',[Validators.required]],
      description: ['',[Validators.required]],
      target_audience: ['',[Validators.required]],
    })
  }

  /**
   * form values
   */
  setFormValues(){
    this.newsForm.patchValue({
      title:this.event.title,
      description:this.event.description,
      target_audience:this.event.target_audience,
    });
  }

  /**
   * form control
   */
  get form(){
    return this.newsForm.controls;
  }
  /**
   * add news
   */
  onNewsSubmit(){
    this.submitting=true;
    let news:News={
      description: this.form.description.value,
      target_audience: this.form.target_audience.value,
      title: this.form.title.value,
      banner_image: this.cardImageBase64,
    }
    this.apiService.updateNews(news,this.newsId)
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
