import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../lib/negocio";

const MenuFooter = () => {
  return (
    <div className="sticky bottom-0 border-t border-tinta/10 bg-crema/95 px-4 py-4 shadow-[0_-8px_30px_rgba(27,27,27,0.06)] backdrop-blur sm:px-6 lg:px-8">
      <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-vino px-5 py-3 text-sm font-semibold text-white transition hover:bg-rojo">
        <MessageCircle className="h-4 w-4" /> Pedir por WhatsApp
      </a>
    </div>
  );
};

export default MenuFooter;
