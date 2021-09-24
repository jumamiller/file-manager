import { Component, OnInit } from '@angular/core';
import {Citizen} from "../../../../core/models/citizen";
import {UserService} from "../../../../core/services/user.service";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../../../core/services/auth.service";
import * as moment from 'moment';
import {Router} from "@angular/router";
import {environment} from "../../../../../environments/environment";
@Component({
  selector: 'app-officials-list',
  templateUrl: './officials-list.component.html',
  styleUrls: ['./officials-list.component.css']
})
export class OfficialsListComponent implements OnInit {

  officials:Citizen[];
  loading=true;
  now: Date = new Date();

  assetsURL=environment.ASSETS_URL;
  constructor(
    private userService:UserService,
    private authService:AuthService,
    private router:Router,
    private toastrService:ToastrService,
  ) { }

  ngOnInit(): void {
    this.officialsList();
  }

  /**
   * government officials lists
   * @constructor
   */
  officialsList(){
    this.userService.registeredKogiOfficialsList()
      .subscribe((res)=>{
        if(res.success)
        {
          this.officials = res.data;
          this.toastrService.success(res.message,'Success');
          this.loading=false;
        }
        else{
          this.toastrService.error(res.message,'Failed');
          this.loading=false;
        }
      },error => {
        this.toastrService.error(error.error.message,'Error');
        this.loading=false;
      })
  }
  /**
   * suspend admin staff
   * @param userId
   */
  suspend(userId: number)
  {
    let currentAdminId=this.authService.currentUserValue.data.id;
    let suspensionInfo={
      user_is_suspended:1,
      user_suspended_by:currentAdminId,
      user_suspended_date:moment().format('YYYY/MM/DD HH:mm:ss')
    };
    this.userService.suspendUser(suspensionInfo,userId)
      .subscribe((res)=>{
        if(res.success)
        {
          this.toastrService.success(res.message,'Success');
          this.reloadCurrentRoute();
          this.loading=false;
        }
        else{
          this.toastrService.error(res.message,'Failed');
          this.loading=false;
        }
      },error => {
        this.toastrService.error(error.error.message,'Error');
        this.loading=false;
      })
  }/**
   * activate suspended official
   * @param userId
   */
  activate(userId: number)
  {
    let currentAdminId=this.authService.currentUserValue.data.id;
    let activationInfo={
      user_is_suspended:false,
      user_activated_by:currentAdminId,
      user_activated_date:moment().format('YYYY/MM/DD HH:mm:ss')
    };
    this.userService.activateUser(activationInfo,userId)
      .subscribe((res)=>{
        if(res.success)
        {
          this.toastrService.success(res.message,'Success');
          this.reloadCurrentRoute();
          this.loading=false;
        }
        else{
          this.toastrService.error(res.message,'Failed');
          this.loading=false;
        }
      },error => {
        this.toastrService.error(error.error.message,'Error');
        this.loading=false;
      })
  }

  /**
   * remove official
   * @param userId
   */
  remove(userId: number)
  {
    this.userService.deleteUser(userId)
      .subscribe((res)=>{
        if(res.success)
        {
          this.toastrService.success(res.message,'Success');
          this.reloadCurrentRoute();
          this.loading=false;
        }
        else{
          this.toastrService.error(res.message,'Failed');
          this.loading=false;
        }
      },error => {
        this.toastrService.error(error.error.message,'Error');
        this.loading=false;
      })
  }
  /**
   * reload
   */
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

}
