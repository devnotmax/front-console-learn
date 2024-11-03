// components/CardReview.tsx
import React from "react";
import { Review } from "./ReviewList";
import { useAuth } from "@/contexts/authContext";
import { deleteReview } from "@/services/reviewService";

interface CardReviewProps {
    review: Review;
    onDelete: (id: string) => void; // Nueva prop para manejar la eliminación en el componente padre
}

const CardReview: React.FC<CardReviewProps> = ({ review, onDelete }) => {
    const { dataUser } = useAuth();

    const handleDelete = async (id: string) => {
        try {
            await deleteReview(id);
            console.log("Review deleted successfully");
            onDelete(id); // Llama a la función para actualizar la lista en el componente padre
        } catch (error) {
            console.error("Error deleting review:", error);
        }
    };

    return (
        <div className="p-4 bg-gray-100 rounded-xl border-gray-300 border shadow-md flex flex-col space-y-4">
            <div className="flex justify-between items-center">
                <img
                    src={dataUser?.user.image}
                    alt="Profile Picture"
                    className="w-12 h-12 rounded-full object-cover"
                />
                <h3 className="text-lg font-semibold">{review.user.name}</h3>
                <div className="flex">{review.rating} ⭐ </div>
            </div>
            <p className="text-gray-700">{review.content}</p>
            <p className="text-sm text-gray-500">Course: {review.course.title}</p>
            
            {/* Condicional para mostrar el botón de eliminar si es ADMIN o el creador de la reseña */}
            {dataUser?.user.role === "ADMIN" || dataUser?.user.id === review.userId ?  (
                <button 
                    className="secondary-btn py-1 px-2" 
                    onClick={() => handleDelete(review.id)}
                >
                    Delete
                </button>
            ) : null}
        </div>
    );
};

export default CardReview;
