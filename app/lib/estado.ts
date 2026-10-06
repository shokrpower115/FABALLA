import { horariosServicio, negocio, type Horario } from "./negocio";

export const nombresDia = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

export interface Momento {
  // 0 = domingo ... 6 = sábado
  dia: number;
  // Minutos desde la medianoche
  minutos: number;
}

const indiceDia: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

const formatoCuliacan = new Intl.DateTimeFormat("en-US", {
  timeZone: negocio.zonaHoraria,
  weekday: "short",
  hour: "numeric",
  minute: "numeric",
  hourCycle: "h23",
});

// Día y hora en Culiacán, sin importar la zona horaria del visitante.
export function momentoEnCuliacan(fecha: Date): Momento {
  const partes = Object.fromEntries(formatoCuliacan.formatToParts(fecha).map((p) => [p.type, p.value]));
  return { dia: indiceDia[partes.weekday], minutos: Number(partes.hour) * 60 + Number(partes.minute) };
}

export type EstadoHoy = "abierto" | "masTarde" | "yaCerro" | "noHoy";

export function estadoServicio(horario: Horario, ahora: Momento): EstadoHoy {
  if (!horario.diasSemana.includes(ahora.dia)) return "noHoy";
  if (ahora.minutos < horario.abre) return "masTarde";
  if (ahora.minutos < horario.cierra) return "abierto";
  return "yaCerro";
}

export interface Apertura {
  horario: Horario;
  // Días a partir de hoy: 0 = hoy, 1 = mañana...
  enDias: number;
  dia: number;
}

export function proximaApertura(ahora: Momento): Apertura | null {
  for (let enDias = 0; enDias <= 7; enDias++) {
    const dia = (ahora.dia + enDias) % 7;
    const candidatos = horariosServicio
      .filter((h) => h.diasSemana.includes(dia) && (enDias > 0 || ahora.minutos < h.abre))
      .sort((a, b) => a.abre - b.abre);
    if (candidatos.length > 0) return { horario: candidatos[0], enDias, dia };
  }
  return null;
}

export function etiquetaDia(apertura: Apertura) {
  if (apertura.enDias === 0) return "hoy";
  if (apertura.enDias === 1) return "mañana";
  return `el ${nombresDia[apertura.dia].toLowerCase()}`;
}

// El menú que conviene mostrar primero: el abierto ahora, o el próximo en abrir.
export function servicioSugerido(ahora: Momento): Horario {
  const abierto = horariosServicio.find((h) => estadoServicio(h, ahora) === "abierto");
  return abierto ?? proximaApertura(ahora)?.horario ?? horariosServicio[0];
}
