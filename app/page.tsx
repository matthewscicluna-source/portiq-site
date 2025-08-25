'use client';

import { motion } from 'framer-motion';
import {
  Check,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Rocket,
  Megaphone,
  ChartBar,
  Globe,
  Users,
  Calendar,
  ArrowRight,
  Shield,
  BadgeCheck,
  Star,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

/* --------------------------------- BRAND --------------------------------- */
const BRAND = {
  name: 'PortIQ',
  tagline: 'Smart Digital Growth Navigation',
  primary: 'from-sky-600 to-blue-600',
  accent: 'from-cyan-500 to-sky-500',
  description:
    'PortIQ helps businesses navigate the digital landscape with data-driven marketing, SEO, and analytics that deliver measurable growth.',
};

/* ------------------------------- LOGO (SVG) ------------------------------- */
function LogoMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      role="img"
      aria-label="PortIQ compass logo"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="portiq-g" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#06b6d4" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="18" stroke="url(#portiq-g)" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="3" fill="url(#portiq-g)" />
      <path d="M24 7v6M24 35v6M7 24h6M35 24h6" stroke="url(#portiq-g)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 18l-4 8-8 4 4-8 8-4z" fill="url(#portiq-g)" opacity="0.25" />
    </svg>
  );
}

/* --------------------------------- PAGE ---------------------------------- */
export default function CorporateWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex w-full max-w-[1600px] 2xl:max-w-[1800px] items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <LogoMark className="h-12 w-12" />
            <span className={`text-2xl bg-gradient-to-r bg-clip-text text-transparent ${BRAND.primary}`}>
              {BRAND.name}
            </span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {[
              { label: 'Services', href: '#services' },
              { label: 'Packages', href: '#packages' },
              { label: 'Process', href: '#process' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ].map((n) => (
              <a key={n.href} href={n.href} className="text-sm hover:text-sky-600" aria-label={`Go to ${n.label}`}>
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-flex">
            <Button>Let’s talk</Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-300 via-transparent to-transparent" />
        <div className="mx-auto grid w-full max-w-[1600px] 2xl:max-w-[1800px] items-center gap-10 px-4 py-20 md:grid-cols-2 md:py-28">
          <div>
            {/* Hero logo removed */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-extrabold tracking-tight text-[clamp(2.25rem,4vw,5rem)]"
            >
              Win more customers with
              <span className={`block bg-gradient-to-r bg-clip-text text-transparent ${BRAND.accent}`}>
                data-driven marketing
              </span>
            </motion.h1>
            <p className="mt-5 text-[clamp(1rem,1.2vw,1.375rem)] text-slate-600">{BRAND.description}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="#contact">
                <Button className="h-11 px-6">Get a free audit</Button>
              </a>
              <a href="#packages" className="inline-flex items-center text-sm font-medium hover:underline">
                See packages <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <Shield className="h-4 w-4" /> GDPR-ready
              </span>
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="h-4 w-4" /> Transparent reporting
              </span>
              <span className="inline-flex items-center gap-2">
                <Star className="h-4 w-4" /> Local expertise
              </span>
            </div>
          </div>

          <Card className="rounded-2xl shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Free Growth Snapshot (48-hour turnaround)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-slate-600">
                {[
                  'SEO health & quick wins',
                  'Ad account hygiene check (Meta/Google)',
                  'Analytics & conversion tracking review',
                  'Competitor visibility in Malta',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact">
                <Button className="mt-6 h-11 w-full">Request my snapshot</Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Logos / social proof (placeholders) */}
      <section aria-label="Trusted by" className="py-8">
        <div className="mx-auto grid w-full max-w-[1600px] 2xl:max-w-[1800px] grid-cols-2 gap-6 px-4 opacity-70 md:grid-cols-5">
          {['Client One', 'Client Two', 'Client Three', 'Client Four', 'Client Five'].map((c) => (
            <div key={c} className="flex h-12 items-center justify-center rounded-xl bg-slate-200 text-xs md:text-sm">
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1600px] 2xl:max-w-[1800px] px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">What we do</h2>
            <p className="mt-3 text-slate-600">Full-funnel digital marketing tailored for Malta’s market.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Megaphone, title: 'Performance Ads', desc: 'ROI-focused campaigns on Google, Meta, and TikTok with proper conversion tracking.' },
              { icon: Globe, title: 'SEO & Content', desc: 'Technical SEO, local SEO for Malta, and content that ranks and converts.' },
              { icon: ChartBar, title: 'Analytics & CRO', desc: 'GA4, Tag Manager, Looker Studio dashboards, and A/B testing to lift conversion rate.' },
              { icon: Users, title: 'Social & Creative', desc: 'On-brand assets and calendars with UGC and short-form video support.' },
              { icon: Calendar, title: 'Marketing Ops', desc: 'Automation, CRM hygiene, lead routing, and consent tracking (GDPR).' },
              { icon: Rocket, title: 'Go-to-Market', desc: 'For startups: positioning, ICP, messaging, and launch playbooks.' },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="rounded-2xl">
                <CardHeader>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50">
                    <Icon className="h-6 w-6 text-sky-600" />
                  </div>
                  <CardTitle className="mt-4 text-xl">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="bg-white py-16">
        <div className="mx-auto w-full max-w-[1600px] 2xl:max-w-[1800px] px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Simple packages, clear value</h2>
            <p className="mt-3 text-slate-600">Start small or scale fast—swap or cancel monthly.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* ... package cards unchanged ... */}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1600px] 2xl:max-w-[1800px] px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">How we work</h2>
            <p className="mt-3 text-slate-600">Fast onboarding, measurable outcomes.</p>
          </div>
          {/* ... process cards unchanged ... */}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-[1600px] 2xl:max-w-[1800px] items-center gap-10 px-4 md:grid-cols-2">
          {/* ... about content unchanged ... */}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1600px] 2xl:max-w-[1800px] px-4">
          {/* ... contact form unchanged ... */}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-10">
        <div className="mx-auto flex w-full max-w-[1600px] 2xl:max-w-[1800px] flex-col items-center justify-between gap-4 px-4 text-sm text-slate-500 md:flex-row">
          <div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-sky-600">Privacy</a>
            <a href="#" className="hover:text-sky-600">Cookies</a>
            <a href="#contact" className="hover:text-sky-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}