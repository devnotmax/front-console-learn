// pages/404.tsx
import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
return (
<div className="flex flex-col items-center justify-center min-h-screen bg-[#28262c] text-center">
    <h1 className="text-9xl font-bold text-[#998fc7]">404</h1>
    <h2 className="mt-4 text-2xl font-semibold text-[#f9f5ff]">
    Página no encontrada
    </h2>
    <p className="mt-2 text-lg text-black">
    Lo sentimos, la página que estás buscando no existe.
    </p>
    <Link href="/">
    <p className="mt-6 px-6 py-3 text-[#000100] bg-[#d4c2fc] rounded-lg hover:bg-[#731dd8] hover:text-[#f9f5ff] transition-all">
        Volver al inicio
    </p>
    </Link>
</div>
);
};

export default NotFoundPage;
