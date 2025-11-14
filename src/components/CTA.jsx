import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1f] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.15),transparent_45%)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-10 sm:px-10 backdrop-blur">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Start your journey today</h3>
              <p className="mt-2 text-white/70">Join thousands of learners levelling up with SUNIKA EDUSPHERE. Get lifetime access and community support.</p>
            </div>
            <div className="flex items-center">
              <motion.a
                whileHover={{ y: -2 }}
                href="/courses"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-gray-900 shadow-lg transition hover:shadow-xl"
              >
                Explore Programs
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
