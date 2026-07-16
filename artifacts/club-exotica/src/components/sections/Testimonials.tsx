import { motion } from 'framer-motion';
import portrait1 from '@assets/generated_images/portrait_1.jpg';

const AURORA_BG = 'https://images.unsplash.com/photo-1531365737765-67796548c277?w=1920&q=80';

export function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden py-40 px-4 md:px-8 bg-black">
      {/* Northern Lights background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="section-bg-img" style={{ backgroundImage: `url('${AURORA_BG}')` }} />
        <div className="section-overlay" />
        <div className="section-vignette" />
        <div className="fade-top" />
        <div className="fade-bottom" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--gold-primary)] to-transparent" />

          <img
            src={portrait1}
            alt="Customer Portrait"
            className="w-24 h-24 rounded-full object-cover mb-10 shadow-lg border border-white/10"
          />

          <p className="font-serif text-2xl md:text-4xl text-white leading-snug md:leading-tight mb-10 max-w-3xl">
            "They possess an uncanny ability to anticipate desires I didn't even know I had. It is less like booking travel and more like having your life artfully directed."
          </p>

          <div>
            <div className="font-medium text-white tracking-wide">Eleanor Harrison</div>
            <div className="text-sm text-white/50 mt-1">Club Reserve Member since 2018</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}