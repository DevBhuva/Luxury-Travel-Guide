import { useState } from 'react';

const CITY_BG = 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80';

export function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <footer className="relative w-full overflow-hidden pt-40 pb-16 px-4 md:px-8 bg-black">
      {/* Night city skyline background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="section-bg-img" style={{ backgroundImage: `url('${CITY_BG}')` }} />
        <div className="section-overlay" />
        <div className="section-vignette" />
        <div className="fade-top" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="glass-panel p-12 md:p-20 overflow-hidden relative">
          {/* subtle gold bloom */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)' }} />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 relative z-10">
            <div className="col-span-1 md:col-span-5">
              <h4 className="font-serif text-2xl mb-6 gold-gradient-text">CLUB EXOTICA</h4>
              <p className="text-white/60 font-light max-w-sm mb-10 leading-relaxed">
                The world's most guarded sanctuaries and private estates, curated for an exclusive society of travelers.
              </p>
              <form onSubmit={handleSubmit} className="relative max-w-sm">
                {!submitted ? (
                  <>
                    <input
                      type="email"
                      placeholder="Inquire about membership"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-[22px] py-4 pl-6 pr-32 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--border-gold)] transition-colors"
                    />
                    <button type="submit" className="absolute right-2 top-2 bottom-2 bg-[linear-gradient(135deg,var(--champagne),var(--gold-primary),var(--gold-dark))] text-[#0B0B0D] rounded-full px-6 text-xs font-semibold uppercase tracking-wider hover:scale-105 transition-all">
                      Submit
                    </button>
                  </>
                ) : (
                  <div className="text-sm text-[var(--gold-light)] py-4 px-6 border border-[var(--border-gold)] rounded-[22px] bg-[var(--gold-primary)]/10">
                    Your inquiry has been received. Our concierge will reach out shortly.
                  </div>
                )}
              </form>
            </div>

            <div className="col-span-1 md:col-span-2 md:col-start-7">
              <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35 mb-6">Collection</h5>
              <ul className="space-y-4">
                {['Destinations', 'Private Islands', 'Expeditions', 'Yachts'].map(l => (
                  <li key={l}><a href="#" className="text-white/55 hover:text-[var(--gold-light)] transition-colors text-sm">{l}</a></li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35 mb-6">Society</h5>
              <ul className="space-y-4">
                {['Membership', 'The Journal', 'Events', 'Partners'].map(l => (
                  <li key={l}><a href="#" className="text-white/55 hover:text-[var(--gold-light)] transition-colors text-sm">{l}</a></li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35 mb-6">Contact</h5>
              <ul className="space-y-4">
                {['concierge@exotica.com', '+1 (800) 555-0199', 'Press'].map(l => (
                  <li key={l}><a href="#" className="text-white/55 hover:text-[var(--gold-light)] transition-colors text-sm">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
            <p>© {new Date().getFullYear()} Club Exotica. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}