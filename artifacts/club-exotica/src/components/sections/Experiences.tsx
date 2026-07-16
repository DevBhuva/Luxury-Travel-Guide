import { motion } from 'framer-motion';
import expSafari from '@assets/generated_images/exp_safari.jpg';
import expWellness from '@assets/generated_images/exp_wellness.jpg';
import expAurora from '@assets/generated_images/exp_aurora.jpg';

const stories = [
  {
    title: 'The Silent Savannah',
    category: 'Safari & Conservation',
    image: expSafari,
    text: 'Wake up to the distant roar of lions in a private concession of the Serengeti. No other vehicles for miles, just you, an expert tracker, and the raw pulse of the earth.',
  },
  {
    title: 'Architects of Zen',
    category: 'Wellness Retreats',
    image: expWellness,
    text: 'A monastic sanctuary hidden in the Himalayas. Spend five days in absolute silence, attended by masters of ancient healing arts in a setting of minimalist perfection.',
  },
  {
    title: 'Lights of the Arctic',
    category: 'Extreme Frontiers',
    image: expAurora,
    text: 'Sleep beneath a dancing sky of green and violet in a heated, glass-domed observatory on the edge of the Arctic Circle. A private chef prepares local delicacies as you watch the aurora.',
  }
];

const ALPS_BG = 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920&q=80';

export function Experiences() {
  return (
    <section id="experiences" className="relative w-full overflow-hidden py-36 px-4 md:px-8 bg-black">
      {/* Swiss Alps background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="section-bg-img" style={{ backgroundImage: `url('${ALPS_BG}')` }} />
        <div className="section-overlay" />
        <div className="section-vignette" />
        <div className="fade-top" />
        <div className="fade-bottom" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] gold-gradient-text font-semibold mb-4 block">Serengeti · Himalayas · Arctic</span>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">Curated Escapes</h2>
          <p className="text-white/70 font-light tracking-wide max-w-xl mx-auto">
            We do not sell trips. We design narratives, tailored entirely to your rhythm.
          </p>
        </motion.div>

        <div className="space-y-24">
          {stories.map((story, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col md:flex-row items-center gap-10 lg:gap-16 ${isEven ? '' : 'md:flex-row-reverse'}`}
              >
                <div className="w-full md:w-3/5 rounded-[36px] overflow-hidden premium-shadow aspect-[4/3] md:aspect-auto md:h-[520px]">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full md:w-2/5"
                >
                  <div className="glass-panel p-8 md:p-10">
                    <span className="text-[var(--gold-light)] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
                      {story.category}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl text-white mb-5 leading-tight">
                      {story.title}
                    </h3>
                    <p className="text-white/65 font-light leading-relaxed mb-8 text-sm md:text-base">
                      {story.text}
                    </p>
                    <button className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-white/80 hover:text-[var(--gold-light)] transition-colors group">
                      Discover
                      <span className="w-8 h-px bg-white/40 group-hover:bg-[var(--gold-light)] group-hover:w-14 transition-all duration-300 block" />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}