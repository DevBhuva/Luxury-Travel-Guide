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
          ? 'nav-pill text-primary' 
          : 'bg-transparent text-white border-transparent'
      }`}
    >
      <div className="font-serif text-xl tracking-wide flex-shrink-0">
        CLUB EXOTICA
      </div>
      
      <div className="hidden md:flex gap-10 text-xs font-semibold uppercase tracking-[0.2em]">
        <a href="#destinations" className="hover:text-accent transition-colors duration-300">Destinations</a>
        <a href="#experiences" className="hover:text-accent transition-colors duration-300">Experiences</a>
        <a href="#membership" className="hover:text-accent transition-colors duration-300">Membership</a>
      </div>
      
      <button className={`px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-300 ${
        isScrolled 
          ? 'bg-[linear-gradient(135deg,#D9C49A,#C8A96A,#B88A2F)] text-white shadow-[0_10px_30px_rgba(184,138,47,0.30)] hover:scale-105 hover:shadow-[0_15px_40px_rgba(184,138,47,0.40)]' 
          : 'bg-white text-primary shadow-lg hover:scale-105'
      }`}>
        Inquire
      </button>
    </motion.nav>
  );
}
