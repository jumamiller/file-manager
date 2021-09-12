import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {catchError} from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService,private router:Router,private toastrService:ToastrService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(catchError(err => {

      if (err.status === 401)
      {
        // auto logout if 401 response returned from api
        this.authService.logout();
        location.reload(true);
      }
      else if (err.status === 403)
      {
        // unauthorised access to a resource
        this.router.navigate(['unauthorised']);
        //this.alert.showMessage('Unauthorized!' , err.error.message, 'warning');
      } else if (err.status === 400)
      {
        // Bad request
        this.toastrService
          .error('Your request cannot be processed at this time due to invalid data', 'warning');
      }
      else if (err.status === 500)
      {
        // internal server error
        this.toastrService.error('An error occurred handling your request', 'Internal Server Error!');
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
