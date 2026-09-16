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
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'home';
  });
  const [scrollTo, setScrollTo] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setCurrentPage(hash || 'home');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page, scrollId = null) => {
    window.location.hash = page;
    setCurrentPage(page);
    if (scrollId) {
      setScrollTo(scrollId);
    }
  };

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
      case 'frontend': return <FrontendPage onBack={() => navigate('home')} onNavigate={navigate} />
      case 'backend': return <BackendPage onBack={() => navigate('home')} onNavigate={navigate} />
      case 'database': return <DatabasePage onBack={() => navigate('home')} onNavigate={navigate} />
      case 'uistyling': return <UIStylingPage onBack={() => navigate('home')} onNavigate={navigate} />
      case 'tools': return <ToolsPage onBack={() => navigate('home')} onNavigate={navigate} />
      case 'deployment': return <DeploymentPage onBack={() => navigate('home')} onNavigate={navigate} />
      case 'projects': return <ProjectsPage onBack={() => navigate('home')} onNavigate={navigate} />
      case 'nearlook': return <NearlookPage onBack={() => navigate('home', 'project-nearlook')} onNavigate={navigate} />
      case 'inventory': return <InventoryPage onBack={() => navigate('home', 'project-inventory')} onNavigate={navigate} />
      case 'realestate': return <RealEstatePage onBack={() => navigate('home', 'project-realestate')} onNavigate={navigate} />
      case 'home':
      default:
        return (
          <>
            <Navbar />
            <main>
              <Hero />
              <TechStack />
              <Journey />
              <Projects onNavigate={navigate} />
              <ExperienceTimeline />
              <SkillsDetail onNavigate={navigate} />
              <Marquee text="Explore my service" />
              <SkillsGrid onNavigate={navigate} />
              <Process />
              <LookingFor />
              <WhatIBuild />
              <FAQ />
              <Contact />
              <FooterCTA onNavigate={navigate} />
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
