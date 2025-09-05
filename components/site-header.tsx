"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

// Smooth scrolling function for section navigation
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

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
          <span className="font-semibold text-slate-900 text-base sm:text-lg md:text-xl">
            TaskGrid <span className="text-sky-600">Technologies</span>
          </span>
        </Link>
        {/* Main navigation */}
        <nav aria-label="Main" className="hidden gap-4 sm:gap-6 md:flex">
          <a 
            href="#about" 
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            onClick={(e) => handleSectionClick(e, 'about')}
          >
            About
          </a>
          <a 
            href="#services" 
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            onClick={(e) => handleSectionClick(e, 'services')}
          >
            Services
          </a>
          <a 
            href="#process" 
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            onClick={(e) => handleSectionClick(e, 'process')}
          >
            Process
          </a>
          <a 
            href="#clients" 
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            onClick={(e) => handleSectionClick(e, 'clients')}
          >
            Clients
          </a>
          <Link href="/blog" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
            Blog
          </Link>
          <Link href="/careers" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
            Careers
          </Link>
          <Link href="/privacy" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
            Privacy
          </Link>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-slate-900" 
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="px-4 py-2 space-y-1">
            <a
              href="#about" 
              className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors cursor-pointer"
              onClick={(e) => handleSectionClick(e, 'about')}
            >
              About
            </a>
            <a
              href="#services" 
              className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors cursor-pointer"
              onClick={(e) => handleSectionClick(e, 'services')}
            >
              Services
            </a>
            <a
              href="#process" 
              className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors cursor-pointer"
              onClick={(e) => handleSectionClick(e, 'process')}
            >
              Process
            </a>
            <a
              href="#clients" 
              className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors cursor-pointer"
              onClick={(e) => handleSectionClick(e, 'clients')}
            >
              Clients
            </a>
            <Link 
              href="/blog" 
              className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/careers" 
              className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link 
              href="/privacy" 
              className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Privacy
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
