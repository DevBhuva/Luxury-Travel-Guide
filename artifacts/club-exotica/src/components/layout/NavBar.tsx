import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";

const NAV_LINKS = [
  { href: "#destinations", label: "Destinations" },
  { href: "#experiences", label: "Experiences" },
  { href: "#membership", label: "Membership" },
];

export function NavBar() {
  const { scrollY } = useScroll();
  const lastY = useRef(0);
  const [hidden, setHidden] = useState(false);

  // Continuous, scroll-driven interpolation instead of a hard on/off snap.
  const navWidth = useTransform(scrollY, [0, 200], ["100%", "82%"]);
  const navPaddingY = useTransform(scrollY, [0, 200], [18, 10]);
  const navPaddingX = useTransform(scrollY, [0, 200], [32, 24]);
  const navTop = useTransform(scrollY, [0, 200], [24, 12]);
  const bgOpacity = useTransform(scrollY, [0, 200], [0.75, 0.96]);
  const shadowOpacity = useTransform(scrollY, [0, 200], [0.1, 0.22]);
  const borderOpacity = useTransform(scrollY, [0, 200], [0.04, 0.08]);
  const logoScale = useTransform(scrollY, [0, 200], [1, 0.92]);

  const background = useTransform(
    bgOpacity,
    (v) => `rgba(250, 248, 244, ${v})`
  );
  const boxShadow = useTransform(
    shadowOpacity,
    (v) => `0 20px 50px rgba(0, 0, 0, ${v})`
  );
  const borderColor = useTransform(
    borderOpacity,
    (v) => `rgba(0, 0, 0, ${v})`
  );

  const springConfig = { stiffness: 300, damping: 32, mass: 0.6 };
  const smoothWidth = useSpring(navWidth, springConfig);
  const smoothPaddingY = useSpring(navPaddingY, springConfig);
  const smoothPaddingX = useSpring(navPaddingX, springConfig);
  const smoothTop = useSpring(navTop, springConfig);

  // Hide on scroll down, reveal on scroll up — like Apple's site nav.
  useMotionValueEvent(scrollY, "change", (latest) => {
    const delta = latest - lastY.current;
    if (latest < 80) {
      setHidden(false);
    } else if (delta > 4) {
      setHidden(true);
    } else if (delta < -4) {
      setHidden(false);
    }
    lastY.current = latest;
  });

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: hidden ? -120 : 0,
        opacity: 1,
        top: smoothTop,
      }}
      transition={{
        y: { type: "spring", stiffness: 260, damping: 30 },
        opacity: { duration: 1, ease: [0.16, 1, 0.3, 1] },
      }}
      style={{
        width: smoothWidth,
        paddingTop: smoothPaddingY,
        paddingBottom: smoothPaddingY,
        paddingLeft: smoothPaddingX,
        paddingRight: smoothPaddingX,
        background,
        boxShadow,
        borderColor,
      }}
      className="fixed left-1/2 -translate-x-1/2 z-50 max-w-5xl flex items-center justify-between rounded-full border backdrop-blur-2xl"
    >
      <motion.a
        href="#"
        style={{ scale: logoScale }}
        className="font-serif text-lg md:text-xl tracking-wide flex-shrink-0 text-[#1A1A1A] origin-left"
      >
        Exotica
      </motion.a>

      <div className="hidden md:flex gap-9 text-sm font-medium">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative text-[#4A4A4A] transition-colors duration-300 hover:text-[#1A1A1A] group"
          >
            {link.label}
            <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#1A1A1A] transition-all duration-300 ease-out group-hover:w-full" />
          </a>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="px-7 py-2.5 md:py-3 rounded-full text-sm font-semibold bg-[#1A1A1A] text-white shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-black flex-shrink-0"
      >
        Inquire
      </motion.button>
    </motion.nav>
  );
}
