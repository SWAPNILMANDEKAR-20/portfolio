export default function SectionHeading({ index, label, title }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-rust">{index}</span>
        <span className="w-8 h-px bg-line" />
        <span className="font-mono text-xs tracking-widest text-mist uppercase">{label}</span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink">{title}</h2>
    </div>
  );
}
