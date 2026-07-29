import { Sparkles } from "lucide-react";

interface MenuHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  accent?: "light" | "dark";
}

const MenuHeader = ({ title, subtitle, description, accent = "light" }: MenuHeaderProps) => {
  const shellClassName = accent === "dark" ? "border-white/10 bg-[#111111] text-white" : "border-[#1b1b1b]/10 bg-white text-[#1b1b1b]";
  const mutedTextClassName = accent === "dark" ? "text-white/70" : "text-[#1b1b1b]/70";
  const accentTextClassName = accent === "dark" ? "text-[#f77f00]" : "text-[#9d0208]";

  return (
    <div className={`rounded-[28px] border p-6 shadow-sm sm:p-8 ${shellClassName}`}>
      <div className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] ${accentTextClassName}`}>
        <Sparkles className="h-4 w-4" /> FABALLA
      </div>
      <h2 className="mt-4 text-3xl font-black sm:text-4xl">{title}</h2>
      <p className={`mt-2 text-sm font-semibold uppercase tracking-[0.25em] ${accent === "dark" ? "text-[#f77f00]" : "text-[#f77f00]"}`}>{subtitle}</p>
      <p className={`mt-4 max-w-2xl text-base leading-8 ${mutedTextClassName}`}>{description}</p>
    </div>
  );
};

export default MenuHeader;
