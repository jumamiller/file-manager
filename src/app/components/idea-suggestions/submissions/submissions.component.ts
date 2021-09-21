import { Component, OnInit } from '@angular/core';
import {Suggestion} from "../../../core/models/suggestion";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {

  suggestions:Suggestion[];
  loading=true;
  constructor(private apiService:ApiService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.suggestionsList();
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

}
