import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ApiService} from "../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  citizenLoginForm: FormGroup;
  submitting=false;
  loading=true;
  constructor(
    private formBuilder: FormBuilder,
    private apiService:ApiService,
    private toastrService:ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.citizenFormControls();
  }
  /**
   * citizen registration form input
   */
  citizenFormControls(){
    this.citizenLoginForm = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
    })
  }

  /**
   * access form control values
   */
  get form(){
    return this.citizenLoginForm.controls;
  }

  onCitizenLogin(){
    this.submitting=true;
    let user={
      email:this.form.email.value,
      password:this.form.password.value,
    }
    this.apiService.loginCitizens(user)
      .subscribe((res)=>{
        if(res.success){
          this.toastrService.success(res.message,'Success');
          localStorage.setItem('kogasCurrentUser',JSON.stringify(res.data));
          this.router.navigate(['/profile/account-settings']);
          this.loading=false;
          this.submitting=false;
        }
        else{
          this.toastrService.error('Your request to access to your Kogas account was denied due to invalid credentials!','Account Denied');
          this.loading=false;
          this.submitting=false;
        }
      },error => {
        this.toastrService.error(error.error,error.name);
        this.submitting=false;
      })
  }
}
