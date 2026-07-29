"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { MessageCircle, Sparkles } from "lucide-react";
import MenuHeader from "./MenuHeader";
import MenuInfoCard from "./MenuInfoCard";
import MenuCategory from "./MenuCategory";
import MenuItemCard from "./MenuItemCard";
import MenuFooter from "./MenuFooter";
import type { MenuItem } from "../lib/menus/birria";

interface MenuDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  subtitle: string;
  description: string;
  note: string;
  menu: MenuItem[];
  accent?: "light" | "dark";
}

const MenuDialog = ({ open, onOpenChange, title, subtitle, description, note, menu, accent = "light" }: MenuDialogProps) => {
  const shellClassName = accent === "dark" ? "bg-[#1b1b1b] text-white" : "bg-[#fff8e7] text-[#1b1b1b]";
  const cardClassName = accent === "dark" ? "border-white/10 bg-[#111111] text-white" : "border-[#1b1b1b]/10 bg-white text-[#1b1b1b]";
  const mutedTextClassName = accent === "dark" ? "text-white/70" : "text-[#1b1b1b]/70";

  const categories = useMemo(() => {
    return Array.from(new Set(menu.map((item) => item.categoria)));
  }, [menu]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`max-h-[92vh] max-w-5xl overflow-hidden border-0 p-0 sm:rounded-[32px] ${shellClassName}`}>
        <div className="max-h-[92vh] overflow-y-auto">
          <div className="p-4 sm:p-6 lg:p-8">
            <MenuHeader title={title} subtitle={subtitle} description={description} accent={accent} />
            <MenuInfoCard note={note} accent={accent} />

            <div className="mt-8 space-y-8">
              {categories.map((category, categoryIndex) => (
                <motion.div key={category} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: categoryIndex * 0.05 }}>
                  <MenuCategory title={category} accent={accent} />
                  <div className="mt-4 space-y-3">
                    {menu.filter((item) => item.categoria === category).map((item, index) => (
                      <MenuItemCard
                        key={item.id}
                        name={item.nombre}
                        description={item.descripcion}
                        price={item.precio}
                        badge={item.badge}
                        index={index}
                        accent={accent}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <MenuFooter />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuDialog;
