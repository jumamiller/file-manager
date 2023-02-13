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
    return this.httpClient.post<User>(`https://api.solutech.millerjuma.co.ke/api/v1/auth/login`, { email, password })
      .pipe(map(res => {
        if(res.data){
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('kogiCitizen', JSON.stringify(res));
          this.currentUserSubject.next(res);
          return res;
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

  /**
   * update user details
   */
  updateUserProfile(user:Citizen,id:any):Observable<User>{
    return this.httpClient.patch<User>(`${environment.API_BASE_URL}admin/user/update/${id}`,user);
  }
}
