"use client";
import ReactLoading from "react-loading";
import { useAuth } from "@/contexts/authContext";
import SideBarMenu from "@/components/admin-components/SideBarMenu";
import AdminReviews from "@/components/admin-components/AdminReviews";
import Stadistics from "@/components/admin-components/Stadistics";
import Sells from "@/components/admin-components/Sells";
import PurchaseStatistics from "@/components/admin-components/Chart";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function AdminPanel() {
  const { dataUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Simular carga de datos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (dataUser && dataUser.user.role !== "ADMIN") {
      Swal.fire({
        title: "Oops! You need to be admin to access this page",
        text: "You need to purchase this course to access it.",
        icon: "error",
      }).then(() => {
        router.push("/course");
      });
    }
  }, [dataUser, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ReactLoading type="spin" color="blue" height={50} width={50} />
      </div>
    );
  }

  // Si el usuario no es admin, mostramos un contenedor vacío para mantener el layout
  if (dataUser?.user?.role !== "ADMIN") {
    return (
      <div className="h-screen flex items-center justify-center">
        {/* Aquí puedes mostrar algún mensaje o dejar el contenedor vacío */}
      </div>
    );
  }

  return (
    <div className="h-screen overflow-hidden">
      <div className="grid grid-cols-11 grid-rows-8 gap-4 h-full">
        <div className="col-span-2 row-span-8">
          <SideBarMenu />
        </div>
        <div className="col-span-9 row-span-8 col-start-3 p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <AdminReviews />
            </div>
            <div className="col-span-1">
              <Stadistics />
            </div>
            <div className="col-span-1">
              <Sells />
            </div>
            <div className="col-span-1">
              <PurchaseStatistics />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
