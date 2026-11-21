import { useEffect } from 'react'
import {
  m,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'motion/react'

const spring = { stiffness: 120, damping: 18, mass: 0.6 }

// Proportions du cadre : hauteur = 0.95 × largeur. Avec la photo détourée
// (ratio 1100×1330, haut de la tête à 11 %), la tête dépasse d'environ 13 % au-dessus du cadre.
const FRAME_RATIO = 0.95

/**
 * Portrait en relief : la photo détourée « sort » du cadre.
 * Couches (de l'arrière vers l'avant) : halo, cadre « blueprint », silhouette,
 * reflet, repères d'angle, badges. L'ensemble s'incline selon la position du curseur.
 * Désactivé sur écran tactile et si l'utilisateur préfère réduire les animations.
 *
 * image : { src, srcSet, width, height }
 * floats : [{ icon: Composant, label: string, className: position, z: profondeur }]
 */
export function Portrait3D({ image, alt, floats = [] }) {
  const reduce = useReducedMotion()

  // Position du curseur, normalisée entre -0.5 et 0.5
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-14, 14]), spring)
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [10, -10]), spring)
  const shineX = useSpring(useTransform(px, [-0.5, 0.5], [10, 90]), spring)
  const shineY = useSpring(useTransform(py, [-0.5, 0.5], [0, 70]), spring)
  const shine = useMotionTemplate`radial-gradient(circle at ${shineX}% ${shineY}%, rgb(255 255 255 / 0.22), transparent 45%)`

  useEffect(() => {
    if (reduce || !window.matchMedia('(pointer: fine)').matches) return
    const onMove = (e) => {
      px.set(e.clientX / window.innerWidth - 0.5)
      py.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduce, px, py])

  // Hauteur de l'image par rapport au cadre (pour la caler en bas du cadre)
  const imageHeightPct = ((image.height / image.width) / FRAME_RATIO) * 100

  return (
    // Marge haute pour laisser la place à la tête qui dépasse du cadre
    <div className="grid place-items-center pt-[14%] [perspective:1200px]">
      <m.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d', aspectRatio: `1 / ${FRAME_RATIO}` }}
        className="relative w-[min(330px,80vw)] lg:w-[min(430px,100%)]"
      >
        {/* Halo lumineux, loin derrière */}
        <m.div
          aria-hidden
          style={{ z: -80 }}
          className="absolute -inset-[20%] bg-[radial-gradient(circle_at_50%_40%,var(--glow),transparent_62%)] blur-[30px]"
        />

        {/* Cadre « blueprint » */}
        <div
          aria-hidden
          className="absolute inset-0 overflow-hidden rounded-[28px] border border-line bg-surface-2 shadow-soft"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,var(--glow),transparent_65%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)] bg-size-[28px_28px]" />
          <div className="absolute top-[8%] left-1/2 size-[78%] -translate-x-1/2 rounded-full border border-accent/25" />
          <div className="absolute top-[16%] left-1/2 size-[62%] -translate-x-1/2 rounded-full border border-dashed border-accent/20" />
        </div>

        {/* Silhouette détourée : rognée en bas et sur les côtés, libre en haut */}
        <m.div style={{ z: 40 }} className="absolute inset-x-0 bottom-0 overflow-hidden rounded-b-[28px]">
          {/* Boîte au ratio de l'image : elle dépasse au-dessus du cadre, la tête n'est donc pas rognée */}
          <div className="relative" style={{ height: 0, paddingBottom: `${imageHeightPct * FRAME_RATIO}%` }}>
            <img
              src={image.src}
              srcSet={image.srcSet}
              sizes="(min-width: 1024px) 430px, 80vw"
              alt={alt}
              width={image.width}
              height={image.height}
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 size-full object-contain object-bottom drop-shadow-[0_0_28px_var(--glow)]"
            />
          </div>
        </m.div>

        {/* Reflet de lumière qui suit le curseur */}
        <m.div
          aria-hidden
          style={{ background: shine, z: 41 }}
          className="pointer-events-none absolute inset-0 rounded-[28px] mix-blend-soft-light"
        />

        {/* Repères d'angle façon plan d'architecte */}
        <m.div aria-hidden style={{ z: 20 }} className="pointer-events-none absolute -inset-3.5">
          <i className="absolute top-0 left-0 size-5.5 rounded-tl-md border-t-2 border-l-2 border-accent/80" />
          <i className="absolute top-0 right-0 size-5.5 rounded-tr-md border-t-2 border-r-2 border-accent/80" />
          <i className="absolute bottom-0 left-0 size-5.5 rounded-bl-md border-b-2 border-l-2 border-accent/80" />
          <i className="absolute right-0 bottom-0 size-5.5 rounded-br-md border-r-2 border-b-2 border-accent/80" />
        </m.div>

        {/* Badges flottants */}
        {/* Badges flottants : profondeur gérée par Motion, flottement en CSS (GPU) */}
        {floats.map(({ icon: Icon, label, className, z }, i) => (
          <m.div key={label} style={{ z }} className={`absolute ${className}`}>
            <div
              style={{ animationDuration: `${5 + i}s`, animationDelay: `${i * 0.6}s` }}
              className="flex animate-float items-center gap-2 rounded-xl border border-line bg-surface/95 px-3 py-2 font-mono text-xs font-medium whitespace-nowrap shadow-soft motion-reduce:animate-none"
            >
              <Icon size={15} className="text-accent" aria-hidden />
              {label}
            </div>
          </m.div>
        ))}
      </m.div>
    </div>
  )
}
