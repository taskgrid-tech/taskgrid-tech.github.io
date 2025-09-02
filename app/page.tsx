import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Clients } from "@/components/clients"

export default function HomePage() {
  return (
    <main className="bg-white">
      <SiteHeader />
      <Hero />
      <About />
      <Services />
      <Clients />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}

function CtaSection() {
  return (
    <section className="bg-white">
      <div className="px-12 py-14 lg:px-24 xl:px-32">
        <div className="rounded-lg border border-slate-200 p-6 md:flex md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Ready to bring precision to your workflows?</h3>
            <p className="mt-1 text-sm text-slate-600">Let’s align your tools and teams with TaskGrid.</p>
          </div>
          <a
            href="mailto:hello@taskgrid.example"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-white transition-colors hover:bg-emerald-600 md:mt-0"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
