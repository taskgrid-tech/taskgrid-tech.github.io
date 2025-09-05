"use client"

import { Settings2, Workflow, Database, LineChart, Code2, Building2, Brain, Palette } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Services() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const services = [
    {
      title: "Custom Software Development",
      desc: "Design, build, and ship tailored applications aligned to your workflows and goals.",
      Icon: Code2,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Enterprise Application Development",
      desc: "Scalable, secure systems for complex orgs—SLA-ready, compliant, and integration-first.",
      Icon: Building2,
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "AI Solutions",
      desc: "Integrate LLMs and intelligent agents to automate decisions, summarize data, and enhance experiences.",
      Icon: Brain,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "UI/UX Design",
      desc: "Human-centered interfaces and design systems that balance clarity, speed, and accessibility.",
      Icon: Palette,
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Workflow Automation",
      desc: "Event-driven workflows that reduce manual steps and eliminate bottlenecks.",
      Icon: Workflow,
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "Custom Integrations",
      desc: "Connect tools and data sources for smooth handoffs and a single source of truth.",
      Icon: Settings2,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Data Pipelines",
      desc: "Reliable ingest, transform, and delivery with observability and alerting built-in.",
      Icon: Database,
      gradient: "from-slate-500 to-gray-600"
    },
    {
      title: "Dashboards & Analytics",
      desc: "Real-time visibility and insights so teams can act with confidence.",
      Icon: LineChart,
      gradient: "from-yellow-500 to-orange-600"
    },
  ]

  return (
    <motion.section 
      ref={containerRef}
      id="services" 
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
        className="absolute top-20 left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-2xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-100/30 rounded-full blur-2xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 30]) }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/4 w-20 h-20 bg-purple-100/20 rounded-full blur-xl"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, -30]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 180])
        }}
      />
      
      <div className="relative px-4 py-12 sm:px-6 lg:px-12 xl:px-24 2xl:px-32 lg:py-20">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
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
            Our <span className="bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-sky-600 to-purple-600 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="mt-3 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            We deliver end-to-end solutions that transform how your business operates, from custom software development to intelligent automation.
          </motion.p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div 
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1 + 0.9,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="group border border-slate-200/60 bg-white shadow-sm hover:shadow-xl transition-all duration-500 h-full relative overflow-hidden">
                {/* Animated background gradient on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${service.gradient.replace('from-', '').replace('to-', ', ')})`,
                  }}
                />
                
                <CardHeader className="pb-3 relative z-10">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className={`p-2.5 rounded-lg bg-gradient-to-br ${service.gradient} text-white shadow-sm flex-shrink-0`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <service.Icon className="w-5 h-5" />
                    </motion.div>
                    <div className="min-w-0">
                      <CardTitle className="text-base font-bold text-slate-900 group-hover:text-slate-700 transition-colors leading-tight">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 relative z-10">
                  <motion.p 
                    className="text-base text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors"
                    initial={{ opacity: 0.8 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 1.2 }}
                  >
                    {service.desc}
                  </motion.p>
                </CardContent>
                
                {/* Subtle hover effect indicators */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${service.gradient.replace('from-', '').replace('to-', ', ')})`,
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
