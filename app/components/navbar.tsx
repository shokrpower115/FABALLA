"use client";

import { useEffect, useState } from "react";
import { Menu as MenuIcon, MessageCircle, X } from "lucide-react";
import { whatsappUrl } from "../lib/negocio";

const enlaces = [
  { href: "#menu", texto: "Menú" },
  { href: "#eventos", texto: "Eventos" },
  { href: "#galeria", texto: "Galería" },
  { href: "#ubicacion", texto: "Ubicación" },
  { href: "#faq", texto: "Preguntas" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    if (!abierto) return;
    const cerrarConEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setAbierto(false);
    };
    window.addEventListener("keydown", cerrarConEscape);
    return () => window.removeEventListener("keydown", cerrarConEscape);
  }, [abierto]);

  const cerrar = () => setAbierto(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-crema/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 sm:px-8 lg:px-12">
        <a href="#inicio" onClick={cerrar} className="text-xl font-black tracking-[0.2em] text-vino">
          FABALLA
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-6 text-sm font-medium text-tinta md:flex">
          {enlaces.map((enlace) => (
            <a key={enlace.href} href={enlace.href} className="transition hover:text-vino">
              {enlace.texto}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-vino px-4 py-2 text-sm font-semibold text-white transition hover:bg-rojo"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setAbierto(!abierto)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            className="rounded-full p-2.5 text-tinta transition hover:bg-tinta/10 md:hidden"
          >
            {abierto ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {abierto && (
        <nav id="menu-movil" aria-label="Principal" className="border-t border-black/5 bg-crema px-6 pb-6 pt-2 shadow-lg md:hidden">
          <ul>
            {enlaces.map((enlace) => (
              <li key={enlace.href}>
                <a href={enlace.href} onClick={cerrar} className="block border-b border-tinta/10 py-4 text-lg font-semibold text-tinta">
                  {enlace.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
