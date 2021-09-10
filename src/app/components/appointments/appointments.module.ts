import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AddAppointmentsComponent } from './add-appointments/add-appointments.component';
import { SingleAppointmentComponent } from './single-appointment/single-appointment.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import {MaterialModule} from "../../material-module";


@NgModule({
  declarations: [
    AppointmentListComponent,
    AddAppointmentsComponent,
    SingleAppointmentComponent,
    EditAppointmentComponent,
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    MaterialModule
  ]
})
export class AppointmentsModule { }
