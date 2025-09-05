"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function About() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])

  const aboutItems = [
    {
      title: "Mission",
      body: "Align systems, teams, and tasks on one operational grid so work flows with clarity.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Approach",
      body: "Outcome-first. Lean processes, reliable automation, and observable platforms that scale.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Values",
      body: "Precision, transparency, pragmatism—ship value early and often without excess complexity.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Impact",
      body: "Lower cycle times, higher throughput, and trustworthy visibility across the stack.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      gradient: "from-orange-500 to-red-600"
    },
  ]
  
  return (
    <motion.section 
      ref={containerRef}
      id="about" 
      className="bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Animated grid background with parallax */}
      <motion.div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' width='40' height='40' fill='none' stroke='rgb(148 163 184 / 0.1)'%3e%3cpath d='m0 .5h40m-40 40v-40'/%3e%3c/svg%3e")`,
          opacity: 0.3,
          y: backgroundY
        }} 
      />
      
      {/* Enhanced floating elements with parallax */}
      <motion.div 
        className="absolute top-20 right-10 w-32 h-32 bg-sky-100/30 rounded-full blur-2xl"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, -40]),
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.2])
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-32 h-32 bg-purple-100/30 rounded-full blur-2xl"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, 25]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 90])
        }}
      />
      
      <div className="relative px-4 py-12 sm:px-6 lg:px-12 xl:px-24 2xl:px-32 lg:py-20">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            About <span className="bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent">TaskGrid</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-sky-600 to-purple-600 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="mt-3 max-w-4xl mx-auto text-lg text-slate-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            At TaskGrid Technologies, we believe that every task, no matter how complex, can flow with precision when powered by the right technology. Founded with a vision to revolutionize how businesses operate, we specialize in creating software solutions that don't just meet requirements—they exceed expectations.
          </motion.p>
          <motion.p 
            className="mt-4 max-w-4xl mx-auto text-lg text-slate-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Our team of passionate developers, designers, and strategists work tirelessly to understand your unique challenges and craft solutions that drive real results. We're not just building software; we're building the future of work.
          </motion.p>
        </motion.div>

        {/* Enhanced Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {aboutItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15 + 0.9,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="group border border-slate-200/60 bg-white shadow-sm hover:shadow-xl transition-all duration-500 h-full relative overflow-hidden">
                {/* Animated background gradient on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${item.gradient.replace('from-', '').replace('to-', ', ')})`,
                  }}
                />
                
                <CardHeader className="pb-1 relative z-10">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className={`p-2.5 rounded-lg bg-gradient-to-br ${item.gradient} text-white shadow-sm flex-shrink-0`}
                      whileHover={{ 
                        scale: 1.15,
                        rotate: 10,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    <div className="min-w-0">
                      <CardTitle className="text-base font-bold text-slate-900 group-hover:text-slate-700 transition-colors leading-tight">
                        {item.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 relative z-10">
                  <motion.p 
                    className="text-base text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors"
                    initial={{ opacity: 0.8 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.15 + 1.2 }}
                  >
                    {item.body}
                  </motion.p>
                </CardContent>
                
                {/* Subtle hover effect indicator */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${item.gradient.replace('from-', '').replace('to-', ', ')})`,
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
