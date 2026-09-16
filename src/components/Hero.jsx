import { ArrowUpRight, Globe, Linkedin, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInRight, heroStagger } from '../utils/animations'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-start justify-center px-4 pb-4 sm:pb-8 pt-32 sm:pt-40 overflow-hidden">
      {/* Phone Wrapper */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[460px] sm:max-w-[540px] md:max-w-[640px]"
      >
        {/* Hardware Buttons */}
        <div className="absolute -left-1 sm:-left-1.5 top-[15%] h-8 w-1 sm:w-1.5 rounded-l-md bg-gradient-to-l from-[#555] to-[#7d7e7b]"></div>
        <div className="absolute -left-1 sm:-left-1.5 top-[22%] h-14 w-1 sm:w-1.5 rounded-l-md bg-gradient-to-l from-[#555] to-[#7d7e7b]"></div>
        <div className="absolute -left-1 sm:-left-1.5 top-[30%] h-14 w-1 sm:w-1.5 rounded-l-md bg-gradient-to-l from-[#555] to-[#7d7e7b]"></div>
        <div className="absolute -right-1 sm:-right-1.5 top-[25%] h-20 w-1 sm:w-1.5 rounded-r-md bg-gradient-to-r from-[#555] to-[#7d7e7b]"></div>

        {/* Outer Phone Frame Wrapper */}
        <div className="relative w-full rounded-[3.25rem] sm:rounded-[4.25rem] p-[8px] bg-gradient-to-br from-[#7d7e7b] via-[#5a5a5a] to-[#333] shadow-2xl">
          {/* Inner Phone Screen (Bezel + Screen) */}
          <div className="relative w-full overflow-hidden rounded-[2.75rem] sm:rounded-[3.75rem] border-[8px] border-black bg-black">

        {/* Global Portrait Background */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 z-0 pointer-events-none bg-black flex justify-center items-start"
        >
          <img
            src="/images/profile.png"
            alt="Profile portrait"
            className="w-full h-auto opacity-90 scale-[1.15] sm:scale-125 origin-top"
          />
        </motion.div>

        {/* Portrait Spacer */}
        <div className="relative z-10 h-[380px] sm:h-[560px] md:h-[640px] w-full">
          {/* Hello Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-6 top-8 sm:left-10 sm:top-12 flex items-center gap-2 text-sm sm:text-base font-medium text-white drop-shadow-md"
          >
            <motion.span 
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ delay: 1, duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
              role="img" aria-label="waving hand"
              className="inline-block origin-bottom-right"
            >
              👋
            </motion.span> Hello
          </motion.div>

          {/* Kishor B Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-[8%] sm:top-[10%] flex flex-col items-end justify-center px-8 pointer-events-none sm:px-12"
          >
            <div className="flex flex-col items-end drop-shadow-2xl font-medium leading-[0.95] tracking-tight text-white">
              <span className="block text-[3.75rem] sm:text-[5rem] md:text-[6rem]">Kishor</span>
              <span className="block text-[3.75rem] sm:text-[5rem] md:text-[6rem] -mt-1">B</span>
            </div>
          </motion.h1>
        </div>

        {/* Lower Content Panel */}
        <motion.div 
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="relative z-20 -mt-48 sm:-mt-56 md:-mt-64 flex flex-col rounded-t-[3rem] border-t border-white/20 bg-gradient-to-b from-black/50 via-black/80 to-black backdrop-blur-sm px-8 pb-10 pt-6 sm:px-12 sm:pb-16 sm:pt-8"
        >

          {/* Drag Handle */}
          <motion.div variants={fadeInUp} className="mx-auto mb-8 h-1.5 w-12 rounded-full bg-white/20" />

          {/* Intro Text & Phone Icon */}
          <motion.div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 overflow-hidden py-2">
            <motion.p variants={fadeInRight} className="text-base text-white/90 sm:text-lg leading-relaxed">
              I'm a <span className="font-semibold text-white">full stack</span>
              <br /> web Developer
            </motion.p>
            <motion.div variants={fadeInUp} className="flex items-center gap-2">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/kishor45/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-lime hover:text-black focus-ring"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} strokeWidth={1.5} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/kishor514"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-lime hover:text-black focus-ring"
                aria-label="GitHub"
              >
                <Github size={18} strokeWidth={1.5} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/918754215627?text=Hi%20Kishor%2C%20I%27m%20reaching%20out%20from%20your%20portfolio%20website.%20I%27m%20interested%20in%20discussing%20a%20project%20with%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-lime hover:text-black focus-ring"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Quote */}
          <motion.p variants={fadeInUp} className="mt-8 text-[2.2rem] font-light leading-[1.05] tracking-[-0.04em] text-white/90 sm:text-[2.8rem]">
            “I build clean, responsive<br />and functional<br />
            <span className="font-semibold text-white/90">
              web experiences that<br />solve real-world”
            </span>
          </motion.p>

          {/* Experience / Stars */}
          <motion.div variants={fadeInUp} className="mt-8 flex items-center gap-3 text-base font-medium text-white/70">
            <div className="flex gap-1 text-[#ffb000]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </div>
            <span className="whitespace-nowrap">1+ Year Experience</span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={fadeInUp} className="mt-8 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/logos/Resume-kishor (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex w-full items-center justify-between gap-3 rounded-full bg-lime py-1.5 pl-6 pr-1.5 text-lg font-medium text-black focus-ring sm:w-auto sm:justify-start"
            >
              My Resume
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-white">
                <ArrowUpRight size={18} strokeWidth={1.5} />
              </span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10 focus-ring sm:w-auto"
            >
              My Works
            </motion.a>
          </motion.div>

          {/* Footer Links */}
          <motion.div variants={fadeInUp} className="mt-8 flex w-full flex-col items-start gap-4 border-t border-white/10 pt-6 text-base sm:flex-row sm:items-center sm:justify-between sm:gap-3">
            <div className="flex items-center gap-2 text-white/70">
              <Globe size={18} />
              <span>Open to <span className="font-semibold text-white">Opportunities</span></span>
            </div>
            <motion.a
              whileHover={{ x: 5 }}
              href="#contact"
              className="flex items-center gap-2 font-semibold text-white hover:text-lime transition-colors focus-ring"
            >
              Contact me
              <ArrowUpRight size={18} strokeWidth={2} />
            </motion.a>
          </motion.div>

        </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
