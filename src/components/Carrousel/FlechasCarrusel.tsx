import React from "react";

// Flecha Izquierda
const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button className="carousel-button left" onClick={onClick}>
        ❮
    </button>
);

// Flecha Derecha
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button className="carousel-button right" onClick={onClick}>
        ❯
    </button>
);

export { PrevArrow, NextArrow };