import { Component, OnInit } from '@angular/core';
import {PhotoUploadService} from "../../core/services/photo-upload.service";
import {FileItem} from "../../core/models/file-item";


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  files: FileItem[] = [];
  isOverDrop = false;

  constructor(public photoUploadService: PhotoUploadService) { }

  ngOnInit() {
  }

  upload() {
    this.photoUploadService.uploadImages(this.files);
  }

}
