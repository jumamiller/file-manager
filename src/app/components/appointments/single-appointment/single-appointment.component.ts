import { Component, OnInit } from '@angular/core';
import {PermissionType} from "../../../core/constants/permission-type";
import {Appointment} from "../../../core/models/appointment";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";
import {ConfirmationAlertService} from "../../../core/helpers/confirmation-alert.service";

@Component({
  selector: 'app-single-appointment',
  templateUrl: './single-appointment.component.html',
  styleUrls: ['./single-appointment.component.css']
})
export class SingleAppointmentComponent implements OnInit {

  permissionType=PermissionType;
  appointment:Appointment;
  loading=true;

  constructor(
    private apiService:ApiService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private confirmationAlert:ConfirmationAlertService,
  ) { }

  ngOnInit(): void {
    this.getAppointmentDetails();
  }

  /**
   * appointments
   */
  getAppointmentDetails(){
    let id=this.activatedRoute.snapshot.params.id;
    this.apiService.getSingleAppointment(id)
      .subscribe((res)=>{
        // @ts-ignore
        this.appointment=res.data;
        this.loading=false;
      },error => {
        this.toastrService.error(error.error.message,'Error');
      })
  }
  /**
   * remove appointment
   * @param appointment_id
   */
  remove(appointment_id: number)
  {
    this.confirmationAlert.sweetAlert(
      'Are you sure?',
      'Deleting an appointment is an irreversible process and the sender will cease to see it.',
      '',
      '',
      'question',
      true,
      'Yes, Delete Appointment!',
      'No, Cancel',
      '',
      this.apiService.removeAppointment(appointment_id)
    );
  }
}
