import { Component, OnInit } from '@angular/core';
import {Permission} from "../../../../core/models/permission";
import {ApiService} from "../../../../core/services/api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Role} from "../../../../core/models/role";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {PermissionType} from "../../../../core/constants/permission-type";

@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.css']
})
export class AddRolesComponent implements OnInit {

  permissions:Permission[];
  permissionType=PermissionType;
  loading=true;

  roleForm: FormGroup;
  selectedPermissions: any[] = [];

  constructor(
    private apiService:ApiService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.roleFormControls();
    this.getAllPermissions();
  }

  /**
   * form controls
   */
  roleFormControls(){
    this.roleForm=this.formBuilder.group({
      roleName:['',Validators.required],
      roleDescription:['',Validators.required],
    })
  }

  /**
   * list of permissions
   */
  getAllPermissions(){
    this.apiService.getAllPermissions()
      .subscribe((res)=>{
        if(res.success){
          this.permissions=res.data;
          this.loading=false;
        }
      },error => {
        console.log(error);
      })
  }
  get form()
  {
    return this.roleForm.controls;
  }

  /**
   * create role
   */
  onNewRoleSubmit()
  {
    const roleName = this.form.roleName.value;
    const roleDescription = this.form.roleDescription.value;

    let role: Role = {
      name: roleName,
      display_name: roleName,
      description: roleDescription,
    }
    this.apiService.addNewRole(role)
      .subscribe((res) => {
        if(res.success)
        {
          /**
           * add permission to res.data.id (role id created)
           */
          console.log(res.data['id']);
          this.apiService.addPermissionToRole(this.selectedPermissions,res.data['id'])
            .subscribe((res)=>{
              this.toastrService.success(res.message, 'Success');
            })
        }
        else
        {
          this.toastrService.warning(res.message, "Failed");
        }
      }, err => {
        this.toastrService.error(err.error.message, "Error");
      });
  }

  /**
   * @param event
   */
  onPermissionCheckBoxChange(event: MatCheckboxChange)
  {
    if(event.checked){
      this.selectedPermissions.push(event.source.id);
    }
    else{
      const index = this.selectedPermissions.indexOf(event.source.id);
      if (index > -1) {
        this.selectedPermissions.splice(index, 1);
      }
    }
  }
}
