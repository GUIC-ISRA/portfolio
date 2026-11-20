import { useCallback, useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './language'
import fr from '../data/i18n/fr'
import en from '../data/i18n/en'

const dictionaries = { fr, en }

function readInitialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'fr' || saved === 'en') return saved
  } catch {
    /* stockage indisponible */
  }
  // Français par défaut ; anglais si le navigateur n'est pas en français
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = dictionaries[lang].meta.title
  }, [lang])

  const toggleLang = useCallback(() => {
    setLang((current) => {
      const next = current === 'fr' ? 'en' : 'fr'
      try {
        localStorage.setItem('lang', next)
      } catch {
        /* stockage indisponible */
      }
      return next
    })
  }, [])

  const value = useMemo(() => ({ lang, t: dictionaries[lang], toggleLang }), [lang, toggleLang])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
