"use client"

export function Clients() {
  const clients = [
    { name: "Acme Corp", src: "/acme-corp-logo.png" },
    { name: "Northwind", src: "/northwind-logo.png" },
    { name: "Globex", src: "/globex-inspired-logo.png" },
    { name: "Umbrella", src: "/abstract-umbrella-logo.png" },
    { name: "Initech", src: "/generic-office-logo.png" },
    { name: "Soylent", src: "/soylent-logo.png" },
  ]
  const items = [...clients, ...clients] // duplicate for seamless loop

  return (
    <section id="clients" className="bg-white">
      <div className="px-12 py-14 lg:px-24 xl:px-32">
        <h2 className="text-xl font-semibold text-slate-900">Client Showcase</h2>
        <p className="mt-2 text-sm text-slate-600">Teams we’ve partnered with:</p>

        <div className="relative mt-6">
          <div
            className="group overflow-hidden rounded-md border border-slate-200 bg-white"
            role="region"
            aria-label="Client logos carousel"
          >
            <ul className="flex animate-[slide_24s_linear_infinite] items-center gap-8 p-6 hover:[animation-play-state:paused]">
              {items.map((c, i) => (
                <li key={`${c.name}-${i}`} className="flex min-w-[160px] items-center justify-center">
                  <div className="flex h-12 w-40 items-center justify-center rounded border border-slate-200 bg-slate-50">
                    <img
                      src={c.src || "/placeholder.svg?height=32&width=120&query=client%20logo"}
                      alt={`${c.name} logo`}
                      className="max-h-8 w-auto opacity-80 grayscale transition hover:opacity-100"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* subtle edge fades for readability */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
      <style jsx>{`
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-[slide_24s_linear_infinite] { animation: none; }
        }
      `}</style>
    </section>
  )
}
