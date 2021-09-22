import { Component, OnInit } from '@angular/core';
import {Ministry} from "../../../core/models/ministry";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {Route, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ministries-list',
  templateUrl: './ministries-list.component.html',
  styleUrls: ['./ministries-list.component.css']
})
export class MinistriesListComponent implements OnInit {

  editForm:FormGroup;
  submitting=false;
  ministries: Ministry[]=[];
  selectedMinistryId:number;

  loading=true;
  constructor(
    private apiService:ApiService,
    private fb:FormBuilder,
    private toastrService:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.editMinistryFormControls();
    this.listOfMinistries();
  }

  /**
   * edit form controls
   */
  editMinistryFormControls(){
    this.editForm=this.fb.group({
      name:[''],
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

  onMinistrySelection(id){
    this.selectedMinistryId=id;
  }

  /**
   * list of ministries
   */
  listOfMinistries(){
    this.apiService.getMinistry()
      .subscribe((res)=>{
        this.ministries=res['data'];
        this.loading=false;
      })
  }

  /**
   * remove ministry
   * @param id
   */
  removeMinistry(id:number){
    this.apiService.removeMinistry(id)
      .subscribe((res)=>{
        this.toastrService.success(res.message,'Success');
        this.reloadCurrentRoute();
      },error => {
        this.toastrService.error(error.error.message,'Error');
      })
  }

  /**
   * update ministry
   */
  onMinistryUpdate(){
    this.submitting=true;
    let ministry:Ministry={
      name:this.form.name.value,
      description:this.form.description.value,
      budget:this.form.budget.value
    };
    this.apiService.updateMinistry(ministry,this.selectedMinistryId)
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
   * reload
   */
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
