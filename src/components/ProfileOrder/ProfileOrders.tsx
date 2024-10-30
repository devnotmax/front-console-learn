import React, { useEffect, useState } from "react";
import { getOrders } from "@/services/OrderService";
import { useAuth } from "@/contexts/authContext";
import { payOrder } from "@/services/BuyServices";
import { ICourse } from "@/interfaces/Course";
import Link from "next/link";
import Swal from "sweetalert2";

interface Order {
  id: string;
  courseId: string;
  createdAt: string;
  status: boolean;
  details: string | null;
  course: ICourse;
}

const ProfileOrders = () => {
  const { dataUser } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (dataUser) {
        try {
          const userOrders = await getOrders(dataUser.user.id);
          setOrders(userOrders);
        } catch (error) {
          console.error("Error fetching orders:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchOrders();
  }, [dataUser]);

  const handlePayOrder = async (orderId: string) => {
    try {
      const response = await payOrder(orderId);
      console.log("Redirigiendo al checkout:", response.url);
      if (response.url) {
        window.open(response.url, "_blank");
      } else {
        console.error("URL de checkout no encontrada en la respuesta");
      }
    } catch (error) {
      console.error("Error al procesar el pago:", error);
      Swal.fire("Error", "No se pudo procesar el pago.", "error");
    }
  };

  return (
    <div className="bg-[var(--card-color)] p-4 rounded-lg">
      <h3 className="text-lg font-medium mb-4 text-[var(--principal-text)]">
        Order History
      </h3>
      {isLoading ? (
        <p>Loading orders...</p>
      ) : (
        <table className="w-full text-left">
          <thead className="bg-[var(--foreground)]">
            <tr>
              <th className="p-2 text-[var(--secondary-text)]">Nº Order</th>
              <th className="p-2 text-[var(--secondary-text)]">Course</th>
              <th className="p-2 text-[var(--secondary-text)]">Date</th>
              <th className="p-2 text-[var(--secondary-text)]">Status</th>
              <th className="p-2 text-[var(--secondary-text)]">-</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="bg-[#39425fab] rounded-lg">
                <td className="p-2 text-[var(--principal-text)]">{order.id}</td>
                <td className="p-2 text-[var(--principal-text)]">
                  {order.course.title}
                </td>
                <td className="p-2 text-[var(--principal-text)]">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                <td className="p-2">
                  <span
                    className={`w-24 h-8 px-4 py-1 flex justify-center items-center text-base rounded-lg ${
                      order.status
                        ? "bg-green-700 text-[var(--principal-text)]"
                        : "bg-yellow-700 text-[var(--principal-text)]"
                    }`}
                  >
                    {order.status ? (
                      "Payed"
                    ) : (
                      <>
                        Pending <i className="bx bx-time"></i>
                      </>
                    )}
                  </span>
                </td>
                <td className="p-2">
                  {order.status ? (
                    <Link href={`/course/${order.courseId}`}>
                      <button className="w-24 h-8 px-4 py-1 text-xs rounded-lg bg-[var(--accent-color)] hover:bg-[var(--card-color)]">
                        Details
                      </button>
                    </Link>
                  ) : (
                    <button
                      className="w-24 h-8 px-4 py-1 text-xs rounded-lg bg-green-700 flex justify-center items-center text-center hover:bg-[var(--card-color)]"
                      onClick={() => handlePayOrder(order.id)}
                    >
                      <p className="text-[var(--principal-text)] flex justify-center items-center text-center text-sm">
                        Checkout<i className="bx bx-money text-base"></i>
                      </p>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProfileOrders;
