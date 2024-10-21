import { ICourse } from "./Course";
import { IOrder } from "./Orders";
import { IReview } from "./Review";

export interface loginForm {
  email: string;
  password: string;
}

export interface ErrloginForm {
  email?: string;
  password?: string;
}

export interface registerForm extends loginForm {
  name: string;
  phone: string;
}

export interface ErrregisterForm {
  email?: string;
  password?: string;
  name?: string;
  phone?: string;
}

export interface IuserSession {
  login: boolean;
  user: registerForm;
  token: string;
}
