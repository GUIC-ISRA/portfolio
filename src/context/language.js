import { createContext, useContext } from 'react'

export const LanguageContext = createContext(null)

/** Renvoie { lang, t, toggleLang } — `t` contient tous les textes de la langue active. */
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage doit être utilisé dans <LanguageProvider>')
  return ctx
}
