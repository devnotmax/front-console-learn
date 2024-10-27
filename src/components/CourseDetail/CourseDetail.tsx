import React from "react";
import Swal from "sweetalert2";
import { Course } from "@/interfaces/ProductCard";
import UserReview from "../UserReview/userReview";
import { buyCourse, payOrder } from "@/services/BuyServices";
import { useAuth } from "@/contexts/authContext";

interface CourseDetailProps {
  course: Course;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  const { dataUser } = useAuth();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-yellow-500 ${
          index < rating ? "fill-current" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  const handleBuyCourse = async () => {
    if (!dataUser) {
      Swal.fire("Error", "Debes iniciar sesión para comprar este curso.", "error");
      return;
    }
    try {
      const response = await buyCourse(course.id);
      console.log("Detalles de la orden:", response.data);

      if (response.data && response.data.id) {
        Swal.fire({
          title: "Orden generada con éxito",
          text: "¿Deseas proceder al pago?",
          icon: "success",
          showCancelButton: true,
          confirmButtonText: "Pagar ahora",
          cancelButtonText: "Cancelar",
        }).then(async (result) => {
          if (result.isConfirmed) {
            await handlePayOrder(response.data.id);
          }
        });
      } else {
        console.error("No se recibió un ID de orden válido");
      }
    } catch (error) {
      console.error("Error al comprar el curso:", error);
      Swal.fire("Error", "Hubo un problema al generar la orden.", "error");
    }
  };

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
    <div className="container mx-auto px-4 py-6 font-inter">
      {/* Course Header */}
      <div className="flex">
        <div className="w-1/3">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-2/3 pl-8">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>

          {/* Tags */}
          <div className="flex items-center space-x-2">
            <span className="bg-[var(--primary)] text-[var(--principal-text)] text-xs font-semibold px-2 py-1 rounded-full">
              {course.technologies}
            </span>
          </div>

          {/* Price and rating */}
          <div className="mt-4 text-2xl font-bold text-[var(--foreground)]">
            ${course.price}
          </div>
          <div className="flex justify-center sm:justify-start mt-1">
            {renderStars(course.rating)}
          </div>

          {/* Purchase Button */}
          <button
            className="mt-4 bg-[var(--background)] text-white py-2 px-6 rounded-lg hover:bg-[var(--primary)]"
            onClick={handleBuyCourse}
          >
            Buy course
          </button>

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
        <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">
          Latest Reviews
        </h2>
        <UserReview />
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
