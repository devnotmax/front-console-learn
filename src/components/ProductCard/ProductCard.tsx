// ProductCard.tsx
import Link from "next/link";
import React from "react";
import { ProductCardProps } from "@/interfaces/ProductCard";

//card

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  thumbnail,
  title,
  description,
  // reviews,
}) => {
  return (
    <div className="w-full h-96 flex-shrink-0 p-4 rounded-lg">
  {/* <Link href={`/product/${id}`}> */}
    <div className="block bg-gray-200 hover:bg-gray-300 rounded-lg overflow-hidden transition-transform transform hover:scale-105 h-full">
      <div className="w-full h-48">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4 bg-[var(--primary)] text-white h-full">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">{title}</h3>
          {/* <p className="text-lg">
            {reviews.length > 0 ? reviews[0].rating : "N/A"} ⭐
          </p> */}
        </div>
        <p className="text-sm mt-2 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  {/* </Link> */}
</div>

);
};


export default ProductCard;
