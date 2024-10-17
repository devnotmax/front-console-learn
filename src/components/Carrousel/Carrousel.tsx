"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import cursos from "@/Mocks/CourseMocks"; // Ajusta la ruta de tu mock

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const products = cursos[0]; 

  // Definir cuántos cursos mostrar por vez
  const itemsPerSlide = 3;

  // Cambio automático cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 18000);
    return () => clearInterval(interval);
  }, []);

  // Función para ir al slide anterior
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.floor((products.length - 1) / itemsPerSlide) * itemsPerSlide
        : prevIndex - itemsPerSlide
    );
  };

  // Función para ir al siguiente slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= products.length
        ? 0
        : prevIndex + itemsPerSlide
    );
  };

  // Obtener los cursos visibles en el slide actual
  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + itemsPerSlide
  );

  return (
    <div className="relative w-full mx-auto bg-[var(--foreground)] p-5">
      {/* Botón Anterior */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl p-1 text-white bg-[var(--accent-color)] rounded-full z-10"
      >
        ❮
      </button>

      {/* Contenedor del carrusel */}
      <div className="flex overflow-hidden w-full container">
        <div className="grid grid-cols-3 gap-4 w-full">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="w-full flex-shrink-0 p-4 rounded-lg"
            >
              <Link href={`/product/${product.id}`}>
                <div className="block bg-gray-200 hover:bg-gray-300 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-screen h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4 bg-[var(--primary)] text-white">
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-sm mt-2">{product.description}</p>
                    <p className="mt-2">
                      Rating:{" "}
                      {product.reviews.length > 0
                        ? product.reviews[0].rating
                        : "N/A"}{" "}
                      ⭐
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Botón Siguiente */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl p-1 text-white bg-[var(--accent-color)] rounded-full z-10"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
