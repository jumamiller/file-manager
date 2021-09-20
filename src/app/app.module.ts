import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from "./components/auth/login/login.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {RouterModule} from "@angular/router";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import {SharedModule} from "./shared/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material-module";
import {ToastrModule} from "ngx-toastr";
import { MessagesComponent } from './components/messages/messages.component';
import { NewsListComponent } from './components/news/news-list/news-list.component';
import { SingleNewsDetailsComponent } from './components/news/single-news-details/single-news-details.component';
import { AddNewsComponent } from './components/news/add-news/add-news.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptor} from "./core/helpers/jwt.interceptor";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent,
    DashboardComponent,
    MessagesComponent,
    NewsListComponent,
    SingleNewsDetailsComponent,
    AddNewsComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    RouterModule,
    SharedModule,
    AppRoutingModule,
    MaterialModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
