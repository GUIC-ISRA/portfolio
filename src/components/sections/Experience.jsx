import { Briefcase, Check, MapPin } from 'lucide-react'
import { useLanguage } from '../../context/language'
import { SectionHeader } from '../ui/SectionHeader'
import { Reveal } from '../ui/Reveal'
import { Badge } from '../ui/Badge'
import experienceImg from '../../assets/images/experience.webp'

export function Experience() {
  const { t } = useLanguage()
  const e = t.experience

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="border-t border-line bg-tint py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader index={4} eyebrow={e.eyebrow} title={e.title} id="experience-title" />

        <div className="grid items-stretch gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {e.jobs.map((job) => (
            <Reveal
              as="article"
              key={job.company}
              className="relative overflow-hidden rounded-3xl border border-line bg-surface p-6 sm:p-8.5"
            >
              {/* Filet bleu vertical */}
              <span
                aria-hidden
                className="absolute top-8.5 bottom-8.5 left-0 w-0.75 rounded-full bg-[linear-gradient(var(--accent),transparent)]"
              />

              <div className="mb-1.5 flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-2xl font-semibold">{job.role}</h3>
                <Badge>{job.period}</Badge>
              </div>

              <p className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Briefcase size={15} aria-hidden /> {job.company}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={15} aria-hidden /> {job.location}
                </span>
              </p>

              <p className="mb-5 text-text">{job.summary}</p>

              <ul className="mb-6 grid gap-3">
                {job.tasks.map((task) => (
                  <li key={task} className="flex gap-3 text-muted">
                    <Check size={18} strokeWidth={2.4} className="mt-0.75 flex-none text-accent" aria-hidden />
                    {task}
                  </li>
                ))}
              </ul>

              <ul className="flex flex-wrap gap-1.75" aria-label="Technologies">
                {job.stack.map((tech) => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal delay={0.1} className="overflow-hidden rounded-3xl border border-line shadow-soft">
            <img
              src={experienceImg}
              alt={e.photoAlt}
              width={1100}
              height={782}
              loading="lazy"
              decoding="async"
              className="block size-full min-h-64 object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
