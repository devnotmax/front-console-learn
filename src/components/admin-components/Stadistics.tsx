import React from 'react';

const Stadistics = () => {
  // Datos de ejemplo
  const statsData = [
    { label: 'Cursos creados', value: 120 },
    { label: 'Ventas cerradas', value: 450 },
    { label: 'Usuarios', value: 3500 },
    { label: 'Reseñas', value: 230 },
    { label: 'Reseñas', value: 230 },
    { label: 'Reseñas', value: 230 },
    
  ];

  return (
    <div className="w-full p-6 border-black border-opacity-15 rounded-xl border-[3px] grid grid-cols-2 gap-6 bg-white shadow-lg">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md"
        >
          <span className="text-3xl font-bold text-primary-color">{stat.value}</span>
          <span className="text-lg text-secondary-color">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Stadistics;
