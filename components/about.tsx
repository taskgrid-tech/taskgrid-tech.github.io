import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function About() {
  const aboutItems = [
    {
      title: "Mission",
      body: "Align systems, teams, and tasks on one operational grid so work flows with clarity.",
    },
    {
      title: "Approach",
      body: "Outcome-first. Lean processes, reliable automation, and observable platforms that scale.",
    },
    {
      title: "Values",
      body: "Precision, transparency, pragmatism—ship value early and often without excess complexity.",
    },
    {
      title: "Impact",
      body: "Lower cycle times, higher throughput, and trustworthy visibility across the stack.",
    },
  ]
  return (
    <section id="about" className="bg-white">
      <div className="px-12 py-14 lg:px-24 xl:px-32">
        <h2 className="text-xl font-semibold text-slate-900">About Us</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          At TaskGrid Technologies, we believe that every task, no matter how complex, can flow with precision when powered by the right technology. Founded with a vision to revolutionize how businesses operate, we specialize in creating software solutions that don't just meet requirements—they exceed expectations.

          <br />Our team of passionate developers, designers, and strategists work tirelessly to understand your unique challenges and craft solutions that drive real results. We're not just building software; we're building the future of work.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {aboutItems.map((item) => (
            <Card key={item.title} className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-900">{item.title}</CardTitle>
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
