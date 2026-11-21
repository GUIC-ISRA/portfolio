import { useState } from 'react'
import { Check, Copy, Mail, MessageCircle, Phone } from 'lucide-react'
import { useLanguage } from '../../context/language'
import { links } from '../../data/links'
import { SectionHeader } from '../ui/SectionHeader'
import { Reveal } from '../ui/Reveal'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { ContactForm } from './ContactForm'

export function Contact() {
  const { t } = useLanguage()
  const c = t.contact
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(links.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* presse-papiers indisponible : le lien mailto reste utilisable */
    }
  }

  const channels = [
    { key: 'phone', icon: Phone, href: links.phoneHref, value: links.phone },
    { key: 'whatsapp', icon: MessageCircle, href: links.whatsapp, value: c.whatsappText, external: true },
    { key: 'linkedin', icon: LinkedinIcon, href: links.linkedin, value: c.linkedinText, external: true },
    { key: 'github', icon: GithubIcon, href: links.github, value: c.githubText, external: true },
  ]

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader index={7} eyebrow={c.eyebrow} title={c.title} id="contact-title" />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <Reveal>
            <p className="mb-7 max-w-md text-[17px] text-muted">{c.intro}</p>

            {/* E-mail mis en avant, avec bouton de copie */}
            <div className="mb-4 flex items-center gap-3 rounded-2xl border border-line bg-surface p-4">
              <span className="grid size-11 flex-none place-items-center rounded-xl bg-accent text-white">
                <Mail size={20} aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <span className="block text-xs text-muted">{c.channels.email}</span>
                <a href={`mailto:${links.email}`} className="block truncate font-medium hover:text-accent">
                  {links.email}
                </a>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={copied ? c.copied : c.copy}
                title={copied ? c.copied : c.copy}
                className="grid size-9 flex-none cursor-pointer place-items-center rounded-[10px] border border-line text-muted transition hover:border-accent hover:text-text"
              >
                {copied ? <Check size={16} className="text-green-500" aria-hidden /> : <Copy size={16} aria-hidden />}
              </button>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {channels.map(({ key, icon: Icon, href, value, external }) => (
                <li key={key}>
                  <a
                    href={href}
                    {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="flex h-full items-center gap-3 rounded-2xl border border-line bg-surface p-4 transition hover:-translate-y-0.5 hover:border-accent/50"
                  >
                    <span className="grid size-10 flex-none place-items-center rounded-xl bg-accent-soft text-accent">
                      <Icon size={18} aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-muted">{c.channels[key]}</span>
                      <span className="block text-sm font-medium">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
