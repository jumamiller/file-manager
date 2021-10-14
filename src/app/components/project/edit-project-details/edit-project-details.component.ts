import { Component, OnInit } from '@angular/core';
import {PermissionType} from "../../../core/constants/permission-type";
import {Project} from "../../../core/models/project";
import {environment} from "../../../../environments/environment";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit-project-details',
  templateUrl: './edit-project-details.component.html',
  styleUrls: ['./edit-project-details.component.css']
})
export class EditProjectDetailsComponent implements OnInit {

  projectId:any;
  permissionType=PermissionType;
  project:Project;
  imageURL=environment.ASSETS_URL;
  loading=true;
  constructor(private route:ActivatedRoute,private apiService:ApiService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCurrentProjectDetails();
  }

  /**
   * current project details
   */
  getCurrentProjectDetails(){
    let id=this.route.snapshot.queryParamMap.get('project_id')
    this.apiService.singleProjectDetails(id)
      .subscribe((res)=>{
        if(res.success){
          this.project=res.data;
          this.toastrService.success(res.message,'Success');
          console.log()
          this.loading=false;
        }
        else{
          this.toastrService.warning(res.message,'Failed');
        }
      },error => {
        this.toastrService.error(error.errors.message,'Error');
      })
  }
}
