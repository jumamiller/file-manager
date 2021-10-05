import { Component, OnInit } from '@angular/core';
import {PermissionType} from "../../../../core/constants/permission-type";

@Component({
  selector: 'app-single-role-details',
  templateUrl: './single-role-details.component.html',
  styleUrls: ['./single-role-details.component.css']
})
export class SingleRoleDetailsComponent implements OnInit {

  permissionType=PermissionType;
  constructor() { }

  ngOnInit(): void {
  }

}
