import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { whatsappUrl } from "../lib/negocio";

interface PackageCardProps {
  title: string;
  subtitle?: string;
  price: number;
  includes: string[];
  cta: string;
}

const PackageCard = ({ title, subtitle, price, includes, cta }: PackageCardProps) => {
  const whatsappMessage = `Hola, me interesa cotizar el siguiente paquete:\n\nTipo: ${title}\nPrecio: $${price}\n\n¿Podrían darme más información?`;

  return (
    <motion.article whileHover={{ y: -3, scale: 1.01 }} className="rounded-[24px] border border-tinta/10 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="text-xl font-bold text-tinta">{title}</h4>
          {subtitle && <p className="mt-2 text-sm text-tinta/70">{subtitle}</p>}
        </div>
        <div className="rounded-full bg-naranja/10 px-3 py-1 text-sm font-semibold text-naranja">
          ${price.toLocaleString("es-MX")}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vino">Incluye</p>
        <ul className="mt-3 space-y-2">
          {includes.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-tinta/75">
              <Check className="h-4 w-4 text-naranja" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <a href={whatsappUrl(whatsappMessage)} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-vino px-4 py-2 text-sm font-semibold text-white transition hover:bg-rojo">
        <MessageCircle className="h-4 w-4" /> {cta}
      </a>
    </motion.article>
  );
};

export default PackageCard;
