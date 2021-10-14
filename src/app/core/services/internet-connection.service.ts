import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class InternetConnectionService {

  constructor(private toastrService:ToastrService,) { }

  checkStatus(){
    const conn = (navigator as any).connection;
    if (conn) {
      if (conn.saveData) {
        this.toastrService.error('You have low internet connection, disable data saving mode.');
      }
      const connectionlist = ["slow-2g", "2g", "3g", "4g"];
      const effectiveType = conn.effectiveType;
      let online = navigator.onLine;
      if(online){
        //
      }
      else{
        this.toastrService.error('You may be offline, kindly check your internet connection and try again to access our services',effectiveType);
      }
    }
  }
}
