import React, { useEffect, useState } from "react";
import { getOrders } from "@/services/OrderService";
import { useAuth } from "@/contexts/authContext";
import { payOrder, PayOrderResponse } from "@/services/BuyServices";

interface Order {
  id: string;
  courseId: string;
  createdAt: string;
  status: boolean;
  details: string | null;
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

  return (
    <div className="bg-[var(--card-color)] p-4 rounded-lg">
      <h3 className="text-lg font-medium mb-4 text-[var(--principal-text)]">
        Order History
      </h3>
      {isLoading ? (
        <p>Loading orders...</p>
      ) : (
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="p-2 text-[var(--secondary-text)]">Nº Order</th>
              <th className="p-2 text-[var(--secondary-text)]">Course</th>
              <th className="p-2 text-[var(--secondary-text)]">Date</th>
              <th className="p-2 text-[var(--secondary-text)]">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="p-2 text-[var(--primary)]">{order.id}</td>
                <td className="p-2 text-[var(--primary)]">{order.courseId}</td>
                <td className="p-2 text-[var(--primary)]">
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
                    <button className="w-24 h-8 px-4 py-1 text-xs rounded-lg bg-[var(--accent-color)]">
                      Ver detalle
                    </button>
                  ) : (
                    <button className="w-24 h-8 px-4 py-1 text-xs rounded-lg bg-green-700 flex justify-center items-center text-center hover:bg-[var(--accent-color)]">
                      <p className="text-[var(--principal-text)] flex justify-center items-center text-center text-base">
                        Pay <i className="bx bx-money text-base"></i>
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
