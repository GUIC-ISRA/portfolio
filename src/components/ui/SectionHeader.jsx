import { Reveal } from './Reveal'

/** En-tête de section : « 01 / À propos » puis le titre. */
export function SectionHeader({ index, eyebrow, title, id }) {
  return (
    <Reveal className="mb-10 lg:mb-12">
      <p className="font-mono text-[13px] font-medium tracking-wide text-accent">
        {String(index).padStart(2, '0')} / {eyebrow}
      </p>
      <h2 id={id} className="mt-2.5 text-[clamp(2rem,4vw,2.875rem)] font-bold">
        {title}
      </h2>
    </Reveal>
  )
}
