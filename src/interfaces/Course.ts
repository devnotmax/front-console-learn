// interfaces/Course.ts

import { IOrderDetails } from "./Orders";
import { IUser } from "./User";
import { IReview } from "./Review";

// Define la interfaz para videos
export interface IVideo {
  id: string;
  title: string;
  description: string;
  vimeoId: string; // Cambia `url` a `vimeoId` para trabajar con Vimeo API
  courseId: string;
}

// Define la interfaz base para un curso
export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  price: number;
  isAvailable: boolean; // Estado de disponibilidad del curso
  available: boolean; // Estado de disponibilidad del curso
  rating: number; // Rating del curso
  orderDetails: IOrderDetails[];
  reviews: IReview[];
  users: IUser[];
}

// Interfaz extendida para el curso que incluye videos
export interface ICourse extends Course {
  videos: IVideo[];
}

// Asegúrate de que CourseProps tenga solo las propiedades compartidas
export interface CourseProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  price: number;
  isAvailable: boolean;
}
