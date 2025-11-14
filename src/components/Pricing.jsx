import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '₹2,999',
    desc: 'Perfect to begin your journey',
    features: ['Core modules', 'Downloadable resources', 'Community access'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '₹6,999',
    desc: 'Best for career-focused learners',
    features: ['Everything in Starter', 'Projects & reviews', 'Live Q&A access'],
    highlight: true,
  },
  {
    name: 'Elite',
    price: '₹12,999',
    desc: 'For founders & power users',
    features: ['Everything in Pro', '1:1 mentorship', 'Career & portfolio support'],
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section className="relative bg-[#070a14] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.12),transparent_45%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">One-time purchase. Lifetime access.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.06 }}
              className={`relative rounded-2xl border p-6 backdrop-blur bg-white/[0.03] border-white/10 ${t.highlight ? 'ring-2 ring-indigo-400/50' : ''}`}
            >
              <div className="text-white text-lg font-semibold">{t.name}</div>
              <div className="mt-2 text-3xl font-extrabold tracking-tight text-white">{t.price}</div>
              <p className="mt-1 text-white/70 text-sm">{t.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {t.features.map(f => (
                  <li key={f} className="flex items-start gap-2"><Check className="h-4 w-4 text-emerald-400 mt-0.5" /> {f}</li>
                ))}
              </ul>
              <a href="/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-2.5 font-semibold text-gray-900 shadow hover:shadow-lg transition">Get started</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
