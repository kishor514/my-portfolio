import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { navAnimation } from '../utils/animations'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header 
      variants={navAnimation}
      initial="hidden"
      animate="visible"
      className="fixed top-4 left-0 right-0 z-50 px-4 sm:top-6"
    >
      <nav className="mx-auto flex max-w-3xl items-center justify-between gap-4 rounded-full border-2 border-white/20 bg-[#0a0a0a] px-5 py-3">
        <motion.a 
          whileHover={{ scale: 1.05 }}
          href="#home" 
          className="text-lg font-bold tracking-tight text-lime"
        >
          .Kishor
        </motion.a>

        <ul className="hidden items-center gap-7 text-sm text-white/80 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <motion.a
                whileHover={{ y: -2, color: '#fff' }}
                transition={{ duration: 0.2 }}
                href={link.href}
                className="block focus-ring rounded transition-colors hover:text-white"
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </ul>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="focus-ring hidden items-center gap-1.5 rounded-full bg-lime px-5 py-2 text-sm font-semibold text-black md:inline-flex"
        >
          Contact
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </motion.a>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="focus-ring rounded-full p-2 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="origin-top mx-auto mt-2 flex max-w-3xl flex-col gap-1 rounded-[2rem] border-2 border-white/20 bg-[#0a0a0a] p-4 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center gap-1.5 rounded-full bg-lime px-5 py-3 font-semibold text-black"
            >
              Contact
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
