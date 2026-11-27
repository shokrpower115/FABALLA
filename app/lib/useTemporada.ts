"use client";

import { useAhora } from "./useAhora";
import { diasHasta, promoActiva, temporadaActiva, type Promo, type Temporada } from "./temporadas";

export interface EstadoTemporada {
  fecha: string;
  temporada: Temporada | null;
  promo: Promo | null;
  // Días que quedan para apartar con la promo (null si la promo no tiene fecha límite).
  diasParaApartar: number | null;
}

// Para probar cómo se ve otra fecha: faballa.com/?fecha=2026-12-15
function fechaDePrueba(): string | null {
  const valor = new URLSearchParams(window.location.search).get("fecha");
  return valor && /^\d{4}-\d{2}-\d{2}$/.test(valor) ? valor : null;
}

// null mientras la página carga en el navegador (en el build no hay "hoy").
export function useTemporada(): EstadoTemporada | null {
  const ahora = useAhora();
  if (!ahora) return null;

  const fecha = fechaDePrueba() ?? ahora.fecha;
  const temporada = temporadaActiva(fecha);
  const promo = promoActiva(temporada, fecha);
  return {
    fecha,
    temporada,
    promo,
    diasParaApartar: promo?.apartarHasta ? diasHasta(fecha, promo.apartarHasta) : null,
  };
}
