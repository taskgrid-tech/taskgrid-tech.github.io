"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Clients } from "@/components/clients"

export default function HomePage() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Global parallax background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1])

  return (
    <motion.main 
      ref={containerRef}
      className="bg-white relative overflow-hidden"
    >
      {/* Global parallax background elements */}
      <motion.div
        className="fixed top-0 left-0 w-full h-[200vh] pointer-events-none z-0"
        style={{ y: backgroundY, opacity }}
      >
        <div className="absolute top-[10vh] left-[5%] w-64 h-64 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute top-[40vh] right-[10%] w-48 h-48 bg-gradient-to-br from-emerald-100/30 to-teal-100/30 rounded-full blur-3xl" />
        <div className="absolute top-[70vh] left-[15%] w-32 h-32 bg-gradient-to-br from-pink-100/30 to-rose-100/30 rounded-full blur-2xl" />
        <div className="absolute top-[100vh] right-[5%] w-40 h-40 bg-gradient-to-br from-indigo-100/30 to-blue-100/30 rounded-full blur-2xl" />
      </motion.div>

      <div className="relative z-10">
        <SiteHeader />
        <Hero />
        <About />
        <Services />
        <Process />
        <Clients />
        <CtaSection />
        <SiteFooter />
      </div>
    </motion.main>
  )
}

function CtaSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 2])

  return (
    <motion.section 
      ref={containerRef}
      className="bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/2 left-[10%] w-24 h-24 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-full opacity-20 blur-xl"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, -30]),
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.2])
        }}
      />
      <motion.div
        className="absolute bottom-4 right-[15%] w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-200 rounded-lg opacity-25 blur-lg"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, 20]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 45])
        }}
      />

      <div className="px-12 py-14 lg:px-24 xl:px-32 relative">
        <motion.div 
          className="rounded-lg border border-slate-200 p-6 md:flex md:items-center md:justify-between bg-white shadow-sm"
          style={{ scale, rotate }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-lg font-semibold text-slate-900"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Ready to bring precision to your workflows?
            </motion.h3>
            <motion.p 
              className="mt-1 text-sm text-slate-600"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Let's align your tools and teams with TaskGrid.
            </motion.p>
          </motion.div>
          <motion.a
            href="mailto:hello@taskgrid.example"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-white transition-all duration-300 hover:bg-emerald-600 md:mt-0 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -3px rgb(5 150 105 / 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Contact Us</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}
