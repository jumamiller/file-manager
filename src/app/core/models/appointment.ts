import {Citizen} from "./citizen";
import {Category} from "./category";
import {Bureau} from "./bureau";
import {LocalGovernment} from "./local-government";
import {Ministry} from "./ministry";

export interface Appointment {
  success: true,
  message: string;
  data: Appointment;
  id: number;
  user_id: number;
  category_id: number;
  sub_category_id: number;
  ministry_id: number;
  bureau_id: number;
  local_government_id: number;
  appointment_reason: string;
  official_response: string;
  date: string;
  referral: string;
  identification_document: string;
  attachment: string;
  status:string
  created_at: string;
  updated_at: string;
  user: Citizen,
  category: Category;
  sub_category: Category;
  bureau: Bureau;
  local_government: LocalGovernment;
  ministry: Ministry;
  errors: any[];
  meta: string;
}
