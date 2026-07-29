import { motion } from "framer-motion";

interface MenuItemCardProps {
  name: string;
  description: string;
  price: number;
  badge?: string;
  index: number;
  accent?: "light" | "dark";
}

const MenuItemCard = ({ name, description, price, badge, index, accent = "light" }: MenuItemCardProps) => {
  const shellClassName = accent === "dark"
    ? "border-white/10 bg-[#111111] text-white"
    : "border-[#1b1b1b]/10 bg-white text-[#1b1b1b]";
  const mutedTextClassName = accent === "dark" ? "text-white/70" : "text-[#1b1b1b]/70";
  const priceClassName = accent === "dark" ? "bg-[#f77f00]/15 text-[#f77f00]" : "bg-[#9d0208]/10 text-[#9d0208]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className={`flex items-start justify-between gap-4 rounded-[24px] border p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-5 ${shellClassName}`}
    >
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          {badge && (
            <span className="rounded-full bg-[#f77f00]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f77f00]">
              {badge}
            </span>
          )}
        </div>
        <p className={`mt-2 text-sm leading-7 ${mutedTextClassName}`}>{description}</p>
      </div>
      <div className={`shrink-0 rounded-full px-3 py-2 text-sm font-bold ${priceClassName}`}>
        ${price}
      </div>
    </motion.div>
  );
};

export default MenuItemCard;
