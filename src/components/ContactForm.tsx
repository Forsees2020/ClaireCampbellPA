import { useState } from 'react'
import { site } from '@/siteConfig'

const FORM_NAME = 'contact'

// Submissions are delivered by email to this address via a Netlify Forms
// email notification (Project configuration > Forms > Form notifications).
export const RECIPIENT_EMAIL = 'realtorclairecampbell@gmail.com'

// Shown as the notification subject line so inquiries are easy to spot.
const SUBJECT = 'New website inquiry — Claire Campbell PA'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

type Fields = {
  name: string
  email: string
  phone: string
  interest: string
  message: string
}

const EMPTY: Fields = {
  name: '',
  email: '',
  phone: '',
  interest: 'Selling a home',
  message: '',
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  )

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': FORM_NAME, subject: SUBJECT, ...fields }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setFields(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-lg border border-sage-soft bg-cream/60 p-10 text-center">
        <p className="font-display text-2xl text-forest">Thank you.</p>
        <p className="mt-3 text-ink/70">
          Your message is on its way to {site.name}. Expect a personal reply
          shortly — or call{' '}
          <a href={site.phoneHref} className="text-forest underline">
            {site.phone}
          </a>{' '}
          anytime.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-md border border-sage-soft bg-white/80 px-4 py-3 text-ink outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20'
  const labelClass =
    'mb-1.5 block text-sm font-medium uppercase tracking-wider text-forest/80'

  return (
    <form
      name={FORM_NAME}
      onSubmit={handleSubmit}
      className="grid gap-5"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden">
        <label>
          Do not fill this out: <input name="bot-field" onChange={handleChange} />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={fields.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={fields.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="(407) 000-0000"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={fields.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="interest">
            I'm interested in
          </label>
          <select
            id="interest"
            name="interest"
            value={fields.interest}
            onChange={handleChange}
            className={inputClass}
          >
            <option>Selling a home</option>
            <option>Buying a home</option>
            <option>A home valuation</option>
            <option>Relocating to Central Florida</option>
            <option>Just have a question</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          How can I help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={fields.message}
          onChange={handleChange}
          className={inputClass}
          placeholder="Tell me a little about your goals and timeline."
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-700">
          Something went wrong. Please try again or call {site.phone}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-1 inline-flex items-center justify-center rounded-md bg-forest px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-cream transition hover:bg-forest-dark disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
