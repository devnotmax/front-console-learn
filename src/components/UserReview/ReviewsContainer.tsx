"use client";
// src/components/UserReview/ReviewsContainer.tsx
import React, { useEffect, useState } from "react";
import ReviewList from "./ReviewList";
import { getReviewTop } from "@/services/reviewService";
import { Review } from "./ReviewList";

const ReviewsContainer: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchReviews = async () => {
        try {
            setLoading(true);
            const data = await getReviewTop();
            setReviews(data); // Guarda las reseñas en el estado
        } catch (error) {
            console.error("Error", error);
        } finally {
            setLoading(false);
        }
    };

    // Función para eliminar la reseña del estado local
    const handleDelete = (id: string) => {
        setReviews((prevReviews) => prevReviews.filter((review) => review.id !== id));
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ReviewList  reviews={reviews} onDelete={handleDelete} />
            )}
        </div>
    );
};

export default ReviewsContainer;
