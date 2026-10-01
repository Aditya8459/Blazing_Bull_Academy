import { SITE } from '../config/site';
import { go, Disclaimer } from './ui';
const col = 'space-y-2 text-sm text-white/60';
const B = ({ id, children }: { id: string; children: string }) => <li><button onClick={() => go(id)} className="hover:text-gold">{children}</button></li>;
export default function Footer() {
  return (<footer className="border-t border-white/10 bg-black"><div className="mx-auto max-w-7xl px-5 py-14">
    <div className="grid gap-10 md:grid-cols-5">
      <div className="md:col-span-2"><img src={SITE.logo} alt="Blazzing Bull Academy logo" loading="lazy" className="h-16 w-16 rounded-lg" />
        <p className="mt-4 max-w-sm text-sm text-white/60">Forex trading education focused on Price Action, Smart Money Concepts, Blazzing Bull Strategies, Risk Management and practical market analysis.</p></div>
      <nav aria-label="Quick links"><h3 className="mb-3 font-semibold">Quick Links</h3><ul className={col}><B id="home">Home</B><B id="about">About</B><B id="courses">Courses</B><B id="mentors">Mentors</B><B id="faq">FAQ</B><B id="register">Registration</B><B id="contact">Contact</B></ul></nav>
      <div><h3 className="mb-3 font-semibold">Learning</h3><ul className={col}>{['Price Action', 'SMC', 'Blazzing Bull Strategies', 'Risk Management', 'Trading Psychology'].map(t => <B key={t} id="strategies">{t}</B>)}</ul></div>
      <div><h3 className="mb-3 font-semibold">Contact</h3><ul className={col}>
        <li><a href={SITE.tel} className="hover:text-gold">{SITE.phone}</a></li><li><a href={SITE.mailto} className="break-all hover:text-gold">{SITE.email}</a></li>
        {[['Instagram', SITE.instagram], ['Telegram', SITE.telegram], ['WhatsApp', SITE.whatsapp], ['Google Maps', SITE.maps]].map(([l, h]) => <li key={l}><a href={h} target="_blank" rel="noopener noreferrer" className="hover:text-gold">{l}</a></li>)}</ul></div></div>
    <div className="mt-10 border-t border-white/10 pt-6"><Disclaimer />
      <div className="mt-4 flex flex-wrap justify-between gap-3 text-sm text-white/50"><p>© 2026 Blazzing Bull Academy. All Rights Reserved.</p>
        <p className="flex gap-4"><a href="#/privacy" className="hover:text-gold">Privacy Policy</a><a href="#/terms" className="hover:text-gold">Terms & Conditions</a><a href="#/risk" className="hover:text-gold">Risk Disclaimer</a></p></div></div></div></footer>);
}
