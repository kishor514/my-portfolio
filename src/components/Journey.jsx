import { Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations'

export default function Journey() {
  return (
    <section className="px-4 py-8 overflow-hidden">
      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.1
            }
          }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
        className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-[1.3fr_1fr]"
      >
        <motion.div variants={fadeInUp} className="rounded-[2rem] border-2 border-white/20 bg-panel p-8 sm:col-span-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-medium text-white/50">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              MY JOURNEY IN CODE
            </div>
            <Globe size={20} className="text-white/50" />
          </div>
          <h3 className="mt-6 text-3xl font-bold sm:text-4xl">My Development Journey</h3>
          <p className="mt-4 text-white/50">
            Building real-world web applications with modern technologies.
          </p>
        </motion.div>

        <motion.div 
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="rounded-[2rem] bg-lime p-8 text-black transition-transform cursor-default"
        >
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-black/70">
            <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
            Professional Experience
          </div>
          <h4 className="mt-6 text-2xl font-bold">1+ Year Experience</h4>
          <div className="mt-8 flex items-center gap-3">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white p-1.5 shadow-sm">
              <img src="/logos/nearlookk.jpeg" alt="Nearlook Logo" className="h-full w-full object-contain rounded-full" />
            </div>
            <p className="font-semibold leading-tight">Nearlook Mart Private Limited</p>
          </div>
        </motion.div>

        <motion.div 
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="rounded-[2rem] border-2 border-white/20 bg-panel p-8 transition-transform cursor-default"
        >
          <div className="flex items-center gap-2 text-xs font-medium text-white/50">
            <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
            WORK
          </div>
          <h4 className="mt-6 text-2xl font-bold">Projects Done</h4>
          <p className="mt-10 text-right text-6xl font-extrabold text-white/20">4</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
