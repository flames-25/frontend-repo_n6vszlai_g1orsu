import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Aarav S.', role: 'Data Analyst', quote: 'The Python track turned me from beginner to job-ready in weeks. The projects and explanations are on point.' },
  { name: 'Meera K.', role: 'Content Strategist', quote: 'Loved the cinematic lessons. I finally created a content system that scales. The community is gold.' },
  { name: 'Rohit P.', role: 'Founder', quote: 'Brand-building frameworks were a game changer. Clear, practical, and beautifully delivered.' },
]

export default function Testimonials() {
  return (
    <section className="relative bg-[#070a14] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.12),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What learners say</h2>
          <p className="mt-3 text-white/70">Real stories from our community</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur hover:bg-white/[0.06]"
            >
              <p className="text-white/80">“{t.quote}”</p>
              <div className="mt-4 text-sm font-medium text-white">{t.name}</div>
              <div className="text-xs text-white/60">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
