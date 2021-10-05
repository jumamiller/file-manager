import { Component, OnInit } from '@angular/core';
import {Suggestion} from "../../../core/models/suggestion";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {PermissionType} from "../../../core/constants/permission-type";

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {

  proposals:Suggestion[];
  permissionType=PermissionType;
  loading=true;
  constructor(private apiService:ApiService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.suggestionsList();
  }

  suggestionsList(){
    this.apiService.getProposalsList()
      .subscribe((res)=>{
        this.proposals=res['data'];
        this.loading=false;
      },error => {
        this.toastrService.error(error.error.message,'Error');
      })
  }

}
