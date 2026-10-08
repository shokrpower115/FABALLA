"use client";

import { useState, useSyncExternalStore } from "react";
import { MessageCircle } from "lucide-react";
import { birriaInfo, birriaMenu } from "../lib/menus/birria";
import { menuNocturno, nocturnoInfo } from "../lib/menus/menuNocturno";
import type { MenuItem } from "../lib/menus/tipos";
import { estadoServicio, servicioSugerido, type Momento } from "../lib/estado";
import { formatoHora, horarioBirria, horarioNocturno, whatsappUrl, type Horario, type ServicioId } from "../lib/negocio";
import { useAhora } from "../lib/useAhora";

interface MenuServicio {
  horario: Horario;
  info: { title: string; description: string; note: string };
  items: MenuItem[];
}

const menus: Record<ServicioId, MenuServicio> = {
  birria: { horario: horarioBirria, info: birriaInfo, items: birriaMenu },
  nocturno: { horario: horarioNocturno, info: nocturnoInfo, items: menuNocturno },
};

const pestañas: ServicioId[] = ["birria", "nocturno"];

// Los enlaces viejos (#birria, #nocturno) abren directamente la pestaña correspondiente.
function suscribirHash(avisar: () => void) {
  window.addEventListener("hashchange", avisar);
  return () => window.removeEventListener("hashchange", avisar);
}

function pestañaDelHash(hash: string): ServicioId | null {
  const id = hash.replace("#", "");
  return id === "birria" || id === "nocturno" ? id : null;
}

function disponibilidad(horario: Horario, ahora: Momento | null) {
  if (!ahora) return { texto: horario.dias, activo: false };
  switch (estadoServicio(horario, ahora)) {
    case "abierto":
      return { texto: `Abierto hasta las ${formatoHora(horario.cierra)}`, activo: true };
    case "masTarde":
      return { texto: `Hoy desde las ${formatoHora(horario.abre)}`, activo: false };
    default:
      return { texto: horario.dias, activo: false };
  }
}

const formatoPrecio = (precio: number) => `$${precio.toLocaleString("es-MX")}`;

const Menu = () => {
  const ahora = useAhora();
  const hash = useSyncExternalStore(suscribirHash, () => window.location.hash, () => "");
  const [elegida, setElegida] = useState<ServicioId | null>(null);
  const [categoria, setCategoria] = useState<string | null>(null);

  // Prioridad: lo que el visitante eligió, el enlace con el que llegó, o el menú disponible ahora.
  const activa = elegida ?? pestañaDelHash(hash) ?? (ahora ? servicioSugerido(ahora).id : "birria");
  const { horario, info, items } = menus[activa];

  const categorias = Array.from(new Set(items.map((item) => item.categoria)));
  const categoriaActiva = categoria && categorias.includes(categoria) ? categoria : null;
  const visibles = categoriaActiva ? [categoriaActiva] : categorias;

  const elegirPestaña = (id: ServicioId) => {
    setElegida(id);
    setCategoria(null);
  };

  return (
    <section id="menu" className="bg-crema px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rojo">Menú</p>
        <h2 className="mt-3 text-3xl font-black text-tinta sm:text-4xl">Elige tu antojo.</h2>
        <p className="mt-3 text-lg text-tinta/70">Dos menús, dos horarios. Te mostramos primero el que está disponible.</p>

        <div role="tablist" aria-label="Menús" className="mt-8 grid gap-3 sm:grid-cols-2">
          {pestañas.map((id) => {
            const { horario: h } = menus[id];
            const seleccionada = id === activa;
            const estado = disponibilidad(h, ahora);
            return (
              <button
                key={id}
                id={id}
                type="button"
                role="tab"
                aria-selected={seleccionada}
                aria-controls="menu-panel"
                onClick={() => elegirPestaña(id)}
                className={`flex items-center gap-4 rounded-[24px] border-2 px-5 py-4 text-left transition ${
                  seleccionada ? "border-vino bg-white shadow-md" : "border-transparent bg-white/60 hover:bg-white"
                }`}
              >
                <span className="text-3xl" aria-hidden="true">{h.icono}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-lg font-bold text-tinta">{h.nombre}</span>
                  <span className={`mt-0.5 flex items-center gap-1.5 text-sm ${estado.activo ? "font-semibold text-green-700" : "text-tinta/70"}`}>
                    {estado.activo && <span className="h-2 w-2 rounded-full bg-green-600" />}
                    {estado.texto}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div id="menu-panel" role="tabpanel" aria-labelledby={activa} className="mt-6 rounded-[28px] border border-tinta/10 bg-white p-5 shadow-sm sm:p-8">
          <div className="flex flex-col gap-1 border-b border-tinta/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-2xl font-black text-tinta">{info.title}</h3>
              <p className="mt-1 text-tinta/70">{info.description}</p>
            </div>
            <p className="text-sm font-semibold text-vino">
              {horario.dias} · {horario.horas}
            </p>
          </div>

          {categorias.length > 1 && (
            <div className="-mx-5 mt-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
              <ChipCategoria texto="Todo" activo={!categoriaActiva} onClick={() => setCategoria(null)} />
              {categorias.map((c) => (
                <ChipCategoria key={c} texto={c} activo={c === categoriaActiva} onClick={() => setCategoria(c)} />
              ))}
            </div>
          )}

          <div className="mt-6 space-y-8">
            {visibles.map((c) => (
              <div key={c}>
                {categorias.length > 1 && <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-tinta/60">{c}</h4>}
                <ul className="grid gap-x-8 md:grid-cols-2">
                  {items
                    .filter((item) => item.categoria === c)
                    .map((item) => (
                      <li key={item.id} className="flex items-start justify-between gap-4 border-b border-dashed border-tinta/15 py-4">
                        <div className="min-w-0">
                          <p className="font-semibold text-tinta">{item.nombre}</p>
                          <p className="mt-1 text-sm leading-6 text-tinta/70">{item.descripcion}</p>
                          {item.badge && (
                            <span className="mt-2 inline-block rounded-full bg-naranja/15 px-2.5 py-0.5 text-xs font-semibold text-naranja-oscuro">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="shrink-0 text-lg font-bold text-vino">{formatoPrecio(item.precio)}</p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-6 rounded-2xl bg-vino/5 p-4 text-sm leading-6 text-tinta/75">{info.note}</p>

          <a
            href={whatsappUrl(`Hola, quiero hacer un pedido del ${info.title}.`)}
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-vino px-6 py-3.5 font-semibold text-white transition hover:bg-rojo"
          >
            <MessageCircle className="h-5 w-5" /> Pedir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

function ChipCategoria({ texto, activo, onClick }: { texto: string; activo: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={activo}
      className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
        activo ? "bg-tinta text-white" : "bg-crema text-tinta hover:bg-tinta/10"
      }`}
    >
      {texto}
    </button>
  );
}

export default Menu;
