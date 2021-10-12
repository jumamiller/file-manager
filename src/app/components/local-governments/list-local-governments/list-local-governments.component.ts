import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {LocalGovernment} from "../../../core/models/local-government";
import {environment} from "../../../../environments/environment";
import {ConfirmationAlertService} from "../../../core/helpers/confirmation-alert.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import * as _ from 'lodash';
import {Router} from "@angular/router";
import {PermissionType} from "../../../core/constants/permission-type";
@Component({
  selector: 'app-list-local-governments',
  templateUrl: './list-local-governments.component.html',
  styleUrls: ['./list-local-governments.component.css']
})
export class ListLocalGovernmentsComponent implements OnInit {

  lgas:LocalGovernment[];
  loading=true;
  selectedLGA:LocalGovernment;
  imageUrl=environment.ASSETS_URL;
  editLGAForm:FormGroup;

  page = 1;
  count = 0;
  tableSize = 6;

  permissionType=PermissionType;

  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;

  constructor(private apiService:ApiService,
              private fb:FormBuilder,
              private router:Router,
              private confirmationAlert:ConfirmationAlertService) { }

  ngOnInit(): void {
    this.getLGAs();
    this.LGAFormControls();
  }

  /**
   * list of LGAs
   */
  getLGAs(){
    this.apiService.getLocalGovernments()
      .subscribe((res)=>{
        this.lgas=res['data'];
        this.loading=false;
      })
  }

  /**
   * controls
   * @constructor
   */
  LGAFormControls(){
    this.editLGAForm=this.fb.group({
      name:[],
      state:[],
      population:[],
      area:[],
      country:[],
      chairman_message:[],
      history:[],
    });
  }
  get form(){
    return this.editLGAForm.controls;
  }
  /**
   * on LGA click
   */
  onLGAClick(LGA){
    this.selectedLGA=LGA;
  }
  /**
   * remove official
   * @param LGA_id
   */
  removeLGA(LGA_id: number)
  {
    this.confirmationAlert.sweetAlert(
      'Are you sure?',
      'Deleting LGA is an irreversible process and will affect users linked',
      '',
      '',
      'question',
      true,
      'Yes, Delete LGA!',
      'No, Cancel',
      '',
      this.apiService.removeLocalGovernments(LGA_id)
    );
  }

  /**
   * on updating LGA
   */
  onLGAUpdate(){
    let LGA:LocalGovernment={
      area: this.form.area.value,
      chairman_message: this.form.chairman_message.value,
      country: this.form.country.value,
      history: this.form.history.value,
      name: this.form.name.value,
      population: this.form.population.value,
      state: this.form.state.value,
      LGA_avatar:this.cardImageBase64
    };
    this.confirmationAlert.sweetAlert(
      'Are you sure?',
      `By editing ${this.selectedLGA.name}, you approve that the affected officials details will be updated!`,
      '',
      '',
      'question',
      true,
      'Yes, Update LGA!',
      'No, Cancel',
      '',
      this.apiService.updateLocalGovernment(LGA,this.selectedLGA.id)
    );
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
    this.getLGAs();
  }
}
