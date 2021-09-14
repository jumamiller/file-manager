import { Component, OnInit } from '@angular/core';
import {Project} from "../../../core/models/project";
import {ApiService} from "../../../core/services/api.service";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projects: Project[]=[];
  loading=true;
  constructor(private apiService:ApiService) { }

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
}
