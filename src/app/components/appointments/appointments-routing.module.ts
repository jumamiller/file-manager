import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "../../shared/layouts/sidebar/sidebar.component";
import {AppointmentListComponent} from "./appointment-list/appointment-list.component";
import {AddAppointmentsComponent} from "./add-appointments/add-appointments.component";
import {SingleAppointmentComponent} from "./single-appointment/single-appointment.component";
import {EditAppointmentComponent} from "./edit-appointment/edit-appointment.component";
import {AuthGuard} from "../../core/guards/auth.guard";

const routes: Routes = [
  {
    path:'',
    component: SidebarComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'my-appointments',
        component:AppointmentListComponent
      },
      {
        path:'add-appointments',
        component: AddAppointmentsComponent
      },
      {
        path: 'my-appointments/details',
        component: SingleAppointmentComponent
      },
      {
        path:'my-appointments/edit',
        component: EditAppointmentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
