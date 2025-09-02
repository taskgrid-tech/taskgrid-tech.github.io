import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="flex flex-col gap-3 px-4 py-6 sm:px-6 lg:px-12 xl:px-24 2xl:px-32 md:flex-row md:items-center md:justify-between lg:py-8">
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} TaskGrid Technologies. All rights reserved.
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-4">
          <Link href="/privacy" className="text-sm text-slate-600 hover:text-slate-900">
            Privacy
          </Link>
          <Link href="/careers" className="text-sm text-slate-600 hover:text-slate-900">
            Careers
          </Link>
          <Link href="/blog" className="text-sm text-slate-600 hover:text-slate-900">
            Blog
          </Link>
        </nav>
      </div>
    </footer>
  )
}
