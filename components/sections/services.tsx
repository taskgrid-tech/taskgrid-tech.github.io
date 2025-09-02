import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Grid2X2, Workflow, Cpu, ShieldCheck, LineChart, Layers, Brain, Palette } from "lucide-react"

const services = [
  {
    icon: Grid2X2,
    title: "System Design",
    body: "Modular architectures, clear boundaries, and reliable interfaces that evolve with your business.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    body: "Connect tools, reduce toil, and ensure tasks flow smoothly across teams.",
  },
  {
    icon: Cpu,
    title: "Platform Engineering",
    body: "Developer platforms, CI/CD pipelines, and runtime tooling to ship faster with confidence.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    body: "Built-in guardrails and observability with best practices for data and access.",
  },
  {
    icon: LineChart,
    title: "Analytics & Insights",
    body: "Metrics that matter: throughput, lead time, and reliability with clear dashboards.",
  },
  {
    icon: Layers,
    title: "Product Enablement",
    body: "Partnering with teams to embed operational excellence and product velocity.",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    body: "LLM-powered features, copilots, and agents that streamline operations and amplify teams.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    body: "Design systems and interfaces that are accessible, performant, and intuitive.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="mb-8 md:mb-10">
          <h2 className="text-balance text-2xl font-semibold text-slate-800 md:text-3xl">Our services</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            We bring grid discipline and flow to your most critical initiatives.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map(({ icon: Icon, title, body }) => (
            <Card key={title} className="border-slate-200">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-sky-50">
                  <Icon className="h-5 w-5 text-sky-500" aria-hidden="true" />
                </div>
                <CardTitle className="text-slate-800">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-slate-600">{body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
