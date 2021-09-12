import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../core/services/user.service";
import {ToastrService} from "ngx-toastr";
import {Citizen} from "../../../../core/models/citizen";

@Component({
  selector: 'app-citizens-list',
  templateUrl: './citizens-list.component.html',
  styleUrls: ['./citizens-list.component.css']
})
export class CitizensListComponent implements OnInit {


  citizens: Citizen[];
  loading=true;

  tableSize = 10;
  page = 1;
  count = 0;
  tableSizes = [2, 4, 10, 20];

  constructor(private userService:UserService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.listOfCitizens();
  }

  /**
   * list of citizens
   */
  listOfCitizens(){
    this.userService.registeredKogiCitizensList()
      .subscribe((res)=>{
        if(res.success)
        {
          this.citizens = res.data;
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

  onTableDataChange(event) {
    this.page = event;
    this.listOfCitizens();
  }

  pageChanged($event: number) {
    this.tableSize = event.target["value"];
    this.page = 1;
    this.listOfCitizens();
  }
}
