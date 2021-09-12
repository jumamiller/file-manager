import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {environment} from "../../../environments/environment";
import {UserList} from "../models/user-list";

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
}
