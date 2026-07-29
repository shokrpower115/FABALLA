interface PackageIncludesProps {
  items: string[];
}

const PackageIncludes = ({ items }: PackageIncludesProps) => {
  return (
    <div className="mt-4 rounded-[20px] border border-[#1b1b1b]/10 bg-[#fff8e7] p-4">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9d0208]">Incluye</p>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="text-sm text-[#1b1b1b]/80">• {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default PackageIncludes;
