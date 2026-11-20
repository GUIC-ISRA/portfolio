import { createContext, useContext } from 'react'

export const ThemeContext = createContext(null)

/** Renvoie { theme, toggleTheme }. */
export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme doit être utilisé dans <ThemeProvider>')
  return ctx
}
