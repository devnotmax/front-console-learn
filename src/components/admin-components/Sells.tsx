import { useEffect, useState } from "react";
import { getPaidOrders } from "../../services/OrderService";
import { useAuth } from "../../contexts/authContext";
import { ICourse } from "@/interfaces/Course";

interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  image: string;
  role: string;
}

interface Order {
  id: string;
  userId: string;
  status: boolean;
  courseId: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  course: ICourse;
}

// const Sells = () => {
//   const { dataUser } = useAuth();
//   const [paidOrders, setPaidOrders] = useState<Order[]>([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const fetchedPaidOrders = await getPaidOrders();
        
//         // Ordenar las órdenes por fecha de creación en orden descendente
//         const sortedOrders = fetchedPaidOrders.sort((a: Order, b: Order) =>
//           new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//         );

//         setPaidOrders(sortedOrders);
//       } catch (error) {
//         console.error("Error fetching paid orders:", error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="w-full p-4 border border-black border-opacity-15 rounded-xl">
//       <div className="flex justify-center items-center gap-2 mb-2 p-4 text-gray-700 font-semibold overflow-y-auto max-h-48">
//         <div className="w-1/4 text-center bg-slate-100 rounded-xl">Title</div>
//         <div className="w-1/4 text-center  bg-slate-100 rounded-xl">Name</div>
//         <div className="w-1/4 text-center  bg-slate-100 rounded-xl">Price</div>
//         <div className="w-1/4 text-center  bg-slate-100 rounded-xl">Date</div>
//       </div>

//       <div className="overflow-y-auto max-h-48">
//         {paidOrders.map((sale) => (
//           <div
//             key={sale.id}
//             className="flex items-center justify-center bg-green-500 bg-opacity-20 text-gray-800 rounded-lg mb-2 p-4"
//           >
//             <div className="w-1/4 text-center overflow-hidden">
//               <div className="truncate-lines">
//                 {sale.course.title}
//               </div>
//             </div>
//             <div className="w-1/4 text-center">{sale.user.name}</div>
//             <div className="w-1/4 text-center">{sale.course.price}</div>
//             <div className="w-1/4 text-center">{new Date(sale.createdAt).toLocaleDateString()}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sells;

const Sells = () => {
  const { dataUser } = useAuth();
  const [paidOrders, setPaidOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const fetchedPaidOrders = await getPaidOrders();
        const sortedOrders = fetchedPaidOrders.sort((a: Order, b: Order) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setPaidOrders(sortedOrders);
      } catch (error) {
        console.error("Error fetching paid orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="w-full border border-black border-opacity-15 rounded-xl">
      <div className="flex justify-center items-center gap-2 p-4 text-gray-700 font-semibold overflow-y-auto max-h-48">
        <div className="w-1/4 text-center bg-slate-100 rounded-xl">Title</div>
        <div className="w-1/4 text-center bg-slate-100 rounded-xl">Name</div>
        <div className="w-1/4 text-center bg-slate-100 rounded-xl">Price</div>
        <div className="w-1/4 text-center bg-slate-100 rounded-xl">Date</div>
      </div>

      <div className="overflow-y-auto max-h-96 p-2">
        {paidOrders.map((sale) => (
          <div
            key={sale.id}
            className="flex items-center justify-center bg-green-500 bg-opacity-20 text-gray-800 rounded-lg p-4 mb-2"
          >
            <div className="w-1/4 text-center overflow-hidden">
              <div className="truncate-lines">{sale.course.title}</div>
            </div>
            <div className="w-1/4 text-center">{sale.user.name}</div>
            <div className="w-1/4 text-center">{sale.course.price}</div>
            <div className="w-1/4 text-center">{new Date(sale.createdAt).toLocaleDateString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sells;

