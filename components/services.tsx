import { Settings2, Workflow, Database, LineChart, Code2, Building2, Brain, Palette } from "lucide-react"

export function Services() {
  const services = [
    {
      title: "Custom Software Development",
      desc: "Design, build, and ship tailored applications aligned to your workflows and goals.",
      Icon: Code2,
    },
    {
      title: "Enterprise Application Development",
      desc: "Scalable, secure systems for complex orgs—SLA-ready, compliant, and integration-first.",
      Icon: Building2,
    },
    {
      title: "AI Solutions",
      desc: "Integrate LLMs and intelligent agents to automate decisions, summarize data, and enhance experiences.",
      Icon: Brain,
    },
    {
      title: "UI/UX Design",
      desc: "Human-centered interfaces and design systems that balance clarity, speed, and accessibility.",
      Icon: Palette,
    },
    {
      title: "Workflow Automation",
      desc: "Event-driven workflows that reduce manual steps and eliminate bottlenecks.",
      Icon: Workflow,
    },
    {
      title: "Custom Integrations",
      desc: "Connect tools and data sources for smooth handoffs and a single source of truth.",
      Icon: Settings2,
    },
    {
      title: "Data Pipelines",
      desc: "Reliable ingest, transform, and delivery with observability and alerting built-in.",
      Icon: Database,
    },
    {
      title: "Dashboards & Analytics",
      desc: "Real-time visibility and insights so teams can act with confidence.",
      Icon: LineChart,
    },
  ]

  return (
    <section id="services" className="bg-white">
      <div className="px-12 py-14 lg:px-24 xl:px-32">
        <h2 className="text-xl font-semibold text-slate-900">Our Services</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-lg border border-slate-200 p-5 transition-colors hover:border-slate-300"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-sky-50">
                  <s.Icon className="h-5 w-5 text-sky-600" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
