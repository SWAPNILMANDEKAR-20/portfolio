import SectionHeading from "./SectionHeading";

const GROUPS = [
  { label: "Programming Languages", items: ["Python", "C", "C++", "Java", "SQL", "JavaScript"] },
  { label: "AI / Machine Learning", items: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Generative AI", "Transfer Learning", "CNN", "ResNet18", "MobileNetV2"] },
  { label: "Data", items: ["NumPy", "Pandas", "OpenCV", "Data Preprocessing", "Feature Engineering", "Visualization"] },
  { label: "Full-Stack", items: ["React.js", "Vite", "Flask", "Node.js", "REST APIs", "Firebase", "MySQL", "HTML/CSS"] },
  { label: "Tools", items: ["Git", "GitHub", "Postman", "Firebase Auth"] },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-16 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <SectionHeading index="02" label="Technical Skills" title="What I build with" />
        <div className="grid sm:grid-cols-2 gap-5">
          {GROUPS.map((g) => (
            <div key={g.label} className="rounded-2xl border border-line bg-surface p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-rust" />
                <span className="font-mono text-xs uppercase tracking-wide text-mist">{g.label}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span
                    key={i}
                    className="text-sm text-ink border border-line rounded-lg px-3 py-1.5 bg-cream/40"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
