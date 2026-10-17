"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { birriaInfo, birriaMenu } from "../lib/menus/birria";
import type { MenuItem } from "../lib/menus/tipos";
import { estadoServicio } from "../lib/estado";
import { formatoHora, horarioBirria, negocio, whatsappUrl } from "../lib/negocio";
import { useAhora } from "../lib/useAhora";
import { Dialog, DialogContent, DialogTitle } from "../components/ui/dialog";

const formatoPrecio = (precio: number) => `$${precio.toLocaleString("es-MX")}`;

function EstadoHoy() {
  const ahora = useAhora();
  if (!ahora || estadoServicio(horarioBirria, ahora) !== "abierto") {
    return <p className="text-sm text-white/80">{horarioBirria.dias} · {horarioBirria.horas}</p>;
  }
  return (
    <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
      <span className="h-2 w-2 rounded-full bg-green-400" />
      Abierto hasta las {formatoHora(horarioBirria.cierra)}
    </p>
  );
}

// Mientras un platillo no tenga foto se muestra este recuadro en su lugar.
function Foto({ item, sizes, className = "" }: { item: MenuItem; sizes: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-durazno to-naranja ${className}`}>
      {item.imagen ? (
        <Image src={item.imagen} alt={item.nombre} fill sizes={sizes} className="object-cover" />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center text-5xl" aria-hidden="true">
          🍲
        </span>
      )}
    </div>
  );
}

export default function MenuBirria() {
  const [elegido, setElegido] = useState<MenuItem | null>(null);

  return (
    <main className="min-h-screen bg-crema pb-12">
      <header className="bg-vino px-4 pb-8 pt-10 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-durazno">{negocio.nombre}</p>
        <h1 className="mt-2 text-3xl font-black">{birriaInfo.title}</h1>
        <p className="mt-1 text-white/80">{birriaInfo.description}</p>
        <div className="mt-3 flex justify-center">
          <EstadoHoy />
        </div>
      </header>

      <ul className="mx-auto grid max-w-3xl grid-cols-2 gap-3 px-4 pt-6 sm:grid-cols-3 sm:gap-4">
        {birriaMenu.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setElegido(item)}
              className="flex h-full w-full flex-col overflow-hidden rounded-[20px] bg-white text-left shadow-sm transition active:scale-[0.98]"
            >
              <Foto item={item} sizes="(min-width: 640px) 240px, 50vw" className="aspect-square w-full" />
              <div className="flex flex-1 flex-col p-3">
                <p className="font-semibold leading-tight text-tinta">{item.nombre}</p>
                {item.badge && <p className="mt-1 text-xs font-semibold text-naranja-oscuro">{item.badge}</p>}
                <p className="mt-auto pt-2 text-lg font-bold text-vino">{formatoPrecio(item.precio)}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-6 max-w-3xl px-4 text-center text-sm leading-6 text-tinta/70">{birriaInfo.note}</p>

      <footer className="mx-auto mt-8 max-w-3xl px-4 text-center text-sm text-tinta/60">
        <a
          href={whatsappUrl("Hola, quiero hacer un pedido del Menú de Birria.")}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-vino"
        >
          <MessageCircle className="h-4 w-4" /> Pedidos para llevar: {negocio.telefono}
        </a>
      </footer>

      <Dialog open={elegido !== null} onOpenChange={(abierto) => !abierto && setElegido(null)}>
        <DialogContent className="max-w-md gap-0 overflow-hidden rounded-[24px] p-0 max-sm:w-[calc(100%-2rem)] [&>button:last-child]:rounded-full [&>button:last-child]:bg-white [&>button:last-child]:p-2 [&>button:last-child]:opacity-90">
          {elegido && (
            <>
              <Foto item={elegido} sizes="(min-width: 640px) 448px, 100vw" className="aspect-[4/3] w-full" />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <DialogTitle className="text-xl font-black text-tinta">{elegido.nombre}</DialogTitle>
                  <p className="shrink-0 text-xl font-bold text-vino">{formatoPrecio(elegido.precio)}</p>
                </div>
                <p className="mt-2 leading-7 text-tinta/75">{elegido.descripcion}</p>
                {elegido.badge && (
                  <span className="mt-3 inline-block rounded-full bg-naranja/15 px-3 py-1 text-xs font-semibold text-naranja-oscuro">
                    {elegido.badge}
                  </span>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
