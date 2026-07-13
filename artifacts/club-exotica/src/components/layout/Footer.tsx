import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) setSubmitted(true);
  };

  return (
    <footer className="px-4 md:px-8 pb-8 pt-12">
      <div className="max-w-7xl mx-auto bg-surface text-foreground rounded-[48px] p-12 md:p-20 overflow-hidden relative border border-border">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 relative z-10">
          
          <div className="col-span-1 md:col-span-5">
            <h4 className="font-serif text-2xl mb-6 gold-gradient-text">CLUB EXOTICA</h4>
            <p className="text-secondary font-light max-w-sm mb-10 leading-relaxed">
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
                    className="w-full bg-surface-light border border-border rounded-[22px] py-4 pl-6 pr-32 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-[var(--border-gold)] transition-colors"
                  />
                  <button type="submit" className="absolute right-2 top-2 bottom-2 bg-[linear-gradient(135deg,var(--champagne),var(--gold-primary),var(--gold-dark))] text-[#0B0B0D] rounded-full px-6 text-xs font-semibold uppercase tracking-wider hover:scale-105 transition-all">
                    Submit
                  </button>
                </>
              ) : (
                <div className="text-sm text-primary py-4 px-6 border border-[var(--border-gold)] rounded-[22px] bg-primary/10 inline-block">
                  Your inquiry has been received. Our concierge will reach out shortly.
                </div>
              )}
            </form>
          </div>
          
          <div className="col-span-1 md:col-span-2 md:col-start-7">
            <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-6">Collection</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Destinations</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Private Islands</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Expeditions</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Yachts</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-6">Society</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Membership</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors text-sm">The Journal</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Events</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Partners</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-6">Contact</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary hover:text-primary transition-colors text-sm">concierge@exotica.com</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors text-sm">+1 (800) 555-0199</a></li>
              <li><a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Press</a></li>
            </ul>
          </div>

        </div>
        
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Club Exotica. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}