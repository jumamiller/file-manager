import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryForm:FormGroup;
  loading=true;
  submitting=false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }


}
