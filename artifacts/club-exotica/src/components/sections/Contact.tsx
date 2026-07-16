import { motion } from "framer-motion";
import { useState } from "react";

const RESORT_BG = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80";

const contactInfo = [
  { icon: "✦", label: "Concierge Line", value: "+1 (800) 555-0199" },
  { icon: "✦", label: "Email", value: "concierge@exotica.com" },
  { icon: "✦", label: "Hours", value: "24 / 7 — 365 days" },
  { icon: "✦", label: "Headquarters", value: "Geneva, Switzerland" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const fieldClass = (name: string) =>
    `w-full bg-white/5 text-white placeholder:text-white/30 rounded-[16px] px-5 py-4 text-sm font-light border transition-all duration-300 focus:outline-none ${
      focused === name
        ? "border-[rgba(212,175,55,0.6)] shadow-[0_0_20px_rgba(212,175,55,0.12)]"
        : "border-white/10 hover:border-white/20"
    }`;

  return (
    <section id="contact" className="relative w-full overflow-hidden py-36 px-4 md:px-8 bg-black">
      {/* Luxury resort lobby background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="section-bg-img" style={{ backgroundImage: `url('${RESORT_BG}')` }} />
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
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] gold-gradient-text font-semibold mb-4 block">Get In Touch</span>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-4">Contact Our Concierge</h2>
          <p className="text-white/50 font-light max-w-md mx-auto">
            Whether you have a destination in mind or simply a feeling you want to chase, we are here.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-3/5 glass-panel p-8 md:p-12 rounded-[32px]"
          >
            {!sent ? (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className={fieldClass("name")}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className={fieldClass("email")}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Destination of Interest (optional)"
                  className={fieldClass("dest")}
                  onFocus={() => setFocused("dest")}
                  onBlur={() => setFocused(null)}
                />
                <textarea
                  placeholder="Tell us about your ideal journey..."
                  rows={5}
                  required
                  className={`${fieldClass("msg")} resize-none`}
                  onFocus={() => setFocused("msg")}
                  onBlur={() => setFocused(null)}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative w-full py-5 rounded-full text-sm font-semibold uppercase tracking-[0.15em] text-[#0B0B0D] overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #E6C97A, #D4AF37, #A67C00)",
                    boxShadow: "0 20px 50px rgba(212,175,55,0.25)",
                  }}
                >
                  <span className="absolute inset-0 btn-shine pointer-events-none" />
                  Send Inquiry
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="text-4xl mb-6">✦</div>
                <h3 className="font-serif text-2xl text-white mb-3">Inquiry Received</h3>
                <p className="text-white/55 font-light">
                  A senior concierge will reach out within 24 hours to begin designing your journey.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-full lg:w-2/5 space-y-5"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.7 }}
                className="glass-panel p-6 rounded-[24px] flex items-start gap-4 group hover:-translate-y-1 hover:border-[rgba(212,175,55,0.3)] transition-all duration-400"
              >
                <span className="text-[#D4AF37] text-sm mt-0.5 flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="text-white/35 text-xs uppercase tracking-[0.15em] mb-1">{item.label}</div>
                  <div className="text-white text-sm font-medium">{item.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Map card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="glass-panel rounded-[24px] overflow-hidden"
            >
              <div
                className="h-44 w-full"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=60')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="gold-gradient-text font-serif text-xl mb-1">Geneva</div>
                    <div className="text-white/50 text-xs">Switzerland</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
