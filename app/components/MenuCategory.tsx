interface MenuCategoryProps {
  title: string;
  accent?: "light" | "dark";
}

const MenuCategory = ({ title, accent = "light" }: MenuCategoryProps) => {
  const className = accent === "dark"
    ? "rounded-full border border-white/10 bg-[#111111] px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-sm"
    : "rounded-full border border-[#1b1b1b]/10 bg-white px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#1b1b1b] shadow-sm";

  return <div className={className}>{title}</div>;
};

export default MenuCategory;
