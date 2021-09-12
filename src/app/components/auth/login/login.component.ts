import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../core/services/auth.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  citizenLoginForm: FormGroup;
  submitting=false;
  loading=true;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private apiService:ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService:ToastrService,
    private authService:AuthService
  ) {
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/amin/profile/account-settings']);
    }
  }

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
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin/profile/account-settings';
  }

  /**
   * access form control values
   */
  get form(){
    return this.citizenLoginForm.controls;
  }

  /**
   * on user login form submission
   */
  onCitizenLogin(){
    this.submitting=true;
    let user={
      email:this.form.email.value,
      password:this.form.password.value,
    }

    //api request
    this.authService.login(user.email,user.password)
      .pipe(first())
      .subscribe(
        res => {
          if(res.success){
            console.log(res);
            this.router.navigate([this.returnUrl]);
            this.loading=false;
          }
          else{
            this.toastrService.error(res.message,'ALERT');
            this.submitting=false;
          }
        },
        err => {
          this.toastrService.error(`${err.error.message} | your account may not exist, contact system administrator if error persists`,'ERROR');
          this.submitting=false;
        });
  }
}
