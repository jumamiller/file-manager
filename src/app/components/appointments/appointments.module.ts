import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AddAppointmentsComponent } from './add-appointments/add-appointments.component';
import { SingleAppointmentComponent } from './single-appointment/single-appointment.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import {MaterialModule} from "../../material-module";
import {SharedModule} from "../../shared/shared.module";


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
        MaterialModule,
        SharedModule
    ]
})
export class AppointmentsModule { }
