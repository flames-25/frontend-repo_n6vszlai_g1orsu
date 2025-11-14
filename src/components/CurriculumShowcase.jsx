import { motion } from 'framer-motion'

const items = [
  { week: 'Week 1', title: 'Foundations & Mindset', points: ['Tools & setup', 'Learning framework', 'Goal mapping'] },
  { week: 'Week 2', title: 'Core Skills', points: ['Syntax & patterns', 'Best practices', 'Mini project'] },
  { week: 'Week 3', title: 'Real Projects', points: ['Capstone brief', 'Team workflows', 'Peer reviews'] },
  { week: 'Week 4', title: 'Launch & Growth', points: ['Portfolio packaging', 'Interview prep', 'Next steps'] },
]

export default function CurriculumShowcase() {
  return (
    <section className="relative bg-[#0a0f1f] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">A curriculum that compounds</h2>
            <p className="mt-3 text-white/70">Short, high-signal lessons layered with projects, reviews, and accountability.</p>
            <div className="mt-6 space-y-4">
              {items.map((it, i) => (
                <motion.div
                  key={it.week}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
                >
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-300">{it.week}</div>
                  <div className="mt-1 text-lg font-semibold text-white">{it.title}</div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/70">
                    {it.points.map(p => <li key={p}>{p}</li>)}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/10 to-cyan-500/20 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-cyan-600" />
              <p className="mt-4 text-white/80">Cinematic course walkthroughs, downloadable resources, and interactive practice zones.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
