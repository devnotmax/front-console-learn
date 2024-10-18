"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import cursos from "@/Mocks/CourseMocks"; // Supongo que este mock tiene la lista de cursos
import ProductCard from "@/components/ProductCard/ProductCard";

const Carousel = () => {
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
  };

  return (
    <div className="w-full mx-auto bg-gray-100 p-5">
      <Slider className="container" {...settings}>
        {cursos.map((course) => (
          <div key={course.id} className="p-2"> 
            <ProductCard
              id={course.id}
              thumbnail={course.thumbnail}
              title={course.title}
              description={course.description}
              reviews={course.reviews}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
