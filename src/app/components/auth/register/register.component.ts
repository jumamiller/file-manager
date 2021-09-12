import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../core/services/api.service";
import {Citizen} from "../../../core/models/citizen";
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  citizenRegistrationForm: FormGroup;
  loading=true;
  submitting=false;
  constructor(
    private formBuilder:FormBuilder,
    private apiService:ApiService,
    private toastrService: ToastrService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.citizenFormControls();
  }

  /**
   * citizen registration form input
   */
  citizenFormControls(){
    this.citizenRegistrationForm = this.formBuilder.group({
      fullName:  ['',Validators.required],
      city:   ['',Validators.required],
      phone: ['',Validators.required],
      email: ['',Validators.required],
      role: ['',Validators.required],
      password: ['',Validators.required],
    })
  }

  /**
   * access form control values
   */
  get form(){
    return this.citizenRegistrationForm.controls;
  }

  /**
   * user submits registration info
   */
  onCitizenRegistration(){
    this.submitting=true;
    let user:Citizen={
      first_name:this.form.fullName.value,
      last_name:this.form.fullName.value,
      city:this.form.city.value,
      phone:this.form.phone.value,
      role:'citizen',
      email:this.form.email.value,
      password:this.form.password.value
    }
    this.apiService.createNewAccounts(user)
      .subscribe((res)=>{
        if(res.success){
          this.toastrService.success(res.message,'Success');
          this.router.navigate(['/auth/login']);
          this.loading=false;
          this.submitting=false;
        }
        else{
          this.toastrService.error('Your request to create Kogas account was denied, contact administrator','Account Denied');
          this.loading=false;
          this.submitting=false;
        }
      },error => {
        this.toastrService.error(error.error,error.name);
        this.submitting=false;
      })
  }
}
