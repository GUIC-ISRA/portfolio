/**
 * Affiche un texte où les passages entre **doubles astérisques** sont mis en valeur.
 * Permet de garder la mise en forme dans les fichiers de traduction sans HTML.
 */
export function RichText({ text, strongClassName = 'font-semibold text-text' }) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className={strongClassName}>
        {part}
      </strong>
    ) : (
      part
    ),
  )
}
