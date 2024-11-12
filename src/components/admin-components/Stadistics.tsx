// import React from 'react';

// const Stadistics = () => {
//   // Datos de ejemplo
//   const statsData = [
//     { label: 'Cursos creados', value: 120 },
//     { label: 'Ventas cerradas', value: 450 },
//     { label: 'Usuarios', value: 3500 },
//     { label: 'Reseñas', value: 230 },
    
//   ];

//   return (
//     <div className="w-full p-6 border-black border-opacity-15 rounded-xl border-[3px] grid grid-cols-2 gap-6 bg-white shadow-lg">
//       {statsData.map((stat, index) => (
//         <div
//           key={index}
//           className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md"
//         >
//           <span className="text-3xl font-bold text-primary-color">{stat.value}</span>
//           <span className="text-lg text-secondary-color">{stat.label}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Stadistics;

import { getCourses } from '@/services/CourseServices';
import { getPaidOrders } from '@/services/OrderService';
import { getReviews } from '@/services/reviewService';
import { getUsers } from '@/services/userService';
import React, { useEffect, useState } from 'react';


const Stadistics = () => {
  const [stats, setStats] = useState({
    courses: 0,
    closedSales: 0,
    users: 0,
    reviews: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const coursesData = await getCourses();
        const ordersData = await getPaidOrders();
        const usersData = await getUsers();
        const reviewsData = await getReviews();

        setStats({
          courses: coursesData.length,
          closedSales: ordersData.length,
          users: usersData.data.length,
          reviews: reviewsData.length,
        });
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStats();
  }, []);

  const statsData = [
    { label: 'Courses Created', value: stats.courses },
    { label: 'Closed Sales', value: stats.closedSales },
    { label: 'Users', value: stats.users },
    { label: 'Reviews', value: stats.reviews },
  ];

  return (
    <div className="w-full p-6 border-black border-opacity-15 rounded-xl border grid grid-cols-2 gap-6 bg-white shadow-lg">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md"
        >
          <span className="text-3xl font-bold text-[var(--accent-color)]">{stat.value}</span>
          <span className="text-lg text-secondary-color">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Stadistics;
