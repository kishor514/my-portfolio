import Navbar from './Navbar'
import Contact from './Contact'
import { motion } from 'framer-motion'
import { pageTransition, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations'

export default function NearlookPage({ onBack, onNavigate }) {
  return (
    <motion.div 
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-bg text-white pb-8 overflow-hidden"
    >
      <Navbar />

      <div className="pt-28 sm:pt-32 mx-auto w-full max-w-[800px] px-4 space-y-8">
        
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-lime hover:text-white transition-colors font-medium mb-8"
        >
          <span className="transition-transform group-hover:-translate-x-1">&larr;</span> Back to Projects
        </button>

        {/* Large Image Header */}
        <div className="rounded-[2.5rem] bg-[#111] border-2 border-white/20 overflow-hidden p-4 sm:p-6 pb-8 sm:pb-10 flex flex-col">
          <div className="w-full rounded-[2rem] overflow-hidden mb-8 flex items-center justify-center aspect-[16/9] sm:aspect-[2/1]">
            <img src="/images/nearlook2.png" alt="Nearlook platform" className="w-full h-full object-cover" />
          </div>
          <div className="px-2 sm:px-4">
            <h1 className="text-3xl sm:text-[2.5rem] font-bold mb-3 tracking-tight">Product Listing & Filtering</h1>
            <p className="text-[#a0a0a0] text-lg">MERN Stack</p>
          </div>
        </div>

        {/* Profile and Project Description Row */}
        <div className="rounded-[2.5rem] bg-[#111] border-2 border-white/20 p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white/10 flex-shrink-0">
                {/* Fallback avatar if no image */}
                <img src="/images/projectprofile.png" alt="Kishor B" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Kishor B</h3>
                <p className="text-[#a0a0a0] text-sm mt-1">Full Stack Web Developer</p>
              </div>
            </div>
            
            <div className="bg-lime text-black p-6 rounded-[2rem] sm:max-w-[280px]">
              <p className="font-medium mb-6">multi-vendor shopping experience.</p>
              <a href="https://nearlook.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#222] transition-colors">
                Visit Site <span className="text-xs">↗</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Building the Nearlook Experience</h2>
            <div className="space-y-6 text-[#a0a0a0] leading-[1.8]">
              <p>Nearlook is a multi-vendor e-commerce platform built to provide customers with a seamless online shopping experience. The platform brings products from multiple sellers into one marketplace, with features for product discovery, filtering, product details, variants, seller information, and shopping flows.</p>
              <p>As a Full Stack Web Developer, I contributed to both frontend and backend development, working with React.js, Node.js, Express.js, and MongoDB to build and integrate the platform's core functionality. I also focused on scalable REST APIs and responsive UI design.</p>
            </div>
          </div>
        </div>

        {/* Second Image and Details */}
        <div className="space-y-8">
          <div className="w-full bg-white rounded-[2.5rem] border-2 border-white/20 overflow-hidden flex items-center justify-center aspect-[16/9] sm:aspect-[2/1]">
            <img src="/images/nearlook1.jpeg" alt="Product details" className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div 
              variants={fadeInLeft} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-lime text-black rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col justify-center min-h-[200px]"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                <span className="font-medium text-[0.95rem]">Project Duration</span>
              </div>
              <h3 className="text-[1.75rem] font-medium leading-tight">January 2026 - July 2026</h3>
              {/* Decorative dots in bottom left */}
              <div className="absolute -bottom-6 -left-6 hidden sm:block opacity-20">
                <div className="grid grid-cols-4 gap-2 p-8">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInRight} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-[#111] border-2 border-white/20 rounded-[2.5rem] p-8 flex flex-col justify-center min-h-[200px]"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <span className="font-medium text-[0.95rem] text-white/90">Technology</span>
              </div>
              <h3 className="text-[1.75rem] font-medium text-white">MERN Stack</h3>
            </motion.div>
          </div>
        </div>

        {/* Development Details */}
        <div className="rounded-[2.5rem] bg-[#111] border-2 border-white/20 p-8 sm:p-10">
          <h2 className="text-2xl font-bold mb-6">Full-Stack Development & Integration</h2>
          <div className="space-y-6 text-[#a0a0a0] leading-[1.8]">
            <p>I worked across the frontend and backend of Nearlook, building responsive e-commerce interfaces and integrating them with backend services. The frontend uses HTML, CSS, JavaScript and TypeScript, with Material UI and Bootstrap for reusable and responsive UI components.</p>
            <p>On the backend, I worked with Node.js and Express.js to develop REST APIs. I used MongoDB Compass during development, with the database hosted on MongoDB Atlas. Cloudinary handles product image storage, while the frontend and backend are deployed on a Hostinger VPS.</p>
          </div>
        </div>

        {/* Result */}
        <div className="rounded-[2.5rem] bg-[#111] border-2 border-white/20 p-8 sm:p-10">
          <h2 className="text-2xl font-bold mb-6">The Result</h2>
          <div className="text-[#a0a0a0] leading-[1.8]">
            <p>Nearlook delivers a complete multi-vendor e-commerce experience with product discovery, filtering, product details, variants, seller information, and cart functionality. The project gave me practical experience in full-stack development, API integration, database management, cloud image storage, and VPS deployment.</p>
          </div>
        </div>
        
      </div>
      
      {/* Contact Section */}
      <div className="mt-8">
         <Contact />
      </div>
    </motion.div>
  )
}
