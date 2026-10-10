"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HoyEnFaballa from "./HoyEnFaballa";

const Hero = () => {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-tinta text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/galeria/hero.webp')] bg-cover bg-[position:50%_45%]" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-durazno">
            FABALLA • Culiacán, Sinaloa
          </p>
          <h1 className="text-4xl font-black leading-[0.95] sm:text-5xl lg:text-7xl">
            Birria, antojitos nocturnos y taquizas para tu evento.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            Birria los fines de semana por la mañana, menú nocturno entre semana y paquetes de taquiza, hotdogs y combos para tus celebraciones.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#menu" className="inline-flex items-center justify-center gap-2 rounded-full bg-naranja px-7 py-3.5 font-semibold text-tinta transition hover:-translate-y-0.5 hover:bg-naranja-claro">
              Ver menú de hoy <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#eventos" className="rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-center font-semibold text-white backdrop-blur transition hover:bg-white/20">
              Cotizar un evento
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
          <HoyEnFaballa />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
