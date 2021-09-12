import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../core/services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Citizen} from "../../../../core/models/citizen";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-new-official',
  templateUrl: './add-new-official.component.html',
  styleUrls: ['./add-new-official.component.css']
})
export class AddNewOfficialComponent implements OnInit {

  officialForm: FormGroup;
  loading=true;
  submitting=false;

  constructor(
    private authService:AuthService,
    private formBuilder:FormBuilder,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.officialsFormControl();
  }

  /**
   * controls
   */
  officialsFormControl(){
    this.officialForm=this.formBuilder.group({
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
    return this.officialForm.controls;
  }

  /**
   * official details submitted
   */
  onSubmit(){
    this.submitting=true;
    let official:Citizen={
      first_name:this.form.firstName.value,
      last_name: this.form.lastName.value,
      email:this.form.email.value,
      phone:this.form.phone.value,
      city: this.form.city.value,
      gender:this.form.gender.value,
      password:this.form.password.value,
      LGA:this.form.LGA.value,
      user_type:'official'
    }
    this.authService.register(official)
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
