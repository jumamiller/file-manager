import { Component, OnInit } from '@angular/core';
import {Project} from "../../../core/models/project";
import {ApiService} from "../../../core/services/api.service";
import {Router} from "@angular/router";
import {PermissionType} from "../../../core/constants/permission-type";
import {environment} from "../../../../environments/environment";
import {ConfirmationAlertService} from "../../../core/helpers/confirmation-alert.service";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  permissionType=PermissionType;
  projects: Project[]=[];
  loading=true;
  imageURL=environment.ASSETS_URL;
  constructor(
    private apiService:ApiService,
    private confirmationAlert:ConfirmationAlertService,
    private router:Router) { }

  ngOnInit(): void {
    this.listOfProjects();
  }

  /**
   * list of projects
   */
  listOfProjects(){
    this.apiService.listOfProjects()
      .subscribe((res)=>{
        this.projects=res['data'];
        this.loading=false;
      })
  }

  /**
   * redirect ot single project id
   * @param projectId
   */
  projectDetails(projectId: any) {
    this.router.navigate(['admin/projects/kogi-projects-list/details/'],{queryParams: {project_id: `${projectId}`}});
  }
  /**
   * remove official
   * @param projectId
   */
  remove(projectId: number)
  {
    this.confirmationAlert.sweetAlert(
      'Are you sure?',
      'Deleting an official is an irreversible process and will deny the affected official an access to Kogas',
      '',
      '',
      'question',
      true,
      'Yes, Delete Official!',
      'No, Cancel',
      '',
      this.apiService.removeProject(projectId)
    );
  }
}
