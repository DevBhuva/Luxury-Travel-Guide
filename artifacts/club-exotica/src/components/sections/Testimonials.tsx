import { motion } from 'framer-motion';
import portrait1 from '@assets/generated_images/portrait_1.jpg';

export function Testimonials() {
  return (
    <section className="py-32 px-4 md:px-8 bg-surface-light my-20 rounded-[48px] max-w-7xl mx-auto border border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          <img 
            src={portrait1} 
            alt="Customer Portrait" 
            className="w-24 h-24 rounded-full object-cover mb-10 shadow-lg border border-border"
          />
          
          <p className="font-serif text-2xl md:text-4xl text-foreground leading-snug md:leading-tight mb-10 max-w-3xl">
            "They possess an uncanny ability to anticipate desires I didn't even know I had. It is less like booking travel and more like having your life artfully directed."
          </p>
          
          <div>
            <div className="font-medium text-foreground tracking-wide">Eleanor Harrison</div>
            <div className="text-sm text-secondary mt-1">Club Reserve Member since 2018</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}