import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

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

const titulo = "FABALLA | Birria, menú nocturno y eventos";
const descripcion =
  "FABALLA ofrece birria los fines de semana, menú nocturno de lunes a viernes y eventos privados con taquiza, hotdogs y combos.";

export const metadata: Metadata = {
  // Dominio de producción: las URLs de la vista previa (og:image, etc.) se arman a partir de aquí.
  metadataBase: new URL("https://faballa.com"),
  title: titulo,
  description: descripcion,
  // Vista previa al compartir el link (WhatsApp, Facebook, etc.).
  // La imagen sale de app/opengraph-image.jpg.
  openGraph: {
    title: titulo,
    description: descripcion,
    url: "/",
    siteName: "FABALLA",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descripcion,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body className="bg-crema text-tinta antialiased">
        {children}
      </body>
    </html>
  );
}