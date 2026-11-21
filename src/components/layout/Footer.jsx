import { ArrowUp, Mail } from 'lucide-react'
import { useLanguage } from '../../context/language'
import { links, sections } from '../../data/links'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'

const year = new Date().getFullYear()

export function Footer() {
  const { t } = useLanguage()

  const socials = [
    { label: 'GitHub', href: links.github, icon: GithubIcon },
    { label: 'LinkedIn', href: links.linkedin, icon: LinkedinIcon },
    { label: 'E-mail', href: `mailto:${links.email}`, icon: Mail },
  ]

  return (
    <footer className="relative border-t border-line bg-surface/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#accueil" className="font-display text-xl font-bold" aria-label={t.ui.home}>
              EIG<span className="text-accent">.</span>
            </a>
            <p className="mt-3 text-sm text-muted">{t.footer.tagline}</p>
            <ul className="mt-5 flex gap-2.5">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="grid size-10 place-items-center rounded-xl border border-line bg-surface text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    <Icon size={18} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2.5 text-sm sm:grid-cols-3">
              {sections.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-muted transition-colors hover:text-text">
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col-reverse gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Edem Israël Gbegnedji. {t.footer.rights}
            <span className="block sm:inline sm:before:mx-2 sm:before:content-['·']">{t.footer.builtWith}</span>
          </p>
          <a
            href="#accueil"
            className="inline-flex items-center gap-1.5 self-start font-medium transition-colors hover:text-text sm:self-auto"
          >
            <ArrowUp size={14} aria-hidden />
            {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  )
}
