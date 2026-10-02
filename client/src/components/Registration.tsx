import emailjs from '@emailjs/browser';
import { FormEvent, useRef, useState } from 'react';
import { SITE } from '../config/site';
import { Disclaimer } from './ui';

type F = { k: string; name: string; l: string; t?: string; req?: boolean; opts?: string[]; area?: boolean };
const FIELDS: F[] = [
 { k: 'fullName', name: 'full_name', l: 'Full Name', req: true }, { k: 'dob', name: 'date_of_birth', l: 'Date of Birth', t: 'date', req: true },
 { k: 'mobile', name: 'mobile_number', l: 'Mobile Number', t: 'tel', req: true }, { k: 'whatsapp', name: 'whatsapp_number', l: 'WhatsApp Number', t: 'tel', req: true },
 { k: 'email', name: 'email', l: 'Email Address', t: 'email', req: true }, { k: 'city', name: 'city', l: 'City', req: true }, { k: 'state', name: 'state', l: 'State', req: true },
 { k: 'experience', name: 'trading_experience', l: 'Trading Experience', req: true, opts: ['Beginner (no experience)', 'Less than 1 year', '1–3 years', 'More than 3 years'] },
 { k: 'knowledge', name: 'trading_knowledge', l: 'Current Trading Knowledge', opts: ['None', 'Basic', 'Intermediate', 'Advanced'] },
 { k: 'course', name: 'course', l: 'Course Interested In', req: true, opts: ['60-Day Forex Trading Program'] },
 { k: 'mode', name: 'learning_mode', l: 'Preferred Learning Mode', req: true, opts: ['Online', 'Offline', 'No preference'] },
 { k: 'source', name: 'source', l: 'How did you hear about us?', opts: ['Instagram', 'Telegram', 'WhatsApp', 'Friend / Referral', 'Other'] },
 { k: 'message', name: 'message', l: 'Message / Questions', area: true },
];
const validate = (v: Record<string, any>) => { const e: Record<string, string> = {};
  FIELDS.forEach(f => { if (f.req && !String(v[f.k] ?? '').trim()) e[f.k] = `${f.l} is required.`; });
  if (v.mobile && !/^[6-9]\d{9}$/.test(v.mobile)) e.mobile = 'Enter a valid 10-digit Indian mobile number.';
  if (v.whatsapp && !/^[6-9]\d{9}$/.test(v.whatsapp)) e.whatsapp = 'Enter a valid 10-digit Indian WhatsApp number.';
  if (v.email && !/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address.';
  if (!v.consent) e.consent = 'Please accept the Terms, Privacy Policy and Risk Disclaimer.';
  return e; };

export default function Registration() {
  const formRef = useRef<HTMLFormElement>(null);
  const [v, setV] = useState<Record<string, any>>({ course: FIELDS[9].opts![0] });
  const [err, setErr] = useState<Record<string, string>>({}), [busy, setBusy] = useState(false), [done, setDone] = useState(false), [fail, setFail] = useState('');
  const set = (k: string, x: any) => setV(p => ({ ...p, [k]: x }));
  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => { ev.preventDefault(); const form = ev.currentTarget; const e = validate(v); setErr(e); setFail('');
    if (Object.keys(e).length) { document.getElementById(Object.keys(e)[0])?.focus(); return; }
    setBusy(true);
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      console.log('EMAILJS SUCCESS:', result.status, result.text);
      form.reset();
      setV({ course: FIELDS[9].opts![0] });
      setErr({});
      setDone(true);
    } catch (error: any) {
      console.error('EMAILJS ERROR:', error);
      console.error('EMAILJS ERROR TEXT:', error?.text);
      console.error('EMAILJS ERROR STATUS:', error?.status);
      setFail(`EmailJS Error: ${error?.text || 'Unknown error'}`);
    } finally {
      setBusy(false);
    }
  };
  const inp = 'w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-base focus:border-gold';
  return (<section id="register" className="sec max-w-4xl">
    <div className="mb-10 text-center"><h2 className="h2">Start Your Trading Learning Journey</h2><p className="mt-3 text-white/60">Register for the 60-Day Blazzing Bull Academy Program</p>
      <p className="mt-4 text-gold">Course Fee: {SITE.fee} &nbsp;|&nbsp; Duration: {SITE.duration}</p></div>
    <div className="card p-6 md:p-10 hover:translate-y-0">
    {done ? (<div role="status" className="py-8 text-center"><h3 className="font-display text-2xl font-bold text-bull">Registration Successful! We will contact you soon.</h3>
      <p className="mx-auto mt-3 max-w-md text-white/70">Thank you for registering with Blazzing Bull Academy. Our team will contact you shortly.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3"><a className="btn-gold" href={SITE.tel}>Call Us</a><a className="btn-line" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp Us</a><a className="btn-line" href={SITE.telegram} target="_blank" rel="noopener noreferrer">Join Telegram</a></div></div>) : (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid gap-5 md:grid-cols-2">
      <input type="hidden" name="submission_type" value="Registration" />
      <input type="hidden" name="consent" value={v.consent ? 'Yes' : 'No'} />
      {FIELDS.map(f => <div key={f.k} className={f.area ? 'md:col-span-2' : ''}>
        <label htmlFor={f.k} className="mb-1.5 block text-sm text-white/70">{f.l}{f.req && <span className="text-gold"> *</span>}</label>
        {f.opts ? <select id={f.k} name={f.name} className={inp} value={v[f.k] ?? ''} onChange={e => set(f.k, e.target.value)} aria-invalid={!!err[f.k]}><option value="">Select…</option>{f.opts.map(o => <option key={o}>{o}</option>)}</select>
          : f.area ? <textarea id={f.k} name={f.name} rows={3} className={inp} onChange={e => set(f.k, e.target.value)} />
          : <input id={f.k} name={f.name} type={f.t ?? 'text'} inputMode={f.t === 'tel' ? 'numeric' : undefined} maxLength={f.t === 'tel' ? 10 : undefined} autoComplete={f.k === 'email' ? 'email' : f.t === 'tel' ? 'tel' : undefined} className={inp} onChange={e => set(f.k, f.t === 'tel' ? e.target.value.replace(/\D/g, '') : e.target.value)} value={v[f.k] ?? ''} aria-invalid={!!err[f.k]} />}
        {err[f.k] && <p role="alert" className="mt-1 text-sm text-red-400">{err[f.k]}</p>}</div>)}
      <div className="md:col-span-2"><label className="flex items-start gap-3 text-sm text-white/70"><input id="consent" type="checkbox" className="mt-1 h-5 w-5 accent-[#F5B301]" onChange={e => set('consent', e.target.checked)} />
        <span>I agree to the <a href="#/terms" className="text-gold underline">Terms & Conditions</a>, <a href="#/privacy" className="text-gold underline">Privacy Policy</a> and <a href="#/risk" className="text-gold underline">Risk Disclaimer</a>.</span></label>
        {err.consent && <p role="alert" className="mt-1 text-sm text-red-400">{err.consent}</p>}</div>
      {fail && <p role="alert" className="md:col-span-2 text-red-400">{fail}</p>}
      <button disabled={busy} className="btn-gold md:col-span-2 disabled:opacity-60">{busy ? 'Sending...' : 'Submit Registration'}</button>
      <div className="md:col-span-2"><Disclaimer /></div></form>)}</div></section>);
}
