import type { Metadata } from "next";
import { Poppins, Inter, Fira_Code } from "next/font/google";
import "./globals.css";

//provider
import { AuthProvider } from "@/contexts/authContext";

// componentes
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

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["300", "400", "500", "600", "700",],
});

export const metadata: Metadata = {
  title: "ConsoLearn",
  description: "La mejor plataforma de cursos despues de Henry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={`${inter.className} ${poppins.className}`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
