import { Component, OnInit } from '@angular/core';
import {PermissionType} from "../../../../core/constants/permission-type";

@Component({
  selector: 'app-edit-roles',
  templateUrl: './edit-roles.component.html',
  styleUrls: ['./edit-roles.component.css']
})
export class EditRolesComponent implements OnInit {

  permissionType=PermissionType;
  constructor() { }

  ngOnInit(): void {
  }

}
