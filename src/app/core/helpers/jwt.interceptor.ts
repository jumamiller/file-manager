import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private authService:AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // add authorization header with jwt token
    const currentUser = this.authService.currentUserValue;

    if (currentUser && currentUser.token)
    {
      let contentType = request.headers.get("Content-Type");
      contentType = contentType == null ? 'application/json' : contentType;
      request = request.clone({
        setHeaders: {
          'Content-Type': contentType,
          Authorization: `Bearer ${currentUser.token}`,
        }
      });
    }
    return next.handle(request);
  }
}
