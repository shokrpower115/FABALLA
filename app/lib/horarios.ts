import { nombresDia } from "./estado";
import { horariosServicio } from "./negocio";

export interface HorarioItem {
  dia: string;
  detalle: string;
  icono: string;
}

// Lunes primero; se genera a partir de los horarios de negocio.ts.
export const horarios: HorarioItem[] = [1, 2, 3, 4, 5, 6, 0].map((dia) => {
  const servicios = horariosServicio.filter((h) => h.diasSemana.includes(dia));
  return {
    dia: nombresDia[dia],
    detalle: servicios.length > 0 ? servicios.map((h) => h.nombre).join(" + ") : "Cerrado",
    icono: servicios.map((h) => h.icono).join(""),
  };
});
