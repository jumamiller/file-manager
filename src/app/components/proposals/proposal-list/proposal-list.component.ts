import { Component, OnInit } from '@angular/core';
import {Suggestion} from "../../../core/models/suggestion";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {

  proposals:Suggestion[];
  loading=true;
  constructor(private apiService:ApiService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.suggestionsList();
  }

  suggestionsList(){
    this.apiService.getproposalsList()
      .subscribe((res)=>{
        this.proposals=res['data'];
        this.loading=false;
      },error => {
        this.toastrService.error(error.error.message,'Error');
      })
  }

}
