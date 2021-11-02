import {Citizen} from "./citizen";

export interface Suggestion {
  id?:number;
  data?:Suggestion[];
  user?:Citizen;
  response?:string;
  message?:string;
  attachment?:string;
  attachment_url?:string;
  created_at?:string;
}
