import { Component, OnInit } from '@angular/core';
import {Role} from "../../../../core/models/role";
import {ApiService} from "../../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  roles:Role[];
  loading=true;
  constructor(private apiService:ApiService,private toastrService:ToastrService,private router:Router) { }

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

  /**
   * remove role
   */
  removeRole(role_id:number){
    this.apiService.removeRole(role_id)
      .subscribe((res)=>{
        this.toastrService.success(res.message,'Success');
        this.reloadCurrentRoute();
      },error=>{
        console.log(error);
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
