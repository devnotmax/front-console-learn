// components/CardReview.tsx
import React from "react";
import { Review } from "./ReviewList";
import { useAuth } from "@/contexts/authContext";
import { deleteReview } from "@/services/reviewService";
import Swal from "sweetalert2";


interface CardReviewProps {
    review: Review;
    onDelete: (id: string) => void; // Nueva prop para manejar la eliminación en el componente padre
}

const CardReview: React.FC<CardReviewProps> = ({ review, onDelete }) => {
    const { dataUser } = useAuth();

    const handleDelete = async (id: string) => {
        // Mostrar el mensaje de confirmación con Swal
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "Do you really want to delete this review? This action cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        });

        // Si el usuario confirma, eliminar la reseña
        if (result.isConfirmed) {
            try {
                await deleteReview(id);
                onDelete(id); // Llama a la función para actualizar la lista en el componente padre
                Swal.fire("Deleted!", "Your review has been deleted.", "success");
            } catch (error) {
                console.error("Error deleting review:", error);
                Swal.fire("Error", "There was a problem deleting the review.", "error");
            }
        }
    };

    return (
        <div className="p-4 bg-gray-100 rounded-xl border-gray-300 border shadow-md flex flex-col space-y-4">
            <div className="flex justify-between items-center">
                <img
                    src={review.user.image}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                />
                <h3 className="text-lg font-semibold">{review.user.name}</h3>
                <div className="flex">{review.rating} ⭐ </div>
            </div>
            <p className="text-sm font-semibold">Course: {review.course.title}</p>
            <p className="text-sm font-medium text-[var(--foreground)]">{review.content}</p>
            <p className="text-sm text-[var(--primary)] font-semibold">Date: {new Date(review.createdAt).toLocaleTimeString( "en-US", {year: 'numeric', month: 'long', day: 'numeric'} )}</p>
            
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
