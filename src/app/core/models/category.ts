export interface Category {

  id?:number;
  category_name?:string;
  category_description?:string;
  sub_categories?:any;
  sub_category_name?:string;
  sub_category_description?:string;
  category_id?:number;
  sub_category_id?:number;
  data?:any;
  success?:boolean;
  message?:string;
}
