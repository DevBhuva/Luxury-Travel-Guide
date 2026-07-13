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
      <div className="max-w-7xl mx-auto bg-primary text-white rounded-[40px] p-12 md:p-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 relative z-10">
          
          <div className="col-span-1 md:col-span-5">
            <h4 className="font-serif text-2xl mb-6">CLUB EXOTICA</h4>
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
                    className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-6 pr-32 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#C7A45D] transition-colors"
                  />
                  <button type="submit" className="absolute right-2 top-2 bottom-2 bg-white text-primary rounded-full px-6 text-xs font-medium uppercase tracking-wider hover:bg-[#C7A45D] hover:text-white transition-colors">
                    Submit
                  </button>
                </>
              ) : (
                <div className="text-sm text-[#C7A45D] py-4 px-6 border border-[#C7A45D]/30 rounded-full bg-[#C7A45D]/10 inline-block">
                  Your inquiry has been received. Our concierge will reach out shortly.
                </div>
              )}
            </form>
          </div>
          
          <div className="col-span-1 md:col-span-2 md:col-start-7">
            <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-6">Collection</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/80 hover:text-[#C7A45D] transition-colors text-sm">Destinations</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#C7A45D] transition-colors text-sm">Private Islands</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#C7A45D] transition-colors text-sm">Expeditions</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#C7A45D] transition-colors text-sm">Yachts</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-6">Society</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/80 hover:text-[#C7A45D] transition-colors text-sm">Membership</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#C7A45D] transition-colors text-sm">The Journal</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#C7A45D] transition-colors text-sm">Events</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#C7A45D] transition-colors text-sm">Partners</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-6">Contact</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/80 hover:text-[#C7A45D] transition-colors text-sm">concierge@exotica.com</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#C7A45D] transition-colors text-sm">+1 (800) 555-0199</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#C7A45D] transition-colors text-sm">Press</a></li>
            </ul>
          </div>

        </div>
        
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Club Exotica. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
