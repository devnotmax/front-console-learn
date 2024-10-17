"use client";
import React, { useState, useEffect } from "react";
import cursos from "@/Mocks/CourseMocks";
import ProductCard from "@/components/ProductCard/ProductCard"; 

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = cursos[0]; 
  const itemsPerSlide = 3;

  useEffect(() => {
    const interval = setInterval(goToNext, 18000);
    return () => clearInterval(interval);
  }, []);

  const updateIndex = (newIndex: number) => {
    setCurrentIndex((prevIndex) =>
      newIndex < 0 
        ? Math.floor((products.length - 1) / itemsPerSlide) * itemsPerSlide 
        : newIndex >= products.length 
        ? 0 
        : newIndex
    );
  };

  const goToPrevious = () => updateIndex(currentIndex - itemsPerSlide);
  const goToNext = () => updateIndex(currentIndex + itemsPerSlide);

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerSlide);

  return (
    <div className="relative w-full mx-auto bg-[var(--foreground)] p-5 items-center justify-center">
      {["❮", "❯"].map((symbol, index) => (
        <button
          key={symbol}
          onClick={index === 0 ? goToPrevious : goToNext}
          className={`absolute ${index === 0 ? "left-4" : "right-4"} top-1/2 transform -translate-y-1/2 text-xl p-1 text-white hover:scale-110 rounded-full z-10`}
        >
          {symbol}
        </button>
      ))}

      <div className="flex overflow-hidden w-full container items-center justify-center">
        <div className="grid grid-cols-3 gap-4 w-3/4">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product} // Utilizamos el spread operator para evitar pasar cada prop individualmente
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
