import { useEffect, useRef, ReactNode } from 'react';
import { SITE } from '../config/site';
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const r = useRef<HTMLDivElement>(null);
  useEffect(() => { const el = r.current!; const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); o.disconnect(); } }, { threshold: .12 }); o.observe(el); return () => o.disconnect(); }, []);
  return <div ref={r} className={`reveal ${className}`}>{children}</div>;
}
export const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
export const Heading = ({ id, title, sub }: { id?: string; title: string; sub?: string }) => (
  <div className="mb-12 max-w-2xl"><h2 id={id} className="h2">{title}</h2>{sub && <p className="mt-4 text-white/60">{sub}</p>}</div>);
export const Disclaimer = ({ short }: { short?: boolean }) => (
  <p className="text-xs leading-relaxed text-white/50">{short ? 'Educational program. Trading involves risk. No profit or return is guaranteed.' : <><b className="text-white/70">Risk Disclaimer: </b>{SITE.disclaimer}</>}</p>);
