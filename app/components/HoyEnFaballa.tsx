"use client";

import { Clock3 } from "lucide-react";
import { estadoServicio, etiquetaDia, nombresDia, proximaApertura, type EstadoHoy } from "../lib/estado";
import { formatoHora, horariosServicio } from "../lib/negocio";
import { useAhora } from "../lib/useAhora";

const chipEstado: Record<Exclude<EstadoHoy, "noHoy">, { texto: string; clase: string }> = {
  abierto: { texto: "Abierto ahora", clase: "bg-whatsapp/20 text-whatsapp" },
  masTarde: { texto: "Más tarde", clase: "bg-durazno/20 text-durazno" },
  yaCerro: { texto: "Ya cerró", clase: "bg-white/10 text-white/60" },
};

const HoyEnFaballa = () => {
  const ahora = useAhora();

  // Antes de conocer la hora del visitante, muestra los horarios generales.
  if (!ahora) {
    return (
      <Tarjeta titulo="Horarios">
        {horariosServicio.map((h) => (
          <Fila key={h.id} icono={h.icono} nombre={h.nombre} detalle={`${h.dias} · ${h.horas}`} />
        ))}
      </Tarjeta>
    );
  }

  const deHoy = horariosServicio.filter((h) => h.diasSemana.includes(ahora.dia));
  const abierto = deHoy.find((h) => estadoServicio(h, ahora) === "abierto");
  const proxima = abierto ? null : proximaApertura(ahora);

  return (
    <Tarjeta
      titulo={`Hoy ${nombresDia[ahora.dia].toLowerCase()}`}
      estado={
        abierto ? (
          <span className="inline-flex items-center gap-2 rounded-full bg-whatsapp/20 px-3 py-1 text-xs font-semibold text-whatsapp">
            <span className="h-2 w-2 animate-pulse rounded-full bg-whatsapp" /> Abierto
          </span>
        ) : (
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">Cerrado ahora</span>
        )
      }
    >
      {deHoy.length === 0 && <p className="text-sm text-white/70">Hoy no tenemos servicio.</p>}

      {deHoy.map((h) => {
        const estado = estadoServicio(h, ahora) as Exclude<EstadoHoy, "noHoy">;
        return (
          <Fila
            key={h.id}
            icono={h.icono}
            nombre={h.nombre}
            detalle={estado === "abierto" ? `Hasta las ${formatoHora(h.cierra)}` : h.horas}
            chip={chipEstado[estado]}
          />
        );
      })}

      {proxima && (
        <p className="flex items-start gap-2 border-t border-white/10 pt-4 text-sm text-white/80">
          <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-durazno" />
          <span>
            Próxima apertura: <strong className="text-white">{proxima.horario.nombre}</strong> {etiquetaDia(proxima)} a las{" "}
            {formatoHora(proxima.horario.abre)}
          </span>
        </p>
      )}
    </Tarjeta>
  );
};

function Tarjeta({ titulo, estado, children }: { titulo: string; estado?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-md" aria-live="polite">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-durazno">{titulo}</p>
        {estado}
      </div>
      <div className="mt-5 space-y-4">{children}</div>
    </div>
  );
}

function Fila({ icono, nombre, detalle, chip }: { icono: string; nombre: string; detalle: string; chip?: { texto: string; clase: string } }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-2xl" aria-hidden="true">{icono}</span>
      <div className="min-w-0 flex-1">
        <p className="font-semibold">{nombre}</p>
        <p className="text-sm text-white/70">{detalle}</p>
      </div>
      {chip && <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${chip.clase}`}>{chip.texto}</span>}
    </div>
  );
}

export default HoyEnFaballa;
