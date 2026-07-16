import { motion } from 'framer-motion';
import destKyoto from '@assets/generated_images/dest_kyoto.jpg';
import destAmalfi from '@assets/generated_images/dest_amalfi.jpg';
import destAlps from '@assets/generated_images/dest_alps.jpg';

const destinations = [
  {
    id: 1,
    title: 'Aman Kyoto',
    location: 'Kyoto, Japan',
    image: destKyoto,
    price: 'From $2,400 / night',
    rating: '5.0',
  },
  {
    id: 2,
    title: 'Villa TreVille',
    location: 'Amalfi Coast, Italy',
    image: destAmalfi,
    price: 'From $3,100 / night',
    rating: '4.9',
  },
  {
    id: 3,
    title: 'The Chedi',
    location: 'Andermatt, Switzerland',
    image: destAlps,
    price: 'From $1,800 / night',
    rating: '4.9',
  },
];

const SANTORINI_BG = 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1920&q=80';

export function Destinations() {
  return (
    <section id="destinations" className="relative w-full overflow-hidden py-36 px-4 md:px-8 bg-black">
      {/* Santorini, Greece background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="section-bg-img" style={{ backgroundImage: `url('${SANTORINI_BG}')` }} />
        <div className="section-overlay" />
        <div className="section-vignette" />
        <div className="fade-top" />
        <div className="fade-bottom" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] gold-gradient-text font-semibold mb-4 block">Santorini · Kyoto · Alps</span>
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-4">The Reserve Collection</h2>
            <p className="text-white/70 font-light tracking-wide max-w-md">
              Sanctuaries of immense beauty and absolute privacy, hand-selected for our members.
            </p>
          </div>
          <button className="text-sm font-semibold uppercase tracking-[0.1em] text-white/80 hover:text-[var(--gold-light)] transition-colors pb-1 border-b border-white/20 hover:border-[var(--gold-light)]">
            View All Destinations
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative w-full aspect-[4/5] rounded-[36px] overflow-hidden cursor-pointer premium-shadow premium-shadow-hover hover:-translate-y-3 transition-all duration-700"
            >
              <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/5 transition-colors duration-700" />
              <img
                src={dest.image}
                alt={dest.title}
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1]"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="glass-panel p-6 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-serif text-2xl text-white">{dest.title}</h3>
                    <span className="text-xs font-semibold bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full text-[var(--gold-light)] border border-white/10">★ {dest.rating}</span>
                  </div>
                  <p className="text-sm text-white/60 mb-4 font-light">{dest.location}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <span className="text-sm font-medium text-white/80">{dest.price}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--gold-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">Explore →</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}