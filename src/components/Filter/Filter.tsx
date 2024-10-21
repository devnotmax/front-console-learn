"use client";
import React, { useState } from "react";
import CourseCard from "../CourseCard/CourseCard"; // Asumiendo que está en otro archivo
import { Course } from "@/interfaces/ProductCard";
import cursos from "@/Mocks/CourseMocks";

const FilterableProductList = () => {
const [searchTerm, setSearchTerm] = useState("");
const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
const [rating, setRating] = useState<number>(0);

const productsMock: Course[] = cursos;

  // Filtrar productos basado en los filtros seleccionados
const filteredProducts = productsMock.filter((product) => {
    // Filtro de texto
    const matchesSearchTerm = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    // Filtro de tecnologías
    const matchesTechnologies =
        selectedTechnologies.length === 0 ||
        selectedTechnologies.every((tech) =>
            product.technologies?.includes(tech)
        );

    // Filtro de precios
    const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

    // Filtro de rating
    const averageRating =
        product.reviews.reduce((acc, review) => acc + review.rating, 0) /
        product.reviews.length || 0;
    const matchesRating = averageRating >= rating;

    return (
        matchesSearchTerm &&
        matchesTechnologies &&
        matchesPrice &&
        matchesRating
        );
    });

return (
<div className="flex p-4">
    {/* Filtros a la izquierda */}
    <div className="w-1/4 pr-4">
    <div className="sticky top-0 bg-white shadow-md p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Filtros</h3>
        {/* Filtro de búsqueda por texto */}
        <input
        type="text"
        placeholder="Buscar por título..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        />

        {/* Filtro de tecnologías */}
        <div className="mb-4">
        <label className="block mb-2">Tecnologías:</label>
        <select
            multiple
            value={selectedTechnologies}
            onChange={(e) =>
            setSelectedTechnologies(
                Array.from(e.target.selectedOptions, (option) => option.value)
            )
            }
            className="w-full p-2 border border-gray-300 rounded-lg"
        >
            <option value="JavaScript">JavaScript</option>
            <option value="DOM">DOM</option>
            <option value="ES6">ES6</option>
            <option value="React">React</option>
            <option value="Hooks">Hooks</option>
            <option value="Context">Context</option>
            <option value="Angular">Angular</option>
            <option value="Routing">Routing</option>
            <option value="Forms">Forms</option>
        </select>
        </div>

        {/* Filtro de precios */}
        <div className="mb-4">
        <label className="block mb-2">Precio:</label>
        <input
            type="range"
            min={0}
            max={100}
            value={priceRange[1]}
            onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="w-full"
        />
        <span className="block mt-2">
            Precio: ${priceRange[0]} - ${priceRange[1]}
        </span>
        </div>

        {/* Filtro de rating */}
        <div className="mb-4">
        <label className="block mb-2">Rating:</label>
        <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-lg"
        >
            <option value={0}>Todos</option>
            <option value={1}>1 estrella o más</option>
            <option value={2}>2 estrellas o más</option>
            <option value={3}>3 estrellas o más</option>
            <option value={4}>4 estrellas o más</option>
            <option value={5}>5 estrellas</option>
        </select>
        </div>
    </div>
    </div>

    {/* Tarjetas de cursos a la derecha */}
    <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {filteredProducts.map((product) => (
        <CourseCard key={product.id} {...product} />
    ))}
    </div>
</div>
);
};

export default FilterableProductList;
