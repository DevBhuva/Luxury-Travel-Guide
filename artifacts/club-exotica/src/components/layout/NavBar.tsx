import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

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
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-500 ease-out px-6 md:px-8 py-3.5 flex items-center justify-between rounded-full border ${
        isScrolled
          ? "bg-[rgba(18,18,20,0.85)] backdrop-blur-2xl border-[var(--border-gold)] shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          : "bg-transparent backdrop-blur-none border-transparent"
      }`}
    >
      <a
        href="#"
        className="gold-gradient-text font-serif text-lg md:text-xl tracking-wide flex-shrink-0"
      >
        CLUB EXOTICA
      </a>

      <div className="hidden md:flex gap-10 text-xs font-semibold uppercase tracking-[0.2em]">
        <a
          href="#destinations"
          className="text-white/80 hover:text-[var(--gold-light)] transition-colors duration-300"
        >
          Destinations
        </a>
        <a
          href="#experiences"
          className="text-white/80 hover:text-[var(--gold-light)] transition-colors duration-300"
        >
          Experiences
        </a>
        <a
          href="#membership"
          className="text-white/80 hover:text-[var(--gold-light)] transition-colors duration-300"
        >
          Membership
        </a>
      </div>

      <button className="px-6 md:px-8 py-2.5 md:py-3 rounded-full text-xs font-semibold uppercase tracking-[0.1em] bg-[linear-gradient(135deg,var(--champagne),var(--gold-primary),var(--gold-dark))] text-[#0B0B0D] shadow-[0_10px_30px_var(--shadow-gold)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_var(--shadow-gold)]">
        Inquire
      </button>
    </motion.nav>
  );
}
