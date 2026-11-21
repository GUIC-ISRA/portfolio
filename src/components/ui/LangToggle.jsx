import { useLanguage } from '../../context/language'

export function LangToggle() {
  const { lang, t, toggleLang } = useLanguage()
  const next = lang === 'fr' ? 'EN' : 'FR'
  // Le nom lu par les lecteurs d'écran commence par le texte visible (« EN » / « FR »)
  const label = `${next} — ${t.ui.switchLang}`

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={label}
      title={t.ui.switchLang}
      className="grid h-9 min-w-9 cursor-pointer place-items-center rounded-[10px] border border-line bg-surface px-2.5 font-mono text-xs font-medium text-text transition hover:-translate-y-px hover:border-accent"
    >
      {next}
    </button>
  )
}
