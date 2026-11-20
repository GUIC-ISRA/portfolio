import { motion } from 'motion/react'
import { ArrowRight, ChevronDown, CodeXml, Download, Mail, Smartphone, WifiOff } from 'lucide-react'
import { useLanguage } from '../../context/language'
import { links } from '../../data/links'
import { Badge } from '../ui/Badge'
import { ButtonLink } from '../ui/Button'
import { Portrait3D } from '../ui/Portrait3D'
import heroImg from '../../assets/images/hero.webp'

const stack = ['Laravel', 'React', 'Flutter', 'MySQL', 'SQLite']

const floats = [
  { icon: Smartphone, label: 'Flutter', className: 'top-[12%] -left-[6%] sm:-left-[14%]', z: 70 },
  { icon: WifiOff, label: 'Offline-first', className: 'top-[48%] -right-[6%] sm:-right-[12%]', z: 90 },
  { icon: CodeXml, label: 'Laravel · React', className: 'bottom-[9%] -left-[2%] sm:-left-[8%]', z: 55 },
]

// Apparition en cascade des éléments du texte
const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.7, 0.2, 1] } },
}

export function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section
      id="accueil"
      className="relative mx-auto grid max-w-6xl items-center gap-11 px-4 pt-10 pb-20 sm:px-6 lg:min-h-[calc(100svh-4.25rem)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pt-12"
    >
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p
          variants={item}
          className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface py-1.5 pr-3.5 pl-2.5 text-[13px] text-muted"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-green-500" />
          </span>
          <span className="hidden sm:inline">{h.status}</span>
          <span className="sm:hidden">{h.statusShort}</span>
        </motion.p>

        <motion.h1 variants={item} className="mt-6 mb-4.5 text-[clamp(2.75rem,6.4vw,5.1rem)] font-bold">
          {h.firstName}{' '}
          <span className="block bg-[linear-gradient(100deg,var(--text)_30%,var(--accent))] bg-clip-text text-transparent">
            {h.lastName}
          </span>
        </motion.h1>

        <motion.p variants={item} className="font-display text-[clamp(1.25rem,2.2vw,1.625rem)] font-medium">
          {h.role} — <span className="font-semibold whitespace-nowrap text-accent">{h.roleHighlight}</span>
        </motion.p>

        <motion.p variants={item} className="mt-3.5 mb-5.5 max-w-[520px] text-[17px] text-muted">
          {h.pitch}
        </motion.p>

        <motion.ul variants={item} className="mb-8.5 flex flex-wrap gap-2" aria-label="Stack">
          {stack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </motion.ul>

        <motion.div variants={item} className="flex flex-wrap items-center gap-3">
          <ButtonLink href="#projects">
            {h.ctaProjects}
            <ArrowRight size={17} aria-hidden />
          </ButtonLink>
          <ButtonLink href="#contact" variant="ghost">
            <Mail size={17} aria-hidden />
            {h.ctaContact}
          </ButtonLink>
          <ButtonLink href={links.cv} variant="link" download>
            <Download size={17} aria-hidden />
            {h.ctaCv}
          </ButtonLink>
        </motion.div>
      </motion.div>

      <motion.div
        className="-order-1 lg:order-none"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1], delay: 0.2 }}
      >
        <Portrait3D src={heroImg} alt={h.portraitAlt} width={900} height={1089} floats={floats} />
      </motion.div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 font-mono text-[11px] text-muted transition-colors hover:text-text lg:flex"
      >
        {t.ui.scroll}
        <ChevronDown size={16} className="animate-bounce motion-reduce:animate-none" aria-hidden />
      </a>
    </section>
  )
}
