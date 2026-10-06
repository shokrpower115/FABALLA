interface MenuInfoCardProps {
  note: string;
  accent?: "light" | "dark";
}

const MenuInfoCard = ({ note, accent = "light" }: MenuInfoCardProps) => {
  const className = accent === "dark"
    ? "mt-4 rounded-[24px] border border-white/10 bg-white/10 p-4 text-sm leading-7 text-white/80"
    : "mt-4 rounded-[24px] border border-vino/10 bg-vino/5 p-4 text-sm leading-7 text-tinta/75";

  return <div className={className}>{note}</div>;
};

export default MenuInfoCard;
