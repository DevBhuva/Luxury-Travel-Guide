import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const BALI_BG = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80";
const ABOUT_IMG = "https://images.unsplash.com/photo-1439130490301-25e322d88054?w=900&q=80";

const stats = [
  { value: 12, suffix: "+", label: "Years of Excellence" },
  { value: 4800, suffix: "+", label: "Journeys Curated" },
  { value: 68, suffix: "", label: "Private Destinations" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-serif text-4xl md:text-5xl gold-gradient-text">
      {display.toLocaleString()}{suffix}
    </span>
  );
}

export function About() {
  return (
    <section className="relative w-full overflow-hidden py-36 px-4 md:px-8 bg-black">
      {/* Bali resort background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="section-bg-img" style={{ backgroundImage: `url('${BALI_BG}')` }} />
        <div className="section-overlay" />
        <div className="section-vignette" />
        <div className="fade-top" />
        <div className="fade-bottom" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left — image + floating badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-[28px] overflow-hidden premium-shadow aspect-[4/5]">
              <img
                src={ABOUT_IMG}
                alt="Luxury travel experience"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[3s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* decorative gold lines */}
              <div className="absolute top-6 left-6 w-12 h-px bg-gradient-to-r from-[#D4AF37] to-transparent" />
              <div className="absolute top-6 left-6 w-px h-12 bg-gradient-to-b from-[#D4AF37] to-transparent" />
              <div className="absolute bottom-6 right-6 w-12 h-px bg-gradient-to-l from-[#D4AF37] to-transparent" />
              <div className="absolute bottom-6 right-6 w-px h-12 bg-gradient-to-t from-[#D4AF37] to-transparent" />
            </div>

            {/* Floating experience badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-4 md:-right-8 glass-panel px-6 py-4 rounded-[20px] text-center"
            >
              <div className="gold-gradient-text font-serif text-3xl font-medium">12+</div>
              <div className="text-white/60 text-xs uppercase tracking-[0.15em] mt-0.5">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Right — text + stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-xs uppercase tracking-[0.3em] gold-gradient-text font-semibold mb-4 block">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.08]">
              Crafting Journeys<br />Beyond Imagination
            </h2>

            {/* decorative gold line */}
            <div className="w-16 h-px bg-gradient-to-r from-[#D4AF37] to-transparent mb-8" />

            <p className="text-white/65 font-light leading-relaxed mb-5 text-base md:text-lg">
              Club Exotica was founded on a single belief: that the world's most extraordinary places should be experienced, not merely visited. We are architects of memory, not agents of itineraries.
            </p>
            <p className="text-white/50 font-light leading-relaxed mb-12 text-sm md:text-base">
              Every journey we design is built on deep destination knowledge, trusted local relationships cultivated over decades, and an obsessive attention to the details that transform a trip into a transformative experience.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.7 }}
                  className="glass-panel p-5 rounded-[20px] group hover:-translate-y-1 transition-transform duration-300"
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <div className="text-white/50 text-xs mt-2 font-light tracking-wide">{stat.label}</div>
                  <div className="w-0 group-hover:w-full h-px bg-gradient-to-r from-[#D4AF37] to-transparent mt-3 transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
