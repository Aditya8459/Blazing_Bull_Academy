import { ArrowRight } from 'lucide-react';
import { SITE } from '../config/site';
import { go } from './ui';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,179,1,0.10),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.08),transparent_28%)]" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1fr_0.9fr]">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-gold/30 bg-black/20 px-3 py-2 backdrop-blur-sm">
            <img src={SITE.logo} alt="Blazzing Bull Academy logo" className="h-12 w-12 rounded-xl border border-gold/40 object-cover" />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Blazzing Bull</p>
              <p className="text-sm font-semibold text-gold">Academy</p>
            </div>
          </div>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Learn Forex
            <span className="mt-2 block text-gold">The Smart Way</span>
          </h1>

          <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">
            Simple lessons. Clear strategy. Real discipline.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="btn-gold" onClick={() => go('register')}>
              Join Now
              <ArrowRight size={18} />
            </button>
            <button className="btn-line" onClick={() => go('courses')}>Explore</button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px]">
          <div className="absolute -inset-5 rounded-[2rem] border border-gold/10 bg-gold/[0.04] blur-2xl" aria-hidden />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1220] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between gap-3">
              <div className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-gold">
                Limited Seats
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                60 Days
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-gold/20 bg-gradient-to-br from-gold/15 via-white/[0.02] to-transparent p-5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Program</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white">Forex Learning</h2>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Learn price action, strategy, risk management, and discipline with a structured trading roadmap.
              </p>

              <div className="mt-6 space-y-3 text-sm text-white/80">
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-3 py-2">
                  <span>Course Fee</span>
                  <span className="font-semibold text-gold">₹15,000</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-3 py-2">
                  <span>Mentor Support</span>
                  <span className="font-semibold text-white">Included</span>
                </div>
              </div>
            </div>

            <button className="btn-gold mt-6 w-full" onClick={() => go('register')}>
              Register Now
              <ArrowRight size={18} />
            </button>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-center text-sm text-white/70">
              <span className="font-semibold text-gold">Only 25 seats</span> left for this batch
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

