"use client";

import { useEffect } from "react";

// Piezas que aparecen al llegar a la pantalla (dentro de las secciones, menos la portada
// y la temporada, que ya tienen su propia entrada).
const ZONA = "main :is(section:not(#inicio):not(#temporada), footer)";
const PIEZAS = ["h2", "p:has(+ h2)", "h2 + p", ".grid > *", ".space-y-4 > *", '[class*="rounded-["]']
  .map((pieza) => `${ZONA} ${pieza}`)
  .join(", ");

const DURACION = 700;
const PAUSA_CASCADA = 90;
const MAX_CASCADA = 5;

// Efecto "la página se va armando": títulos, tarjetas y fotos entran deslizándose
// en cascada justo cuando llegan a la pantalla.
//
// Nada empieza oculto en el HTML: se ocultan con JavaScript ya cargado y solo las piezas
// que están más abajo de la pantalla. Así, si algo falla, todo se ve normal; y lo que ya
// apareció nunca se vuelve a ocultar al subir.
const RevelarAlDesplazar = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Una pieza "llega" cuando su borde de arriba pasa el 92% de la altura de la pantalla.
    const llegada = () => window.innerHeight * 0.92;

    const candidatos = Array.from(document.querySelectorAll<HTMLElement>(PIEZAS));
    // Si una pieza contiene a otra, se anima solo la de adentro (evita animaciones dobles).
    const piezas = candidatos.filter((pieza) => !candidatos.some((otra) => otra !== pieza && pieza.contains(otra)));
    let pendientes = piezas.filter((pieza) => pieza.getBoundingClientRect().top > llegada());
    for (const pieza of pendientes) pieza.dataset.revelar = "oculto";

    // Se revisa en cada desplazamiento (el navegador avisa una vez por cuadro). Todo lo que ya está a la altura
    // de la pantalla o más arriba se muestra; así, aunque se salte con un link (#eventos),
    // nada se queda oculto al regresar.
    const revisar = () => {
      const limite = llegada();
      const llegaron = pendientes
        .map((pieza) => ({ pieza, caja: pieza.getBoundingClientRect() }))
        .filter(({ caja }) => caja.top < limite)
        .sort((a, b) => a.caja.top - b.caja.top);
      if (llegaron.length === 0) return;

      const yaLlegaron = new Set(llegaron.map(({ pieza }) => pieza));
      pendientes = pendientes.filter((pieza) => !yaLlegaron.has(pieza));

      let enCascada = 0;
      for (const { pieza, caja } of llegaron) {
        delete pieza.dataset.revelar;
        // Lo que se saltó (ya quedó arriba de la pantalla) aparece sin animación.
        if (caja.bottom < 0) continue;
        pieza.animate(
          [
            { opacity: 0, transform: "translateY(28px)" },
            { opacity: 1, transform: "none" },
          ],
          {
            duration: DURACION,
            delay: Math.min(enCascada, MAX_CASCADA) * PAUSA_CASCADA,
            easing: "cubic-bezier(0.2, 0.7, 0.2, 1)",
            fill: "backwards",
          },
        );
        enCascada++;
      }

      if (pendientes.length === 0) quitarEscuchas();
    };
    const quitarEscuchas = () => {
      window.removeEventListener("scroll", revisar);
      window.removeEventListener("resize", revisar);
    };

    window.addEventListener("scroll", revisar, { passive: true });
    window.addEventListener("resize", revisar);

    return () => {
      quitarEscuchas();
      for (const pieza of pendientes) delete pieza.dataset.revelar;
    };
  }, []);

  return null;
};

export default RevelarAlDesplazar;
