"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Clients() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 30])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9])

  const clients = [
    { name: "Acme Corp", src: "/acme-corp-logo.png" },
    { name: "Northwind", src: "/northwind-logo.png" },
    { name: "Globex", src: "/globex-inspired-logo.png" },
    { name: "Umbrella", src: "/abstract-umbrella-logo.png" },
    { name: "Initech", src: "/generic-office-logo.png" },
    { name: "Soylent", src: "/soylent-logo.png" },
  ]
  const items = [...clients, ...clients] // duplicate for seamless loop

  return (
    <motion.section 
      ref={containerRef}
      id="clients" 
      className="bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Parallax background elements */}
      <motion.div
        className="absolute top-10 left-[10%] w-20 h-20 bg-gradient-to-br from-sky-100 to-blue-200 rounded-full opacity-20 blur-xl"
        style={{ y: y1, scale }}
      />
      <motion.div
        className="absolute bottom-10 right-[15%] w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-lg opacity-25 blur-lg"
        style={{ 
          y: y2, 
          rotate: useTransform(scrollYProgress, [0, 1], [0, 45])
        }}
      />
      <motion.div
        className="absolute top-1/2 left-[5%] w-8 h-8 bg-gradient-to-br from-purple-100 to-pink-200 rounded-full opacity-30"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, -20]),
          x: useTransform(scrollYProgress, [0, 1], [0, 10])
        }}
      />

      <div className="px-12 py-14 lg:px-24 xl:px-32 relative">
        {/* Header with staggered animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-xl font-semibold text-slate-900"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Client Showcase
          </motion.h2>
          <motion.p 
            className="mt-2 text-sm text-slate-600"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Teams we've partnered with:
          </motion.p>
        </motion.div>

        {/* Client carousel with enhanced animations */}
        <motion.div 
          className="relative mt-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="group overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm"
            role="region"
            aria-label="Client logos carousel"
            whileHover={{ 
              boxShadow: "0 10px 25px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
              scale: 1.02
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul 
              className="flex animate-[slide_24s_linear_infinite] items-center gap-8 p-6 hover:[animation-play-state:paused]"
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -10]) }}
            >
              {items.map((client, i) => (
                <motion.li 
                  key={`${client.name}-${i}`} 
                  className="flex min-w-[160px] items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="flex h-12 w-40 items-center justify-center rounded border border-slate-200 bg-slate-50 transition-all duration-300"
                    whileHover={{ 
                      backgroundColor: "rgb(248 250 252)",
                      borderColor: "rgb(148 163 184)"
                    }}
                  >
                    <motion.img
                      src={client.src || "/placeholder.svg?height=32&width=120&query=client%20logo"}
                      alt={`${client.name} logo`}
                      className="max-h-8 w-auto opacity-80 grayscale transition-all duration-300"
                      whileHover={{ 
                        opacity: 1,
                        filter: "grayscale(0%)",
                        scale: 1.1
                      }}
                    />
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          {/* Enhanced edge fades with animations */}
          <motion.div 
            className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          />
          <motion.div 
            className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Additional animated decoration */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
        </motion.div>
      </div>
      
      <style jsx>{`
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-[slide_24s_linear_infinite] { animation: none; }
        }
      `}</style>
    </motion.section>
  )
}
