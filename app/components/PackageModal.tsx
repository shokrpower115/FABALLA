"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ArrowLeft, Sparkles } from "lucide-react";
import PackageSelector from "./PackageSelector";
import PackageList from "./PackageList";
import PackageCard from "./PackageCard";
import { paquetesAsada, paquetesPastor, paquetesMixtos, tiposTaquiza } from "../lib/eventos/taquiza";
import { paquetesHotdogs } from "../lib/eventos/hotdogs";
import { combosAsada, combosPastor, combosMixtos, tiposCombo } from "../lib/eventos/combos";

interface PackageModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "taquiza" | "hotdogs" | "combos";
}

const PackageModal = ({ open, onOpenChange, type }: PackageModalProps) => {
  const [selectedKind, setSelectedKind] = useState("asada");

  const title = useMemo(() => {
    if (type === "taquiza") return "Taquiza";
    if (type === "hotdogs") return "Hotdogs";
    return "Combos";
  }, [type]);

  const currentPackages = useMemo<
    Array<{ id: number; nombre: string; precio: number; incluye: string[]; tacos?: number; cantidad?: number; hotdogs?: number }>
  >(() => {
    if (type === "taquiza") {
      if (selectedKind === "pastor") return paquetesPastor;
      if (selectedKind === "mixto") return paquetesMixtos;
      return paquetesAsada;
    }

    if (type === "hotdogs") {
      return paquetesHotdogs as Array<{ id: number; nombre: string; precio: number; incluye: string[]; tacos?: number; cantidad?: number; hotdogs?: number }>;
    }

    if (selectedKind === "pastor") return combosPastor;
    if (selectedKind === "mixto") return combosMixtos;
    return combosAsada;
  }, [selectedKind, type]);

  const selectorOptions = type === "combos" ? tiposCombo : tiposTaquiza;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-hidden border-0 bg-[#fff8e7] p-0 sm:rounded-[32px]">
        <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-8">
          <DialogHeader className="mb-6">
            <button onClick={() => onOpenChange(false)} className="mb-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#9d0208]">
              <ArrowLeft className="h-4 w-4" /> Volver
            </button>
            <DialogTitle className="text-2xl font-black text-[#1b1b1b]">{title}</DialogTitle>
            <p className="mt-2 text-sm leading-7 text-[#1b1b1b]/70">
              {type === "taquiza"
                ? "Selecciona el tipo de carne para ver los paquetes disponibles."
                : type === "hotdogs"
                  ? "Explora los paquetes de hotdogs y elige el que mejor encaje con tu evento."
                  : "Elige la combinación ideal para tu celebración y descubre los paquetes disponibles."}
            </p>
          </DialogHeader>

          <div className="space-y-6">
            {(type === "taquiza" || type === "combos") && (
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-[#9d0208]">
                  <Sparkles className="h-4 w-4" /> {type === "taquiza" ? "¿Qué tipo de carne deseas?" : "Elige la combinación"}
                </div>
                <div className="mt-4">
                  <PackageSelector options={selectorOptions.map((option) => ({ id: option.id, name: option.nombre, icon: option.icono }))} selected={selectedKind} onSelect={setSelectedKind} />
                </div>
              </div>
            )}

            <AnimatePresence mode="wait">
              <motion.div key={`${type}-${selectedKind}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                {type === "taquiza" && (
                  <PackageList
                    items={currentPackages}
                    renderItem={(item) => (
                      <PackageCard
                        title={item.nombre}
                        subtitle={`${item.tacos} tacos`}
                        price={item.precio}
                        includes={item.incluye}
                        cta="Seleccionar paquete"
                        onSelect={() => {}}
                      />
                    )}
                  />
                )}

                {type === "hotdogs" && (
                  <PackageList
                    items={currentPackages}
                    renderItem={(item) => (
                      <PackageCard
                        title={item.nombre}
                        subtitle={`${item.cantidad} hotdogs`}
                        price={item.precio}
                        includes={item.incluye}
                        cta="Seleccionar paquete"
                        onSelect={() => {}}
                      />
                    )}
                  />
                )}

                {type === "combos" && (
                  <PackageList
                    items={currentPackages}
                    renderItem={(item) => (
                      <PackageCard
                        title={item.nombre}
                        subtitle={`${item.tacos} tacos • ${item.hotdogs} hotdogs`}
                        price={item.precio}
                        includes={item.incluye}
                        cta="Seleccionar paquete"
                        onSelect={() => {}}
                      />
                    )}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PackageModal;
