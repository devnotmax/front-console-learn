import { IOrderDetails } from "./Orders";
import { IUser } from "./User";
import { IReview } from "./Review";
export interface ICourse {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  price: number;
  available: boolean;
  isAvailable: boolean;
  orderDetails: IOrderDetails[];
  reviews: IReview[];
  users: IUser[];
  videos: any; //luego va a ser video[]
}
