import { motion } from "framer-motion";

const TUSCANY_BG = "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1920&q=80";

const posts = [
  {
    category: "Destinations",
    title: "Inside the World's Most Private Island Retreats",
    excerpt:
      "From the coral atolls of the Maldives to Fiji's hidden archipelagos — a curated guide to the most secluded sanctuaries on earth.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    date: "June 12, 2025",
    readTime: "6 min read",
  },
  {
    category: "Culture",
    title: "Kyoto in Winter: The Art of Silence and Snow",
    excerpt:
      "When the tourists leave and the temple gardens fill with snow, a different Kyoto reveals itself — ancient, hushed, and infinitely more beautiful.",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    date: "April 3, 2025",
    readTime: "8 min read",
  },
  {
    category: "Wellness",
    title: "The Healing Architecture of Remote Luxury Spas",
    excerpt:
      "How the world's great wellness sanctuaries use landscape, light, and ritual to create something closer to transformation than relaxation.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    date: "March 18, 2025",
    readTime: "5 min read",
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative w-full overflow-hidden py-36 px-4 md:px-8 bg-black">
      {/* Tuscany countryside background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="section-bg-img" style={{ backgroundImage: `url('${TUSCANY_BG}')` }} />
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
          className="mb-20 text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] gold-gradient-text font-semibold mb-4 block">The Journal</span>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-4">Travel Stories</h2>
          <p className="text-white/55 font-light max-w-md mx-auto">
            Dispatches from the edge of the world, written for those who travel intentionally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass-panel rounded-[32px] overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden rounded-t-[32px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full bg-[rgba(212,175,55,0.2)] border border-[rgba(212,175,55,0.35)] text-[#F2D675]">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-center gap-3 text-white/35 text-xs mb-4 font-light">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/25" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-serif text-xl text-white mb-3 leading-snug group-hover:text-[#F2D675] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-white/50 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.15em] group-hover:gap-4 transition-all duration-300">
                  Read More
                  <span className="transition-all duration-300">→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
