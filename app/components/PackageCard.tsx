import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";

interface PackageCardProps {
  title: string;
  subtitle?: string;
  price: number;
  includes: string[];
  cta: string;
  onSelect: () => void;
}

const PackageCard = ({ title, subtitle, price, includes, cta, onSelect }: PackageCardProps) => {
  const whatsappMessage = `Hola, me interesa cotizar el siguiente paquete:\n\nTipo: ${title}\nPrecio: $${price}\n\n¿Podrían darme más información?`;

  return (
    <motion.article whileHover={{ y: -3, scale: 1.01 }} className="rounded-[24px] border border-[#1b1b1b]/10 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="text-xl font-bold text-[#1b1b1b]">{title}</h4>
          {subtitle && <p className="mt-2 text-sm text-[#1b1b1b]/70">{subtitle}</p>}
        </div>
        <div className="rounded-full bg-[#f77f00]/10 px-3 py-1 text-sm font-semibold text-[#f77f00]">
          ${price.toLocaleString("es-MX")}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9d0208]">Incluye</p>
        <ul className="mt-3 space-y-2">
          {includes.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-[#1b1b1b]/75">
              <Check className="h-4 w-4 text-[#f77f00]" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <a href={`https://wa.me/5216671234567?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#9d0208] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#d00000]">
        <MessageCircle className="h-4 w-4" /> {cta}
      </a>
    </motion.article>
  );
};

export default PackageCard;
