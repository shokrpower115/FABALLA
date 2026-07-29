import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface EventCardProps {
  title: string;
  description: string;
  accent: string;
  onOpen: () => void;
}

const EventCard = ({ title, description, accent, onOpen }: EventCardProps) => {
  return (
    <motion.button
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={onOpen}
      className="w-full rounded-[28px] border border-[#1b1b1b]/10 bg-white p-8 text-left shadow-[0_20px_60px_rgba(27,27,27,0.06)] transition"
    >
      <div className="flex items-center justify-between">
        <span className="text-3xl">{accent}</span>
        <Sparkles className="h-5 w-5 text-[#f77f00]" />
      </div>
      <h3 className="mt-6 text-2xl font-bold text-[#1b1b1b]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#1b1b1b]/70">{description}</p>
      <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#9d0208]/10 px-4 py-2 text-sm font-semibold text-[#9d0208]">
        Ver paquetes <ArrowRight className="h-4 w-4" />
      </div>
    </motion.button>
  );
};

export default EventCard;
