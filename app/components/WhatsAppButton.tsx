import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../lib/negocio";

const WhatsAppButton = () => {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-whatsapp p-4 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(37,211,102,0.35)] transition hover:scale-105 sm:bottom-6 sm:right-6 sm:px-5 sm:py-3"
    >
      <MessageCircle className="h-6 w-6 sm:h-5 sm:w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
