import SectionHeading from "./SectionHeading";

const TAGS = ["AI & ML Student", "Full-Stack Developer", "Computer Vision", "NLP", "Generative AI"];

export default function About() {
  return (
    <section id="about" className="px-6 py-16">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
        <div>
          <SectionHeading index="01" label="About" title={
            <>An engineer who ships the whole stack — <span className="text-rust">model to interface.</span></>
          } />
          <p className="text-mist leading-relaxed max-w-md -mt-4">
            Computer Science (AI &amp; Machine Learning) student at Vishwakarma Institute of
            Technology, Pune, building AI-powered applications end to end — from CNN
            ensembles and NLP pipelines to the React interfaces people actually use. Currently
            building an automated answer-evaluation system at IEEE CIS, and shipping side
            projects across agriculture, education, and systems monitoring.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 max-w-md">
            {TAGS.map((t) => (
              <span
                key={t}
                className="text-sm text-ink border border-line bg-surface rounded-full px-3.5 py-1.5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-rust text-cream font-display font-semibold flex items-center justify-center text-lg">
              SM
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-ink">Swapnil Mandekar</h3>
              <p className="font-mono text-[11px] text-mist">AI/ML Engineer — Full-Stack Developer</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-5 border-t border-line pt-5">
            <div>
              <p className="font-mono text-[10px] text-mist uppercase tracking-wide">College</p>
              <p className="text-sm text-ink font-medium mt-1">VIT Pune</p>
            </div>
            <div>
              <p className="font-mono text-[10px] text-mist uppercase tracking-wide">Degree</p>
              <p className="text-sm text-ink font-medium mt-1">B.Tech CS (AI/ML)</p>
            </div>
            <div>
              <p className="font-mono text-[10px] text-mist uppercase tracking-wide">CGPA</p>
              <p className="text-sm text-ink font-medium mt-1">9.18 / 10.0</p>
            </div>
            <div>
              <p className="font-mono text-[10px] text-mist uppercase tracking-wide">Location</p>
              <p className="text-sm text-ink font-medium mt-1">Pune, India</p>
            </div>
            <div className="col-span-2">
              <p className="font-mono text-[10px] text-mist uppercase tracking-wide">Status</p>
              <p className="text-sm text-ink font-medium mt-1">Open to work</p>
            </div>
          </div>

          <div className="mt-5 border-t border-line pt-4">
            <a
              href="mailto:swapnilavinashmandekar@gmail.com"
              className="font-mono text-xs text-rust hover:underline focus-ring"
            >
              swapnilavinashmandekar@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
