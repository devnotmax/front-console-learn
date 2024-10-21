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
  image: string;
  confirmPassword: string;
  termsAccepted: boolean;
  courses?: ICourse[];
  orders?: IOrder[];
  reviews?: IReview[];
}

export interface IuserSession {
  login: boolean;
  user: registerForm;
  token: string;
}
