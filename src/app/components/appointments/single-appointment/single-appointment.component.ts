import { Component, OnInit } from '@angular/core';
import {PermissionType} from "../../../core/constants/permission-type";
import {Appointment} from "../../../core/models/appointment";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";

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
    private activatedRoute:ActivatedRoute
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
        console.log(this.appointment)
        this.loading=false;
      },error => {
        this.toastrService.error(error.error.message,'Error');
      })
  }

}
