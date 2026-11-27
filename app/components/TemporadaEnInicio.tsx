"use client";

import { useTemporada } from "../lib/useTemporada";
import SeccionTemporada from "./SeccionTemporada";

// Bloque de la página principal que solo aparece durante una temporada.
const TemporadaEnInicio = () => {
  const estado = useTemporada();
  if (!estado?.temporada) return null;

  return (
    <SeccionTemporada
      temporada={estado.temporada}
      promo={estado.promo}
      diasParaApartar={estado.diasParaApartar}
      variante="inicio"
    />
  );
};

export default TemporadaEnInicio;
