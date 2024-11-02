
// interfaces/Course.ts
import { IOrderDetails } from "./Orders";
import { IUser } from "./User";
import { IReview } from "./Review";

// Define la interfaz para videos
export interface IVideo {
  id: string;
  title: string;
  description: string;
  url: string; // Cambia `url` a `vimeoId` para trabajar con Vimeo API
  courseId: string;
  duration: string;
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
  orderDetails: IOrderDetails[]; // Aquí mantén el array de detalles de orden
  reviews: IReview[];
  users: IUser[];
}

// Interfaz extendida para el curso que incluye videos
export interface ICourse extends Course {
  videos: IVideo[];
  orderStatus?: string; // Agrega orderStatus aquí si es necesario
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

export interface courseForm {
  title: string;
  description: string;
  image: File | null; // Change this to accept the File type
  price: number | "";
}