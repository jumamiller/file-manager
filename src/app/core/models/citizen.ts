export interface Citizen {
  city:string;
  ministry_id?:string;
  category_id?:string;
  sub_category_id?:string;
  phone:string;
  role?:string;
  email:string;
  password:string;
  updated_at?: string;
  avatar?:any;
  created_at?: string;
  id?: number;
  first_name:string;
  last_name:string;
  gender?:string;
  state?:string;
  age?:string;
  LGA?:string;
  sector?:string,
  user_type?:string;
  user_phone_code?:number;
  user_login_attempts?:number;
  password_reset_code?:number;
  password_reset_code_expiry?:number;
  password_reset_count?:number;
  last_password_change?:string;
  user_is_suspended?:boolean;
  update_password?:boolean;
  user_added_by?:string;
  user_updated_by?:string;
  user_activated_date?:string;
  user_suspended_date?:string;
  user_suspended_by?:string;
  user_activated_by?:string;
  is_avatar_set?:string;
  extension?:string;
}
