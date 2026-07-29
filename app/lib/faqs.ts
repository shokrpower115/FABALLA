export interface FaqItem {
  pregunta: string;
  respuesta: string;
}

export const faqs: FaqItem[] = [
  {
    pregunta: "¿Qué días hay birria?",
    respuesta: "La birria está disponible exclusivamente de viernes a domingo.",
  },
  {
    pregunta: "¿Qué días opera el menú nocturno?",
    respuesta: "El menú nocturno está disponible de lunes a sábado.",
  },
  {
    pregunta: "¿Cómo puedo contratar un evento?",
    respuesta: "Puedes escribirnos por WhatsApp o solicitar una cotización desde la sección de eventos.",
  },
  {
    pregunta: "¿Dónde se encuentra FABALLA?",
    respuesta: "Estamos ubicados en Culiacán, Sinaloa. Puedes abrir la ubicación directamente en Google Maps.",
  },
];
