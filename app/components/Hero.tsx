"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="inicio" className="relative isolate min-h-screen overflow-hidden bg-[#1b1b1b] text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#f7b267]">
            FABALLA • comida mexicana con identidad
          </p>
          <h1 className="text-4xl font-black leading-[0.95] sm:text-5xl lg:text-7xl">
            La experiencia auténtica para tu próxima reunión.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            Birria los fines de semana, menú nocturno de lunes a sábado y eventos privados con taquiza, hotdogs y mucho más.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="#servicios" className="rounded-full bg-[#f77f00] px-7 py-3.5 text-center font-semibold text-[#1b1b1b] transition hover:-translate-y-0.5 hover:bg-[#ff9f1c]">
              Ver menú
            </Link>
            <a href="https://wa.me/5216671234567" target="_blank" rel="noreferrer" className="rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-center font-semibold text-white backdrop-blur transition hover:bg-white/20">
              Enviar WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            { title: "Birria", subtitle: "Disponible viernes a domingo" },
            { title: "Menú nocturno", subtitle: "Disponible lunes a sábado" },
            { title: "Eventos", subtitle: "Cotiza tu evento" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="mt-2 text-sm text-white/70">{item.subtitle}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
