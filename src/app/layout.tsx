import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { PetProvider } from "@/context/PetContext";

export const metadata: Metadata = {
  title: "Rincón de Kaisita",
  description:
    "Aplicación realizada por Cristobal Hiza para su querida perrita Kai",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <PetProvider>
          <ToastContainer position="top-right" autoClose={3000} />
          {children}
        </PetProvider>
      </body>
    </html>
  );
}
