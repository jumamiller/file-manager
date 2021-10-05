import { Component, OnInit } from '@angular/core';
import {Role} from "../../../../core/models/role";
import {ApiService} from "../../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {Route, Router} from "@angular/router";
import {ConfirmationAlertService} from "../../../../core/helpers/confirmation-alert.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {PermissionType} from "../../../../core/constants/permission-type";

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  roles:Role[];
  loading=true;
  selectedRole:Role;

  editRoleForm:FormGroup;

  permissionType=PermissionType;

  constructor(
    private apiService:ApiService,
    private fb:FormBuilder,
    private confirmationAlert:ConfirmationAlertService,
    private toastrService:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.getAllRoles();
    this.editRolesControl();
  }

  editRolesControl(){
    this.editRoleForm=this.fb.group({
      name:[''],
      display_name:[''],
      description:[''],
    })
  }

  /**
   * list roles
   */
  getAllRoles(){
    this.apiService.getAllRoles()
      .subscribe((res)=>{
        this.roles=res['data'];
        this.loading=false;
      })
  }

  /**
   * remove role
   */
  removeRole(role_id:number){
    this.confirmationAlert.sweetAlert(
      'Are you sure?',
      'Deleting role is an irreversible process and you confirm that this also affects officials linked to it.',
      '',
      '',
      'question',
      true,
      'Yes, Delete Role!',
      'No, Cancel',
      '',
      this.apiService.removeRole(role_id)
    );
  }

  /**
   * on role click
   */
  onRoleClick(role){
    this.selectedRole=role;
  }

  get form(){
    return this.editRoleForm.controls;
  }
  /**
   * update role
   */
  onRoleUpdate(){
    let role:Role={
      description: this.form.description.value,
      display_name: this.form.display_name.value,
      name: this.form.name.value
    }

    this.confirmationAlert.sweetAlert(
      'Are you sure?',
      `By editing ${this.selectedRole.display_name}, you approve that the affected officials role details will be updated!`,
      '',
      '',
      'question',
      true,
      'Yes, Update Role!',
      'No, Cancel',
      '',
      this.apiService.updateRole(role,this.selectedRole.id)
    );
  }
}
