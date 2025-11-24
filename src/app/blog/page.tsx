import Link from "next/link";

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <header className="mb-16">
          <Link
            href="/"
            className="text-gray-600 hover:text-black mb-4 inline-block"
          >
            ← Back
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Writing
          </h1>
          <p className="text-xl text-gray-600">
            Thoughts on building, AI, systems, and craft.
          </p>
        </header>

        {/* Blog Posts - Coming Soon */}
        <section className="space-y-8">
          <div className="border-l-4 border-gray-200 pl-4 py-2">
            <p className="text-gray-600 italic">
              First posts coming soon. Building in public, one deliberate step
              at a time.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Kevin Suh
          </p>
        </footer>
      </div>
    </div>
  );
}
