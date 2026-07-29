import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#fff8e7]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link href="#inicio" className="text-xl font-black tracking-[0.2em] text-[#9d0208]">
          FABALLA
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[#1b1b1b] md:flex">
          <a href="#servicios" className="transition hover:text-[#9d0208]">Servicios</a>
          <a href="#birria" className="transition hover:text-[#9d0208]">Birria</a>
          <a href="#nocturno" className="transition hover:text-[#9d0208]">Menú Nocturno</a>
          <a href="#eventos" className="transition hover:text-[#9d0208]">Eventos</a>
          <a href="#ubicacion" className="transition hover:text-[#9d0208]">Ubicación</a>
        </nav>

        <a href="https://wa.me/5216671234567" target="_blank" rel="noreferrer" className="rounded-full bg-[#9d0208] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#d00000]">
          WhatsApp
        </a>
      </div>
    </header>
  );
}
