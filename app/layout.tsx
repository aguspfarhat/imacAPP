
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import SocialSidebar from "@/components/sideBar";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tudominio.com"),
  title: "IMAC - Imágenes médicas en Tucumán",
  description:
    "Centro de diagnóstico por imágenes en Tucumán. TAC, RMN, ecografías y radiografías digitales.",
  keywords: [
    "imágenes médicas Tucumán",
    "resonancia magnética Tucumán",
    "tomografía Tucumán",
    "ecografías Tucumán",
  ],
  openGraph: {
    title: "IMAC - Diagnóstico por imágenes",
    description: "Centro médico en Tucumán",
    url: "https://tudominio.com",
    siteName: "IMAC",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={geistSans.variable}>
      <body
        className="
          bg-white 
          font-sans 
          min-h-screen 
          antialiased
        "
      >
         <ScrollToTop />
         <Navbar />
         <SocialSidebar />
        {children}
      </body>
    </html>
  );
}