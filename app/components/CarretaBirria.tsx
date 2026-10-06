"use client";

import { Check, Info } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { carretaBirria, paquetesBirria } from "../lib/eventos/birria";
import { negocio, whatsappUrl } from "../lib/negocio";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";

const formatoPrecio = (precio: number) => `$${precio.toLocaleString("es-MX")}`;

interface CarretaBirriaProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CarretaBirria = ({ open, onOpenChange }: CarretaBirriaProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent aria-describedby={undefined} className="max-h-[90vh] max-w-5xl overflow-hidden border-0 bg-tinta p-0 text-white sm:rounded-[32px]">
        <div className="max-h-[90vh] overflow-y-auto px-5 py-10 sm:px-8 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-naranja">🍲 Birria para eventos</p>
          <DialogTitle className="mt-3 pr-8 text-3xl font-black sm:text-4xl">{carretaBirria.titulo}</DialogTitle>
          <p className="mt-2 text-lg text-white/70">{carretaBirria.subtitulo}</p>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {paquetesBirria.map((paquete) => (
              <article key={paquete.id} className="flex flex-col rounded-[24px] border border-white/10 bg-white/5 p-5 sm:p-6">
                <h4 className="text-xl font-bold">{paquete.nombre}</h4>
                {paquete.detalle && <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-durazno">{paquete.detalle}</p>}

                <ul className="mt-5 flex-1">
                  {paquete.opciones.map((opcion) => (
                    <li key={opcion.cantidad} className="flex items-center justify-between gap-4 border-b border-white/10 py-3 last:border-0">
                      <span className="text-sm text-white/80">{opcion.cantidad}</span>
                      <span className="shrink-0 text-xl font-black text-naranja">{formatoPrecio(opcion.precio)}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappUrl(`${carretaBirria.mensajeWhatsApp}: ${paquete.nombre}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-whatsapp/50 px-4 py-2.5 text-sm font-semibold text-whatsapp transition hover:bg-whatsapp hover:text-white"
                >
                  <FaWhatsapp className="h-4 w-4" /> Cotizar este paquete
                </a>
              </article>
            ))}
          </div>
          <p className="mt-3 text-xs text-white/50">Precios en pesos mexicanos (MXN).</p>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-durazno">Todos los paquetes incluyen</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {carretaBirria.incluye.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-naranja" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 rounded-[24px] border-2 border-naranja/60 bg-naranja/10 p-6">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-naranja" />
              <div>
                <p className="font-semibold">Nota importante</p>
                <p className="mt-2 text-sm leading-7 text-white/85">{carretaBirria.nota}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-5 text-center">
            <p className="text-2xl font-black sm:text-3xl">{carretaBirria.frase}</p>
            <a
              href={whatsappUrl(carretaBirria.mensajeWhatsApp)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-bold text-white shadow-[0_15px_40px_rgba(37,211,102,0.3)] transition hover:-translate-y-0.5 sm:w-auto"
            >
              <FaWhatsapp className="h-6 w-6" /> Cotiza tu evento por WhatsApp
            </a>
            <p className="text-sm text-white/60">{negocio.telefono}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CarretaBirria;
