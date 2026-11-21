import { m } from 'motion/react'

/** Fait apparaître son contenu en douceur quand il entre dans l'écran (une seule fois). */
export function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const Component = m[as]
  return (
    <Component
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1], delay }}
      className={className}
    >
      {children}
    </Component>
  )
}
