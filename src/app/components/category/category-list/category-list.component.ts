import { Component, OnInit } from '@angular/core';
import {Category} from "../../../core/models/category";
import {ApiService} from "../../../core/services/api.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ConfirmationAlertService} from "../../../core/helpers/confirmation-alert.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories:Category[];
  editCategoryForm:FormGroup;
  addNewCategoryForm:FormGroup;
  submitting=false;
  selectedCategory:Category;
  loading=true;
  constructor(
    private apiService:ApiService,
    private fb:FormBuilder,
    private toastrService:ToastrService,
    private router:Router,
    private confirmationAlert:ConfirmationAlertService
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.editFormControls();
    this.addNewCategoryControls();
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
        this.toastrService.error(error.error.message,'Error');
      })
  }

  /**
   * add new category form
   */
  addNewCategoryControls(){
    this.addNewCategoryForm=this.fb.group({
      category_name:[''],
      category_description:[''],
    });
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

  /**
   * edit form controls
   */
  get form(){
    return this.editCategoryForm.controls;
  }

  /**
   * add new category controls
   */
  get catForm(){
    return this.addNewCategoryForm.controls;
  }

  /**
   * Remove category
   * @param cat_id
   */
  removeCategory(cat_id:number){
    this.confirmationAlert.sweetAlert(
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
   * creating new category
   */
  onCategoryCreation(){
    this.submitting=true;
    let category:Category={
      category_name:this.catForm.category_name.value,
      category_description:this.catForm.category_description.value,
    };
    this.apiService.createCategory(category)
      .subscribe((res)=>{
        this.toastrService.success(res.message,'Success');
        this.submitting=false;
        this.reloadCurrentRoute();
      },error => {
        this.toastrService.error(error.error.message,'Error');
        this.submitting=false;
      })
  }

  /**
   * on edit
   */
  onCategoryEdit(){
    let category:Category={
      category_name:this.form.category_name.value,
      category_description:this.form.category_description.value,
    };
    this.confirmationAlert.sweetAlert(
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
  /**
   * reload
   */
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}