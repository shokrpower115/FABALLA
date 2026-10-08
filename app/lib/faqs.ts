import { horarioBirria, horarioNocturno, negocio, whatsappUrl } from "./negocio";

export interface FaqItem {
  pregunta: string;
  respuesta: string;
  href?: string;
  linkText?: string;
}

export const faqs: FaqItem[] = [
  {
    pregunta: "¿Qué días hay birria?",
    respuesta: `La birria está disponible de ${horarioBirria.dias.toLowerCase()}, de ${horarioBirria.horas}`,
  },
  {
    pregunta: "¿Qué días opera el menú nocturno?",
    respuesta: `El menú nocturno está disponible de ${horarioNocturno.dias.toLowerCase()}, de ${horarioNocturno.horas}`,
  },
  {
    pregunta: "¿Cómo puedo contratar un evento?",
    respuesta: "En la sección de Eventos elige el paquete que te interese y envíanos tu solicitud por WhatsApp. También puedes escribirnos directamente.",
    href: whatsappUrl(),
    linkText: "Enviar WhatsApp",
  },
  {
    pregunta: "¿Dónde se encuentra FABALLA?",
    respuesta: `Estamos ubicados en ${negocio.direccion}.`,
    href: negocio.mapsUrl,
    linkText: "Ver en Google Maps",
  },
  {
    pregunta: "¿Tienen Facebook?",
    respuesta: "Sí.",
    href: negocio.facebookUrl,
    linkText: "Visita nuestra página de Facebook",
  },
  {
    pregunta: "¿Tienen Instagram?",
    respuesta: "Sí.",
    href: negocio.instagramUrl,
    linkText: "Visita nuestra página de Instagram",
  },
];
