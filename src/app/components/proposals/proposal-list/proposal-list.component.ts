import { Component, OnInit } from '@angular/core';
import {Suggestion} from "../../../core/models/suggestion";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {PermissionType} from "../../../core/constants/permission-type";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {

  proposals:Suggestion[];
  permissionType=PermissionType;
  loading=true;
  imageURL=environment.ASSETS_URL;
  constructor(private apiService:ApiService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.suggestionsList();
  }

  suggestionsList(){
    this.apiService.getMyProposalsList()
      .subscribe((res)=>{
        this.proposals=res.data;
        this.loading=false;
      },error => {
        this.toastrService.error(error.error.message,'Error');
      })
  }

}
