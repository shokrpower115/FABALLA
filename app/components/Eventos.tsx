"use client";

import { useState } from "react";
import EventCard from "./EventCard";
import PackageModal from "./PackageModal";

const eventos = [
  {
    id: "taquiza",
    title: "Taquiza",
    description: "Explora paquetes de tacos con distintos tipos de carne y elige el que mejor se adapte a tu evento.",
    accent: "🌮",
  },
  {
    id: "hotdogs",
    title: "Hotdogs",
    description: "Descubre paquetes para servir hotdogs de forma rápida, deliciosa y muy atractiva.",
    accent: "🌭",
  },
  {
    id: "combos",
    title: "Combos",
    description: "Combina taquiza y hotdogs para ofrecer una experiencia completa y con mayor variedad.",
    accent: "🔥",
  },
] as const;

const Eventos = () => {
  const [selectedType, setSelectedType] = useState<"taquiza" | "hotdogs" | "combos" | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (type: "taquiza" | "hotdogs" | "combos") => {
    setSelectedType(type);
    setOpen(true);
  };

  return (
    <section id="eventos" className="bg-[#fff8e7] px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d00000]">Eventos</p>
          <h2 className="mt-3 text-3xl font-black text-[#1b1b1b] sm:text-4xl">Explora los paquetes de una forma más clara y fácil de ordenar.</h2>
          <p className="mt-4 text-lg leading-8 text-[#1b1b1b]/70">
            Selecciona la opción que desees y encuentra un menú digital para que puedas elegir tu paquete con total comodidad.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {eventos.map((evento) => (
            <EventCard
              key={evento.id}
              title={evento.title}
              description={evento.description}
              accent={evento.accent}
              onOpen={() => handleOpen(evento.id as "taquiza" | "hotdogs" | "combos")}
            />
          ))}
        </div>
      </div>

      {selectedType && (
        <PackageModal
          open={open}
          onOpenChange={setOpen}
          type={selectedType}
        />
      )}
    </section>
  );
};

export default Eventos;
