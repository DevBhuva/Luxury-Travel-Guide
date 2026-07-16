import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";

const NAV_LINKS = [
  { href: "#destinations", label: "Destinations" },
  { href: "#experiences", label: "Experiences" },
  { href: "#membership", label: "Membership" },
  { href: "#contact",     label: "Contact" },
];

export function NavBar() {
  const { scrollY } = useScroll();
  const lastY = useRef(0);
  const [hidden, setHidden]       = useState(false);
  const [drawerOpen, setDrawer]   = useState(false);
  const [activeLink, setActive]   = useState("");

  // Continuous scroll-driven values
  const navWidth    = useTransform(scrollY, [0, 200], ["100%", "80%"]);
  const paddingY    = useTransform(scrollY, [0, 200], [18, 10]);
  const paddingX    = useTransform(scrollY, [0, 200], [32, 24]);
  const navTop      = useTransform(scrollY, [0, 200], [24, 12]);
  const bgOpacity   = useTransform(scrollY, [0, 200], [0.75, 0.96]);
  const shadowOp    = useTransform(scrollY, [0, 200], [0.10, 0.22]);
  const borderOp    = useTransform(scrollY, [0, 200], [0.04, 0.08]);
  const logoScale   = useTransform(scrollY, [0, 200], [1, 0.92]);

  const background  = useTransform(bgOpacity, (v) => `rgba(250, 248, 244, ${v})`);
  const boxShadow   = useTransform(shadowOp,  (v) => `0 20px 50px rgba(0,0,0,${v})`);
  const borderColor = useTransform(borderOp,  (v) => `rgba(0,0,0,${v})`);

  const spring      = { stiffness: 300, damping: 32, mass: 0.6 };
  const sWidth      = useSpring(navWidth,  spring);
  const sPaddingY   = useSpring(paddingY,  spring);
  const sPaddingX   = useSpring(paddingX,  spring);
  const sTop        = useSpring(navTop,    spring);

  // Hide on fast scroll-down, reveal on scroll-up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const delta = latest - lastY.current;
    if (latest < 80)       setHidden(false);
    else if (delta > 4)    setHidden(true);
    else if (delta < -4)   setHidden(false);
    lastY.current = latest;
  });

  const handleInquire = () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -120 : 0, opacity: 1, top: sTop }}
        transition={{
          y:       { type: "spring", stiffness: 260, damping: 30 },
          opacity: { duration: 1, ease: [0.16, 1, 0.3, 1] },
        }}
        style={{
          width: sWidth,
          paddingTop:    sPaddingY,
          paddingBottom: sPaddingY,
          paddingLeft:   sPaddingX,
          paddingRight:  sPaddingX,
          background,
          boxShadow,
          borderColor,
        }}
        className="fixed left-1/2 -translate-x-1/2 z-50 max-w-5xl flex items-center justify-between rounded-full border backdrop-blur-2xl"
      >
        {/* Logo */}
        <motion.a
          href="#"
          style={{ scale: logoScale }}
          className="font-serif text-lg md:text-xl tracking-wide flex-shrink-0 text-[#1A1A1A] origin-left"
        >
          Exotica
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-9 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className="relative text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors duration-300 group"
            >
              {link.label}
              <span
                className={`absolute left-0 -bottom-1 h-px bg-[#1A1A1A] transition-all duration-300 ease-out ${
                  activeLink === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleInquire}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="relative hidden md:block overflow-hidden px-7 py-2.5 rounded-full text-sm font-semibold bg-[#1A1A1A] text-white shadow-[0_10px_25px_rgba(0,0,0,0.25)] hover:bg-black transition-colors duration-300 flex-shrink-0"
          >
            <span className="absolute inset-0 btn-shine pointer-events-none" />
            Inquire
          </motion.button>

          {/* Hamburger */}
          <button
            onClick={() => setDrawer((v) => !v)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle menu"
          >
            <motion.span animate={{ rotate: drawerOpen ? 45 : 0, y: drawerOpen ? 7 : 0 }} className="block w-5 h-[1.5px] bg-[#1A1A1A] origin-center transition-all" />
            <motion.span animate={{ opacity: drawerOpen ? 0 : 1 }} className="block w-5 h-[1.5px] bg-[#1A1A1A]" />
            <motion.span animate={{ rotate: drawerOpen ? -45 : 0, y: drawerOpen ? -7 : 0 }} className="block w-5 h-[1.5px] bg-[#1A1A1A] origin-center transition-all" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 inset-x-0 z-40 pt-28 pb-10 px-6 bg-[rgba(250,248,244,0.97)] backdrop-blur-2xl border-b border-black/5 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  onClick={() => { setActive(link.href); setDrawer(false); }}
                  className="font-serif text-2xl text-[#1A1A1A] hover:text-[#D4AF37] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.07 + 0.05 }}
                onClick={() => { setDrawer(false); handleInquire(); }}
                className="mt-4 w-full py-4 rounded-full text-sm font-semibold bg-[#1A1A1A] text-white tracking-wide"
              >
                Inquire
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
