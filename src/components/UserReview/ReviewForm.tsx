"use client";
// src/components/UserReview/ReviewForm.tsx
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { createReview, getReviewById, ReviewData } from "@/services/reviewService";
import { useAuth } from "@/contexts/authContext";
import { Reviews } from "@/services/reviewService";

interface ReviewFormProps {
    courseId: string;
    onReviewSubmitted: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ courseId, onReviewSubmitted }) => {
    const { dataUser } = useAuth(); // Obtener el usuario actual
    const [content, setContent] = useState("");
    const [rating, setRating] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [hasUserReview, setHasUserReview] = useState(false);

    useEffect(() => {
        const checkUserReview = async () => {
            try {
                // Obtener todas las reseñas del curso
                const reviews = await getReviewById(courseId);
                
                // Verificar si el usuario ya tiene una reseña en este curso
                const userReviewExists = reviews.some((review: Reviews) => review.userId === dataUser?.user.id);
                setHasUserReview(userReviewExists);
            } catch (error) {
                console.error("Error al obtener las reseñas:", error);
            }
        };

        checkUserReview();
    }, [courseId, dataUser]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Verificar si ya existe una reseña del usuario
        if (hasUserReview) {
            Swal.fire("Error", "You have already submitted a review for this course.", "error");
            return;
        }

        // Validación de campos
        if (!rating || !content) {
            setError("Please complete all fields and select a rating.");
            return;
        }

        try {
            const reviewData: ReviewData = { content, rating };
            await createReview(courseId, reviewData);
            setContent("");
            setRating(null);
            onReviewSubmitted(); // Actualiza la lista de reseñas

            // Actualizar el estado para que el usuario no pueda crear otra reseña
            setHasUserReview(true);
            Swal.fire( "Success", "Review submitted successfully." , "success");
        } catch (error) {
            console.error("Error creating review:", error);
            setError("There was a problem submitting your review. Please try again.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500">{error}</p>}
        
        {hasUserReview ? (
            <p className="text-red-500">You have already submitted a review and cannot add another.</p>
        ) : (
            <>
                <textarea
                    placeholder="Write your review here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    rows={4}
                />
                <div className="flex items-center space-x-2">
                    <label>Qualification:</label>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            type="button"
                            key={star}
                            onClick={() => setRating(star)}
                            className={`text-2xl ${star <= (rating || 0) ? "text-yellow-500" : "text-gray-300"}`}
                        >
                            ★
                        </button>
                    ))}
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Submit review
                </button>
            </>
        )}
    </form>
    </div>
    );
};

export default ReviewForm;
