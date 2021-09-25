import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../core/services/user.service";
import {ToastrService} from "ngx-toastr";
import {Citizen} from "../../../../core/models/citizen";
import {environment} from "../../../../../environments/environment";
import * as moment from "moment";
import {AuthService} from "../../../../core/services/auth.service";
import {ConfirmationAlertService} from "../../../../core/helpers/confirmation-alert.service";

@Component({
  selector: 'app-citizens-list',
  templateUrl: './citizens-list.component.html',
  styleUrls: ['./citizens-list.component.css']
})
export class CitizensListComponent implements OnInit {


  citizens: Citizen[];
  loading=true;

  assetsURL=environment.ASSETS_URL;
  selectedCitizen:Citizen;

  tableSize = 10;
  page = 1;
  count = 0;
  tableSizes = [2, 4, 10, 20];

  constructor(
    private userService:UserService,
    private toastrService:ToastrService,
    private authService:AuthService,
    private confirmationAlert:ConfirmationAlertService
) { }

  ngOnInit(): void {
    this.listOfCitizens();
  }

  /**
   * list of citizens
   */
  listOfCitizens(){
    this.userService.registeredKogiCitizensList()
      .subscribe((res)=>{
        if(res.success)
        {
          this.citizens = res.data;
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
   * current citizen
   * @param citizen
   */
  onCitizenChange(citizen:Citizen){
    this.selectedCitizen=citizen;
  }
  /**
   * suspend citizen
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
      'Suspending an citizen will deny the affected official an access to Kogas',
      '',
      '',
      'question',
      true,
      'Yes, Suspend Citizen!',
      'No, Cancel',
      '',
      this.userService.suspendUser(suspensionInfo,userId)
    );
  }/**
   * activate suspended citizen
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
      'By activating citizen, you let them access Kogas system and perform operations depending on their roles',
      '',
      '',
      'question',
      true,
      'Yes, Activate Citizen!',
      'No, Cancel',
      '',
      this.userService.activateUser(activationInfo,userId)
    );
  }

  /**
   * remove citizen
   * @param userId
   */
  remove(userId: number)
  {
    this.confirmationAlert.sweetAlert(
      'Are you sure?',
      'Deleting an citizen is an irreversible process and will deny the affected citizen an access to Kogas',
      '',
      '',
      'question',
      true,
      'Yes, Delete Citizen!',
      'No, Cancel',
      '',
      this.userService.deleteUser(userId)
    );
  }

  onTableDataChange(event) {
    this.page = event;
    this.listOfCitizens();
  }

  pageChanged($event: number) {
    this.tableSize = event.target["value"];
    this.page = 1;
    this.listOfCitizens();
  }
}
