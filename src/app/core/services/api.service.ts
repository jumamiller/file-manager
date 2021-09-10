import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {environment} from "../../../environments/environment";
import {Citizen} from "../models/citizen";

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
   * login citizens accounts
   * @param citizen
   */
  loginCitizens(citizen: { password: any; email: any }): Observable<User>{
    return this.httpClient.post<User>(`${environment.API_BASE_URL}login`,citizen);
  }
}
