"use client";

import { ArrowRight } from "lucide-react";
import { eventosGeneral, fechaLegible } from "../lib/temporadas";
import { useTemporada } from "../lib/useTemporada";

// Franja delgada arriba de todo. Todo el año invita a cotizar eventos;
// en temporada cambia al mensaje de la temporada y lleva a su página.
const FranjaEventos = () => {
  const estado = useTemporada();
  const temporada = estado?.temporada;
  const promo = estado?.promo;

  const texto = temporada
    ? promo
      ? `${temporada.emoji} ${temporada.nombre}: ${promo.apartarHasta ? `aparta antes del ${fechaLegible(promo.apartarHasta)}` : "aparta tu fecha"} y te regalamos el agua`
      : `${temporada.emoji} ${temporada.nombre}: aparta tu fecha`
    : `${eventosGeneral.emoji} ${eventosGeneral.titulo} Cotiza tu taquiza, hotdogs o birria`;

  return (
    <a
      href="#eventos"
      className="group flex min-h-10 items-center justify-center gap-2 bg-vino px-4 py-2 text-center text-xs font-semibold text-white transition hover:bg-rojo sm:text-sm"
    >
      <span>{texto}</span>
      <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" />
    </a>
  );
};

export default FranjaEventos;
