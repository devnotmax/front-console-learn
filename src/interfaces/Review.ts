import { ICourse } from "./Course";
import { IUser } from "./User";
export interface IReview {
  id: string;
  content: ICourse;
  course: string;
  rating: number;
  courseId: string;
  user: IUser;
  userId: string;
}
