import { motion } from "framer-motion";

interface PackageSelectorProps {
  options: Array<{ id: string; name: string; icon: string }>;
  selected: string;
  onSelect: (value: string) => void;
}

const PackageSelector = ({ options, selected, onSelect }: PackageSelectorProps) => {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {options.map((option) => {
        const isSelected = selected === option.id;
        return (
          <motion.button
            key={option.id}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(option.id)}
            className={`rounded-[20px] border px-4 py-4 text-left transition ${isSelected ? "border-[#9d0208] bg-[#9d0208]/10" : "border-[#1b1b1b]/10 bg-white"}`}
          >
            <div className="text-2xl">{option.icon}</div>
            <p className="mt-3 font-semibold text-[#1b1b1b]">{option.name}</p>
          </motion.button>
        );
      })}
    </div>
  );
};

export default PackageSelector;
