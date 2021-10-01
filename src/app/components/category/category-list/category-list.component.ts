import { Component, OnInit } from '@angular/core';
import {Category} from "../../../core/models/category";
import {ApiService} from "../../../core/services/api.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ConfirmationAlertService} from "../../../core/helpers/confirmation-alert.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories:Category[];
  editCategoryForm:FormGroup;
  selectedCategory:Category;
  loading=true;
  constructor(
    private apiService:ApiService,
    private fb:FormBuilder,
    private comfirmationAlert:ConfirmationAlertService
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.editFormControls();
  }

  /**
   * categories
   */
  getCategories(){
    this.apiService.getCategories()
      .subscribe((res)=>{
        this.categories=res.data;
        this.loading=false;
      },error => {
        console.log(error);
      })
  }

  /**
   * edit form controls
   */
  editFormControls(){
    this.editCategoryForm=this.fb.group({
      category_name:[''],
      category_description:[''],
    });
  }
  get form(){
    return this.editCategoryForm.controls;
  }

  /**
   * Remove category
   * @param cat_id
   */
  removeCategory(cat_id:number){
    this.comfirmationAlert.sweetAlert(
      'Are you sure?',
      'Deleting a category is an irreversible process and will affect the associated official Kogas',
      '',
      '',
      'question',
      true,
      'Yes, Delete Category!',
      'No, Cancel',
      '',
      this.apiService.removeCategory(cat_id)
    );
  }

  /**
   * category details
   * @param category
   */
  onCategoryClick(category:Category){
    this.selectedCategory=category;
  }

  /**
   * on edit
   */
  onCategoryEdit(){
    let category:Category={
      category_name:this.form.category_name.value,
      category_description:this.form.category_description.value,
    };
    this.comfirmationAlert.sweetAlert(
      'Are you sure?',
      'Editing a category will reflect on the associated officials',
      '',
      '',
      'question',
      true,
      'Yes, Update Category!',
      'No, Cancel',
      '',
      this.apiService.updateCategories(category,this.selectedCategory.id)
    );
  }

}
