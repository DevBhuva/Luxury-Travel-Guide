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
      className={`fixed top-6 left-0 right-0 mx-auto z-50 w-[calc(100%-2rem)] max-w-5xl rounded-full transition-all duration-500 ease-out px-6 py-4 flex items-center justify-between ${
        isScrolled 
          ? 'glass-panel text-foreground' 
          : 'bg-transparent text-white border-transparent'
      }`}
    >
      <div className="font-serif text-xl tracking-wide flex-shrink-0">
        CLUB EXOTICA
      </div>
      
      <div className="hidden md:flex gap-10 text-xs font-medium uppercase tracking-[0.2em]">
        <a href="#destinations" className="hover:text-accent transition-colors duration-300">Destinations</a>
        <a href="#experiences" className="hover:text-accent transition-colors duration-300">Experiences</a>
        <a href="#membership" className="hover:text-accent transition-colors duration-300">Membership</a>
      </div>
      
      <button className={`px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-[0.1em] hover:scale-105 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary text-primary-foreground shadow-md' 
          : 'bg-white text-primary shadow-lg'
      }`}>
        Inquire
      </button>
    </motion.nav>
  );
}
