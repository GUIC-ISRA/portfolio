import { useEffect, useState } from 'react'

/**
 * Renvoie l'id de la section actuellement au centre de l'écran.
 * Sert à surligner le bon lien dans la navigation.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(null)
  const key = ids.join(',')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    const elements = key
      .split(',')
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [key])

  return active
}
