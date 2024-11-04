import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Course } from "@/interfaces/ProductCard";
import { buyCourse, payOrder } from "@/services/BuyServices";
import { getMyCourses } from "@/services/CourseServices";
import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/navigation";
import ReviewForm from "../UserReview/ReviewForm";
import ReviewCourse from "../UserReview/ReviewCourse";
import { getOrders } from "@/services/OrderService";
import { IOrderDetails } from "@/interfaces/Orders";

interface CourseDetailProps {
  course: Course;
}

interface Order {
  id: string;
  userId: string;
  status: boolean;
  courseId: string;
  createdAt: string;
  updatedAt: string;
  details: IOrderDetails[];
  course: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    technologies: string[];
    price: number;
    rating: number;
    isfree: boolean;
    isAvailable: boolean;
  };
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  const { dataUser } = useAuth();
  const router = useRouter();
  const [isPurchased, setIsPurchased] = useState(false);
  const [pendingOrder, setPendingOrder] = useState<Order | null>(null);
  const [reviewRefreshKey, setReviewRefreshKey] = useState(0); // Estado para refrescar ReviewsContainer

  useEffect(() => {
    // Función para verificar si el curso ha sido comprado o si hay una orden pendiente
    const checkIfPurchased = async () => {
      if (dataUser) {
        const purchasedCourses = await getMyCourses();
        const purchased = purchasedCourses.some(
          (purchasedCourse) => purchasedCourse.id === course.id
        );
        setIsPurchased(purchased);

        // Obtener las órdenes del usuario
        const orders: Order[] = await getOrders();
        const pending = orders.find(
          (order) => order.courseId === course.id && !order.status
        );
        setPendingOrder(pending || null);
      }
    };
    checkIfPurchased();
  }, [dataUser, course.id]);

  const handleBuyCourse = async () => {
    if (!dataUser) {
      Swal.fire("Error", "Please login to buy the course.", "error");
      router.push("/login");
      return;
    }
    try {
      const response = await buyCourse(course.id);
      console.log("Detalles de la orden:", response.data);

      if (response.data && response.data.id) {
        Swal.fire({
          title: "Order generated successfully",
          text: "Do you want to proceed to payment?",
          icon: "success",
          showCancelButton: true,
          confirmButtonText: "Pay Now",
          cancelButtonText: "Cancel",
        }).then(async (result) => {
          if (result.isConfirmed) {
            await handlePayOrder(response.data.id);
          }
        });
      } else {
        console.error("No valid order ID received");
      }
    } catch (error) {
      console.error("Error when purchasing the course", error);
      Swal.fire("Error", "There was a problem generating the order.", "error");
    }
  };

  const handlePayOrder = async (orderId: string) => {
    try {
      const response = await payOrder(orderId);
      console.log("Redirecting to checkout:", response.url);
      if (response.url) {
        window.open(response.url, "_blank");
      } else {
        console.error("URL de checkout no encontrada en la respuesta");
      }
    } catch (error) {
      console.error("Error when processing the payment:", error);
      Swal.fire(
        "Error",
        "There was a problem processing the payment.",
        "error"
      );
    }
  };

  const handleReviewSubmitted = () => {
    // Incrementa el valor de reviewRefreshKey para refrescar ReviewsContainer
    setReviewRefreshKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="container mx-auto px-4 py-6 font-inter">
      {/* Course Header */}
      <div className="flex">
        {/* Course Image */}
        <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-2/3 pl-8">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>

          {/* Tags */}
          <div className="flex items-center space-x-2">
            <span className="bg-[var(--primary)] text-[var(--principal-text)] text-xs font-semibold px-2 py-1 rounded-full">
              {Array.isArray(course.technologies)
                ? course.technologies.join(", ")
                : course.technologies}
            </span>
          </div>

          {/* Price and rating */}
          <div className="mt-4 text-2xl font-bold text-[var(--foreground)]">
            ${course.price}
          </div>

          {/* Purchase Button, Pending Order, or Purchased Message */}
          {isPurchased ? (
            <div>
              <div className="mt-4 text-green-200 font-semibold opacity-45">
                <span className="bg-green-700 p-2 rounded-lg">
                  Course already purchased
                </span>
              </div>
              <button
                onClick={() => router.push(`/course/${course.id}/content`)}
                className="mt-4 bg-[var(--background)] text-white py-2 px-6 rounded-lg hover:bg-[var(--primary)] flex justify-center items-center gap-1"
              >
                Watch course <i className="bx bxs-log-in-circle text-xl"></i>
              </button>
            </div>
          ) : pendingOrder ? (
            <button
              onClick={() => handlePayOrder(pendingOrder.id)}
              className="mt-4 bg-yellow-500 text-yellow-700 font-semibold py-2 px-6 rounded-lg hover:bg-yellow-600 hover:text-yellow-300 shadow-md"
            >
              Pending order <i className="bx bx-info-circle"></i>
            </button>
          ) : (
            <button
              className="mt-4 bg-[var(--background)] text-white py-2 px-6 rounded-lg hover:bg-[var(--primary)]"
              onClick={handleBuyCourse}
            >
              Buy course
            </button>
          )}

          {/* FAQ Section */}
          <div className="mt-6 border-t pt-4">
            <h3 className="font-semibold text-lg text-[var(--primary)]">
              ¿Does the course include certification?
            </h3>
            <p className=" mt-2 text-[var(--foreground)]">
              Yes, all of our courses include an official certification once you
              have successfully completed the program.
            </p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
          Last reviews
        </h3>

        <div className="container p-6 mx-auto">
          <ReviewCourse courseId={course.id} key={reviewRefreshKey} />
        </div>

        {isPurchased && (
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
              Leave a Review
            </h3>

            <ReviewForm
              courseId={course.id}
              onReviewSubmitted={handleReviewSubmitted}
            />
          </div>
        )}
      </div>

      {/* Newsletter Subscription */}
      <div className="mt-10 text-center">
        <h2 className="text-xl font-bold mb-4 text-[var(--foreground)]">
          Follow the latest trends
        </h2>
        <p className="text-[var(--foreground)] mb-4">
          With our daily newsletter
        </p>
        <form className="flex justify-center items-center">
          <input
            type="email"
            placeholder="you@example.com"
            className="border p-2 rounded-l-lg focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[var(--accent-color)] text-white py-2 px-4 rounded-r-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseDetail;
