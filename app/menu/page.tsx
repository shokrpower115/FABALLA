import type { Metadata, Viewport } from "next";
import MenuBirria from "./MenuBirria";

export const metadata: Metadata = {
  title: "Menú de Birria | FABALLA",
  description: "Menú de birria de FABALLA con precios y fotos de cada platillo.",
  openGraph: {
    title: "Menú de Birria | FABALLA",
    description: "Menú de birria de FABALLA con precios y fotos de cada platillo.",
    url: "/menu",
    siteName: "FABALLA",
    locale: "es_MX",
    type: "website",
    // Al definir openGraph aquí se pierde la imagen del layout, así que se repite.
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "Orden de quesabirrias de FABALLA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Menú de Birria | FABALLA",
    description: "Menú de birria de FABALLA con precios y fotos de cada platillo.",
    images: ["/opengraph-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#9d0208",
};

// Página a la que apunta el QR de las mesas. Mantener esta ruta fija:
// si algún día se mueve, dejar una redirección para no romper los QR impresos.
export default function MenuPage() {
  return <MenuBirria />;
}
