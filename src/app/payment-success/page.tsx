"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/contexts/authContext";

const PaymentContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { dataUser } = useAuth();

  useEffect(() => {
    const token = searchParams.get("token");
    
    // Verifica que el usuario esté autenticado y el token sea válido
    if (!dataUser || token !== "ConsoLearn") {
      router.push("/"); // Redirige al usuario si no tiene acceso
    }
  }, [dataUser, router, searchParams]);

  return (
    <div className="container mx-auto mt-20 text-center">
      <h1 className="text-2xl font-bold text-[var(--text-color)]">Payment Successful!</h1>
      <p className="mt-4 text-[var(--secondary-text)]">
        Thank you for your purchase. You can now access your content.
      </p>
      <button
        onClick={() => router.push("/course-content")}
        className="mt-6 px-4 py-2 bg-[var(--primary-color)] text-[var(--text-color)] rounded-lg hover:bg-[var(--secondary-color)]"
      >
        Go to Course Content
      </button>
    </div>
  );
};

const PaymentSuccess = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentContent />
    </Suspense>
  );
};

export default PaymentSuccess;
