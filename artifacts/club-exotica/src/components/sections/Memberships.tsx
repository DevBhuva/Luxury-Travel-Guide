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

export function Memberships() {
  return (
    <section id="membership" className="py-32 px-4 md:px-8 max-w-6xl mx-auto luxury-gradient-bg rounded-[48px] my-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-20"
      >
        <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">By Invitation</span>
        <h2 className="font-serif text-4xl md:text-6xl text-primary mb-6">The Society</h2>
        <p className="text-muted-foreground font-light tracking-wide max-w-xl mx-auto">
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
                ? 'bg-primary text-white shadow-xl' 
                : 'glass-panel bg-white'
            }`}
          >
            {tier.highlight && (
              <div className="absolute inset-0 rounded-[32px] border-[0.5px] border-[#C8A96A]/40 pointer-events-none" />
            )}
            
            <h3 className={`font-serif text-3xl mb-2 ${tier.highlight ? 'gold-gradient-text' : 'text-primary'}`}>
              {tier.name}
            </h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className={`text-4xl font-light ${tier.highlight ? 'text-white' : 'text-primary'}`}>{tier.price}</span>
              <span className={`text-sm ${tier.highlight ? 'text-white/60' : 'text-muted-foreground'}`}>/ {tier.frequency}</span>
            </div>
            
            <p className={`text-sm font-light leading-relaxed mb-10 ${tier.highlight ? 'text-white/80' : 'text-secondary'}`}>
              {tier.description}
            </p>

            <ul className="space-y-4 mb-12">
              {tier.features.map((feat, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className={`mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full ${tier.highlight ? 'bg-[#C8A96A]' : 'bg-primary'}`} />
                  <span className={`text-sm ${tier.highlight ? 'text-white/90' : 'text-foreground/80'}`}>{feat}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-[18px] rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 ${
              tier.highlight 
                ? 'bg-[linear-gradient(135deg,#D9C49A,#C8A96A,#B88A2F)] text-white shadow-[0_20px_50px_rgba(184,138,47,0.30)] hover:bg-[linear-gradient(135deg,#C8A96A,#B88A2F,#9E7420)]' 
                : 'bg-muted text-primary hover:bg-[#EAE6DF]'
            }`}>
              Request Invitation
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
