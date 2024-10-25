"use client";
import React, { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import { ICourse } from "@/interfaces/Course";
import {
  getCourses,
  filterByTechnology,
  OrderByPrice,
  filterByTechnologyAndPrice,
} from "@/services/CourseServices";
import SearchBar from "@/components/SearchBar/SearchBar";

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<ICourse[]>([]);  // Cursos filtrados
  const [technologyFilter, setTechnologyFilter] = useState<string>("");
  const [priceFilter, setPriceFilter] = useState<boolean | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchCourses = async () => {
    try {
      let data: ICourse[] = [];

      if (technologyFilter && priceFilter !== null) {
        data = await filterByTechnologyAndPrice(technologyFilter, priceFilter);
      } else if (technologyFilter) {
        data = await filterByTechnology(technologyFilter);
      } else if (priceFilter !== null) {
        data = await OrderByPrice(priceFilter);
      } else {
        data = await getCourses();
      }

      if (Array.isArray(data)) {
        setCourses(data);
        setFilteredCourses(data);  // Al inicio, mostrar todos los cursos
      } else {
        console.error("Los datos obtenidos no son un arreglo:", data);
        setCourses([]);
        setFilteredCourses([]);
      }
    } catch (error) {
      console.error("Error al obtener los cursos:", error);
      setCourses([]);
      setFilteredCourses([]);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [technologyFilter, priceFilter]);

  // Función para manejar la búsqueda ignorando mayúsculas/minúsculas
  const handleSearch = (searchTerm: string) => {
    const searchResults = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setFilteredCourses(searchResults);  // Actualizar los cursos filtrados
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {/* SideBar */}
      <div className="col-span-1 h-full bg-slate-100 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">SideBar</h2>
        <ul className="space-y-4">
          <li>
            <a href="#">tag 1</a>
          </li>
          <li>
            <a href="#">tag 2</a>
          </li>
          <li>
            <a href="#">tag 3</a>
          </li>
          <li>
            <a href="#">tag 4</a>
          </li>
        </ul>
      </div>

      {/* Contenido Principal */}
      <div className="col-span-3 grid gap-4">
        {/* Filtros y barra de búsqueda */}
        <div className="flex w-full justify-center items-center gap-4">
          <SearchBar onSearch={handleSearch} />  {/* Pasar la función de búsqueda */}
          <div className="flex justify-center items-center">
            <select
              id="technologyFilter"
              value={technologyFilter}
              onChange={(e) => setTechnologyFilter(e.target.value)}
              className="p-2 bg-slate-100 shadow-md border rounded-lg w-full"
            >
              <option value="">Categories</option>
              <option value="React">React</option>
              <option value="HTML">HTML</option>
              <option value="TypeScript">TypeScript</option>
              <option value="Node.js">Nodejs</option>
              <option value="Express">Express</option>
              <option value="CSS">CSS</option>
              <option value="Tailwind">Tailwind</option>
              <option value="Front-end">Frontend</option>
            </select>
          </div>
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setPriceFilter(true)}
              className={`p-2 border rounded-lg flex justify-center items-center shadow-md ${
                priceFilter === true
                  ? "bg-[var(--accent-color)] text-white"
                  : "bg-slate-100 text-black"
              }`}
            >
              Lower price <i className="bx bx-sort-down text-[1.2rem]"></i>
            </button>
            <button
              onClick={() => setPriceFilter(false)}
              className={`p-2 border rounded-lg flex justify-center items-center shadow-md ${
                priceFilter === false
                  ? "bg-[var(--accent-color)] text-white"
                  : "bg-slate-100 text-black"
              }`}
            >
              Higher price <i className="bx bx-sort-up text-[1.2rem]"></i>
            </button>
          </div>
        </div>

        {/* Renderizado de los cursos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
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
    </div>
  );
};

export default Courses;