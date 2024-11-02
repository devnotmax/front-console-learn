import React, { useState } from 'react';
import UserReview from "../UserReview/userReview";

const AdminReviews = () => {
  // Datos simulados de reseñas
  const [reviews, setReviews] = useState([
    { id: 1, username: "Usuario1", content: "Excelente curso, muy recomendado!" },
    { id: 2, username: "Usuario2", content: "El contenido es claro y útil." },
    { id: 3, username: "Usuario3", content: "Buena experiencia, pero se puede mejorar." },
    { id: 4, username: "Usuario4", content: "No me gustó tanto, esperaba más profundidad." }
  ]);

  // Función mock para eliminar una reseña
  const handleDelete = (id: number) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  return (
    <div className="w-full p-4 border-black border-opacity-15 rounded-xl border-[3px] overflow-y-auto max-h-96">
      <h2 className="text-xl font-semibold mb-4">Últimas Reseñas</h2>
      {reviews.map((review) => (
        <div
          key={review.id}
          className="flex justify-between items-center p-3 mb-3 bg-gray-100 rounded-lg shadow-sm"
        >
          <div>
            <p className="text-lg font-medium text-primary-color">{review.username}</p>
            <p className="text-sm text-secondary-color">{review.content}</p>
          </div>
          <button
            onClick={() => handleDelete(review.id)}
            className="text-red-500 hover:text-red-700"
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminReviews;
