import SectionHeading from "./SectionHeading";

const PROJECTS = [
  {
    name: "PlantGuard AI",
    tag: "Smart Farming Assistant",
    badge: "Ensemble CV",
    repo: "https://github.com/SWAPNILMANDEKAR-20/PlantGuard-AI---Plant-Disease-Detection-Smart-Farming-Assistant",
    desc: "A plant disease detection platform for farmers — a parallel ensemble of CNN, ResNet18, and MobileNetV2 drives diagnosis, alongside soil analysis, irrigation guidance, multilingual voice assistance, and PDF report generation.",
    bullets: ["Responsive React + Tailwind interface for farmers and agricultural users", "Multilingual voice assistance and client-side PDF report generation"],
    stack: ["React", "Vite", "Flask", "CNN", "ResNet18", "MobileNetV2"],
    accent: "rust",
  },
  {
    name: "TatvaAI",
    tag: "Multimodal News & Video Analysis",
    badge: "NLP Platform",
    repo: "https://github.com/SWAPNILMANDEKAR-20/TATV_AI",
    desc: "Summarizes news articles and video using multimodal deep learning — speech-to-text, NLP summarization, and a transformer-based fake news detector, served through a multilingual backend.",
    bullets: ["Speech-to-text and NLP summarization pipeline", "Transformer-based fake news detection"],
    stack: ["Python", "Flask", "Node.js", "NLP", "Transformers"],
    accent: "pine",
  },
  {
    name: "Resource Monitor",
    tag: "Real-Time System Dashboard",
    badge: "Systems",
    repo: "https://github.com/SWAPNILMANDEKAR-20/Resource-Monitoring-System",
    desc: "A JavaFX desktop dashboard for real-time CPU, memory, disk, and process monitoring, reaching into low-level Windows APIs via JNI, with AI-driven prediction layered on top of raw metrics.",
    bullets: ["JNI bridge to native Windows system APIs", "AI-driven resource prediction features"],
    stack: ["Java", "JavaFX", "JNI", "C", "Windows APIs"],
    accent: "gold",
  },
  {
    name: "Skill Swap",
    tag: "Student Collaboration Platform",
    badge: "Full-Stack",
    repo: "https://github.com/SWAPNILMANDEKAR-20/Skill-Swap",
    desc: "A full-stack platform where students showcase skills and find collaborators — secure auth, profile management, in-app messaging, and SQL-driven collaboration analytics.",
    bullets: ["Secure authentication and profile management", "Advanced SQL queries for search and collaboration analytics"],
    stack: ["Flask", "MySQL", "HTML", "CSS"],
    accent: "rust",
  },
];

const ACCENTS = {
  rust: "bg-rust",
  pine: "bg-pine",
  gold: "bg-gold",
};

export default function Projects() {
  return (
    <section id="work" className="px-6 py-16 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <SectionHeading index="04" label="Selected Projects" title="Things I've built" />
        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <article key={p.name} className="rounded-2xl border border-line bg-surface overflow-hidden">
              <div className={`h-1.5 ${ACCENTS[p.accent]}`} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] text-mist border border-line rounded-full px-2.5 py-1 bg-cream/40">
                    {p.badge}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">{p.name}</h3>
                <p className="font-mono text-[11px] text-mist mt-1 uppercase tracking-wide">{p.tag}</p>
                <p className="mt-4 text-sm text-mist leading-relaxed">{p.desc}</p>
                <ul className="mt-3 space-y-1.5">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-mist leading-relaxed">
                      <span className="text-rust mt-1.5">·</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="font-mono text-[11px] text-mist border border-line rounded-md px-2.5 py-1">
                      {s}
                    </span>
                  ))}
                </div>
                {p.repo && (
                  <div className="mt-4">
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 font-mono text-sm text-mist border border-line rounded-md px-3 py-2 hover:text-rust transition-colors"
                    >
                      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-surface border border-line text-mist font-mono">GitHub</span>
                      View source
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
