"use client";

import { useState } from "react";
import { nocturnoInfo, menuNocturno } from "../lib/menus/menuNocturno";
import MenuDialog from "./MenuDialog";

const MenuNocturno = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="nocturno" className="bg-[#1b1b1b] px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f77f00]">Menú nocturno</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Disponible de lunes a sábado, con opciones perfectas para salir de noche.</h2>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Menú independiente del de birria, con productos pensados para quienes buscan algo rápido, sabroso y muy bien preparado.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <button onClick={() => setOpen(true)} className="inline-flex rounded-full bg-[#f77f00] px-6 py-3 font-semibold text-[#1b1b1b] transition hover:bg-[#ff9e2c]">
            Ver menú nocturno
          </button>
        </div>
      </div>

      <MenuDialog
        open={open}
        onOpenChange={setOpen}
        title={nocturnoInfo.title}
        subtitle={nocturnoInfo.subtitle}
        description={nocturnoInfo.description}
        note={nocturnoInfo.note}
        menu={menuNocturno}
        accent="dark"
      />
    </section>
  );
};

export default MenuNocturno;
