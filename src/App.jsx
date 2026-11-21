import { LazyMotion, MotionConfig } from 'motion/react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Personality } from './components/sections/Personality'
import { Skills } from './components/sections/Skills'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Education } from './components/sections/Education'
import { Contact } from './components/sections/Contact'

// Les fonctionnalités d'animation sont chargées dans un fichier séparé, après le premier affichage
const loadMotionFeatures = () => import('./lib/motionFeatures').then((mod) => mod.default)

export default function App() {
  return (
    <LazyMotion features={loadMotionFeatures} strict>
      {/* reducedMotion="user" : respecte le réglage « réduire les animations » du système */}
      <MotionConfig reducedMotion="user">
        <div aria-hidden className="pointer-events-none fixed inset-0 bg-wash" />
        <div aria-hidden className="pointer-events-none fixed inset-0 bg-blueprint" />

        <div className="relative">
          <Navbar />
          <main id="main">
            <Hero />
            <About />
            <Personality />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </LazyMotion>
  )
}
