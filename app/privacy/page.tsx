import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <SiteHeader />
      <article className="px-12 py-14 lg:px-24 xl:px-32 max-w-4xl">
        <h1 className="text-2xl font-semibold text-slate-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mt-6 space-y-4 text-slate-600">
          <p>
            At TaskGrid Technologies, we respect your privacy. This policy explains what information we collect and how
            we use it.
          </p>
          <h2 className="mt-6 text-lg font-semibold text-slate-900">Information We Collect</h2>
          <p>We may collect contact details you provide and usage data to improve our services.</p>
          <h2 className="mt-6 text-lg font-semibold text-slate-900">How We Use Information</h2>
          <p>We use information to provide and improve our offerings, respond to inquiries, and ensure security.</p>
          <h2 className="mt-6 text-lg font-semibold text-slate-900">Your Choices</h2>
          <p>
            You can request access, correction, or deletion of your personal information by contacting
            privacy@taskgrid.example.
          </p>
          <h2 className="mt-6 text-lg font-semibold text-slate-900">Contact</h2>
          <p>Questions? Email privacy@taskgrid.example.</p>
        </section>
      </article>
      <SiteFooter />
    </main>
  )
}
