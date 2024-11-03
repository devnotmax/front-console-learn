"use client";
// src/components/ReviewCourse.tsx

import React, { useEffect, useState } from "react";
import { getReviewById } from "@/services/reviewService";
import { Review } from "./ReviewList";
import CardReview from "./CardReview";

interface ReviewCourseProps {
    courseId: string;
}

const ReviewCourse: React.FC<ReviewCourseProps> = ({ courseId }) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCourseReviews = async () => {
        try {
            setLoading(true);
            const data = await getReviewById(courseId);
            setReviews(data);
        } catch (error) {
            console.error("Error fetching course reviews:", error);
            setError("No se pudieron cargar las reseñas.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourseReviews();
    }, [courseId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {reviews.length > 0 ? (
                reviews.map((review) => (
                    <CardReview key={review.id} review={review} onDelete={() => fetchCourseReviews()} />
                ))
            ) : (
                <p>no reviews found </p>
            )}
        </div>
    );
};

export default ReviewCourse;