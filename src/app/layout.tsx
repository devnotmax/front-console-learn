import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

// Contexto de autenticación
import { AuthProvider } from "@/contexts/authContext";
import { Providers } from "@/redux/providers";

// Componentes
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ConsoLearn",
  description: "La mejor plataforma de cursos después de Henry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${inter.className} ${poppins.className} min-h-screen`}
        >
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </body>
      </html>
    </AuthProvider>
  );
}
