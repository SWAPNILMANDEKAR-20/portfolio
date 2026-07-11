import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#work", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display font-semibold text-base text-ink focus-ring"
        >
          Swapnil.
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden sm:flex items-center gap-7 font-mono text-xs uppercase tracking-wide text-mist">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="hover:text-rust transition-colors focus-ring"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <a
            href="/Swapnil_Mandekar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center rounded-full border border-line px-5 py-2 text-xs font-mono uppercase tracking-wide text-ink hover:bg-rust hover:text-white transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}