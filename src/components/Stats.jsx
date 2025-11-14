import { motion } from 'framer-motion'

const stats = [
  { value: '12k+', label: 'Learners trained' },
  { value: '92%', label: 'Career outcomes' },
  { value: '150+', label: 'Industry partners' },
  { value: '4.9/5', label: 'Average rating' },
]

export default function Stats() {
  return (
    <section className="relative bg-[#0a0f1f] py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.12),transparent_45%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{s.value}</div>
              <div className="mt-1 text-xs sm:text-sm text-white/70">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
