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
        <div className="mx-auto flex w-full max-w-[1600px] 2xl:max-w-[1800px] items-center justify-between px-4 py-4 md:py-6">
          <a href="#top" className="flex items-center gap-3 font-bold tracking-tight">
            <LogoMark className="h-16 w-16 md:h-24 md:w-24" />
            <span className={`text-3xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent ${BRAND.primary}`}>
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
            {/* Removed hero logo */}
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

      {/* For the rest of the sections… */}
      {/* Change every `max-w-6xl` to `w-full max-w-[1600px] 2xl:max-w-[1800px]` the same way */}
    </div>
  );
}