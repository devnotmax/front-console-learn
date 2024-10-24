import React from 'react';
import { Course } from '@/interfaces/ProductCard';
import UserReview from '../UserReview/userReview';

interface CourseDetailProps {
    course: Course
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
    return (
        <div className="container mx-auto px-4 py-6">
            {/* Course Header */}
            <div className="flex">
                <div className="w-1/3">
                    <img src={course.thumbnail} alt={course.title} className="rounded-lg shadow-lg" />
                </div>
                <div className="w-2/3 pl-8">
                    <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                    
                    {/* Tags */}
                    <div className="flex items-center space-x-2">
                        <span className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                            Front-end Developer
                        </span>
                        <span className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                            {course.technologies}
                        </span>
                    </div>

                    {/* Price and Duration */}
                    <div className="mt-4 text-2xl font-bold text-purple-600">${course.price}</div>
                    {/* <p className="text-gray-600 mt-1">Duración: {course.reviews.length} Horas</p> */}

                    {/* Purchase Button */}
                    <button className="mt-4 bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700">
                        Comprar curso
                    </button>

                    {/* FAQ Section */}
                    <div className="mt-6 border-t pt-4">
                        <h3 className="font-semibold text-lg">¿El curso incluye certificación?</h3>
                        <p className="text-gray-700 mt-2">
                            Sí, todos nuestros cursos incluyen una certificación oficial una vez que hayas completado con éxito el programa.
                        </p>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-10">
                <h2 className="text-3xl font-bold mb-4">Ultimas Reviews</h2>
                    <UserReview />
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-10 text-center">
                <h2 className="text-xl font-bold mb-4">Follow the latest trends</h2>
                <p className="text-gray-600 mb-4">With our daily newsletter</p>
                <form className="flex justify-center items-center">
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="border p-2 rounded-l-lg focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-black text-white py-2 px-4 rounded-r-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CourseDetail;
