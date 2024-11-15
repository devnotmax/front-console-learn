// src/hoc/withAuth.tsx
"use client";
import { useAuth } from "@/contexts/authContext";
import { useEffect, ComponentType } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const withAuth = <P extends object>(Component: ComponentType<P>, requiredRole?: string) => {
  const AuthenticatedComponent = (props: P) => {
    const { dataUser } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!dataUser) {
        router.push("/login");
        return;
      }

      if (requiredRole && dataUser.user.role !== requiredRole) {
        Swal.fire({
          title: "Access Denied",
          text: "You do not have the required permissions to view this page.",
          icon: "error",
        }).then(() => {
          router.push("/course");
        });
      }
    }, [dataUser, router]);

    if (!dataUser || (requiredRole && dataUser.user.role !== requiredRole)) {
      return null;
    }

    return <Component {...(props as P)} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
