import { useEffect, useState } from 'react';
import { Menu, X, Instagram, Send, MessageCircle } from 'lucide-react';
import { NAV, SITE } from '../config/site';
import { go } from './ui';
export default function Navbar() {
  const [open, setOpen] = useState(false), [sc, setSc] = useState(false);
  useEffect(() => { const f = () => setSc(scrollY > 20); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, []);
  const nav = (id: string) => { setOpen(false); go(id); };
  const soc = [[Instagram, SITE.instagram, 'Instagram'], [Send, SITE.telegram, 'Telegram'], [MessageCircle, SITE.whatsapp, 'WhatsApp']] as const;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${sc || open ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <button onClick={() => nav('home')} aria-label="Blazzing Bull Academy home"><img src={SITE.logo} alt="Blazzing Bull Academy logo" className="h-11 w-11 rounded-lg object-cover" /></button>
        <nav aria-label="Main" className="hidden xl:flex gap-5 text-sm text-white/75">
          {NAV.map(([l, id]) => <button key={id} onClick={() => nav(id)} className="hover:text-gold transition">{l}</button>)}</nav>
        <div className="hidden xl:flex items-center gap-3">
          {soc.map(([I, h, l]) => <a key={l} href={h} target="_blank" rel="noopener noreferrer" aria-label={l} className="text-white/60 hover:text-gold"><I size={18} /></a>)}
          <button onClick={() => nav('register')} className="btn-gold !py-2 !px-5">Join Now</button></div>
        <button className="xl:hidden p-2" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>
      <div className={`xl:hidden grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}><div className="overflow-hidden">
        <div className="px-5 pb-6 flex flex-col gap-1">
          {NAV.map(([l, id]) => <button key={id} onClick={() => nav(id)} className="py-3 text-left text-lg border-b border-white/5">{l}</button>)}
          <div className="flex items-center gap-5 pt-4">{soc.map(([I, h, l]) => <a key={l} href={h} aria-label={l} className="text-gold"><I /></a>)}
            <button onClick={() => nav('register')} className="btn-gold ml-auto !py-2">Join Now</button></div></div></div></div>
    </header>);
}
