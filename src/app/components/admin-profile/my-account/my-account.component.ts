import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {Citizen} from "../../../core/models/citizen";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  user:Citizen;
  constructor(private authService:AuthService) { }
  ngOnInit(): void {
    this.getCurrentUser();
  }

  /**
   * get current user login details
   */
  getCurrentUser(){
    this.user=this.authService.currentUserValue.data;
    console.log(this.user);
  }
}
