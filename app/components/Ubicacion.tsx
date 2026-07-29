import { MapPin, Clock3, ArrowUpRight } from "lucide-react";
import { horarios } from "../lib/horarios";

const Ubicacion = () => {
  return (
    <section id="ubicacion" className="bg-[#fff8e7] px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d00000]">Ubicación</p>
          <h2 className="mt-3 text-3xl font-black text-[#1b1b1b] sm:text-4xl">Estamos en Culiacán Sinaloa, listos para recibirte.</h2>
          <p className="mt-4 text-lg leading-8 text-[#1b1b1b]/70">
            Ven a disfrutar de la mejor propuesta de birria, menú nocturno y eventos con un ambiente cercano y Familiar.
          </p>

          <div className="mt-8 space-y-5 rounded-[24px] border border-[#1b1b1b]/10 bg-white p-8 shadow-sm">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-[#9d0208]" />
              <div>
                <p className="font-semibold text-[#1b1b1b]">Dirección</p>
                <p className="mt-1 text-sm text-[#1b1b1b]/70">2500 C. Misión San Luis Rey, Culiacán Rosales, Sinaloa</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 className="mt-1 h-5 w-5 text-[#9d0208]" />
              <div>
                <p className="font-semibold text-[#1b1b1b]">Horarios</p>
                <p className="mt-1 text-sm text-[#1b1b1b]/70">Menú Nocturno: lunes a Viernes  .</p>
                <p className="mt-1 text-sm text-[#1b1b1b]/70">Horario: 7 P.M a 11 P.M.</p>
                <p className="mt-1 text-sm text-[#1b1b1b]/70">Birria: Viernes a Domingo  .</p>
                <p className="mt-1 text-sm text-[#1b1b1b]/70">Horario: 7 A.M a 1 P.M.</p>
              </div>
            </div>
            <a href="https://maps.app.goo.gl/JRnfBdYWb6LS1rjU8" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#9d0208] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d00000]">
              Abrir en Google Maps <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="rounded-[30px] border border-[#1b1b1b]/10 bg-white p-6 shadow-sm">
          <div className="grid gap-3">
            {horarios.map((item) => (
              <div key={item.dia} className="flex items-center justify-between rounded-2xl border border-[#1b1b1b]/10 bg-[#fff8e7] px-4 py-3">
                <div>
                  <p className="font-semibold text-[#1b1b1b]">{item.dia}</p>
                  <p className="text-sm text-[#1b1b1b]/70">{item.detalle}</p>
                </div>
                <span className="text-xl">{item.icono}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;
