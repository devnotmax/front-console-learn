import React from 'react';


const CourseCard: React.FC<CourseCardProps> = ({ thumbnail, title, description, technologies, price, rating }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
            <img className="w-full h-48 object-cover" src={thumbnail} alt={title} />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600 text-sm mb-2 truncate-3-lines">
                    {description}
                </p>
                <div className="flex items-center space-x-2 mb-4">
                    {technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-gray-200 rounded-full px-2 py-1">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">${price.toFixed(2)}</p>
                    <p className="text-sm">⭐ {rating.toFixed(1)}</p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
