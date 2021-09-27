import { Component, OnInit } from '@angular/core';
import {PermissionType} from "../../../../core/constants/permission-type";

@Component({
  selector: 'app-edit-citizen',
  templateUrl: './edit-citizen.component.html',
  styleUrls: ['./edit-citizen.component.css']
})
export class EditCitizenComponent implements OnInit {

  permissions=PermissionType;
  constructor() { }

  ngOnInit(): void {
  }

}
