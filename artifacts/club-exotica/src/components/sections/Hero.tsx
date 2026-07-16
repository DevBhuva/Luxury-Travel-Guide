import { motion } from "framer-motion";
import heroImg from "@assets/generated_images/hero.jpg";

export function Hero() {
  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-black">
      {/* Ken Burns background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <img
          src={heroImg}
          alt="Maldives Overwater Villas"
          className="w-full h-full object-cover"
          style={{ animation: "slowZoom 30s ease-in-out infinite alternate" }}
        />
        {/* 70% dark cinematic overlay */}
        <div className="absolute inset-0" style={{
          background: `
            linear-gradient(rgba(0,0,0,0.70), rgba(0,0,0,0.70)),
            radial-gradient(ellipse at 50% 20%, rgba(212,175,55,0.09) 0%, transparent 60%)
          `
        }} />
        {/* Vignette */}
        <div className="section-vignette" />
      </motion.div>

      {/* Bottom fade bridge to next section */}
      <div className="fade-bottom" />

      {/* Content */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-[calc(100%-2rem)] max-w-4xl rounded-[48px] glass-panel-dark p-10 md:p-20 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 1 }}
          className="text-xs uppercase tracking-[0.3em] gold-gradient-text font-semibold mb-6"
        >
          Members Only · Est. 2019
        </motion.p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.08] tracking-tight">
          The World,<br />Perfectly Curated.
        </h1>
        <p className="font-sans text-base md:text-lg text-white/75 mb-12 font-light tracking-wide max-w-xl mx-auto">
          Private journeys, iconic destinations, extraordinary experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative overflow-hidden w-full sm:w-auto px-[38px] py-[18px] rounded-full bg-[linear-gradient(135deg,var(--champagne),var(--gold-primary),var(--gold-dark))] text-[#0B0B0D] font-semibold tracking-wide transition-all duration-300 shadow-[0_20px_50px_var(--shadow-gold)]"
          >
            <span className="absolute inset-0 btn-shine pointer-events-none" />
            Begin Your Journey
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-[38px] py-[18px] rounded-full bg-transparent border border-white/20 text-white font-semibold tracking-wide hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            Explore Collection
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#D4AF37] to-transparent"
        />
      </motion.div>

      {/* Floating travel badge */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="glass-panel-dark px-5 py-4 rounded-[20px] text-center border border-white/8"
        >
          <div className="text-[#D4AF37] text-2xl mb-1">✦</div>
          <div className="text-white font-semibold text-sm">500+</div>
          <div className="text-white/45 text-[10px] uppercase tracking-[0.15em] mt-0.5">Properties</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
