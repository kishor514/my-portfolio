import { useState } from 'react'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'

const experiences = [
  {
    period: '2026 – Present',
    start: '2026',
    end: 'Present',
    role: 'Full Stack Web Developer',
    company: 'Nearlook Mart Private Limited',
    logo: '/logos/nearlookk.jpeg',
  },
  {
    period: '2025 (Sep - Dec)',
    start: 'Sep 2025',
    end: 'Dec 2025',
    role: 'Full Stack Web Developer',
    company: 'Nearlook Mart Private Limited',
    logo: '/logos/nearlookk.jpeg',
  },
]

export default function ExperienceTimeline() {
  const [index, setIndex] = useState(0)
  const exp = experiences[index]

  const go = (dir) => {
    setIndex((i) => (i + dir + experiences.length) % experiences.length)
  }

  return (
    <section id="experience" className="px-4 py-16 sm:py-20">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.div variants={fadeInUp} className="flex flex-col items-center">
          <p className="text-base font-bold text-lime sm:text-lg">{exp.period}</p>
          <div className="mt-2 h-3 w-[1.5px] bg-lime" />
        </motion.div>

        <motion.div variants={fadeInUp} className="relative mx-auto mt-2 flex h-56 max-w-xl items-center justify-center sm:h-64">
          <div className="absolute inset-x-0 top-0 h-full">
            <svg viewBox="0 0 400 200" className="h-full w-full" preserveAspectRatio="none">
              <path
                d="M 10 200 A 190 190 0 0 1 390 200"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1.5"
                strokeDasharray="4 8"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="absolute left-1/2 top-[5%] z-10 -translate-x-1/2 -translate-y-1/2 bg-bg px-2">
            <MapPin size={24} className="text-lime" />
          </div>

          <div className="relative z-10 mt-8 text-center">
            <AnimatePresence mode="wait">
              <motion.h3 
                key={exp.role}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-[2rem] font-medium leading-[1.15] text-white sm:text-[3rem]"
              >
                {exp.role.split(' ')[0]} {exp.role.split(' ')[1]}
                <br />
                <span className="font-bold">{exp.role.split(' ').slice(2).join(' ')}</span>
              </motion.h3>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-0 left-[2.5%] flex -translate-x-full translate-y-1/2 items-center gap-2 pr-1">
            <span className="font-medium text-white">{exp.start}</span>
            <div className="h-[1.5px] w-4 bg-white/40" />
          </div>
          <div className="absolute bottom-0 right-[2.5%] flex translate-x-full translate-y-1/2 items-center gap-2 pl-1">
            <div className="h-[1.5px] w-4 bg-white/40" />
            <span className="font-medium text-white">{exp.end}</span>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-8 flex items-center justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => go(-1)}
            className="focus-ring text-white transition-colors hover:text-lime"
            aria-label="Previous experience"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <AnimatePresence mode="wait">
            <motion.div 
              key={exp.company}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
            >
              {exp.logo ? (
                <img src={exp.logo} alt={exp.company} className="h-7 w-auto object-contain" />
              ) : (
                <span aria-hidden="true">🏢</span>
              )}
              {exp.company}
            </motion.div>
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => go(1)}
            className="focus-ring text-white transition-colors hover:text-lime"
            aria-label="Next experience"
          >
            <ChevronRight size={24} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
