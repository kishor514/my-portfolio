import { useState } from 'react'
import { Landmark, ArrowUpRight, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'

const tabs = {
  Frontend: {
    title: 'Frontend Development',
    description:
      'Building responsive and user-friendly interfaces with modern frontend technologies.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap', 'Material UI'],
  },
  Backend: {
    title: 'Backend Development',
    description: 'Building reliable server-side applications and REST APIs for real-world web applications.',
    tech: ['Node.js', 'Express.js', 'REST APIs', 'PHP'],
  },
  Database: {
    title: 'Database Management',
    description: 'Working with databases to store, manage and retrieve application data efficiently.',
    tech: ['MongoDB', 'MySQL', 'SQL'],
  },
}

export default function SkillsDetail({ onNavigate }) {
  const [active, setActive] = useState('Frontend')
  const current = tabs[active]

  return (
    <section className="px-4 py-8">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-xl"
      >
        <motion.div variants={fadeInUp} className="overflow-hidden rounded-[3rem] border-2 border-white/20 bg-panel p-2">
          <div className="flex gap-1 rounded-full bg-[#0a0a0a] p-1.5 relative">
            {Object.keys(tabs).map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`relative z-10 focus-ring flex-1 rounded-full py-3 text-sm font-semibold transition-colors ${
                  active === tab ? 'text-black' : 'text-white/70 hover:text-white'
                }`}
              >
                {active === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-lime z-[-1]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {tab}
              </button>
            ))}
          </div>

          <div className="px-6 pb-10 pt-16 sm:px-10 sm:pt-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm font-semibold text-lime">1+ Year Experience</p>
                <h3 className="mt-8 max-w-[10ch] text-[2.5rem] font-medium leading-[1.1] tracking-tight text-white sm:text-[3.5rem]">
                  {current.title}
                </h3>
                <p className="mt-6 max-w-md text-[1.1rem] leading-[1.6] text-white/80 sm:text-[1.2rem]">
                  {current.description}
                </p>

                <p className="mt-6 max-w-md text-[1.1rem] leading-[1.6] text-white/80 sm:text-[1.2rem]">
                  Technologies: {current.tech.join(' · ')}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex justify-end pr-2">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onNavigate && onNavigate('projects')}
                aria-label="View Projects"
              >
                <ArrowUpRight size={44} strokeWidth={1} className="text-white" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-4 flex gap-4">
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#projects" 
            className="focus-ring flex flex-1 items-center justify-center gap-3 rounded-[2.5rem] border-2 border-white/20 py-5 transition-colors hover:bg-white/5"
          >
            <Landmark size={20} className="text-lime" />
            <span className="font-semibold text-white">View</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="focus-ring flex flex-1 items-center justify-center gap-3 rounded-[2.5rem] border-2 border-white/20 py-5 transition-colors hover:bg-white/5"
          >
            <Phone size={20} className="text-lime" />
            <span className="font-semibold text-white">Contact Me</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
