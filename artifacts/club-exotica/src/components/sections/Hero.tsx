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
          <button className="w-full sm:w-auto px-[38px] py-[18px] rounded-full bg-[linear-gradient(135deg,var(--champagne),var(--gold-primary),var(--gold-dark))] text-[#0B0B0D] font-semibold tracking-wide hover:scale-105 transition-all duration-300 shadow-[0_20px_50px_var(--shadow-gold)]">
            Begin Your Journey
          </button>
          <button className="w-full sm:w-auto px-[38px] py-[18px] rounded-full bg-transparent border border-white/20 text-white font-semibold tracking-wide hover:bg-white/10 hover:border-white/40 transition-all duration-300">
            Explore Collection
          </button>
        </div>
      </motion.div>
    </section>
  );
}
