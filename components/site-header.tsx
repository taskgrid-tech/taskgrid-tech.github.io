import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-12">
        {/* Brand with logo + name for better recognition */}
        <Link href="/" className="flex items-center gap-2" aria-label="TaskGrid Technologies Home">
          <Image
            src="/images/taskgrid-logo.png"
            alt="TaskGrid logo"
            width={28}
            height={28}
            className="h-7 w-7"
            priority
          />
          <span className="font-semibold text-slate-900 text-sm sm:text-base">
            TaskGrid <span className="text-sky-600">Technologies</span>
          </span>
        </Link>
        {/* Main navigation */}
        <nav aria-label="Main" className="hidden gap-4 sm:gap-6 md:flex">
          <Link href="/#about" className="text-sm text-slate-600 hover:text-slate-900">
            About
          </Link>
          <Link href="/#services" className="text-sm text-slate-600 hover:text-slate-900">
            Services
          </Link>
          <Link href="/#clients" className="text-sm text-slate-600 hover:text-slate-900">
            Clients
          </Link>
          <Link href="/blog" className="text-sm text-slate-600 hover:text-slate-900">
            Blog
          </Link>
          <Link href="/careers" className="text-sm text-slate-600 hover:text-slate-900">
            Careers
          </Link>
          <Link href="/privacy" className="text-sm text-slate-600 hover:text-slate-900">
            Privacy
          </Link>
        </nav>
        
        {/* Mobile menu button - for future enhancement */}
        <button className="md:hidden p-2 text-slate-600 hover:text-slate-900" aria-label="Menu">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
