import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../core/services/auth.service";
import {ToastrService} from "ngx-toastr";
import {Citizen} from "../../../../core/models/citizen";
import * as _ from 'lodash';
import {PermissionType} from "../../../../core/constants/permission-type";

@Component({
  selector: 'app-add-new-citizens',
  templateUrl: './add-new-citizens.component.html',
  styleUrls: ['./add-new-citizens.component.css']
})
export class AddNewCitizensComponent implements OnInit {

  permissions=PermissionType;
  citizensForm:FormGroup;
  submitting=false;
  loading=true;

  //avatar
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;

  constructor(
    private authService:AuthService,
    private formBuilder:FormBuilder,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.citizensFormControl();
  }

  /**
   * controls
   */
  citizensFormControl(){
    this.citizensForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      phone:['',Validators.required],
      email:['',Validators.required],
      city:['',Validators.required],
      gender:['',Validators.required],
      LGA:[''],
      password:['',Validators.required],
    })
  }

  /**
   * get controls values
   */
  get form(){
    return this.citizensForm.controls;
  }
  /**
   * official details submitted
   */
  onSubmit(){
    this.submitting=true;
    let citizen:Citizen={
      first_name:this.form.firstName.value,
      last_name: this.form.lastName.value,
      email:this.form.email.value,
      phone:this.form.phone.value,
      city: this.form.city.value,
      gender:this.form.gender.value,
      password:this.form.password.value,
      LGA_id:this.form.LGA.value,
      user_type:'citizen',
      avatar:this.cardImageBase64,
    }
    this.authService.register(citizen)
      .subscribe((res)=>{
        if(res.success)
        {
          this.toastrService.success(res.message,'Success');
          this.submitting=false;
        }
        if(!res.success){
          this.toastrService.error(res.errors,'Failed');
          this.submitting=false;
        }
      },error => {
        this.toastrService.error(error.error.errors,'Error');
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
            this.toastrService.success('Processing image, please wait...','Adding Image');
          }
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

}
