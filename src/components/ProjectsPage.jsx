import FooterCTA from './FooterCTA'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, pageTransition } from '../utils/animations'

export default function ProjectsPage({ onBack, onNavigate }) {
  const projects = [
    {
      subtitle: 'FULL-STACK WEB APPLICATION',
      title: 'Nearlook Multivendor E-commerce Platform',
      description: 'A full-stack multivendor e-commerce platform with product management, seller functionality, product variants, cart, checkout, orders, and other e-commerce features.',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Tailwind CSS'],
      image: '/images/nearlook.png'
    },
    {
      subtitle: 'FULL-STACK WEB APPLICATION',
      title: 'Inventory Management System',
      description: 'A food product e-commerce website backed by a secure admin panel that handles comprehensive inventory management, including stock, purchases, and expenses.',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
      image: '/images/inventory.png'
    },
    {
      subtitle: 'WEB APPLICATION',
      title: 'Real Estate Management Website',
      description: 'A real estate web application for managing and displaying property-related information, property listings, images, locations, and other property details.',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
      image: '/images/realesate.png'
    }
  ];

  return (
    <motion.div 
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-bg text-white pt-12 pb-8 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-lime hover:text-white transition-colors font-medium mb-12"
        >
          <span className="transition-transform group-hover:-translate-x-1">&larr;</span> Back to Home
        </button>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-[3rem] font-bold tracking-tight mb-4">
            My Projects
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-[#a0a0a0] text-[1.1rem]">
            A selection of real-world web applications I've worked on.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {projects.map((project, idx) => (
            <motion.div 
              variants={fadeInUp}
              key={idx} 
              className="flex flex-col rounded-[2rem] bg-[#0c0c0c] border border-white/5 overflow-hidden cursor-pointer group hover:border-white/20 transition-colors"
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
              <div className="h-64 bg-[#141414] relative border-b border-white/5 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <p className="text-[0.75rem] font-bold text-lime mb-3 tracking-wide">{project.subtitle}</p>
                <h3 className="text-2xl font-bold mb-4 transition-colors">{project.title}</h3>
                <p className="text-[#a0a0a0] text-[0.95rem] leading-[1.6] mb-8 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 bg-[#161616] text-[0.75rem] font-medium text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (project.title.includes('Nearlook')) {
                      window.open('https://nearlook.in/', '_blank', 'noopener,noreferrer');
                    } else if (project.title.includes('Inventory')) {
                      alert("Note: The inventory admin panel requires login. The live site currently shows the e-commerce storefront.");
                      window.open('https://srivishnuvilassfoods.com/', '_blank', 'noopener,noreferrer');
                    } else if (project.title.includes('Real Estate')) {
                      window.open('https://kishorrealestate.infinityfreeapp.com/?i=2', '_blank', 'noopener,noreferrer');
                    }
                  }}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-[1.25rem] bg-lime text-black font-bold text-[0.95rem] hover:opacity-90 transition-opacity"
                >
                  Visit Site
                  <span className="text-[1.1rem]">↗</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      <div className="mt-16 max-w-[650px] mx-auto">
        <FooterCTA onNavigate={onNavigate} />
      </div>
    </motion.div>
  )
}
