"use client";

import { useEffect, useState } from "react";
import { Gift } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { eventosGeneral, textoPromo } from "../lib/temporadas";
import { whatsappUrl } from "../lib/negocio";
import { useTemporada } from "../lib/useTemporada";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";

const SEGUNDOS_PARA_MOSTRAR = 5;
// Fuera de temporada, el aviso general vuelve a salir cada 14 días.
const DIAS_ENTRE_AVISOS_GENERALES = 14;

function yaSeMostro(clave: string, vigenciaDias: number | null) {
  try {
    const valor = localStorage.getItem(clave);
    if (!valor) return false;
    if (vigenciaDias === null) return true;
    return Date.now() - Number(valor) < vigenciaDias * 86_400_000;
  } catch {
    return false;
  }
}

function marcarMostrado(clave: string) {
  try {
    localStorage.setItem(clave, String(Date.now()));
  } catch {
    // Sin almacenamiento (modo privado): el aviso podría volver a salir, no pasa nada.
  }
}

// Ventana que aparece unos segundos después de entrar a la página principal.
// En temporada sale una sola vez por persona; el resto del año, cada 14 días.
const AvisoEventos = () => {
  const estado = useTemporada();
  const [abierto, setAbierto] = useState(false);

  const temporada = estado?.temporada ?? null;
  const promo = estado?.promo ?? null;
  const clave = estado ? (temporada ? `aviso-${temporada.id}-${estado.fecha.slice(0, 4)}` : "aviso-eventos") : null;

  useEffect(() => {
    if (!clave) return;
    const pruebaForzada = new URLSearchParams(window.location.search).has("fecha");
    if (!pruebaForzada && yaSeMostro(clave, clave === "aviso-eventos" ? DIAS_ENTRE_AVISOS_GENERALES : null)) return;

    const id = setTimeout(() => {
      setAbierto(true);
      marcarMostrado(clave);
    }, SEGUNDOS_PARA_MOSTRAR * 1000);
    return () => clearTimeout(id);
  }, [clave]);

  if (!estado) return null;

  const contenido = temporada ?? eventosGeneral;
  const verPaquetes = temporada ? `/${temporada.id}` : "#eventos";

  return (
    <Dialog open={abierto} onOpenChange={setAbierto}>
      <DialogContent aria-describedby={undefined} className="max-w-md overflow-hidden border-0 bg-tinta p-0 text-white sm:rounded-[28px]">
        <div className="relative h-40 bg-[url('/galeria/quesabirrias-orden.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-t from-tinta via-tinta/40 to-transparent" />
          <span className="absolute bottom-3 left-6 text-5xl drop-shadow-lg">{contenido.emoji}</span>
        </div>

        <div className="px-6 pb-7 pt-2">
          {temporada && <p className="text-xs font-semibold uppercase tracking-[0.3em] text-durazno">{temporada.nombre}</p>}
          <DialogTitle className="mt-2 pr-6 text-2xl font-black leading-tight">{contenido.titulo}</DialogTitle>
          <p className="mt-3 text-sm leading-6 text-white/75">{contenido.mensaje}</p>

          {promo && (
            <div className="mt-5 flex gap-3 rounded-2xl border border-naranja/50 bg-naranja/10 p-4">
              <Gift className="mt-0.5 h-5 w-5 shrink-0 text-naranja" />
              <p className="text-sm font-semibold leading-6">{textoPromo(promo)}</p>
            </div>
          )}

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={whatsappUrl(contenido.mensajeWhatsApp)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-bold text-white transition hover:-translate-y-0.5"
            >
              <FaWhatsapp className="h-5 w-5" /> {temporada ? "Apartar mi fecha" : "Cotizar por WhatsApp"}
            </a>
            <a
              href={verPaquetes}
              onClick={() => setAbierto(false)}
              className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              Ver paquetes
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AvisoEventos;
