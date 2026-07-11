export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex items-center px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-mono text-xs tracking-widest text-mist uppercase mb-5">
          Pune, India — CS (AI/ML), VIT
        </p>
        <h1 className="font-display text-[2.5rem] sm:text-6xl font-semibold leading-[1.08] text-ink max-w-2xl mx-auto">
          Building intelligent AI solutions
          <br />
          that <span className="text-rust">solve real-world problems.</span>
        </h1>
        <p className="mt-6 text-mist text-lg leading-relaxed max-w-xl mx-auto">
          I'm Swapnil Mandekar, a Computer Science (AI/ML) student at VIT Pune passionate
          about building AI-powered applications, scalable full-stack solutions, and
          intelligent systems that create real impact.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="#work"
            className="font-mono text-sm bg-ink text-cream font-medium px-5 py-2.5 rounded-full hover:bg-rust transition-colors focus-ring"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
