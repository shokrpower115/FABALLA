import type { Metadata } from "next";
import { temporadas } from "./temporadas";

// Título, descripción e imagen para compartir la página de una temporada.
export function metadataTemporada(id: string): Metadata {
  const t = temporadas.find((temporada) => temporada.id === id)!;
  const titulo = `${t.titulo} ${t.emoji} | FABALLA`;
  const descripcion = t.promo
    ? `${t.mensaje} Aparta tu fecha y te regalamos un ${t.promo.regalo}.`
    : t.mensaje;
  const imagen = { url: t.imagen, width: 1200, height: 630, alt: `${t.nombre} con FABALLA` };

  return {
    title: titulo,
    description: descripcion,
    openGraph: {
      title: titulo,
      description: descripcion,
      url: `/${t.id}`,
      siteName: "FABALLA",
      locale: "es_MX",
      type: "website",
      images: [imagen],
    },
    twitter: {
      card: "summary_large_image",
      title: titulo,
      description: descripcion,
      images: [t.imagen],
    },
  };
}
