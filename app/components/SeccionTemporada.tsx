"use client";

import { ArrowRight, CalendarClock, Gift } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { fechaLegible, textoPromo, type Promo, type Temporada } from "../lib/temporadas";
import { whatsappUrl } from "../lib/negocio";

interface SeccionTemporadaProps {
  temporada: Temporada;
  promo: Promo | null;
  diasParaApartar: number | null;
  // "inicio": bloque dentro de la página principal. "pagina": portada de faballa.com/<temporada>
  // (ahí el título es el h1). "Ver paquetes" abre los paquetes de la página de la temporada.
  variante: "inicio" | "pagina";
}

function textoCuentaRegresiva(dias: number, limite: string) {
  if (dias === 0) return "¡Hoy es el último día para apartar con regalo!";
  if (dias === 1) return "¡Mañana es el último día para apartar con regalo!";
  return `Faltan ${dias} días · aparta antes del ${fechaLegible(limite)}`;
}

const SeccionTemporada = ({ temporada, promo, diasParaApartar, variante }: SeccionTemporadaProps) => {
  const Titulo = variante === "pagina" ? "h1" : "h2";

  return (
    <section id="temporada" className="relative isolate overflow-hidden bg-tinta px-6 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/galeria/tabla-birria.webp')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-vino/90 via-tinta/90 to-tinta" />
        {/* Decoración de temporada */}
        <span aria-hidden className="absolute -right-6 -top-6 select-none text-[10rem] opacity-10 sm:text-[14rem]">
          {temporada.emoji}
        </span>
      </div>

      <div
        className="aparecer mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-durazno">
            {temporada.emoji} Temporada de {temporada.nombre.toLowerCase()}
          </p>
          <Titulo className="mt-4 text-4xl font-black leading-[1.05] sm:text-5xl">{temporada.titulo}</Titulo>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">{temporada.mensaje}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {temporada.ideas.map((idea) => (
              <li key={idea} className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium">
                {idea}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl(temporada.mensajeWhatsApp)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 font-bold text-white shadow-[0_15px_40px_rgba(37,211,102,0.3)] transition hover:-translate-y-0.5"
            >
              <FaWhatsapp className="h-5 w-5" /> Apartar mi fecha
            </a>
            <a
              href={variante === "pagina" ? "#eventos" : `/${temporada.id}#eventos`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 font-semibold backdrop-blur transition hover:bg-white/20"
            >
              Ver paquetes de temporada <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {promo && (
          <div className="rounded-[28px] border-2 border-naranja/60 bg-tinta/70 p-7 backdrop-blur">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-naranja/20">
              <Gift className="h-6 w-6 text-naranja" />
            </div>
            <p className="mt-5 text-2xl font-black leading-tight">{textoPromo(promo)}</p>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Aplica en taquiza, hotdogs, combos y birria. Si tu paquete ya trae agua, te regalamos otra.
            </p>
            {promo.apartarHasta && diasParaApartar !== null && (
              <p className="mt-6 flex items-center gap-2 rounded-full bg-naranja px-4 py-2 text-sm font-bold text-tinta">
                <CalendarClock className="h-4 w-4 shrink-0" />
                {textoCuentaRegresiva(diasParaApartar, promo.apartarHasta)}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default SeccionTemporada;
