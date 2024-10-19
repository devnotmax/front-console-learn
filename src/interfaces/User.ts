import { ICourse } from "./Course";
import { IOrder } from "./Orders";
import { IReview } from "./Review";

enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface IUser {
  id: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  image: string;
  role: Role;
  courses: ICourse[];
  orders: IOrder[];
  reviews: IReview[];
}
