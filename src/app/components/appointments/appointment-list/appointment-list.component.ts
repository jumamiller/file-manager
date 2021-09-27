import { Component, OnInit } from '@angular/core';
import {Appointment} from "../../../core/models/appointment";
import {ApiService} from "../../../core/services/api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {PermissionType} from "../../../core/constants/permission-type";

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
  responseForm:FormGroup;
  appointment_id:number;

  constructor(
    private apiService:ApiService,
    private fb:FormBuilder,
    private router:Router,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getAllAppointments();
    this.responseFormControl();
  }

  /**
   * listing all appointments
   */
  getAllAppointments(){
    this.apiService.getAllAppointments()
      .subscribe((res)=>{
        this.appointments=res['data'];
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
      date:['',[Validators.required]],
    });
  }

  get form(){
    return this.responseForm.controls;
  }

  onSubmit() {
    this.submitting=true;
    let appointment:any={
      response: this.form.response.value,
      date:this.form.date.value,
      appointment_id:this.appointment_id
    };
    this.apiService.respondToAppointment(appointment)
      .subscribe((res)=>{
        this.toastrService.success('You have successfully responded to this appointment','Success');
        this.submitting=false;
        this.reloadCurrentRoute();
      },error => {
        this.toastrService.error(error.error.message,'Error');
        this.submitting=false;
      })
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
