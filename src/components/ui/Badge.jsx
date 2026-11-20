export function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-lg border border-line bg-badge px-2.5 py-1.5 font-mono text-xs font-medium text-badge-text ${className}`}
    >
      {children}
    </span>
  )
}
