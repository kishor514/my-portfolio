import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/animations'

const technologies = [
  { name: 'HTML', icon: '/logos/html-1.svg', scale: 'scale-90' },
  { name: 'CSS', icon: '/logos/css-3.svg', scale: 'scale-90' },
  { name: 'Javascript', icon: '/logos/javascript-r.svg', scale: 'scale-90' },
  { name: 'React.js', icon: '/logos/react-native-1.svg', scale: 'scale-[1.15]' },
  { name: 'Node.js', icon: '/logos/nodejs-logo.svg' },
  { name: 'Express.js', icon: '/logos/express-logo.svg' },
  { name: 'MongoDB', icon: '/logos/mongodb-logo.svg' },
  { name: 'PHP', icon: '/logos/programing.png', scale: 'scale-[1.2]' },
  { name: 'MySQL', icon: '/logos/mysql_919836.png', scale: 'scale-110' },
  { name: 'SQL', icon: '/logos/structured-query-language_9850804.png', scale: 'scale-100' },
  { name: 'Git', icon: '/logos/icons8-git-48.png', scale: 'scale-110' },
  { name: 'GitHub', icon: '/logos/github-logo.svg', scale: 'scale-90' },
]

export default function TechStack() {
  return (
    <section className="px-4 py-8 sm:py-12 overflow-hidden">
      <motion.div 
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto w-full max-w-[420px] sm:max-w-[500px] md:max-w-[580px] text-center"
      >
        <h2 className="text-xl font-semibold text-white/80 sm:text-2xl">
          Technologies I Work With
        </h2>

        <div className="relative mt-8 flex overflow-hidden mask-image-linear">
          {/* Gradient Masks for fading edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent"></div>

          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-x-14 sm:gap-x-20">
            {/* Double the technologies for seamless loop */}
            {[...technologies, ...technologies, ...technologies].map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-white/60 transition-colors hover:text-white"
              >
                {tech.icon ? (
                  <img src={tech.icon} alt={tech.name} className={`h-8 w-8 sm:h-10 sm:w-10 shrink-0 object-contain ${tech.scale || ''}`} />
                ) : (
                  <span className="text-2xl sm:text-3xl">{tech.emoji}</span>
                )}
                <span className="text-lg font-medium sm:text-xl">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
