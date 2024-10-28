"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Asegúrate de usar la librería de routing que utilices
import { getCourseById } from '@/services/CourseServices';
import CourseDetail from '@/components/CourseDetail/CourseDetail';
import { Course } from '@/interfaces/ProductCard';

const CoursePage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Usamos el id de la URL
const [course, setCourse] = useState<Course | null>(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
const fetchCourse = async () => {
    const data = await getCourseById(id);
    setCourse(data);
    setLoading(false);
};

fetchCourse();
}, [id]);

if (loading) {
return <div>Loading...</div>;
}

if (!course) {
return <div>No se encontró el curso.</div>;
}

return <CourseDetail course={course} />;


};


export default CoursePage;