"use client";

import React, { useState } from "react";
import CourseHero from "@/components/CourseHero/CourseHero";
import Carousel from "@/components/Carrousel/Carrousel";
import Courses from "@/components/CoursePage/Courses";



const CoursesPage: React.FC = () => {

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

      {/* Cards de cursos populares */} 
      <Courses />
    </main>
  );
};

export default CoursesPage;
