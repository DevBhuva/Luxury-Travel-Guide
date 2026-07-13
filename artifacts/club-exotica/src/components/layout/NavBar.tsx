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
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-500 ease-out px-6 md:px-8 py-3.5 flex items-center justify-between rounded-full border border-black/5 bg-[rgba(250,248,244,0.92)] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
    >
      <a
        href="#"
        className="font-serif text-lg md:text-xl tracking-wide flex-shrink-0 text-[#1A1A1A]"
      >
        Exotica
      </a>

      <div className="hidden md:flex gap-9 text-sm font-medium">
        <a
          href="#destinations"
          className="text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors duration-300"
        >
          Destinations
        </a>
        <a
          href="#experiences"
          className="text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors duration-300"
        >
          Experiences
        </a>
        <a
          href="#membership"
          className="text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors duration-300"
        >
          Membership
        </a>
      </div>

      <button className="px-7 py-2.5 md:py-3 rounded-full text-sm font-semibold bg-[#1A1A1A] text-white shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 hover:bg-black">
        Inquire
      </button>
    </motion.nav>
  );
}
