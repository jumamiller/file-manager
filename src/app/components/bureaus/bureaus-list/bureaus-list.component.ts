import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Ministry} from "../../../core/models/ministry";
import {ApiService} from "../../../core/services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmationAlertService} from "../../../core/helpers/confirmation-alert.service";
import {ToastrService} from "ngx-toastr";
import * as _ from 'lodash';
import {Bureau} from "../../../core/models/bureau";
import {PermissionType} from "../../../core/constants/permission-type";
@Component({
  selector: 'app-bureaus-list',
  templateUrl: './bureaus-list.component.html',
  styleUrls: ['./bureaus-list.component.css']
})
export class BureausListComponent implements OnInit {

  editForm:FormGroup;
  submitting=false;
  bureaus: Bureau[]=[];
  selectedBureauId:number;

  permissionType=PermissionType;

  page = 1;
  count = 0;
  tableSize = 7;

  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  loading=true;
  constructor(
    private apiService:ApiService,
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private confirmationAlert:ConfirmationAlertService,
    private toastrService:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.editBureauFormControls();
    this.getBureaus();
  }

  /**
   * edit form controls
   */
  editBureauFormControls(){
    this.editForm=this.fb.group({
      name:[''],
      header_text:[''],
      description:[''],
      budget:['']
    })
  }

  /**
   * form
   */
  get form(){
    return this.editForm.controls;
  }

  onBureauSelection(id){
    this.selectedBureauId=id;
  }

  /**
   * list of ministries
   */
  getBureaus(){
    this.apiService.getBureaus()
      .subscribe((res)=>{
        this.bureaus=res['data'];
        this.loading=false;
      })
  }

  /**
   * remove ministry
   * @param id
   */
  removeBureau(id:number){
    this.confirmationAlert.sweetAlert(
      'Are you sure?',
      'Deleting bureau is an irreversible process and you confirm that this also affects officials linked to it.',
      '',
      '',
      'question',
      true,
      'Yes, Delete Bureau!',
      'No, Cancel',
      '',
      this.apiService.removeBureau(id)
    );
  }

  /**
   * update ministry
   */
  onBureauUpdate(){
    this.submitting=true;
    let bureau:Ministry={
      name:this.form.name.value,
      header_text:this.form.header_text.value,
      description:this.form.description.value,
      budget:this.form.budget.value,
      banner_image: this.cardImageBase64
    };
    this.apiService.updateBureaus(bureau,this.selectedBureauId)
      .subscribe((res)=>{
        this.toastrService.success(res.message,'Success');
        this.submitting=false;
        this.reloadCurrentRoute();
      },error => {
        this.toastrService.error(error.error.message,'Error');
        this.submitting=false;
      })
  }
  /**
   * redirect to single ministry details
   */
  redirectToSingleBureau(bureauId){
    this.router.navigate(['/admin/bureaus/bureau-list/bureau-details'],{queryParams: {bureauId}});
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
            this.isImageSaved = true;
            // this.previewImagePath = imgBase64Path;
          }
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
  /**
   * reload
   */
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  onTableDataChange(event)
  {
    this.page = event;
    this.getBureaus();
  }

  /**
   * @param event
   */
  onTableSizeChange(event): void
  {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getBureaus();
  }

}
