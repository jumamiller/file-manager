import { Component, OnInit } from '@angular/core';
import {Citizen} from "../../../../core/models/citizen";
import {UserService} from "../../../../core/services/user.service";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../../../core/services/auth.service";
import * as moment from 'moment';
import {Router} from "@angular/router";
import {environment} from "../../../../../environments/environment";
import {ConfirmationAlertService} from "../../../../core/helpers/confirmation-alert.service";
import {PermissionType} from "../../../../core/constants/permission-type";
@Component({
  selector: 'app-officials-list',
  templateUrl: './officials-list.component.html',
  styleUrls: ['./officials-list.component.css']
})
export class OfficialsListComponent implements OnInit {

  permissions=PermissionType;
  officials:Citizen[];
  loading=true;
  loadingOfficial=true;
  now: Date = new Date();
  assetsURL=environment.ASSETS_URL;
  selectedOfficial:Citizen;
  currentOfficialDetails:Citizen;
  constructor(
    private userService:UserService,
    private authService:AuthService,
    private router:Router,
    private confirmationAlert:ConfirmationAlertService,
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
   * get selected official details
   * @param official_id
   */
  getSingleOfficialDetails(official_id){
    this.userService.showSingleUserDetails(official_id)
      .subscribe((res)=>{
        if(res.success)
        {
          this.currentOfficialDetails = res.data;
          this.loadingOfficial=false;
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
   * current official
   * @param official
   */
  onOfficialChange(official:Citizen){
    this.selectedOfficial=official;
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
    this.confirmationAlert.sweetAlert(
      'Are you sure?',
      'Suspending an official will deny the affected official an access to Kogas',
      '',
      '',
      'question',
      true,
      'Yes, Suspend Official!',
      'No, Cancel',
      '',
      this.userService.suspendUser(suspensionInfo,userId)
    );
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
    this.confirmationAlert.sweetAlert(
      'Are you sure?',
      'By activating an official, you let them access Kogas system and perform operations depending on their roles',
      '',
      '',
      'question',
      true,
      'Yes, Activate Official!',
      'No, Cancel',
      '',
      this.userService.activateUser(activationInfo,userId)
    );
  }

  /**
   * remove official
   * @param userId
   */
  remove(userId: number)
  {
    this.confirmationAlert.sweetAlert(
      'Are you sure?',
      'Deleting an official is an irreversible process and will deny the affected official an access to Kogas',
      '',
      '',
      'question',
      true,
      'Yes, Delete Official!',
      'No, Cancel',
      '',
      this.userService.deleteUser(userId)
    );
  }
}
