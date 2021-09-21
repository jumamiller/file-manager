import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../core/services/api.service";
import {ToastrService} from "ngx-toastr";
import {LocalGovernment} from "../../../core/models/local-government";

@Component({
  selector: 'app-add-local-governments',
  templateUrl: './add-local-governments.component.html',
  styleUrls: ['./add-local-governments.component.css']
})
export class AddLocalGovernmentsComponent implements OnInit {

  LGAForm:FormGroup;
  submitting=false;
  constructor(
    private fb:FormBuilder,
    private apiService:ApiService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.LGAForm=this.fb.group({
      name:['',[Validators.required]],
      area:['',[Validators.required]],
      population:['',[Validators.required]],
      state:['',[Validators.required]],
      country:['',[Validators.required]],
      history:['',[Validators.required]],
      chairman:['',Validators.required],
      chairman_message:['',Validators.required],
    });
  }

  get form(){
    return this.LGAForm.controls;
  }

  onSubmit() {
    this.submitting=true;
    let LGA:LocalGovernment={
      area: this.form.area.value,
      chairman: this.form.chairman.value,
      chairman_message: this.form.chairman_message.value,
      country: this.form.country.value,
      history: this.form.history.value,
      name: this.form.name.value,
      population: this.form.population.value,
      state: this.form.state.value,
    };

    this.apiService.addLocalGovernments(LGA)
      .subscribe((res)=>{
        if(res.success){
          this.toastrService.success(res.message,'Success');
          this.submitting=false;
        }
        else{
          this.toastrService.warning(res.message,'Failed');
          this.submitting=false;
        }
      },error => {
        this.toastrService.error(error.error.message,'Error');
        this.submitting=false;
      })
  }
}
