import { FlaskConical, GraduationCap, MapPin, School } from 'lucide-react'
import { useLanguage } from '../../context/language'
import { SectionHeader } from '../ui/SectionHeader'
import { Reveal } from '../ui/Reveal'
import { Badge } from '../ui/Badge'

const icons = { licence: GraduationCap, biology: FlaskConical, bac: School }

export function Education() {
  const { t } = useLanguage()
  const e = t.education

  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="border-t border-line bg-tint py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader index={6} eyebrow={e.eyebrow} title={e.title} id="education-title" />

        {/* Frise verticale */}
        <ol className="relative ml-5 max-w-3xl border-l border-line sm:ml-6">
          {e.items.map((item, i) => {
            const Icon = icons[item.key]
            const isFirst = i === 0
            return (
              <Reveal as="li" key={item.key} delay={0.08 * i} className="relative pb-8 pl-9 last:pb-0 sm:pl-11">
                <span
                  className={`absolute top-0 -left-5 grid size-10 place-items-center rounded-xl border ${
                    isFirst
                      ? 'border-transparent bg-accent text-white shadow-[0_8px_24px_-8px_var(--glow)]'
                      : 'border-line bg-surface text-accent'
                  }`}
                >
                  <Icon size={19} aria-hidden />
                </span>

                <div className="rounded-[20px] border border-line bg-surface p-5.5 sm:p-6">
                  <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold sm:text-xl">{item.degree}</h3>
                    <Badge>{item.period}</Badge>
                  </div>
                  <p className="flex flex-wrap items-center gap-x-3 text-sm text-muted">
                    <span className="font-medium text-text">{item.school}</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={14} aria-hidden /> {item.location}
                    </span>
                  </p>
                  {item.text && <p className="mt-3 text-[15px] text-muted">{item.text}</p>}
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
