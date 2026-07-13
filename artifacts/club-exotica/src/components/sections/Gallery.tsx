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

export function Gallery() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-surface rounded-[48px] my-10 border border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-16 text-center"
      >
        <h2 className="font-serif text-4xl text-foreground">Moments</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-4 md:gap-6 md:h-[800px] px-4 md:px-10 pb-10">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative rounded-[36px] overflow-hidden premium-shadow premium-shadow-hover ${img.span} border border-border`}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 opacity-80 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <span className="text-white font-medium tracking-wide bg-surface/50 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-border">
                {img.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}