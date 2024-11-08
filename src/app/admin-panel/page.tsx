"use client";
import ReactLoading from "react-loading";
import { useAuth } from "@/contexts/authContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

//components
import AdminPanelContainer from "@/components/admin-components/AdminPanelContainer";
import SideBarMenu from "@/components/admin-components/SideBarMenu";
import AdminSearch from "@/components/admin-components/AdminSearch";

export default function AdminPanel() {
  const { dataUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

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

  if (dataUser?.user?.role !== "ADMIN") {
    return (
      <div className="h-screen flex items-center justify-center">
        {/* Puedes dejar un mensaje aquí */}
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-11 grid-rows-8 gap-4 min-h-screen">
        <div className="col-span-1 md:col-span-2 row-span-8">
          <SideBarMenu />
        </div>
        <div className="col-span-1 md:col-span-9 row-span-8 md:col-start-3 p-4">
          <div className="w-3/4">
            <AdminSearch />
          </div>
          <div className="grid grid-cols-9 grid-rows-9">
            <div className="col-span-9 row-span-8 row-start-1">
              <AdminPanelContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
