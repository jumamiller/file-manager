import { Component, OnInit } from '@angular/core';
import {PermissionType} from "../../../core/constants/permission-type";

@Component({
  selector: 'app-my-queries',
  templateUrl: './my-queries.component.html',
  styleUrls: ['./my-queries.component.css']
})
export class MyQueriesComponent implements OnInit {

  permissionType=PermissionType;
  constructor() { }

  ngOnInit(): void {
  }

}
