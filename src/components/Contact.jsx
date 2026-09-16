import { useState } from 'react'
import { Linkedin, Phone, Instagram, ArrowUpRight, CheckCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [showPopup, setShowPopup] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    
    const formData = new FormData()
    // Web3Forms Access Key
    formData.append("access_key", "0b7fa8e0-2fc6-487a-bb74-2c2a94da7ac7")
    formData.append("name", form.name)
    formData.append("email", form.email)
    formData.append("message", form.message)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      
      const data = await response.json()
      
      if (data.success) {
        setStatus('Sent!')
        setForm({ name: '', email: '', message: '' })
        setShowPopup(true)
        setTimeout(() => setStatus(''), 3000)
      } else {
        console.error("Error", data)
        setStatus('Error!')
      }
    } catch (error) {
      console.error(error)
      setStatus('Error!')
    }
  }

  return (
    <section id="contact" className="px-4 pb-4 pt-16 sm:pb-6 sm:pt-24"> 
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto w-full max-w-[650px]"
      >
        <motion.div variants={fadeInUp} className="rounded-[2rem] border border-[#222] border-b-lime border-r-lime bg-[#050505] p-8 sm:p-12 shadow-2xl">
          <h2 className="text-[3.5rem] font-bold leading-[1.1] sm:text-[4rem]">
            Let's
            <br />
            Connect
          </h2>

          <div className="mt-8 flex gap-3">
            {[
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/kishor45/', label: 'LinkedIn' },
              { Icon: Phone, href: 'https://wa.me/918754215627?text=Hi%20Kishor%2C%20I%27m%20reaching%20out%20from%20your%20portfolio%20website.%20I%27m%20interested%20in%20discussing%20a%20project%20with%20you!', label: 'WhatsApp' },
              { Icon: Instagram, href: 'https://www.instagram.com/kishorb1012?stkn=MWU1Zjc3cGM4YjljcQ==', label: 'Instagram' }
            ].map(({ Icon, href, label }, i) => (
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full bg-[#1a1a1a] text-white/70 transition-colors hover:bg-[#222]"
                aria-label={label}
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-7">
            <div>
              <label htmlFor="name" className="block text-[0.95rem] font-bold text-white">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="focus-ring mt-3 w-full border-b border-[#222] bg-transparent pb-3 text-[0.9rem] text-white placeholder-white/30 outline-none transition-colors focus:border-lime"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[0.95rem] font-bold text-white">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="focus-ring mt-3 w-full border-b border-[#222] bg-transparent pb-3 text-[0.9rem] text-white placeholder-white/30 outline-none transition-colors focus:border-lime"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[0.95rem] font-bold text-white">
                Message
              </label>
              <input
                id="message"
                type="text"
                placeholder="Leave me a message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="focus-ring mt-3 w-full border-b border-[#222] bg-transparent pb-3 text-[0.9rem] text-white placeholder-white/30 outline-none transition-colors focus:border-lime"
                required
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-lime pl-5 pr-1.5 py-1.5 text-[0.95rem] font-semibold text-black focus-ring"
              >
                {status || 'Submit Now'}
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111] text-white">
                  <ArrowUpRight size={16} strokeWidth={2} />
                </span>
              </motion.button>
              <p className="text-[0.8rem] text-white/50">
                Available for{' '}
                <span className="font-semibold text-white">Immediate Joining</span>
              </p>
            </div>
          </form>
        </motion.div>
      </motion.div>

      {/* Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-[#0c0c0c] border border-lime/30 rounded-[2rem] p-8 max-w-sm w-full text-center relative flex flex-col items-center shadow-2xl"
            >
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <div className="w-16 h-16 bg-lime/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={32} className="text-lime" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Message Sent!</h3>
              <p className="text-[#a0a0a0] mb-8 text-sm">
                Thank you for reaching out. I'll get back to you as soon as possible!
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPopup(false)}
                className="bg-lime text-black font-bold py-3 px-8 rounded-full transition-colors w-full"
              >
                Great, thanks!
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
