import {Component, OnInit} from '@angular/core';
import {InternetConnectionService} from "./core/services/internet-connection.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(

    private internetConnection:InternetConnectionService) {
  }

  ngOnInit(): void {
    this.internetConnection.checkStatus();
  }

}
