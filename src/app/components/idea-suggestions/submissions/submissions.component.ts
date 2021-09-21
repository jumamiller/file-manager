import { Component, OnInit } from '@angular/core';
import {Suggestion} from "../../../core/models/suggestion";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {

  suggestions:Suggestion[];
  submitting=false;
  loading=true;
  responseForm:FormGroup;
  suggestion_id:number;
  constructor(private apiService:ApiService,
              private fb:FormBuilder,
              private toastrService:ToastrService,
              private router:Router) { }

  ngOnInit(): void {
    this.suggestionsList();
    this.responseFormControl();
  }

  suggestionsList(){
    this.apiService.getListOfSuggestions()
      .subscribe((res)=>{
        this.suggestions=res['data'];
        this.loading=false;
      },error => {
        this.toastrService.error(error.error.message,'Error');
      })
  }

  //appointment response form
  responseFormControl(){
    this.responseForm=this.fb.group({
      response:['',[Validators.required]],
    });
  }

  get form(){
    return this.responseForm.controls;
  }

  onSubmit() {
    this.submitting=true;
    let suggestion:any={
      response: this.form.response.value,
      suggestion_id:this.suggestion_id
    };
    this.apiService.respondToSuggestions(suggestion)
      .subscribe((res)=>{
        this.toastrService.success('You have successfully responded to this suggestion','Success');
        this.submitting=false;
        this.reloadCurrentRoute();
      },error => {
        this.toastrService.error(error.error.message,'Error');
        this.submitting=false;
      })
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  onSuggestionClick(id: any) {
    this.suggestion_id=id;
  }
}
