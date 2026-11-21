import { ArrowUpRight, GraduationCap, PanelsTopLeft, QrCode, Users } from 'lucide-react'
import { useLanguage } from '../../context/language'
import { projects } from '../../data/projects'
import { SectionHeader } from '../ui/SectionHeader'
import { Reveal } from '../ui/Reveal'
import { Badge } from '../ui/Badge'
import { GithubIcon } from '../ui/BrandIcons'

// Visuel de chaque carte (pas de capture d'écran : une icône sur fond « blueprint »)
const icons = { employees: Users, qr: QrCode, students: GraduationCap, portfolio: PanelsTopLeft }

export function Projects() {
  const { t } = useLanguage()
  const p = t.projects

  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-line py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader index={5} eyebrow={p.eyebrow} title={p.title} id="projects-title" />

        <ul className="grid gap-5.5 md:grid-cols-2">
          {projects.map((project, i) => {
            const text = p.items[project.key]
            const Icon = icons[project.key]
            const links = project.links.filter((l) => l.href)

            return (
              <Reveal
                as="li"
                key={project.key}
                delay={0.06 * (i % 2)}
                className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-soft"
              >
                <div
                  aria-hidden
                  className="relative grid h-48 place-items-center bg-surface-2 bg-[radial-gradient(circle_at_75%_20%,var(--glow),transparent_55%),linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)] bg-size-[auto,28px_28px,28px_28px]"
                >
                  <span className="absolute top-4 left-4.5 font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="absolute top-3.5 right-4 rounded-full border border-line bg-surface/80 px-2.5 py-1 font-mono text-[11px] text-muted backdrop-blur">
                    {text.tag}
                  </span>
                  <span className="grid size-18.5 place-items-center rounded-[20px] border border-line bg-surface text-accent shadow-soft transition duration-500 group-hover:scale-110 group-hover:-rotate-6 motion-reduce:transform-none">
                    <Icon size={34} strokeWidth={1.8} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-6.5">
                  <h3 className="mb-2 text-[21px] font-semibold">{text.title}</h3>
                  <p className="mb-4.5 text-[15px] text-muted">{text.description}</p>

                  <ul className="flex flex-wrap gap-1.75" aria-label="Technologies">
                    {project.stack.map((tech) => (
                      <li key={tech}>
                        <Badge>{tech}</Badge>
                      </li>
                    ))}
                  </ul>

                  {links.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-5 text-sm font-semibold">
                      {links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${p.linkLabels[link.label]} — ${text.title}`}
                          className="inline-flex items-center gap-1.5 text-accent hover:underline"
                        >
                          {link.type === 'github' ? (
                            <GithubIcon size={16} />
                          ) : (
                            <ArrowUpRight size={16} aria-hidden />
                          )}
                          {p.linkLabels[link.label]}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
