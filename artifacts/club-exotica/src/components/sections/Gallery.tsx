import { motion } from 'framer-motion';
import gallery1 from '@assets/generated_images/gallery_1.jpg';
import gallery2 from '@assets/generated_images/gallery_2.jpg';
import destAmalfi from '@assets/generated_images/dest_amalfi.jpg';
import expWellness from '@assets/generated_images/exp_wellness.jpg';

const images = [
  { src: gallery1, alt: 'Luxury Yacht Deck', span: 'col-span-1 md:col-span-2 row-span-2', label: 'The Mediterranean Fleet' },
  { src: gallery2, alt: 'Private Dining', span: 'col-span-1 row-span-1', label: 'Secluded Gastronomy' },
  { src: destAmalfi, alt: 'Amalfi Coast', span: 'col-span-1 row-span-2', label: 'Cliffside Estates' },
  { src: expWellness, alt: 'Wellness', span: 'col-span-1 md:col-span-2 row-span-1', label: 'Restorative Silence' },
];

const TROPICAL_BG = 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=80';

export function Gallery() {
  return (
    <section className="relative w-full overflow-hidden py-32 px-4 md:px-8 bg-black">
      {/* Tropical island background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="section-bg-img" style={{ backgroundImage: `url('${TROPICAL_BG}')` }} />
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
          transition={{ duration: 1 }}
          className="mb-16 text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] gold-gradient-text font-semibold mb-4 block">A Visual Journey</span>
          <h2 className="font-serif text-4xl md:text-6xl text-white">Moments</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-4 md:gap-6 md:h-[800px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-[36px] overflow-hidden premium-shadow premium-shadow-hover ${img.span} border border-white/8`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 opacity-80 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-white font-medium tracking-wide bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/10">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}