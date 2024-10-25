import { CourseProps, ICourse } from "@/interfaces/Course";
import React from "react";

const CourseCard: React.FC<CourseProps> = ({
  id,
  thumbnail,
  title,
  price,
  technologies,
  isAvailable,
  description,
  rating
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-yellow-500 ${
          index < rating ? "fill-current" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  }
  return (
    <div className="max-w-xs rounded-lg shadow-lg bg-slate-100 p-4 m-4">
      <div className="w-full h-56 bg-white rounded-t-lg overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="mt-4 p-2 rounded-lg ">
        <h3 className="text-lg font-semibold text-[var(--foreground)]">{title}</h3>
        <p className="text-[var(--primary)] text-lg font-medium"><span className="text-[var(--foreground)] text-lg">$</span> {price}</p>
        <p className=" flex justify-center sm:justify-start mt-1">{renderStars(rating)}</p>
        <div className="flex items-center justify-between mt-2">
          <span
            className={`text-sm ${
              isAvailable ? "text-green-500" : "text-red-500"
            }`}
          >
            {isAvailable ? "Available" : "Not Available"}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-[var(--primary)] opacity-60 text-slate-100 text-xs font-semibold px-2.5 py-1 rounded-full"
            >
              {"#" + tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
