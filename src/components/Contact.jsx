import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/SWAPNILMANDEKAR-20" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/swapnil-mandekar/" },
  { icon: FaEnvelope, label: "Email", href: "mailto:swapnilavinashmandekar@gmail.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col border-t border-line">
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-[780px] text-center">
          <SectionHeading
            index="05"
            label="Contact"
            title={
              <>
                Let's build something <span className="text-rust">worth shipping.</span>
              </>
            }
          />

          <p className="text-mist leading-relaxed max-w-2xl mx-auto">
            Open to AI/ML, full-stack, and internship roles.
            <br />
            Reach out directly.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href="mailto:swapnilavinashmandekar@gmail.com"
              className="text-sm text-ink hover:text-rust transition-colors focus-ring"
            >
              swapnilavinashmandekar@gmail.com
            </a>
            <p className="text-sm text-mist">📍 Pune, Maharashtra, India</p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-8">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-surface border border-line text-mist hover:text-rust hover:border-rust transition-colors focus-ring"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <footer className="py-6 border-t border-line">
        <p className="font-mono text-[11px] text-mist text-center">
          Designed &amp; built by Swapnil Mandekar · 2026
        </p>
      </footer>
    </section>
  );
}
