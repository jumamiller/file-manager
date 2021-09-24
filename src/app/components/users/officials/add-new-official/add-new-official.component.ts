import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../core/services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Citizen} from "../../../../core/models/citizen";
import {ToastrService} from "ngx-toastr";
import {ApiService} from "../../../../core/services/api.service";
import {Role} from "../../../../core/models/role";
import {Category} from "../../../../core/models/category";
import {Ministry} from "../../../../core/models/ministry";
import {LocalGovernment} from "../../../../core/models/local-government";
import * as _ from 'lodash';
@Component({
  selector: 'app-add-new-official',
  templateUrl: './add-new-official.component.html',
  styleUrls: ['./add-new-official.component.css']
})
export class AddNewOfficialComponent implements OnInit {

  roles:Role[];
  officialForm: FormGroup;
  loading=true;
  submitting=false;
  categories:Category[];
  selectedCategory:any;
  selectedSubCategory:any;
  ministries:Ministry[];
  LGAs:LocalGovernment[];

  //avatar
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;

  constructor(
    private authService:AuthService,
    private formBuilder:FormBuilder,
    private apiService:ApiService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.officialsFormControl();
    this.getAllRoles();
    this.getCategories();
    this.getMinistries();
  }

  /**
   * controls
   */
  officialsFormControl(){
    this.officialForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      role:['',Validators.required],
      phone:['',Validators.required],
      email:['',Validators.required],
      city:['',Validators.required],
      gender:['',Validators.required],
      LGA:['',Validators.required],
      sector:['',Validators.required],
      official_category:[''],
      official_office:[''],
      ministry_id:[''],
      local_government_id:[''],
      bureaus_id:[''],
      government_house_id:[''],
      password:['',Validators.required],
    })
  }

  getMinistries(){
    this.apiService.getMinistry()
      .subscribe((res)=>{
        this.ministries=res['data'];
      })
  }
  getLocalGovernments(){
    this.apiService.getLocalGovernments()
      .subscribe((res)=>{
        this.LGAs=res['data'];
      })
  }

  /**
   * get controls values
   */
  get form(){
    return this.officialForm.controls;
  }

  currentCategory(cat:any){
    this.selectedCategory=cat;
  }

  /**
   * @param sub
   */
  currentSubCategory(sub:any){
    this.selectedSubCategory=sub;
  }

  /**
   * official details submitted
   */
  onSubmit(){
    this.submitting=true;
    let official:Citizen={
      first_name:this.form.firstName.value,
      last_name: this.form.lastName.value,
      email:this.form.email.value,
      phone:this.form.phone.value,
      city: this.form.city.value,
      gender:this.form.gender.value,
      password:this.form.password.value,
      LGA:this.form.LGA.value,
      user_type:'official',
      avatar: this.cardImageBase64,
      sector:this.form.sector.value,
      official_category:this.form.official_category.value,
      official_office:this.form.official_office.value,
      ministry_id:this.form.ministry_id.value,
      local_government_id:this.form.local_government_id.value,
      bureaus_id:this.form.bureaus_id.value,
      government_house_id:this.form.government_house_id.value
    }
    this.authService.register(official)
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
   * list roles
   */
  getAllRoles(){
    this.apiService.getAllRoles()
      .subscribe((res)=>{
        this.roles=res['data'];
        this.loading=false;
      })
  }

  /**
   * get categories
   */
  getCategories(){
    this.apiService.getCategories()
      .subscribe((res)=>{
        this.categories=res['data'];
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
