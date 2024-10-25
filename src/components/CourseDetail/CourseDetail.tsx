import React from 'react';
import { Course } from '@/interfaces/ProductCard';
import UserReview from '../UserReview/userReview';

interface CourseDetailProps {
    course: Course
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
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
        };
    return (
        <div className="container mx-auto px-4 py-6 font-inter">
            {/* Course Header */}
            <div className="flex">
                <div className="w-1/3">
                    <img src={course.thumbnail} alt={course.title} className="rounded-lg shadow-lg" />
                </div>
                <div className="w-2/3 pl-8">
                    <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                    
                    {/* Tags */}
                    <div className="flex items-center space-x-2">
                        <span className="bg-[var(--primary)] text-[var(--principal-text)] text-xs font-semibold px-2 py-1 rounded-full">
                            {course.technologies}
                        </span>
                    </div>

                    {/* Price and rating */}
                    <div className="mt-4 text-2xl font-bold text-[var(--foreground)]">${course.price}</div>
                    <div className="flex justify-center sm:justify-start mt-1">
                        {renderStars(course.rating)}
                        </div>

                    {/* Purchase Button */}
                    <button className="mt-4 bg-[var(--background)] text-white py-2 px-6 rounded-lg hover:bg-[var(--primary)]">
                        Buy course
                    </button>

                    {/* FAQ Section */}
                    <div className="mt-6 border-t pt-4">
                        <h3 className="font-semibold text-lg text-[var(--primary)]">¿Does the course include certification?</h3>
                        <p className=" mt-2 text-[var(--foreground)]">
                        Yes, all of our courses include an official certification once you have successfully completed the program.
                        </p>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-10">
                <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">
                Latest Reviews</h2>
                    <UserReview />
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-10 text-center">
                <h2 className="text-xl font-bold mb-4 text-[var(--foreground)]">Follow the latest trends</h2>
                <p className="text-[var(--foreground)] mb-4">With our daily newsletter</p>
                <form className="flex justify-center items-center">
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="border p-2 rounded-l-lg focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-[var(--accent-color)] text-white py-2 px-4 rounded-r-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CourseDetail;
