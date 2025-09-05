"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Search, 
  Palette, 
  Code2, 
  Rocket, 
  HeadphonesIcon,
  ArrowRight,
  CheckCircle
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useScrollAnimation, useParallax } from "@/hooks/use-scroll-animation"

export function Process() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const parallaxY = useParallax(-0.3)

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We dive deep into your business requirements, existing workflows, and pain points to understand what needs to be built.",
      icon: Search,
      gradient: "from-blue-500 to-cyan-600",
      details: [
        "Stakeholder interviews",
        "Technical requirements gathering", 
        "System architecture planning",
        "Timeline and budget estimation"
      ]
    },
    {
      step: "02", 
      title: "Design & Planning",
      description: "Create detailed wireframes, user interfaces, and technical specifications that align with your business goals.",
      icon: Palette,
      gradient: "from-purple-500 to-pink-600",
      details: [
        "UI/UX design and prototyping",
        "Database design and modeling",
        "API specification and documentation",
        "Development milestone planning"
      ]
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build your solution using modern technologies with continuous testing and quality assurance throughout the process.",
      icon: Code2,
      gradient: "from-emerald-500 to-teal-600",
      details: [
        "Agile development methodology",
        "Automated testing and CI/CD",
        "Code reviews and quality checks",
        "Regular progress updates"
      ]
    },
    {
      step: "04",
      title: "Deployment & Launch",
      description: "Deploy your application to production with monitoring, security measures, and performance optimization.",
      icon: Rocket,
      gradient: "from-orange-500 to-red-600",
      details: [
        "Production environment setup",
        "Security and performance testing",
        "User training and documentation",
        "Go-live support and monitoring"
      ]
    },
    {
      step: "05",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and enhancements to ensure your solution continues to deliver value.",
      icon: HeadphonesIcon,
      gradient: "from-violet-500 to-purple-600",
      details: [
        "24/7 monitoring and support",
        "Regular updates and patches",
        "Performance optimization",
        "Feature enhancements"
      ]
    }
  ]

  return (
    <motion.section 
      ref={containerRef}
      id="process" 
      className="bg-white py-16 sm:py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          y: backgroundY,
        }}
      />

      {/* Floating geometric shapes for parallax */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-sky-200 to-blue-300 rounded-full opacity-20"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
      />
      <motion.div
        className="absolute top-40 right-16 w-12 h-12 bg-gradient-to-br from-purple-200 to-pink-300 rounded-lg opacity-20 rotate-45"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
      />
      <motion.div
        className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full opacity-20"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 60]) }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-block px-4 py-2 bg-sky-50 text-sky-700 rounded-full text-sm font-medium mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            How We Work
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            From concept to completion, we follow a proven methodology that ensures your project is delivered on time, within budget, and exceeds expectations.
          </motion.p>
        </motion.div>

        {/* Process steps */}
        <div className="space-y-12">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            const isLast = index === processSteps.length - 1
            
            return (
              <motion.div 
                key={step.step} 
                className="relative"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Animated connector line */}
                {!isLast && (
                  <motion.div 
                    className="absolute left-8 top-24 w-0.5 h-16 bg-gradient-to-b from-slate-200 to-slate-100 hidden sm:block"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: "top" }}
                  />
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Step info - left side */}
                  <motion.div 
                    className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.05, 
                        rotate: index % 2 === 0 ? 1 : -1,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Card className="border-slate-200 hover:shadow-xl transition-all duration-500 group overflow-hidden relative">
                        {/* Animated background gradient */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                          style={{
                            background: `linear-gradient(135deg, ${step.gradient.replace('from-', '').replace('to-', ', ')})`,
                          }}
                        />
                        
                        <CardHeader className="pb-4 relative z-10">
                          <div className="flex items-center gap-4 mb-3">
                            <motion.div 
                              className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                              whileHover={{ 
                                rotate: 360,
                                transition: { duration: 0.6 }
                              }}
                            >
                              <Icon className="w-8 h-8" />
                            </motion.div>
                            <div>
                              <motion.span 
                                className="text-sm font-medium text-slate-500"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: index * 0.2 + 0.5 }}
                              >
                                Step {step.step}
                              </motion.span>
                              <CardTitle className="text-xl text-slate-900 mt-1">{step.title}</CardTitle>
                            </div>
                          </div>
                          <motion.p 
                            className="text-slate-600 leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.2 + 0.6 }}
                          >
                            {step.description}
                          </motion.p>
                        </CardHeader>
                        <CardContent className="pt-0 relative z-10">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {step.details.map((detail, detailIndex) => (
                              <motion.div 
                                key={detailIndex} 
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ 
                                  delay: index * 0.2 + 0.7 + detailIndex * 0.1,
                                  duration: 0.4
                                }}
                                viewport={{ once: true }}
                              >
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                <span className="text-sm text-slate-600">{detail}</span>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>

                  {/* Visual element - right side */}
                  <motion.div 
                    className={`${index % 2 === 1 ? 'lg:order-1' : ''} flex justify-center`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.2 + 0.4,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="relative">
                      {/* Main circle with parallax */}
                      <motion.div 
                        className={`w-32 h-32 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                        style={{
                          y: useTransform(scrollYProgress, [0, 1], [0, (index % 2 === 0 ? -20 : 20)])
                        }}
                      >
                        <motion.span 
                          className="text-2xl font-bold text-white"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ 
                            delay: index * 0.2 + 0.6,
                            type: "spring",
                            stiffness: 300
                          }}
                        >
                          {step.step}
                        </motion.span>
                      </motion.div>
                      
                      {/* Enhanced floating elements */}
                      <motion.div 
                        className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-md"
                        animate={{ 
                          y: [-5, 5, -5],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      />
                      <motion.div 
                        className="absolute -bottom-2 -left-2 w-4 h-4 bg-slate-200 rounded-full"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.4
                        }}
                      />
                      
                      {/* Enhanced arrow to next step */}
                      {!isLast && (
                        <motion.div 
                          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
                          initial={{ opacity: 0, y: -10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 + 1 }}
                          animate={{ 
                            y: [0, 5, 0],
                            transition: {
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.2 + 1
                            }
                          }}
                        >
                          <ArrowRight className="w-6 h-6 text-slate-400" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-8 sm:p-12 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background elements */}
            <motion.div
              className="absolute top-4 right-4 w-8 h-8 bg-sky-200 rounded-full opacity-30"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity
              }}
            />
            <motion.div
              className="absolute bottom-4 left-4 w-6 h-6 bg-blue-300 rounded-full opacity-30"
              animate={{ 
                y: [-5, 5, -5],
                rotate: [0, -180, -360]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: 1
              }}
            />
            
            <motion.h3 
              className="text-2xl font-semibold text-slate-900 mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Ready to Start Your Project?
            </motion.h3>
            <motion.p 
              className="text-slate-600 mb-6 max-w-lg mx-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Let's discuss your requirements and see how our proven process can bring your vision to life.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.button 
                className="inline-flex items-center justify-center px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors font-medium"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(2, 132, 199, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
              <motion.button 
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#475569"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                View Our Work
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
