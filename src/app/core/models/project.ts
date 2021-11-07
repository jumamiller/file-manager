import {Ministry} from "./ministry";
import {ProjectImage} from "./project-image";
import {Bureau} from "./bureau";

export interface Project {
  id?:any;
  data?:any;
  success?:boolean;
  message?:string;
  name?:string,
  description?:string,
  category?:string,
  image_path?:string,
  client?:string,
  type?:string,
  project_image?:string,
  budget?:number,
  other_project_images?:any,
  ministry?:Ministry;
  bureau?:Bureau;
  contractor?:string,
  contractor_contacts?:string,
  facilitator_name?:string,
  facilitator_contacts?:string,
  project_images?:ProjectImage[],
  total_duration?:string,
  start_date?:string,
  end_date?:string,
  status?:string;
}
