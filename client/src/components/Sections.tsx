import { FormEvent, useState } from 'react';
import * as L from 'lucide-react';
import { SITE, MODULES, INCLUDES, PHASES, MENTORS, WHY, FAQ as FAQS } from '../config/site';
import { isEmailConfigured, sendEmail } from '../services/emailService';
import { Reveal, Heading, Disclaimer, go } from './ui';

export function About() {
  const pts = [['Structured Learning', L.ListChecks], ['Practical Market Analysis', L.LineChart], ['Risk Management', L.ShieldCheck], ['Trading Discipline', L.Gauge]] as const;
  return (<section id="about" className="sec"><Reveal className="grid items-center gap-12 lg:grid-cols-2">
    <div><h2 className="h2">Learn Trading With Structure, Not Guesswork</h2>
      <p className="mt-5 text-white/65">Blazzing Bull Academy is a Forex trading education platform focused on helping students understand market structure, technical analysis, trading strategies and risk management.</p>
      <p className="mt-4 text-white/65">Students learn how to analyze markets, build structured trade plans and develop disciplined trading habits.</p></div>
    <div className="grid grid-cols-2 gap-4">{pts.map(([t, I]) => <div key={t} className="card p-6"><I className="text-gold" /><p className="mt-3 font-semibold">{t}</p></div>)}</div>
  </Reveal></section>);
}

export function Modules() {
  return (<section id="strategies" className="sec"><Heading title="What We Teach" sub="Eight modules that take you from chart basics to a complete, risk-aware trade plan." />
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{MODULES.map(([ic, t, d]) => { const I = (L as any)[ic]; return (
      <Reveal key={t}><article className="card h-full p-6 group"><I className="text-gold transition group-hover:scale-110" /><h3 className="mt-4 font-display text-lg font-semibold">{t}</h3><p className="mt-2 text-sm text-white/60">{d}</p></article></Reveal>); })}</div></section>);
}

export function Courses() {
  return (<section id="courses" className="sec"><Heading title="Our Trading Program" />
    <Reveal><div className="card mx-auto max-w-3xl overflow-hidden border-gold/30 p-8 md:p-10 hover:translate-y-0">
      <p className="text-sm text-gold">Blazzing Bull Academy</p><h3 className="mt-1 font-display text-3xl font-bold">60-Day Forex Trading Program</h3>
      <div className="mt-4 flex flex-wrap items-baseline gap-x-6"><span className="font-display text-5xl font-extrabold text-gold">{SITE.fee}</span><span className="text-white/60">Duration: {SITE.duration}</span></div>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">{INCLUDES.map(i => <li key={i} className="flex gap-2 text-white/80"><L.Check size={18} className="mt-0.5 shrink-0 text-bull" />{i}</li>)}</ul>
      <button className="btn-gold mt-8 w-full sm:w-auto" onClick={() => go('register')}>Register Now</button>
      <p className="mt-4 text-xs text-white/50">Trading involves financial risk. This program is for educational purposes and does not guarantee trading profits.</p></div></Reveal></section>);
}

export function Curriculum() {
  return (<section id="curriculum" className="sec"><Heading title="Your 60-Day Learning Journey" />
    <ol className="relative ml-3 space-y-8 border-l border-gold/30 md:ml-0 md:grid md:grid-cols-3 md:gap-6 md:space-y-0 md:border-l-0">
      {PHASES.map(([t, d], i) => <li key={t} className="relative pl-8 md:pl-0"><Reveal>
        <span className="absolute -left-[13px] top-0 grid h-6 w-6 place-items-center rounded-full bg-gold text-xs font-bold text-black md:static md:mb-3">{i + 1}</span>
        <div className="card p-5"><p className="text-xs text-gold">Phase {i + 1}</p><h3 className="font-display text-lg font-semibold">{t}</h3><p className="mt-1 text-sm text-white/60">{d}</p></div></Reveal></li>)}</ol></section>);
}

export function Mentors() {
  return (<section id="mentors" className="sec"><Heading title="Meet Our Mentors" />
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{MENTORS.map(m => <Reveal key={m.name}><article className="card h-full overflow-hidden">
      <img src={m.photo} alt={`Portrait of ${m.name}`} loading="lazy" className="aspect-square w-full object-cover object-top" />
      <div className="p-5"><h3 className="font-display text-lg font-semibold">{m.name}</h3><p className="text-sm text-gold">Forex Market</p><p className="text-sm text-white/70">{m.exp}</p>
        <p className="mt-3 text-sm text-white/50">{m.bio}</p>
        <div className="mt-4 flex gap-3 text-white/40"><a href={SITE.instagram} aria-label={`${m.name} social profile (placeholder)`} className="hover:text-gold"><L.Instagram size={18} /></a></div></div></article></Reveal>)}</div></section>);
}

export function Why() {
  return (<section id="why" className="sec"><Heading title="Why Choose Blazzing Bull" />
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{WHY.map(([t, d]) => <Reveal key={t}><div className="card h-full p-6"><L.BadgeCheck className="text-gold" /><h3 className="mt-3 font-semibold">{t}</h3><p className="mt-1 text-sm text-white/60">{d}</p></div></Reveal>)}</div>
    <p className="mt-10 rounded-2xl border border-dashed border-white/15 p-6 text-center text-sm text-white/40">Student testimonial will be added here.</p></section>);
}

export function Pricing() {
  return (<section id="pricing" className="sec"><Reveal><div className="relative mx-auto max-w-xl rounded-3xl bg-gradient-to-b from-gold/60 to-gold/5 p-px shadow-[0_0_80px_-20px_#F5B301]">
    <div className="rounded-3xl bg-panel p-10 text-center"><p className="text-xs tracking-widest text-gold">60-DAY PROGRAM</p><h2 className="mt-2 font-display text-3xl font-bold">Blazzing Bull Academy</h2>
      <p className="mt-6 font-display text-6xl font-extrabold text-gold">{SITE.fee}</p><p className="mt-1 text-white/60">Duration: {SITE.duration}</p>
      <button className="btn-gold mt-8 w-full" onClick={() => go('register')}>Secure Your Registration</button>
      <div className="mt-4"><Disclaimer short /></div></div></div></Reveal></section>);
}

export function FAQ() {
  const [o, setO] = useState<number | null>(0);
  return (<section id="faq" className="sec max-w-3xl"><Heading title="Frequently Asked Questions" />
    <div className="space-y-3">{FAQS.map(([q, a], i) => <div key={q} className="card hover:translate-y-0">
      <h3><button className="flex w-full items-center justify-between gap-4 p-5 text-left font-medium" aria-expanded={o === i} aria-controls={`f${i}`} onClick={() => setO(o === i ? null : i)}>{q}<L.ChevronDown className={`shrink-0 text-gold transition ${o === i ? 'rotate-180' : ''}`} /></button></h3>
      <div id={`f${i}`} className={`grid transition-all duration-300 ${o === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}><div className="overflow-hidden"><div className="px-5 pb-5 text-white/65">
        {a === '__MAP__' ? <a className="btn-gold !py-2" href={SITE.maps} target="_blank" rel="noopener noreferrer"><L.MapPin size={16} />Open in Google Maps</a> : a}</div></div></div></div>)}</div></section>);
}

export function Location() {
  return (<section id="location" className="sec"><Heading title="Find Blazzing Bull Academy" />
    <Reveal><div className="card grid overflow-hidden md:grid-cols-2 hover:translate-y-0">
      <div className="relative min-h-[220px] bg-[linear-gradient(rgba(245,179,1,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(245,179,1,.08)_1px,transparent_1px)] bg-[size:28px_28px]"><L.MapPin size={56} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gold drop-shadow-[0_0_20px_#F5B301]" aria-hidden /></div>
      <div className="p-8"><h3 className="font-display text-2xl font-semibold">Blazzing Bull Academy</h3><p className="mt-2 text-white/60">Blazzing Bull Academy — View Location on Google Maps</p>
        <div className="mt-6 flex flex-wrap gap-3"><a className="btn-gold" href={SITE.maps} target="_blank" rel="noopener noreferrer">Open in Google Maps</a><a className="btn-line" href={SITE.maps} target="_blank" rel="noopener noreferrer">Get Directions</a></div></div></div></Reveal></section>);
}

export function Contact() {
  const [values, setValues] = useState({ fullName: '', mobile: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const inputClass = 'w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-base focus:border-gold';
  const updateField = (field: keyof typeof values, value: string) => {
    setValues(current => ({ ...current, [field]: value }));
    setErrors(current => ({ ...current, [field]: '' }));
    if (status !== 'idle') {
      setStatus('idle');
      setStatusMessage('');
    }
  };
  const submitEnquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors: Record<string, string> = {};
    if (!values.fullName.trim()) nextErrors.fullName = 'Full name is required.';
    if (!values.mobile.trim()) nextErrors.mobile = 'Mobile number is required.';
    else if (!/^[6-9]\d{9}$/.test(values.mobile)) nextErrors.mobile = 'Enter a valid 10-digit Indian mobile number.';
    if (!values.email.trim()) nextErrors.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = 'Enter a valid email address.';
    if (!values.message.trim()) nextErrors.message = 'Message is required.';
    setErrors(nextErrors);
    setStatusMessage('');
    if (Object.keys(nextErrors).length) {
      document.getElementById(Object.keys(nextErrors)[0])?.focus();
      return;
    }

    if (!isEmailConfigured()) {
      setStatus('error');
      setStatusMessage(import.meta.env.DEV
        ? 'EmailJS is not configured. Fill in the three VITE_EMAILJS values in client/.env, then restart Vite.'
        : 'The enquiry form is not configured yet. Please contact us by phone or email.');
      return;
    }

    setStatus('sending');
    try {
      await sendEmail(form);
      setValues({ fullName: '', mobile: '', email: '', message: '' });
      setErrors({});
      setStatus('success');
      setStatusMessage('Thank you. Your enquiry has been sent successfully.');
    } catch {
      setStatus('error');
      setStatusMessage('We could not send your enquiry. Please try again or contact us by phone or email.');
    }
  };
  const items = [[L.Phone, 'Phone / WhatsApp', SITE.phone, SITE.tel, 'Call Us'], [L.Mail, 'Email', SITE.email, SITE.mailto, 'Email Us'], [L.Send, 'Telegram', SITE.telegramHandle, SITE.telegram, 'Join Telegram'], [L.Instagram, 'Instagram', SITE.instagramHandle, SITE.instagram, 'Follow Instagram']] as const;
  return (<section id="contact" className="sec"><Heading title="Get In Touch" />
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{items.map(([I, t, v, h, b]) => <div key={t} className="card flex flex-col p-6"><I className="text-gold" /><h3 className="mt-3 font-semibold">{t}</h3><p className="mb-5 mt-1 break-all text-sm text-white/60">{v}</p>
      <a href={h} {...(h.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="btn-line mt-auto !py-2">{b}</a></div>)}</div>
    <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold mt-6"><L.MessageCircle size={18} />WhatsApp Us</a>
    <div className="card mx-auto mt-10 max-w-3xl p-6 md:p-8 hover:translate-y-0">
      <h3 className="font-display text-2xl font-bold">Send an Enquiry</h3>
      <p className="mt-2 text-sm text-white/60">Have a question about the program? Send us a message.</p>
      <form onSubmit={submitEnquiry} noValidate className="mt-6 grid gap-5 sm:grid-cols-2">
        <input type="hidden" name="submission_type" value="Enquiry" />
        <div>
          <label htmlFor="contact-full-name" className="mb-1.5 block text-sm text-white/70">Full Name <span className="text-gold">*</span></label>
          <input id="contact-full-name" name="full_name" autoComplete="name" maxLength={100} className={inputClass} value={values.fullName} onChange={event => updateField('fullName', event.target.value)} aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? 'contact-full-name-error' : undefined} />
          {errors.fullName && <p id="contact-full-name-error" role="alert" className="mt-1 text-sm text-red-400">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="contact-mobile" className="mb-1.5 block text-sm text-white/70">Mobile Number <span className="text-gold">*</span></label>
          <input id="contact-mobile" name="mobile_number" type="tel" inputMode="numeric" autoComplete="tel-national" maxLength={10} className={inputClass} value={values.mobile} onChange={event => updateField('mobile', event.target.value.replace(/\D/g, ''))} aria-invalid={!!errors.mobile} aria-describedby={errors.mobile ? 'contact-mobile-error' : undefined} />
          {errors.mobile && <p id="contact-mobile-error" role="alert" className="mt-1 text-sm text-red-400">{errors.mobile}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-email" className="mb-1.5 block text-sm text-white/70">Email <span className="text-gold">*</span></label>
          <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} className={inputClass} value={values.email} onChange={event => updateField('email', event.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'contact-email-error' : undefined} />
          {errors.email && <p id="contact-email-error" role="alert" className="mt-1 text-sm text-red-400">{errors.email}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="mb-1.5 block text-sm text-white/70">Message <span className="text-gold">*</span></label>
          <textarea id="contact-message" name="message" rows={4} maxLength={2000} className={inputClass} value={values.message} onChange={event => updateField('message', event.target.value)} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'contact-message-error' : undefined} />
          {errors.message && <p id="contact-message-error" role="alert" className="mt-1 text-sm text-red-400">{errors.message}</p>}
        </div>
        {statusMessage && <p role={status === 'error' ? 'alert' : 'status'} className={`sm:col-span-2 text-sm ${status === 'success' ? 'text-bull' : status === 'error' ? 'text-red-400' : 'text-white/70'}`}>{statusMessage}</p>}
        <button type="submit" disabled={status === 'sending'} className="btn-gold sm:col-span-2 disabled:cursor-wait disabled:opacity-60">{status === 'sending' ? 'Sending…' : 'Send Enquiry'}</button>
      </form>
    </div></section>);
}

export function CTA() {
  return (<section className="sec"><Reveal><div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/15 via-transparent to-bull/10 p-10 text-center md:p-16">
    <h2 className="h2">Ready to Learn Trading With Structure?</h2>
    <p className="mx-auto mt-5 max-w-2xl text-white/65">Build your understanding of Price Action, Smart Money Concepts, Blazzing Bull Strategies and Risk Management through our 60-day Forex trading education program.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-4"><button className="btn-gold" onClick={() => go('register')}>Register Now</button><button className="btn-line" onClick={() => go('contact')}>Contact Us</button></div></div></Reveal></section>);
}
