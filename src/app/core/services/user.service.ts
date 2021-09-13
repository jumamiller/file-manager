import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {environment} from "../../../environments/environment";
import {UserList} from "../models/user-list";
import {Citizen} from "../models/citizen";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  /**
   * return list of KOGi Citizens registered on KOGAS
   */
  registeredKogiCitizensList(): Observable<UserList>{
    return this.httpClient.get<UserList>(`${environment.API_BASE_URL}admin/citizens`);
  }

  /**
   * list of KOGI officials
   */
  registeredKogiOfficialsList():Observable<UserList>{
    return this.httpClient.get<UserList>(`${environment.API_BASE_URL}admin/government-officials`);
  }

  /**
   * get details of a single user
   */
  showSingleUserDetails(id:number):Observable<User>{
    return this.httpClient.get<User>(`${environment.API_BASE_URL}admin/user/details/${id}`);
  }

  /**
   * suspend user
   */
  suspendUser(data:any,id:number):Observable<any>{
    return this.httpClient.patch<any>(`${environment.API_BASE_URL}admin/user/suspend/${id}`,data);
  }

  /**
   * activate blocked user
   */
  activateUser(data:any, id:number):Observable<any>{
    return this.httpClient.patch<any>(`${environment.API_BASE_URL}admin/user/activate/${id}`,{data});
  }

  /**
   * soft delete user from system
   */
  deleteUser(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${environment.API_BASE_URL}admin/user/remove/${id}`);
  }

  /**
   * update user details
   */
  editUserDetails(citizen:Citizen,id:number):Observable<Citizen>{
    return this.httpClient.patch<Citizen>(`${environment.API_BASE_URL}admin/user/remove/${id}`,{citizen});
  }
}
