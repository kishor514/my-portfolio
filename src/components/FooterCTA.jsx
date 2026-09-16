import { ArrowUpRight, Monitor } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'

export default function FooterCTA({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="px-4 pb-12 pt-0">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto w-full max-w-[650px]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Left Card: Explore My Work */}
          <motion.button 
            variants={fadeInUp}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              if (onNavigate) {
                window.scrollTo({ top: 0 });
                onNavigate('projects');
              } else {
                window.location.hash = 'projects';
              }
            }}
            className="group relative overflow-hidden rounded-[2rem] bg-[#0f0f0f] p-6 block min-h-[250px] w-full text-left cursor-pointer"
          >
            {/* Background Image Layer */}
            <motion.div
              className="absolute inset-0 bg-cover bg-top opacity-70 transition-opacity group-hover:opacity-90"
              style={{
                backgroundImage: "url('/images/profile.png')",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
            
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/20 bg-black/40 backdrop-blur-md">
                <Monitor size={16} className="text-lime" />
              </div>
              
              <div className="mt-8">
                <p className="text-[1rem] font-bold text-lime">.Kishor</p>
                <div className="mt-1 flex items-end justify-between">
                  <h3 className="text-[2rem] font-bold leading-[1.1] text-white">
                    Explore<br />My Work
                  </h3>
                  <ArrowUpRight size={32} className="mb-1 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </motion.button>

          {/* Right Card: Why Work With Me */}
          <motion.div 
            variants={fadeInUp}
            className="relative overflow-hidden rounded-[2rem] bg-lime p-8 min-h-[250px] flex flex-col justify-between"
          >
            {/* Dotted Pattern top right */}
            <div className="absolute right-6 top-6 opacity-20">
              <svg width="50" height="50" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor" fillRule="evenodd">
                  <g fill="#000" fillOpacity="1">
                    <circle cx="5" cy="5" r="3" />
                    <circle cx="15" cy="5" r="3" />
                    <circle cx="25" cy="5" r="3" />
                    <circle cx="35" cy="5" r="3" />
                    <circle cx="45" cy="5" r="3" />
                    
                    <circle cx="5" cy="15" r="3" />
                    <circle cx="15" cy="15" r="3" />
                    <circle cx="25" cy="15" r="3" />
                    <circle cx="35" cy="15" r="3" />
                    <circle cx="45" cy="15" r="3" />

                    <circle cx="5" cy="25" r="3" />
                    <circle cx="15" cy="25" r="3" />
                    <circle cx="25" cy="25" r="3" />
                    <circle cx="35" cy="25" r="3" />
                    <circle cx="45" cy="25" r="3" />

                    <circle cx="5" cy="35" r="3" />
                    <circle cx="15" cy="35" r="3" />
                    <circle cx="25" cy="35" r="3" />
                    <circle cx="35" cy="35" r="3" />
                    <circle cx="45" cy="35" r="3" />
                    
                    <circle cx="5" cy="45" r="3" />
                    <circle cx="15" cy="45" r="3" />
                    <circle cx="25" cy="45" r="3" />
                    <circle cx="35" cy="45" r="3" />
                    <circle cx="45" cy="45" r="3" />
                  </g>
                </g>
              </svg>
            </div>

            <h3 className="text-[1.8rem] leading-[1.1] font-medium tracking-tight text-[#111] max-w-[180px]">
              Why Work<br />With Me
            </h3>
            
            <div className="mt-6 flex flex-wrap gap-2.5 relative z-10">
              {[
                'Communication', 'Fast Learner',
                'Problem Solver', 'Adaptable',
                'Collaborative', 'AI-Assisted'
              ].map((skill, index) => (
                <motion.div 
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-full bg-[#1a1a1a] px-3 py-1.5 text-[0.8rem] font-medium tracking-wide text-white whitespace-nowrap cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Back to Top */}
        <motion.div variants={fadeInUp} className="mt-8 flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="group flex items-center gap-2.5 text-[0.85rem] text-white/70 transition-colors hover:text-white"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-white transition-transform group-hover:scale-110" />
            Back to Top
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  )
}
