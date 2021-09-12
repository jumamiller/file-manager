import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  /**
   * return list of KOGi Citizens registered on KOGAS
   */
  registeredKogiCitizensList(): Observable<User>{
    return this.httpClient.get<User>(`${environment.API_BASE_URL}admin/citizens`);
  }

  /**
   * list of KOGI officials
   */
  registeredKogiOfficialsList():Observable<User>{
    return this.httpClient.get<User>(`${environment.API_BASE_URL}admin/government-officials`);
  }
}
