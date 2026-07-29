export interface HorarioItem {
  dia: string;
  detalle: string;
  icono: string;
}

export const horarios: HorarioItem[] = [
  { dia: "Lunes", detalle: "Menú nocturno", icono: "🌙" },
  { dia: "Martes", detalle: "Menú nocturno", icono: "🌙" },
  { dia: "Miércoles", detalle: "Menú nocturno", icono: "🌙" },
  { dia: "Jueves", detalle: "Menú nocturno", icono: "🌙" },
  { dia: "Viernes", detalle: "Menú nocturno + Birria", icono: "🌙🍲" },
  { dia: "Sábado", detalle: "Menú nocturno + Birria", icono: "🌙🍲" },
  { dia: "Domingo", detalle: "Birria", icono: "🍲" },
];
