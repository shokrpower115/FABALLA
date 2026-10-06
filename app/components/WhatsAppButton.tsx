import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../lib/negocio";

const WhatsAppButton = () => {
  return (
    <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(37,211,102,0.35)] transition hover:scale-105">
      <MessageCircle className="h-5 w-5" />
      WhatsApp
    </a>
  );
};

export default WhatsAppButton;
