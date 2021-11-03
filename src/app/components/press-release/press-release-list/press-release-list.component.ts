import { Component, OnInit } from '@angular/core';
import {News} from "../../../core/models/news";
import {PermissionType} from "../../../core/constants/permission-type";
import {environment} from "../../../../environments/environment";
import {ApiService} from "../../../core/services/api.service";
import {ConfirmationAlertService} from "../../../core/helpers/confirmation-alert.service";
import {Router} from "@angular/router";
import {PressRelease} from "../../../core/models/press-release";

@Component({
  selector: 'app-press-release-list',
  templateUrl: './press-release-list.component.html',
  styleUrls: ['./press-release-list.component.css']
})
export class PressReleaseListComponent implements OnInit {

  page = 1;
  count = 0;
  tableSize = 8;

  pressReleases:PressRelease[];
  permissionType=PermissionType;
  loading=true;
  imageURL=environment.ASSETS_URL;

  constructor(private apiService:ApiService,
              private confirmationAlert:ConfirmationAlertService,
              private router:Router) { }

  ngOnInit(): void {
    this.getPressReleases();
  }

  /**
   * add news
   */
  getPressReleases(){
    this.apiService.getAllPressReleases()
      .subscribe((res)=>{
        // @ts-ignore
        this.pressReleases=res.data;
        this.loading=false;
      })
  }
  /**
   * remove pres release
   * @param pressReleasesId
   */
  remove(pressReleasesId: number)
  {
    this.confirmationAlert.sweetAlert(
      'Are you sure?',
      'Deleting press release is an irreversible process and will cease to show on the main Kogas home page',
      '',
      '',
      'question',
      true,
      'Yes, Delete Press Release!',
      'No, Cancel',
      '',
      this.apiService.removePressRelease(pressReleasesId)
    );
  }

  /**
   *
   * @param event
   */
  onTableDataChange(event)
  {
    this.page = event;
    this.getPressReleases();
  }

  /**
   * redirect
   * @param id
   */
  redirectToEdit(id: number) {
    this.router.navigate(['/admin/press-release/list/edit'],{queryParams:{id}})
  }
  /**
   * redirect
   * @param id
   */
  redirectToDetailsPage(id: number) {
    this.router.navigate(['/admin/press-release/list/details'],{queryParams:{id}})
  }
}
