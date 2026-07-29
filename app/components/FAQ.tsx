"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../lib/faqs";

const FAQ = () => {
  const [abierta, setAbierta] = useState<number | null>(0);

  return (
    <section className="bg-[#1b1b1b] px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f77f00]">FAQ</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Resolvemos tus dudas antes de que llegues.</h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = abierta === index;
            return (
              <div key={item.pregunta} className="rounded-[24px] border border-white/10 bg-white/10">
                <button className="flex w-full items-center justify-between px-6 py-5 text-left" onClick={() => setAbierta(isOpen ? null : index)}>
                  <span className="text-lg font-semibold">{item.pregunta}</span>
                  <ChevronDown className={`h-5 w-5 transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && <p className="px-6 pb-6 text-sm leading-7 text-white/70">{item.respuesta}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
