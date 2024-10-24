import Link from "next/link";
import React from "react";
import { ProductCardProps } from "@/interfaces/ProductCard";

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  thumbnail,
  title,
  description,
}) => {
  return (
    <div className="w-full h-96 flex-shrink-0 p-4 rounded-lg relative group">
      <Link href={`/course/${id}`} className="block hover:bg-[var(--foreground)] rounded-lg overflow-hidden h-full transition-transform transform hover:scale-105">
        {/* Contenedor de la imagen con el overlay */}
        <div className="relative w-full h-48 bg-white">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-contain"
          />
          {/* Overlay negro con baja opacidad */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
            {/* Botón para ver detalles */}
            <button className="bg-[var(--accent-color)] text-black font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105">
              Details
            </button>
          </div>
        </div>

        <div className="p-4 bg-[var(--card-color)] text-[var(--principal-text)] h-full">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">{title}</h3>
          </div>
          <p className="text-sm mt-2 text-[var(--secondary-text)] line-clamp-3">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
