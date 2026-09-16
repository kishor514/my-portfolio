import Navbar from './Navbar'
import Contact from './Contact'
import { motion } from 'framer-motion'
import { pageTransition, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations'

export default function RealEstatePage({ onBack, onNavigate }) {
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
        <div className="rounded-[2rem] bg-[#111] border border-white/5 overflow-hidden p-4 sm:p-6 pb-8 sm:pb-10 flex flex-col">
          <div className="w-full rounded-[1.5rem] overflow-hidden mb-8 flex items-center justify-center aspect-[16/9] sm:aspect-[2/1]">
            <img src="/images/realesate1.png" alt="Real Estate platform" className="w-full h-full object-cover" />
          </div>
          <div className="px-2 sm:px-4">
            <h1 className="text-3xl sm:text-[2.5rem] font-bold mb-3 tracking-tight">Property Listing Dashboard</h1>
            <p className="text-[#a0a0a0] text-lg">PHP • MySQL</p>
          </div>
        </div>

        {/* Profile and Project Duration Row */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 py-4 px-2 sm:px-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-white/10 flex-shrink-0 border border-white/10">
              <img src="/images/projectprofile.png" alt="Kishor B" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Kishor B</h3>
              <p className="text-[#a0a0a0] text-sm mt-1">Full Stack Web Developer</p>
            </div>
          </div>
          
          <div className="bg-lime text-black p-6 rounded-[1.5rem] sm:max-w-[280px]">
            <p className="font-medium mb-6">Buy, rent or lease all in one platform.</p>
            <a href="https://kishorrealestate.infinityfreeapp.com/?i=2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#222] transition-colors">
              Visit Site <span className="text-xs">↗</span>
            </a>
          </div>
        </div>

        {/* Project Description */}
        <div className="rounded-[2rem] bg-[#111] border border-white/5 p-8 sm:p-10">
          <div>
            <h2 className="text-2xl font-bold mb-6">How I Approach Development</h2>
            <div className="space-y-6 text-[#a0a0a0] leading-[1.8]">
              <p>The development process focused on creating a simple platform where users can easily discover properties available for sale, rent, or lease. I worked on organizing property details such as location, pricing, property type, images, and other important information for a smooth browsing experience.</p>
              <p>I developed seller-side functionality that allows sellers to add and manage property listings. The listings are connected with the backend and database to store and display property details dynamically.</p>
            </div>
          </div>
        </div>

        {/* Second Image and Details */}
        <div className="space-y-8">
          <div className="w-full bg-white rounded-[2rem] border border-white/5 overflow-hidden flex items-center justify-center aspect-[16/9] sm:aspect-[2/1]">
            <img src="/images/realestate2.png" alt="Product details" className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div 
              variants={fadeInLeft} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-lime text-black rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-center min-h-[200px]"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                <span className="font-medium text-[0.95rem]">Project Duration</span>
              </div>
              <h3 className="text-[1.75rem] font-medium leading-tight">Sep 2025 - Nov 2025</h3>
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
              className="bg-[#111] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-center min-h-[200px]"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <span className="font-medium text-[0.95rem] text-white/90">Technology</span>
              </div>
              <h3 className="text-[1.75rem] font-medium text-white">PHP + MYSQL</h3>
            </motion.div>
          </div>
        </div>

        {/* Development Details */}
        <div className="rounded-[2rem] bg-[#111] border border-white/5 p-8 sm:p-10">
          <h2 className="text-2xl font-bold mb-6">Technical Implementation</h2>
          <div className="space-y-6 text-[#a0a0a0] leading-[1.8]">
            <p>I focused on building a responsive interface that works smoothly across desktop and mobile devices. The property pages feature clear navigation, organized information, images, pricing, and location details. I also designed intuitive layouts to help users explore properties and find relevant information easily.</p>
            <p>I implemented property submission forms with proper validation and data handling. The PHP backend processes property information efficiently, while MySQL stores and manages property records. The system retrieves updated property data and displays it dynamically across the platform.</p>
          </div>
        </div>

        {/* Result */}
        <div className="rounded-[2rem] bg-[#111] border border-white/5 p-8 sm:p-10">
          <h2 className="text-2xl font-bold mb-6">The Result</h2>
          <div className="text-[#a0a0a0] leading-[1.8]">
            <p>The platform makes it easier for users to discover properties available for sale, rent, or lease. Sellers can add and manage their property listings with images, pricing, location, and other details. The system provides a clear and organized experience for both property seekers and sellers.</p>
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
