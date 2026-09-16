import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import { pageTransition } from './utils/animations'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import TechStack from './components/TechStack'
import Journey from './components/Journey'
import Projects from './components/Projects'
import ExperienceTimeline from './components/ExperienceTimeline'
import SkillsDetail from './components/SkillsDetail'
import SkillsGrid from './components/SkillsGrid'
import Process from './components/Process'
import LookingFor from './components/LookingFor'
import WhatIBuild from './components/WhatIBuild'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import FooterCTA from './components/FooterCTA'
import FrontendPage from './components/FrontendPage'
import BackendPage from './components/BackendPage'
import DatabasePage from './components/DatabasePage'
import UIStylingPage from './components/UIStylingPage'
import ToolsPage from './components/ToolsPage'
import DeploymentPage from './components/DeploymentPage'
import ProjectsPage from './components/ProjectsPage'
import NearlookPage from './components/NearlookPage'
import InventoryPage from './components/InventoryPage'
import RealEstatePage from './components/RealEstatePage'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [scrollTo, setScrollTo] = useState(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    window.lenis = lenis;

    return () => {
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  useEffect(() => {
    if (scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          if (window.lenis) {
            window.lenis.scrollTo(element, { offset: -50, duration: 1.5 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
        setScrollTo(null);
      }, 600); // Delay to ensure page mounts after exit animation (400ms)
    } else {
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [currentPage])

  const renderPage = () => {
    switch (currentPage) {
      case 'frontend': return <FrontendPage onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />
      case 'backend': return <BackendPage onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />
      case 'database': return <DatabasePage onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />
      case 'uistyling': return <UIStylingPage onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />
      case 'tools': return <ToolsPage onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />
      case 'deployment': return <DeploymentPage onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />
      case 'projects': return <ProjectsPage onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />
      case 'nearlook': return <NearlookPage onBack={() => { setCurrentPage('home'); setScrollTo('project-nearlook'); }} onNavigate={setCurrentPage} />
      case 'inventory': return <InventoryPage onBack={() => { setCurrentPage('home'); setScrollTo('project-inventory'); }} onNavigate={setCurrentPage} />
      case 'realestate': return <RealEstatePage onBack={() => { setCurrentPage('home'); setScrollTo('project-realestate'); }} onNavigate={setCurrentPage} />
      case 'home':
      default:
        return (
          <>
            <Navbar />
            <main>
              <Hero />
              <TechStack />
              <Journey />
              <Projects onNavigate={setCurrentPage} />
              <ExperienceTimeline />
              <SkillsDetail onNavigate={setCurrentPage} />
              <Marquee text="Explore my service" />
              <SkillsGrid onNavigate={setCurrentPage} />
              <Process />
              <LookingFor />
              <WhatIBuild />
              <FAQ />
              <Contact />
              <FooterCTA onNavigate={setCurrentPage} />
            </main>
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-bg text-white overflow-clip">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={pageTransition}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
