// Fuente única de datos del negocio: teléfono, dirección, redes y horarios.
// Cualquier cambio aquí se refleja en toda la página.

const telefonoWhatsApp = "5216673342261";

export const negocio = {
  nombre: "FABALLA",
  telefono: "667 334 2261",
  direccion: "2500 C. Misión San Luis Rey, Culiacán Rosales, Sinaloa",
  mapsUrl: "https://maps.app.goo.gl/JRnfBdYWb6LS1rjU8",
  instagramUrl: "https://www.instagram.com/taqueria_faballa?igsh=MXByOXpha3E3bGdvZg==",
  facebookUrl: "https://www.facebook.com/share/17x6pBpT4x/",
  // Zona horaria de Culiacán (sin horario de verano).
  zonaHoraria: "America/Mazatlan",
};

export function whatsappUrl(mensaje?: string) {
  const base = `https://wa.me/${telefonoWhatsApp}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}

export type ServicioId = "birria" | "nocturno";

export interface Horario {
  id: ServicioId;
  nombre: string;
  icono: string;
  dias: string;
  horas: string;
  // 0 = domingo, 1 = lunes, ... 6 = sábado
  diasSemana: number[];
  // Minutos desde la medianoche
  abre: number;
  cierra: number;
}

export function formatoHora(minutos: number) {
  const h24 = Math.floor(minutos / 60);
  const min = String(minutos % 60).padStart(2, "0");
  const sufijo = h24 < 12 ? "a.m." : "p.m.";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${min} ${sufijo}`;
}

function crearHorario(datos: Omit<Horario, "horas">): Horario {
  return { ...datos, horas: `${formatoHora(datos.abre)} a ${formatoHora(datos.cierra)}` };
}

export const horarioBirria = crearHorario({
  id: "birria",
  nombre: "Birria",
  icono: "🍲",
  dias: "Viernes a domingo",
  diasSemana: [5, 6, 0],
  abre: 8 * 60,
  cierra: 13 * 60,
});

export const horarioNocturno = crearHorario({
  id: "nocturno",
  nombre: "Menú nocturno",
  icono: "🌙",
  dias: "Lunes a viernes",
  diasSemana: [1, 2, 3, 4, 5],
  abre: 19 * 60,
  cierra: 23 * 60,
});

export const horariosServicio: Horario[] = [horarioBirria, horarioNocturno];
