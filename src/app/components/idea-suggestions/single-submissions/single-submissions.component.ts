import { Component, OnInit } from '@angular/core';
import {Suggestion} from "../../../core/models/suggestion";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-single-submissions',
  templateUrl: './single-submissions.component.html',
  styleUrls: ['./single-submissions.component.css']
})
export class SingleSubmissionsComponent implements OnInit {

  suggestion:Suggestion;
  loading=false;

  constructor(
    private apiService:ApiService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
  }
  getSuggestionDetails(){

  }

}
