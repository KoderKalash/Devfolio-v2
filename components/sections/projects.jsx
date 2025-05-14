export function ProjectsSection() {
  return (
    <section className="bg-neutral-900 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <div className="space-y-6">
        <div className="bg-neutral-800 p-4 rounded-lg">
          <h3 className="font-semibold text-lg">Unify</h3>
          <p className="text-sm text-neutral-400">Redefined UI building for developers. Quickly add components, themes, and responsive layouts to your app at any scale.</p>
          <p className="mt-2 text-xs text-neutral-500">Oct 2024 – Nov 2024</p>
          <div className="mt-2 flex flex-wrap gap-2 text-xs text-white">
            <span className="bg-neutral-700 px-2 py-1 rounded">Next.js</span>
            <span className="bg-neutral-700 px-2 py-1 rounded">TypeScript</span>
            <span className="bg-neutral-700 px-2 py-1 rounded">TailwindCSS</span>
            <span className="bg-neutral-700 px-2 py-1 rounded">Framer Motion</span>
          </div>
        </div>
        <div className="bg-neutral-800 p-4 rounded-lg">
          <h3 className="font-semibold text-lg">Bidmaster</h3>
          <p className="text-sm text-neutral-400">A fast, intuitive platform where users can bid, win, and save on top products and services in real-time.</p>
          <p className="mt-2 text-xs text-neutral-500">Oct 2024 – Oct 2024</p>
          <div className="mt-2 flex flex-wrap gap-2 text-xs text-white">
            <span className="bg-neutral-700 px-2 py-1 rounded">Next.js</span>
            <span className="bg-neutral-700 px-2 py-1 rounded">TypeScript</span>
            <span className="bg-neutral-700 px-2 py-1 rounded">Docker</span>
            <span className="bg-neutral-700 px-2 py-1 rounded">Prisma</span>
            <span className="bg-neutral-700 px-2 py-1 rounded">Supabase</span>
          </div>
        </div>
      </div>
    </section>
  );
}