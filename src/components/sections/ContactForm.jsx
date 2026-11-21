import { useState } from 'react'
import { CircleCheck, CircleAlert, Loader2, Send } from 'lucide-react'
import { useLanguage } from '../../context/language'
import { links } from '../../data/links'

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const fieldClass =
  'w-full rounded-xl border border-line bg-bg px-4 py-3 text-[15px] text-text placeholder:text-muted/70 transition focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent-soft'

/**
 * Formulaire de contact envoyé via Web3Forms (aucun backend nécessaire).
 * Sans clé configurée, il ouvre la messagerie du visiteur avec le message prérempli.
 */
export function ContactForm() {
  const { t } = useLanguage()
  const f = t.contact.form
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    // Champ piège anti-spam : rempli uniquement par les robots
    if (data.get('botcheck')) return

    if (!ACCESS_KEY) {
      const body = `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`
      window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: f.subject,
          from_name: 'Portfolio',
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
        }),
      })
      const result = await response.json()
      if (!result.success) throw new Error(result.message)
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-surface p-6 shadow-soft sm:p-8">
      <h3 className="mb-6 text-xl font-semibold">{f.title}</h3>

      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium">
            {f.name}
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            placeholder={f.namePlaceholder}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium">
            {f.email}
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            maxLength={150}
            autoComplete="email"
            placeholder={f.emailPlaceholder}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium">
          {f.message}
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          maxLength={3000}
          placeholder={f.messagePlaceholder}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-5 inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-accent px-5.5 text-[15px] font-semibold text-white shadow-[0_10px_30px_-10px_var(--glow)] transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === 'sending' ? (
          <>
            <Loader2 size={17} className="animate-spin" aria-hidden />
            {f.sending}
          </>
        ) : (
          <>
            <Send size={17} aria-hidden />
            {f.submit}
          </>
        )}
      </button>

      <div aria-live="polite" className="empty:hidden mt-4">
        {status === 'success' && (
          <p className="flex items-start gap-2.5 rounded-xl border border-green-500/30 bg-green-500/10 p-3.5 text-sm text-text">
            <CircleCheck size={18} className="mt-0.5 flex-none text-green-500" aria-hidden />
            {f.success}
          </p>
        )}
        {status === 'error' && (
          <p className="flex items-start gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-sm text-text">
            <CircleAlert size={18} className="mt-0.5 flex-none text-red-500" aria-hidden />
            {f.error}
          </p>
        )}
      </div>
    </form>
  )
}
