import { ArrowUpRight } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { horarioBirria, horarioNocturno, negocio, whatsappUrl } from "../lib/negocio";

const Footer = () => {
  return (
    <footer className="border-t border-tinta/10 bg-crema px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md">
          <p className="text-xl font-black tracking-[0.25em] text-vino">FABALLA</p>
          <p className="mt-4 text-base leading-8 text-tinta/70">
            Comida mexicana con identidad, sabor auténtico y una propuesta familiar para comer o celebrar.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-semibold text-tinta">Contacto</p>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-center gap-2 text-sm text-tinta/70 transition hover:text-vino"
            >
              <FaWhatsapp className="h-4 w-4" />
              WhatsApp
            </a>

            <a
              href={negocio.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center gap-2 text-sm text-tinta/70 transition hover:text-vino"
            >
              <FaInstagram className="h-4 w-4" />
              Instagram
            </a>

            <a
              href={negocio.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center gap-2 text-sm text-tinta/70 transition hover:text-vino"
            >
              <FaFacebook className="h-4 w-4" />
              Facebook
            </a>
          </div>
          <div>
            <p className="font-semibold text-tinta">Dirección</p>
            <p className="mt-3 text-sm text-tinta/70">{negocio.direccion}</p>
          </div>
          <div>
            <p className="font-semibold text-tinta">Horarios</p>
            {[horarioNocturno, horarioBirria].map((horario) => (
              <p key={horario.nombre} className="mt-3 text-sm text-tinta/70">
                <span className="font-medium text-tinta">{horario.nombre}</span>
                <br />
                {horario.dias}, {horario.horas}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-tinta/10 pt-6 text-sm text-tinta/60 md:flex-row md:items-center md:justify-between">
        <p>© 2026 FABALLA. Todos los derechos reservados.</p>
        <a href="#inicio" className="inline-flex items-center gap-2 font-semibold text-vino">
          Volver arriba <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
