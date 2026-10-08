"use client";

import { useSyncExternalStore } from "react";
import { momentoEnCuliacan, type Momento } from "./estado";

const UN_MINUTO = 60_000;

function suscribir(avisar: () => void) {
  const id = setInterval(avisar, UN_MINUTO / 4);
  return () => clearInterval(id);
}

// Cambia una vez por minuto, así React solo vuelve a pintar cuando la hora cambia.
const minutoActual = () => Math.floor(Date.now() / UN_MINUTO);

// La página es estática: en el build no hay "ahora", así que devuelve null
// y el componente muestra un estado neutro hasta que carga en el navegador.
export function useAhora(): Momento | null {
  const minuto = useSyncExternalStore(suscribir, minutoActual, () => null);
  return minuto === null ? null : momentoEnCuliacan(new Date(minuto * UN_MINUTO));
}
