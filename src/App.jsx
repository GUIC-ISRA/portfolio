// Page de contrôle temporaire (étape 6) : vérifie Tailwind, les thèmes, les langues,
// les polices et Motion. Elle sera remplacée par les vraies sections à l'étape 7.
import { motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'
import { ThemeToggle } from './components/ui/ThemeToggle'
import { LangToggle } from './components/ui/LangToggle'
import { useLanguage } from './context/language'

const swatches = [
  ['bg-bg', 'bg'],
  ['bg-surface', 'surface'],
  ['bg-surface-2', 'surface-2'],
  ['bg-text', 'text'],
  ['bg-accent', 'accent'],
]

export default function App() {
  const { t, lang } = useLanguage()

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div aria-hidden className="pointer-events-none fixed inset-0 bg-wash" />
      <div aria-hidden className="pointer-events-none fixed inset-0 bg-blueprint" />

      <main className="relative mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <div className="mb-12 flex items-center justify-between">
          <span className="font-display text-xl font-bold">
            EIG<span className="text-accent">.</span>
          </span>
          <div className="flex gap-2">
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
          className="rounded-3xl border border-line bg-surface p-8 shadow-soft"
        >
          <p className="font-mono text-sm text-accent">06 / Initialisation</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Fondations prêtes</h1>
          <p className="mt-4 text-muted">
            Langue active : <strong className="text-text">{lang.toUpperCase()}</strong> — menu :{' '}
            {Object.values(t.nav).join(' · ')}
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {['React + Vite', 'Tailwind CSS v4', 'Motion', 'Lucide React', 'Thème clair / sombre', 'FR / EN'].map(
              (item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-accent" aria-hidden />
                  {item}
                </li>
              ),
            )}
          </ul>

          <div className="mt-8 grid grid-cols-5 gap-2.5">
            {swatches.map(([cls, name]) => (
              <div key={name} className={`${cls} flex h-16 items-end rounded-xl border border-line p-2`}>
                <span className="rounded bg-surface/80 px-1 font-mono text-[10px] text-text">{name}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {['Laravel', 'React', 'Flutter', 'MySQL', 'SQLite'].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-line bg-badge px-2.5 py-1.5 font-mono text-xs font-medium text-badge-text"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}
