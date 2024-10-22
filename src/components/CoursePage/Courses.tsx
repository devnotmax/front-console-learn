import React, { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import { CourseProps, ICourse } from "@/interfaces/Course";
import { getCourses } from "@/services/CourseServices";

const Courses: React.FC = () => {
const [courses, setCourses] = useState<CourseProps[]>([]);


useEffect(() => {
const fetchCourses = async () => {
    const data = await getCourses();
    setCourses(data);
};

fetchCourses();
}, []);


return (
<div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {courses.map((course) => (
    <CourseCard
        key={course.id}
        id={course.id}
        thumbnail={course.thumbnail}
        title={course.title}
        price={course.price}
        available={course.available}
        technologies={course.technologies}
        description={course.description}
        isAvailable={course.isAvailable}
    />
    ))}
</div>
);
};

export default Courses;