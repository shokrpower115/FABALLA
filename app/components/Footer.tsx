import { ArrowUpRight, MessageCircle, Send } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-[#1b1b1b]/10 bg-[#fff8e7] px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md">
          <p className="text-xl font-black tracking-[0.25em] text-[#9d0208]">FABALLA</p>
          <p className="mt-4 text-base leading-8 text-[#1b1b1b]/70">
            Comida mexicana con identidad, sabor auténtico y una propuesta familiar para comer o celebrar.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-semibold text-[#1b1b1b]">Contacto</p>

            <a
              href="https://wa.me/5216673342261"
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-center gap-2 text-sm text-[#1b1b1b]/70 transition hover:text-[#9d0208]"
            >
              <FaWhatsapp className="h-4 w-4" />
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/taqueria_faballa?igsh=MXByOXpha3E3bGdvZg=="
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center gap-2 text-sm text-[#1b1b1b]/70 transition hover:text-[#9d0208]"
            >
              <FaInstagram className="h-4 w-4" />
              Instagram
            </a>

            <a
              href="https://www.facebook.com/share/17x6pBpT4x/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center gap-2 text-sm text-[#1b1b1b]/70 transition hover:text-[#9d0208]"
            >
              <FaFacebook className="h-4 w-4" />
              Facebook
            </a>
          </div>
          <div>
            <p className="font-semibold text-[#1b1b1b]">Dirección</p>
            <p className="mt-3 text-sm text-[#1b1b1b]/70">2500 C. Misión San Luis Rey, Culiacán Rosales, Sinaloa</p>
          </div>
          <div>
            <p className="font-semibold text-[#1b1b1b]">Horarios</p>
                <p className="mt-1 text-sm text-[#1b1b1b]/70">Menú Nocturno: lunes a Viernes  .</p>
                <p className="mt-1 text-sm text-[#1b1b1b]/70">Horario: 7 P.M a 11 P.M.</p>
                <p className="mt-1 text-sm text-[#1b1b1b]/70">Birria: Viernes a Domingo  .</p>
                <p className="mt-1 text-sm text-[#1b1b1b]/70">Horario: 7 A.M a 1 P.M.</p>
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
