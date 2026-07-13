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

export function Experiences() {
  return (
    <section id="experiences" className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-24 text-center">
        <h2 className="font-serif text-4xl md:text-6xl text-primary mb-6">Curated Escapes</h2>
        <p className="text-muted-foreground font-light tracking-wide max-w-xl mx-auto">
          We do not sell trips. We design narratives, tailored entirely to your rhythm.
        </p>
      </div>

      <div className="space-y-32">
        {stories.map((story, i) => {
          const isEven = i % 2 === 0;
          return (
            <div key={story.title} className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${isEven ? '' : 'md:flex-row-reverse'}`}>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:w-3/5 rounded-[40px] overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.06)] aspect-[4/3] md:aspect-auto md:h-[600px]"
              >
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:w-2/5 max-w-md"
              >
                <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
                  {story.category}
                </span>
                <h3 className="font-serif text-3xl md:text-5xl text-primary mb-6 leading-tight">
                  {story.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-8">
                  {story.text}
                </p>
                <button className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.1em] text-primary hover:text-accent transition-colors group">
                  Discover
                  <span className="w-8 h-[1px] bg-primary group-hover:bg-accent group-hover:w-12 transition-all duration-300 block" />
                </button>
              </motion.div>

            </div>
          )
        })}
      </div>
    </section>
  );
}
