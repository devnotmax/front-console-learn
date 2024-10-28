"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import { NextArrow, PrevArrow } from "./FlechasCarrusel";
import { getCourses } from "@/services/CourseServices";
import Link from "next/link";

// Define la interfaz para los datos del curso
interface Course {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  // reviews: { rating: number }[];
}

const Carousel = () => {
  const [courses, setCourses] = useState<Course[]>([]); // Especifica que courses es un array de Course
  const [isLoading, setIsLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses(); // Llamada al servicio
        setCourses(data); // Guardar los cursos en el estado
      } catch (error) {
        console.error("Error al obtener los cursos:", error);
      } finally {
        setIsLoading(false); // Cambiar el estado de carga
      }
    };

    fetchCourses(); // Llamar a la función para obtener los datos al montar el componente
  }, []); // Se ejecuta una sola vez cuando se monta el componente

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplayspeed: 500,
    slidesToShow: 4, // Número de productos por slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Para pantallas más pequeñas
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Para dispositivos móviles
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Para pantallas más pequeñas aún
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />, // Flecha personalizada para siguiente
    prevArrow: <PrevArrow />, // Flecha personalizada para previo
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[var(--accent-color)]"></div>
      </div>
    );
  }  

  return (
    <div className="w-full mx-auto bg-slate-100 shadow-lg p-5">
      <Slider className="container" {...settings}>
        {courses.map((course) => (
          <Link key={course.id} href={course.id} className="p-2 card">
            <ProductCard
              id={course.id}
              thumbnail={course.thumbnail}
              title={course.title}
              description={course.description}
              // reviews={course.reviews}
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
