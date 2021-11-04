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
import {PressRelease} from "../models/press-release";
import {Inquiry} from "../models/inquiry";

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
   * update project
   */
  updateProject(project:Project,id):Observable<Project>{
    return this.httpClient.patch<Project>(`${environment.API_BASE_URL}admin/list-of-projects/${id}`,project);
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
    return this.httpClient.get<Project>(`${environment.API_BASE_URL}admin/list-of-projects/${projectId}`);
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
  updateNews(news: News, newsId: string):Observable<News>{
    return this.httpClient.patch<News>(`${environment.API_BASE_URL}admin/get-news/${newsId}`,news);
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
  getSingleAppointment(id:number):Observable<Appointment>{
    return this.httpClient.get<Appointment>(`${environment.API_BASE_URL}admin/appointments/${id}`);
  }
  /**
   * get all appointments
   */
  removeAppointment(id:number):Observable<Appointment>{
    return this.httpClient.delete<Appointment>(`${environment.API_BASE_URL}admin/appointments/${id}`);
  }
  /**
   * get all appointments
   */
  getAppointmentRequests(sub_category_id: string):Observable<Appointment>{
    return this.httpClient.get<Appointment>(`${environment.API_BASE_URL}admin/appointments/request/${sub_category_id}`);
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
  getListOfMySuggestionsRequest():Observable<Suggestion>{
    return this.httpClient.get<Suggestion>(`${environment.API_BASE_URL}admin/my-suggestion-requests`);
  }
  /**
   * proposals
   */
  getListOfMyProposalsRequest():Observable<Suggestion>{
    return this.httpClient.get<Suggestion>(`${environment.API_BASE_URL}admin/my-proposal-requests`);
  }
  /**
   * proposals
   */
  getSingleSubmissionRequest(id):Observable<Suggestion>{
    return this.httpClient.get<Suggestion>(`${environment.API_BASE_URL}admin/submissions/${id}`);
  }
  /**
   * remove submission(proposal/suggestions)
   */
  removeSubmissionRequest(id):Observable<Suggestion>{
    return this.httpClient.delete<Suggestion>(`${environment.API_BASE_URL}admin/submissions/${id}`);
  }

  /**
   * respond to submission
   */
  respondToSubmission(response:Suggestion,$id):Observable<any>{
    return this.httpClient.patch<Suggestion[]>(`${environment.API_BASE_URL}admin/submissions/${$id}`,response);
  }

  /**
   * list of inquiries beloging to current officials
   */
  getListInquiryRequest():Observable<Inquiry>{
    return this.httpClient.get<Inquiry>(`${environment.API_BASE_URL}admin/inquiries`);
  }
  /**
   * single inquiry to this official
   */
  getSingleInquiryRequest(id):Observable<Inquiry>{
    return this.httpClient.get<Inquiry>(`${environment.API_BASE_URL}admin/inquiries/${id}`);
  }
  /**
   * delete single inquiry
   */
  removeInquiryRequest(id):Observable<Inquiry>{
    return this.httpClient.delete<Inquiry>(`${environment.API_BASE_URL}admin/inquiries/${id}`);
  }
  /**
   * delete single inquiry
   */
  updateInquiryRequest(inquiry:Inquiry,id):Observable<Inquiry>{
    return this.httpClient.patch<Inquiry>(`${environment.API_BASE_URL}admin/inquiries/${id}`,inquiry);
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

  /**
   * create a Press releases
   */
  createPressRelease(press:PressRelease):Observable<PressRelease>{
    return this.httpClient.post<PressRelease>(`${environment.API_BASE_URL}admin/press-releases`,press);
  }

  /**
   * get all press releases
   */
  getAllPressReleases():Observable<PressRelease>{
    return this.httpClient.get<PressRelease>(`${environment.API_BASE_URL}press-releases`);
  }
  /**
   * get single press release
   */
  getSinglePressRelease(id:number):Observable<PressRelease>{
    return this.httpClient.get<PressRelease>(`${environment.API_BASE_URL}press-releases/${id}`);
  }

  /**
   * update press release
   * @param press
   * @param press_id
   */
  updatePressRelease(press:PressRelease,press_id:number):Observable<PressRelease>{
    return this.httpClient.patch<PressRelease>(`${environment.API_BASE_URL}admin/press-releases/${press_id}`,press);
  }

  /**
   * remove press release
   * @param id
   */
  removePressRelease(id:number):Observable<PressRelease>{
    return this.httpClient.delete<PressRelease>(`${environment.API_BASE_URL}admin/press-releases/${id}`);
  }
}
