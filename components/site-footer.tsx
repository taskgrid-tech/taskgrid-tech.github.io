"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function SiteFooter() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  const linkVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { type: "spring" as const, stiffness: 300, damping: 20 }
    }
  }

  return (
    <motion.footer 
      className="border-t border-slate-200 bg-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Subtle animated background */}
      <motion.div
        className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full opacity-30 blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="flex flex-col gap-3 px-4 py-6 sm:px-6 lg:px-12 xl:px-24 2xl:px-32 md:flex-row md:items-center md:justify-between lg:py-8 relative">
        <motion.p 
          className="text-sm text-slate-600"
          variants={itemVariants}
        >
          © {new Date().getFullYear()} TaskGrid Technologies. All rights reserved.
        </motion.p>
        
        <motion.nav 
          aria-label="Footer" 
          className="flex flex-wrap gap-4"
          variants={itemVariants}
        >
          <motion.div variants={linkVariants} whileHover="hover" initial="rest">
            <Link href="/privacy" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Privacy
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover" initial="rest">
            <Link href="/careers" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Careers
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover" initial="rest">
            <Link href="/blog" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Blog
            </Link>
          </motion.div>
        </motion.nav>
      </div>
    </motion.footer>
  )
}
