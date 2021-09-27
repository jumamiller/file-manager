import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return JSON.parse(localStorage.getItem('kogiCitizen'));
  }

  /**
   * get current user to use in directive
   */
  getCurrentUser()
  {
    return JSON.parse(localStorage.getItem('kogiCitizen'));
  }
}
