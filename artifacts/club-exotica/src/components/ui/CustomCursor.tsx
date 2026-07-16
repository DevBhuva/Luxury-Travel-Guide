import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  const springConfig = { stiffness: 600, damping: 32, mass: 0.4 };
  const dotX = useSpring(mx, { stiffness: 1200, damping: 40 });
  const dotY = useSpring(my, { stiffness: 1200, damping: 40 });
  const ringX = useSpring(mx, springConfig);
  const ringY = useSpring(my, springConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const enter = (e: MouseEvent) => {
      const el = (e.target as Element).closest('button, a, [role="button"], input, textarea');
      setHovered(!!el);
    };

    const down = () => setClicked(true);
    const up = () => setClicked(false);
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", enter);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", enter);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [visible, mx, my]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" style={{ mixBlendMode: "normal" }}>
      {/* Outer ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicked ? 0.75 : hovered ? 1.8 : 1,
          borderColor: hovered ? "rgba(212,175,55,0.9)" : "rgba(212,175,55,0.45)",
        }}
        transition={{ scale: { type: "spring", stiffness: 400, damping: 28 } }}
        className="absolute w-9 h-9 rounded-full border border-[rgba(212,175,55,0.45)]"
      />
      {/* Gold dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicked ? 1.8 : hovered ? 0 : 1,
          background: hovered
            ? "rgba(212,175,55,1)"
            : "rgba(212,175,55,0.9)",
        }}
        className="absolute w-1.5 h-1.5 rounded-full bg-[#D4AF37]"
      />
    </div>
  );
}
