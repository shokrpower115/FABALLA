import Link from "next/link";
import { whatsappUrl } from "../lib/negocio";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-crema/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link href="#inicio" className="text-xl font-black tracking-[0.2em] text-vino">
          FABALLA
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-tinta md:flex">
          <a href="#servicios" className="transition hover:text-vino">Servicios</a>
          <a href="#birria" className="transition hover:text-vino">Birria</a>
          <a href="#nocturno" className="transition hover:text-vino">Menú Nocturno</a>
          <a href="#eventos" className="transition hover:text-vino">Eventos</a>
          <a href="#ubicacion" className="transition hover:text-vino">Ubicación</a>
        </nav>

        <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="rounded-full bg-vino px-4 py-2 text-sm font-semibold text-white transition hover:bg-rojo">
          WhatsApp
        </a>
      </div>
    </header>
  );
}
