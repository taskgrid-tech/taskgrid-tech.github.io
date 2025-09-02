import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const posts = [
  {
    title: "Designing Event-Driven Workflows",
    date: "2025-08-01",
    excerpt: "Principles for building reliable workflow systems.",
  },
  { title: "Integrations That Scale", date: "2025-07-15", excerpt: "Patterns for connecting tools with confidence." },
  { title: "From Data to Decisions", date: "2025-06-28", excerpt: "Building clear dashboards for focused action." },
]

export default function BlogIndexPage() {
  return (
    <main className="bg-white">
      <SiteHeader />
      <section className="px-12 py-14 lg:px-24 xl:px-32">
        <h1 className="text-2xl font-semibold text-slate-900">Blog</h1>
        <p className="mt-2 text-slate-600">Insights on workflow engineering, integrations, and analytics.</p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="rounded-lg border border-slate-200 p-5">
              <h2 className="text-base font-semibold text-slate-900">{p.title}</h2>
              <p className="mt-1 text-xs text-slate-600">{new Date(p.date).toLocaleDateString()}</p>
              <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
              <a
                href="#"
                className="mt-3 inline-block text-sm font-medium text-sky-700 hover:underline"
                aria-label={`Read more: ${p.title}`}
              >
                Read more
              </a>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
