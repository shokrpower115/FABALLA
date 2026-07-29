import { ArrowUpRight, MessageCircle, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-[#1b1b1b]/10 bg-[#fff8e7] px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md">
          <p className="text-xl font-black tracking-[0.25em] text-[#9d0208]">FABALLA</p>
          <p className="mt-4 text-base leading-8 text-[#1b1b1b]/70">
            Comida mexicana con identidad, sabor auténtico y una propuesta premium para comer o celebrar.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-semibold text-[#1b1b1b]">Contacto</p>
            <a href="https://wa.me/5216671234567" target="_blank" rel="noreferrer" className="mt-3 flex items-center gap-2 text-sm text-[#1b1b1b]/70 transition hover:text-[#9d0208]">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="mt-2 flex items-center gap-2 text-sm text-[#1b1b1b]/70 transition hover:text-[#9d0208]">
              <Send className="h-4 w-4" /> Instagram
            </a>
          </div>
          <div>
            <p className="font-semibold text-[#1b1b1b]">Dirección</p>
            <p className="mt-3 text-sm text-[#1b1b1b]/70">Culiacán, Sinaloa</p>
          </div>
          <div>
            <p className="font-semibold text-[#1b1b1b]">Horario</p>
            <p className="mt-3 text-sm text-[#1b1b1b]/70">Lunes a sábado: menú nocturno<br />Viernes a domingo: birria</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-[#1b1b1b]/10 pt-6 text-sm text-[#1b1b1b]/60 md:flex-row md:items-center md:justify-between">
        <p>© 2026 FABALLA. Todos los derechos reservados.</p>
        <a href="#inicio" className="inline-flex items-center gap-2 font-semibold text-[#9d0208]">
          Volver arriba <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
