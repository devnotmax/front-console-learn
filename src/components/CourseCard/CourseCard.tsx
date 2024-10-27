import { CourseProps, ICourse } from "@/interfaces/Course";
import Link from "next/link";
import React from "react";

const CourseCard: React.FC<CourseProps> = ({
  id,
  thumbnail,
  title,
  price,
  technologies,
  isAvailable,
  description,
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-yellow-500 ${index < rating ? "fill-current" : "text-gray-300"}`}
      >
        ★
      </span>
    ));
  };

  return (
    <Link href={`/course/${id}`}>
      <div className="block max-w-xs rounded-lg shadow-lg bg-slate-100 p-4 m-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div className="w-full h-56 bg-white rounded-t-lg overflow-hidden">
          <img src={thumbnail} alt={title} className="w-full h-full object-contain" />
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 font-medium">${price}</p>
          <div className="flex items-center justify-between mt-2">
            <span className={`text-sm ${isAvailable ? "text-green-500" : "text-red-500"}`}>
              {isAvailable ? "Available" : "Not Available"}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-[var(--card-color)] opacity-60 text-slate-100 text-xs font-semibold px-2.5 py-1 rounded-full"
              >
                {"#" + tech}

              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
