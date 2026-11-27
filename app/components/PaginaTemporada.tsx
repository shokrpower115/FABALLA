"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { temporadas } from "../lib/temporadas";
import { useTemporada } from "../lib/useTemporada";
import SeccionTemporada from "./SeccionTemporada";
import Eventos from "./Eventos";
import WhatsAppButton from "./WhatsAppButton";

// Página propia de una temporada (faballa.com/diciembre, faballa.com/reyes).
// Fuera de su temporada manda a la sección de eventos de la página principal,
// así los links compartidos nunca quedan rotos.
const PaginaTemporada = ({ id }: { id: string }) => {
  const temporada = temporadas.find((t) => t.id === id)!;
  const estado = useTemporada();
  const router = useRouter();
  const vigente = estado?.temporada?.id === id;

  useEffect(() => {
    if (estado && !vigente) router.replace("/#eventos");
  }, [estado, vigente, router]);

  // Al llegar con #eventos (desde "Ver paquetes"), el recuadro de la promo aparece después
  // de cargar y empuja los paquetes hacia abajo: volvemos a acomodar la vista en ellos.
  useEffect(() => {
    if (vigente && window.location.hash === "#eventos") {
      document.getElementById("eventos")?.scrollIntoView();
    }
  }, [vigente]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/5 bg-crema/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 sm:px-8 lg:px-12">
          <Link href="/" className="text-xl font-black tracking-[0.2em] text-vino">
            FABALLA
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-tinta transition hover:text-vino">
            <ArrowLeft className="h-4 w-4" /> Ir al inicio
          </Link>
        </div>
      </header>

      <main>
        <SeccionTemporada
          temporada={temporada}
          promo={vigente ? estado.promo : null}
          diasParaApartar={vigente ? estado.diasParaApartar : null}
          variante="pagina"
        />
        <Eventos />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default PaginaTemporada;
