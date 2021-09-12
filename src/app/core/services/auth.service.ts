import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../models/user";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {ToastrService} from "ngx-toastr";
import {Citizen} from "../models/citizen";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private httpClient: HttpClient,private toastrService:ToastrService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('kogiCitizen')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  /**
   * get current user
   */
  get currentUserValue():User{
    return this.currentUserSubject.value;
  }

  /**
   * login user
   * @param email
   * @param password
   */
  login(email: string, password: string):Observable<any> {
    return this.httpClient.post<User>(`${environment.API_BASE_URL}login`, { email, password })
      .pipe(map(user => {
        if(user.data.user_type=='official'){
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('kogiCitizen', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        }
        else{
          this.toastrService.error("ACCESS DENIED | You're not authorised to this portal!");
          return false;
        }
      }));
  }

  /**
   * logout kogi citizen
   */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('kogiCitizen');
    this.currentUserSubject.next(null);
  }

  /**
   * register user endpoint
   */
  register(citizen:Citizen):Observable<User>{
    return this.httpClient.post<User>(`${environment.API_BASE_URL}create-account`,citizen);
  }
}
