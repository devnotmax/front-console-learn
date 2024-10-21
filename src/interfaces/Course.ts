import Review from "./review";
export interface Course {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  technologies: string[];
  price: number;
  available: boolean;
  reviews: { rating: number }[];
}

export default Course;