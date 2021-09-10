import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {RouterModule} from "@angular/router";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import {SharedModule} from "./shared/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material-module";
import {ToastrModule} from "ngx-toastr";
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent,
    DashboardComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
    AppRoutingModule,
    MaterialModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
