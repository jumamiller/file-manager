import { Component, OnInit } from '@angular/core';
import {Role} from "../../../../core/models/role";
import {PermissionType} from "../../../../core/constants/permission-type";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Category} from "../../../../core/models/category";
import {Ministry} from "../../../../core/models/ministry";
import {LocalGovernment} from "../../../../core/models/local-government";
import {AuthService} from "../../../../core/services/auth.service";
import {ApiService} from "../../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {Citizen} from "../../../../core/models/citizen";
import * as _ from 'lodash';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../../core/services/user.service";
@Component({
  selector: 'app-edit-official',
  templateUrl: './edit-official.component.html',
  styleUrls: ['./edit-official.component.css']
})
export class EditOfficialComponent implements OnInit {

  roles:Role[];
  permissions=PermissionType;
  officialForm: FormGroup;
  loading=true;

  submitting=false;
  categories:Category[];
  selectedCategory:any;
  currentCategoryId:any;
  selectedSubCategory:any;
  ministries:Ministry[];
  LGAs:LocalGovernment[];

  //avatar
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;

  user:Citizen;
  constructor(
    private authService:AuthService,
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private apiService:ApiService,
    private userService:UserService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.getAllRoles();
    this.getCategories();
    this.getMinistries();
    this.getLocalGovernments();
    setTimeout(()=>{
      this.officialsFormControl();
    },3000)
  }
  /**
   * current user
   */
  getCurrentUser(){
    let id=this.activatedRoute.snapshot.queryParamMap.get('id');
    this.userService.showSingleUserDetails(id)
      .subscribe((res)=>{
        this.user=res.data;
      },error => {
        this.toastrService.error(error.error.message,'Error');
      })
  }

  /**
   * controls
   */
  officialsFormControl(){
    this.officialForm=this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      role:[''],
      phone:[''],
      email:[''],
      city:[''],
      gender:[''],
      LGA:[''],
      sector:[''],
      category_id:[''],
      sub_category_id:[''],
      ministry_id:[''],
      password:[''],
      vision:[''],
      philosophy:[this.user.philosophy],
      profile:[''],
    })
  }

  /**
   * get ministries
   */
  getMinistries(){
    this.apiService.getMinistry()
      .subscribe((res)=>{
        this.ministries=res['data'];
      })
  }

  /**
   * get LGAs
   */
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

  currentCategory(id:number){
    this.currentCategoryId=id;
    this.apiService.getSingleCategory(id)
      .subscribe((res)=>{
        this.selectedCategory=res.data;
      })
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
    let id=this.activatedRoute.snapshot.queryParamMap.get('id');
    this.submitting=true;
    let official:Citizen={
      first_name:this.form.firstName.value,
      last_name: this.form.lastName.value,
      email:this.form.email.value,
      phone:this.form.phone.value,
      city: this.form.city.value,
      gender:this.form.gender.value,
      password:this.form.password.value,
      LGA_id:this.form.LGA.value,
      role:this.form.role.value,
      avatar: this.cardImageBase64,
      sector:this.form.sector.value,
      category_id:this.form.category_id.value,
      sub_category_id:this.form.sub_category_id.value,
      ministry_id:this.form.ministry_id.value,
      vision:this.form.vision.value,
      philosophy:this.form.philosophy.value,
      profile:this.form.profile.value,
    };
    this.authService.updateUserProfile(official,id)
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
