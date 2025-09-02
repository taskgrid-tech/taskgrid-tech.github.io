import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const aboutItems = [
  {
    title: "Mission",
    body: "Enable organizations to execute with clarity by aligning systems, teams, and tasks on a single operational grid.",
  },
  {
    title: "Approach",
    body: "We start with outcomes, then design lean processes and build reliable, observable tooling that scales.",
  },
  {
    title: "Values",
    body: "Precision, transparency, and pragmatism—delivering value early and often, without unnecessary complexity.",
  },
  {
    title: "Impact",
    body: "From startups to enterprises, we reduce cycle time, improve throughput, and raise the signal-to-noise ratio.",
  },
]

export function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="mb-8 md:mb-10">
          <h2 className="text-balance text-2xl font-semibold text-slate-800 md:text-3xl">About us</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            TaskGrid Technologies designs and builds systems that make complex work simple, traceable, and fast.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {aboutItems.map((item) => (
            <Card key={item.title} className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-slate-600">{item.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
