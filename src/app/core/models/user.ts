import {Citizen} from "./citizen";

export interface User {

  success: boolean;
  data: Citizen;
  message: string;
  errors: string;
  meta: string[];
}
