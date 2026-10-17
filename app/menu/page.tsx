import type { Metadata, Viewport } from "next";
import MenuBirria from "./MenuBirria";

export const metadata: Metadata = {
  title: "Menú de Birria | FABALLA",
  description: "Menú de birria de FABALLA con precios y fotos de cada platillo.",
};

export const viewport: Viewport = {
  themeColor: "#9d0208",
};

// Página a la que apunta el QR de las mesas. Mantener esta ruta fija:
// si algún día se mueve, dejar una redirección para no romper los QR impresos.
export default function MenuPage() {
  return <MenuBirria />;
}
