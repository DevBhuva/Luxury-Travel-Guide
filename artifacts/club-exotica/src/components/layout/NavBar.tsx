import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export function NavBar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-6 left-0 right-0 mx-auto z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-500 ease-out px-8 py-4 flex items-center justify-between ${
        isScrolled 
          ? 'nav-pill text-primary border-border' 
          : 'bg-transparent text-white border-transparent'
      }`}
    >
      <div className={`font-serif text-xl tracking-wide flex-shrink-0 transition-colors duration-500 ${isScrolled ? 'gold-gradient-text' : 'text-white'}`}>
        CLUB EXOTICA
      </div>
      
      <div className="hidden md:flex gap-10 text-xs font-semibold uppercase tracking-[0.2em]">
        <a href="#destinations" className="text-white hover:text-accent transition-colors duration-300">Destinations</a>
        <a href="#experiences" className="text-white hover:text-accent transition-colors duration-300">Experiences</a>
        <a href="#membership" className="text-white hover:text-accent transition-colors duration-300">Membership</a>
      </div>
      
      <button className={`px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-300 ${
        isScrolled 
          ? 'bg-[linear-gradient(135deg,var(--champagne),var(--gold-primary),var(--gold-dark))] text-[#0B0B0D] shadow-[0_10px_30px_var(--shadow-gold)] hover:scale-105 hover:shadow-[0_15px_40px_var(--shadow-gold)]' 
          : 'bg-white text-[#0B0B0D] shadow-lg hover:scale-105'
      }`}>
        Inquire
      </button>
    </motion.nav>
  );
}