import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {LocalGovernment} from "../../../core/models/local-government";
import * as _ from 'lodash';
@Component({
  selector: 'app-add-local-governments',
  templateUrl: './add-local-governments.component.html',
  styleUrls: ['./add-local-governments.component.css']
})
export class AddLocalGovernmentsComponent implements OnInit {

  LGAForm:FormGroup;
  submitting=false;
  //avatar
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;

  constructor(
    private fb:FormBuilder,
    private apiService:ApiService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.LGAForm=this.fb.group({
      name:['',[Validators.required]],
      area:['',[Validators.required]],
      population:['',[Validators.required]],
      state:['',[Validators.required]],
      country:['',[Validators.required]],
      history:[''],
      chairman:['',Validators.required],
      chairman_message:[''],
    });
  }

  get form(){
    return this.LGAForm.controls;
  }

  onSubmit() {
    this.submitting=true;
    let LGA:LocalGovernment={
      area: this.form.area.value,
      chairman_message: this.form.chairman_message.value,
      country: this.form.country.value,
      history: this.form.history.value,
      name: this.form.name.value,
      population: this.form.population.value,
      state: this.form.state.value,
      LGA_avatar:this.cardImageBase64,
    };

    this.apiService.addLocalGovernments(LGA)
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

  /**
   * LGA photo upload
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
}
