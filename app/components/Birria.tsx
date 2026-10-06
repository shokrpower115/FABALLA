"use client";

import { useState } from "react";
import { birriaInfo, birriaMenu } from "../lib/menus/birria";
import MenuDialog from "./MenuDialog";

const Birria = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="birria" className="bg-crema px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rojo">Birria</p>
          <h2 className="mt-3 text-3xl font-black text-tinta sm:text-4xl">Un menú exclusivo para los mejores fines de semana.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-tinta/70">
            Disponible únicamente de viernes a domingo por la mañana, con una propuesta pensada para quienes buscan una experiencia tradicional, reconfortante y muy especial.
          </p>
          <div className="mt-8">
            <button onClick={() => setOpen(true)} className="inline-flex rounded-full bg-vino px-6 py-3 font-semibold text-white transition hover:bg-rojo">
              Ver menú de Birria
            </button>
          </div>
        </div>
      </div>

      <MenuDialog
        open={open}
        onOpenChange={setOpen}
        title={birriaInfo.title}
        subtitle={birriaInfo.subtitle}
        description={birriaInfo.description}
        note={birriaInfo.note}
        menu={birriaMenu}
      />
    </section>
  );
};

export default Birria;
