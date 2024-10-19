import React, { useState } from 'react';

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilterChange }) => {
    const [category, setCategory] = useState("");
    const [technology, setTechnology] = useState("");
    const [price, setPrice] = useState("");

    const handleFilterChange = () => {
        onFilterChange({ category, technology, price });
    };

    return (
        <div className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-4">Filtros</h3>

            {/* Filtro por Categoría */}
            <div className="mb-4">
                <h4 className="font-bold">Categoría</h4>
                <select
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value);
                        handleFilterChange();
                    }}
                >
                    <option value="">Todas las categorías</option>
                    <option value="Programación">Programación</option>
                    <option value="Diseño">Diseño</option>
                </select>
            </div>

            {/* Filtro por Tecnología */}
            <div className="mb-4">
                <h4 className="font-bold">Tecnología</h4>
                <select
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                    value={technology}
                    onChange={(e) => {
                        setTechnology(e.target.value);
                        handleFilterChange();
                    }}
                >
                    <option value="">Todas las tecnologías</option>
                    <option value="Angular">Angular</option>
                    <option value="React">React</option>
                    <option value="Vue">Vue</option>
                </select>
            </div>

            {/* Filtro por Precio */}
            <div className="mb-4">
                <h4 className="font-bold">Precio</h4>
                <select
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
                    value={price}
                    onChange={(e) => {
                        setPrice(e.target.value);
                        handleFilterChange();
                    }}
                >
                    <option value="">Todos los precios</option>
                    <option value="Gratis">Gratis</option>
                    <option value="1-100">Hasta $100</option>
                    <option value="101-200">$101 - $200</option>
                    <option value="201">Más de $200</option>
                </select>
            </div>
        </div>
    );
};

export default FilterSidebar;
