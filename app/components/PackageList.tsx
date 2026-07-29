import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PackageListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

const PackageList = <T,>({ items, renderItem }: PackageListProps<T>) => {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 grid gap-4 lg:grid-cols-2">
      {items.map((item, index) => (
        <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
          {renderItem(item)}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PackageList;
