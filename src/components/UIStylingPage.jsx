import { Palette } from 'lucide-react'
import FooterCTA from './FooterCTA'
import { motion } from 'framer-motion'
import { pageTransition, fadeInUp, staggerContainer } from '../utils/animations'

export default function UIStylingPage({ onBack, onNavigate }) {
  return (
    <motion.div 
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-bg text-white pt-12 pb-8 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[650px] px-4">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-lime hover:text-white transition-colors font-medium mb-12"
        >
          <span className="transition-transform group-hover:-translate-x-1">&larr;</span> Back to Skills
        </button>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="rounded-[3rem] bg-[#0c0c0c] p-10 sm:p-16 flex flex-col items-center text-center shadow-2xl border-2 border-white/20"
        >
          <motion.div variants={fadeInUp} className="flex h-24 w-24 items-center justify-center rounded-full bg-[#161616] mb-10 shadow-inner overflow-hidden">
            <Palette size={40} className="text-red-400" strokeWidth={1.5} />
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-[2.75rem] font-bold tracking-tight mb-8">
            UI & STYLING
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-[#a0a0a0] text-[1.05rem] leading-[1.7] max-w-[500px] mb-14">
            Creating clean, responsive interfaces with consistent layouts, reusable components, and mobile-friendly designs.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
            {['Responsive Design', 'CSS', 'Bootstrap', 'Tailwind CSS', 'Material UI'].map((tech) => (
              <motion.div 
                whileHover={{ scale: 1.05 }}
                key={tech} 
                className="px-6 py-2.5 rounded-full border-2 border-white/20 bg-[#111] text-[0.85rem] font-medium text-lime transition-colors hover:bg-[#1a1a1a] cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-16">
        <FooterCTA onNavigate={onNavigate} />
      </div>
    </motion.div>
  )
}
