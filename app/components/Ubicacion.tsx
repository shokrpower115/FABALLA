import { MapPin, Clock3, ArrowUpRight } from "lucide-react";
import { horarios } from "../lib/horarios";
import { horarioBirria, horarioNocturno, negocio } from "../lib/negocio";

const Ubicacion = () => {
  return (
    <section id="ubicacion" className="bg-crema px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rojo">Ubicación</p>
          <h2 className="mt-3 text-3xl font-black text-tinta sm:text-4xl">Estamos en Culiacán Sinaloa, listos para recibirte.</h2>
          <p className="mt-4 text-lg leading-8 text-tinta/70">
            Ven a disfrutar de la mejor propuesta de birria, menú nocturno y eventos con un ambiente cercano y Familiar.
          </p>

          <div className="mt-8 space-y-5 rounded-[24px] border border-tinta/10 bg-white p-8 shadow-sm">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-vino" />
              <div>
                <p className="font-semibold text-tinta">Dirección</p>
                <p className="mt-1 text-sm text-tinta/70">{negocio.direccion}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 className="mt-1 h-5 w-5 text-vino" />
              <div>
                <p className="font-semibold text-tinta">Horarios</p>
                {[horarioNocturno, horarioBirria].map((horario) => (
                  <p key={horario.nombre} className="mt-1 text-sm text-tinta/70">
                    <span className="font-medium text-tinta">{horario.nombre}:</span> {horario.dias}, {horario.horas}
                  </p>
                ))}
              </div>
            </div>
            <a href={negocio.mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-vino px-5 py-3 text-sm font-semibold text-white transition hover:bg-rojo">
              Abrir en Google Maps <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="rounded-[30px] border border-tinta/10 bg-white p-6 shadow-sm">
          <div className="grid gap-3">
            {horarios.map((item) => (
              <div key={item.dia} className="flex items-center justify-between rounded-2xl border border-tinta/10 bg-crema px-4 py-3">
                <div>
                  <p className="font-semibold text-tinta">{item.dia}</p>
                  <p className="text-sm text-tinta/70">{item.detalle}</p>
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
