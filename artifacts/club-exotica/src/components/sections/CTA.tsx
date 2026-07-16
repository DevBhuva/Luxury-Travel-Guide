import { motion } from "framer-motion";

const PARIS_BG = "https://images.unsplash.com/photo-1502602931038-c7bb8f1c0fa5?w=1920&q=80";

export function CTA() {
  return (
    <section className="relative w-full overflow-hidden py-44 px-4 md:px-8 bg-black">
      {/* Paris landmark background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="section-bg-img" style={{ backgroundImage: `url('${PARIS_BG}')` }} />
        <div className="section-overlay" />
        <div className="section-vignette" />
        <div className="fade-top" />
        <div className="fade-bottom" />
      </div>

      {/* Floating decorative circles */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[rgba(212,175,55,0.12)] z-0"
      />
      <motion.div
        animate={{ scale: [1.08, 1, 1.08], opacity: [0.05, 0.10, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-[rgba(212,175,55,0.06)] z-0"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs uppercase tracking-[0.3em] gold-gradient-text font-semibold mb-6 block">
            Begin Your Journey
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-[1.06]">
            Your Perfect Journey<br />Awaits You
          </h2>
          <p className="text-white/60 font-light text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Every great adventure starts with a single inquiry. Our concierge team is available around the clock, for members and prospective members alike.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden px-12 py-5 rounded-full text-sm font-semibold uppercase tracking-[0.15em] text-[#0B0B0D] shadow-[0_20px_60px_rgba(212,175,55,0.35)]"
              style={{
                background: "linear-gradient(135deg, #E6C97A, #D4AF37, #A67C00)",
              }}
            >
              {/* Shine sweep */}
              <span className="absolute inset-0 btn-shine pointer-events-none" />
              Request Membership
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-12 py-5 rounded-full text-sm font-semibold uppercase tracking-[0.15em] text-white border border-white/20 hover:border-[rgba(212,175,55,0.45)] hover:text-[#F2D675] transition-all duration-300"
            >
              View Destinations
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
