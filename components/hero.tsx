import Link from "next/link"
import { AnimatedGridBackground } from "./animated-grid"
import { TaskFlowAnimation } from "./task-flow-animation"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <AnimatedGridBackground />
      <div className="pl-6 pr-6 py-16 md:py-24 lg:pl-12 xl:pl-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="max-w-2xl">
          {/* Styled tagline without logo */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-base font-medium text-sky-700 bg-sky-50 rounded-full border border-sky-200">
              Where Tasks Flow with Precision
            </span>
          </div>
          
          <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            TaskGrid Technologies
          </h1>
          <p className="mt-3 text-pretty text-slate-600 md:text-lg">
            We design, automate, and optimize systems so teams move faster with clarity.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#services"
              className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-white transition-colors hover:bg-sky-700"
            >
              View Services
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center rounded-md border border-slate-200 px-4 py-2 text-slate-900 transition-colors hover:border-slate-300"
            >
              Explore Careers
            </Link>
          </div>

          <div className="relative mt-10 h-8 w-full max-w-md" aria-hidden="true">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 400 40"
              preserveAspectRatio="none"
              role="img"
              aria-label="Flow underline decoration"
            >
              <path
                d="M0,20 C60,5 120,35 180,20 C240,5 300,35 360,20"
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                strokeLinecap="round"
                className="motion-safe:flow-dash"
              />
            </svg>
          </div>
          </div>

          {/* Animation Column */}
          <div className="hidden lg:block">
            <TaskFlowAnimation />
          </div>
        </div>
      </div>
    </section>
  )
}
