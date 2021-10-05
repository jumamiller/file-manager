import { Component, OnInit } from '@angular/core';
import {Volunteer} from "../../../core/models/volunteer";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {PermissionType} from "../../../core/constants/permission-type";

@Component({
  selector: 'app-volunteer-projects',
  templateUrl: './volunteer-projects.component.html',
  styleUrls: ['./volunteer-projects.component.css']
})
export class VolunteerProjectsComponent implements OnInit {

  permissionType=PermissionType;
  volunteerProjects:Volunteer[];
  loading=true;
  constructor(private apiService:ApiService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getVolunteerProjects();
  }

  getVolunteerProjects(){
    this.apiService.getVolunteerProjects()
      .subscribe((res)=>{
        this.volunteerProjects=res['data'];
        this.loading=false;
      },error => {
        this.toastrService.error(error.error.message,'Error');
        this.loading=false;
      })
  }
}
