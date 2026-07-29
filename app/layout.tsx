import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FABALLA | Birria, menú nocturno y eventos",
  description: "FABALLA ofrece birria los fines de semana, menú nocturno de lunes a sábado y eventos privados con taquiza, hotdogs y combos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body className="bg-[#fff8e7] text-[#1b1b1b] antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}