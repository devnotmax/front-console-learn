
// components/ReviewList.tsx
import React from "react";
import CardReview from "./CardReview";

export interface Course {
    id: string;
    title: string;
}

export interface User {
    id: string;
    name: string;
}

export interface Review {
    id: string;
    content: string;
    rating: number;
    courseId: string;
    userId: string;
    course: Course;
    user: User;
}

interface ReviewListProps {
    reviews: Review[];
    onDelete: (id: string) => void; // Nueva prop para manejar la eliminación
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews, onDelete }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {reviews.map((review) => (
                <CardReview key={review.id} review={review} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default ReviewList;

