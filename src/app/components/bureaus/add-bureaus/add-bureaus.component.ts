import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import * as _ from 'lodash';
import {Bureau} from "../../../core/models/bureau";
@Component({
  selector: 'app-add-bureaus',
  templateUrl: './add-bureaus.component.html',
  styleUrls: ['./add-bureaus.component.css']
})
export class AddBureausComponent implements OnInit {


  submitting=false;
  bureauForm:FormGroup;
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  constructor(
    private formBuilder:FormBuilder,
    private apiService:ApiService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.bureauFormControl();
  }

  /**
   * form control
   */
  bureauFormControl(){
    this.bureauForm= this.formBuilder.group({
      name:['',Validators.required],
      header_text:['',Validators.required],
      description:['',Validators.required],
      address:['',Validators.required],
      budget:['',Validators.required]
    })
  }
  get form(){
    return this.bureauForm.controls;
  }

  /**
   * on adding a new ministry
   */
  onSubmit(){
    this.submitting=true;
    let bureau:Bureau={
      budget: this.form.budget.value,
      description: this.form.description.value,
      name: this.form.name.value,
      header_text: this.form.header_text.value,
      banner_image:this.cardImageBase64,
    };

    this.apiService.addBureau(bureau)
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

        return false;
      }

      if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
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

          console.log(img_height, img_width);

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
            console.log(this.cardImageBase64);
            this.isImageSaved = true;
            // this.previewImagePath = imgBase64Path;
          }
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

}
