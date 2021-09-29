import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {LocalGovernment} from "../../../core/models/local-government";
import {environment} from "../../../../environments/environment";
import {ConfirmationAlertService} from "../../../core/helpers/confirmation-alert.service";
import {FormBuilder, FormGroup} from "@angular/forms";

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
  constructor(private apiService:ApiService,
              private fb:FormBuilder,
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
      state: this.form.state.value
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

}
