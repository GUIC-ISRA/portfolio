import { useEffect } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'motion/react'

const spring = { stiffness: 120, damping: 18, mass: 0.6 }

/**
 * Portrait en relief : plusieurs couches (halo, photo, reflet, repères, badges)
 * placées à des profondeurs différentes, qui s'inclinent selon la position du curseur.
 * Désactivé sur écran tactile et si l'utilisateur préfère réduire les animations.
 *
 * floats : [{ icon: Composant, label: string, className: position, z: profondeur }]
 */
export function Portrait3D({ src, alt, width, height, floats = [] }) {
  const reduce = useReducedMotion()

  // Position du curseur, normalisée entre -0.5 et 0.5
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-14, 14]), spring)
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [10, -10]), spring)
  const shineX = useSpring(useTransform(px, [-0.5, 0.5], [10, 90]), spring)
  const shineY = useSpring(useTransform(py, [-0.5, 0.5], [0, 70]), spring)
  const shine = useMotionTemplate`radial-gradient(circle at ${shineX}% ${shineY}%, rgb(255 255 255 / 0.2), transparent 45%)`

  useEffect(() => {
    if (reduce || !window.matchMedia('(pointer: fine)').matches) return
    const onMove = (e) => {
      px.set(e.clientX / window.innerWidth - 0.5)
      py.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduce, px, py])

  return (
    <div className="grid place-items-center [perspective:1200px]">
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d', aspectRatio: `${width} / ${height}` }}
        className="relative w-[min(320px,78vw)] lg:w-[min(420px,100%)]"
      >
        {/* Halo lumineux, loin derrière */}
        <motion.div
          aria-hidden
          style={{ z: -80 }}
          className="absolute -inset-[18%] bg-[radial-gradient(circle_at_50%_45%,var(--glow),transparent_62%)] blur-[30px]"
        />

        {/* Photo */}
        <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-line bg-surface-2 shadow-soft">
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            fetchPriority="high"
            decoding="async"
            className="size-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,color-mix(in_srgb,var(--bg)_55%,transparent))]"
          />
        </div>

        {/* Reflet de lumière qui suit le curseur */}
        <motion.div
          aria-hidden
          style={{ background: shine, z: 1 }}
          className="pointer-events-none absolute inset-0 rounded-[28px] mix-blend-soft-light"
        />

        {/* Repères d'angle façon plan d'architecte */}
        <motion.div aria-hidden style={{ z: 30 }} className="pointer-events-none absolute -inset-3.5">
          <i className="absolute top-0 left-0 size-5.5 rounded-tl-md border-t-2 border-l-2 border-accent/80" />
          <i className="absolute top-0 right-0 size-5.5 rounded-tr-md border-t-2 border-r-2 border-accent/80" />
          <i className="absolute bottom-0 left-0 size-5.5 rounded-bl-md border-b-2 border-l-2 border-accent/80" />
          <i className="absolute right-0 bottom-0 size-5.5 rounded-br-md border-r-2 border-b-2 border-accent/80" />
        </motion.div>

        {/* Badges flottants */}
        {floats.map(({ icon: Icon, label, className, z }, i) => (
          <motion.div
            key={label}
            style={{ z }}
            animate={reduce ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
            className={`absolute flex items-center gap-2 rounded-xl border border-line bg-surface/85 px-3 py-2 font-mono text-xs font-medium whitespace-nowrap shadow-soft backdrop-blur-md ${className}`}
          >
            <Icon size={15} className="text-accent" aria-hidden />
            {label}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
