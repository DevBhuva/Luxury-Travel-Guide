import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import portrait1 from '@assets/generated_images/portrait_1.jpg';

const AURORA_BG = 'https://images.unsplash.com/photo-1531365737765-67796548c277?w=1920&q=80';

const testimonials = [
  {
    quote: "They possess an uncanny ability to anticipate desires I didn't even know I had. It is less like booking travel and more like having your life artfully directed.",
    name: "Eleanor Harrison",
    role: "Club Reserve Member since 2018",
    avatar: portrait1,
    rating: 5,
  },
  {
    quote: "Every detail was attended to before I could think of asking. The Maldives journey they arranged exceeded every expectation I had — and I had very high ones.",
    name: "James Whitfield",
    role: "Global Patron Member since 2020",
    avatar: portrait1,
    rating: 5,
  },
  {
    quote: "Club Exotica doesn't sell holidays. They craft experiences that permanently alter your relationship with the world. Worth every penny, a hundred times over.",
    name: "Sophia Chen",
    role: "Club Reserve Member since 2021",
    avatar: portrait1,
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const go = (idx: number) => {
    setDir(idx > current ? 1 : -1);
    setCurrent(idx);
  };

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

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] gold-gradient-text font-semibold mb-4 block">Member Stories</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white">What Our Members Say</h2>
        </motion.div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" initial={false} custom={dir}>
            <motion.div
              key={current}
              custom={dir}
              variants={{
                enter: (d: number) => ({ x: d * 60, opacity: 0, scale: 0.97 }),
                center: { x: 0, opacity: 1, scale: 1 },
                exit: (d: number) => ({ x: d * -60, opacity: 0, scale: 0.97 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden rounded-[32px]"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--gold-primary)] to-transparent" />

              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="text-[#D4AF37] text-lg"
                  >★</motion.span>
                ))}
              </div>

              {/* Quote mark */}
              <div className="font-serif text-7xl text-[rgba(212,175,55,0.15)] leading-none mb-2 select-none">"</div>

              <p className="font-serif text-xl md:text-2xl text-white leading-relaxed mb-10 max-w-2xl">
                {testimonials[current].quote}
              </p>

              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                className="w-16 h-16 rounded-full object-cover mb-4 border border-white/10 shadow-lg"
              />
              <div className="font-medium text-white tracking-wide">{testimonials[current].name}</div>
              <div className="text-sm text-white/45 mt-1">{testimonials[current].role}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`rounded-full transition-all duration-400 ${
                i === current
                  ? 'w-8 h-2 bg-[#D4AF37]'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}