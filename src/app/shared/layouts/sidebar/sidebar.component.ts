import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {delay} from "rxjs/operators";
import {environment} from "../../../../environments/environment";
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";
import {Citizen} from "../../../core/models/citizen";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  user:Citizen;

  homeURL:string=environment.HomeURL;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  constructor(private observer: BreakpointObserver,
              private authService:AuthService,
              private router:Router,
             ) {
    this.getCurrentUser();
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 1200px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  /**
   * user sign out
   */
  signOut(){
    this.authService.logout();
    this.router.navigate(['/admin/auth/login']);
  }

  /**
   * get current user login details
   */
  getCurrentUser(){
    this.user=this.authService.currentUserValue.data;
  }
}
