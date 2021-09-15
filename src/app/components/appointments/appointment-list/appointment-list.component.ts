import { Component, OnInit } from '@angular/core';
import {Appointment} from "../../../core/models/appointment";
import {ApiService} from "../../../core/services/api.service";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointments:Appointment[];
  loading=true;
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getAllAppointments();
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
        console.log(error);
      })
  }


}
