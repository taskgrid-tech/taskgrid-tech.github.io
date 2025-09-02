"use client"

type Client = {
  name: string
  // For demo, you can replace placeholder with real logos later
  logo?: string
}

const clients: Client[] = [
  { name: "Acme Corp" },
  { name: "Globex" },
  { name: "Inertia Labs" },
  { name: "Northwind" },
  { name: "Umbra Systems" },
  { name: "Vertex" },
]

export function ClientsSlider() {
  const items = [...clients, ...clients] // duplicate for seamless loop

  return (
    <section id="clients" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="mb-8 md:mb-10">
          <h2 className="text-balance text-2xl font-semibold text-slate-800 md:text-3xl">Client showcase</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            A selection of teams we’ve helped unlock flow and precision.
          </p>
        </div>

        <div className="relative">
          <div
            className="group overflow-hidden rounded-md border border-slate-200 bg-white"
            role="region"
            aria-label="Client logos carousel"
          >
            <ul className="flex animate-[slide_25s_linear_infinite] items-center gap-8 p-6 [--tw:100%] hover:[animation-play-state:paused]">
              {items.map((c, i) => (
                <li key={`${c.name}-${i}`} className="flex min-w-[160px] items-center justify-center">
                  {/* Replace this placeholder badge with real logos */}
                  <div className="flex h-12 w-40 items-center justify-center rounded border border-slate-200 bg-slate-50">
                    <span className="text-sm font-medium text-slate-700">{c.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-[slide_25s_linear_infinite] {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
