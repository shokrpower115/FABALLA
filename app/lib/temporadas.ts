// Temporadas de eventos: lo que la página promociona según la fecha.
//
// Las fechas son "MM-DD" y se repiten cada año solas: no hay que volver a publicar nada.
// Fuera de cualquier temporada, la página promociona eventos en general (ver `eventosGeneral`).
//
// Para agregar una temporada nueva (Día de las Madres, graduaciones, etc.):
//   1. Agrega una entrada a `temporadas`.
//   2. Crea su página copiando app/diciembre/page.tsx con el nuevo `id`.
//   3. (Opcional) Agrega su imagen para compartir en public/temporadas/<id>.jpg.

export interface Promo {
  // Pesos que sube cada paquete durante la promo.
  aumento: number;
  // Lo que se regala al apartar.
  regalo: string;
  // Último día ("MM-DD") para apartar con la promo. Sin fecha: dura toda la temporada.
  apartarHasta?: string;
}

export interface Temporada {
  // También es la dirección de su página: faballa.com/<id>
  id: string;
  nombre: string;
  emoji: string;
  // Primer y último día en que se muestra ("MM-DD", ambos incluidos).
  desde: string;
  hasta: string;
  titulo: string;
  mensaje: string;
  // Tipos de eventos que se sugieren.
  ideas: string[];
  promo?: Promo;
  mensajeWhatsApp: string;
  // Imagen para la vista previa al compartir (1200×630).
  imagen: string;
}

const aguaDeRegalo: Omit<Promo, "apartarHasta"> = {
  aumento: 200,
  regalo: "Agua 20L (sabor a elegir)",
};

export const temporadas: Temporada[] = [
  {
    id: "diciembre",
    nombre: "Posadas y fin de año",
    emoji: "🎄",
    desde: "11-15",
    hasta: "12-31",
    titulo: "Celebra tu posada con FABALLA",
    mensaje:
      "Aparta la fecha de tu posada, convivio de la oficina o cena de fin de año. Las fechas de diciembre se llenan rápido.",
    ideas: ["Posadas", "Convivios de oficina", "Cenas navideñas", "Fiesta de Año Nuevo"],
    promo: { ...aguaDeRegalo, apartarHasta: "12-20" },
    mensajeWhatsApp: "Hola, quiero apartar fecha para mi posada / evento de diciembre",
    imagen: "/temporadas/diciembre.jpg",
  },
  {
    id: "reyes",
    nombre: "Día de Reyes",
    emoji: "👑",
    desde: "01-01",
    hasta: "01-10",
    titulo: "Tu partida de rosca, con taquiza",
    mensaje: "Acompaña la rosca con taquiza, hotdogs o birria para toda la familia. Aparta tu fecha.",
    ideas: ["Partida de rosca", "Reuniones familiares", "Convivios de inicio de año"],
    promo: aguaDeRegalo,
    mensajeWhatsApp: "Hola, quiero apartar fecha para mi partida de rosca / evento de Reyes",
    imagen: "/temporadas/reyes.jpg",
  },
];

// Lo que se promociona cuando no hay temporada activa.
export const eventosGeneral = {
  emoji: "🎉",
  titulo: "¿Tienes un evento?",
  mensaje: "Taquiza, hotdogs, combos y birria para cumpleaños, bautizos, bodas y reuniones. Nosotros llevamos todo.",
  mensajeWhatsApp: "Hola, quiero cotizar un evento",
};

// ---------------------------------------------------------------------------

const MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

// "MM-DD" → número comparable (1215). Si la temporada cruza de año (ej. 12-26 a 01-06),
// los días de enero se recorren después de diciembre.
function posicion(mmdd: string, desde: string) {
  const n = Number(mmdd.replace("-", ""));
  const inicio = Number(desde.replace("-", ""));
  return n < inicio ? n + 1300 : n;
}

// fecha: "AAAA-MM-DD"
export function temporadaActiva(fecha: string): Temporada | null {
  const mmdd = fecha.slice(5);
  return temporadas.find((t) => posicion(mmdd, t.desde) <= posicion(t.hasta, t.desde)) ?? null;
}

export function promoActiva(temporada: Temporada | null, fecha: string): Promo | null {
  const promo = temporada?.promo;
  if (!temporada || !promo) return null;
  if (promo.apartarHasta && posicion(fecha.slice(5), temporada.desde) > posicion(promo.apartarHasta, temporada.desde)) {
    return null;
  }
  return promo;
}

// Días que faltan de `fecha` ("AAAA-MM-DD") a la próxima vez que llegue `mmdd`. 0 = hoy.
export function diasHasta(fecha: string, mmdd: string) {
  const [anio, mes, dia] = fecha.split("-").map(Number);
  const [mesMeta, diaMeta] = mmdd.split("-").map(Number);
  const hoy = Date.UTC(anio, mes - 1, dia);
  let meta = Date.UTC(anio, mesMeta - 1, diaMeta);
  if (meta < hoy) meta = Date.UTC(anio + 1, mesMeta - 1, diaMeta);
  return Math.round((meta - hoy) / 86_400_000);
}

// "12-20" → "20 de diciembre"
export function fechaLegible(mmdd: string) {
  const [mes, dia] = mmdd.split("-").map(Number);
  return `${dia} de ${MESES[mes - 1]}`;
}

// Precio e "incluye" de un paquete con la promo aplicada.
export function conPromo(precio: number, incluye: string[], promo: Promo | null) {
  if (!promo) return { precio, incluye };
  const yaTraeAgua = incluye.some((item) => /agua/i.test(item));
  const regalo = yaTraeAgua ? `🎁 ${promo.regalo} extra de regalo` : `🎁 ${promo.regalo} de regalo`;
  return { precio: precio + promo.aumento, incluye: [...incluye, regalo] };
}

export function textoPromo(promo: Promo) {
  const limite = promo.apartarHasta ? ` antes del ${fechaLegible(promo.apartarHasta)}` : "";
  return `Aparta tu fecha${limite} y te regalamos un ${promo.regalo}.`;
}
