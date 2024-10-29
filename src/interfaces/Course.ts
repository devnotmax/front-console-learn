import { IOrderDetails } from "./Orders";
import { IUser } from "./User";
import { IReview } from "./Review";

// Asegúrate de que ICourse tenga todas las propiedades de Course
export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  price: number;
  isAvailable: boolean;
  available: boolean; // Asegúrate de incluir esto
  rating: number; // Asegúrate de incluir esto
  orderDetails: IOrderDetails[];
  reviews: IReview[];
  users: IUser[];
}

export interface ICourse extends CourseProps {
  available: boolean; // Asegúrate de incluir esta propiedad también
  rating: number; // Asegúrate de incluir esta propiedad también
  // Resto de propiedades...
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
