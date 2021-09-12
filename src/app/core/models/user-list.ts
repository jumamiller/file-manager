import {Citizen} from "./citizen";

export interface UserList {
  success: boolean;
  data: Citizen[];
  message: string;
  errors: string;
  meta: string[];
  token: string;
}
