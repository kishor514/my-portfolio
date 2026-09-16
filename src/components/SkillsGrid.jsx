import { Monitor, Server, Database, Palette, Wrench, Cloud } from 'lucide-react'
import { useReducedMotion, motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'

const skills = [
  { img: '/logos/Frontend.png', label: 'Frontend', sub: 'Interfaces', pad: 'p-6 sm:p-7', scatter: { x: -250, y: 0 } },
  { img: '/logos/backend.png', label: 'Backend', sub: 'APIs', pad: 'p-8 sm:p-10', scatter: { x: 0, y: 250 } },
  { img: '/logos/database.png', label: 'Database', sub: 'Data', pad: 'p-6 sm:p-7', scatter: { x: 0, y: -250 } },
  { img: '/logos/layout.jpeg', label: 'UI & Styling', sub: 'Design', pad: 'p-8 sm:p-10', scatter: { x: 250, y: 0 } },
  { img: '/logos/tools.jpeg', label: 'Tools', sub: 'Workflow', pad: 'p-8 sm:p-10', scatter: { x: -250, y: 0 } },
  { img: '/logos/server.jpeg', label: 'Deployment', sub: 'Server', pad: 'p-8 sm:p-10', scatter: { x: 0, y: 250 } },
]

export default function SkillsGrid({ onNavigate }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="skills" className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <motion.h2 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-normal sm:text-5xl"
        >
          Skills & <span className="font-extrabold">Expertise</span>
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-3 text-white/50"
        >
          Experienced in building scalable web applications.
        </motion.p>

        <div className="mx-auto mt-16 flex flex-col sm:flex-row flex-wrap items-center justify-center max-w-[750px] gap-6">
          {skills.map(({ img, label, sub, pad, scatter }, index) => (
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "1000px 1000px -40px 1000px" }}
              variants={{
                hidden: { 
                  opacity: 0, 
                  x: shouldReduceMotion ? 0 : scatter.x, 
                  y: shouldReduceMotion ? 0 : scatter.y, 
                  scale: shouldReduceMotion ? 1 : 0.95 
                },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  y: 0, 
                  scale: 1,
                  transition: { 
                    duration: 1.4, 
                    ease: [0.22, 1, 0.36, 1],
                    delay: shouldReduceMotion ? 0 : (index % 3) * 0.15 
                  } 
                }
              }}
              whileHover={{ y: -8, scale: 1.05 }}
              key={label} 
              className="w-[150px] sm:w-[150px] cursor-pointer"
              onClick={() => {
                if (onNavigate) {
                  window.scrollTo({ top: 0 })
                  const routes = {
                    'Frontend': 'frontend',
                    'Backend': 'backend',
                    'Database': 'database',
                    'UI & Styling': 'uistyling',
                    'Tools': 'tools',
                    'Deployment': 'deployment'
                  };
                  if (routes[label]) {
                    onNavigate(routes[label]);
                  }
                }
              }}
            >
              <div className="group relative flex w-full flex-col items-center rounded-[5rem] border-[3px] border-[#222] bg-[#050505] pb-8 transition-colors hover:border-white/20 overflow-hidden">
                <div className={`m-1.5 flex h-28 sm:h-32 w-[calc(100%-12px)] items-center justify-center rounded-t-[4.5rem] rounded-b-[2rem] bg-[#141414] overflow-hidden ${pad}`}>
                  <img src={img} alt={label} className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="mt-4 flex flex-col items-center px-2 text-center transition-opacity duration-300 group-hover:opacity-20">
                  <p className="text-base font-bold text-white sm:text-lg">{label}</p>
                  <p className="mt-1 text-[10px] font-medium text-white/50 sm:text-xs">{sub}</p>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[5rem] bg-black/40 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
                  <div className="translate-y-4 rounded-full bg-lime px-5 py-2 text-sm font-bold text-black transition-transform duration-300 group-hover:translate-y-0 shadow-[0_0_15px_rgba(196,248,42,0.3)]">
                    View Skills
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
