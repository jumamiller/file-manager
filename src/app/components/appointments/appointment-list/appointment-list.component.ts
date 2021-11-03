import { Component, OnInit } from '@angular/core';
import {Appointment} from "../../../core/models/appointment";
import {ApiService} from "../../../core/services/api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {PermissionType} from "../../../core/constants/permission-type";
import {Citizen} from "../../../core/models/citizen";
import {AuthService} from "../../../core/services/auth.service";
import {ConfirmationAlertService} from "../../../core/helpers/confirmation-alert.service";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  permissions=PermissionType;
  appointments:Appointment[];
  submitting=false;
  loading=true;
  currentUser:Citizen;
  responseForm:FormGroup;
  appointment_id:number;

  constructor(
    private apiService:ApiService,
    private authService:AuthService,
    private fb:FormBuilder,
    private router:Router,
    private confirmationAlert:ConfirmationAlertService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.getAllAppointments();
    this.responseFormControl();
  }
  /**
   * current user
   */
  getCurrentUser(){
    this.currentUser=this.authService.currentUserValue.data;
  }

  /**
   * listing all appointments
   */
  getAllAppointments(){
    this.apiService.getAppointmentRequests(this.currentUser.sub_category_id)
      .subscribe((res)=>{
        // @ts-ignore
        this.appointments=res.data;
        this.loading=false;
      },error => {
        this.toastrService.error(error.error.message,'Error');
      })
  }

  /**
   * appointments
   * @param appointmentId
   */
  onAppointmentClick(appointmentId: number){
    this.appointment_id=appointmentId;
  }

  //appointment response form
  responseFormControl(){
    this.responseForm=this.fb.group({
      response:['',[Validators.required]],
      status:['',[Validators.required]],
      date:['',[Validators.required]],
    });
  }

  get form(){
    return this.responseForm.controls;
  }

  onSubmit() {
    this.submitting=true;
    let appointment:any={
      official_response: this.form.response.value,
      date:this.form.date.value,
      status:this.form.status.value,
    };
    this.apiService.respondToAppointment(appointment,this.appointment_id)
      .subscribe((res)=>{
        this.toastrService.success('You have successfully responded to this appointment','Success');
        this.submitting=false;
        this.reloadCurrentRoute();
      },error => {
        this.toastrService.error(error.error.message,'Error');
        this.submitting=false;
      })
  }

  /**'
   *
   */
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
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
