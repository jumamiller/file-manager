import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../core/services/auth.service";
import {ToastrService} from "ngx-toastr";
import {Citizen} from "../../../../core/models/citizen";

@Component({
  selector: 'app-add-new-citizens',
  templateUrl: './add-new-citizens.component.html',
  styleUrls: ['./add-new-citizens.component.css']
})
export class AddNewCitizensComponent implements OnInit {

  citizensForm:FormGroup;
  submitting=false;
  loading=true;

  constructor(
    private authService:AuthService,
    private formBuilder:FormBuilder,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.citizensFormControl();
  }

  /**
   * controls
   */
  citizensFormControl(){
    this.citizensForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      phone:['',Validators.required],
      email:['',Validators.required],
      city:['',Validators.required],
      gender:['',Validators.required],
      LGA:['',Validators.required],
      password:['',Validators.required],
    })
  }

  /**
   * get controls values
   */
  get form(){
    return this.citizensForm.controls;
  }
  /**
   * official details submitted
   */
  onSubmit(){
    this.submitting=true;
    let citizen:Citizen={
      first_name:this.form.firstName.value,
      last_name: this.form.lastName.value,
      email:this.form.email.value,
      phone:this.form.phone.value,
      city: this.form.city.value,
      gender:this.form.gender.value,
      password:this.form.password.value,
      LGA:this.form.LGA.value,
      user_type:'citizen'
    }
    this.authService.register(citizen)
      .subscribe((res)=>{
        if(res.success)
        {
          this.toastrService.success(res.message,'Success');
          this.submitting=false;
        }
        if(!res.success){
          this.toastrService.error(res.errors,'Failed');
          this.submitting=false;
        }
      },error => {
        this.toastrService.error(error.error.errors,'Error');
        this.submitting=false;
      })
  }
}
