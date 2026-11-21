const base =
  'inline-flex h-12 items-center justify-center gap-2.5 rounded-xl px-5.5 text-[15px] font-semibold transition duration-200 border'

const variants = {
  primary:
    'border-transparent bg-accent-strong text-white shadow-[0_10px_30px_-10px_var(--glow)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_var(--glow)]',
  ghost: 'border-line bg-surface text-text hover:-translate-y-0.5 hover:border-accent',
  link: 'border-transparent px-2 text-muted hover:text-text',
}

/** Lien stylé en bouton. Accepte toutes les props d'un <a>. */
export function ButtonLink({ variant = 'primary', className = '', children, ...props }) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
