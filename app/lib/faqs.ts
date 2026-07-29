export interface FaqItem {
  pregunta: string;
  respuesta: string;
  href?: string;
  linkText?: string;
}

export const faqs: FaqItem[] = [
  {
    pregunta: "¿Qué días hay birria?",
    respuesta: "La birria está disponible exclusivamente de viernes a domingo en un horario de 7A.M a 1P.M.",
  },
  {
    pregunta: "¿Qué días opera el menú nocturno?",
    respuesta: "El menú nocturno está disponible de lunes a Viernes en un horario de 7P.M a 11P.M.",
  },
  {
    pregunta: "¿Cómo puedo contratar un evento?",
    respuesta: "Puedes escribirnos por WhatsApp, En la presentacion de los precios puede seleccionar el paquete. O",
    href: "https://wa.me/5216673342261",
    linkText: "Presione aquí para mandar Whatsapp",
  },
  {
    pregunta: "¿Dónde se encuentra FABALLA?",
    respuesta: "Estamos ubicados en 2500 C. Misión San Luis Rey, Culiacán Rosales, Sinaloa.",
    href: "https://maps.app.goo.gl/JRnfBdYWb6LS1rjU8",
    linkText: "Presione aquí",
  },
  {
  pregunta: "¿Tienen Facebook?",
  respuesta: "Sí.",
  href: "https://www.facebook.com/share/17x6pBpT4x/",
  linkText: "Visita nuestra página de Facebook",
  },
  {
  pregunta: "¿Tienen Instagram?",
  respuesta: "Sí.",
  href: "https://www.instagram.com/taqueria_faballa?igsh=MXByOXpha3E3bGdvZg==",
  linkText: "Visita nuestra página de Instagram",
  },
];
