"use client";

import React, { useState } from "react";
import CourseHero from "@/components/CourseHero/CourseHero";
import Carousel from "@/components/Carrousel/Carrousel";
import FilterSidebar from "@/components/Filter/FilterSidebar";
import CourseCard from "@/components/CourseCard/CourseCard";
import cursos from "@/Mocks/CourseMocks";

const Cursos = () => {
  const [filters, setFilters] = useState({
    category: "",
    technology: "",
    price: "",
  });

  const handleFilterChange = (newFilters: {
    category: string;
    technology: string;
    price: string;
  }) => {
    setFilters(newFilters);
  };

  // Aplicamos los filtros
  const filteredCourses = cursos.filter((course) => {
    // const categoryMatch = filters.category
    //   ? course.category === filters.category
    //   : true;
    const technologyMatch = filters.technology
      ? course.technologies.includes(filters.technology)
      : true;
    const priceMatch =
      filters.price === "Gratis"
        ? course.price === 0
        : filters.price === "1-100"
        ? course.price <= 100
        : filters.price === "101-200"
        ? course.price > 100 && course.price <= 200
        : filters.price === "201"
        ? course.price > 200
        : true;

    return technologyMatch && priceMatch;
  });

  return (
    <main className="w-full h-full">
      {/* Hero section del curso */}
      <CourseHero />

      {/* Sección de cursos más populares */}
      <div className="p-4">
        <h2 className="text-2xl font-bold">
          Nuestros cursos{" "}
          <span className="text-[var(--accent-color)]">
            más populares🔥🔥
          </span>
        </h2>
      </div>

      {/* Carousel de cursos populares */}
      <Carousel />

      {/* Sección de Filtros y Listado de Cursos */}
      <div className="container mx-auto py-8 flex">
        <div className="w-1/4">
          {/* Sidebar con los filtros */}
          <FilterSidebar onFilterChange={handleFilterChange} />
        </div>

        <div className="w-3/4 grid grid-cols-3 gap-6">
          {/* Cards de cursos filtrados */}
          {filteredCourses.map((course, index) => (
            <CourseCard
              key={index}
              id={course.id}
              thumbnail={course.thumbnail}
              title={course.title}
              description={course.description}
              technologies={course.technologies}
              price={course.price}
              rating={
                course.reviews.reduce((acc, review) => acc + review.rating, 0) /
                course.reviews.length
              }
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Cursos;
