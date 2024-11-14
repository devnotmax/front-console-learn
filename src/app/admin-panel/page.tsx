// src/pages/admin/AdminPanel.tsx
"use client";
import ReactLoading from "react-loading";
import { useState, useEffect } from "react";
import AdminPanelContainer from "@/components/admin-components/AdminPanelContainer";
import SideBarMenu from "@/components/admin-components/SideBarMenu";
import AdminSearch from "@/components/admin-components/AdminSearch";
import withAuth from "@/hoc/withAuth";

function AdminPanel() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ReactLoading type="spin" color="blue" height={50} width={50} />
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

// Envolvemos el componente en el HOC para proteger la ruta
export default withAuth(AdminPanel, "ADMIN");
