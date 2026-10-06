"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import MenuHeader from "./MenuHeader";
import MenuInfoCard from "./MenuInfoCard";
import MenuCategory from "./MenuCategory";
import MenuItemCard from "./MenuItemCard";
import MenuFooter from "./MenuFooter";
import type { MenuItem } from "../lib/menus/tipos";

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
  const shellClassName = accent === "dark" ? "bg-tinta text-white" : "bg-crema text-tinta";

  const categories = useMemo(() => {
    return Array.from(new Set(menu.map((item) => item.categoria)));
  }, [menu]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent aria-describedby={undefined} className={`max-h-[92vh] max-w-5xl overflow-hidden border-0 p-0 sm:rounded-[32px] ${shellClassName}`}>
        <DialogTitle className="sr-only">{title}</DialogTitle>
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
