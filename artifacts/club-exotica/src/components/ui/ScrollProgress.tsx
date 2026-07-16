import { useScroll, useSpring, motion } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[9998] origin-left"
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      css-note="gold gradient progress bar"
    >
      <div
        className="w-full h-full"
        style={{
          background:
            "linear-gradient(90deg, #A67C00, #D4AF37, #F2D675, #D4AF37)",
        }}
      />
    </motion.div>
  );
}
