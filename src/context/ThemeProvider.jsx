import { useCallback, useMemo, useState } from 'react'
import { ThemeContext } from './theme'

// Le thème initial est appliqué par le script inline de index.html (évite le flash).
const readInitialTheme = () => document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readInitialTheme)

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      document.documentElement.dataset.theme = next
      try {
        localStorage.setItem('theme', next)
      } catch {
        /* stockage indisponible (navigation privée) : on ignore */
      }
      return next
    })
  }, [])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
