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
  isAvailable: boolean;
  orderDetails: IOrderDetails[];
  reviews: IReview[];
  users: IUser[];
  videos: any; //luego va a ser video[]
}

export interface CourseProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  price: number;
  isAvailable: boolean;
}
