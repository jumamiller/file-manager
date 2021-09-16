import { Component, OnInit } from '@angular/core';
import {Role} from "../../../../core/models/role";
import {ApiService} from "../../../../core/services/api.service";

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  roles:Role[];
  loading=true;
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getAllRoles();
  }

  /**
   * list roles
   */
  getAllRoles(){
    this.apiService.getAllRoles()
      .subscribe((res)=>{
        this.roles=res['data'];
        this.loading=false;
      })
  }
}
