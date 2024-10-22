import React, { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import { ICourse } from "@/interfaces/Course";
import { getCourses, filterByTechnology, OrderByPrice } from "@/services/CourseServices";

const Courses: React.FC = () => {
const [courses, setCourses] = useState<ICourse[]>([]);
const [technologyFilter, setTechnologyFilter] = useState<string>("");
const [priceFilter, setPriceFilter] = useState<boolean | null>(null);

  // Función para obtener cursos dependiendo de los filtros seleccionados
const fetchCourses = async () => {
try {
    let data: ICourse[] = [];

    if (technologyFilter) {
    data = await filterByTechnology(technologyFilter);
    } else if (priceFilter !== null) {
    data = await OrderByPrice(priceFilter);
    } else {
    data = await getCourses();
    }

    // Validar si la respuesta es un array
    if (Array.isArray(data)) {
    setCourses(data);
    } else {
    console.error("Los datos obtenidos no son un arreglo:", data);
    setCourses([]); // Evitar el error si no es un array
    }
} catch (error) {
    console.error("Error al obtener los cursos:", error);
    setCourses([]); // Evitar el error si falla la llamada
}
};

useEffect(() => {
fetchCourses();
}, [technologyFilter, priceFilter]);

return (
<div className="container mx-auto p-4">
    {/* Filtros */}
    <div className="mb-4">
    {/* Filtro por tecnología */}
    <label htmlFor="technologyFilter">Filter by Technology:</label>
    <select
        id="technologyFilter"
        value={technologyFilter}
        onChange={(e) => setTechnologyFilter(e.target.value)}
        className="ml-2 p-2 border rounded"
    >
        <option value="">All</option>
        <option value="React">React</option>
        <option value="HTML">HTML</option>
        <option value="TypeScript">TypeScript</option>
        <option value="Node.js">Nodejs</option>
        <option value="Express">Express</option>
        <option value="CSS">CSS</option>
        <option value="Tailwind">Tailwind</option>
        
        {/* Agregar más tecnologías si es necesario */}
    </select>

    {/* Filtro por precio */}
    <label htmlFor="priceFilter" className="ml-4">Order by Price:</label>
    <select
        id="priceFilter"
        value={priceFilter === null ? "" : priceFilter ? "asc" : "desc"}
        onChange={(e) => setPriceFilter(e.target.value === "asc" ? true : false)}
        className="ml-2 p-2 border rounded"
    >
        <option value="">Todas</option>
        <option value="asc">Menor precio</option>
        <option value="desc">Mayor precio</option>
    </select>
    </div>

    {/* Renderizado de los cursos */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {courses.length > 0 ? (
        courses.map((course) => (
        <CourseCard
            key={course.id}
            id={course.id}
            thumbnail={course.thumbnail}
            title={course.title}
            price={course.price}
            technologies={course.technologies}
            description={course.description}
            isAvailable={course.isAvailable}
        />
        ))
    ) : (
        <p>No courses found.</p>
    )}
    </div>
</div>
);
};

export default Courses;