export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Kevin Suh
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Builder. Investigator. Craftsman.
          </p>
        </header>

        {/* About */}
        <section className="mb-16 space-y-6 text-lg leading-relaxed">
          <p className="text-gray-800">
            I build products with intention. Every feature, every line of code,
            every decision is deliberate—driven by deep research, clear
            hypotheses, and relentless curiosity.
          </p>
          <p className="text-gray-800">
            I don't just ship features. I investigate problems, understand the
            underlying systems, and craft solutions that matter. When I form an
            opinion, it's built on evidence. When I build something, it's built
            to last.
          </p>
          <p className="text-gray-800">
            Currently exploring the intersection of AI infrastructure and
            developer tooling. Previously building at Finley and Approach Labs.
          </p>
        </section>

        {/* Links */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Work</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/kevinsuh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-black underline decoration-1 underline-offset-4"
                >
                  GitHub
                </a>
                <span className="text-gray-500 ml-2">— Code and projects</span>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kevinjsuh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-black underline decoration-1 underline-offset-4"
                >
                  LinkedIn
                </a>
                <span className="text-gray-500 ml-2">— Professional background</span>
              </li>
              <li>
                <span className="text-gray-800">Approach Labs</span>
                <span className="text-gray-500 ml-2">— AI infrastructure for developers</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Other Pursuits</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://fitness.kevinjsuh.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-black underline decoration-1 underline-offset-4"
                >
                  Fitness Journey
                </a>
                <span className="text-gray-500 ml-2">
                  — Training for Seattle Marathon + strength
                </span>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-800 hover:text-black underline decoration-1 underline-offset-4"
                >
                  Writing
                </a>
                <span className="text-gray-500 ml-2">
                  — Thoughts on building, AI, and systems
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Kevin Suh. Formidable by design.
          </p>
        </footer>
      </div>
    </div>
  );
}
