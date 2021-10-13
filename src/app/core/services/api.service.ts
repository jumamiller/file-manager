import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
import {Category} from "../models/category";
import {LocalGovernment} from "../models/local-government";
import {Suggestion} from "../models/suggestion";
import {Volunteer} from "../models/volunteer";
import {Bureau} from "../models/bureau";
import {B} from "@angular/cdk/keycodes";

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
   * upload project images
   */
  uploadProjectImages(other_project_images:any){
    return this.httpClient.post<any>(`${environment.API_BASE_URL}admin/upload-project-images`, {other_project_images});
  }

  /**
   * list all projects
   */
  listOfProjects():Observable<Project[]>{
    return this.httpClient.get<Project[]>(`${environment.API_BASE_URL}admin/list-of-projects`)
  }

  /**
   * remove project
   */
  removeProject(id:number):Observable<Project>{
    return this.httpClient.delete<Project>(`${environment.API_BASE_URL}admin/list-of-projects/${id}`);
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
   * show single news
   */
  getSingleNews(newsId:number):Observable<News>{
    return this.httpClient.get<News>(`${environment.API_BASE_URL}admin/get-news/${newsId}`);
  }

  /**
   * update news details
   */
  updateNews(data:News, newsId:number):Observable<News>{
    return this.httpClient.patch<News>(`${environment.API_BASE_URL}admin/get-news/${newsId}`,data);
  }

  /**
   * remove news
   */
  removeNews(newsId){
    return this.httpClient.delete<News>(`${environment.API_BASE_URL}admin/get-news/${newsId}`);
  }

  /**
   * show single ministry
   */
  showSingleMinistry(ministryId: string):Observable<Ministry>{
    return this.httpClient.get<Ministry>(`${environment.API_BASE_URL}admin/get-ministry/${ministryId}`);
  }

  /**
   * add ministries
   */
  addMinistry(ministry: Ministry):Observable<Ministry>{
    return this.httpClient.post<Ministry>(`${environment.API_BASE_URL}admin/add-ministry`,ministry);
  }

  /**
   * remove ministry
   */
  removeMinistry(ministryId:number):Observable<any>{
    return this.httpClient.delete<Ministry>(`${environment.API_BASE_URL}admin/remove-ministry/${ministryId}`);
  }

  /**
   * update ministry
   */
  updateMinistry(data:Ministry,ministryId){
    return this.httpClient.patch<Ministry>(`${environment.API_BASE_URL}admin/update-ministry/${ministryId}`,data);
  }

  /**
   * get list of bureaus
   */
  getBureaus():Observable<Bureau>{
    return this.httpClient.get<Bureau>(`${environment.API_BASE_URL}admin/get-bureaus`);
  }

  /**
   * add bureau
   */
  addBureau(bureau:Bureau):Observable<Bureau>{
    return this.httpClient.post<Bureau>(`${environment.API_BASE_URL}admin/add-bureaus`,bureau);
  }

  /**
   * remove bureaus
   */
  removeBureau(bureauId:number):Observable<Bureau>{
    return this.httpClient.delete<Bureau>(`${environment.API_BASE_URL}admin/remove-bureaus/${bureauId}`);
  }
  /**
   * update bureaus
   */
  updateBureaus(data:Bureau,bureauId){
    return this.httpClient.patch<Bureau>(`${environment.API_BASE_URL}admin/update-bureau/${bureauId}`,data);
  }

  /**
   * get single bureau
   * @param bureauId
   */
  getSingleBureau(bureauId: string):Observable<Bureau>{
    return this.httpClient.get<Bureau>(`${environment.API_BASE_URL}admin/get-bureau/${bureauId}`);
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
  getAllAppointments():Observable<Appointment>{
    return this.httpClient.get<Appointment>(`${environment.API_BASE_URL}admin/appointments`);
  }

  /**
   * respond to appointment
   */
  respondToAppointment(appointmentDetails:any,appointment_id:number):Observable<any>{
    return this.httpClient.patch<any>(`${environment.API_BASE_URL}admin/appointment/${appointment_id}`,appointmentDetails);
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
   * update role
   */
  updateRole(role:Role, role_id:number):Observable<Role>{
    return this.httpClient.patch<Role>(`${environment.API_BASE_URL}admin/roles/${role_id}`,role);
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

  /**
   * get categories
   */
  getCategories():Observable<Category>{
    return this.httpClient.get<Category>(`${environment.API_BASE_URL}admin/category`);
  }

  /**
   * get categories
   */
  getSingleCategory(category_id:number):Observable<Category>{
    return this.httpClient.get<Category>(`${environment.API_BASE_URL}admin/category/${category_id}`);
  }

  /**
   * create a category
   */
  createCategory(category:Category):Observable<Category>{
    return this.httpClient.post<Category>(`${environment.API_BASE_URL}admin/category`,category);
  }

  /**
   * create sub category
   */
  createSubCategory(office:Category):Observable<Category>{
    return this.httpClient.post<Category>(`${environment.API_BASE_URL}admin/sub-category`,office);
  }

  /**
   * edit categories
   */
  updateCategories(data:Category,id:number):Observable<Category>{
    return this.httpClient.patch<Category>(`${environment.API_BASE_URL}admin/category/${id}`,data);
  }

  /**
   * update sub-category
   */
  updateSubCategory(data:Category,id:number):Observable<Category>{
    return this.httpClient.patch<Category>(`${environment.API_BASE_URL}admin/sub-category/${id}`,data);
  }

  /**
   * remove categories
   */
  removeCategory(id:number):Observable<Category>{
    return this.httpClient.delete<Category>(`${environment.API_BASE_URL}admin/category/${id}`);
  }

  /**
   * remove sub categoryy
   */
  removeSubCategory(id:number):Observable<Category>{
    return this.httpClient.delete<Category>(`${environment.API_BASE_URL}admin/sub-category/${id}`);
  }

  /**
   * get sub categories
   */
  getSubCategories():Observable<Category>{
    return this.httpClient.get<Category>(`${environment.API_BASE_URL}admin/sub-category`);
  }


  /**
   * local governments
   */
  addLocalGovernments(LGA:LocalGovernment):Observable<LocalGovernment>{
    return this.httpClient.post<LocalGovernment>(`${environment.API_BASE_URL}admin/lga`,LGA);
  }

  /**
   * get local governments
   */
  getLocalGovernments():Observable<LocalGovernment[]>{
    return this.httpClient.get<LocalGovernment[]>(`${environment.API_BASE_URL}admin/lga`);
  }

  /**
   * get single Local government
   */
  getSingleLocalGovernment(LGA_id:number):Observable<LocalGovernment>{
    return this.httpClient.get<LocalGovernment>(`${environment.API_BASE_URL}admin/lga/${LGA_id}`);
  }

  /**
   * update Local government
   */
  updateLocalGovernment(LGA:LocalGovernment,LGA_id:number):Observable<LocalGovernment>{
    return this.httpClient.patch<LocalGovernment>(`${environment.API_BASE_URL}admin/lga/${LGA_id}`,LGA);
  }

  /**
   * remove a local government
   */
  removeLocalGovernments(LGA_id:number):Observable<LocalGovernment>{
    return this.httpClient.delete<LocalGovernment>(`${environment.API_BASE_URL}admin/lga/${LGA_id}`);
  }

  /**
   * ideas
   */
  getListOfSuggestions():Observable<Suggestion[]>{
    return this.httpClient.get<Suggestion[]>(`${environment.API_BASE_URL}citizen/suggestions`);
  }

  /**
   * respond to suggestion
   */
  respondToSuggestions(response:any):Observable<any>{
    return this.httpClient.patch<Suggestion[]>(`${environment.API_BASE_URL}admin/suggestion`,response);
  }

  /**
   * proposals
   */
  getProposalsList():Observable<Suggestion[]>{
    return this.httpClient.get<Suggestion[]>(`${environment.API_BASE_URL}citizen/proposals`);
  }

  /**
   * volunteer projects
   */
  getVolunteerProjects():Observable<Volunteer[]>{
    return this.httpClient.get<Volunteer[]>(`${environment.API_BASE_URL}citizen/volunteer`);
  }

  /**
   * volunteer projects
   * @param volunteer
   */
  addNewVolunteerProject(volunteer:Volunteer):Observable<Volunteer>{
    return this.httpClient.post<Volunteer>(`${environment.API_BASE_URL}citizen/volunteer`,volunteer);
  }
}
