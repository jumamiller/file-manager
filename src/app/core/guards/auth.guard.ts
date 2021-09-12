import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService} from "../services/auth.service";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate
{
  constructor(private router: Router, private authService: AuthService,private toastrService:ToastrService) {  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    const currentUser = this.authService.currentUserValue;
    if (currentUser)
    {
      // logged in so return true
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.toastrService.error("You're not authenticated to access this resource","ACCESS DENIED");
    this.router.navigate(['/admin/auth/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }

}
