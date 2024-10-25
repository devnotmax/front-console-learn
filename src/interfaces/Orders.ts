import { ICourse } from "./Course";
import { IUser } from "./User";
export interface IOrder {
  id: string;
  user: IUser;
  userId: string;
  details: IOrderDetails;
  detailsId: string;
  createdAt: Date;
}

export interface IOrderDetails {
  id: string;
  order: IOrder;
  orderId: string;
  course: ICourse;
  courseId: string;
  quantity: number;
  price: number;
}
