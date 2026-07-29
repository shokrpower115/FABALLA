import { MessageCircle } from "lucide-react";

const MenuFooter = () => {
  return (
    <div className="sticky bottom-0 border-t border-[#1b1b1b]/10 bg-[#fff8e7]/95 px-4 py-4 shadow-[0_-8px_30px_rgba(27,27,27,0.06)] backdrop-blur sm:px-6 lg:px-8">
      <a href="https://wa.me/5216673342261" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-[#9d0208] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d00000]">
        <MessageCircle className="h-4 w-4" /> Pedir por WhatsApp
      </a>
    </div>
  );
};

export default MenuFooter;
