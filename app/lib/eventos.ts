import type { EventoServicio } from "../types/evento";

export const eventos: EventoServicio[] = [
  {
    id: "taquiza",
    nombre: "Taquiza",
    descripcion: "Ideal para reuniones, festejos y celebraciones con un servicio de calidad premium.",
    puntos: ["Servicio ágil", "Presentación cuidada", "Sabor auténtico"],
    cta: "Cotizar taquiza",
  },
  {
    id: "hotdogs",
    nombre: "Hotdogs",
    descripcion: "Opción divertida y muy completa para eventos informales o familiares.",
    puntos: ["Menú flexible", "Ideal para grupos", "Excelente para fiestas"],
    cta: "Cotizar hotdogs",
  },
  {
    id: "combo",
    nombre: "Combo Hotdogs + Taquiza",
    descripcion: "La mejor opción para quienes quieren variedad y una experiencia más completa.",
    puntos: ["Diversidad de sabores", "Perfecto para eventos grandes", "Mayor impacto visual"],
    cta: "Solicitar propuesta",
  },
];
