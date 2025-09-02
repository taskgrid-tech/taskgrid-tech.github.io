"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AnimatedGrid } from "@/components/animated-grid"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <AnimatedGrid />
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="flex flex-col items-start gap-8 md:gap-10">
          <div className="flex items-center gap-3">
            <Image
              src="/images/taskgrid-logo.png"
              alt="TaskGrid logo"
              width={40}
              height={40}
              className="h-10 w-10"
              priority
            />
            <span className="text-sm font-medium text-teal-700">Where task flows with precision.</span>
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-800 md:text-5xl">
            Orchestrate work with grid-like clarity and flowing efficiency
          </h1>

          <p className="max-w-xl text-pretty text-base leading-6 text-slate-600 md:text-lg md:leading-7">
            TaskGrid Technologies builds resilient systems and workflows so your teams move in sync—fast, secure, and
            observable from end to end.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#services">
              <Button className="bg-teal-600 hover:bg-teal-700">Explore Services</Button>
            </a>
            <a href="#clients">
              <Button variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100 bg-transparent">
                See Client Results
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
