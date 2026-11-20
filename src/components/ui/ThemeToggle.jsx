import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../context/theme'
import { useLanguage } from '../../context/language'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const isDark = theme === 'dark'
  const label = isDark ? t.ui.switchToLight : t.ui.switchToDark

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="grid size-9 cursor-pointer place-items-center rounded-[10px] border border-line bg-surface text-text transition hover:-translate-y-px hover:border-accent"
    >
      {isDark ? <Sun size={17} aria-hidden /> : <Moon size={17} aria-hidden />}
    </button>
  )
}
