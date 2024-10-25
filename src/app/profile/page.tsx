"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/authContext";
import React from "react";
import Image from "next/image";

const UserWidget = () => {
  const { dataUser, logout } = useAuth(); // Obtener los datos del usuario desde el contexto

  return (
    <>
      <div className="space-x-2 w-full h-screen p-12 flex flex-col items-center gap-4">
        <div className="w-full h-1/4 bg-[var(--background)] rounded-lg">
          <div className="grid grid-cols-10 grid-rows-2">
            <div className="row-span-2 p-4">
              {" "}
              <div className="">
                {dataUser?.user.image ? (
                  <Image
                    src={dataUser.user.image} // Eliminar las comillas alrededor de la variable
                    alt="User Image"
                    width={150}
                    height={150}
                    className="rounded-full"
                  />
                ) : (
                  <p>No image available</p>
                )}
              </div>
            </div>
            <div className="col-span-9 row-span-2 text-white p-8">
              <h2 className="text-2xl font-semibold">{dataUser?.user.name}</h2>
              <p className="text-sm text-[var(--foreground)]">
                {dataUser?.user.email}
              </p>
              <p className="text-sm text-[var(--foreground)]">
                {dataUser?.user.phone}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-3/4 bg-[var(--background)] rounded-lg">
          <div className="p-4 text-white">
            <h3 className="text-xl font-medium">Mis ordenes</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserWidget;
