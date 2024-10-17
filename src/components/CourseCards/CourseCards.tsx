import React from 'react';

interface Review {
  id: string;
  content: string;
  rating: number;
}

interface Course {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  technologies: string[];
  price: number;
  available: boolean;
  reviews: Review[];
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  // Función para renderizar las estrellas de la calificación
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-yellow-500 ${index < rating ? 'fill-current' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  // Obtener la calificación promedio (suponiendo que hay múltiples reseñas)
  const averageRating = course.reviews.length
    ? course.reviews.reduce((acc, review) => acc + review.rating, 0) / course.reviews.length
    : 0;

  return (
    <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden border border-gray-300">
      <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
        <p className="text-gray-600 mt-2">{course.description}</p>
        <div className="mt-3">
          <span className="font-bold text-gray-900">${course.price}</span>
        </div>
        <div className="flex mt-2">
          {renderStars(averageRating)}
        </div>
        <div className="mt-3">
          <h4 className="font-semibold text-gray-700">Tecnologías:</h4>
          <ul className="list-disc list-inside">
            {course.technologies.map((tech, index) => (
              <li key={index} className="text-gray-600">{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
