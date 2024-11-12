// "use client";

// import { Line } from "react-chartjs-2";
// import { useState, useEffect } from "react";
// import {
//   Chart,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { getPaidOrders } from "@/services/OrderService"; // Asegúrate de que la ruta sea correcta
// import { IUser } from "@/interfaces/Auth";
// import { ICourse } from "@/interfaces/Course";

// // Registramos los componentes necesarios para Chart.js
// Chart.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// interface Order {
//   id: string;
//   userId: string;
//   status: boolean;
//   courseId: string;
//   createdAt: string;
//   updatedAt: string;
//   user: IUser;
//   course: ICourse;
//   date: string; // Asegúrate de que esta propiedad exista en tu respuesta
//   quantity: number; // Asegúrate de que esta propiedad exista en tu respuesta
// }

// const PurchaseStatistics = () => {
//   const [purchaseData, setPurchaseData] = useState({
//     labels: [] as string[],
//     datasets: [
//       {
//         label: "Compras de cursos",
//         data: [] as number[],
//         borderColor: "rgba(75, 192, 192, 1)",
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         tension: 0.4, // Curvatura de la línea
//         fill: true,
//       },
//     ],
//   });

//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Función para cargar las órdenes pagadas
//   const loadPaidOrders = async () => {
//     try {
//       const orders: Order[] = await getPaidOrders(); // Asegúrate de que getPaidOrders devuelva un tipo Order[]
//       const labels = orders.map((order) => order.date); // Ajusta 'date' según la estructura de tu API
//       const data = orders.map((order) => order.quantity); // Ajusta 'quantity' según la estructura de tu API

//       setPurchaseData((prevData) => ({
//         ...prevData,
//         labels,
//         datasets: [{ ...prevData.datasets[0], data }],
//       }));
//     } catch (error: unknown) {
//       // Cambia a 'unknown'
//       if (error instanceof Error) {
//         setError(error.message); // Accede a message solo si error es de tipo Error
//       } else {
//         setError("An unknown error occurred");
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadPaidOrders();
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-full">Cargando...</div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center h-full text-red-500">
//         Error: {error}
//       </div>
//     );
//   }

//   return (
//     <div className="w-full p-4 border-black border-opacity-15 rounded-xl border-[3px] bg-white shadow-md">
//       <h3 className="text-2xl font-semibold text-center mb-4">
//         Estadísticas de Compras de Cursos
//       </h3>
//       <Line
//         data={purchaseData}
//         options={{
//           responsive: true,
//           plugins: {
//             legend: {
//               display: true,
//               position: "top",
//             },
//             tooltip: {
//               callbacks: {
//                 label: function (context) {
//                   return `${context.dataset.label}: ${context.parsed.y} compras`;
//                 },
//               },
//             },
//           },
//           scales: {
//             x: {
//               title: {
//                 display: true,
//                 text: "Fechas",
//               },
//             },
//             y: {
//               title: {
//                 display: true,
//                 text: "Cantidad de Compras",
//               },
//               beginAtZero: true,
//             },
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default PurchaseStatistics;

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getAuthToken } from "@/contexts/authContext";
import { IOrderDetails } from "@/interfaces/Orders";

// Importa el servicio
const getPaidOrders = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = getAuthToken(); // Asumiendo que tienes esta función definida en otro lugar

  const res = await fetch(`${apiUrl}/orders?paid=true`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  const data = await res.json();
  return data;
};

// Inicializa los componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PaidOrdersChart: React.FC = () => {
  const [chartData, setChartData] = useState<{
    labels: string[];
    data: number[];
  }>({ labels: [], data: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orders = await getPaidOrders();
        const courseTitles = orders.map(
          (order: IOrderDetails) => order.course.title
        );
        const orderCounts = orders.reduce(
          (acc: Record<string, number>, order: IOrderDetails) => {
            acc[order.course.title] = (acc[order.course.title] || 0) + 1;
            return acc;
          },
          {}
        );

        setChartData({
          labels: courseTitles,
          data: Object.values(orderCounts),
        });
      } catch (error) {
        console.error("Error fetching paid orders:", error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Number of Orders Paid per Course",
        data: chartData.data,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full p-4 border-black border-opacity-15 rounded-xl border bg-white shadow-md">
      <h2>Paid Orders</h2>
      <Bar data={data} />
    </div>
  );
};

export default PaidOrdersChart;
