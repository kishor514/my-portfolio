import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'

const slides = [
  {
    role1: 'Developer',
    role2: 'Role',
    quote: 'Looking for a full-stack developer opportunity where I can contribute to real-world applications and grow with a strong development team.',
  },
  {
    role1: 'Team',
    role2: 'Culture',
    quote: 'Interested in a collaborative environment where I can learn from experienced developers and contribute to meaningful projects.',
  },
  {
    role1: 'Career',
    role2: 'Growth',
    quote: 'Looking for an opportunity that provides technical challenges, responsibility, continuous learning, and long-term growth.',
  },
]

export default function LookingFor() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="px-4 py-16 sm:py-20 overflow-hidden">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.h2 variants={fadeInUp} className="text-4xl font-normal sm:text-5xl">
          What <span className="font-extrabold">I'm Looking For</span>
        </motion.h2>
        <motion.p variants={fadeInUp} className="mt-3 text-white/50">
          Looking for the right opportunity to grow and contribute.
        </motion.p>

        <motion.div variants={fadeInUp} className="mx-auto mt-16 flex min-h-[500px] w-full max-w-[600px] flex-col overflow-hidden rounded-[2.5rem] border border-[#222] bg-[#050505] p-10 shadow-2xl sm:p-12">
          {/* Top Section */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col items-start text-left">
              <div className="mb-4 h-[80px] w-[80px] overflow-hidden rounded-full border border-[#333] shadow-inner">
                <img 
                  src="/images/projectprofile.png" 
                  alt="Kishor B" 
                  className="h-full w-full object-cover" 
                />
              </div>
              <p className="text-[1.4rem] font-bold text-white">Kishor B</p>
              <p className="mt-2 text-[0.95rem] font-medium text-white/40">Full-Stack Web Developer</p>
            </div>

            <div className="relative flex h-[140px] w-[200px] flex-col rounded-3xl bg-lime pl-6 pb-6 pt-4 pr-4 text-left text-lg font-semibold text-black sm:h-[160px] sm:w-[240px]">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentSlide + 'role'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col"
                >
                  <span>{slides[currentSlide].role1}</span>
                  <span>{slides[currentSlide].role2}</span>
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-5 right-5 hidden sm:grid grid-cols-6 gap-1.5 opacity-30">
                {Array.from({ length: 30 }).map((_, i) => (
                  <span key={i} className="h-1.5 w-1.5 rounded-full bg-black" />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 flex flex-col items-center text-center">
            <span className="font-serif text-6xl leading-none text-white/20">“</span>
            <AnimatePresence mode="popLayout">
              <motion.p
                key={currentSlide + 'quote'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-[1.3rem] font-medium leading-relaxed text-white/90 sm:text-[1.4rem]"
              >
                {slides[currentSlide].quote}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Pagination */}
          <div className="mt-auto flex items-center justify-end gap-3 pt-12">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className="flex items-center justify-center focus:outline-none"
              >
                {currentSlide === idx ? (
                  <motion.div layoutId="paginationActive" className="flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] border-white/70">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </motion.div>
                ) : (
                  <div className="h-2 w-2 rounded-full bg-white/20 transition-colors hover:bg-white/40" />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
