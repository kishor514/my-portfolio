import { FileText, Code2, Database, CloudCog } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'

const steps = [
  { icon: FileText, num: '01', title: 'Requirements & Planning' },
  { icon: Code2, num: '02', title: 'Frontend Development' },
  { icon: Database, num: '03', title: 'Backend & Database' },
  { icon: CloudCog, num: '04', title: 'Testing & Deployment' },
]

export default function Process() {
  return (
    <section className="px-4 py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-normal sm:text-5xl"
        >
          Development <span className="font-extrabold">Process</span>
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-3 text-white/50"
        >
          From requirements to deployment, I build reliable and responsive web applications.
        </motion.p>

        <div className="mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-2">
          {steps.map(({ icon: Icon, num, title }, index) => {
            const startX = [ -150, 150, 150, -150 ][index];
            return (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              variants={{
                hidden: { opacity: 0, x: startX, y: 50 },
                visible: {
                  opacity: 1, 
                  x: 0, 
                  y: 0,
                  transition: { 
                    type: "spring", 
                    stiffness: 30, 
                    damping: 15, 
                    mass: 1,
                    delay: 0.1 // Small delay for smoothness, but not accumulating based on index
                  }
                }
              }}
              key={num}
              whileHover={{ scale: 1.02 }}
              className="flex h-[176px] flex-col rounded-3xl border border-[#222] bg-[#0a0a0a] text-left shadow-lg cursor-default"
            >
              <div className="flex flex-1 items-start justify-between p-5 pb-0">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-lime text-black">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <span
                  style={{ fontFamily: '"VT323", monospace' }}
                  className="mt-[-8px] text-[5rem] leading-none text-[#2a2a2a]"
                >
                  {num}.
                </span>
              </div>
              <div className="m-1 mt-auto flex min-h-[4.5rem] items-center rounded-b-[1.4rem] rounded-t-2xl bg-[#141414] px-5 py-3">
                <p className="max-w-[12ch] text-[1.15rem] font-bold leading-tight text-white">
                  {title}
                </p>
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
