import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../../context/language'
import { useActiveSection } from '../../hooks/useActiveSection'
import { sections } from '../../data/links'
import { ThemeToggle } from '../ui/ThemeToggle'
import { LangToggle } from '../ui/LangToggle'

export function Navbar() {
  const { t } = useLanguage()
  const active = useActiveSection(sections)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Bordure et fond plus marqués dès qu'on quitte le haut de la page
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Menu mobile : touche Échap pour fermer + blocage du défilement en arrière-plan
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  // Referme le menu si l'écran repasse en format ordinateur
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        open ? 'border-line bg-bg' : scrolled ? 'border-line bg-bg/75' : 'border-transparent bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        {t.ui.skipToContent}
      </a>

      <nav className="mx-auto flex h-17 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#accueil" className="font-display text-xl font-bold" aria-label={t.ui.home}>
          EIG<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm md:flex">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`relative py-1 transition-colors hover:text-text ${
                  active === id ? 'text-text' : 'text-muted'
                }`}
              >
                {t.nav[id]}
                {active === id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-1.5 h-0.5 rounded-full bg-accent"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
            className="grid size-9 cursor-pointer place-items-center rounded-[10px] border border-line bg-surface text-text transition hover:border-accent md:hidden"
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <ul className="flex h-[calc(100dvh-4.25rem)] flex-col gap-1 px-4 pt-6 pb-10">
              {sections.map((id, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-baseline gap-4 rounded-xl px-3 py-3.5 font-display text-3xl font-semibold transition-colors hover:bg-surface ${
                      active === id ? 'text-accent' : 'text-text'
                    }`}
                  >
                    <span className="font-mono text-xs font-normal text-muted">0{i + 1}</span>
                    {t.nav[id]}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
