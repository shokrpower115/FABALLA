"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Gift, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { eventosGeneral, textoPromo } from "../lib/temporadas";
import { whatsappUrl } from "../lib/negocio";
import { useTemporada } from "../lib/useTemporada";
import { Dialog, DialogClose, DialogContent, DialogTitle } from "./ui/dialog";

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
//
// Al abrirse agrega un paso al historial del navegador: así el botón "regresar"
// del teléfono solo cierra la ventana en lugar de sacar a la persona del sitio.
const AvisoEventos = () => {
  const estado = useTemporada();
  const [abierto, setAbierto] = useState(false);
  // true mientras el paso extra del historial siga existiendo.
  const pasoEnHistorial = useRef(false);

  const temporada = estado?.temporada ?? null;
  const promo = estado?.promo ?? null;
  const clave = estado ? (temporada ? `aviso-${temporada.id}-${estado.fecha.slice(0, 4)}` : "aviso-eventos") : null;

  useEffect(() => {
    if (!clave) return;
    const pruebaForzada = new URLSearchParams(window.location.search).has("fecha");
    if (!pruebaForzada && yaSeMostro(clave, clave === "aviso-eventos" ? DIAS_ENTRE_AVISOS_GENERALES : null)) return;

    const id = setTimeout(() => {
      window.history.pushState({ avisoEventos: true }, "");
      pasoEnHistorial.current = true;
      setAbierto(true);
      marcarMostrado(clave);
    }, SEGUNDOS_PARA_MOSTRAR * 1000);
    return () => clearTimeout(id);
  }, [clave]);

  // Botón "regresar" del teléfono o del navegador: el paso extra ya se consumió, solo cerramos.
  useEffect(() => {
    if (!abierto) return;
    const alRegresar = () => {
      pasoEnHistorial.current = false;
      setAbierto(false);
    };
    window.addEventListener("popstate", alRegresar);
    return () => window.removeEventListener("popstate", alRegresar);
  }, [abierto]);

  // Cerrar con la X, "Ahora no", tocando afuera o con Escape: quitamos el paso extra del historial.
  const cambiarAbierto = useCallback((valor: boolean) => {
    if (valor) return;
    setAbierto(false);
    if (pasoEnHistorial.current) {
      pasoEnHistorial.current = false;
      window.history.back();
    }
  }, []);

  if (!estado) return null;

  const contenido = temporada ?? eventosGeneral;

  // "Ver paquetes" reemplaza el paso extra del historial, para que después "regresar"
  // no tenga que presionarse dos veces.
  const irAEventos = (evento: React.MouseEvent<HTMLAnchorElement>) => {
    evento.preventDefault();
    pasoEnHistorial.current = false;
    if (temporada) {
      // En temporada: a la página de la temporada, abriendo directo en los paquetes.
      window.location.replace(`/${temporada.id}${window.location.search}#eventos`);
      return;
    }
    // Fuera de temporada: baja a la sección de eventos de esta misma página.
    window.history.replaceState(window.history.state, "", `${window.location.search}#eventos`);
    setAbierto(false);
    document.getElementById("eventos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Dialog open={abierto} onOpenChange={cambiarAbierto}>
      <DialogContent
        aria-describedby={undefined}
        sinBotonCerrar
        className="max-w-md overflow-hidden border-0 bg-tinta p-0 text-white sm:rounded-[28px]"
      >
        <div className="relative h-40 bg-[url('/galeria/quesabirrias-orden.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-t from-tinta via-tinta/40 to-transparent" />
          <span className="absolute bottom-3 left-6 text-5xl drop-shadow-lg">{contenido.emoji}</span>
          <DialogClose
            aria-label="Cerrar"
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80"
          >
            <X className="h-5 w-5" />
          </DialogClose>
        </div>

        <div className="px-6 pb-6 pt-2">
          {temporada && <p className="text-xs font-semibold uppercase tracking-[0.3em] text-durazno">{temporada.nombre}</p>}
          <DialogTitle className="mt-2 text-2xl font-black leading-tight">{contenido.titulo}</DialogTitle>
          <p className="mt-3 text-sm leading-6 text-white/75">{contenido.mensaje}</p>

          {promo && (
            <div className="mt-5 flex gap-3 rounded-2xl border border-naranja/50 bg-naranja/10 p-4">
              <Gift className="mt-0.5 h-5 w-5 shrink-0 text-naranja" />
              <p className="text-sm font-semibold leading-6">{textoPromo(promo)}</p>
            </div>
          )}

          <div className="mt-6 flex gap-3">
            <a
              href={temporada ? `/${temporada.id}#eventos` : "#eventos"}
              onClick={irAEventos}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-naranja px-6 py-3.5 font-bold text-tinta shadow-[0_12px_30px_rgba(247,127,0,0.35)] transition hover:-translate-y-0.5 hover:bg-naranja-claro"
            >
              Ver paquetes <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={whatsappUrl(contenido.mensajeWhatsApp)}
              target="_blank"
              rel="noreferrer"
              aria-label="Escribir por WhatsApp"
              title="Escribir por WhatsApp"
              className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-whatsapp text-white transition hover:-translate-y-0.5"
            >
              <FaWhatsapp className="h-6 w-6" />
            </a>
          </div>

          <DialogClose className="mt-4 w-full py-2 text-center text-sm font-medium text-white/60 underline-offset-4 transition hover:text-white hover:underline">
            Ahora no, seguir viendo
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AvisoEventos;
