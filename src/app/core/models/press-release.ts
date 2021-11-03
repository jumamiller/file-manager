import {Ministry} from "./ministry";
import {Citizen} from "./citizen";

export interface PressRelease {
  id?:number;
  success?:boolean;
  message?:string;
  data?:PressRelease;
  title?:string;
  description?:string;
  ministry_id?:number;
  attachment?:string;
  ministry?:Ministry;
  user?:Citizen;
  created_at?:string;

}
