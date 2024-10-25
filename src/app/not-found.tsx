// pages/404.tsx
import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-center font-inter">
      <h1 className="text-9xl font-bold text-[var(--accent-color)]">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-black">
        Página no encontrada
      </h2>
      <p className="mt-2 text-lg text-black">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Link href="/">
        <p className="mt-6 px-6 py-3 text-white bg-[var(--primary)] rounded-lg hover:bg-[var(--accent-color)] hover:text-[var(--principal-text)] transition-all">
          Volver al inicio
        </p>
      </Link>
    </div>
  );
};

export default NotFoundPage;