import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-16 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <SectionHeading index="03" label="Experience" title="Where I've worked" />

        <div className="relative pl-8">
          <span className="absolute left-[5px] top-2 bottom-2 w-px bg-line" />
          <span className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-rust" />

          <div className="rounded-2xl border border-line bg-surface p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">AI Research Intern</h3>
                <p className="text-sm text-rust mt-0.5">IEEE Computational Intelligence Society (CIS), Pune Section</p>
              </div>
              <div className="font-mono text-xs text-mist text-left sm:text-right shrink-0">
                <div>Jun 2026 – Jul 2026</div>
                <div>Pune, India</div>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              {[
                "Building an automated answer-sheet evaluation system that scores descriptive answers using NLP and semantic similarity analysis.",
                "Generating automated scores and structured feedback to improve consistency in educational assessment.",
                "Designing the evaluation pipeline end to end — from OCR/extraction through scoring logic.",
              ].map((b) => (
                <li key={b} className="flex gap-2 text-sm text-mist leading-relaxed">
                  <span className="text-rust mt-1.5">·</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Python", "NLP", "Semantic Similarity", "Automated Scoring"].map((t) => (
                <span key={t} className="font-mono text-[11px] text-mist border border-line rounded-md px-2.5 py-1 bg-cream/40">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Similarity demo removed from Experience section per request */}
        </div>
      </div>
    </section>
  );
}
