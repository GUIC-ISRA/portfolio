import { Database, Lightbulb, Monitor, Server, Smartphone, Wrench } from 'lucide-react'
import { useLanguage } from '../../context/language'
import { SectionHeader } from '../ui/SectionHeader'
import { Reveal } from '../ui/Reveal'
import { Badge } from '../ui/Badge'

const icons = { mobile: Smartphone, frontend: Monitor, backend: Server, data: Database, tools: Wrench }

export function Skills() {
  const { t } = useLanguage()
  const s = t.skills

  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-line py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader index={3} eyebrow={s.eyebrow} title={s.title} id="skills-title" />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {s.categories.map((cat, i) => {
            const Icon = icons[cat.key]
            return (
              <Reveal
                as="li"
                key={cat.key}
                delay={0.06 * (i % 3)}
                className="rounded-[20px] border border-line bg-surface p-6.5 transition duration-300 hover:-translate-y-1 hover:border-accent/45"
              >
                <span className="mb-4.5 grid size-11 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon size={22} aria-hidden />
                </span>
                <h3 className="mb-3.5 text-xl font-semibold">{cat.title}</h3>
                <ul className="flex flex-wrap gap-1.75">
                  {cat.items.map((item) => (
                    <li key={item}>
                      <Badge>{item}</Badge>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}

          {/* Notions : présentées à part pour ne pas les confondre avec les compétences maîtrisées */}
          <Reveal
            as="li"
            delay={0.12}
            className="rounded-[20px] border border-dashed border-accent/40 bg-accent-soft/50 p-6.5"
          >
            <span className="mb-4.5 grid size-11 place-items-center rounded-xl border border-dashed border-accent/40 text-accent">
              <Lightbulb size={22} aria-hidden />
            </span>
            <h3 className="mb-1.5 text-xl font-semibold">{s.notions.title}</h3>
            <p className="mb-3.5 text-sm text-muted">{s.notions.text}</p>
            <ul className="flex flex-wrap gap-1.75">
              {s.notions.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-dashed border-line px-2.5 py-1.5 font-mono text-xs text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </ul>
      </div>
    </section>
  )
}
