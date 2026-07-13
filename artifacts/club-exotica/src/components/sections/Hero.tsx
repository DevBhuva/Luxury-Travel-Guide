import { motion } from 'framer-motion';
import heroImg from '@assets/generated_images/hero.jpg';

export function Hero() {
  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <img 
          src={heroImg} 
          alt="Luxury Island Aerial View" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-[calc(100%-2rem)] max-w-4xl rounded-[40px] glass-panel-dark p-10 md:p-20 text-center"
      >
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1] tracking-tight">
          The World,<br/>Perfectly Curated.
        </h1>
        <p className="font-sans text-base md:text-lg text-white/80 mb-10 font-light tracking-wide max-w-xl mx-auto">
          Private journeys, iconic destinations, extraordinary experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-primary font-medium tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_4px_14px_rgba(255,255,255,0.25)]">
            Begin Your Journey
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/30 text-white font-medium tracking-wide hover:bg-white/10 hover:border-white/50 transition-all duration-300">
            Explore Collection
          </button>
        </div>
      </motion.div>
    </section>
  );
}
