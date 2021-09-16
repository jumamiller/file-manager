import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {environment} from "../../../environments/environment";
import {Citizen} from "../models/citizen";
import {Project} from "../models/project";
import {Ministry} from "../models/ministry";
import {News} from "../models/news";
import {Appointment} from "../models/appointment";
import {Permission} from "../models/permission";
import {Role} from "../models/role";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  /**
   * create citizens accounts
   * @param citizen
   */
  createNewAccounts(citizen:Citizen): Observable<User>{
    return this.httpClient.post<User>(`${environment.API_BASE_URL}register`,citizen);
  }

  /**
   * create new projects
   */
  createNewProjects(project:Project):Observable<Project>{
    return this.httpClient.post<Project>(`${environment.API_BASE_URL}admin/add-new-project`,project);
  }

  /**
   * list all projects
   */
  listOfProjects():Observable<Project[]>{
    return this.httpClient.get<Project[]>(`${environment.API_BASE_URL}admin/list-of-projects`)
  }

  /**
   *
   * @param projectId
   */
  singleProjectDetails(projectId:any):Observable<Project> {
    return this.httpClient.get<Project>(`${environment.API_BASE_URL}admin/list-of-projects/project-details/${projectId}`);
  }

  /**
   * add news
   */
  addNews(news:News):Observable<News>{
    return this.httpClient.post<News>(`${environment.API_BASE_URL}admin/add-news`,news);
  }

  /**
   * get all news
   */
  getNews():Observable<News[]>{
    return this.httpClient.get<News[]>(`${environment.API_BASE_URL}admin/get-news`);
  }

  /**
   * add ministries
   */
  addMinistry(ministry:Ministry):Observable<Ministry>{
    return this.httpClient.post<Ministry>(`${environment.API_BASE_URL}admin/add-ministry`,ministry);
  }

  /**
   * et ministries
   */
  getMinistry():Observable<Ministry[]>{
    return this.httpClient.get<Ministry[]>(`${environment.API_BASE_URL}admin/get-ministries`);
  }

  /**
   * get all appointments
   */
  getAllAppointments():Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${environment.API_BASE_URL}citizen/appointments`);
  }

  /**
   * roles and permissions
   */
  /**
   * get all permissions
   */
  getAllPermissions():Observable<Permission>{
    return this.httpClient.get<Permission>(`${environment.API_BASE_URL}admin/permissions`);
  }

  /**
   * get all roles
   */
  getAllRoles():Observable<Role[]>{
    return this.httpClient.get<Role[]>(`${environment.API_BASE_URL}admin/roles`);
  }

  /**
   * remove a role
   */
  removeRole(role_id:number):Observable<Role>{
    return this.httpClient.delete<Role>(`${environment.API_BASE_URL}admin/roles/${role_id}`);
  }

  /**
   * add new role
   */
  addNewRole(role:Role):Observable<Role>{
    return this.httpClient.post<Role>(`${environment.API_BASE_URL}admin/roles`,role);
  }

  /**
   * add permission to a role
   */
  addPermissionToRole(permissions:any[],role_id:number):Observable<any>{
    return this.httpClient.post<Role>(`${environment.API_BASE_URL}admin/roles/add-permissions/${role_id}`,{permissions:permissions});
  }

  /**
   * assign Role to official
   */
  assignRoleToOfficial(role:any):Observable<any>{
    return this.httpClient.post<any>(`${environment.API_BASE_URL}admin/roles/assign-roles`,role);
  }
}
