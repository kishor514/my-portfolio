import { useState } from 'react'
import { Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'

const faqs = [
  {
    q: 'Why should I hire you?',
    a: "I’m a full-stack web developer with 1+ year of practical experience, focused on building responsive, functional and real-world web applications.",
  },
  {
    q: 'How do you approach a new project?',
    a: 'I first understand the requirements, plan the application structure, develop the features step by step, test the functionality and refine the final result.',
  },
  {
    q: 'What kind of projects have you worked on?',
    a: 'I have worked on real-world projects including a multivendor e-commerce platform and an inventory management system, contributing to frontend, backend and database development.',
  },
  {
    q: 'How do you solve technical issues?',
    a: 'I analyze the issue step by step, inspect the console, network requests, responses and HTTP status codes, then debug and test the solution.',
  },
  {
    q: 'How do you use AI in development?',
    a: 'I use ChatGPT, Claude, Gemini and Antigravity as development assistants for debugging, analysis, code improvement and solving technical problems.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="px-4 py-16 sm:py-20 overflow-hidden">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.h2 variants={fadeInUp} className="text-center text-4xl font-normal sm:text-5xl">
          Common <span className="font-extrabold">Questions</span>
        </motion.h2>
        <motion.p variants={fadeInUp} className="mt-3 text-white/50">Helping you understand our process and offerings.</motion.p>

        <div 
          className="mx-auto mt-12 max-w-xl space-y-4 text-left"
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                layout
                className="overflow-hidden rounded-[1.25rem] border border-l-black border-r-black border-t-white/20 border-b-white/20 bg-black"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="focus-ring flex w-full items-center justify-between gap-4 px-8 py-7 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[1.05rem] font-semibold text-white">{faq.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen ? 'bg-lime text-black' : 'text-white'
                    }`}
                  >
                    <Plus
                      size={16}
                      className={`transition-transform ${isOpen ? 'rotate-45' : ''}`}
                    />
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-8 pb-7 text-[0.9rem] leading-relaxed text-white/60">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
          </div>

        <motion.div variants={fadeInUp} className="mt-16 text-center">
          <p className="text-[0.9rem] font-medium text-white/50">Interested in working together?</p>
          <a
            href="#contact"
            className="group mx-auto mt-2 flex w-fit items-center gap-2 text-[0.95rem] font-medium text-white transition-colors hover:text-lime"
          >
            <span className="text-white/50 transition-colors group-hover:text-lime">→</span>
            <span className="border-b border-white/40 pb-0.5 transition-colors group-hover:border-lime">
              Contact me
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
