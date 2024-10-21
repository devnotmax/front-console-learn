import Course from "@/interfaces/Course";
import { Course } from "@/interfaces/ProductCard";
import React from "react";

const CourseCard: React.FC<Course> = ({
    id,
    thumbnail,
    title,
    price,
    reviews,
    available,
    technologies,
}) => {
  // Calcular la calificación promedio de las reviews
const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length || 0;

return (
<div className="max-w-xs rounded-lg shadow-lg bg-white p-4 m-4">
    <img
    src={thumbnail}
    alt={title}
    className="w-full h-40 object-cover rounded-t-lg"
    />
    <div className="mt-4">
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600 font-medium">${price}</p>
    <div className="flex items-center justify-between mt-2">
        <span className="text-gray-500 text-sm">
        Rating: {averageRating.toFixed(1)}⭐
        </span>
        <span className={`text-sm ${available ? 'text-green-500' : 'text-red-500'}`}>
        {available ? 'Available' : 'Not Available'}
        </span>
    </div>
    <div className="text-gray-600 text-sm mt-2">
        <strong>Technologies:</strong> {technologies.join(", ")}
    </div>
    
    <button className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-lg mt-4 hover:bg-purple-700 transition-colors">
        Ver detalle
    </button>
    </div>
</div>
);
};

export default CourseCard;
