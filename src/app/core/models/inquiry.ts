import {Citizen} from "./citizen";

export interface Inquiry {
  id?:number;
  success?:boolean;
  data?:Inquiry;
  user_id?:number;
  official_id?:number;
  office?:string;
  user?:Citizen;
  official?:Citizen;
  inquiry_type?:string;
  message?:string;
  description?:string;
  response?:string;
  attachment?:string;
  attachment_url?:string;
  status?:string;
  created_at?:string;
  updated_at?:string;
}
