import { Component, OnInit } from '@angular/core';
import {PermissionType} from "../../../core/constants/permission-type";

@Component({
  selector: 'app-single-appointment',
  templateUrl: './single-appointment.component.html',
  styleUrls: ['./single-appointment.component.css']
})
export class SingleAppointmentComponent implements OnInit {

  permissionType=PermissionType;
  constructor() { }

  ngOnInit(): void {
  }

}
