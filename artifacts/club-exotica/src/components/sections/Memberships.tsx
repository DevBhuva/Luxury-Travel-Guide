import { motion } from 'framer-motion';

const tiers = [
  {
    name: "Club Reserve",
    price: "$15,000",
    frequency: "annually",
    description: "The gateway to the world's most guarded sanctuaries and private estates.",
    features: [
      "Dedicated lifestyle concierge",
      "Priority booking at 500+ properties",
      "Complimentary upgrades upon arrival",
      "Airport fast-track & private transfers"
    ],
    highlight: false
  },
  {
    name: "Global Patron",
    price: "$45,000",
    frequency: "annually",
    description: "For those who require absolute seamlessness and unlimited imagination.",
    features: [
      "24/7 Senior Travel Director",
      "Access to off-market private islands",
      "Empty-leg private jet alerts",
      "Exclusive invitations to global events",
      "Bespoke expedition planning"
    ],
    highlight: true
  }
];

const DUBAI_BG = 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80';

export function Memberships() {
  return (
    <section id="membership" className="relative w-full overflow-hidden py-36 px-4 md:px-8 bg-black">
      {/* Dubai skyline background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="section-bg-img" style={{ backgroundImage: `url('${DUBAI_BG}')` }} />
        <div className="section-overlay" />
        <div className="section-vignette" />
        <div className="fade-top" />
        <div className="fade-bottom" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] gold-gradient-text font-semibold mb-4 block">By Invitation Only</span>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">The Society</h2>
          <p className="text-white/65 font-light tracking-wide max-w-xl mx-auto">
            Membership in Club Exotica is strictly limited to ensure unparalleled service levels for every patron.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative p-10 md:p-14 rounded-[32px] transition-all duration-500 hover:-translate-y-2 premium-shadow ${
                tier.highlight
                  ? 'bg-[linear-gradient(135deg,rgba(212,175,55,0.12),rgba(166,124,0,0.06))] border border-[var(--border-gold)] shadow-xl'
                  : 'glass-panel'
              }`}
            >
              {tier.highlight && (
                <div className="absolute inset-0 rounded-[32px] border-[0.5px] border-[var(--border-gold)] pointer-events-none" />
              )}
              <h3 className={`font-serif text-3xl mb-2 ${tier.highlight ? 'gold-gradient-text' : 'text-white'}`}>
                {tier.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-light text-white">{tier.price}</span>
                <span className="text-sm text-white/50">/ {tier.frequency}</span>
              </div>
              <p className="text-sm font-light leading-relaxed mb-10 text-white/60">{tier.description}</p>
              <ul className="space-y-4 mb-12">
                {tier.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className={`mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full ${tier.highlight ? 'bg-[var(--gold-primary)]' : 'bg-white/40'}`} />
                    <span className="text-sm text-white/65">{feat}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-[18px] rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 ${
                tier.highlight
                  ? 'bg-[linear-gradient(135deg,var(--champagne),var(--gold-primary),var(--gold-dark))] text-[#0B0B0D] shadow-[0_20px_50px_var(--shadow-gold)]'
                  : 'border border-white/15 text-white hover:border-[var(--border-gold)] hover:text-[var(--gold-light)]'
              }`}>
                Request Invitation
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}