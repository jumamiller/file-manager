import { Component, OnInit } from '@angular/core';
import {Citizen} from "../../../../core/models/citizen";
import {UserService} from "../../../../core/services/user.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-officials-list',
  templateUrl: './officials-list.component.html',
  styleUrls: ['./officials-list.component.css']
})
export class OfficialsListComponent implements OnInit {

  officials:Citizen[];
  loading=true;
  constructor(private userService:UserService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.officialsList();
  }

  /**
   * government officials lists
   * @constructor
   */
  officialsList(){
    this.userService.registeredKogiOfficialsList()
      .subscribe((res)=>{
        if(res.success)
        {
          this.officials = res.data;
          this.toastrService.success(res.message,'Success');
          this.loading=false;
        }
        else{
          this.toastrService.error(res.message,'Failed');
          this.loading=false;
        }
      },error => {
        this.toastrService.error(error.error.message,'Error');
        this.loading=false;
      })
  }
}
