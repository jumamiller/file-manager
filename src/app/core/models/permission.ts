export interface Permission {
  id?:any;
  name:string,
  display_name:string;
  description:string;
  success?:boolean;
  message?:string;
  meta?:string[];
  data?:any[];
  checked?:boolean;
}
