import { motion } from 'framer-motion'
import { ShieldCheck, Sparkles, Clock, Users, Globe, GraduationCap } from 'lucide-react'

const points = [
  { icon: ShieldCheck, title: 'Job-ready Curriculum', desc: 'Industry-aligned content with projects that mirror real work.' },
  { icon: Sparkles, title: 'Cinematic Learning', desc: 'Immersive visuals, motion, and storytelling to make concepts stick.' },
  { icon: Clock, title: 'Flexible & Structured', desc: 'Self-paced videos plus live Q&A and weekly challenges.' },
  { icon: Users, title: 'Mentor Support', desc: 'Get feedback, guidance, and accountability loops.' },
  { icon: Globe, title: 'Community & Network', desc: 'Access a private community, collabs, and career rooms.' },
  { icon: GraduationCap, title: 'Certificates & Portfolios', desc: 'Showcase capstone projects to stand out to employers.' },
]

export default function WhyChoose() {
  return (
    <section className="relative bg-[#070a14] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why choose SUNIKA EDUSPHERE?</h2>
          <p className="mt-3 text-white/70">Premium design, pragmatic teaching, and relentless focus on outcomes.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.06 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur hover:bg-white/[0.06]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
