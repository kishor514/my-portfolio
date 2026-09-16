import { useState } from 'react'
import { ArrowUpRight, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'

const offerings = {
  Static: {
    tagline: 'Fast, responsive websites built for businesses and personal',
    duration: '2-4',
    unit: 'days',
    note: 'Quick Delivery',
    bullets: [
      'Develop responsive & mobile-friendly websites using HTML, CSS, JS',
      'Convert designs and requirements into clean, functional web',
      'Use ChatGPT, Claude, Gemini and Antigravity for AI-assisted',
      'Analyze and resolve frontend errors, layout issues and browser',
      'Test websites across different screen sizes and browsers',
    ],
  },
  Dynamic: {
    tagline: 'Functional web applications with APIs, databases and user',
    duration: '7-14',
    unit: 'days',
    note: 'Full-Stack Build',
    bullets: [
      'Develop full-stack web applications using React, Node.js,Express js',
      'Build and integrate REST APIs for frontend and backend',
      'Work with MongoDB, MySQL and SQL for application data',
      'Analyze request, response, API and HTTP status-code related issues',
      'Use ChatGPT, Claude, Gemini and Antigravity for debugging',
      'Deploy and maintain functional web applications for real-world use',
    ],
  },
}

export default function WhatIBuild() {
  const [active, setActive] = useState('Static')
  const current = offerings[active]

  return (
    <section className="px-4 py-16 sm:py-20 overflow-hidden">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.h2 variants={fadeInUp} className="text-4xl font-normal sm:text-5xl">What I <span className="font-extrabold">Build</span></motion.h2>
        <motion.p variants={fadeInUp} className="mt-3 text-white/50">Explore the website types.</motion.p>

        <motion.div variants={fadeInUp} className="mx-auto mt-8 flex w-fit gap-1 rounded-full border-2 border-white/20 p-1">
          {Object.keys(offerings).map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`focus-ring rounded-full px-6 py-2 text-sm font-semibold transition-colors relative ${
                active === tab ? 'text-black' : 'text-white/60 hover:text-white'
              }`}
            >
              {active === tab && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-lime rounded-full"
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="mx-auto mt-10 w-full max-w-[580px] rounded-[2.5rem] border-2 border-white/20 bg-[#050505] p-2 text-left shadow-2xl">
          {/* Top Nested Card */}
          <div className="relative overflow-hidden rounded-[2rem] border-2 border-white/20 border-b-lime border-r-lime bg-gradient-to-b from-[#111] to-[#0a0a0a] p-8">
            {/* Striped texture effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px)] bg-[size:12px_12px] opacity-30 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-[2.2rem] font-bold text-white leading-tight">{active}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-white/50">{current.tagline}</p>

              <div className="mt-6 flex items-baseline gap-2">
                <AnimatePresence mode="popLayout">
                  <motion.span 
                    key={current.duration}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="text-[4.5rem] font-bold leading-none tracking-tight text-white sm:text-[5rem]"
                  >
                    {current.duration}
                  </motion.span>
                </AnimatePresence>
                <span className="text-[1.1rem] font-medium text-white/50">/ {current.unit}</span>
              </div>

              <div className="mt-10 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-full bg-lime pl-5 pr-1.5 py-1.5 text-sm font-semibold text-black transition-transform hover:scale-105"
                >
                  Get Started
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111] text-white">
                    <ArrowUpRight size={16} strokeWidth={2} />
                  </div>
                </a>
                <span className="text-sm font-medium text-white/70">{current.note}</span>
              </div>
            </div>
          </div>

          {/* Middle List Section */}
          <div className="px-6 py-8">
            <ul className="space-y-1.5 text-[0.95rem] text-white/70">
              <AnimatePresence mode="popLayout">
                {current.bullets.map((bullet, i) => (
                  <motion.li 
                    key={bullet}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-4 leading-relaxed"
                  >
                    <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                    <span>{bullet}</span>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
