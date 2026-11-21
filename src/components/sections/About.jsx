import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useLanguage } from '../../context/language'
import { SectionHeader } from '../ui/SectionHeader'
import { Reveal } from '../ui/Reveal'
import { RichText } from '../ui/RichText'
import aboutImg from '../../assets/images/about.webp'

export function About() {
  const { t } = useLanguage()
  const a = t.about
  const photoRef = useRef(null)

  // Légère parallaxe : la photo glisse un peu moins vite que la page
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader index={1} eyebrow={a.eyebrow} title={a.title} id="about-title" />

        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <div
              ref={photoRef}
              className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-line shadow-soft lg:max-w-none"
            >
              <motion.img
                src={aboutImg}
                alt={a.photoAlt}
                width={900}
                height={917}
                loading="lazy"
                decoding="async"
                style={{ y, scale: 1.14 }}
                className="block w-full saturate-[.92]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(160deg,transparent_50%,var(--accent-soft))]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {a.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mb-4 text-[16.5px] text-muted">
                <RichText text={p} />
              </p>
            ))}

            <ul className="mt-7 grid gap-3.5 sm:grid-cols-3">
              {a.facts.map((f) => (
                <li key={f.title} className="rounded-2xl border border-line bg-surface p-4">
                  <span className="block font-display text-[17px] font-semibold">{f.title}</span>
                  <span className="text-[13px] text-muted">{f.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
