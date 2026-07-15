import { useEffect, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  Award,
  Check,
  Facebook,
  HeartHandshake,
  Instagram,
  Linkedin,
  MapPin,
  Menu,
  Phone,
  Quote,
  Sparkles,
  Star,
  X,
} from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'
import { site } from '@/siteConfig'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const IMG = {
  hero: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop',
  claire: '/claire-campbell.png',
  neighborhood:
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop',
  marketing:
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
}

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'The Advantage', href: '#advantage' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

function HomePage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Advantage />
        <Reviews />
        <Marketing />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Top utility bar                                                     */
/* ------------------------------------------------------------------ */
function TopBar() {
  return (
    <div className="hidden bg-forest-dark text-cream/90 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs tracking-wide">
        <p className="uppercase tracking-[0.2em] text-cream/70">
          {site.brokerage} · {site.brokerageCity}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 transition hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" /> {site.phone}
          </a>
          <div className="flex items-center gap-3 text-cream/70">
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Sticky header + mobile nav                                         */
/* ------------------------------------------------------------------ */
function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? 'bg-cream/95 shadow-sm backdrop-blur'
          : 'bg-cream/80 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-semibold text-forest">
            Claire Campbell PA
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.35em] text-gold">
             {site.tagline}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-ink/70 transition hover:text-forest"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-forest px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-cream transition hover:bg-forest-dark"
          >
            Book A Consultation
          </a>
        </nav>

        <button
          className="text-forest lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-forest text-cream lg:hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-display text-2xl">Claire Campbell PA</span>
            <button aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="h-7 w-7" />
            </button>
          </div>
          <nav className="flex flex-col gap-2 px-6 pt-6">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-cream/15 py-4 font-display text-2xl"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="mt-6 flex items-center gap-3 text-lg"
            >
              <Phone className="h-5 w-5" /> {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

/* ------------------------------------------------------------------ */
/* Hero                                                               */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={IMG.hero}
          alt="Elegant Central Florida home"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/85 via-forest-dark/60 to-forest/30" />
      </div>

      <div className="mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-center px-6 py-28 text-cream">
        <p className="eyebrow mb-6 text-gold">
          {site.brokerage} · {site.brokerageCity}
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.1] sm:text-5xl md:text-6xl">
          A Trusted, Personal Approach to Central Florida Real Estate
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/85">
          Whether you're buying your first home in Winter Park or selling an
          estate in Orlando, Claire Campbell brings local expertise, tireless
          advocacy, and white-glove service to every step of your journey.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-cream px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-forest transition hover:bg-white"
          >
            Book A Consultation <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-cream/50 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-cream transition hover:bg-cream/10"
          >
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* About Claire                                                       */
/* ------------------------------------------------------------------ */
function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-sage-soft">
            <img
              src={IMG.claire}
              alt="Portrait of Claire Campbell, PA"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <div className="mt-6 text-center">
            <p className="font-display text-3xl text-forest">
              Claire Campbell{' '}
              <span className="align-top text-lg text-gold">PA</span>
            </p>
            <p className="mt-1 text-sm uppercase tracking-[0.25em] text-gold">
              Realtor® · {site.brokerage}
            </p>
          </div>
        </div>

        <div>
          <p className="eyebrow text-gold">Meet Claire</p>
          <div className="rule mt-4 text-forest" />
          <h2 className="mt-6 font-display text-3xl leading-tight text-forest md:text-4xl">
            Central Florida is more than a market — it's home.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/75">
            <p>
              Claire Campbell partners with buyers and sellers throughout
              Winter Park, Orlando, and the surrounding communities, pairing
              deep neighborhood knowledge with the reach and resources of{' '}
              {site.brokerage}.
            </p>
            <p>
              Her clients count on clear communication, honest guidance, and a
              relentless commitment to their goals — from the first showing to
              the closing table and long after.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-forest">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-gold" /> Local market specialist
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-gold" /> Buyer & seller advocacy
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-gold" /> Concierge-level service
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Experience — three pillars                                         */
/* ------------------------------------------------------------------ */
const PILLARS = [
  {
    icon: HeartHandshake,
    title: 'Unparalleled Support',
    body: "A responsive, hands-on approach means you have a trusted point of contact at every stage — and never have to navigate the process alone.",
  },
  {
    icon: Award,
    title: 'Proven Local Expertise',
    body: 'Years of working and living in Central Florida translate into pricing precision, sharp negotiation, and results you can count on.',
  },
  {
    icon: Sparkles,
    title: 'A Tailored Experience',
    body: 'Every plan is built around your goals and timeline, so your sale or search moves forward in the most seamless way possible.',
  },
]

function Experience() {
  return (
    <section id="experience" className="bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold">An Experience Tailored To You</p>
          <div className="rule mt-4 text-cream/60" />
          <h2 className="mt-6 font-display text-3xl leading-tight md:text-4xl">
            A bold approach to real estate, focused on your success.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/80">
            Everything is done to execute your move in the most seamless,
            successful way possible — built on an approach refined over years of
            serving Central Florida families.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-cream/15 bg-forest-light/30 p-8 transition hover:bg-forest-light/50"
            >
              <Icon className="h-9 w-9 text-gold" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-2xl">{title}</h3>
              <p className="mt-4 leading-relaxed text-cream/75">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Advantage + stats                                                  */
/* ------------------------------------------------------------------ */
const STATS = [
  { value: '20+', label: 'Central Florida communities served' },
  { value: '100%', label: 'Client-first representation' },
  { value: '5★', label: 'Reputation for service & results' },
]

function Advantage() {
  return (
    <section id="advantage" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <p className="eyebrow text-gold">The Advantage</p>
          <div className="rule mt-4 text-forest" />
          <h2 className="mt-6 font-display text-3xl leading-tight text-forest md:text-4xl">
            The {site.brokerage} Network Advantage
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            As part of one of Florida's most respected brokerages, Claire pairs
            a personal, boutique experience with the marketing power, technology,
            and professional network of {site.brokerage} in {site.brokerageCity}
            .
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            The result: your home reaches more qualified buyers, and your search
            taps into listings and connections across the region.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-sage-soft pt-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl text-forest md:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-ink/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 overflow-hidden rounded-2xl md:order-2">
          <img
            src={IMG.neighborhood}
            alt="Palm-lined Central Florida neighborhood"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Reviews                                                            */
/* ------------------------------------------------------------------ */
const REVIEWS = [
  {
    quote:
      'Claire is considerate, knowledgeable, and completely on top of every detail. Selling our home was smooth from start to finish — we always felt informed and cared for.',
    name: 'The Hensley Family',
    place: 'Winter Park, FL',
  },
  {
    quote:
      "As first-time buyers we had a hundred questions, and Claire answered every one with patience. She found us the right home and negotiated a price we didn't think was possible.",
    name: 'Marcus & Dana R.',
    place: 'Baldwin Park, FL',
  },
  {
    quote:
      'Responsive, honest, and genuinely invested in our goals. Claire made a stressful relocation feel effortless. We recommend her to everyone.',
    name: 'Priya S.',
    place: 'Lake Nona, FL',
  },
]

function Reviews() {
  return (
    <section id="reviews" className="bg-sand/60">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="text-center">
          <p className="eyebrow text-gold">What Clients Say</p>
          <h2 className="mt-4 font-display text-3xl text-forest md:text-4xl">
            Trusted by Central Florida families
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-xl bg-white p-8 shadow-sm"
            >
              <Quote className="h-8 w-8 text-sage" />
              <div className="mt-4 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 leading-relaxed text-ink/80">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-sand pt-5">
                <p className="font-display text-lg text-forest">{r.name}</p>
                <p className="text-sm text-ink/55">{r.place}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Marketing strategies                                               */
/* ------------------------------------------------------------------ */
const STRATEGIES = [
  'A tailored market analysis to price your home effectively',
  'Professional photography and standout listing presentation',
  '"Coming soon" pre-marketing to build early buyer interest',
  'Exposure across the {brokerage} agent and buyer network',
  'Targeted digital, social, and print marketing campaigns',
  'Skilled negotiation from first offer to closing table',
]

function Marketing() {
  return (
    <section className="relative isolate overflow-hidden text-cream">
      <div className="absolute inset-0 -z-10">
        <img
          src={IMG.marketing}
          alt="Refined home interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-dark/88" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold">Curated Marketing Strategies</p>
          <div className="rule mt-4 text-cream/60" />
          <h2 className="mt-6 font-display text-3xl leading-tight md:text-4xl">
            Getting your home in front of the right buyers
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/80">
            Every listing gets a comprehensive plan designed to reach as many
            motivated, qualified buyers as possible — locally and beyond.
          </p>
        </div>

        <ul className="mt-12 grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {STRATEGIES.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <span className="text-cream/90">
                {item.replace('{brokerage}', site.brokerage)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* CTA band                                                           */
/* ------------------------------------------------------------------ */
function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-forest px-10 py-14 text-center text-cream md:flex-row md:text-left">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">
            Ready to buy or sell?
          </h2>
          <p className="mt-3 text-lg text-cream/80">
            Let's plan your Central Florida success story — reach out today.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-cream px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-forest transition hover:bg-white"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-cream/50 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] transition hover:bg-cream/10"
          >
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Contact                                                            */
/* ------------------------------------------------------------------ */
function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid gap-14 md:grid-cols-2">
        <div>
          <p className="eyebrow text-gold">Contact</p>
          <div className="rule mt-4 text-forest" />
          <h2 className="mt-6 font-display text-3xl leading-tight text-forest md:text-4xl">
            Let's plan your success story
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            Connect with a local market expert to get started with your real
            estate journey. Share a few details and Claire will reach out
            personally.
          </p>

          <div className="mt-10 space-y-6">
            <a
              href={site.phoneHref}
              className="flex items-center gap-4 text-ink/80 transition hover:text-forest"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/10 text-forest">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] text-ink/50">
                  Call or text
                </span>
                <span className="font-medium">{site.phone}</span>
              </span>
            </a>
            <div className="flex items-start gap-4 text-ink/80">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/10 text-forest">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] text-ink/50">
                  {site.brokerage}
                </span>
                <span className="font-medium">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-sage-soft bg-white p-8 shadow-sm md:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Footer                                                             */
/* ------------------------------------------------------------------ */
function Footer() {
  const year = 2026
  return (
    <footer className="bg-forest-dark text-cream/80">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl text-cream">
              Claire Campbell{' '}
              <span className="text-base align-top text-gold">PA</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              Real estate services for buyers and sellers across Winter Park,
              Orlando, and Central Florida — with {site.brokerage}.
            </p>
            <div className="mt-6 flex gap-4 text-cream/60">
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">
              Get In Touch
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={site.phoneHref} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="text-cream/60">
                {site.address.line1}
                <br />
                {site.address.line2}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-8 text-xs text-cream/50 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>
            {site.brokerage} · {site.brokerageCity}, FL · Equal Housing
            Opportunity
          </p>
        </div>
      </div>
    </footer>
  )
}
