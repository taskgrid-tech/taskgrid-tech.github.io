import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export default function CareersPage() {
  const roles = [
    { 
      title: "Backend Engineer", 
      type: "Full-time", 
      location: "Remote",
      slug: "senior-workflow-engineer",
      description: "Design and implement scalable workflow automation systems with modern technologies."
    },
    { 
      title: "Integration Specialist", 
      type: "Full-time", 
      location: "Remote",
      slug: "integration-specialist",
      description: "Build and maintain integrations between various software systems and APIs."
    },
    { 
      title: "Frontend Developer (Dashboards)", 
      type: "Contract", 
      location: "Remote",
      slug: "frontend-developer-dashboards",
      description: "Develop responsive dashboard interfaces with data visualization components."
    },
  ]

  return (
    <main className="bg-white">
      <SiteHeader />
      <section className="px-4 py-8 sm:px-6 lg:px-12 xl:px-24 2xl:px-32 lg:py-14">
        <h1 className="text-2xl font-semibold text-slate-900">Careers</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Join TaskGrid Technologies and help build precise, reliable systems that make work flow.
        </p>

        <div className="mt-6 space-y-4">
          {roles.map((role) => (
            <div key={role.title} className="rounded-lg border border-slate-200 p-4 sm:p-6 transition-shadow hover:shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-slate-900">{role.title}</h2>
                  <div className="mt-1 flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-slate-600">
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                      {role.type}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 bg-sky-500 rounded-full" />
                      {role.location}
                    </span>
                  </div>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    {role.description}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row sm:ml-6 gap-2 sm:gap-3">
                  <Link
                    href={`/careers/${role.slug}`}
                    className="inline-flex items-center justify-center rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-200 text-center"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/careers/${role.slug}#apply`}
                    className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-700 text-center"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-600">Don’t see a fit? Send your resume to careers@taskgrid.example.</p>
      </section>
      <SiteFooter />
    </main>
  )
}
