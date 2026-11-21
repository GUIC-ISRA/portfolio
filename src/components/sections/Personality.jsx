import { BookOpen, Target, TrendingUp, Users } from 'lucide-react'
import { useLanguage } from '../../context/language'
import { SectionHeader } from '../ui/SectionHeader'
import { Reveal } from '../ui/Reveal'
import { RichText } from '../ui/RichText'
import personalityImg from '../../assets/images/personnalite.webp'

// Une icône par valeur, dans le même ordre que t.personality.values
const icons = [BookOpen, Target, TrendingUp, Users]

export function Personality() {
  const { t } = useLanguage()
  const p = t.personality

  return (
    <section
      id="personality"
      aria-labelledby="personality-title"
      className="border-t border-line bg-tint py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader index={2} eyebrow={p.eyebrow} title={p.title} id="personality-title" />

        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
          <div>
            <Reveal>
              <p className="mb-7.5 max-w-150 text-[19px] text-text">
                <RichText text={p.lead} strongClassName="font-semibold text-accent" />
              </p>
            </Reveal>

            <ul className="grid gap-4 sm:grid-cols-2">
              {p.values.map((v, i) => {
                const Icon = icons[i]
                return (
                  <Reveal
                    as="li"
                    key={v.title}
                    delay={0.06 * i}
                    className="rounded-[18px] border border-line bg-surface p-5.5 transition duration-300 hover:-translate-y-1 hover:border-accent/45"
                  >
                    <span className="mb-3.5 grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
                      <Icon size={20} aria-hidden />
                    </span>
                    <h3 className="mb-1.5 text-[17px] font-semibold">{v.title}</h3>
                    <p className="text-[14.5px] text-muted">{v.text}</p>
                  </Reveal>
                )
              })}
            </ul>

            <Reveal delay={0.2}>
              <p className="mt-6.5 rounded-2xl border border-line bg-accent-soft px-5.5 py-4.5 font-display text-lg font-medium">
                <RichText text={p.quote} strongClassName="font-medium text-accent" />
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="-order-1 justify-self-center lg:order-0">
            <figure className="relative w-full max-w-75 overflow-hidden rounded-3xl border border-line shadow-soft lg:max-w-90">
              <img
                src={personalityImg}
                alt={p.photoAlt}
                width={425}
                height={750}
                loading="lazy"
                decoding="async"
                className="block aspect-425/750 w-full object-cover"
              />
              <figcaption className="absolute inset-x-3 bottom-3 rounded-xl border border-line bg-surface/85 px-3.5 py-2.5 font-mono text-xs font-medium text-text backdrop-blur-md">
                {p.photoCaption}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
