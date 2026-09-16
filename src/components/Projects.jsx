import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'

const projects = [
  {
    title: 'Nearlook Multivendor Platform',
    type: 'Full-Stack Web Application',
    tag: 'AJ+ Minutes',
    image: '/images/nearlook.png',
  },
  {
    title: 'Inventory Management System',
    type: 'Full-Stack Web Application',
    tag: '.Kishor',
    image: '/images/inventory1.png',
  },
  {
    title: 'Real Estate Management Website',
    type: 'Web Application',
    tag: '.Kishor',
    image: '/images/realesate.png',
  },
]

export default function Projects({ onNavigate }) {
  return (
    <section id="projects" className="px-4 py-16 sm:py-20">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-2xl"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-4xl font-normal sm:text-5xl">
            Projects <span className="font-extrabold">Done</span>
          </h2>
          <p className="mt-3 text-white/50">
            Real-world applications built with modern web technologies.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-col gap-10">
          {projects.map((project, index) => (
            <motion.div
              variants={fadeInUp}
              key={project.title}
              style={{ top: `calc(120px + ${index * 30}px)` }}
              id={`project-${project.title.includes('Nearlook') ? 'nearlook' : project.title.includes('Inventory') ? 'inventory' : 'realestate'}`}
              className="sticky group overflow-hidden rounded-3xl border border-white/10 bg-panel transition-colors hover:border-white/20 cursor-pointer shadow-2xl"
              onClick={() => {
                if (project.title.includes('Nearlook')) {
                  onNavigate('nearlook');
                } else if (project.title.includes('Inventory')) {
                  onNavigate('inventory');
                } else if (project.title.includes('Real Estate')) {
                  onNavigate('realestate');
                }
              }}
            >
              {/* Browser mockup */}
              <div className="bg-white">
                <div className="flex items-center gap-1.5 border-b border-black/5 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 text-neutral-400 sm:aspect-[16/8] overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 p-6">
                <div>
                  <h3 className="text-lg font-bold text-white sm:text-xl transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/50">{project.type}</p>
                </div>
                <button
                  className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-lime group-hover:text-black"
                  aria-label={`View ${project.title}`}
                >
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="mt-10 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('projects');
            }}
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-black focus-ring"
          >
            View All Projects
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
