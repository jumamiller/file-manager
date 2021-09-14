import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {News} from "../../../core/models/news";

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  newsForm:FormGroup;
  loading=true;
  constructor(private apiService:ApiService,
              private toastrService:ToastrService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.newsFormControls();
  }

  /**
   * news form
   */
  newsFormControls(){
    this.newsForm=this.formBuilder.group({
      title: ['',[Validators.required]],
      description: ['',[Validators.required]],
      target_audience: ['',[Validators.required]],
    })
  }
  get form(){
    return this.newsForm.controls;
  }
  /**
   * add news
   */
  onNewsSubmit(){
    let news:News={
      description: this.form.description.value,
      target_audience: this.form.target_audience.value,
      title: this.form.title.value
    }
    this.apiService.addNews(news)
      .subscribe((res)=>{
        if(res){
          this.toastrService.success(res.message);
        }
        else{
          this.toastrService.error(res.message,'Failed');
        }
      },error => {
        this.toastrService.error(error.error.message,'Error');
      })
  }

}
