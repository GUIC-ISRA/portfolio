import { MotionConfig } from 'motion/react'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Personality } from './components/sections/Personality'

export default function App() {
  return (
    // reducedMotion="user" : respecte le réglage « réduire les animations » du système
    <MotionConfig reducedMotion="user">
      <div aria-hidden className="pointer-events-none fixed inset-0 bg-wash" />
      <div aria-hidden className="pointer-events-none fixed inset-0 bg-blueprint" />

      <div className="relative">
        <Navbar />
        <main id="main">
          <Hero />
          <About />
          <Personality />
        </main>
      </div>
    </MotionConfig>
  )
}
